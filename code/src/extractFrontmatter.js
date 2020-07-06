const yaml = require('js-yaml')
const _path = require('path')
const glob = require('glob')
const fs = require('fs')

const TYPES = {
  pages: 'page',
  guides: 'guide'
}

const REPO_NAME = 'box/box-developer-changelog'

const extractFrontmatter = (frontmatter, sourcePath) => {
  frontmatter = yaml.load(frontmatter) || {}

  frontmatter.is_index = isIndex(sourcePath)
  frontmatter.category_id = frontmatter.is_index ? '' : 'changelog'
  frontmatter.subcategory_id = ''
  frontmatter.id = id(sourcePath)
  frontmatter.rank = null
  frontmatter.total_steps = null
  frontmatter.type = 'changelog'
  frontmatter.sibling_id = ''
  frontmatter.parent_id = frontmatter.is_index ? '' : 'changelog'
  frontmatter.next_page_id = nextPageId(sourcePath)
  frontmatter.previous_page_id = previousPageId(sourcePath)
  frontmatter.source_url = sourceUrl(sourcePath)

  return yaml.dump(frontmatter)
}

// Creates a unique ID for this file
const id = (path) => {
  if (!path) { return '' }
  const id = path.split('/').splice(2).join('-').replace('.md', '').replace(/\/\d*-/g, '/').replace(/\/index$/, '').replace(/^index$/, '')
  if (!id || id === '') { return 'changelog' }
  else { return id }
}

// Checks if this file is an index file
const isIndex = (path) => (
  path.endsWith('/index.md') || path.endsWith('-index.md')
)

// Gets the parent guides for this guide
const nextPageId = (path) => {
  let dirname = _path.dirname(path)
  
  const sortedPages = glob.sync(`${dirname}/*.md`).sort().filter(entry => !entry.endsWith('index.md'))
  const nextPageIndex = sortedPages.indexOf(path) + 1
  const nextPage = sortedPages[nextPageIndex] || ''

  return id(nextPage)
}

const previousPageId = (path) => {
  let dirname = _path.dirname(path)
  
  const sortedPages = glob.sync(`${dirname}/*.md`).sort().filter(entry => !entry.endsWith('index.md'))
  const nextPageIndex = sortedPages.indexOf(path) - 1
  const nextPage = sortedPages[nextPageIndex] || ''

  return id(nextPage)
}

const checkIsIndex = (name) => (name.endsWith('/index.md') || name.endsWith('-index.md'))
const not = (match) => (item) => item !== match

const sourceUrl = (sourcePath) => {
  return `https://github.com/${REPO_NAME}/blob/main/${sourcePath.replace('./', '')}`
}

module.exports = extractFrontmatter