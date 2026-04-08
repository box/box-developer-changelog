const os = require('os')
const path = require('path')

const fs = require('fs-extra')

const { runMintlifySync } = require('../../src/MintlifySync/index')

const REPO_ROOT = path.resolve(__dirname, '../../..')

describe('runMintlifySync', () => {
  const originalEnv = { ...process.env }
  let tempDir

  beforeEach(async () => {
    tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'mintlify-sync-'))
    await fs.ensureDir(path.join(tempDir, 'changelog'))
    await fs.writeFile(
      path.join(tempDir, 'changelog', 'index.mdx'),
      [
        '---',
        'title: Changelog',
        'rss: true',
        '---',
        'import ExistingEntry from "/snippets/changelog/2025/12-01-existing.mdx";',
        '',
        '<ExistingEntry />',
        ''
      ].join('\n')
    )
  })

  afterEach(async () => {
    process.env = { ...originalEnv }
    await fs.remove(tempDir)
  })

  test('writes Mintlify files for a real merged SDK changelog file', async () => {
    const outputPath = path.join(tempDir, 'workflow-output.json')
    process.env.CHANGELOG_REPO_PATH = REPO_ROOT
    process.env.CONTENT_PATHS = 'content/2026/04-01-box-java-sdk-v1070-released.md'
    process.env.MINTLIFY_REPO_PATH = tempDir
    process.env.MINTLIFY_SYNC_OUTPUT_PATH = outputPath

    const output = await runMintlifySync()
    const snippetPath = path.join(
      tempDir,
      'snippets/changelog/2026/04-01-box-java-sdk-v1070-released.mdx'
    )
    const indexContent = await fs.readFile(path.join(tempDir, 'changelog/index.mdx'), 'utf8')
    const snippetContent = await fs.readFile(snippetPath, 'utf8')

    expect(output.entries).toHaveLength(1)
    expect(output.prTitle).toBe('Add changelog: Box Java SDK v10.7.0')
    expect(snippetContent).toContain('## Box Java SDK `v10.7.0` released')
    expect(snippetContent).toContain('tags={["SDKs","Java"]}')
    expect(indexContent).toContain(
      'import BoxJavaSdkV1070Released_2026_04_01 from "/snippets/changelog/2026/04-01-box-java-sdk-v1070-released.mdx";'
    )
    expect(indexContent).toContain('<BoxJavaSdkV1070Released_2026_04_01 />')
    expect(await fs.readJson(outputPath)).toEqual(output)
  })

  test('handles multiple SDK changelog files in a single run and ignores non-SDK posts', async () => {
    process.env.CHANGELOG_REPO_PATH = REPO_ROOT
    process.env.CONTENT_PATHS = [
      'content/2026/04-02-new-ai-models.md',
      'content/2026/04-01-box-ios-sdk-1060-released.md',
      'content/2026/04-01-box-windows-sdk-v1080-released.md'
    ].join('\n')
    process.env.MINTLIFY_REPO_PATH = tempDir
    process.env.MINTLIFY_SYNC_OUTPUT_PATH = path.join(tempDir, 'workflow-output-batch.json')

    const output = await runMintlifySync()
    const indexContent = await fs.readFile(path.join(tempDir, 'changelog/index.mdx'), 'utf8')

    expect(output.entries).toHaveLength(2)
    expect(output.prTitle).toBe('Add changelog entries: 2 SDK releases')
    expect(output.filePaths).toEqual([
      'snippets/changelog/2026/04-01-box-ios-sdk-v1060-released.mdx',
      'snippets/changelog/2026/04-01-box-windows-sdk-v1080-released.mdx'
    ])
    expect(indexContent).toContain('<BoxIosSdk1060Released_2026_04_01 />')
    expect(indexContent).toContain('<BoxWindowsSdkV1080Released_2026_04_01 />')
    expect(indexContent).not.toContain('new-ai-models')
  })

  test('returns a no-op workflow output when there are no eligible SDK entries', async () => {
    process.env.CHANGELOG_REPO_PATH = REPO_ROOT
    process.env.CONTENT_PATHS = 'content/2026/04-02-new-ai-models.md'
    process.env.MINTLIFY_REPO_PATH = tempDir
    process.env.MINTLIFY_SYNC_OUTPUT_PATH = path.join(tempDir, 'workflow-output-empty.json')

    const output = await runMintlifySync()
    const indexContent = await fs.readFile(path.join(tempDir, 'changelog/index.mdx'), 'utf8')

    expect(output.entries).toEqual([])
    expect(output.filePaths).toEqual([])
    expect(output.releaseUrls).toEqual([])
    expect(indexContent).toContain('<ExistingEntry />')
  })
})
