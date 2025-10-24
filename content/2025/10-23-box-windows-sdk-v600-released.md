---
applied_at: '2025-10-23'
applies_to:
  - sdks
  - dotnet
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-windows-sdk-v2/releases/tag/v6.0.0'
collapse: true
---

# Box Windows SDK `v6.0.0` released

Introducing a new major version of Box Windows SDK V2 `v6` that includes two `namespaces` - the manually maintained `namespace` and the generated `namespace`. The coexisting `namespaces` provide easier access to the latest Box API features and support gradual migration to the standalone generated `namespace`.

### Breaking Changes

* With `v6` of Box Windows SDK V2, support for .NET 6 has been dropped. We follow the official [.NET Release Lifecycle][1]. Since November 12, 2024, .NET 6 is no longer officially supported. While it may still be possible to compile and use this SDK under .NET 6, we do not provide support for issues encountered on that version.

For more information about migrating to `v6` visit [`v5` to `v6` migration guide][2]

### What's New in `v6`

With this SDK version, alongside the existing `Box.V2` `namespace`, we're introducing a new `Box.Sdk.Gen` `namespace`, which gives you access to:

* **Full API Support** — Complete coverage of the Box API ecosystem, giving you access to all the latest features and functionalities to build feature-rich applications.

* **Rapid API Updates** — Our new auto-generation approach enables Box API additions within days, ensuring you can leverage the most up-to-date features without delay.

* **Embedded Documentation** — All objects and parameters are documented directly in the SDK source code, keeping essential information in one place.

* **Enhanced Convenience Methods** — New methods for authentication, chunk uploads, automatic retries, retry strategy, and more.

### Important Notes

This version allows you to gradually migrate your code base to the `Box.Sdk.Gen` `namespace`. The key differences between the `namespaces` are documented in the [`namespace` migration guide][3].

Ultimately, we recommend to migrate to `v10` which includes only the generated `namespace` `Box.Sdk.Gen`. To migrate from `v6` to `v10` follow this [migration guide][4].

For more information, see the [SDK versioning strategy document][5]. Follow developer changelog for future updates.

[1]: https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-core

[2]: https://github.com/box/box-windows-sdk-v2/blob/combined-sdk/migration-guides/from-v5-to-v6.md

[3]: https://github.com/box/box-windows-sdk-v2/blob/combined-sdk/migration-guides/from-box-v2-to-box-sdk-gen-namespace.md

[4]: https://github.com/box/box-windows-sdk-v2/blob/combined-sdk/migration-guides/from-v6-to-v10.md

[5]: https://developer.box.com/guides/tooling/sdks/sdk-versioning/
