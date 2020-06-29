import fs, { removeSync } from 'fs-extra'
import axios from 'axios'
import nock from 'nock'

import Importer from '../../src/Importer'

axios.defaults.adapter = require('axios/lib/adapters/http')

const destination =  './tmp'
const expectedFilename = 'tmp/2020/06-25-test-v1010-released.md'
const expectedContent = `---
applied_at: '2020-06-25'
applies_to:
  - test
  - ' foo'
is_impactful: false
is_new_feature: false
source_url: 'https://github.com/cbetta/actions-test/releases/tag/v1.0.10'
---

# Test \`v1.0.10\` released

This is a test.
`

describe('.importRelease', () => {
  beforeEach(() => {
    fs.remove(destination)
  })

  afterEach(() => {
    fs.remove(destination)
  })

  test('should create a new release', async (done) => {
    const releases = JSON.parse(fs.readFileSync('./tests/importer/releases.json'))

    process.env.REPOSITORY = 'cbetta/actions-test'
    process.env.REPO_DISPLAY_NAME = 'Test'
    process.env.TAG = 'v1.0.10'
    process.env.GITHUB_TOKEN = '[token]'
    process.env.LABELS = 'test, foo'

    const page1 = nock('https://api.github.com')
      .get(`/repos/${process.env.REPOSITORY}/releases?page=1`)
      .reply(200, JSON.stringify(releases))
   
    const page2 = nock('https://api.github.com')
      .get(`/repos/${process.env.REPOSITORY}/releases?page=2`)
      .reply(200, '[]')

    expect(fs.existsSync(expectedFilename)).toBeFalsy()

    const importer = new Importer()
    await importer.importRelease({ destination })

    expect(fs.existsSync(expectedFilename)).toBeTruthy()
    expect(String(fs.readFileSync(expectedFilename))).toEqual(expectedContent)

    page1.done()
    page2.done()

    done()
  })
}) 