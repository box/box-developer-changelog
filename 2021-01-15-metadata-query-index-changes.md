---
applied_at: '2021-01-15'
applies_to:
  - api
is_impactful: false
is_new_feature: false
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2021-01-15-metadata-query-index-changes
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2021-01-25-maximum-upload-file-size-limit-increases
previous_page_id: 2021-01-14-developer-console-updates
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/01-15-metadata-query-index-changes.md
published_at: '2021-01-15'
fullyTranslated: true
---
# メタデータクエリのインデックスの変更

When making file / folder [metadata query][mdq] requests, a search index needs to be created for queries where more than 10,000 files / folders are being searched.

このプロセスの効率を改善し、より簡潔にするために、メタデータクエリAPIリクエストで`use_index`キーを使用してインデックスを指定するという明示的な要件をなくすことで、インデックスの使用方法を変更しました。

<!-- more -->

現在`use_index`キーを使用してインデックスを指定している既存のアプリケーションに影響はありません。指定されたインデックスはリクエストで無視され、最も効率的なインデックスが自動的に適用されます。

## 以前のインデックス作成プロセス

検索対象のファイル/フォルダが10,000を超えるメタデータクエリリクエストに対してインデックスを作成して使用する場合の以前のプロセスは以下のとおりです。これは、変更前のプロセスです。

* Contact the metadata query team to request an index.
* メタデータクエリチームによってインデックスが作成され、新しく作成されたインデックスの名前が提供されます。
* When making metadata query requests this index name was supplied as the value for the `use_index` key in the API request.

## 新しいインデックス作成プロセス

インデックスを作成して使用する新しいプロセスは以下のとおりです。

* Contact the metadata query team to request an index.

メタデータクエリAPIリクエスト内の`use_index`キーは削除されました。その代わり、検索処理中に最も効率的なクエリが自動的に適用されます。

`use_index`キーで現在指定されているインデックスは無視され、代わりに最も効率的なインデックスが使用されます。

アプリケーションの所有者は、自己の判断でメタデータクエリリクエストから`use_index`キーと値を安全に削除できます。

[mdq]: g://metadata/queries/
