---
applied_at: '2021-03-16'
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
id: 2021-03-16-new-collection-events
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2021-02-26-box-shield-smart-access-events
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/03-16-new-collection-events.md
published_at: '2021-03-16'
fullyTranslated: true
---
# 新しいコレクションイベント

外部のコレクションイベントが[エンタープライズイベント][enterprise-events]ストリームから使用可能になりました。

Boxの[コレクション][collections]を使用すると、ファイル、フォルダ、ウェブリンクを1つのフォルダにまとめるのではなく、グループ化できます。これらの新しいイベントにより、社内で行われるコレクションの操作を監視することができます。

イベントは標準的なイベントオブジェクトスキーマに従っており、以下のようなものがあります。

* `COLLECTION_CREATE`: コレクションが作成されました
* `COLLECTION_DELETE`: コレクションが削除されました
* `COLLECTION_UPDATE`: コレクションが更新されました
* `COLLECTION_ITEM_CREATE`: 項目がコレクションに追加されました
* `COLLECTION_ITEM_DELETE`: 項目がコレクションから削除されました
* `COLLECTION_ITEM_UPDATE`: コレクション内の項目が更新されました

[enterprise-events]: g://events/for-enterprise/

[collections]: g://collections/
