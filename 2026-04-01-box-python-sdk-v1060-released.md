---
applied_at: '2026-04-01'
applies_to:
  - sdks
  - python
is_impactful: false
is_new_feature: false
release_source_url: 'https://github.com/box/box-python-sdk/releases/tag/v10.6.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2026-04-01-box-python-sdk-v1060-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2026-04-01-box-python-sdk-v460-released
previous_page_id: 2026-04-01-box-node-sdk-v460-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2026/04-01-box-python-sdk-v1060-released.md
published_at: '2026-04-01'
---
# Box Python SDK `v10.6.0` released

### ⚠ BREAKING CHANGES

* Correct search content type `tags` to match API (box/box-openapi[#591][1]) ([#1369][2])

### Bug Fixes

* Add missing discriminators for schema types (box/box-codegen[#931][3]) ([#1368][4]) ([`fe0a3b8`][5])
* Align `LegalHoldPolicyAssignedItem` with API (box/box-openapi[#1554][6]) (box/box-openapi[#590][7]) ([#1365][8]) ([`feb2010`][9])
* Correct search content type `tags` to match API (box/box-openapi[#591][10]) ([#1369][2]) ([`39fbc7c`][11])

### New Features and Enhancements

* Add `include_reference` to `AI` and `parent_id` to `HubsItems` (box/box-openapi[#588][12]) ([#1360][13]) ([`59c1d3c`][14])
* Support Hub Document API (box/box-codegen[#930][15]) ([#1371][16]) ([`720b948`][17])

[1]: https://github.com/box/box-openapi/issues/591

[2]: https://github.com/box/box-python-sdk/issues/1369

[3]: https://github.com/box/box-python-sdk/issues/931

[4]: https://github.com/box/box-python-sdk/issues/1368

[5]: https://github.com/box/box-python-sdk/commit/fe0a3b86b292d7304c244e4b6933612bbce5f332

[6]: https://github.com/box/box-python-sdk/issues/1554

[7]: https://github.com/box/box-python-sdk/issues/590

[8]: https://github.com/box/box-python-sdk/issues/1365

[9]: https://github.com/box/box-python-sdk/commit/feb201068f851701ecd6f2dfea522182a33a6846

[10]: https://github.com/box/box-python-sdk/issues/591

[11]: https://github.com/box/box-python-sdk/commit/39fbc7cd88a3e0a6a002cd2aa202d10730c6d91a

[12]: https://github.com/box/box-python-sdk/issues/588

[13]: https://github.com/box/box-python-sdk/issues/1360

[14]: https://github.com/box/box-python-sdk/commit/59c1d3c156cc079aa1ad66f7bb2476d48c67a57c

[15]: https://github.com/box/box-python-sdk/issues/930

[16]: https://github.com/box/box-python-sdk/issues/1371

[17]: https://github.com/box/box-python-sdk/commit/720b94835b1b5308d8c1b8b3a7bc176766d98a04