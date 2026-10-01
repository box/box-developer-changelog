---
applied_at: '2026-10-01'
applies_to:
  - sdks
  - python
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-python-sdk/releases/tag/v4.17.0'
collapse: true
---

# Box Python SDK `v4.17.0` released

### ⚠ BREAKING CHANGES

* **boxsdkgen:** use `FileMini`/`FolderMini`/`WebLinkMini` in `CollaborationItem` ([box/box-openapi#619][1]) ([#1601][2])

### New Features and Enhancements

* **boxsdkgen:** replace `MultipartEncoder` with streaming `MultipartStream` for multipart uploads (box/box-codegen[#994][3]) ([`a232fd3`][4])

[1]: https://github.com/box/box-openapi/issues/619

[2]: https://github.com/box/box-python-sdk/issues/1601

[3]: https://github.com/box/box-python-sdk/issues/994

[4]: https://github.com/box/box-python-sdk/commit/a232fd3999b938024ec3a7e7c816519871b4f007
