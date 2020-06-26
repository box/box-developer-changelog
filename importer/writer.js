
import fs from 'fs-extra'
import path from 'path'

/**
 * A helper class that writes the markdown to file
 */
class Writer {

  write({ filename, markdown }) {
    fs.ensureDirSync(path.dirname(filename))
    fs.writeFileSync(filename, markdown)
  }
}

export { Writer }