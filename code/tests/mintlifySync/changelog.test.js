const path = require('path')
const fs = require('fs-extra')

const {
  loadEligibleChangelogEntries,
  parseChangelogEntry,
  resolveCandidateContentPaths
} = require('../../src/MintlifySync/changelog')

const REPO_ROOT = path.resolve(__dirname, '../../..')

async function readChangelog(contentPath) {
  return fs.readFile(path.join(REPO_ROOT, contentPath), 'utf8')
}

describe('Mintlify changelog parsing', () => {
  test('parses real merged release changelog files', async () => {
    const cases = [
      {
        contentPath: 'content/2026/04-01-box-java-sdk-v1070-released.md',
        appliedAt: '2026-04-01',
        repoDisplayName: 'Box Java SDK',
        version: 'v10.7.0',
        labels: ['sdks', 'java'],
        isSdkRelease: true
      },
      {
        contentPath: 'content/2026/04-01-box-java-sdk-v560-released.md',
        appliedAt: '2026-04-01',
        repoDisplayName: 'Box Java SDK',
        version: 'v5.6.0',
        labels: ['sdks', 'java'],
        isSdkRelease: true
      },
      {
        contentPath: 'content/2026/04-01-box-ios-sdk-1060-released.md',
        appliedAt: '2026-04-01',
        repoDisplayName: 'Box iOS SDK',
        version: '10.6.0',
        labels: ['sdks', 'swift'],
        isSdkRelease: true
      },
      {
        contentPath: 'content/2026/04-01-box-windows-sdk-v1080-released.md',
        appliedAt: '2026-04-01',
        repoDisplayName: 'Box Windows SDK',
        version: 'v10.8.0',
        labels: ['sdks', 'dotnet'],
        isSdkRelease: true
      },
      {
        contentPath: 'content/2026/01-05-box-ui-elements-v2600-released.md',
        appliedAt: '2026-01-05',
        repoDisplayName: 'Box UI Elements',
        version: 'v26.0.0',
        labels: ['frontend', 'ui-elements'],
        isSdkRelease: false
      }
    ]

    for (const testCase of cases) {
      const content = await readChangelog(testCase.contentPath)
      const entry = parseChangelogEntry({
        content,
        contentPath: testCase.contentPath
      })

      expect(entry.isMintlifySyncEligible).toBeTruthy()
      expect(entry.isSdkRelease).toBe(testCase.isSdkRelease)
      expect(entry.appliedAt).toBe(testCase.appliedAt)
      expect(entry.repoDisplayName).toBe(testCase.repoDisplayName)
      expect(entry.version).toBe(testCase.version)
      expect(entry.labels).toEqual(testCase.labels)
      expect(entry.releaseSourceUrl).toContain('/releases/tag/')
      expect(entry.body).toContain('###')
    }
  })

  test('loads eligible release entries and skips non-release posts', async () => {
    const entries = await loadEligibleChangelogEntries({
      repoPath: REPO_ROOT,
      contentPaths: [
        'content/2026/01-05-box-ui-elements-v2600-released.md',
        'content/2026/04-01-box-java-sdk-v1070-released.md',
        'content/2026/04-02-new-ai-models.md',
        'content/2026/04-01-box-ios-sdk-1060-released.md'
      ]
    })

    expect(entries.map((entry) => entry.contentPath)).toEqual([
      'content/2026/01-05-box-ui-elements-v2600-released.md',
      'content/2026/04-01-box-ios-sdk-1060-released.md',
      'content/2026/04-01-box-java-sdk-v1070-released.md'
    ])
  })

  test('supports manual workflow content path input with commas, newlines, and duplicates', () => {
    const contentPaths = [
      'content/2026/04-01-box-java-sdk-v1070-released.md,',
      'content/2026/04-01-box-ios-sdk-1060-released.md',
      'content/2026/04-01-box-java-sdk-v1070-released.md',
      'content/2026/04-02-new-ai-models.md'
    ].join('\n')

    expect(resolveCandidateContentPaths({ contentPaths })).toEqual([
      'content/2026/04-01-box-java-sdk-v1070-released.md',
      'content/2026/04-01-box-ios-sdk-1060-released.md',
      'content/2026/04-02-new-ai-models.md'
    ])
  })
})
