import fs from 'fs'
import axios from 'axios'
import nock from 'nock'

import { GitHub } from '../../src/Importer/github'

axios.defaults.adapter = require('axios/lib/adapters/http')

describe('#constructor', () => {
  test('should store instance variables', () => {
    const repository = jest.fn()
    const tag = jest.fn()
    const token = jest.fn()

    const github = new GitHub({ token, tag, repository })
    expect(github.repository).toEqual(repository)
    expect(github.tag).toEqual(tag)
    expect(github.token).toEqual(token)
  })
}) 

describe('.relevantReleases', () => {
  let repository = null
  let tag = null
  let token = null
  let github = null
  let releases = JSON.parse(fs.readFileSync('./tests/importer/releases.json'))

  beforeEach(() => {
    repository = 'cbetta/actions-test'
    tag = 'v1.0.16'
    token = '[my-token]'

    github = new GitHub({ token, tag, repository })
  })

  test('should determine the previous and current release', async (done) => {
    const page1 = nock('https://api.github.com')
      .get(`/repos/${repository}/releases?page=1`)
      .reply(200, JSON.stringify(releases))
   
    const page2 = nock('https://api.github.com')
      .get(`/repos/${repository}/releases?page=2`)
      .reply(200, '[]')

    const { currentRelease, previousRelease } = await github.relevantReleases() 
    
    expect(currentRelease).toEqual(releases[0])
    expect(previousRelease).toEqual(releases[1])

    page1.done()
    page2.done()
    done()
  })

  test('should be able to cope with no previous release', async (done) => {
    tag = 'v0.0.1'
    github = new GitHub({ token, tag, repository })

    const page1 = nock('https://api.github.com')
      .get(`/repos/${repository}/releases?page=1`)
      .reply(200, JSON.stringify(releases))
   
    const page2 = nock('https://api.github.com')
      .get(`/repos/${repository}/releases?page=2`)
      .reply(200, '[]')

    const { currentRelease, previousRelease } = await github.relevantReleases() 
    
    expect(currentRelease).toEqual(releases[28])
    expect(previousRelease).toBeUndefined()

    page1.done()
    page2.done()
    done()
  })
})