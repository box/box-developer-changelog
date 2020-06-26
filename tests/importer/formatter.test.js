import { Formatter } from '../../src/Importer/formatter'

describe('#constructor', () => {
  test('should store instance variables', () => {
    const titleTemplate = jest.fn()
    const labels = 'foo,bar'
    const repository = jest.fn()

    const formatter = new Formatter({ titleTemplate, labels, repository })
    expect(formatter.titleTemplate).toEqual(titleTemplate)
    expect(formatter.labels).toEqual(['foo', 'bar'])
    expect(formatter.repository).toEqual(repository)
  })
}) 


describe('.format', () => {
  let formatter = null

  beforeEach(() => {
    const titleTemplate = `Test Project`
    const labels = 'foo,bar'
    const repository = `test/test-sdk`
    
    formatter = new Formatter({ titleTemplate, labels, repository })
  })

  test('should return markdown and filename', () => {
    const currentRelease = {
      tag_name: 'v1.1.0',
      body: `This is a new release.`,
      html_url: 'https://github.com/test/test-sdk/releases/tag/v1.1.0',
      published_at: "2013-02-27T19:35:32Z"
    }

    const previousRelease = {
      tag_name: 'v1.0.1'
    }

    const { markdown, filename } = formatter.format({ currentRelease, previousRelease })

    expect(filename).toEqual('2013/02-27-test-project-v110.md')
    expect(markdown).toEqual(`---
applied_at: '2013-02-27'
applies_to:
  - foo
  - bar
is_impactful: false
is_new_feature: true
source_url: 'https://github.com/test/test-sdk/releases/tag/v1.1.0'
---

# Test Project v1.1.0

This is a new release.
`)
  })
}) 

describe(`.sanitize`, () => {
  let formatter = null

  beforeEach(() => {
    const titleTemplate = `Test Project`
    const labels = 'foo,bar'
    const repository = `test/test-sdk`
    
    formatter = new Formatter({ titleTemplate, labels, repository })
  })

  test('should convert relative URLs', () => {
    const body = 'Test\n\n[0]: ./docs/guide.md'
    const markdown = formatter.sanitize(body)
    expect(markdown).toBe('Test\n\n[0]: https://github.com/test/test-sdk/blob/master/docs/guide.md\n')
  })

  test('should codify hashes', () => {
    const body = 'Test\n\n([abcdef1][1])'
    const markdown = formatter.sanitize(body)
    expect(markdown).toBe('Test\n\n([`abcdef1`][1])\n')
  })

  test('should codify usernames', () => {
    const body = 'Test\n\n([@cbetta][1])'
    const markdown = formatter.sanitize(body)
    expect(markdown).toBe('Test\n\n([`@cbetta`][1])\n')
  })

  test('should fix generic fixable markdown errors', () => {
    const body = 'Test\n\n-  Too many spaces\n-  In front of these lists'
    const markdown = formatter.sanitize(body)
    expect(markdown).toBe('Test\n\n- Too many spaces\n- In front of these lists\n')
  })
})

describe(`.determineImpact`, () => {
  let formatter = null

  beforeEach(() => {
    const titleTemplate = jest.fn()
    const labels = 'foo,bar'
    const repository = jest.fn()
    
    formatter = new Formatter({ titleTemplate, labels, repository })
  })

  test('should not have any impact or new feature for patch releases', () => {
    const currentRelease = { tag_name: 'v1.0.1' }
    const previousRelease = { tag_name: 'v1.0.0' }
    const { newFeature, impactful } = formatter.determineImpact({ currentRelease, previousRelease })
    expect(newFeature).toBeFalsy()
    expect(impactful).toBeFalsy()
  })

  test('should not have a new feature for minor releases', () => {
    const currentRelease = { tag_name: 'v1.1.0' }
    const previousRelease = { tag_name: 'v1.0.1' }
    const { newFeature, impactful } = formatter.determineImpact({ currentRelease, previousRelease })
    expect(newFeature).toBeTruthy()
    expect(impactful).toBeFalsy()
  })

  test('should have impact and new features for major releases', () => {
    const currentRelease = { tag_name: 'v2.0.0' }
    const previousRelease = { tag_name: 'v1.1.0' }
    const { newFeature, impactful } = formatter.determineImpact({ currentRelease, previousRelease })
    expect(newFeature).toBeTruthy()
    expect(impactful).toBeTruthy()
  })


  test('should be able to deal with no previous version', () => {
    const currentRelease = { tag_name: 'v0.0.1' }
    const previousRelease = null
    const { newFeature, impactful } = formatter.determineImpact({ currentRelease, previousRelease })
    expect(newFeature).toBeFalsy()
    expect(impactful).toBeFalsy()
  })
})