const FENCED_CODE_BLOCK_REGEX = /```[\s\S]*?```/g
const INLINE_CODE_REGEX = /`[^`\n]*`/g
const MARKDOWN_LINK_REGEX = /(!?\[[^\]]+\]\()([^)\s]+)(\s+"[^"]*")?(\))/g
const URL_REGEX = /https?:\/\/[^\s)]+/g
const REFERENCE_LINK_DEFINITION_REGEX = /^\s*\[[^\]]+\]:\s+/ // preserve these lines as-is

let _tokenIndex = 0

function cleanReleaseBody({ body, repository } = {}) {
  if (typeof body !== 'string') {
    throw new Error('Missing required "body" markdown string.')
  }

  if (!repository || typeof repository !== 'string') {
    throw new Error('Missing required "repository" (expected "owner/repo").')
  }

  _tokenIndex = 0
  return transformOutsideCodeBlocks(body, (segment) => {
    const lines = segment.split(/\r?\n/)

    const updated = lines.map((line) => {
      if (REFERENCE_LINK_DEFINITION_REGEX.test(line)) {
        return line
      }

      let transformed = convertRelativeMarkdownLinks({ line, repository })
      transformed = transformOutsideLinksAndUrls(transformed, (text) => {
        let next = convertGithubMentions(text)
        next = convertIssueReferences({ text: next, repository })
        next = wrapCommitHashes(next)
        return next
      })

      return transformed
    })

    return updated.join('\n')
  })
}

function convertRelativeMarkdownLinks({ line, repository }) {
  return line.replace(MARKDOWN_LINK_REGEX, (_fullMatch, prefix, rawUrl, title = '', suffix) => {
    const normalizedUrl = toAbsoluteGithubUrl({ rawUrl, repository })
    return `${prefix}${normalizedUrl}${title}${suffix}`
  })
}

function toAbsoluteGithubUrl({ rawUrl, repository }) {
  if (!rawUrl) {
    return rawUrl
  }

  const lower = rawUrl.toLowerCase()
  const isAlreadyAbsolute =
    lower.startsWith('http://') ||
    lower.startsWith('https://') ||
    lower.startsWith('mailto:') ||
    lower.startsWith('data:') ||
    lower.startsWith('//') ||
    rawUrl.startsWith('#')

  if (isAlreadyAbsolute) {
    return rawUrl
  }

  const base = `https://github.com/${repository}/blob/main/`
  const match = rawUrl.match(/^([^?#]*)(.*)$/)
  const pathPart = match ? match[1] : rawUrl
  const suffix = match ? match[2] : ''
  const relativePath = normalizeRelativePath(pathPart)

  if (!relativePath) {
    return rawUrl
  }

  return `${base}${relativePath}${suffix}`
}

function convertGithubMentions(text) {
  return text.replace(/(^|[^A-Za-z0-9`])@([A-Za-z0-9](?:[A-Za-z0-9-]{0,38}))\b/g, (_match, prefix, username) => {
    return `${prefix}\`${username}\``
  })
}

function convertIssueReferences({ text, repository }) {
  return text.replace(/(^|[^\w/&=?#:-])#(\d+)\b/g, (_match, prefix, issueNumber) => {
    return `${prefix}[#${issueNumber}](https://github.com/${repository}/issues/${issueNumber})`
  })
}

function wrapCommitHashes(text) {
  return text.replace(/\b(?=[A-Fa-f0-9]{7,40}\b)(?=[A-Fa-f0-9]*[A-Fa-f])[A-Fa-f0-9]{7,40}\b/g, (hash) => {
    return `\`${hash}\``
  })
}

function normalizeRelativePath(pathPart) {
  if (!pathPart) {
    return ''
  }

  const withoutCurrentDir = pathPart.replace(/^\.\/+/, '')
  const withoutLeadingSlash = withoutCurrentDir.replace(/^\/+/, '')
  return withoutLeadingSlash.replace(/^(\.\.\/)+/, '')
}

function transformOutsideCodeBlocks(content, transformFn) {
  const { text: withoutFenced, tokens: fencedTokens } = protect(content, FENCED_CODE_BLOCK_REGEX)
  const { text: withoutInline, tokens: inlineTokens } = protect(withoutFenced, INLINE_CODE_REGEX)

  const transformed = transformFn(withoutInline)
  const withInline = restore(transformed, inlineTokens)

  return restore(withInline, fencedTokens)
}

function transformOutsideLinksAndUrls(content, transformFn) {
  const { text: withoutLinks, tokens: linkTokens } = protect(content, MARKDOWN_LINK_REGEX)
  const { text: withoutUrls, tokens: urlTokens } = protect(withoutLinks, URL_REGEX)

  const transformed = transformFn(withoutUrls)
  const withUrls = restore(transformed, urlTokens)

  return restore(withUrls, linkTokens)
}

function protect(content, pattern) {
  const tokens = []

  const text = content.replace(pattern, (match) => {
    const token = `@@MINTLIFY_SYNC_TOKEN_${_tokenIndex}@@`
    _tokenIndex += 1
    tokens.push({ token, value: match })
    return token
  })

  return { text, tokens }
}

function restore(content, tokens) {
  return tokens.reduce((result, item) => result.replace(item.token, item.value), content)
}

module.exports = {
  cleanReleaseBody
}
