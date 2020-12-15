---
applied_at: '2018-08-21'
applies_to:
  - api
is_impactful: false
is_new_feature: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2018-08-21-add-new-fields-to-folder-update-and-get-info-endpoints
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2018-08-23-java-sdk-v2230-release
previous_page_id: 2018-08-21-add-new-action_by-field-to-enterprise-events
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2018/08-21-add-new-fields-to-folder-update-and-get-info-endpoints.md
published_at: 2018/08-21
---
# Add new fields to folder update and get info endpoints

Two major releases have been added to the [update folder API endpoint](endpoint://put-folders-id),
`is_collaboration_restricted_to_enterprise`. This is a boolean value made to
set whether future collaborations should be restricted to within the enterprise
only. This does not affect existing collaborations. The value of this field
will also be displayed when calling the [get folder info endpoint](endpoint://get-folders-id).