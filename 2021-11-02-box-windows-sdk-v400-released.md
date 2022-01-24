---
applied_at: '2021-11-02'
applies_to:
  - sdks
  - windows
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-windows-sdk-v2/releases/tag/v4.0.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2021-11-02-box-windows-sdk-v400-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2021-11-03-extend-retention-via-files-api
previous_page_id: 2021-10-28-box-ios-sdk-v500-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/11-02-box-windows-sdk-v400-released.md
published_at: '2021-11-02'
---
# Box Windows SDK `v4.0.0` released

**Breaking changes:**

* Extract interfaces for BoxClient and Managers to improve testability ([#603][1])
* Add BoxConfigBuilder and make BoxConfig immutable ([#737][2])
* Expose tasks from async methods ([#742][3])
* Use DateTimeOffset instead of DateTime ([#749][4])
* Rework returned exceptions ([#753][5])
* Upgrade .NET Standard to 2.0 ([#755][6])

**New Features and Enhancements:**

* Add ability to get files under retention for assignment and file versions under retention for assignment ([#734][7])
* Add `is_collaboration_restricted_to_enterprise` flag support for `Folder` update ([#732][8])
* Replace insensitive language ([#738][9])
* Add new, easier to use method for create terms of service user status ([#740][10])
* Allow sort and direction parameter to be passed in when getting trashed items ([#754][11])
* Add support for Task completion_rule field ([#758][12])
* Add BoxSign API support ([#765][13])

**Bug Fixes:**

* Fix `Cannot access a closed Stream.Request` exception during upload ([#739][14]) ([#757][15])

<https://www.nuget.org/packages/Box.V2/4.0.0>

<https://www.nuget.org/packages/Box.V2.Core/4.0.0>

[1]: https://github.com/box/box-windows-sdk-v2/pull/603

[2]: https://github.com/box/box-windows-sdk-v2/pull/737

[3]: https://github.com/box/box-windows-sdk-v2/pull/742

[4]: https://github.com/box/box-windows-sdk-v2/pull/749

[5]: https://github.com/box/box-windows-sdk-v2/pull/753

[6]: https://github.com/box/box-windows-sdk-v2/pull/755

[7]: https://github.com/box/box-windows-sdk-v2/pull/734

[8]: https://github.com/box/box-windows-sdk-v2/pull/732

[9]: https://github.com/box/box-windows-sdk-v2/pull/738

[10]: https://github.com/box/box-windows-sdk-v2/pull/740

[11]: https://github.com/box/box-windows-sdk-v2/pull/754

[12]: https://github.com/box/box-windows-sdk-v2/pull/758

[13]: https://github.com/box/box-windows-sdk-v2/pull/765

[14]: https://github.com/box/box-windows-sdk-v2/pull/739

[15]: https://github.com/box/box-windows-sdk-v2/pull/757
