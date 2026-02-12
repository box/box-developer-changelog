const { cleanReleaseBody } = require('../../src/MintlifySync/cleanup')

describe('cleanReleaseBody', () => {
  const repository = 'box/box-windows-sdk-v2'

  test('converts @username mentions and leaves emails unchanged', () => {
    const cleaned = cleanReleaseBody({
      repository,
      body: 'Thanks @user123 and @user-name.\nContact user@example.com.'
    })

    expect(cleaned).toContain('`user123`')
    expect(cleaned).toContain('`user-name`')
    expect(cleaned).toContain('user@example.com')
  })

  test('does not change @username mentions in fenced or inline code', () => {
    const cleaned = cleanReleaseBody({
      repository,
      body: 'Inline `@keep-inline`\n\n```js\nconst owner = "@keep-code-block"\n```'
    })

    expect(cleaned).toContain('`@keep-inline`')
    expect(cleaned).toContain('"@keep-code-block"')
  })

  test('converts standalone issue references and leaves links/urls unchanged', () => {
    const cleaned = cleanReleaseBody({
      repository,
      body: [
        'Fixes #123',
        '[#456](https://github.com/box/box-windows-sdk-v2/issues/456)',
        'https://github.com/box/box-windows-sdk-v2/issues/789#issuecomment-1'
      ].join('\n')
    })

    expect(cleaned).toContain(
      '[#123](https://github.com/box/box-windows-sdk-v2/issues/123)'
    )
    expect(cleaned).toContain(
      '[#456](https://github.com/box/box-windows-sdk-v2/issues/456)'
    )
    expect(cleaned).toContain(
      'https://github.com/box/box-windows-sdk-v2/issues/789#issuecomment-1'
    )
  })

  test('converts relative markdown links to absolute GitHub blob/main URLs', () => {
    const cleaned = cleanReleaseBody({
      repository,
      body: '[Docs](./docs/README.md)\n[Absolute](https://example.com/docs)'
    })

    expect(cleaned).toContain(
      '[Docs](https://github.com/box/box-windows-sdk-v2/blob/main/docs/README.md)'
    )
    expect(cleaned).toContain('[Absolute](https://example.com/docs)')
  })

  test('wraps bare commit hashes and leaves short or already-coded values unchanged', () => {
    const cleaned = cleanReleaseBody({
      repository,
      body: 'Commit abc1234def and short abc12. Inline `deadbeef`.'
    })

    expect(cleaned).toContain('`abc1234def`')
    expect(cleaned).toContain('abc12')
    expect(cleaned).toContain('`deadbeef`')
  })

  test('preserves reference-style links as-is', () => {
    const cleaned = cleanReleaseBody({
      repository,
      body: ['See [ref][1]', '', '[1]: https://example.com', '[2]: ./docs/README.md'].join('\n')
    })

    expect(cleaned).toContain('[1]: https://example.com')
    expect(cleaned).toContain('[2]: ./docs/README.md')
  })
})
