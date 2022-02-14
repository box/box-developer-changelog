---
applied_at: '2022-02-10'
applies_to:
  - sdks
  - windows
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-windows-sdk-v2/releases/tag/v4.2.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2022-02-10-box-windows-sdk-v420-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2022-02-14-new-box-shield-event-field
previous_page_id: 2022-02-02-end-of-support-for-dicom
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2022/02-10-box-windows-sdk-v420-released.md
published_at: '2022-02-10'
---
# Box Windows SDK `v4.2.0` released

**Bug Fixes:**

* correctly pass null when rolling out user from the enterprise ([#792][1]) ([`c85c573`][2])
* Creating `BoxAuthenticationFailedException` no longer throws an exception ([#790][3]) ([`55a706e`][4])
* Null Argument Exception in `AutoPaginate` ([#666][5]) ([`c61f08c`][6])

**New Features and Enhancements:**

* add `admin_logs_streaming` support ([#797][7]) ([`a775e1e`][8])
* add Client Credentials Grant `auth` support ([#799][9]) ([`b8a64ca`][10])
* add `disposition_at` field to the File object ([#793][11]) ([`2766a91`][12])
* add possibility to set `auth` token `uri` in `BoxConfig` ([#794][13]) ([`ae8cd8b`][14])
* deprecate `index_name` in `ExecuteMetadataQuery` ([#800][15]) ([`6a6a0e4`][16])

<https://www.nuget.org/packages/Box.V2/4.2.0>

<https://www.nuget.org/packages/Box.V2.Core/4.2.0>

[1]: https://github.com/box/box-windows-sdk-v2/issues/792

[2]: https://github.com/box/box-windows-sdk-v2/commit/c85c5735865b7dd97ffa1428a8f57d2edff6811b

[3]: https://github.com/box/box-windows-sdk-v2/issues/790

[4]: https://github.com/box/box-windows-sdk-v2/commit/55a706e4091271aa55208a260b2f4f96e1527698

[5]: https://github.com/box/box-windows-sdk-v2/issues/666

[6]: https://github.com/box/box-windows-sdk-v2/commit/c61f08cc02d5c95ff71ef700e97393a0dc3dc890

[7]: https://github.com/box/box-windows-sdk-v2/issues/797

[8]: https://github.com/box/box-windows-sdk-v2/commit/a775e1e5c7696a1e5f82b5dc7edbed8eb09f640d

[9]: https://github.com/box/box-windows-sdk-v2/issues/799

[10]: https://github.com/box/box-windows-sdk-v2/commit/b8a64ca3887298feccef5185f6bfec4c3771b5a9

[11]: https://github.com/box/box-windows-sdk-v2/issues/793

[12]: https://github.com/box/box-windows-sdk-v2/commit/2766a914fad1eb40371cd4430b3450360088b331

[13]: https://github.com/box/box-windows-sdk-v2/issues/794

[14]: https://github.com/box/box-windows-sdk-v2/commit/ae8cd8b91dd91b8a786e53ff5b3501d2700686a4

[15]: https://github.com/box/box-windows-sdk-v2/issues/800

[16]: https://github.com/box/box-windows-sdk-v2/commit/6a6a0e4a0e41ec70ec33acacba00bee6c7ee881f