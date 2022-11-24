---
applied_at: '2022-11-16'
applies_to:
  - sdks
  - java
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-java-sdk/releases/tag/v3.8.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2022-11-16-box-java-sdk-v380-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2022-11-22-box-cli-v360-released
previous_page_id: 2022-11-10-box-node-sdk-v272-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2022/11-16-box-java-sdk-v380-released.md
published_at: '2022-11-16'
fullyTranslated: true
---
# Box Java SDK `v3.8.0`のリリース

### 新機能と機能強化

* Added Box Sign webhooks ([#1109][1]) ([`99051a5`][2])

### バグ修正

* `NullPointerException` when using `BoxSignRequestPrefillTag` ([#1121][3]) ([`73fd5b6`][4]), closes [#1120][5]
* Regenerate JWT ID and retry auth request when JTI claim is rejected ([#1110][6]) ([`420da0f`][7])

### 依存関係のアップグレード

* Bumped `org.bitbucket.b_c:jose4j:0.9.0` ([#1111][8]) ([`349694d`][9])

[1]: https://github.com/box/box-java-sdk/issues/1109

[2]: https://github.com/box/box-java-sdk/commit/99051a575f120a8c0939359c1f4875b16b98b7f0

[3]: https://github.com/box/box-java-sdk/issues/1121

[4]: https://github.com/box/box-java-sdk/commit/73fd5b6e6e40f7e79b385edf46b8eee5ff612ace

[5]: https://github.com/box/box-java-sdk/issues/1120

[6]: https://github.com/box/box-java-sdk/issues/1110

[7]: https://github.com/box/box-java-sdk/commit/420da0f2c80bfe8cfbaba4fa8dec4826c4cb6337

[8]: https://github.com/box/box-java-sdk/issues/1111

[9]: https://github.com/box/box-java-sdk/commit/349694ddcfeb701a9ecdfd5ae555d49bea4d1030
