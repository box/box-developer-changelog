const { convertReleaseToMintlifyEntry, convertMarkdownBody } = require('../../src/MintlifySync/converter')
const { parseChangelogEntry } = require('../../src/MintlifySync/changelog')
const path = require('path')
const fs = require('fs-extra')

const REPO_ROOT = path.resolve(__dirname, '../../..')

async function readParsedEntry(contentPath) {
  const content = await fs.readFile(path.join(REPO_ROOT, contentPath), 'utf8')
  return parseChangelogEntry({ content, contentPath })
}

describe('convertReleaseToMintlifyEntry', () => {
  const baseInput = {
    repoDisplayName: 'Box Windows SDK',
    labels: 'sdks,dotnet',
    version: 'v6.4.0',
    publishedAt: '2025-12-19T08:10:11Z',
    body: '### New Features\n\n* Added great things.'
  }

  test('maps labels to the tags used in box-mintlify', () => {
    const cases = [
      { labels: 'sdks,java', expected: '["SDKs", "Java"]' },
      { labels: 'sdks,python', expected: '["SDKs", "Python"]' },
      { labels: 'sdks,node', expected: '["SDKs", "Node"]' },
      { labels: 'sdks,typescript', expected: '["SDKs", "Node"]' },
      { labels: 'sdks,dotnet', expected: '["SDKs", ".NET"]' },
      { labels: 'sdks,swift', expected: '["SDKs", "iOS"]' },
      { labels: 'sdks,ios', expected: '["SDKs", "iOS"]' },
      { labels: 'frontend,ui-elements', expected: '["Frontend", "UI Elements"]' },
      { labels: 'cli', expected: '["CLI"]' }
    ]

    cases.forEach((entry) => {
      const result = convertReleaseToMintlifyEntry({
        ...baseInput,
        labels: entry.labels
      })
      expect(result.mdxContent).toContain(`tags={${entry.expected}}`)
    })
  })

  test('targets the changelog page for the release year', () => {
    const result = convertReleaseToMintlifyEntry(baseInput)

    expect(result.filePath).toBe('changelog/2025.mdx')
    expect(result.year).toBe('2025')
    expect(result.label).toBe('2025-12-19')
    expect(result.heading).toBe('## Box Windows SDK `v6.4.0` released')
  })

  test('builds a branch name from the SDK name and version', () => {
    const prerelease = convertReleaseToMintlifyEntry({
      ...baseInput,
      repoDisplayName: 'Box Node SDK',
      version: 'v1.0.0-beta.1'
    })

    expect(prerelease.branchName).toBe('box-node-sdk-v1-0-0-beta-1')
  })

  test('wraps the release in an Update block with a blank line before the closing tag', () => {
    const result = convertReleaseToMintlifyEntry(baseInput)

    expect(result.mdxContent).toBe([
      '<Update label="2025-12-19" tags={["SDKs", ".NET"]}>',
      '## Box Windows SDK `v6.4.0` released',
      '',
      '### New Features',
      '',
      '* Added great things.',
      '',
      '</Update>'
    ].join('\n'))
  })

  test('converts a real SDK changelog entry to the box-mintlify format', async () => {
    const entry = await readParsedEntry('content/2026/08-26-box-java-sdk-v5151-released.md')
    const result = convertReleaseToMintlifyEntry(entry)

    expect(result.mdxContent).toBe([
      '<Update label="2026-08-26" tags={["SDKs", "Java"]}>',
      '## Box Java SDK `v5.15.1` released',
      '',
      '### Bug Fixes',
      '',
      '* **boxsdkgen:** avoid null chunk when file size is a multiple of part size ' +
        '([box/box-codegen#980](https://github.com/box/box-codegen/issues/980)) ' +
        '([box-java-sdk#1966](https://github.com/box/box-java-sdk/issues/1966)) ' +
        '([`d737c81`](https://github.com/box/box-java-sdk/commit/d737c810ef04781738537c77060a720452ce53ba))',
      '',
      '</Update>'
    ].join('\n'))
  })

  test('converts a real Box UI Elements changelog entry', async () => {
    const entry = await readParsedEntry('content/2026/01-05-box-ui-elements-v2600-released.md')
    const result = convertReleaseToMintlifyEntry(entry)

    expect(result.filePath).toBe('changelog/2026.mdx')
    expect(result.mdxContent).toContain('tags={["Frontend", "UI Elements"]}')
    expect(result.mdxContent).toContain('## Box UI Elements `v26.0.0` released')
    expect(result.mdxContent).toContain('### [26.0.0](https://github.com/box/box-ui-elements/compare/')
    expect(result.mdxContent).not.toMatch(/^\[\d+\]:/m)
  })
})

describe('convertMarkdownBody', () => {
  test('inlines reference links and removes their definitions', () => {
    const body = [
      '* Fix things ([`abc1234`][1])',
      '',
      '[1]: https://github.com/box/box-node-sdk/commit/abc1234'
    ].join('\n')

    expect(convertMarkdownBody(body)).toBe(
      '* Fix things ([`abc1234`](https://github.com/box/box-node-sdk/commit/abc1234))'
    )
  })

  test('points cross-repository references at the referenced repository', () => {
    const body = [
      '* Add feature (box/box-openapi[#615][1]) ([#1558][2])',
      '',
      '[1]: https://github.com/box/box-python-sdk/issues/615',
      '[2]: https://github.com/box/box-python-sdk/issues/1558'
    ].join('\n')

    expect(convertMarkdownBody(body)).toBe(
      '* Add feature ([box/box-openapi#615](https://github.com/box/box-openapi/issues/615)) ' +
      '([box-python-sdk#1558](https://github.com/box/box-python-sdk/issues/1558))'
    )
  })

  test('demotes top-level headings inside the release body', () => {
    expect(convertMarkdownBody('# 26.0.0 (2026-01-05)\n\n### Features')).toBe(
      '### 26.0.0 (2026-01-05)\n\n### Features'
    )
  })

  test('escapes characters that MDX would parse as JSX outside of code', () => {
    const body = [
      '* Limit cryptography to version <3.5.0 and keep {config} `List<String>`',
      '',
      '<https://www.nuget.org/packages/Box.V2/4.0.0>',
      '',
      '```js',
      'const value = { a: 1 } < 2',
      '```'
    ].join('\n')

    expect(convertMarkdownBody(body)).toBe([
      '* Limit cryptography to version \\<3.5.0 and keep \\{config\\} `List<String>`',
      '',
      'https://www.nuget.org/packages/Box.V2/4.0.0',
      '',
      '```js',
      'const value = { a: 1 } < 2',
      '```'
    ].join('\n'))
  })
})
