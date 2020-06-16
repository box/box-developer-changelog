require('dotenv').config()

const glob = require('glob')

const Path = require('../Path')
const path = new Path('CONTENT')
path.translate()

const files = glob.sync('content/**/*.md')
const allFiles = [
  ...glob.sync('content/**/*.?(png|gif|jpg|md|jpeg)'),
  ...glob.sync(`${path.folder}/**/*.?(png|gif|jpg|md|jpeg)`).map(link => link.replace(/\/\d*-/g, '/'))
]

const LinkValidator = require('../LinkValidator')

files.forEach(source => {
  test('check all local links are valid', () => {
    const validator = new LinkValidator(source, allFiles)
    expect(validator).toHaveValidLocalLinks()
    expect(validator).toHaveValidLocalReferenceLinks()
    expect(validator).toHaveValidReferences()
    expect(validator).toHaveValidGuideOrPageLinks()
    expect(validator).toHaveValidRelatedFrontmatter()
  })
})

expect.extend({
  toHaveValidLocalLinks(validator) {
    const links = validator.localLinks()
    const errors = validator.validateLocalLinks(links)
    return validator.linkResponse(errors)
  }
})

expect.extend({
  toHaveValidLocalReferenceLinks(validator) {
    const links = validator.localReferenceLinks()
    const errors = validator.validateLocalLinks(links)
    return validator.linkResponse(errors)    
  }
})

expect.extend({
  toHaveValidReferences(validator) {
    const references = validator.localReferences()
    const errors = validator.validateReferences(references)
    return validator.referenceResponse(errors)
  }
})

expect.extend({
  toHaveValidGuideOrPageLinks(validator) {
    const links = validator.guideOrPageLinks(path.folder)
    const errors = validator.validateLocalLinks(links)
    return validator.linkResponse(errors)    
  }
})

expect.extend({
  toHaveValidRelatedFrontmatter(validator) {
    const links = validator.frontmatterGuidesAndPages()
    const errors = validator.validateLocalLinks(links)
    return validator.linkResponse(errors)    
  }
})