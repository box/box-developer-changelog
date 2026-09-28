const os = require('os')
const path = require('path')

const fs = require('fs-extra')

const { runMintlifySync } = require('../../src/MintlifySync/index')

const REPO_ROOT = path.resolve(__dirname, '../../..')

const YEAR_PAGE_2026 = [
  '---',
  'title: "2026"',
  'description: "Box Platform changelog: API, SDK, and product updates from 2026."',
  'rss: true',
  '---',
  'import { Link } from "/snippets/Link.jsx";',
  '',
  '[Subscribe to the changelog with RSS](/changelog/2026/rss.xml) to get new APIs, SDK releases, and platform updates delivered to your feed reader.',
  '',
  '<Update label="2026-09-09" tags={["SDKs", "Java"]}>',
  '## Box Java SDK `v10.17.0` released',
  '',
  '</Update>',
  '',
  '<Update label="2026-01-02" tags={["API"]}>',
  '## Existing post',
  '',
  '</Update>',
  ''
].join('\n')

const DOCS_CONFIG = JSON.stringify({
  navigation: {
    tabs: [{ tab: 'Changelog', pages: ['changelog/2026', 'changelog/2025'] }]
  },
  redirects: [
    { source: '/changelog', destination: '/changelog/2026' },
    { source: '/changelog/rss.xml', destination: '/changelog/2026/rss.xml' }
  ]
}, null, 2)

describe('runMintlifySync', () => {
  const originalEnv = { ...process.env }
  let tempDir

  beforeEach(async () => {
    tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'mintlify-sync-'))
    await fs.outputFile(path.join(tempDir, 'changelog', '2026.mdx'), YEAR_PAGE_2026)
    await fs.outputFile(path.join(tempDir, 'docs.json'), DOCS_CONFIG)
    process.env.CHANGELOG_REPO_PATH = REPO_ROOT
    process.env.MINTLIFY_REPO_PATH = tempDir
    process.env.MINTLIFY_SYNC_OUTPUT_PATH = path.join(tempDir, 'workflow-output.json')
  })

  afterEach(async () => {
    process.env = { ...originalEnv }
    await fs.remove(tempDir)
  })

  const readYearPage = (year) => fs.readFile(path.join(tempDir, 'changelog', `${year}.mdx`), 'utf8')

  test('adds a real SDK changelog entry to the year page in date order', async () => {
    process.env.CONTENT_PATHS = 'content/2026/04-01-box-java-sdk-v1070-released.md'

    const output = await runMintlifySync()
    const page = await readYearPage('2026')

    expect(output.entries).toHaveLength(1)
    expect(output.prTitle).toBe('Add changelog: Box Java SDK v10.7.0')
    expect(output.branchSuffix).toBe('box-java-sdk-v10-7-0')
    expect(output.changedFiles).toEqual(['changelog/2026.mdx'])
    expect(page).toContain('<Update label="2026-04-01" tags={["SDKs", "Java"]}>\n## Box Java SDK `v10.7.0` released')
    expect(page.indexOf('`v10.17.0`')).toBeLessThan(page.indexOf('`v10.7.0`'))
    expect(page.indexOf('`v10.7.0`')).toBeLessThan(page.indexOf('## Existing post'))
    expect(await fs.readFile(path.join(tempDir, 'docs.json'), 'utf8')).toBe(DOCS_CONFIG)
    expect(await fs.readJson(process.env.MINTLIFY_SYNC_OUTPUT_PATH)).toEqual(output)
  })

  test('handles multiple releases in a single run and ignores non-release posts', async () => {
    process.env.CONTENT_PATHS = [
      'content/2026/04-02-new-ai-models.md',
      'content/2026/04-01-box-ios-sdk-1060-released.md',
      'content/2026/04-01-box-windows-sdk-v1080-released.md'
    ].join('\n')

    const output = await runMintlifySync()
    const page = await readYearPage('2026')

    expect(output.entries).toHaveLength(2)
    expect(output.prTitle).toBe('Add changelog entries: 2 releases')
    expect(output.changedFiles).toEqual(['changelog/2026.mdx'])
    expect(page).toContain('## Box iOS SDK `10.6.0` released')
    expect(page).toContain('## Box Windows SDK `v10.8.0` released')
    expect(page).not.toContain('AI models')
  })

  test('does not add an entry that is already on the year page', async () => {
    process.env.CONTENT_PATHS = 'content/2026/04-01-box-java-sdk-v1070-released.md'
    await runMintlifySync()
    const pageAfterFirstRun = await readYearPage('2026')

    const output = await runMintlifySync()

    expect(output.entries).toEqual([])
    expect(output.changedFiles).toEqual([])
    expect(await readYearPage('2026')).toBe(pageAfterFirstRun)
  })

  test('creates a missing year page and registers it in docs.json', async () => {
    const contentPath = 'content/2027/01-05-box-node-sdk-v10160-released.md'
    const changelogRepo = path.join(tempDir, 'changelog-repo')
    await fs.outputFile(path.join(changelogRepo, contentPath), [
      '---',
      "applied_at: '2027-01-05'",
      'applies_to:',
      '  - sdks',
      '  - typescript',
      "release_source_url: 'https://github.com/box/box-node-sdk/releases/tag/v10.16.0'",
      '---',
      '',
      '# Box Node SDK `v10.16.0` released',
      '',
      '### Bug Fixes',
      '',
      '* Fix something ([#1700][1])',
      '',
      '[1]: https://github.com/box/box-node-sdk/issues/1700',
      ''
    ].join('\n'))
    process.env.CHANGELOG_REPO_PATH = changelogRepo
    process.env.CONTENT_PATHS = contentPath

    const output = await runMintlifySync()
    const docs = await fs.readJson(path.join(tempDir, 'docs.json'))

    expect(output.changedFiles).toEqual(['changelog/2027.mdx', 'docs.json'])
    expect(await readYearPage('2027')).toContain(
      '<Update label="2027-01-05" tags={["SDKs", "Node"]}>\n## Box Node SDK `v10.16.0` released\n\n### Bug Fixes\n\n' +
      '* Fix something ([box-node-sdk#1700](https://github.com/box/box-node-sdk/issues/1700))\n\n</Update>\n'
    )
    expect(docs.navigation.tabs[0].pages).toEqual(['changelog/2027', 'changelog/2026', 'changelog/2025'])
    expect(docs.redirects).toEqual([
      { source: '/changelog', destination: '/changelog/2027' },
      { source: '/changelog/rss.xml', destination: '/changelog/2027/rss.xml' }
    ])
  })

  test('returns a no-op workflow output when there are no eligible release entries', async () => {
    process.env.CONTENT_PATHS = 'content/2026/04-02-new-ai-models.md'

    const output = await runMintlifySync()

    expect(output.entries).toEqual([])
    expect(output.changedFiles).toEqual([])
    expect(output.releaseUrls).toEqual([])
    expect(await readYearPage('2026')).toBe(YEAR_PAGE_2026)
  })
})
