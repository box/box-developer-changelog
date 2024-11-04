---
applied_at: '2024-10-30'
applies_to:
  - sdks
  - python
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-python-sdk-gen/releases/tag/v1.6.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2024-10-30-box-python-sdk-generated-v160-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2024-10-31-box-dotnet-sdk-generated-v140-released
previous_page_id: 2024-10-24-box-dotnet-sdk-generated-v131-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2024/10-30-box-python-sdk-generated-v160-released.md
published_at: '2024-10-30'
---
# Box Python SDK Generated `v1.6.0` released

### Bug Fixes

* Set stream position to 0 for multipart requests (box/box-codegen[#581][1]) ([#348][2]) ([`fa6942c`][3])
* Update client error schema (box/box-openapi[#467][4]) ([#347][5]) ([`a42a253`][6])
* Use original stream position when retrying requests (box/box-codegen[#583][7]) ([#358][8]) ([`060b4dc`][9])
* use raw `docstrings` when comments contain backslash (box/box-codegen[#571][10]) ([#330][11]) ([`8dd8cb7`][12])

### New Features and Enhancements

* Add `download_file_to_output_stream` method to `DownloadsManager` (box/box-codegen[#575][13]) ([#334][14]) ([`6820d08`][15])
* add AI LLM endpoint AWS `params` (box/box-openapi[#478][16]) ([#354][17]) ([`c8fa2c1`][18])

[1]: https://github.com/box/box-codegen/issues/581

[2]: https://github.com/box/box-codegen/issues/348

[3]: https://github.com/box/box-codegen/commit/fa6942c231024947250955ccc52f352744ab5f38

[4]: https://github.com/box/box-codegen/issues/467

[5]: https://github.com/box/box-codegen/issues/347

[6]: https://github.com/box/box-codegen/commit/a42a2532337c79d20b6524fda0acf717d9ccbd5f

[7]: https://github.com/box/box-codegen/issues/583

[8]: https://github.com/box/box-codegen/issues/358

[9]: https://github.com/box/box-codegen/commit/060b4dc2b8bbbc1e17cce0fc049394e0527952b7

[10]: https://github.com/box/box-codegen/issues/571

[11]: https://github.com/box/box-codegen/issues/330

[12]: https://github.com/box/box-codegen/commit/8dd8cb71105c200bd03f5f894a4dbfb42baf0865

[13]: https://github.com/box/box-codegen/issues/575

[14]: https://github.com/box/box-codegen/issues/334

[15]: https://github.com/box/box-codegen/commit/6820d08f37c5c0605a580391bef2dc4f2a384c00

[16]: https://github.com/box/box-codegen/issues/478

[17]: https://github.com/box/box-codegen/issues/354

[18]: https://github.com/box/box-codegen/commit/c8fa2c1131154d07a500290db6a7b34b06005c2b