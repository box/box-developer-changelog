---
applied_at: '2022-03-03'
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
id: 2022-03-03-developer-documentation-updates
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2022-02-28-box-java-sdk-v311-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2022/03-03-developer-documentation-updates.md
published_at: '2022-03-03'
---
# Developer Documentation Updates
Today, we released several updates and bug fixes to our developer documentation. Click below to find out more information!

<!-- more -->

## Updates

* Added additional trailing backslashes for [metadata query][mq] examples
* Removed extra quotes from [metadata query][mq] examples
* Updated and added examples for [Shield Smart Access][shield] events
* Added note to the `can_view_path` [field][collab]
* Corrected [trash][trash] resources to represent the right responses returned by the API
* Added an `iOS` filter to the changelog
* Added note to folder lock [endpoint][folder-lock]
* Added note to [developer token][dt] guide that says revoking token removes webhook
* Removed the `94x94` option from the [thumbnail][tn] endpoint
* Added note to the events [`limit` parameter][ge]
* Added note to the [user `login` parameter][ue]
* Added app users to the PUT [`user`][ue] endpoint
* Added `external_app_user_id` field to the PUT [`user`][ue] endpoint
* Changed all references throughout documentation of `X-REF-HINTS` to `x-rep-hints`
* Added new fields to all 11 Box Sign [events][sign]

## Where to get support

Should you have any issues or need further guidance, please post a request to
our [developer forum][1] for any help needed.

[1]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum
[mq]: g://metadata/queries/create
[shield]: g://events/event-triggers/shield-alert-events/#smart-access
[collab]: e://post-collaborations/#param-can_view_path
[trash]: e://get-folders-id-trash
[folder-lock]: r://folder-lock
[dt]: g://authentication/tokens/developer-tokens
[tn]: e://get-files-id-thumbnail-id
[ge]: e://get-events/#param-limit
[ue]: e://put-users-id/#param-login
[sign]: g://events/event-triggers/sign-events