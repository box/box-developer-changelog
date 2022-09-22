---
applied_at: '2022-09-21'
applies_to:
  - sdks
  - java
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-java-sdk/releases/tag/v3.7.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2022-09-21-box-java-sdk-v370-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2022-09-12-upload-part-improvements
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2022/09-21-box-java-sdk-v370-released.md
published_at: '2022-09-21'
fullyTranslated: true
---
# Box Java SDK `v3.7.0`のリリース

### 新機能と機能強化

* ファイルとフォルダに`is_accessible_via_shared_link`フィールドを追加 ([#1103][1]) ([`45e9906`][2])

### バグ修正

* `BoxCollaboration.getItem()`が`BoxFolder.Info`ではなく`BoxItem.Info`を返すように修正 ([#1102][3]) ([`135850d`][4])、[#1101][5] [#1100][6]をクローズ。以前、`BoxCollaboration.getItem()`は`BoxFolder.Info`を返していました。ただし、ファイルにコラボレーションが追加された場合は引き続き`BoxFolder.Info`が返され、その結果、任意のAPI呼び出しを実行する際に`BoxAPIException`がスローされます。コラボレーション項目を取得する場合は`BoxItem.Info`として格納するか、その種類を確認して`BoxFile.Info`または`BoxFolder.Info`として格納することをお勧めします。
* 不足していたコンストラクタを`BoxNotificationEmail`クラスに追加 ([#1098][7]) ([`2534f34`][8])

[1]: https://github.com/box/box-java-sdk/issues/1103

[2]: https://github.com/box/box-java-sdk/commit/45e9906efca6a7f2d4d738914dc804de12d3646e

[3]: https://github.com/box/box-java-sdk/issues/1102

[4]: https://github.com/box/box-java-sdk/commit/135850d97164ee5f6d74708d74c531f7fa8bee26

[5]: https://github.com/box/box-java-sdk/issues/1101

[6]: https://github.com/box/box-java-sdk/issues/1100

[7]: https://github.com/box/box-java-sdk/issues/1098

[8]: https://github.com/box/box-java-sdk/commit/2534f34133f9554abd1e80fc1555659a2c52b23f
