import axios from 'axios'

/**
 * A helper class that allows use to get the current and previous release 
 * for a given repo and tag from the GitHub API.
 */
class GitHub {
  constructor({ repository, tag, token }) {
    this.repository = repository
    this.token = token
    this.tag = tag
    // set axios to use the access token for all requests
    axios.defaults.headers.common['Authorization'] = `token ${token}`
  }

  /**
   * Returns the current and previous release for the given tag and repo
   */
  async relevantReleases() {
    // finds all releases
    let releases = await this.getAllReleases()
    // filters down to just non-prereleases
    releases = releases.filter(release => !release.prerelease)
    // fetches the current and previous release
    return this.getRelevantReleases({ releases })
  }

  // PRIVATE

  /**
   * Returns all the releases for this repo recursively
   * 
   * @param {Number} page the page to fetch
   */
  async getAllReleases(page=1) {
    // Get the current page of releases
    const response = await axios.get(`https://api.github.com/repos/${this.repository}/releases?page=${page}`)
    const releases = response.data
    // If this page is empty, return the releases
    if (releases.length === 0) { return releases }
    // Otherwise, combine these releases with the next pages of releases
    else return [
      ...releases, 
      ...(await this.getAllReleases( page+1 ))
    ]
  }

  /**
   * Returns the current and previous release given a list of releases 
   * 
   * @param {Array} releases all the releases for a repo 
   */
  getRelevantReleases({ releases }) {
    // Start with no current and previous releases 
    let currentRelease = null
    let previousRelease = null

    // Iterate over each release 
    releases.forEach((release, index) => {
      // When the release tag name matches the provided tag, set the values
      if (release.tag_name === this.tag) {
        currentRelease = release
        previousRelease = releases[index+1]
      }
    })
    return { currentRelease, previousRelease }
  }
}

export { GitHub }