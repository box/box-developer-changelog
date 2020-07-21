---
applied_at: '2019-02-08'
applies_to:
  - python
  - sdks
is_impactful: false
is_new_feature: true
collapse: true
release_source_url: 'https://github.com/box/box-python-sdk/releases/tag/v2.1.0'
is_index: false
category_id: changelog
subcategory_id: ''
id: 2019-02-08-python-sdk-v210-release
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2019-02-08-windows-net-sdk-v3120-release
previous_page_id: 2019-01-31-java-sdk-v2270-release
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2019/02-08-python-sdk-v210-release.md
published_at: '2019-02-08'
---
# Python SDK `v2.1.0` released

- Added ability for user to [chunk upload files](https://github.com/box/box-python-sdk/blob/master/docs/usage/files.md#chunked-upload) and resume uploads for interrupted uploads.
- Added ability to [verify webhook message](https://github.com/box/box-python-sdk/blob/master/docs/usage/webhook.md#validate-webhook-message)
- Added ability for user to add metadata classification to [files](https://github.com/box/box-python-sdk/blob/master/docs/usage/files.md#set-a-classification) and [folders](https://github.com/box/box-python-sdk/blob/master/docs/usage/folders.md#set-a-classification).
- Bug fix where calling  ``.response_object()`` method on an API object could throw.