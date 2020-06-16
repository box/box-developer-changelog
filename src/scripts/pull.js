require('dotenv').config()

const Path = require('../Path')
const Git = require('../Git')

const CONTENT_TYPE = 'CONTENT'

const pull = async () => {
  const path = new Path(CONTENT_TYPE)
  if (path.isLocal) { return }

  path.translate()

  const git = new Git(path)
  await git.pull()
}

module.exports = {
  pull
}
