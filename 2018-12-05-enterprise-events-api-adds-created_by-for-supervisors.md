---
applied_at: '2018-12-05'
applies_to:
  - api
is_impactful: true
is_new_feature: false
is_index: false
category_id: changelog
subcategory_id: ''
id: 2018-12-05-enterprise-events-api-adds-created_by-for-supervisors
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2018-12-12-collaborations-now-show-unregistered-users
previous_page_id: 2018-11-16-java-sdk-v2240-release
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2018/12-05-enterprise-events-api-adds-created_by-for-supervisors.md
---
# Enterprise events API adds `created_by` for supervisors

A minor change has been made to the response object of the
[enterprise events](endpoint://get-events/#request) API endpoint in the
event that an action is taken by a supervisor or internal admin user, such as a
Box admin.

Prior to this update the user information of the supervisor or internal admin
user would be displayed in the `created_by` field of the response object. With
this update the response will now show generic user information when that user
is a supervisor or internal admin.

Previously the `created_by` field in the response looked like this:

```js
"created_by": {
  "type": "user",
  "id": "2030401181",
  "name": "sshah+iadev",
  "login": "admin_sshah"
}
```

With this update that same response would look similar to the following:

```js
"created_by": {
  "type": "user",
  "id": "box_support",
  "name": "Box Support",
  "login": "support@box.com"
}
```