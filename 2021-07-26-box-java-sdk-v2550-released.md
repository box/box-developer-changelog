---
applied_at: '2021-07-26'
applies_to:
  - sdks
  - java
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-java-sdk/releases/tag/v2.55.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2021-07-26-box-java-sdk-v2550-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2021-07-26-release-of-box-sign-api
previous_page_id: 2021-07-16-updated-file-size-limits
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/07-26-box-java-sdk-v2550-released.md
published_at: '2021-07-26'
fullyTranslated: true
---
# Box Java SDK `v2.55.0` released

NOTE: Due to the benign nature of the "breaking change" below, we decided NOT to increment the major version for this release.  There should be no customer impact due to this change.

**Breaking Changes:**

* Update execute metadata query to match API response ([#890][1])
* NOTE: This change removes a method without deprecating it.  It was not possible to use the method correctly at all, because the underlying service no longer supported it.

**New Features and Enhancements:**

* Remove or deprecate insensitive language (\[[#889][2]])(<https://github.com/box/box-java-sdk/pull/889>

)

* Add support for `is_external_collab_restricted` parameter for User ([#896][3])
* Add configurable permissions support for `GroupMembership` ([#897][4])
* Add `SHIELD_JUSTIFICATION_APPROVAL` event type ([#898][5])
* Add ability to get files under retention for assignment and file versions under retention for assignment ([#899][6])
* Add `TASK_UPDATE`, `FILE_VERSION_RESTORE` and `ADVANCED_FOLDER_SETTINGS_UPDATE` event types ([#902][7])
* Add Box Sign API support ([#904][8])

**Bug Fixes:**

* Add setters for `BoxLegalHoldPolicy` ([#885][9])
* Add setters for `BoxTaskAssignment` ([#886][10])
* Add setters for Group Membership and Web Links ([#887][11])
* Add setters for Webhooks ([#888][12])
* Deprecate `BoxFile.getThumbnail` in favor of `BoxFile.getRepresentationContent` ([#891][13])

[1]: https://github.com/box/box-java-sdk/pull/890

[2]: https://github.com/box/box-java-sdk/issues/889

[3]: https://github.com/box/box-java-sdk/pull/896

[4]: https://github.com/box/box-java-sdk/pull/897

[5]: https://github.com/box/box-java-sdk/pull/898

[6]: https://github.com/box/box-java-sdk/pull/899

[7]: https://github.com/box/box-java-sdk/pull/902

[8]: https://github.com/box/box-java-sdk/pull/904

[9]: https://github.com/box/box-java-sdk/pull/885

[10]: https://github.com/box/box-java-sdk/pull/886

[11]: https://github.com/box/box-java-sdk/pull/887

[12]: https://github.com/box/box-java-sdk/pull/888

[13]: https://github.com/box/box-java-sdk/pull/891
