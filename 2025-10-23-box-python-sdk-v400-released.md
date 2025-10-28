---
applied_at: '2025-10-23'
applies_to:
  - sdks
  - python
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-python-sdk/releases/tag/v4.0.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2025-10-23-box-python-sdk-v400-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2025-10-23-box-sdks-major-version
previous_page_id: 2025-10-23-box-java-sdk-v500-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2025/10-23-box-python-sdk-v400-released.md
published_at: '2025-10-23'
---
# Box Python SDK `v4.0.0` released

Introducing a new major version of Box Python SDK `v4` that includes two packages — the manually maintained `boxsdk` package and the generated `box_sdk_gen` package. The coexisting packages provide easier access to the latest Box API features and support gradual migration to the standalone generated package.

### Breaking Changes

* `v4` of Box Python SDK  supports Python versions: 3.8+. Compared to `v3`, Python 3.6 and 3.7 are no longer supported.

For more information about migrating to `v4` visit [`v3` to `v4` migration guide][1]

### What's New in `v4`

With this SDK version, alongside the existing `boxsdk` package, we’re introducing a new `box_sdk_gen` package, which gives you access to:

* **Full API Support** — Complete coverage of the Box API ecosystem, giving you access to all the latest features and functionalities to build feature-rich applications.

* **Rapid API Updates** — Our new auto-generation approach enables Box API additions within days, ensuring you can leverage the most up-to-date features without delay.

* **Embedded Documentation** — All objects and parameters are documented directly in the SDK source code, keeping essential information in one place.

* **Enhanced Convenience Methods** — New methods for authentication, chunk uploads, automatic retries, retry strategy, and more.

### Important Notes

This version allows you to gradually migrate your code base to the `box_sdk_gen` package. The key differences between the packages are documented in the [package migration guide][2].

Ultimately, we recommend to migrate to `v10` which includes only the generated `box_sdk_gen` package. To migrate from `v4` to `v10` follow this [migration guide][3].

For more information, see the [SDK versioning strategy document][4]. Follow developer changelog for future updates.

[1]: https://github.com/box/box-python-sdk/blob/combined-sdk/migration-guides/from-v3-to-v4.md

[2]: https://github.com/box/box-python-sdk/blob/combined-sdk/migration-guides/from-boxsdk-to-box_sdk_gen.md

[3]: https://github.com/box/box-python-sdk/blob/combined-sdk/migration-guides/from-v4-to-v10.md

[4]: https://developer.box.com/guides/tooling/sdks/sdk-versioning/