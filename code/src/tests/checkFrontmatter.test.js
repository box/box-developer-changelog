const glob = require('glob')

const files = glob.sync('content/**/*.md')

const FrontmatterValidator = require('../FrontmatterValidator')

files.forEach(source => {
  test('check all frontmatter is valid', () => {
    const validator = new FrontmatterValidator(source)
    expect(validator).keysAreIn([
      'applied_at',
      'applies_to',
      'is_impactful',
      'is_new_feature',
      'source_url',
      'release_source_url',
      'alias_paths',
      'collapse',
      'show_excerpt'
    ])

    expect(validator).isArray('applies_to')
    expect(validator).isArray('alias_paths')
    expect(validator).isBoolean('is_new_feature')
    expect(validator).isBoolean('is_impactful')
    expect(validator).isBoolean('collapse')
    expect(validator).isBoolean('show_excerpt')
    expect(validator).isBoolean('is_impactful')
    expect(validator).isString('applied_at') 
    expect(validator).isString('source_url')   
    expect(validator).isString('release_source_url')   

    expect(validator).isOneOf('applies_to', [
      'sdks',
      'node',
      'python',
      'swift',
      'typescript',
      'windows',
      'java',
      'cli',
      'dotnet',
      'mobile',
      'ios',
      'android',
      'api',
      'content-preview',
      'ui-elements',
      'postman',
      'salesforce',
      'reports',
      'guides',
      'other',
      'frontend',
      'ui-elements'
    ])
  })
})

expect.extend({
  keysAreIn(validator, keys) {
    return validator.validateKeysAreIn(keys)
  }
})


expect.extend({
  isArray(validator, key) {
    return validator.validateIsArray(key)
  }
})

expect.extend({
  isNumeric(validator, key) {
    return validator.validateIsNumeric(key)
  }
})

expect.extend({
  isBoolean(validator, key) {
    return validator.validateIsBoolean(key)
  }
})

expect.extend({
  isOneOf(validator, key, values) {
    return validator.validateIsOneOf(key, values)
  }
})

expect.extend({
  isString(validator, key, values) {
    return validator.validateIsString(key)
  }
})
