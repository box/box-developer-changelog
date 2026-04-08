const path = require('path')
const fs = require('fs-extra')

const {
  loadEligibleChangelogEntries,
  resolveCandidateContentPaths
} = require('./changelog')
const { convertReleaseToMintlifyEntry } = require('./converter')
const { updateMintlifyChangelogIndex } = require('./indexUpdater')

const DEFAULT_WORKFLOW_OUTPUT_PATH = '/tmp/mintlify-sync-output.json'

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

  console.log(`[MintlifySync] Eligible SDK entries: ${changelogEntries.length}`)
  if (changelogEntries.length === 0) {
    const output = buildWorkflowOutput([])
    console.log(`[MintlifySync] Writing workflow output: ${workflowOutputPath}`)
    await fs.outputFile(workflowOutputPath, JSON.stringify(output, null, 2))
    console.log('[MintlifySync] No eligible SDK changelog entries found.')
    return output
  }

  const indexPath = path.join(mintlifyRepoPath, 'changelog', 'index.mdx')
  const convertedEntries = []
  let indexContent = await fs.readFile(indexPath, 'utf8')

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

    const snippetAbsolutePath = path.join(mintlifyRepoPath, convertedEntry.filePath)
    console.log(`[MintlifySync] Writing snippet: ${snippetAbsolutePath}`)
    await fs.outputFile(snippetAbsolutePath, convertedEntry.mdxContent)

    indexContent = updateMintlifyChangelogIndex({
      componentName: convertedEntry.componentName,
      filePath: convertedEntry.filePath,
      indexContent
    })

    convertedEntries.push({
      ...convertedEntry,
      releaseUrl: changelogEntry.releaseSourceUrl,
      repoDisplayName: changelogEntry.repoDisplayName,
      version: changelogEntry.version
    })
  }

  console.log(`[MintlifySync] Updating index: ${indexPath}`)
  await fs.writeFile(indexPath, indexContent, 'utf8')

  const output = buildWorkflowOutput(convertedEntries)

  console.log(`[MintlifySync] Writing workflow output: ${workflowOutputPath}`)
  await fs.outputFile(workflowOutputPath, JSON.stringify(output, null, 2))

  console.log('[MintlifySync] Completed successfully.')
  return output
}

function buildWorkflowOutput(entries = []) {
  const normalizedEntries = entries.map((entry) => ({
    componentName: entry.componentName,
    filePath: entry.filePath,
    releaseUrl: entry.releaseUrl,
    repoDisplayName: entry.repoDisplayName,
    version: entry.version
  }))

  const prTitle = normalizedEntries.length === 1
    ? `Add changelog: ${normalizedEntries[0].repoDisplayName} ${normalizedEntries[0].version}`
    : `Add changelog entries: ${normalizedEntries.length} SDK releases`

  return {
    branchSuffix: normalizedEntries.length === 1
      ? normalizedEntries[0].componentName
      : `batch-${normalizedEntries.length}-releases`,
    entries: normalizedEntries,
    filePaths: normalizedEntries.map((entry) => entry.filePath),
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
