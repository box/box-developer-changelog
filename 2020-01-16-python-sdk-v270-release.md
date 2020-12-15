---
applied_at: '2020-01-16'
applies_to:
  - python
  - sdks
is_impactful: false
is_new_feature: true
collapse: true
release_source_url: 'https://github.com/box/box-python-sdk/releases/tag/v2.7.0'
is_index: false
category_id: changelog
subcategory_id: ''
id: 2020-01-16-python-sdk-v270-release
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2020-01-20-refreshed-postman-collection-quick-start
previous_page_id: ''
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2020/01-16-python-sdk-v270-release.md
published_at: 2020/01-16
---
# Python SDK `v2.7.0` released

- Fixed bug in `get_admin_events` function which caused errors when the optional `event_types` parameter was omitted.
- Add marker based pagination for listing users.
- Added support for more attribute parameters when uploading new files and new versions of existing files.
- Combined preflight check and lookup of accelerator URL into a single request for uploads.
- Fixed JWT retry logic so a new JTI claim is generated on each retry.
- Fixed bug where JWT authentication requests returned incorrect error codes.
- Fixed retry logic so when a Retry-After header is passed back from the API, the SDK waits for the amount of time specified in the header before retrying.