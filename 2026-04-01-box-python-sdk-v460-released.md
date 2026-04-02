---
applied_at: '2026-04-01'
applies_to:
  - sdks
  - python
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-python-sdk/releases/tag/v4.6.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2026-04-01-box-python-sdk-v460-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2026-04-01-box-node-sdk-v460-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2026/04-01-box-python-sdk-v460-released.md
published_at: '2026-04-01'
---
# Box Python SDK `v4.6.0` released

### ⚠ BREAKING CHANGES

* **boxsdkgen:** Correct search content type `tags` to match API (box/box-openapi[#591][1]) ([#1370][2])

### Bug Fixes

* **boxsdkgen:** Add missing discriminators for schema types (box/box-codegen[#931][3]) ([#1367][4]) ([`113faa3`][5])
* **boxsdkgen:** Align `LegalHoldPolicyAssignedItem` with API (box/box-openapi[#1554][6]) (box/box-openapi[#590][7]) ([#1366][8]) ([`6df014e`][9])
* **boxsdkgen:** Correct search content type `tags` to match API (box/box-openapi[#591][10]) ([#1370][2]) ([`213960d`][11])

### New Features and Enhancements

* **boxsdkgen:** Add `include_reference` to `AI` and `parent_id` to `HubsItems` (box/box-openapi[#588][12]) ([#1359][13]) ([`94cfd09`][14])
* **boxsdkgen:** Support Hub Document API (box/box-codegen[#930][15]) ([#1372][16]) ([`f346676`][17])

[1]: https://github.com/box/box-openapi/issues/591

[2]: https://github.com/box/box-python-sdk/issues/1370

[3]: https://github.com/box/box-python-sdk/issues/931

[4]: https://github.com/box/box-python-sdk/issues/1367

[5]: https://github.com/box/box-python-sdk/commit/113faa396043e1e82cf9c73ec43034d7e6be62a6

[6]: https://github.com/box/box-python-sdk/issues/1554

[7]: https://github.com/box/box-python-sdk/issues/590

[8]: https://github.com/box/box-python-sdk/issues/1366

[9]: https://github.com/box/box-python-sdk/commit/6df014e00d3467e85004e5d0a1f38cbe7847bcea

[10]: https://github.com/box/box-python-sdk/issues/591

[11]: https://github.com/box/box-python-sdk/commit/213960dfd1a09bfce82bdc0e5b52297265607e57

[12]: https://github.com/box/box-python-sdk/issues/588

[13]: https://github.com/box/box-python-sdk/issues/1359

[14]: https://github.com/box/box-python-sdk/commit/94cfd09a89b3b9649656dd38cea3e088f3916d6c

[15]: https://github.com/box/box-python-sdk/issues/930

[16]: https://github.com/box/box-python-sdk/issues/1372

[17]: https://github.com/box/box-python-sdk/commit/f34667680ed70f952fa85a41aa5281f16ff40d70