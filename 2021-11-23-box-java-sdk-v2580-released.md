---
applied_at: '2021-11-23'
applies_to:
  - sdks
  - java
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-java-sdk/releases/tag/v2.58.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2021-11-23-box-java-sdk-v2580-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2021-11-29-oauth-20-redirect-url-updates
previous_page_id: 2021-11-22-new-shield-download-event
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/11-23-box-java-sdk-v2580-released.md
published_at: '2021-11-23'
fullyTranslated: true
---
# Box Java SDK `v2.58.0` released

**New Features and Enhancements:**

* SDK support for new GET /events `stream_type`: `admin_logs_streaming` ([#938][1])
* Adding `BoxDeveloperEditionAPIConnection#getUserConnection` to indicate that we can use this connection for managed users or app users ([#940][2])

**Bug Fixes:**

* Fix for deprecated enums still being used ([#931][3])

[1]: https://github.com/box/box-java-sdk/pull/938

[2]: https://github.com/box/box-java-sdk/pull/940

[3]: https://github.com/box/box-java-sdk/issues/931
