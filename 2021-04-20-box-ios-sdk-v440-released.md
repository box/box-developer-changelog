---
applied_at: '2021-04-20'
applies_to:
  - sdks
  - ios
  - mobile
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-ios-sdk/releases/tag/v4.4.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2021-04-20-box-ios-sdk-v440-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2021-04-22-box-ui-elements-v1300-released
previous_page_id: 2021-04-16-box-python-sdk-v2120-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/04-20-box-ios-sdk-v440-released.md
published_at: '2021-04-20'
---
# Box iOS SDK `v4.4.0` released

**Breaking Changes:**

**New Features and Enhancements:**

* Add support for search parameter to get shared link items ([#756][1])
* Add support for folder lock functionality ([#759][2])
* Add support for `copyInstanceOnItemCopy` field for metadata templates ([#763][3])
* Add support for stream upload of new file versions and add support for 'If-Match' header when uploading new file versions ([#766][4])
* Add additional details field for `Event` model ([#770][5])

**Bug Fixes:**

* Pass only a scheme to iOS Authentication APIs ([#755][6])
* Update `listEnterpriseGroups()` to use documented parameter for filtering by name ([#757][7])
* Fix bug for OAuth where the callback is not called if token has been revoked ([#762][8])

[1]: https://github.com/box/box-ios-sdk/pull/756

[2]: https://github.com/box/box-ios-sdk/pull/759

[3]: https://github.com/box/box-ios-sdk/pull/763

[4]: https://github.com/box/box-ios-sdk/pull/766

[5]: https://github.com/box/box-ios-sdk/pull/770

[6]: https://github.com/box/box-ios-sdk/pull/755

[7]: https://github.com/box/box-ios-sdk/pull/757

[8]: https://github.com/box/box-ios-sdk/pull/762