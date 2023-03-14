---
applied_at: '2023-03-14'
applies_to:
  - sdks
  - windows
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-windows-sdk-v2/releases/tag/v5.2.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2023-03-14-box-windows-sdk-v520-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2023-03-08-downloading-zip-archives
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2023/03-14-box-windows-sdk-v520-released.md
published_at: '2023-03-14'
---
# Box Windows SDK `v5.2.0` released

**New Features and Enhancements:**

* add `Id` to `MetadataTemplateField` ([#890][1]) ([`b7fe214`][2])
* add `start_date_field` and `description` to retention policies ([#888][3]) ([`100b722`][4])
* add configurable `JWTAudience` claim ([#897][5]) ([`50219fd`][6])
* add shared link support to `GetFolderItemsAsync` ([#892][7]) ([`0eba85c`][8])

**Bug Fixes:**

* Use fixed value of `aud` field in `JWT` claim ([#896][9]) ([`8c9982d`][10])

<https://www.nuget.org/packages/Box.V2/5.2.0>

<https://www.nuget.org/packages/Box.V2.Core/5.2.0>

[1]: https://github.com/box/box-windows-sdk-v2/issues/890

[2]: https://github.com/box/box-windows-sdk-v2/commit/b7fe2149e1a0ade8573b497b7bb36e9f3c4f4a82

[3]: https://github.com/box/box-windows-sdk-v2/issues/888

[4]: https://github.com/box/box-windows-sdk-v2/commit/100b722ce4909395c00b527677564f37a61ec2cb

[5]: https://github.com/box/box-windows-sdk-v2/issues/897

[6]: https://github.com/box/box-windows-sdk-v2/commit/50219fdfd553d6335b6f0b4341719b09680c4ba0

[7]: https://github.com/box/box-windows-sdk-v2/issues/892

[8]: https://github.com/box/box-windows-sdk-v2/commit/0eba85c693763472c51fe81cbc43222305e9eefb

[9]: https://github.com/box/box-windows-sdk-v2/issues/896

[10]: https://github.com/box/box-windows-sdk-v2/commit/8c9982d160ec4806c796ee2621b1811232ea59c1