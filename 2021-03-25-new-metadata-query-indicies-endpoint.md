---
applied_at: '2021-03-25'
applies_to:
  - api
is_impactful: false
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2021-03-25-new-metadata-query-indicies-endpoint
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2021-03-25-service-account-information-in-developer-console
previous_page_id: 2021-03-16-new-collection-events
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/03-25-new-metadata-query-indicies-endpoint.md
published_at: '2021-03-25'
fullyTranslated: true
---
# 新しいメタデータクエリインデックスのエンドポイント

指定したテンプレートとスコープのメタデータクエリインデックスのリストを取得する新しいAPIエンドポイントが導入されました。

<!-- more -->

メタデータクエリを使用すると、ファイルやフォルダに追加されているメタデータを検索して、そのファイルやフォルダを見つけることができます。

When performing metadata queries on 10,000 or more files or folders, non-performant queries may produce an `HTTP 403` error. Creating a search index delivers the ability to run these queries at scale to bypass this error state, and are automatically applied during the querying process.

この新しいエンドポイントにより、作成されたこれらの検索インデックスの参照が可能になります。

## 機能

このリリースでは、以下の新しいコンテンツと機能が導入されました。

* New API endpoint to get a list of metadata query indices by scope and template.
* 新しいメタデータクエリインデックスの[レスポンスオブジェクト][mdq-index-response]。
* 新しいメタデータクエリインデックス (複数) の[レスポンスオブジェクト][mdq-indices-response]。

## 更新内容

このリリースでは、次のように、コンテンツが更新されました。

* Updated metadata query indices guide to include details on how to get a list of metadata query indices. 

[mdq-indices-response]: https://developer.box.com/reference/resources/metadata-query-index/

[mdq-index-response]: https://developer.box.com/reference/resources/metadata-query-indices/
