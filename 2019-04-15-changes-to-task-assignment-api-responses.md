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
# Changes to Task (Assignment) API responses

We have released an update to the API responses of the
[Get Task](endpoint://get-tasks-id) and
[Get Task Assignment](endpoint://get-task-assignments-id) endpoints.

Prior to this change, if a call was made to get a task or task assignment with
a valid task ID, and that file was deleted or your permissions changed to
prevent viewing the file, you would receive a 404 error because the tasks would
be deleted with the file.

With this new change, the response returned will be the task object with a
`null` response where the item would be, rather than a 404 error response.
