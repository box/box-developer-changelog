const path = require('path')
const fs = require('fs-extra')

const {
  loadEligibleChangelogEntries,
  resolveCandidateContentPaths
} = require('./changelog')
const { convertReleaseToMintlifyEntry } = require('./converter')
const {
  addYearToDocsConfig,
  createYearPage,
  insertEntryIntoYearPage
} = require('./yearPage')

const DEFAULT_WORKFLOW_OUTPUT_PATH = '/tmp/mintlify-sync-output.json'
const DOCS_CONFIG_PATH = 'docs.json'

async function runMintlifySync() {
  const mintlifyRepoPath = readRequiredEnv('MINTLIFY_REPO_PATH')
  const changelogRepoPath = readOptionalEnv('CHANGELOG_REPO_PATH') || process.cwd()
  const beforeSha = readOptionalEnv('BEFORE_SHA')
  const afterSha = readOptionalEnv('AFTER_SHA')
  const contentPaths = readOptionalEnv('CONTENT_PATHS')
  const workflowOutputPath = readOptionalEnv('MINTLIFY_SYNC_OUTPUT_PATH') || DEFAULT_WORKFLOW_OUTPUT_PATH

  console.log('[MintlifySync] Starting changelog sync...')
  const candidatePaths = resolveCandidateContentPaths({
    afterSha,
    beforeSha,
    contentPaths,
    repoPath: changelogRepoPath
  })

  console.log(`[MintlifySync] Candidate changelog paths: ${candidatePaths.length}`)
  const changelogEntries = await loadEligibleChangelogEntries({
    contentPaths: candidatePaths,
    repoPath: changelogRepoPath
  })

  console.log(`[MintlifySync] Eligible release entries: ${changelogEntries.length}`)

  const pages = new Map()
  const convertedEntries = []
  let docsContent = null

  for (const changelogEntry of changelogEntries) {
    console.log(
      `[MintlifySync] Converting ${changelogEntry.repoDisplayName} ${changelogEntry.version} ` +
      `from ${changelogEntry.contentPath}`
    )

    const convertedEntry = convertReleaseToMintlifyEntry({
      appliedAt: changelogEntry.appliedAt,
      body: changelogEntry.body,
      labels: changelogEntry.labels,
      repoDisplayName: changelogEntry.repoDisplayName,
      version: changelogEntry.version
    })

    if (!pages.has(convertedEntry.filePath)) {
      const pagePath = path.join(mintlifyRepoPath, convertedEntry.filePath)
      if (await fs.pathExists(pagePath)) {
        pages.set(convertedEntry.filePath, await fs.readFile(pagePath, 'utf8'))
      } else {
        console.log(`[MintlifySync] Creating year page: ${convertedEntry.filePath}`)
        pages.set(convertedEntry.filePath, createYearPage(convertedEntry.year))
        docsContent = addYearToDocsConfig({
          docsContent: docsContent === null
            ? await fs.readFile(path.join(mintlifyRepoPath, DOCS_CONFIG_PATH), 'utf8')
            : docsContent,
          year: convertedEntry.year
        })
      }
    }

    const { content, inserted } = insertEntryIntoYearPage({
      entry: convertedEntry,
      pageContent: pages.get(convertedEntry.filePath)
    })

    if (!inserted) {
      console.log(`[MintlifySync] Already present in ${convertedEntry.filePath}, skipping.`)
      continue
    }

    pages.set(convertedEntry.filePath, content)
    convertedEntries.push({
      ...convertedEntry,
      releaseUrl: changelogEntry.releaseSourceUrl,
      repoDisplayName: changelogEntry.repoDisplayName,
      version: changelogEntry.version
    })
  }

  const changedFiles = [...new Set(convertedEntries.map((entry) => entry.filePath))]
  for (const filePath of changedFiles) {
    console.log(`[MintlifySync] Writing year page: ${filePath}`)
    await fs.outputFile(path.join(mintlifyRepoPath, filePath), pages.get(filePath), 'utf8')
  }

  if (docsContent !== null && changedFiles.length > 0) {
    console.log(`[MintlifySync] Updating ${DOCS_CONFIG_PATH}`)
    await fs.writeFile(path.join(mintlifyRepoPath, DOCS_CONFIG_PATH), docsContent, 'utf8')
    changedFiles.push(DOCS_CONFIG_PATH)
  }

  const output = buildWorkflowOutput(convertedEntries, changedFiles)

  console.log(`[MintlifySync] Writing workflow output: ${workflowOutputPath}`)
  await fs.outputFile(workflowOutputPath, JSON.stringify(output, null, 2))

  console.log(
    convertedEntries.length > 0
      ? '[MintlifySync] Completed successfully.'
      : '[MintlifySync] No new changelog entries to sync.'
  )
  return output
}

function buildWorkflowOutput(entries = [], changedFiles = []) {
  const normalizedEntries = entries.map((entry) => ({
    filePath: entry.filePath,
    releaseUrl: entry.releaseUrl,
    repoDisplayName: entry.repoDisplayName,
    version: entry.version
  }))

  const prTitle = normalizedEntries.length === 1
    ? `Add changelog: ${normalizedEntries[0].repoDisplayName} ${normalizedEntries[0].version}`
    : `Add changelog entries: ${normalizedEntries.length} releases`

  return {
    branchSuffix: normalizedEntries.length === 1
      ? entries[0].branchName
      : `batch-${normalizedEntries.length}-releases`,
    changedFiles,
    entries: normalizedEntries,
    prTitle,
    releaseUrls: normalizedEntries
      .map((entry) => entry.releaseUrl)
      .filter(Boolean)
  }
}

function readRequiredEnv(name) {
  const value = process.env[name]
  if (!value || !String(value).trim()) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return String(value).trim()
}

function readOptionalEnv(name) {
  const value = process.env[name]
  if (typeof value !== 'string') {
    return ''
  }

  return value.trim()
}

if (require.main === module) {
  runMintlifySync().catch((error) => {
    console.error('[MintlifySync] Failed:', error.message)
    process.exit(1)
  })
}

module.exports = {
  buildWorkflowOutput,
  runMintlifySync
}
