---
applied_at: '2021-10-18'
applies_to:
  - sdks
  - java
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-java-sdk/releases/tag/v2.57.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2021-10-18-box-java-sdk-v2570-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2021-10-20-app-diagnostics-report-feedback
previous_page_id: 2021-10-07-update-to-webhooks-response
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/10-18-box-java-sdk-v2570-released.md
published_at: '2021-10-18'
fullyTranslated: true
---
# Box Java SDK `v2.57.0`のリリース

**新機能と機能強化:**

* `BoxFolder.getChildren`でのマーカーベースのページ割りのサポートを追加 ([#927][1])
* `minimal-json`をバージョン0.9.5にアップグレード
* `jose4j`をバージョン0.7.9にアップグレード
* バージョン4.0.1にGradleラッパーを追加 ([#928][2])

**バグ修正:**

* 無限再帰の修正 ([#924][3])
* `BoxFile`および`BoxFolder`の`BoxSharedLink`にバニティURLを設定できないバグの修正 ([#925][4])

[1]: https://github.com/box/box-java-sdk/pull/927

[2]: https://github.com/box/box-java-sdk/pull/928

[3]: https://github.com/box/box-java-sdk/pull/924

[4]: https://github.com/box/box-java-sdk/issues/925
