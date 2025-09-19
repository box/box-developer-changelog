---
applied_at: '2025-09-17'
applies_to:
  - sdks
  - swift
is_impactful: false
is_new_feature: false
release_source_url: 'https://github.com/box/box-ios-sdk/releases/tag/10.0.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2025-09-17-box-ios-sdk-1000-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2025-09-17-box-next-generation-sdk-deprecation
previous_page_id: 2025-09-16-box-typescript-sdk-generated-v1191-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2025/09-17-box-ios-sdk-1000-released.md
published_at: '2025-09-17'
fullyTranslated: true
---
# Box iOS SDK `10.0.0`のリリース

Introducing **`Box iOS SDK v10`**, a major release designed to elevate your developer experience and streamline integration with Box Content Cloud. Currently available as a separate [`sdk-gen`][1] branch, `v10` will ultimately become the main branch.

### 重大な変更

* This SDK version is auto-generated and introduces a new interface for all methods. Extensive documentation is available [here][2].

### What's New in `v10`

* **Full API Support** — Complete coverage of the Box API ecosystem, giving you access to all the latest features and functionalities to build feature-rich applications.

* **Rapid API Updates** — Our new auto-generation approach enables Box API additions within days, ensuring you can leverage the most up-to-date features without delay.

* **Embedded Documentation** — All objects and parameters are documented directly in the SDK source code, keeping essential information in one place.

* **Enhanced Convenience Methods** — New methods for authentication, chunk uploads, automatic retries, retry strategy, and more.

### Important Notes

This version includes the Box Next Generation SDK artifact, previously developed in parallel to core Box SDKs. To facilitate migration and provide access to the newest features, we'll soon release an additional major version combining both artifacts. Migration to `v10` includes breaking changes, please review the [migration guide][3] for details. For more information, see the [SDK versioning strategy document][4]. Follow developer changelog for future updates.
---
### What’s New Compared to [Box Swift SDK Gen][5] `v0.6.3`

### 新機能と機能強化

* Add External User Deletion API (box/box-codegen[#550][6]) ([`74571fb`][7])
* Add missing webhook events (box/box-openapi[#554][8]) ([#1048][9]) ([`b8bf1ad`][10])
* Retry requests for network errors in Swift (box/box-codegen[#820][11]) ([#1051][12]) ([`ba21450`][13])

For more details check [migration guide][14] from `box-swift-sdk-gen` `v0` to `box-ios-sdk` `v10`.

[1]: https://github.com/box/box-ios-sdk/tree/sdk-gen

[2]: https://github.com/box/box-ios-sdk/tree/sdk-gen/docs

[3]: https://github.com/box/box-ios-sdk/blob/sdk-gen/migration-guides/from-v5-to-v10.md

[4]: https://developer.box.com/tooling/sdks/sdk-versioning

[5]: https://github.com/box/box-swift-sdk-gen

[6]: https://github.com/box/box-ios-sdk/issues/969

[7]: https://github.com/box/box-ios-sdk/commit/74571fb6675d0ff90d0ec4ef2baf7113816093f8

[8]: https://github.com/box/box-ios-sdk/issues/554

[9]: https://github.com/box/box-ios-sdk/issues/1048

[10]: https://github.com/box/box-ios-sdk/commit/b8bf1add360119f70a626f663cd810f9598ec794

[11]: https://github.com/box/box-ios-sdk/issues/820

[12]: https://github.com/box/box-ios-sdk/issues/1051

[13]: https://github.com/box/box-ios-sdk/commit/ba214507b37d2a842bcf044b5b4392b442486d6f

[14]: https://github.com/box/box-ios-sdk/blob/sdk-gen/migration-guides/from-box-swift-sdk-gen-v0-to-box-ios-sdk-v10.md
