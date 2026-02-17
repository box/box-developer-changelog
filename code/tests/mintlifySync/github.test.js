/**
 * @jest-environment node
 */

const nock = require('nock')
const { fetchReleaseByTag } = require('../../src/MintlifySync/github')

describe('fetchReleaseByTag', () => {
  const repository = 'box/box-windows-sdk-v2'
  const tag = 'v6.4.0'
  const releasePath = `/repos/${repository}/releases/tags/${tag}`

  afterEach(() => {
    nock.cleanAll()
  })

  test('returns body, published_at and html_url on success', async () => {
    const scope = nock('https://api.github.com')
      .get(releasePath)
      .reply(200, {
        body: '### Changes\n* Fixed bug',
        published_at: '2025-12-19T08:10:11Z',
        html_url: `https://github.com/${repository}/releases/tag/${tag}`,
        extra_field: 'should be ignored'
      })

    const result = await fetchReleaseByTag({ repository, tag, token: 'test-token' })

    expect(result).toEqual({
      body: '### Changes\n* Fixed bug',
      published_at: '2025-12-19T08:10:11Z',
      html_url: `https://github.com/${repository}/releases/tag/${tag}`
    })
    scope.done()
  })

  test('returns empty string when release body is null', async () => {
    const scope = nock('https://api.github.com')
      .get(releasePath)
      .reply(200, { body: null, published_at: '2025-12-19T00:00:00Z', html_url: '' })

    const result = await fetchReleaseByTag({ repository, tag, token: 'test-token' })

    expect(result.body).toBe('')
    scope.done()
  })

  test('sends Authorization header when token is provided', async () => {
    const scope = nock('https://api.github.com', {
      reqheaders: { Authorization: 'token my-secret' }
    })
      .get(releasePath)
      .reply(200, { body: '', published_at: '', html_url: '' })

    await fetchReleaseByTag({ repository, tag, token: 'my-secret' })
    scope.done()
  })

  test('omits Authorization header when token is absent', async () => {
    const scope = nock('https://api.github.com', {
      badheaders: ['Authorization']
    })
      .get(releasePath)
      .reply(200, { body: '', published_at: '', html_url: '' })

    // Explicit null overrides the process.env.GITHUB_TOKEN default
    await fetchReleaseByTag({ repository, tag, token: null })
    scope.done()
  })

  test('throws descriptive error on 404', async () => {
    nock('https://api.github.com').get(releasePath).reply(404)

    await expect(
      fetchReleaseByTag({ repository, tag, token: 'test-token' })
    ).rejects.toThrow(`Release "${tag}" not found for repository "${repository}".`)
  })

  test('throws authentication error on 401', async () => {
    nock('https://api.github.com').get(releasePath).reply(401)

    await expect(
      fetchReleaseByTag({ repository, tag, token: 'bad-token' })
    ).rejects.toThrow('GitHub API authentication failed')
  })

  test('throws authentication error on 403', async () => {
    nock('https://api.github.com').get(releasePath).reply(403)

    await expect(
      fetchReleaseByTag({ repository, tag, token: 'bad-token' })
    ).rejects.toThrow('GitHub API authentication failed')
  })

  test('throws network error on ENOTFOUND', async () => {
    nock('https://api.github.com')
      .get(releasePath)
      .replyWithError({ message: 'getaddrinfo ENOTFOUND', code: 'ENOTFOUND' })

    await expect(
      fetchReleaseByTag({ repository, tag, token: 'test-token' })
    ).rejects.toThrow('Network error')
  })
})
