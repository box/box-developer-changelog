---
applied_at: '2025-09-17'
applies_to:
  - sdks
  - java
is_impactful: false
is_new_feature: false
release_source_url: 'https://github.com/box/box-java-sdk/releases/tag/v10.0.0'
collapse: true
---

# Box Java SDK `v10.0.0` released

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

### What’s New Compared to [Java SDK Gen][5] `v0.8.1`

<!--alex ignore -->

#### ⚠ BREAKING CHANGES

* Change names of unions (box/box-codegen[#787][6]) ([#1359][7]) ([`114e778`][8])
* Remove unused models from schemas (box/box-openapi[#547][9]) ([#1354][10]) ([`e031308`][11]), closes [box/`box-openapi#542`][12] [box/`box-openapi#544`][13] [box/`box-codegen#781`][14] [box/`box-openapi#545`][15] [`box/box-codegen#782`][16]
* Replace `Date` with `OffsetDateTime` (box/box-codegen[#826][17]) ([#1419][18]) ([`ed04407`][19])

#### New Features and Enhancements

* Add proxy support (box/box-codegen[#830][20]) ([#1424][21]) ([`cc53247`][22])

For more details check [migration guide][23] from `box-java-sdk-gen` `v0` to `box-java-sdk` `v10`.

[1]: https://github.com/box/box-java-sdk/tree/sdk-gen

[2]: https://github.com/box/box-java-sdk/tree/sdk-gen/docs

[3]: https://github.com/box/box-java-sdk/blob/sdk-gen/migration-guides/from-v4-to-v10.md

[4]: g://tooling/sdks/sdk-versioning

[5]: https://github.com/box/box-java-sdk-gen

[6]: https://github.com/box/box-java-sdk/issues/787

[7]: https://github.com/box/box-java-sdk/issues/1359

[8]: https://github.com/box/box-java-sdk/commit/114e7785031e19fb58933f231e656a991b5effb7

[9]: https://github.com/box/box-java-sdk/issues/547

[10]: https://github.com/box/box-java-sdk/issues/1354

[11]: https://github.com/box/box-java-sdk/commit/e031308f102137351238bf3823372150d3927442

[12]: https://github.com/box/box-openapi/issues/542

[13]: https://github.com/box/box-openapi/issues/544

[14]: https://github.com/box/box-codegen/issues/781

[15]: https://github.com/box/box-openapi/issues/545

[16]: https://github.com/box/box-codegen/issues/782

[17]: https://github.com/box/box-java-sdk/issues/826

[18]: https://github.com/box/box-java-sdk/issues/1419

[19]: https://github.com/box/box-java-sdk/commit/ed04407e8effa8811bc85023783097f8a95e5223

[20]: https://github.com/box/box-java-sdk/issues/830

[21]: https://github.com/box/box-java-sdk/issues/1424

[22]: https://github.com/box/box-java-sdk/commit/cc532475cdaf5ec3fd710149b41a6e7b04dcd32f

[23]: https://github.com/box/box-java-sdk/blob/sdk-gen/migration-guides/from-box-java-sdk-gen-v0-to-box-java-sdk-v10.md
