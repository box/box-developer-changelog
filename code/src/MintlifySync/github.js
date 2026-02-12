const axios = require('axios')

const GITHUB_API_BASE_URL = 'https://api.github.com'

/**
 * Fetch release metadata for a repository and tag.
 *
 * @param {Object} params
 * @param {string} params.repository GitHub repo slug (e.g. box/box-windows-sdk-v2)
 * @param {string} params.tag Release tag (e.g. v6.4.0)
 * @param {string} [params.token] Optional token override (falls back to GITHUB_TOKEN)
 * @returns {Promise<{body: string, published_at: string, html_url: string}>}
 */
async function fetchReleaseByTag({ repository, tag, token = process.env.GITHUB_TOKEN } = {}) {
  if (!repository || typeof repository !== 'string') {
    throw new Error('Missing required "repository" (expected "owner/repo").')
  }

  if (!tag || typeof tag !== 'string') {
    throw new Error('Missing required "tag" (expected release tag like "v6.4.0").')
  }

  const headers = {
    Accept: 'application/vnd.github+json'
  }

  if (token) {
    headers.Authorization = `token ${token}`
  }

  try {
    const response = await axios.get(
      `${GITHUB_API_BASE_URL}/repos/${repository}/releases/tags/${encodeURIComponent(tag)}`,
      { headers }
    )

    return {
      body: response.data.body || '',
      published_at: response.data.published_at,
      html_url: response.data.html_url
    }
  } catch (error) {
    const status = error.response && error.response.status

    if (status === 404) {
      throw new Error(`Release "${tag}" not found for repository "${repository}".`)
    }

    if (status === 401 || status === 403) {
      throw new Error(
        `GitHub API authentication failed while fetching "${repository}" tag "${tag}". ` +
        'Check GITHUB_TOKEN permissions.'
      )
    }

    if (error.code === 'ENOTFOUND' || error.code === 'ECONNREFUSED' || error.code === 'ETIMEDOUT') {
      throw new Error(`Network error while fetching "${repository}" tag "${tag}" from GitHub API.`)
    }

    throw new Error(
      `Failed to fetch release for "${repository}" tag "${tag}": ${error.message}`
    )
  }
}

module.exports = {
  fetchReleaseByTag
}
