
import fs from 'fs-extra'
import path from 'path'

/**
 * A helper class that writes the markdown to file
 */
class Writer {
  constructor(options = {}) {
    const { destination = './content'} = options
    this.destination = destination
  }

  write({ filename, markdown }) {
    const fullFilename = path.resolve(path.join(this.destination, filename))
    fs.ensureDirSync(path.dirname(fullFilename))
    fs.writeFileSync(fullFilename, markdown)
  }
}

export { Writer }