---
applied_at: '2020-06-11'
applies_to:
  - api
is_impactful: true
is_new_feature: true
collapse: true
show_excerpt: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2020-06-11-change-to-enterprise-events-for-tasks
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2020-06-23-box-python-sdk-v290-released
previous_page_id: 2020-05-15-box-ios-sdk-v410-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2020/06-11-change-to-enterprise-events-for-tasks.md
published_at: '2020-06-11'
---
# タスクに関するエンタープライズイベントの変更

本日以降、[エンタープライズイベントストリーム](g://events/for-enterprise/)は、新しいタスクとタスク割り当てイベントの生成を開始します。一部の既存のタスクイベントでは追加のフィールドが返されます。

<!-- more -->

## 新しいイベント

* タスクが更新されると、新しい`TASK_UPDATE`イベントがトリガーされます
* ユーザーからタスクの割り当てが解除されると、新しい`TASK_ASSIGNMENT_DELETE`イベントがトリガーされます

## 更新されたイベント

### `TASK_CREATE`の変更

タスクが作成されたときに、このイベントでは、タスクのID (`task.id`)、タスクを作成したユーザーのID (`task.created_by.id`)、タスクの説明 (`task.message`)、およびタスクの期日 (`task.due_date`、省略可) が`additional_details`オブジェクト内に含まれるようになりました。

```json
"additional_details": {
  "task": {
    "id": "1234567",
    "due_at": "2020-07-06T10:49:44-07:00",
    "message": "task description",
    "created_by": {
      "id": 123456,
      "login": "email@example.com"
    },
    ...
  }
}
```

### `TASK_ASSIGNMENT_CREATE`および`TASK_ASSIGNMENT_UPDATE`の変更

タスク割り当てが作成または更新されたときに、このイベントでは、タスクのID (`task.id`)、タスクを割り当てられたユーザーのID (`task_assignment.assigned_to.id`) とそのログイン (`task_assignment.assigned_to.login`)、タスクの説明 (`task.message`)、およびタスクの期日 (`task.due_date`、省略可) が`additional_details`オブジェクト内に含まれるようになりました。

```json
"additional_details": {
  "task": {
    "id": "1234567",
    "created_by": {
      "id": 12345,
      "login": "email@example.com"
    }
  },
  "task_assignment": {
    "assigned_to": {
      "id": 12346,
      "login": "email+2@example.com"
    },
    "status": "NOT_STARTED",
    "message": "assignee message"
  },
  ...
}
```

その他のイベントタイプの詳細については、[エンタープライズイベント](g://events/for-enterprise/)に関するドキュメントを参照してください。
