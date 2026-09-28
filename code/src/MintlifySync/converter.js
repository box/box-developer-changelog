const LINK_DEFINITION_REGEX = /^ {0,3}\[([^\]]+)\]:[ \t]*<?(\S+?)>?[ \t]*$/gm
const CROSS_REPO_ISSUE_REFERENCE_REGEX = /([A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+)\[#(\d+)\]\[([^\]]+)\]/g
const ISSUE_REFERENCE_REGEX = /\[#(\d+)\]\[([^\]]+)\]/g
const REFERENCE_LINK_REGEX = /\[((?:[^\[\]]|\[[^\]]*\])+)\]\[([^\]]*)\]/g
const GITHUB_ISSUE_URL_REGEX = /^https:\/\/github\.com\/[^/]+\/([^/]+)\/(?:issues|pull)\/(\d+)\/?$/

const TAG_BY_LABEL = {
  cli: 'CLI',
  dotnet: '.NET',
  frontend: 'Frontend',
  ios: 'iOS',
  java: 'Java',
  node: 'Node',
  python: 'Python',
  sdks: 'SDKs',
  swift: 'iOS',
  typescript: 'Node',
  'ui-elements': 'UI Elements',
  windows: '.NET'
}

function convertReleaseToMintlifyEntry({
  repoDisplayName,
  labels,
  version,
  appliedAt,
  publishedAt,
  body
} = {}) {
  if (!repoDisplayName || typeof repoDisplayName !== 'string') {
    throw new Error('Missing required "repoDisplayName".')
  }

  if (!version || typeof version !== 'string') {
    throw new Error('Missing required "version".')
  }

  const changelogDate = typeof appliedAt === 'string' && appliedAt.trim()
    ? appliedAt
    : publishedAt

  if (!changelogDate || typeof changelogDate !== 'string') {
    throw new Error('Missing required "appliedAt" or "publishedAt".')
  }

  const { year, labelDate } = parsePublishedDate(changelogDate)
  const tags = mapLabelsToTags(labels)
  const heading = `## ${repoDisplayName} \`${version}\` released`
  const markdownBody = convertMarkdownBody(body)

  const mdxContent =
    `<Update label="${labelDate}" tags={[${tags.map((tag) => JSON.stringify(tag)).join(', ')}]}>\n` +
    `${heading}\n\n` +
    (markdownBody ? `${markdownBody}\n\n` : '') +
    '</Update>'

  return {
    branchName: `${slugify(repoDisplayName)}-${slugify(version)}`,
    filePath: `changelog/${year}.mdx`,
    heading,
    label: labelDate,
    mdxContent,
    year
  }
}

function convertMarkdownBody(body) {
  const { definitions, markdown } = extractLinkDefinitions(String(body || ''))
  const resolve = (reference) => definitions.get(normalizeReference(reference))

  return markdown
    .replace(CROSS_REPO_ISSUE_REFERENCE_REGEX, (match, repo, number, reference) => (
      resolve(reference)
        ? `[${repo}#${number}](https://github.com/${repo}/issues/${number})`
        : match
    ))
    .replace(ISSUE_REFERENCE_REGEX, (match, number, reference) => {
      const url = resolve(reference)
      if (!url) {
        return match
      }

      const issueUrlMatch = url.match(GITHUB_ISSUE_URL_REGEX)
      const text = issueUrlMatch && issueUrlMatch[2] === number
        ? `${issueUrlMatch[1]}#${number}`
        : `#${number}`
      return `[${text}](${url})`
    })
    .replace(REFERENCE_LINK_REGEX, (match, text, reference) => {
      const url = resolve(reference || text)
      return url ? `[${text}](${url})` : match
    })
    .replace(/^#[ \t]+/gm, '### ')
    .split(/(^```[\s\S]*?^```[ \t]*$)/m)
    .map((segment) => (segment.startsWith('```') ? segment : escapeMdxText(segment)))
    .join('')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function escapeMdxText(markdown) {
  return markdown
    .split(/(`+[^`\n]*?`+)/)
    .map((segment) => (
      segment.startsWith('`')
        ? segment
        : segment
          .replace(/<(https?:\/\/[^>\s]+)>/g, '$1')
          .replace(/(\\?)([<{}])/g, (match, backslash, character) => (backslash ? match : `\\${character}`))
    ))
    .join('')
}

function extractLinkDefinitions(markdown) {
  const definitions = new Map()
  const withoutDefinitions = markdown.replace(LINK_DEFINITION_REGEX, (match, reference, url) => {
    definitions.set(normalizeReference(reference), url)
    return ''
  })

  return { definitions, markdown: withoutDefinitions }
}

function normalizeReference(reference) {
  return String(reference).trim().replace(/\s+/g, ' ').toLowerCase()
}

function mapLabelsToTags(labels) {
  const labelList = Array.isArray(labels)
    ? labels
    : String(labels || '').split(',')

  const tags = labelList
    .map((label) => String(label).trim())
    .filter(Boolean)
    .map((label) => TAG_BY_LABEL[label.toLowerCase()] || label.charAt(0).toUpperCase() + label.slice(1))

  return [...new Set(tags)]
}

function parsePublishedDate(publishedAt) {
  const [datePortion] = publishedAt.split('T')
  const parts = datePortion ? datePortion.split('-') : []

  if (parts.length !== 3 || parts.some((part) => !part)) {
    throw new Error(`Invalid "publishedAt" date: "${publishedAt}"`)
  }

  const [year, month, day] = parts

  return {
    year,
    labelDate: `${year}-${month}-${day}`
  }
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

module.exports = {
  convertMarkdownBody,
  convertReleaseToMintlifyEntry,
  mapLabelsToTags
}
