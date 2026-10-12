---
applied_at: '2026-10-01'
applies_to:
  - sdks
  - python
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-python-sdk/releases/tag/v4.17.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2026-10-01-box-python-sdk-v4170-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2026-10-01-box-windows-sdk-v10190-released
previous_page_id: 2026-10-01-box-python-sdk-v10170-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2026/10-01-box-python-sdk-v4170-released.md
published_at: '2026-10-01'
---
# Box Python SDK `v4.17.0` released

### ⚠ BREAKING CHANGES

* **boxsdkgen:** use `FileMini`/`FolderMini`/`WebLinkMini` in `CollaborationItem` ([#619][issue-619]) ([#1601][issue-1601])

### New Features and Enhancements

* **boxsdkgen:** replace `MultipartEncoder` with streaming `MultipartStream` for multipart uploads (box/box-codegen[#994][issue-994]) ([`a232fd3`][commit-a232fd3999b938024ec3a7e7c816519871b4f007])

[issue-619]: https://github.com/box/box-openapi/issues/619

[issue-1601]: https://github.com/box/box-python-sdk/issues/1601

[issue-994]: https://github.com/box/box-python-sdk/issues/994

[commit-a232fd3999b938024ec3a7e7c816519871b4f007]: https://github.com/box/box-python-sdk/commit/a232fd3999b938024ec3a7e7c816519871b4f007