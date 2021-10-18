---
applied_at: '2021-10-18'
applies_to:
  - sdks
  - java
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-java-sdk/releases/tag/v2.57.0'
collapse: true
---

# Box Java SDK `v2.57.0` released

**New Features and Enhancements:**

* Add support for marker-based paging in BoxFolder.getChildren ([#927][1])
* Upgraded minimal-json to v0.9.5
* Upgraded jose4j to v0.7.9
* Adding Gradle wrapper in version 4.0.1 ([#928][2])

**Bug Fixes:**

* Fix for infinite recursion ([#924][3])
* Fix unable to set Vanity URL on `BoxSharedLink` for BoxFile and BoxFolder ([#925][4])

[1]: https://github.com/box/box-java-sdk/pull/927

[2]: https://github.com/box/box-java-sdk/pull/928

[3]: https://github.com/box/box-java-sdk/pull/924

[4]: https://github.com/box/box-java-sdk/issues/925
