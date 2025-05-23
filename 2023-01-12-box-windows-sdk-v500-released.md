---
applied_at: '2023-01-12'
applies_to:
  - sdks
  - windows
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-windows-sdk-v2/releases/tag/v5.0.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2023-01-12-box-windows-sdk-v500-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2023-01-17-box-windows-sdk-v510-released
previous_page_id: 2023-01-11-salesforce-toolkit-flow-actions
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2023/01-12-box-windows-sdk-v500-released.md
published_at: '2023-01-12'
fullyTranslated: true
---
# Box Windows SDK `v5.0.0` released

⚠ BREAKING CHANGES

* upgrade .net framework to 4.6.2 ([#881][1])
* remove deprecated methods ([#881][1])
* remove `use_index` references ([#881][1])
* return proper object from `GetFileVersionsUnderRetentionForAssignmentAsync`([#881][1])

**New Features and Enhancements:**

* upgrade .net framework to 4.6.2 ([#881][1]) ([`f1989aa`][2]), closes [#863][3]
* remove deprecated methods ([#881][1]) ([`f1989aa`][2]), closes [#874][4]
* remove `use_index` references ([#881][1]) ([`f1989aa`][2]), closes [#870][5]

**Bug Fixes:**

* Added pagination option to `IBoxFilesManager#ViewVersionsAsync` ([#869][6]) ([`2324495`][7]), closes [#866][8]
* return proper object from `GetFileVersionsUnderRetentionForAssignmentAsync` ([#881][1]) ([`f1989aa`][2]), closes [#875][9]

<https://www.nuget.org/packages/Box.V2/5.0.0>

<https://www.nuget.org/packages/Box.V2.Core/5.0.0>

[1]: https://github.com/box/box-windows-sdk-v2/issues/881

[2]: https://github.com/box/box-windows-sdk-v2/commit/f1989aa94cd085ad4bec04b4ebedb04f40455569

[3]: https://github.com/box/box-windows-sdk-v2/issues/863

[4]: https://github.com/box/box-windows-sdk-v2/issues/874

[5]: https://github.com/box/box-windows-sdk-v2/issues/870

[6]: https://github.com/box/box-windows-sdk-v2/issues/869

[7]: https://github.com/box/box-windows-sdk-v2/commit/232449531440227a0c8b3489ceda813fe4f4a73f

[8]: https://github.com/box/box-windows-sdk-v2/issues/866

[9]: https://github.com/box/box-windows-sdk-v2/issues/875
