---
applied_at: '2022-05-11'
applies_to:
  - api
is_impactful: true
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2022-05-11-new-fields-in-event-api-ref
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2022-05-16-box-ui-elements-v1500-released
previous_page_id: 2022-05-06-new-sign-events-payload-field
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2022/05-11-new-fields-in-event-api-ref.md
published_at: '2022-05-11'
---
# New Fields Added to Event Specification

The Event resource specification now includes two new fields:

* `created_at` specifying when an event was created
* `recorded_at` specifying when an event was registered in the database

<!-- more -->

## Updates
* Added new fields `created_at` and `recorded_at` to the [Event] resource specification [2].

## Where to get support

Should you have any issues or need further guidance, please post a request to
our [developer forum][1] for any help needed.

[1]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum
[2]: r://event