const { execFileSync } = require('child_process')
const path = require('path')

const fs = require('fs-extra')
const yaml = require('js-yaml')

const FRONTMATTER_REGEX = /^---\r?\n([\s\S]*?)\r?\n---\r?\n*/
const SDK_RELEASE_HEADING_REGEX = /^#\s+(.+?)\s+`([^`]+)`\s+released\s*$/m

function normalizeContentPaths(contentPaths) {
  if (Array.isArray(contentPaths)) {
    return dedupePaths(contentPaths)
  }

  return dedupePaths(
    String(contentPaths || '')
      .split(/[\n,]/)
      .map((entry) => entry.trim())
      .filter(Boolean)
  )
}

function resolveCandidateContentPaths({ repoPath = process.cwd(), beforeSha, afterSha, contentPaths } = {}) {
  const manualPaths = normalizeContentPaths(contentPaths)
  if (manualPaths.length > 0) {
    return manualPaths
  }

  if (!beforeSha || !afterSha) {
    throw new Error(
      'Mintlify sync requires either CONTENT_PATHS or both BEFORE_SHA and AFTER_SHA.'
    )
  }

  return listChangedContentPaths({ repoPath, beforeSha, afterSha })
}

function listChangedContentPaths({ repoPath = process.cwd(), beforeSha, afterSha } = {}) {
  const diffArgs = isZeroSha(beforeSha)
    ? ['diff-tree', '--no-commit-id', '--name-only', '-r', afterSha, '--', 'content']
    : ['diff', '--name-only', `${beforeSha}..${afterSha}`, '--', 'content']

  const stdout = execFileSync('git', diffArgs, {
    cwd: repoPath,
    encoding: 'utf8'
  })

  return normalizeContentPaths(stdout)
}

async function loadEligibleChangelogEntries({ repoPath = process.cwd(), contentPaths = [] } = {}) {
  const entries = []

  for (const contentPath of normalizeContentPaths(contentPaths)) {
    const absolutePath = path.join(repoPath, contentPath)
    if (!await fs.pathExists(absolutePath)) {
      continue
    }

    const content = await fs.readFile(absolutePath, 'utf8')
    const entry = parseChangelogEntry({ content, contentPath })
    if (entry.isSdkRelease) {
      entries.push(entry)
    }
  }

  return sortEntriesForInsertion(entries)
}

function parseChangelogEntry({ content, contentPath = '' } = {}) {
  if (typeof content !== 'string' || !content.trim()) {
    throw new Error('Missing required changelog "content".')
  }

  const frontmatterMatch = content.match(FRONTMATTER_REGEX)
  if (!frontmatterMatch) {
    throw new Error(`Unable to parse frontmatter for "${contentPath || 'inline changelog'}".`)
  }

  const frontmatter = yaml.load(frontmatterMatch[1]) || {}
  const markdown = content.slice(frontmatterMatch[0].length)
  const headingMatch = markdown.match(SDK_RELEASE_HEADING_REGEX)
  const repoDisplayName = headingMatch ? headingMatch[1].trim() : ''
  const version = headingMatch ? headingMatch[2].trim() : ''
  const body = headingMatch
    ? markdown.slice(headingMatch.index + headingMatch[0].length).replace(/^\r?\n+/, '').trimEnd()
    : markdown.trim()
  const labels = Array.isArray(frontmatter.applies_to)
    ? frontmatter.applies_to.map((label) => String(label).trim()).filter(Boolean)
    : []

  const entry = {
    appliedAt: normalizeDate(frontmatter.applied_at),
    body,
    contentPath,
    labels,
    releaseSourceUrl: String(frontmatter.release_source_url || '').trim(),
    repoDisplayName,
    version
  }

  return {
    ...entry,
    isSdkRelease: isSdkReleaseEntry(entry)
  }
}

function isSdkReleaseEntry(entry = {}) {
  const labels = Array.isArray(entry.labels) ? entry.labels.map((label) => label.toLowerCase()) : []

  return (
    labels.includes('sdks') &&
    typeof entry.repoDisplayName === 'string' &&
    entry.repoDisplayName.startsWith('Box ') &&
    Boolean(entry.version) &&
    Boolean(entry.releaseSourceUrl)
  )
}

function sortEntriesForInsertion(entries = []) {
  return [...entries].sort((left, right) => {
    const leftKey = `${left.appliedAt || ''}:${left.contentPath || ''}`
    const rightKey = `${right.appliedAt || ''}:${right.contentPath || ''}`
    return leftKey.localeCompare(rightKey)
  })
}

function dedupePaths(paths = []) {
  return [...new Set(
    paths
      .map((entry) => String(entry).trim())
      .filter((entry) => entry.startsWith('content/') && entry.endsWith('.md'))
  )]
}

function normalizeDate(value) {
  return String(value || '').trim().split('T')[0]
}

function isZeroSha(value) {
  return /^0+$/.test(String(value || ''))
}

module.exports = {
  loadEligibleChangelogEntries,
  normalizeContentPaths,
  parseChangelogEntry,
  resolveCandidateContentPaths,
  sortEntriesForInsertion
}
