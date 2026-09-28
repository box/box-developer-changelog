const {
  addYearToDocsConfig,
  createYearPage,
  insertEntryIntoYearPage
} = require('../../src/MintlifySync/yearPage')

function buildEntry(label, name) {
  const heading = `## ${name} released`
  return {
    heading,
    label,
    mdxContent: `<Update label="${label}" tags={["SDKs"]}>\n${heading}\n\n* Change\n\n</Update>`
  }
}

const PAGE = [
  '---',
  'title: "2026"',
  'rss: true',
  '---',
  'import { Link } from "/snippets/Link.jsx";',
  '',
  'Intro paragraph.',
  '',
  '<Update label="2026-09-09" tags={["SDKs"]}>',
  '## Newer released',
  '',
  '</Update>',
  '',
  '<Update label="2026-08-05" tags={["SDKs"]}>',
  '## Older released',
  '',
  '</Update>',
  ''
].join('\n')

describe('insertEntryIntoYearPage', () => {
  test('inserts the entry before the first entry with the same or an older date', () => {
    const { content, inserted } = insertEntryIntoYearPage({
      entry: buildEntry('2026-08-26', 'Middle'),
      pageContent: PAGE
    })

    expect(inserted).toBe(true)
    expect(content).toContain(
      '## Newer released\n\n</Update>\n\n<Update label="2026-08-26" tags={["SDKs"]}>\n## Middle released\n\n* Change\n\n</Update>\n\n<Update label="2026-08-05"'
    )
  })

  test('puts the newest entry at the top, after the page introduction', () => {
    const { content } = insertEntryIntoYearPage({
      entry: buildEntry('2026-09-09', 'Same day'),
      pageContent: PAGE
    })

    expect(content).toContain('Intro paragraph.\n\n<Update label="2026-09-09" tags={["SDKs"]}>\n## Same day released')
    expect(content.indexOf('## Same day released')).toBeLessThan(content.indexOf('## Newer released'))
  })

  test('appends the entry when every existing entry is newer', () => {
    const { content } = insertEntryIntoYearPage({
      entry: buildEntry('2026-01-02', 'Oldest'),
      pageContent: PAGE
    })

    expect(content.endsWith('## Oldest released\n\n* Change\n\n</Update>\n')).toBe(true)
  })

  test('adds the first entry to an empty year page', () => {
    const { content } = insertEntryIntoYearPage({
      entry: buildEntry('2027-01-05', 'First'),
      pageContent: createYearPage('2027')
    })

    expect(content).toContain('feed reader.\n\n<Update label="2027-01-05"')
    expect(content.endsWith('</Update>\n')).toBe(true)
  })

  test('does not insert an entry that is already on the page', () => {
    const result = insertEntryIntoYearPage({
      entry: buildEntry('2026-08-05', 'Older'),
      pageContent: PAGE
    })

    expect(result).toEqual({ content: PAGE, inserted: false })
  })
})

describe('createYearPage', () => {
  test('uses the same frontmatter and RSS introduction as existing year pages', () => {
    expect(createYearPage('2027')).toBe([
      '---',
      'title: "2027"',
      'description: "Box Platform changelog: API, SDK, and product updates from 2027."',
      'rss: true',
      '---',
      'import { Link } from "/snippets/Link.jsx";',
      '',
      '[Subscribe to the changelog with RSS](/changelog/2027/rss.xml) to get new APIs, SDK releases, and platform updates delivered to your feed reader.',
      ''
    ].join('\n'))
  })
})

describe('addYearToDocsConfig', () => {
  const DOCS = [
    '{',
    '  "tabs": [',
    '    {',
    '      "tab": "Changelog",',
    '      "pages": [',
    '        "changelog/2026",',
    '        "changelog/2025"',
    '      ]',
    '    }',
    '  ],',
    '  "redirects": [',
    '    {',
    '      "source": "/changelog",',
    '      "destination": "/changelog/2026"',
    '    },',
    '    {',
    '      "source": "/changelog/rss.xml",',
    '      "destination": "/changelog/2026/rss.xml"',
    '    },',
    '    {',
    '      "source": "/changelog/2026/old-post",',
    '      "destination": "/changelog/2025"',
    '    }',
    '  ]',
    '}'
  ].join('\n')

  test('adds the new year at the top of the changelog tab and points the redirects to it', () => {
    const updated = addYearToDocsConfig({ docsContent: DOCS, year: '2027' })

    expect(updated).toContain('"pages": [\n        "changelog/2027",\n        "changelog/2026",')
    expect(updated).toContain('"source": "/changelog",\n      "destination": "/changelog/2027"')
    expect(updated).toContain('"source": "/changelog/rss.xml",\n      "destination": "/changelog/2027/rss.xml"')
    expect(updated).toContain('"destination": "/changelog/2025"')
    expect(() => JSON.parse(updated)).not.toThrow()
  })

  test('leaves docs.json unchanged when the year is already listed', () => {
    expect(addYearToDocsConfig({ docsContent: DOCS, year: '2026' })).toBe(DOCS)
  })

  test('refuses to add a year older than the latest year page', () => {
    expect(() => addYearToDocsConfig({ docsContent: DOCS, year: '2024' })).toThrow('older than changelog/2026')
  })
})
