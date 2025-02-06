---
applied_at: '2025-02-06'
applies_to:
  - sdks
  - dotnet
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-dotnet-sdk-gen/releases/tag/v1.7.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2025-02-06-box-dotnet-sdk-generated-v170-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2025-01-28-box-cli-v400-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2025/02-06-box-dotnet-sdk-generated-v170-released.md
published_at: '2025-02-06'
---
# Box Dotnet SDK Generated `v1.7.0` released

### Bug Fixes

* Correct types of `paged` and `thumb` properties in File representation (box/box-openapi[#503][1]) ([#383][2]) ([`d6995ad`][3])
* Prevent `Authentication` header from being passed during cross-origin redirects (box/box-codegen[#648][4]) ([#382][5]) ([`a64d373`][6])

### New Features and Enhancements

* Add Box Sign shared requests (box/box-openapi[#504][7]) ([#384][8]) ([`d563886`][9])
* feat: Add hubs support to /ai/ask. Replace type of `Items` property from `IReadOnlyList<AiItemBase>` to `IReadOnlyList<AiItemAsk>` in the `AiAsk` class (box/box-codegen[#656][10]) ([#397][11]) ([`32b6d03`][12])
* Update `/ai/extract_structured` response schema (box/box-codegen[#641][13]) ([#391][14]) ([`5f79a03`][15])

[1]: https://github.com/box/box-dotnet-sdk-gen/issues/503

[2]: https://github.com/box/box-dotnet-sdk-gen/issues/383

[3]: https://github.com/box/box-dotnet-sdk-gen/commit/d6995ad8ffa4f2cceb8195ffbfb6606f934a671f

[4]: https://github.com/box/box-dotnet-sdk-gen/issues/648

[5]: https://github.com/box/box-dotnet-sdk-gen/issues/382

[6]: https://github.com/box/box-dotnet-sdk-gen/commit/a64d373a935cd2a8e6f72184b8dc129a973e9d45

[7]: https://github.com/box/box-dotnet-sdk-gen/issues/504

[8]: https://github.com/box/box-dotnet-sdk-gen/issues/384

[9]: https://github.com/box/box-dotnet-sdk-gen/commit/d563886f2a2f48a20df13600f9c25ff95198a56f

[10]: https://github.com/box/box-dotnet-sdk-gen/issues/656

[11]: https://github.com/box/box-dotnet-sdk-gen/issues/397

[12]: https://github.com/box/box-dotnet-sdk-gen/commit/32b6d03aba97c18a8901efe98fc60c74e10197ce

[13]: https://github.com/box/box-dotnet-sdk-gen/issues/641

[14]: https://github.com/box/box-dotnet-sdk-gen/issues/391

[15]: https://github.com/box/box-dotnet-sdk-gen/commit/5f79a03453b9339a26eb130113d8f55748f0d912