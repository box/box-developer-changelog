const Processor = require('../src/processor')
let processor = null

beforeAll(() => {
  processor = new Processor({ sourcePath: './content/guides/foo.md' })
})

test('should transform a complicated use case', () => {
  const isGuide = false
  const contents = `
---
---

<Foobar id='no1' data-type="type" disabled>
  Hello
  
  Extra whitespace around here  
  
  <Message data-disabled='true' warning>
    # Title 

    This is a paragraph
  </Message>

  <Image data-id="test">![Test](./img.png)</Image>

  <Tabs>
    <Tab id='Node>
      \`\`\`js
      [1,2,3].map(i => (
        i+1
      ))
      
      # whitespace above and after: 
      \`\`\`
    </Tab>
  </Tabs>
</Foobar>`

  const output = processor.transform({ contents, isGuide })
  expect(output).toEqual(`
---
---
<Foobar id='no1' data-type="type" disabled>

Hello

Extra whitespace around here

<Message data-disabled='true' warning>

# Title

This is a paragraph

</Message>

<Image data-id="test">

![Test](./img.png)

</Image>

<Tabs>

<Tab id='Node>

\`\`\`js
[1,2,3].map(i => (
  i+1
))

# whitespace above and after: 
\`\`\`

</Tab>

</Tabs>

</Foobar>`)})

test('should inline tags', () => {
  const contents = `
---
---
<Header 
  to='/guides'
  centered
>
  Developer News
</Header>
`

const output = processor.transform({ contents, isGuide: false })

expect(output).toEqual(`
---
---
<Header to='/guides' centered >

Developer News

</Header>`)
})