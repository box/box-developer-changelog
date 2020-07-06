---
applied_at: '2018-01-25'
applies_to:
  - java
  - sdks
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-java-sdk/releases/tag/v2.11.0'
is_index: false
category_id: changelog
subcategory_id: ''
id: 2018-01-25-java-sdk-v2110-release
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2018-01-31-windows-net-sdk-v342-release
previous_page_id: 2018-01-12-java-sdk-v2100-release
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/2018/01-25-java-sdk-v2110-release.md
---
# Java SDK `v2.11.0` release

1. Fix chunked upload for files > 2GB ([#531](https://github.com/box/box-java-sdk/pull/531))
2. Add updated file version upload endpoint and deprecate old method ([#524](https://github.com/box/box-java-sdk/pull/524))
3. Perform modified retry on JWT auth to avoid common JWT errors