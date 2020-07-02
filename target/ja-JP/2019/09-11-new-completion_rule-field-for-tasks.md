---
applied_at: '2019-09-11'
applies_to:
  - api
is_impactful: false
is_new_feature: false
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
