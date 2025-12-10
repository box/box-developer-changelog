---
applied_at: '2025-09-17'
applies_to:
  - sdks
  - typescript
is_impactful: false
is_new_feature: false
release_source_url: 'https://github.com/box/box-node-sdk/releases/tag/v10.0.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2025-09-17-box-node-sdk-v1000-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2025-09-17-box-python-sdk-v1000-released
previous_page_id: 2025-09-17-box-next-generation-sdk-deprecation
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2025/09-17-box-node-sdk-v1000-released.md
published_at: '2025-09-17'
---
# Box Node SDK `v10.0.0` released

Introducing **`Box Node SDK v10`**, a major release designed to elevate your developer experience and streamline integration with Box Content Cloud. Currently available as a separate [`sdk-gen`][1] branch, `v10` will ultimately become the main branch.

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

### What’s New Compared to [Typescript SDK Gen][5] `v1.19.1`

#### ⚠ BREAKING CHANGES

* Change names of unions (box/box-codegen[#787][6]) ([#938][7]) ([`06a8e9b`][8])
* Remove unused models from schemas (box/box-openapi[#547][9]) ([#933][10]) ([`35690f4`][11]), closes box/box-codegen[#773][12] box/box-openapi[#542][13] box/box-openapi[#544][14] box/box-codegen[#781][15] box/box-openapi[#545][16]
* Remove generated suffix from files (box/box-codegen[#779][17]) ([#948][18]) ([`4bfb073`][19])
* Adjust imports and exports (box/box-codegen[#801][20]) ([#965][21]) ([`d8e6a0a`][22])

#### Bug Fixes

* Fix serialization for unions (box/box-codegen[#800][23]) ([#954][24]) ([`7f75f6d`][25])

#### New Features and Enhancements

* Add missing webhook events (box/box-openapi[#554][26]) ([#982][27]) ([`2f5e245`][28])
* Support external user deletion API (box/box-codegen[#796][29]) ([#946][30]) ([`44b37a4`][31])

For more details check [migration guide][32] from `box-typescript-sdk-gen` `v1` to `box-node-sdk` `v10`.

[1]: https://github.com/box/box-node-sdk/tree/sdk-gen

[2]: https://github.com/box/box-node-sdk/tree/sdk-gen/docs

[3]: https://github.com/box/box-node-sdk/blob/sdk-gen/docs/migration-guides/from-v3-to-v10.md

[4]: https://developer.box.com/tooling/sdks/sdk-versioning

[5]: https://github.com/box/box-typescript-sdk-gen

[6]: https://github.com/box/box-node-sdk/issues/787

[7]: https://github.com/box/box-node-sdk/issues/938

[8]: https://github.com/box/box-node-sdk/commit/06a8e9bb6de67547dd900b74778c8203aa388a91

[9]: https://github.com/box/box-node-sdk/issues/547

[10]: https://github.com/box/box-node-sdk/issues/933

[11]: https://github.com/box/box-node-sdk/commit/35690f4e4ef7383cae890d4df810ed77168384e1

[12]: https://github.com/box/box-codegen/issues/773

[13]: https://github.com/box/box-openapi/issues/542

[14]: https://github.com/box/box-openapi/issues/544

[15]: https://github.com/box/box-codegen/issues/781

[16]: https://github.com/box/box-openapi/issues/545

[17]: https://github.com/box/box-node-sdk/issues/779

[18]: https://github.com/box/box-node-sdk/issues/948

[19]: https://github.com/box/box-node-sdk/commit/4bfb07350be95a5717ee9be032af4995d1d97395

[20]: https://github.com/box/box-node-sdk/issues/801

[21]: https://github.com/box/box-node-sdk/issues/965

[22]: https://github.com/box/box-node-sdk/commit/d8e6a0a466d367dd6c871bc20534f1b950732997

[23]: https://github.com/box/box-node-sdk/issues/800

[24]: https://github.com/box/box-node-sdk/issues/954

[25]: https://github.com/box/box-node-sdk/commit/7f75f6d6d87f2a9b6d500306fcc0dddf023b7118

[26]: https://github.com/box/box-node-sdk/issues/554

[27]: https://github.com/box/box-node-sdk/issues/982

[28]: https://github.com/box/box-node-sdk/commit/2f5e24574dbaff7d23140a2a5c22e54b1f047bf6

[29]: https://github.com/box/box-node-sdk/issues/796

[30]: https://github.com/box/box-node-sdk/issues/946

[31]: https://github.com/box/box-node-sdk/commit/44b37a49ddbf587575f005342c9457cc46b5a573

[32]: https://github.com/box/box-node-sdk/blob/sdk-gen/docs/migration-guides/from-box-typescript-sdk-gen-v1-to-box-node-sdk-v10.md