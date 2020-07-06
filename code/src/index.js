const glob = require('glob')
const path = require('path')
const fs = require('fs-extra')
const MarkdownProcessor = require('./processor')
const { sync } = require('sha1-from-file')

/**
 * A helper class for reading markdown files and transpiling them
 */
class Compiler {
  writeChangelog(source = './content/', target = './compiled/') {
    glob.sync(`${source}/**/*.md`).forEach(filename => {
      new MarkdownProcessor({ 
        sourcePath: filename
       }).write({
        from: source,
        to: target
      })
    })
    glob.sync(`${source}/**/*.+(jpg|jpeg|png|gif)`).forEach(filename => {
      copyAssets(source, target, filename)
    })
  }

  writeIndex(source = './content/', target = './compiled/') {
    const index = glob.sync(`${source}/**/*.md`)
      .map(entry => entry.replace(source, ''))
      .map(entry => entry.replace('.md', ''))
    
    fs.writeFileSync(path.join(target, 'index.json'), JSON.stringify(index, null, 2))
  }
}

const copyAssets = (sourceDir, targetDir, source) => {
  const destination = `${targetDir}${source.replace(sourceDir, '')}`.replace(/\/\d*-/g, '/')
  const destinationDir = path.dirname(destination)
  fs.mkdirpSync(destinationDir)
  
  const sourceHash = sync(fs.readFileSync(source))
  const destinationHash = fs.existsSync(destination) ? sync(fs.readFileSync(destination)) : ''

  if (sourceHash !== destinationHash) {
    fs.copyFileSync(source, destination)
  }
}

// export a new loader
module.exports = new Compiler()