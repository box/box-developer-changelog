---
applied_at: '2021-10-07'
applies_to:
  - api
is_impactful: false
is_new_feature: false
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2021-10-07-update-to-webhooks-response
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2021-10-07-new-app-diagnostics-report
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/10-07-update-to-webhooks-response.md
published_at: '2021-10-07'
fullyTranslated: true
---
# Update to Webhooks Response

The [webhook response][webhooks] has been updated to show the correct Webhook (Mini) object in the entries array.

<!-- more -->

## バグ修正

* Added a `mini` resource for [Webhook][mini]
* Corrected the [get-webhooks][webhooks] response object

[support]: https://developer.box.com/support

[forum]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum

[webhooks]: e://get-webhooks

[mini]: e://resources/webhook--mini
