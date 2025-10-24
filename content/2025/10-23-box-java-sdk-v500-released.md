---
applied_at: '2025-10-23'
applies_to:
  - sdks
  - java
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-java-sdk/releases/tag/v5.0.0'
collapse: true
---

# Box Java SDK `v5.0.0` released

Introducing a new major version of Box Java SDK `v5` that includes two packages — the manually maintained `com.box.sdk` package and the generated `com.box.sdkgen` package. The coexisting packages provide easier access to the latest Box API features and support gradual migration to the standalone generated package.

There are no breaking changes between `v4` and `v5` of Box Java SDK. For more information about migrating to `v5` visit [`v4` to `v5` migration guide][1]

### What's New in `v5`

With this SDK version, alongside the existing `com.box.sdk` package, we’re introducing a new `com.box.sdkgen` package, which gives you access to:

* **Full API Support** — Complete coverage of the Box API ecosystem, giving you access to all the latest features and functionalities to build feature-rich applications.

* **Rapid API Updates** — Our new auto-generation approach enables Box API additions within days, ensuring you can leverage the most up-to-date features without delay.

* **Embedded Documentation** — All objects and parameters are documented directly in the SDK source code, keeping essential information in one place.

* **Enhanced Convenience Methods** — New methods for authentication, chunk uploads, automatic retries, retry strategy, and more.

### Important Notes

This version allows you to gradually migrate your code base to the `com.box.sdkgen` package. The key differences between the packages are documented in the [package migration guide][2].

Ultimately, we recommend to migrate to `v10` which includes only the generated `com.box.sdkgen` package. To migrate from `v5` to `v10` follow this [migration guide][3].

For more information, see the [SDK versioning strategy document][4]. Follow developer changelog for future updates.

[1]: https://github.com/box/box-java-sdk/blob/combined-sdk/migration-guides/from-v4-to-v5.md

[2]: https://github.com/box/box-java-sdk/blob/combined-sdk/migration-guides/from-com-box-sdk-to-com-box-sdkgen.md

[3]: https://github.com/box/box-java-sdk/blob/combined-sdk/migration-guides/from-v5-to-v10.md

[4]: https://developer.box.com/guides/tooling/sdks/sdk-versioning/
