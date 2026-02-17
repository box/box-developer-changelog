const { convertReleaseToMintlifyEntry } = require('../../src/MintlifySync/converter')

describe('convertReleaseToMintlifyEntry', () => {
  const baseInput = {
    repoDisplayName: 'Box Windows SDK',
    labels: 'sdks,windows',
    version: 'v6.4.0',
    publishedAt: '2025-12-19T08:10:11Z',
    body: '### New Features\n\n* Added great things.'
  }

  test('maps labels to tags for all SDK variants', () => {
    const cases = [
      { labels: 'sdks,java', expected: '["SDKs","Java"]' },
      { labels: 'sdks,python', expected: '["SDKs","Python"]' },
      { labels: 'sdks,node', expected: '["SDKs","Node"]' },
      { labels: 'sdks,windows', expected: '["SDKs","Windows"]' },
      { labels: 'sdks,ios', expected: '["SDKs","iOS"]' }
    ]

    cases.forEach((entry) => {
      const result = convertReleaseToMintlifyEntry({
        ...baseInput,
        labels: entry.labels
      })
      expect(result.mdxContent).toContain(`tags={${entry.expected}}`)
    })
  })

  test('builds component names with V prefix for non-iOS SDKs', () => {
    const windows = convertReleaseToMintlifyEntry(baseInput)
    expect(windows.componentName).toBe('BoxWindowsSdkV640Released_2025_12_19')

    const java = convertReleaseToMintlifyEntry({
      ...baseInput,
      repoDisplayName: 'Box Java SDK',
      labels: 'sdks,java',
      version: 'v4.5.0'
    })
    expect(java.componentName).toBe('BoxJavaSdkV450Released_2025_12_19')
  })

  test('builds component names without V prefix for iOS', () => {
    const ios = convertReleaseToMintlifyEntry({
      ...baseInput,
      repoDisplayName: 'Box iOS SDK',
      labels: 'sdks,ios',
      version: 'v6.3.0'
    })

    expect(ios.componentName).toBe('BoxIosSdk630Released_2025_12_19')
  })

  test('handles pre-release and single-digit versions', () => {
    const prerelease = convertReleaseToMintlifyEntry({
      ...baseInput,
      repoDisplayName: 'Box Node SDK',
      labels: 'sdks,node',
      version: 'v1.0.0-beta.1'
    })

    const singleDigit = convertReleaseToMintlifyEntry({
      ...baseInput,
      repoDisplayName: 'Box Python SDK',
      labels: 'sdks,python',
      version: 'v1.0.0'
    })

    expect(prerelease.componentName).toBe('BoxNodeSdkV100beta1Released_2025_12_19')
    expect(singleDigit.componentName).toBe('BoxPythonSdkV100Released_2025_12_19')
  })

  test('generates file path with year and normalized slug', () => {
    const result = convertReleaseToMintlifyEntry(baseInput)

    expect(result.filePath).toBe(
      'snippets/changelog/2025/12-19-box-windows-sdk-v640-released.mdx'
    )
    expect(result.filePath.endsWith('.mdx')).toBeTruthy()
  })

  test('generates expected MDX wrapper and heading format', () => {
    const result = convertReleaseToMintlifyEntry(baseInput)

    expect(result.mdxContent.startsWith('<Update label="2025-12-19"')).toBeTruthy()
    expect(result.mdxContent).toContain('## Box Windows SDK `v6.4.0` released')
    expect(result.mdxContent).toContain('### New Features')
    expect(result.mdxContent).toContain('* Added great things.')
    expect(result.mdxContent.endsWith('</Update>')).toBeTruthy()
  })
})
