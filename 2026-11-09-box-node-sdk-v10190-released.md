---
applied_at: '2026-11-09'
applies_to:
  - sdks
  - typescript
is_impactful: false
is_new_feature: false
release_source_url: 'https://github.com/box/box-node-sdk/releases/tag/v10.19.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2026-11-09-box-node-sdk-v10190-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2026-11-09-box-node-sdk-v4190-released
previous_page_id: 2026-10-27-box-windows-sdk-v6202-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2026/11-09-box-node-sdk-v10190-released.md
published_at: '2026-11-09'
---
# Box Node SDK `v10.19.0` released

### Bug Fixes

* escape `repeat` keyword in Swift field names (box/box-codegen[#998][1]) ([`ac03862`][2])

### New Features and Enhancements

* add `DocumentSplitManager` and document split APIs + OTP for shared links (box/box-openapi[#621][3]) ([`ab81af7`][4])
* add `metadata_template` support and `filter_fields` to legal hold assignments (box/box-openapi[#625][5]) ([`a9377d9`][6])
* add `ShuttleManager`, shuttle schemas, and docs (box/box-openapi[#622][7]) ([`0b25fda`][8])
* add `verificationMethod` for Sign Request signer (box/box-openapi[#626][9]) ([`07afdc9`][10])
* update chunked upload to support `sha512` and add `external_id` to DocGen (box/box-openapi[#620][11]) ([`52ba9cc`][12])

[1]: https://github.com/box/box-node-sdk/issues/998

[2]: https://github.com/box/box-node-sdk/commit/ac03862e2f08b951662912afabaa47b6a38b8d5e

[3]: https://github.com/box/box-node-sdk/issues/621

[4]: https://github.com/box/box-node-sdk/commit/ab81af752a9d65077590127c3987c7e9ef9fdfbb

[5]: https://github.com/box/box-node-sdk/issues/625

[6]: https://github.com/box/box-node-sdk/commit/a9377d9b4bd953fc2c8d0d5c293b2163ea7701e4

[7]: https://github.com/box/box-node-sdk/issues/622

[8]: https://github.com/box/box-node-sdk/commit/0b25fdad5455c60dce857dc4d9badd9fea23b724

[9]: https://github.com/box/box-node-sdk/issues/626

[10]: https://github.com/box/box-node-sdk/commit/07afdc9a49b6c35773069514f76870eb178d392a

[11]: https://github.com/box/box-node-sdk/issues/620

[12]: https://github.com/box/box-node-sdk/commit/52ba9cc6c2b49cfb6953120dd3e07dca2ad0c48b