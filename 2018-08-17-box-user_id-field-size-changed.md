---
applied_at: '2018-08-17'
applies_to:
  - api
is_impactful: true
is_new_feature: false
is_index: false
category_id: changelog
subcategory_id: ''
id: 2018-08-17-box-user_id-field-size-changed
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2018-08-21-add-new-action_by-field-to-enterprise-events
previous_page_id: 2018-08-16-generic-method-added-to-the-salesforce-sdk
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2018/08-17-box-user_id-field-size-changed.md
published_at: '2018-08-17'
---
# Box `user_id` field size changed

The `user_id` field, used to track all platform users (that is, managed,
externally managed, and app users), will soon be updated to begin producing
64-bit integer numeric values, rather than the 32-bit integers it creates
currently.

For customers who are translating the produced `user_id` strings from our APIs
into 32-bit integer fields, your internal systems are affected by this update,
and you must update them to support the new 64-bit `user_id` integer size. We
recommend that all `user_id` fields be stored as strings, as per our
[API documentation](endpoint://resources/user/).
