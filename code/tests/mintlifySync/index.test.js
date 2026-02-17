const { extractTagFromRef } = require('../../src/MintlifySync/index')

describe('extractTagFromRef', () => {
  test('strips refs/tags/ prefix', () => {
    expect(extractTagFromRef('refs/tags/v6.4.0')).toBe('v6.4.0')
  })

  test('returns bare tag unchanged', () => {
    expect(extractTagFromRef('v6.4.0')).toBe('v6.4.0')
  })

  test('handles tag with nested slashes after prefix', () => {
    expect(extractTagFromRef('refs/tags/release/v1.0.0')).toBe('release/v1.0.0')
  })

  test('throws on empty string', () => {
    expect(() => extractTagFromRef('')).toThrow('Invalid "REF"')
  })

  test('throws on whitespace-only string', () => {
    expect(() => extractTagFromRef('   ')).toThrow('Invalid "REF"')
  })

  test('throws on non-string input', () => {
    expect(() => extractTagFromRef(undefined)).toThrow('Invalid "REF"')
    expect(() => extractTagFromRef(null)).toThrow('Invalid "REF"')
  })
})
