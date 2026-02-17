const { updateMintlifyChangelogIndex } = require('../../src/MintlifySync/indexUpdater')

describe('updateMintlifyChangelogIndex', () => {
  const componentName = 'BoxWindowsSdkV640Released_2025_12_19'
  const filePath = 'snippets/changelog/2025/12-19-box-windows-sdk-v640-released.mdx'

  test('inserts import after frontmatter and before existing imports', () => {
    const content = [
      '---',
      'title: Changelog',
      'rss: true',
      '---',
      'import Existing from "/snippets/changelog/2025/12-01-existing.mdx";',
      '',
      '<Existing />',
      ''
    ].join('\n')

    const updated = updateMintlifyChangelogIndex({ componentName, filePath, indexContent: content })

    expect(updated).toContain(
      `import ${componentName} from "/${filePath}";\nimport Existing from "/snippets/changelog/2025/12-01-existing.mdx";`
    )
  })

  test('inserts component usage before first existing component with blank line', () => {
    const content = [
      '---',
      'title: Changelog',
      'rss: true',
      '---',
      'import Existing from "/snippets/changelog/2025/12-01-existing.mdx";',
      '',
      '<Existing />',
      ''
    ].join('\n')

    const updated = updateMintlifyChangelogIndex({ componentName, filePath, indexContent: content })

    expect(updated).toContain(
      `<${componentName} />\n\n<Existing />`
    )
  })

  test('handles empty index file with only frontmatter', () => {
    const content = ['---', 'title: Changelog', 'rss: true', '---', ''].join('\n')

    const updated = updateMintlifyChangelogIndex({ componentName, filePath, indexContent: content })

    expect(updated).toContain(`import ${componentName} from "/${filePath}";`)
    expect(updated).toContain(`<${componentName} />`)
  })

  test('is idempotent when component already exists', () => {
    const content = [
      '---',
      'title: Changelog',
      'rss: true',
      '---',
      `import ${componentName} from "/${filePath}";`,
      'import Existing from "/snippets/changelog/2025/12-01-existing.mdx";',
      '',
      `<${componentName} />`,
      '',
      '<Existing />',
      ''
    ].join('\n')

    const updated = updateMintlifyChangelogIndex({ componentName, filePath, indexContent: content })
    expect(updated).toBe(content)
  })
})
