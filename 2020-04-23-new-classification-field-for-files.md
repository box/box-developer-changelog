---
applied_at: '2020-04-23'
applies_to:
  - api
is_impactful: false
is_new_feature: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2020-04-23-new-classification-field-for-files
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2020-04-24-python-sdk-v280-release
previous_page_id: 2020-04-23-java-sdk-v2470-release
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2020/04-23-new-classification-field-for-files.md
---
# New `classification` field for Files

A new optional field has been made available within the `Field` object,
`classification`. This field represents the classification that is currently
applied to a file.

The classification can be requested via any endpoint that returns a file, like
the [Get file information](endpoint://get-files-id) and supports [requesting
additional `fields`](g://api-calls/request-extra-fields).

```js
{
  "id": "123456789",
  "type": "file",
  "etag": "1",
  "classification": {     
    "name": "Top Secret",     
    "definition": "Content that should not be shared outside the company.",
    "color": "#FF0000"
  },
  ...
}
```

The classification can be set through the API, Box Shield, or by a user using
the web application.