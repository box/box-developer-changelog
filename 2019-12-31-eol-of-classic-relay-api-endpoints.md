---
applied_at: '2019-12-31'
applies_to:
  - api
is_impactful: true
is_new_feature: false
is_index: false
category_id: changelog
subcategory_id: ''
id: 2019-12-31-eol-of-classic-relay-api-endpoints
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2019-12-20-java-sdk-v2430-release
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2019/12-31-eol-of-classic-relay-api-endpoints.md
published_at: '2019-12-31'
fullyTranslated: true
---
# Relay Classic APIエンドポイントの廃止

2019年10月18日にお知らせしたとおり、Classic Relay APIエンドポイントは本日をもって正式に廃止されます。

以下のエンドポイントはこの廃止の影響を受けるため、このエンドポイントにリクエストを送信するアプリケーションでエラー応答が返されるようになります。

* 公開されているRelay Classicテンプレートのリストの取得
* Relay Classicワークフローのリストの取得
* Relay Classicワークフローの開始

このようなエラー応答が発生するアプリケーションでは、上記のRelay Classic APIに対する呼び出しをすべて削除してください。
