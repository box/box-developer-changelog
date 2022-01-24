---
applied_at: '2021-08-31'
applies_to:
  - sdks
  - java
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-java-sdk/releases/tag/v2.56.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2021-08-31-box-java-sdk-v2560-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2021-08-31-notice-of-behavior-change-for-item-preview-events
previous_page_id: 2021-08-30-box-node-sdk-v1390-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/08-31-box-java-sdk-v2560-released.md
published_at: '2021-08-31'
---
# Box Java SDK `v2.56.0` released

**New Features and Enhancements:**

* Replace `submaster` `GroupMembershipRole` with `coadmin`. Replace `MASTER_INVITE_ACCEPT` and `MASTER_INVITE_REJECT` with `ADMIN_INVITE_ACCEPT` and `ADMIN_INVITE_REJECT`. ([#907][1])
* Add `tracking_codes` to create User API call ([#910][2])

**Bug Fixes:**

* Fix `url` for `BoxFileRequest.Info` object ([#906][3])
* Attempt to fix thread locking issue on refresh of access token ([#912][4])

[1]: https://github.com/box/box-java-sdk/pull/907

[2]: https://github.com/box/box-java-sdk/pull/910

[3]: https://github.com/box/box-java-sdk/pull/906

[4]: https://github.com/box/box-java-sdk/pull/912
