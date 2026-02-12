const path = require('path')
const fs = require('fs-extra')

const { fetchReleaseByTag } = require('./github')
const { cleanReleaseBody } = require('./cleanup')
const { convertReleaseToMintlifyEntry } = require('./converter')
const { updateMintlifyChangelogIndex } = require('./indexUpdater')

const WORKFLOW_OUTPUT_PATH = '/tmp/mintlify-sync-output.json'

async function runMintlifySync() {
  const repository = readRequiredEnv('REPOSITORY')
  const ref = readRequiredEnv('REF')
  const labels = readRequiredEnv('LABELS')
  const repoDisplayName = readRequiredEnv('REPO_DISPLAY_NAME')
  const mintlifyRepoPath = readRequiredEnv('MINTLIFY_REPO_PATH')

  console.log('[MintlifySync] Starting changelog sync...')
  console.log(`[MintlifySync] Repository: ${repository}`)
  console.log(`[MintlifySync] Ref: ${ref}`)

  const version = extractTagFromRef(ref)
  console.log(`[MintlifySync] Extracted tag: ${version}`)

  console.log('[MintlifySync] Fetching release from GitHub API...')
  const release = await fetchReleaseByTag({ repository, tag: version })

  console.log('[MintlifySync] Cleaning release markdown...')
  const cleanedBody = cleanReleaseBody({ body: release.body || '', repository })

  console.log('[MintlifySync] Converting release to Mintlify MDX...')
  const { mdxContent, filePath, componentName } = convertReleaseToMintlifyEntry({
    repoDisplayName,
    labels,
    version,
    publishedAt: release.published_at,
    body: cleanedBody
  })

  const snippetAbsolutePath = path.join(mintlifyRepoPath, filePath)
  const indexPath = path.join(mintlifyRepoPath, 'changelog', 'index.mdx')

  console.log(`[MintlifySync] Writing snippet: ${snippetAbsolutePath}`)
  await fs.outputFile(snippetAbsolutePath, mdxContent)

  console.log(`[MintlifySync] Updating index: ${indexPath}`)
  const indexContent = await fs.readFile(indexPath, 'utf8')
  const updatedIndex = updateMintlifyChangelogIndex({
    componentName,
    filePath,
    indexContent
  })
  await fs.writeFile(indexPath, updatedIndex, 'utf8')

  const output = {
    componentName,
    filePath,
    prTitle: `Add changelog: ${repoDisplayName} ${version}`,
    releaseUrl: release.html_url
  }

  console.log(`[MintlifySync] Writing workflow output: ${WORKFLOW_OUTPUT_PATH}`)
  await fs.outputFile(WORKFLOW_OUTPUT_PATH, JSON.stringify(output, null, 2))

  console.log('[MintlifySync] Completed successfully.')
  return output
}

function extractTagFromRef(ref) {
  if (typeof ref !== 'string' || !ref.trim()) {
    throw new Error('Invalid "REF" environment variable.')
  }

  const prefix = 'refs/tags/'
  if (ref.startsWith(prefix)) {
    return ref.slice(prefix.length)
  }

  return ref
}

function readRequiredEnv(name) {
  const value = process.env[name]
  if (!value || !String(value).trim()) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return String(value).trim()
}

if (require.main === module) {
  runMintlifySync().catch((error) => {
    console.error('[MintlifySync] Failed:', error.message)
    process.exit(1)
  })
}

module.exports = {
  runMintlifySync,
  extractTagFromRef
}
