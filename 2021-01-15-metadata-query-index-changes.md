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

ファイル/フォルダの[メタデータクエリ][mdq]リクエストを実行する際、検索対象となるファイル/フォルダが10,000を超えるクエリには[検索インデックス][mdq-index]の作成が必要になります。

このプロセスの効率を改善し、より簡潔にするために、メタデータクエリAPIリクエストで`use_index`キーを使用してインデックスを指定するという明示的な要件をなくすことで、インデックスの使用方法を変更しました。

<!-- more -->

現在`use_index`キーを使用してインデックスを指定している既存のアプリケーションに影響はありません。指定されたインデックスはリクエストで無視され、最も効率的なインデックスが自動的に適用されます。

## 以前のインデックス作成プロセス

検索対象のファイル/フォルダが10,000を超えるメタデータクエリリクエストに対してインデックスを作成して使用する場合の以前のプロセスは以下のとおりです。これは、変更前のプロセスです。

* メタデータクエリチームに[問い合わせて][mdq-contact]インデックスをリクエストします。
* メタデータクエリチームによってインデックスが作成され、新しく作成されたインデックスの名前が提供されます。
* [メタデータクエリリクエスト][mdq-request]の実行時に、このインデックス名をAPIリクエストの`use_index`キーの値として指定しました。

## 新しいインデックス作成プロセス

インデックスを作成して使用する新しいプロセスは以下のとおりです。

* メタデータクエリチームに[問い合わせて][mdq-contact]インデックスをリクエストします。

メタデータクエリAPIリクエスト内の`use_index`キーは削除されました。その代わり、検索処理中に最も効率的なクエリが自動的に適用されます。

`use_index`キーで現在指定されているインデックスは無視され、代わりに最も効率的なインデックスが使用されます。

アプリケーションの所有者は、自己の判断でメタデータクエリリクエストから`use_index`キーと値を安全に削除できます。

[mdq]: g://metadata/queries/

[mdq-index]: g://metadata/queries/indexes/

[mdq-contact]: g://metadata/queries/indexes/#request-an-index

[mdq-request]: g://metadata/queries/indexes/#query-with-an-index
