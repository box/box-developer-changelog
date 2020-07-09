---
applied_at: '2018-08-21'
applies_to:
  - api
is_impactful: false
is_new_feature: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2018-08-21-add-new-action_by-field-to-enterprise-events
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2018-08-21-add-new-fields-to-folder-update-and-get-info-endpoints
previous_page_id: 2018-08-17-box-user_id-field-size-changed
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2018/08-21-add-new-action_by-field-to-enterprise-events.md
---
# Add new `action_by` field to enterprise events

To better document admin actions taken on user accounts, we have added an
`action_by` mini-user object in the enterprise events response data. This field
will display the admin account which performed the user action, if applicable.

For enterprise admins this would include the ID, login, and name of their
account. For actions taken by a Box internal admin this would be:

* id: `box_support`
* login: `support@box.com`
* name: `Box Support`

The additional object is documented within the enterprise
[event object attributes](endpoint://resources/event/).
