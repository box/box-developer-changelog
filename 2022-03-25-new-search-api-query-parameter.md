---
applied_at: '2021-03-24'
applies_to:
  - api
is_impactful: true
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2022-03-25-new-search-api-query-parameter
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2022-03-28-box-node-sdk-v210-released
previous_page_id: 2022-03-22-box-java-sdk-v312-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2022/03-25-new-search-api-query-parameter.md
published_at: '2022-03-25'
fullyTranslated: true
---
# 検索APIの新しいクエリパラメータ

新しいフィールド`recent_updater_user_ids`を使用してAPIでのコンテンツの検索にフィルタをかけられるようになりました。

<!-- more -->

## 更新内容

* [`GET /get-search`][2] APIエンドポイントに新しいクエリパラメータ`recent_updater_user_ids`を追加

## 機能

* 指定したユーザーリスト (ユーザーIDのカンマ区切りリストとして定義) によって更新された項目のみに検索結果を絞り込みます。
* この機能では、項目の過去10バージョンのみを検索します。

### cURLの例

```curl
curl -i -X GET "https://api.box.com/2.0/search?query=sales&recent_updater_user_ids=1234567890,2314567890" \
     -H "Authorization: Bearer <ACCESS_TOKEN>"
```

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[Developer Forum][1]に英語でリクエストを投稿してください。

[1]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum

[2]: e://get-search/#param-recent_updater_user_ids
