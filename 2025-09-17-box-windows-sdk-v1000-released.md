---
applied_at: '2025-09-17'
applies_to:
  - sdks
  - dotnet
is_impactful: false
is_new_feature: false
release_source_url: 'https://github.com/box/box-windows-sdk-v2/releases/tag/v10.0.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2025-09-17-box-windows-sdk-v1000-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2025-09-17-box-sdk-v10
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2025/09-17-box-windows-sdk-v1000-released.md
published_at: '2025-09-17'
---
# Box Windows SDK `v10.0.0` released

Introducing **`Box SDK v10`**, a major release designed to elevate your developer experience and streamline integration with Box Content Cloud. Currently available as a separate [`sdk-gen`][1] branch, `v10` will ultimately become the main branch.

### Breaking Changes

* This SDK version is auto-generated and introduces a new interface for all methods. Extensive documentation is available [here][2].

### What's New in `v10`

* **Full API Support** — Complete coverage of the Box API ecosystem, giving you access to all the latest features and functionalities to build feature-rich applications.

* **Rapid API Updates** — Our new auto-generation approach enables Box API additions within days, ensuring you can leverage the most up-to-date features without delay.

* **Embedded Documentation** — All objects and parameters are documented directly in the SDK source code, keeping essential information in one place.

* **Enhanced Convenience Methods** — New methods for authentication, chunk uploads, automatic retries, retry strategy, and more.

### Important Notes

This version includes the Box Next Generation SDK artifact, previously developed in parallel to core Box SDKs. To facilitate migration and provide access to the newest features, we'll soon release an additional major version combining both artifacts. Migration to `v10` includes breaking changes, please review the [migration guide][3] for details.  For more information, see the [SDK versioning strategy document][4]. Follow developer changelog for future updates.

***

### What’s New Compared to [Dotnet SDK Gen][5] `v1.12.0`

#### ⚠ BREAKING CHANGES

* Change names of unions (box/box-openapi[#549][6]) ([#1007][7]) ([`fcef4ec`][8])
* Remove unused models from schemas (box/box-openapi[#547][9]) ([#999][10]) ([`ffcb488`][11])

#### Bug Fixes

* Fix `net462` debug build ([#1020][12]) ([`04f8343`][13])
* Rename external user deletion method (box/box-codegen[#796][14]) ([#1024][15]) ([`13928c5`][16])

#### New Features and Enhancements

* Add External User Deletion API (box/box-openapi[#550][17]) ([#1009][18]) ([`2178bc8`][19])
* Add missing webhook events (box/box-openapi[#554][20]) ([#1068][21]) ([`7fe3b99`][22])
* Add Net Framework 462 support for `v10` (box/box-codegen[#773][23]) ([#986][24]) ([`67366c7`][25])
* Allow injecting custom decryption mechanism for `jwt` ([#974][26]) ([`b877355`][27])

For more details check [migration guide][28] from `box-dotnet-sdk-gen` `v1` to `box-windows-sdk-v2` `v10`.

[1]: https://github.com/box/box-windows-sdk-v2/tree/sdk-gen

[2]: https://github.com/box/box-windows-sdk-v2/tree/sdk-gen/docs

[3]: https://github.com/box/box-windows-sdk-v2/blob/sdk-gen/migration-guides/from-v5-to-v10.md

[4]: https://developer.box.com/guides/tooling/sdks/sdk-versioning/

[5]: https://github.com/box/box-dotnet-sdk-gen

[6]: https://github.com/box/box-windows-sdk-v2/issues/549

[7]: https://github.com/box/box-windows-sdk-v2/issues/1007

[8]: https://github.com/box/box-windows-sdk-v2/commit/fcef4ecab38435fb4a79e2db8fcf2c5ad931986b

[9]: https://github.com/box/box-windows-sdk-v2/issues/547

[10]: https://github.com/box/box-windows-sdk-v2/issues/999

[11]: https://github.com/box/box-windows-sdk-v2/commit/ffcb4888e6ad52f10028f92c49b5d919cb1ac620

[12]: https://github.com/box/box-windows-sdk-v2/issues/1020

[13]: https://github.com/box/box-windows-sdk-v2/commit/04f8343c200e45ebe65bd29f03f55a44e76bcbde

[14]: https://github.com/box/box-windows-sdk-v2/issues/796

[15]: https://github.com/box/box-windows-sdk-v2/issues/1024

[16]: https://github.com/box/box-windows-sdk-v2/commit/13928c559bd3e97d060c48997b05ca384333d03d

[17]: https://github.com/box/box-windows-sdk-v2/issues/550

[18]: https://github.com/box/box-windows-sdk-v2/issues/1009

[19]: https://github.com/box/box-windows-sdk-v2/commit/2178bc87c8b724598616e99f0a528c7b21ff12c6

[20]: https://github.com/box/box-windows-sdk-v2/issues/554

[21]: https://github.com/box/box-windows-sdk-v2/issues/1068

[22]: https://github.com/box/box-windows-sdk-v2/commit/7fe3b99cae1cf5be9ad3ec7bec54c97f198fd8c7

[23]: https://github.com/box/box-windows-sdk-v2/issues/773

[24]: https://github.com/box/box-windows-sdk-v2/issues/986

[25]: https://github.com/box/box-windows-sdk-v2/commit/67366c7274faa5c758490d393605c76220aa6a79

[26]: https://github.com/box/box-windows-sdk-v2/issues/974

[27]: https://github.com/box/box-windows-sdk-v2/commit/b877355493b60dc6f9c1a576927d6e0c62ec27f3

[28]: https://github.com/box/box-windows-sdk-v2/blob/sdk-gen/migration-guides/from-dotnet-sdk-gen-v1-to-box-windows-sdk-v10.md