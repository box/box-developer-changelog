---
applied_at: '2019-06-26'
applies_to:
  - api
is_impactful: false
is_new_feature: false
is_index: false
category_id: changelog
subcategory_id: ''
id: 2019-06-26-new-supported-values-in-tasks-api
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2019-07-18-java-sdk-v2350-release
previous_page_id: 2019-06-20-windows-net-sdk-v3180-release
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2019/06-26-new-supported-values-in-tasks-api.md
published_at: '2019-06-26'
---
# Tasks APIで新たにサポートされる値

6月26日に、新しいタスクタイプである一般タスクのサポートが開始されました。タスクを作成または更新する際に、`action`フィールドが、承認タスクの場合は`review`に、新しい一般タスクの場合は`complete`になります。

この変更は、タスク割り当ての更新時に使用できる値にも影響します。承認/レビュータスクを更新する場合、`resolution_state`を`incomplete`、`approved`、または`rejected`に設定できます。一般/完了タスクには、`incomplete`または`completed`の`resolution_state`を指定できます。

Tasks APIの応答の本文内では、タスクに「一般」や「承認」という分類が付けられません。これは、BoxのUIでのみ反映されます。

ドキュメントは[こちら](endpoint://resources/task/)で参照できます。
