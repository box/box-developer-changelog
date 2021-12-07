---
applied_at: '2021-12-07'
applies_to:
  - sdks
  - java
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-java-sdk/releases/tag/v3.0.0'
collapse: true
---

# Box Java SDK `v3.0.0` released

### ⚠ BREAKING CHANGES

* Downgrading bouncycastle libraries to 1.57 ([#942][1])

* Downgrading bouncycastle libraries to 1.57 ([#942][1]) ([`26aaed5`][2])

### Bug Fixes

* Changed SDK loggers name to "com.box.sdk", fixes [#638][3] ([#950][4]) ([`443c230`][5])
* Fixed NullPointerException when empty metadata used on BoxFile or BoxFolder ([#918][6]) ([#945][7]) ([`68bc3c5`][8])

### Dependency Upgrades

* Change dependency from 1.4 to 1.5 ([`864fd63`][9])

[1]: https://github.com/box/box-java-sdk/issues/942

[2]: https://github.com/box/box-java-sdk/commit/26aaed51fd914eaf2061da735f11830524e4cfe4

[3]: https://github.com/box/box-java-sdk/issues/638

[4]: https://github.com/box/box-java-sdk/issues/950

[5]: https://github.com/box/box-java-sdk/commit/443c23085e55bbcaa1524c5b9e1bf852a1e2a1ce

[6]: https://github.com/box/box-java-sdk/issues/918

[7]: https://github.com/box/box-java-sdk/issues/945

[8]: https://github.com/box/box-java-sdk/commit/68bc3c578d760b7239f6d704fed9bb5a834bf52a

[9]: https://github.com/box/box-java-sdk/commit/864fd63e7dea2b23b0bd82d28d4f90faeac3f6cb
