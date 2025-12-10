---
applied_at: '2025-09-17'
applies_to:
  - sdks
  - python
is_impactful: false
is_new_feature: false
release_source_url: 'https://github.com/box/box-python-sdk/releases/tag/v10.0.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2025-09-17-box-python-sdk-v1000-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2025-09-17-box-sdk-v10
previous_page_id: 2025-09-17-box-node-sdk-v1000-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2025/09-17-box-python-sdk-v1000-released.md
published_at: '2025-09-17'
---
# Box Python SDK `v10.0.0` released

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

### What’s New Compared to [Python SDK Gen][5] `v1.17.0`

#### New Features and Enhancements

* Add External User Deletion API (box/box-openapi[#550][6]) ([#941][7]) ([`a80ad85`][8])

* Add missing webhook events (box/box-openapi[#554][9]) ([#988][10]) ([`575ce0b`][11])

* Change names of unions (box/box-codegen[#789][12]) ([#939][13]) ([`cf2b1d5`][14])

* Remove unused models from schemas (box/box-openapi[#547][15]) ([#932][16]) ([`6ef6d63`][17]), closes box/box-openapi[#542][18], box/box-openapi[#544][19], box/box-codegen[#781][20], box/box-openapi[#545][21]

For more details check [migration guide][22] from `box-python-sdk-gen` `v1` to `box-python-sdk` `v10`.

[1]: https://github.com/box/box-python-sdk/tree/sdk-gen

[2]: https://github.com/box/box-python-sdk/tree/sdk-gen/docs

[3]: https://github.com/box/box-python-sdk/blob/sdk-gen/migration-guides/from-v3-to-v10.md

[4]: hg://tooling/sdks/sdk-versioning

[5]: https://github.com/box/box-python-sdk-gen

[6]: https://github.com/box/box-python-sdk/issues/550

[7]: https://github.com/box/box-python-sdk/issues/941

[8]: https://github.com/box/box-python-sdk/commit/a80ad856b3193e54272e04f01ddb025b2d9f781f

[9]: https://github.com/box/box-python-sdk/issues/554

[10]: https://github.com/box/box-python-sdk/issues/988

[11]: https://github.com/box/box-python-sdk/commit/575ce0b6d48f90db90349244414e98afe5fcbb9f

[12]: https://github.com/box/box-python-sdk/issues/789

[13]: https://github.com/box/box-python-sdk/issues/939

[14]: https://github.com/box/box-python-sdk/commit/cf2b1d5b12be0ff2453867b7d3502437283bf695

[15]: https://github.com/box/box-python-sdk/issues/547

[16]: https://github.com/box/box-python-sdk/issues/932

[17]: https://github.com/box/box-python-sdk/commit/6ef6d63c37e6eccc3489a9076e0a0b0940a6e0d6

[18]: https://github.com/box/box-openapi/issues/542

[19]: https://github.com/box/box-openapi/issues/544

[20]: https://github.com/box/box-codegen/issues/781

[21]: https://github.com/box/box-openapi/issues/545

[22]: https://github.com/box/box-python-sdk/blob/sdk-gen/migration-guides/from-box-python-sdk-gen-v1-to-box-python-sdk-v10.md