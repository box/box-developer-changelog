---
applied_at: '2024-12-10'
applies_to:
  - api
is_impactful: true
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2024-12-10-upcoming-breaking-change-in-the-box-ai-api
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2024-12-30-box-typescript-sdk-generated-v1100-released
previous_page_id: 2024-12-09-box-typescript-sdk-generated-v190-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2024/12-10-upcoming-breaking-change-in-the-box-ai-api.md
published_at: '2024-12-10'
---
# Upcoming breaking change: Box AI API - Extract Structured

We would like to announce a planned breaking change in the Box AI API - Extract Structured endpoint. This change will bring improvements to the response by introducing additional fields and nesting the metadata key-value pairs within the answer object. **This change is planned to be released mid-January**. Be sure to follow our [changelog][1] and announcements on our [Box Developer Blog][2]. Expand to see code snippets examples:

<!-- more -->

Current response example:

```js
{
  "name": "Marie",
  "date": "10/2/23"
}
```

New response format example:

```js
{
  "answer": {
    "name": "Marie",
    "date": "10/2/23"
  },
  "completion_reason": "done",
  "created_at": "2012-12-12T10:53:43-08:00"
}
```

[1]: https://developer.box.com/changelog/
[2]: https://medium.com/box-developer-blog