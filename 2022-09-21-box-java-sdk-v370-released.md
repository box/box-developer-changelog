---
applied_at: '2022-09-21'
applies_to:
  - sdks
  - java
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-java-sdk/releases/tag/v3.7.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2022-09-21-box-java-sdk-v370-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2022-09-23-box-node-sdk-v260-released
previous_page_id: 2022-09-12-upload-part-improvements
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2022/09-21-box-java-sdk-v370-released.md
published_at: '2022-09-21'
---
# Box Java SDK `v3.7.0` released

### New Features and Enhancements

* Add `is_accessible_via_shared_link` field to File and Folder ([#1103][1]) ([`45e9906`][2])

### Bug Fixes

* `BoxCollaboration.getItem()` returns `BoxItem.Info` not `BoxFolder.Info` ([#1102][3]) ([`135850d`][4]), closes [#1101][5] [#1100][6]. `BoxCollaboration.getItem()` used to return `BoxFolder.Info`. However, if collaboration was added on a file it would still return `BoxFolder.Info` which will end with throwing `BoxAPIException` when doing any API call. If you are getting collaboration item it is best to store it as `BoxItem.Info` or check its type and store it as `BoxFile.Info` or `BoxFolder.Info`.
* Add missing constructor to `BoxNotificationEmail` class ([#1098][7]) ([`2534f34`][8])

[1]: https://github.com/box/box-java-sdk/issues/1103

[2]: https://github.com/box/box-java-sdk/commit/45e9906efca6a7f2d4d738914dc804de12d3646e

[3]: https://github.com/box/box-java-sdk/issues/1102

[4]: https://github.com/box/box-java-sdk/commit/135850d97164ee5f6d74708d74c531f7fa8bee26

[5]: https://github.com/box/box-java-sdk/issues/1101

[6]: https://github.com/box/box-java-sdk/issues/1100

[7]: https://github.com/box/box-java-sdk/issues/1098

[8]: https://github.com/box/box-java-sdk/commit/2534f34133f9554abd1e80fc1555659a2c52b23f