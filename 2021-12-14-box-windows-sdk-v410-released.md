---
applied_at: '2021-12-14'
applies_to:
  - sdks
  - windows
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-windows-sdk-v2/releases/tag/v4.1.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2021-12-14-box-windows-sdk-v410-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2021-12-08-box-python-sdk-v2140-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/12-14-box-windows-sdk-v410-released.md
published_at: '2021-12-14'
---
# Box Windows SDK `v4.1.0` released

**Bug Fixes:**

* add missing `configureAwait`(false) when awaiting to prevent deadlocks ([#775][1]) ([`b16267e`][2])

**New Features and Enhancements:**

* add configurable `Timeout` for `BoxClient` ([#779][3]) ([`ac842ed`][4])
* add file request API ([#777][5]) ([`1098f75`][6])
* add `vanity_name` to `SharedLink` ([#782][7]) ([`00a1e26`][8])

<https://www.nuget.org/packages/Box.V2/4.1.0>

<https://www.nuget.org/packages/Box.V2.Core/4.1.0>

[1]: https://github.com/box/box-windows-sdk-v2/issues/775

[2]: https://github.com/box/box-windows-sdk-v2/commit/b16267e8f3dca5396e87be660e30a1e9405d8139

[3]: https://github.com/box/box-windows-sdk-v2/issues/779

[4]: https://github.com/box/box-windows-sdk-v2/commit/ac842ed4ba1a2dfe499706524441bc6ae3b3c192

[5]: https://github.com/box/box-windows-sdk-v2/issues/777

[6]: https://github.com/box/box-windows-sdk-v2/commit/1098f75983e2d784521f13b8d53df0e55d03203b

[7]: https://github.com/box/box-windows-sdk-v2/issues/782

[8]: https://github.com/box/box-windows-sdk-v2/commit/00a1e265569d76c2c9593aa259202d7febef629c