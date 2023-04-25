---
applied_at: '2023-04-24'
applies_to:
  - sdks
  - java
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-java-sdk/releases/tag/v4.1.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2023-04-24-box-java-sdk-v410-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2023-04-20-box-embed-guide-update
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2023/04-24-box-java-sdk-v410-released.md
published_at: '2023-04-24'
fullyTranslated: true
---
# Box Java SDK `v4.1.0`のリリース

### 新機能と機能強化

* `BoxUser`メソッドの作成、更新で不足していた`fields`パラメータを追加 ([#1155][1]) ([`be3820d`][2])、[#1154][3]をクローズ

### バグ修正

* カスタムロガーハンドラの登録を許可 ([#1156][4]) ([`7373d5c`][5])
* `BoxAPIConnection`の復元時に`maxRetryAttempts`のデフォルト値にフォールバック ([#1161][6]) ([`2a10e5d`][7])、[#1160][8]をクローズ

[1]: https://github.com/box/box-java-sdk/issues/1155

[2]: https://github.com/box/box-java-sdk/commit/be3820dc4df15e99dfc13602d4f7269841bd15b3

[3]: https://github.com/box/box-java-sdk/issues/1154

[4]: https://github.com/box/box-java-sdk/issues/1156

[5]: https://github.com/box/box-java-sdk/commit/7373d5cc2bf49bc198cbca70d056e43f0dffdb3a

[6]: https://github.com/box/box-java-sdk/issues/1161

[7]: https://github.com/box/box-java-sdk/commit/2a10e5d07497611e077a9207fe98c1d8146cfd22

[8]: https://github.com/box/box-java-sdk/issues/1160
