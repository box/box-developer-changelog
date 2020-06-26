
import fs from 'fs-extra'

import { Writer } from '../../src/Importer/writer'

const destination = './tmp'

describe('.write', () => {
  beforeEach(() => {
    fs.remove(destination)
  })

  afterEach(() => {
    fs.remove(destination)
  })

  describe('#constructor', () => {
    test('should store instance variables', () => {
      const destination = jest.fn()
  
      const writer = new Writer({ destination })
      expect(writer.destination).toEqual(destination)
    })

    test('should default to the content dir', () => {  
      const writer = new Writer()
      expect(writer.destination).toEqual('./content')
    })
  }) 

  
  test('should write the content to file', () => {
    const writer = new Writer({ destination })
    const markdown = '# Test'
    const filename = '2020/03-20-box-node-sdk-v110-release.md'
    const destinationFilename = 'tmp/2020/03-20-box-node-sdk-v110-release.md'

    expect(fs.existsSync(filename)).toBeFalsy()
    writer.write({ filename, markdown })
    expect(fs.existsSync(destinationFilename)).toBeTruthy()
    expect(String(fs.readFileSync(destinationFilename))).toEqual(markdown)
  })
}) 
