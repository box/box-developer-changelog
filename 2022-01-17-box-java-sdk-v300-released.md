---
applied_at: '2022-01-17'
applies_to:
  - sdks
  - java
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-java-sdk/releases/tag/v3.0.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2022-01-17-box-java-sdk-v300-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2022-01-17-box-python-sdk-v300-released
previous_page_id: 2022-01-17-box-ios-sdk-v510-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2022/01-17-box-java-sdk-v300-released.md
published_at: '2022-01-17'
---
# Box Java SDK `v3.0.0` released

### ⚠ BREAKING CHANGES

* Changed `BoxFileVersion` class and removed `fileVersion` field ([#978][1])
* Removed deprecated API `BoxCollaborationWhitelist` replaced with `BoxCollaborationAllowlist`, `BoxCollaborationWhitelistExemptTarget` replaced with `BoxCollaborationAllowlistExemptTarget` ([#969][2])
* Dropping Java 7 support ([#962][3])
* Downgrading `bouncycastle` libraries to 1.57 ([#942][4])

### New Features and Enhancements

* Add `typeName` to `BoxEvent` that contains name of the event, even if it is not mapped to `BoxEvent.EventType` ([#979][5]) ([`b30f61f`][6]), closes [#968][7]
* Add new optional `description` parameter to the `retention_policies` endpoint and `start_date_field` to the `retention_policy_assignments endpoint`. ([#967][8]) ([`0aa4ff4`][9])
* Adding `BoxFile#getVersions(String... fields)` to allow users to specify what information they want to extract. Fixes [#946][10]. ([#947][11]) ([`a2eb638`][12])
* Missing `eventTypes` from `BoxAPI` Documents. Fixes [#974][13] ([#975][14]) ([`2c69360`][15])
* Removed deprecated API `BoxCollaborationWhitelist` replaced with `BoxCollaborationAllowlist`, `BoxCollaborationWhitelistExemptTarget` replaced with `BoxCollaborationAllowlistExemptTarget` ([#969][2]) ([`2fd4d6f`][16])

### Bug Fixes

* Changed `BoxFileVersion` class and removed `fileVersion` field ([#978][1]) ([`8c39451`][17])
* Changed SDK loggers name to `"com.box.sdk"`, fixes [#638][18] ([#950][19]) ([`443c230`][20])
* Date parsing error when `BoxSignRequestPrefillTag` created with date value. ([#970][21]) ([`cc2c8da`][22])
* Fix sending limit parameter in `EventLog` ([#977][23]) ([`96bdccc`][24])
* Fixed `NullPointerException` when empty metadata used on `BoxFile` or `BoxFolder` ([#918][25]) ([#945][26]) ([`68bc3c5`][27])
* Cannot deseralize sign request, fixes issue ([#951][28]). ([#952][29]) ([`070bdc5`][30])

### Dependency Upgrades

* Dropping Java 7 support ([#962][3]) ([`953ad78`][31])
* Downgrading `bouncycastle` libraries to 1.57 ([#942][4]) ([`26aaed5`][32])

[1]: https://github.com/box/box-java-sdk/issues/978

[2]: https://github.com/box/box-java-sdk/issues/969

[3]: https://github.com/box/box-java-sdk/issues/962

[4]: https://github.com/box/box-java-sdk/issues/942

[5]: https://github.com/box/box-java-sdk/issues/979

[6]: https://github.com/box/box-java-sdk/commit/b30f61f8cc9c02a1fc4cd5eb35469749e1a16558

[7]: https://github.com/box/box-java-sdk/issues/968

[8]: https://github.com/box/box-java-sdk/issues/967

[9]: https://github.com/box/box-java-sdk/commit/0aa4ff48a1e035efc9ac6aaa42f18f4c92955b7b

[10]: https://github.com/box/box-java-sdk/issues/946

[11]: https://github.com/box/box-java-sdk/issues/947

[12]: https://github.com/box/box-java-sdk/commit/a2eb63896606a6c00ccee6bd9745f4c51f8d89a2

[13]: https://github.com/box/box-java-sdk/issues/974

[14]: https://github.com/box/box-java-sdk/issues/975

[15]: https://github.com/box/box-java-sdk/commit/2c69360e80b1bdd6213933cf2f4da195d52c92d4

[16]: https://github.com/box/box-java-sdk/commit/2fd4d6f884410c8884c4c038687bfc8f32837b55

[17]: https://github.com/box/box-java-sdk/commit/8c3945167581400043a070c2f6906ef05d3d7b85

[18]: https://github.com/box/box-java-sdk/issues/638

[19]: https://github.com/box/box-java-sdk/issues/950

[20]: https://github.com/box/box-java-sdk/commit/443c23085e55bbcaa1524c5b9e1bf852a1e2a1ce

[21]: https://github.com/box/box-java-sdk/issues/970

[22]: https://github.com/box/box-java-sdk/commit/cc2c8da9ea7d066ae2c247c2de5ac8b8bbba9b99

[23]: https://github.com/box/box-java-sdk/issues/977

[24]: https://github.com/box/box-java-sdk/commit/96bdccc9ca40ed43a6028a2b0d055d9d9a8de525

[25]: https://github.com/box/box-java-sdk/issues/918

[26]: https://github.com/box/box-java-sdk/issues/945

[27]: https://github.com/box/box-java-sdk/commit/68bc3c578d760b7239f6d704fed9bb5a834bf52a

[28]: https://github.com/box/box-java-sdk/issues/951

[29]: https://github.com/box/box-java-sdk/issues/952

[30]: https://github.com/box/box-java-sdk/commit/070bdc56074a1533c41f9085943d09502c79a7f4

[31]: https://github.com/box/box-java-sdk/commit/953ad78ac84833082439d0def1dcc63dc11ac04a

[32]: https://github.com/box/box-java-sdk/commit/26aaed51fd914eaf2061da735f11830524e4cfe4