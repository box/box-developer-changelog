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
published_at: 2019/06-26
---
# New supported values in Tasks API

On June 26th, Box released support for a new task type, general tasks. When
creating or updating a task, the `action` field can either be `review` for
approval tasks or `complete` for the new general tasks.

This change also affects the accepted values when updating a task assignment.
If you want to update an approval/review task, the `resolution_state` can be
set to `incomplete`, `approved`, or `rejected`. A general/complete task can
have a `resolution_state` of `incomplete` or `completed`.

The Tasks API doesn't refer to tasks as "General" or "Approval" within the
response body. This is reflected only within Box's UI.

Docs can be found [here](endpoint://resources/task/).