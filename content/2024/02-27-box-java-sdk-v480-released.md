---
applied_at: '2024-02-27'
applies_to:
  - sdks
  - java
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-java-sdk/releases/tag/v4.8.0'
collapse: true
---

# Box Java SDK `v4.8.0` released

### New Features and Enhancements

* allow modifying `BoxAPIRequest` URL ([#1236][1]) ([`eaea019`][2])
* Bumped `org.bouncycastle:bcprov-jdk18on:1.77` and `org.bouncycastle:bcpkix-jdk18on:1.77` ([#1237][3]) ([`6c7fe7b`][4]), closes [#1235][5]

### Bug Fixes

* fix download for empty files ([#1231][6]) ([`0e2230b`][7])
* stop using `SharedLinkAPIConnection` in `getSharedItem()` ([#1234][8]) ([`9f9af8e`][9])

[1]: https://github.com/box/box-java-sdk/issues/1236

[2]: https://github.com/box/box-java-sdk/commit/eaea0193ab7e72b73746ea85806e62468825bbce

[3]: https://github.com/box/box-java-sdk/issues/1237

[4]: https://github.com/box/box-java-sdk/commit/6c7fe7b74dbfb34e729fcecf8a29a1d3a1ba596f

[5]: https://github.com/box/box-java-sdk/issues/1235

[6]: https://github.com/box/box-java-sdk/issues/1231

[7]: https://github.com/box/box-java-sdk/commit/0e2230b0be36f6bfb35f1d6b9dd4ba58e4d125ec

[8]: https://github.com/box/box-java-sdk/issues/1234

[9]: https://github.com/box/box-java-sdk/commit/9f9af8e22b4a38dc9a31a611ff1b962966bbd6b5
