import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import glob from 'glob'
import _ from 'lodash'
import uslug from 'uslug'
import yaml from 'js-yaml'

const main = () => {
  // read the original files
  const originalFiles = glob.sync('./original-content/*.md')
  // process each file
  originalFiles.map(processFile)
}

// process a markdown file into multiple files
const processFile = (path) => {
  // read the content from the file
  const content = String(readFileSync(path))
  // strip the frontmatter
  const markdown = content.split('---')[2]
  // split and write out each segment
  processMarkdown(markdown)
}

// process the markdown content into multiple files
const processMarkdown = (content) => {
  // split and grab every entry
  const parts = content.split(/## (\d\d\d\d-\d\d-\d\d) *\/ *(.*) *\n/mg) 
  // remove the start of the document
  parts.shift()
  // convert to grouped entries
  const entries = _.chunk(parts, 3)
  // and write them all out
  entries.map(entry => writeEntry(...entry))
}

// write the entry out to file
const writeEntry = (
  date, 
  title,
  markdown
) => {
  const [year, month, day] = date.split('-')
  const directory = `content/${year}`
  const filename = `${directory}/${month}-${day}-${uslug(title)}.md`
  
  const frontmatter = yaml.dump({
    applied_at: date,
    applies_to: ['api'],
    is_impactful: false,
    is_new_feature: false
  })

  const content = `---\n${frontmatter}\n---\n\n${markdown}`

  if (!existsSync(directory)) { mkdirSync(directory) }
  writeFileSync(filename, content)
}

main()
