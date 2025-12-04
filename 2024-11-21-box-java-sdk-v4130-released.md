---
applied_at: '2024-11-21'
applies_to:
  - sdks
  - java
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-java-sdk/releases/tag/v4.13.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2024-11-21-box-java-sdk-v4130-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2024-11-25-box-cli-v3160-released
previous_page_id: 2024-11-12-naming-change-apps-integrations
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2024/11-21-box-java-sdk-v4130-released.md
published_at: '2024-11-21'
fullyTranslated: true
---
# Box Java SDK `v4.13.0`のリリース

### 新機能と機能強化

* Enforce exact byte reading from `Content-Length` header for `BoxFile` representation ([#1274][1]) ([`0b45cdb`][2])
* Expose `getVersionByID` method on `BoxFile` ([#1268][3]) ([`6ea70f7`][4])
* make `tryRestoreUsingAccessTokenCache` in Box API connection public ([#1272][5]) ([`50f5a61`][6])

### バグ修正

* Fix `accessToken` locking mechanism ([#1270][7]) ([`5eb4c93`][8])

[1]: https://github.com/box/box-java-sdk/issues/1274

[2]: https://github.com/box/box-java-sdk/commit/0b45cdb74c21996d1dfea505d25430a1fa9ee730

[3]: https://github.com/box/box-java-sdk/issues/1268

[4]: https://github.com/box/box-java-sdk/commit/6ea70f79ad39dd9a427ee574b5536d0ab1e3a9a4

[5]: https://github.com/box/box-java-sdk/issues/1272

[6]: https://github.com/box/box-java-sdk/commit/50f5a61184bd1a17a17e811536166f9f8e081a13

[7]: https://github.com/box/box-java-sdk/issues/1270

[8]: https://github.com/box/box-java-sdk/commit/5eb4c93bd3653b28dc7def747779d008369f486a
