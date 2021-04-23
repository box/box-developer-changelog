---
applied_at: '2019-04-15'
applies_to:
  - api
is_impactful: true
is_new_feature: false
is_index: false
category_id: changelog
subcategory_id: ''
id: 2019-04-15-changes-to-task-assignment-api-responses
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2019-04-25-java-sdk-v2320-release
previous_page_id: 2019-04-11-java-sdk-v2310-release
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2019/04-15-changes-to-task-assignment-api-responses.md
published_at: '2019-04-15'
fullyTranslated: true
---
# Task (Assignment) APIのレスポンスの変更

[タスクを取得](endpoint://get-tasks-id)エンドポイントおよび[タスク割り当てを取得](endpoint://get-task-assignments-id)エンドポイントのAPIレスポンスの更新がリリースされました。

この変更の前は、有効なタスクIDでタスクまたはタスク割り当てを取得する呼び出しを実行したときに、そのファイルが削除されているか、自分の権限が変更されてファイルを表示できなくなっていると、タスクがファイルとともに削除されたという404エラーが返されていました。

この新しい変更により、返されるレスポンスは404エラーレスポンスではなく、その項目が存在するものとする`null`応答を持つタスクオブジェクトになります。
