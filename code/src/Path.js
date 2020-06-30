const SOURCES_PATH = '.sources'

class Path {
  constructor (type) {
    if (!type) { throw Error('Missing parameter: No type found') }

    this.type = type

    this.folder = process.env[`${this.type}_PATH`]
    this.isLocal = !!this.folder
  }

  translate () {
    if (this.isLocal) { return }
    
    const repo = process.env[`${this.type}_REPO`]
    const [source, branch] = repo.split('#')
    const id = Buffer.from(repo).toString('hex')

    this.folder = `${SOURCES_PATH}/${id}/`
    this.source = source
    this.branch = branch
  }
}

module.exports = Path
