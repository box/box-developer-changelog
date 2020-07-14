const Processor = require('../src/processor')
let processor = null

beforeAll(() => {
  processor = new Processor({ sourcePath: './content/2018/06-18-box-android-sdk-420-release.md'  })
})

test('should transform a complicated use case', () => {
  const contents = `---
applied_at: '2018-06-18'
applies_to:
  - sdks
  - mobile
  - android
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-android-sdk/releases/tag/v4.2.0'
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

  const output = processor.transform({ contents })
  expect(output).toEqual(`---
applied_at: '2018-06-18'
applies_to:
  - sdks
  - mobile
  - android
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-android-sdk/releases/tag/v4.2.0'
is_index: false
category_id: changelog
subcategory_id: ''
id: 2018-06-18-box-android-sdk-420-release
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2018-01-04-java-sdk-v290-release
previous_page_id: ''
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2018/06-18-box-android-sdk-420-release.md
published_at: '2018-06-18'
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
applied_at: '2018-06-18'
applies_to:
  - sdks
  - mobile
  - android
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-android-sdk/releases/tag/v4.2.0'
---
<Header 
  to='/guides'
  centered
>
  Developer News
</Header>
`

const output = processor.transform({ contents })

expect(output).toEqual(`
---
applied_at: '2018-06-18'
applies_to:
  - sdks
  - mobile
  - android
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-android-sdk/releases/tag/v4.2.0'
is_index: false
category_id: changelog
subcategory_id: ''
id: 2018-06-18-box-android-sdk-420-release
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2018-01-04-java-sdk-v290-release
previous_page_id: ''
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2018/06-18-box-android-sdk-420-release.md
published_at: '2018-06-18'
---
<Header to='/guides' centered >

Developer News

</Header>`)
})