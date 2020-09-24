---
applied_at: '2019-09-11'
applies_to:
  - api
is_impactful: false
is_new_feature: false
is_index: false
category_id: changelog
subcategory_id: ''
id: 2019-09-11-new-completion_rule-field-for-tasks
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2019-09-18-new-security-enhancements-for-token-revocation
previous_page_id: 2019-08-29-windows-net-sdk-v3190-release
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2019/09-11-new-completion_rule-field-for-tasks.md
published_at: '2019-09-11'
fullyTranslated: true
---
# タスクの新しい`completion_rule`フィールド

タスクオブジェクト`completion_rule`内で新しいオプションフィールドを使用できるようになりました。このフィールドは、[タスクを作成](endpoint://post-tasks)エンドポイントと[タスクを更新](endpoint://put-tasks-id)エンドポイントの使用時に設定でき、標準の[タスクオブジェクト](endpoint://resources/task/)の一部として返されます。

このフィールドの目的は、ユーザーの関与状況に基づいて、タスクが完了となる条件を設定することです。完了ルール`all_assignees`(デフォルト)を使用して作成されたタスクは、すべての担当者が作業を完了したときにのみ完了済みと見なされます。完了ルール`any_assignee`を使用して作成されたタスクは、1人の担当者が作業を完了すると完了済みと見なされます。
