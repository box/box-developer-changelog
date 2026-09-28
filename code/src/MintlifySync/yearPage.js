const UPDATE_OPENING_REGEX = /^<Update label="(\d{4}-\d{2}-\d{2})"/gm
const CHANGELOG_PAGE_REGEX = /^([ \t]*)"changelog\/(\d{4})",?[ \t]*$/m
const CHANGELOG_REDIRECT_REGEX = /("destination":\s*")\/changelog\/(\d{4})((?:\/rss\.xml)?")/g

function createYearPage(year) {
  return [
    '---',
    `title: "${year}"`,
    `description: "Box Platform changelog: API, SDK, and product updates from ${year}."`,
    'rss: true',
    '---',
    'import { Link } from "/snippets/Link.jsx";',
    '',
    `[Subscribe to the changelog with RSS](/changelog/${year}/rss.xml) to get new APIs, SDK releases, and platform updates delivered to your feed reader.`,
    ''
  ].join('\n')
}

function insertEntryIntoYearPage({ pageContent, entry } = {}) {
  if (typeof pageContent !== 'string') {
    throw new Error('Missing required "pageContent".')
  }

  if (!entry || !entry.mdxContent || !entry.label || !entry.heading) {
    throw new Error('Missing required "entry" with "mdxContent", "label" and "heading".')
  }

  if (hasEntry({ pageContent, heading: entry.heading })) {
    return { content: pageContent, inserted: false }
  }

  const insertAt = findInsertionIndex({ pageContent, label: entry.label })
  if (insertAt === -1) {
    const trimmed = pageContent.replace(/\s*$/, '')
    return { content: `${trimmed}\n\n${entry.mdxContent}\n`, inserted: true }
  }

  return {
    content: `${pageContent.slice(0, insertAt)}${entry.mdxContent}\n\n${pageContent.slice(insertAt)}`,
    inserted: true
  }
}

function hasEntry({ pageContent, heading }) {
  return pageContent.split(/\r?\n/).some((line) => line.trim() === heading)
}

function findInsertionIndex({ pageContent, label }) {
  UPDATE_OPENING_REGEX.lastIndex = 0
  let match
  while ((match = UPDATE_OPENING_REGEX.exec(pageContent))) {
    if (match[1] <= label) {
      return match.index
    }
  }

  return -1
}

function addYearToDocsConfig({ docsContent, year } = {}) {
  if (typeof docsContent !== 'string') {
    throw new Error('Missing required "docsContent".')
  }

  const pageMatch = CHANGELOG_PAGE_REGEX.exec(docsContent)
  if (!pageMatch) {
    throw new Error('Unable to locate the changelog year pages in docs.json.')
  }

  if (docsContent.includes(`"changelog/${year}"`)) {
    return docsContent
  }

  const [, indentation, latestYear] = pageMatch
  if (year < latestYear) {
    throw new Error(`Refusing to add changelog/${year} to docs.json: it is older than changelog/${latestYear}.`)
  }

  const withPage =
    docsContent.slice(0, pageMatch.index) +
    `${indentation}"changelog/${year}",\n` +
    docsContent.slice(pageMatch.index)

  return withPage.replace(
    CHANGELOG_REDIRECT_REGEX,
    (match, prefix, redirectYear, suffix) => (
      redirectYear === latestYear ? `${prefix}/changelog/${year}${suffix}` : match
    )
  )
}

module.exports = {
  addYearToDocsConfig,
  createYearPage,
  insertEntryIntoYearPage
}
