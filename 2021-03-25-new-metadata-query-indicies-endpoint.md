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

10,000を超えるファイルやフォルダに対してメタデータクエリを実行する際に、クエリのパフォーマンスが悪いと`HTTP 403`エラーが発生する場合があります。検索インデックスを作成すれば、これらのクエリを大規模に実行して、このエラー状態を回避できます。また、検索インデックスは、クエリの処理中に自動的に適用されます。

この新しいエンドポイントにより、作成されたこれらの検索インデックスの参照が可能になります。

## 機能

このリリースでは、以下の新しいコンテンツと機能が導入されました。

* スコープやメタデータを指定してメタデータクエリインデックスのリストを取得するための新しいAPIエンドポイント。
* 新しいメタデータクエリインデックスの[レスポンスオブジェクト][mdq-index-response]。
* 新しいメタデータクエリインデックス (複数) の[レスポンスオブジェクト][mdq-indices-response]。

## 更新内容

このリリースでは、次のように、コンテンツが更新されました。

* メタデータクエリインデックスのリストを取得する方法の詳細が記載されているメタデータクエリインデックスガイドを更新。 

[mdq-indices-response]: https://developer.box.com/reference/resources/metadata-query-index/

[mdq-index-response]: https://developer.box.com/reference/resources/metadata-query-indices/
