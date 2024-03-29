---
applied_at: '2023-03-06'
applies_to:
  - sdks
  - java
is_impactful: false
is_new_feature: false
release_source_url: 'https://github.com/box/box-java-sdk/releases/tag/v4.0.1'
collapse: true
---

# Box Java SDK `v4.0.1` released

### Bug Fixes

* `OAUTH_SUFFIX` gets appended twice to `baseAuthorizationURL` ([#1148][1]) ([`3164770`][2]), closes [#1147][3]
* Wrong progress reported to `ProgressListener` by `AbstractBoxMultipartRequest` ([#1151][4]) ([`947ded3`][5]), closes [#1149][6]

[1]: https://github.com/box/box-java-sdk/issues/1148

[2]: https://github.com/box/box-java-sdk/commit/3164770498e5115a43318640735317a896950f54

[3]: https://github.com/box/box-java-sdk/issues/1147

[4]: https://github.com/box/box-java-sdk/issues/1151

[5]: https://github.com/box/box-java-sdk/commit/947ded394490fc840b8191bc7ad69ae0ea5f5c7d

[6]: https://github.com/box/box-java-sdk/issues/1149
