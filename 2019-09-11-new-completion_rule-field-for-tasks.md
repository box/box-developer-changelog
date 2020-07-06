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
  https://github.com/box/developer.box.com/blob/main/content/2019/09-11-new-completion_rule-field-for-tasks.md
---
# New `completion_rule` field for Tasks

A new optional field has been made available within the Task object,
`completion_rule`. This field may be set through the use of the the
[Create Task](endpoint://post-tasks) and [Update Task](endpoint://put-tasks-id)
endpoints, and will be returned as part of the standard
[Task object](endpoint://resources/task/).

The purpose of this field is to set the conditions under which a task is
completed, based on user involvement. When a task is created with a completion
rule of `all_assignees` (default), the task will only be considered completed
when all assignees have completed the task. When a task is created with a
completion rule of `any_assignee`, the task will be considered completed when
one assignee has completed the task.