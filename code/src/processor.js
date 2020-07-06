const fs = require('fs-extra')
const path = require('path')

const padNestedMarkdownWithNewlines = require('./padNestedMarkdown')
const unIndentNestedMarkdown = require('./unIndentNestedMarkdown')
const expandSelfClosingTags = require('./expandSelfClosingTags')
const addFinalLine = require('./addFinalLine')
const inlineTags = require('./inlineTags')
const extractFrontmatter = require('./extractFrontmatter')

class MarkdownProcessor {
  constructor({ sourcePath }) {
    // remove the index from a filename
    this.sourcePath = sourcePath
  }

  /**
   * Writes a markdown file from `from` to the `to`
   * folder, applying transformations in the process.
   */
  write({ 
    from, 
    to
  }) {
    // read the content and transform it
    const contents = fs.readFileSync(this.sourcePath).toString()
    const sourceName = this.sourcePath.replace(from, '').replace('/', '-')
    const transformedContents = this.transform({ contents })
    // determine the destination
    const destinationPath = path.resolve(to, sourceName)
    const destinationDirectory = path.dirname(destinationPath)

    // ensure the destination folder exists
    if (!fs.existsSync(destinationDirectory)) { 
      fs.mkdirpSync(destinationDirectory)
    }

    // write the new content to the destination
    const oldContents = fs.existsSync(destinationPath) ? String(fs.readFileSync(destinationPath)) : ''
    if (oldContents !== transformedContents) {
      fs.writeFileSync(destinationPath, transformedContents)
    }
  }

  /**
   * Applies some transformation to every markdown file
   */
  transform({ 
    contents
  }) {
    let [_, frontmatter, markdown, ...rest] = contents.split(/---\r?\n/)

    frontmatter = extractFrontmatter(frontmatter, this.sourcePath)

    markdown = [markdown, ...rest].join('---\n')
    
    markdown = addFinalLine(markdown)
    markdown = expandSelfClosingTags(markdown)
    markdown = unIndentNestedMarkdown(markdown)
    markdown = padNestedMarkdownWithNewlines(markdown)
    markdown = inlineTags(markdown)

    return [_, frontmatter, markdown].join('---\n')
  }
}

module.exports = MarkdownProcessor