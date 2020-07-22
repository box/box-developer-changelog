---
applied_at: '2018-04-30'
applies_to:
  - windows
  - sdks
is_impactful: false
is_new_feature: true
collapse: true
release_source_url: 'https://github.com/box/box-windows-sdk-v2/releases/tag/v3.8.0'
is_index: false
category_id: changelog
subcategory_id: ''
id: 2018-04-30-windows-net-sdk-v380-release
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2018-05-10-java-sdk-v2190-release
previous_page_id: 2018-04-30-java-sdk-v2180-release
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2018/04-30-windows-net-sdk-v380-release.md
published_at: '2018-04-30'
---
# Windows .NET SDK `v3.8.0` released

- Fixed an issue where users could not create `BoxClient` on `Xamarin`
- Added File property to `BoxLock` objects in events
- Added `MetadataManager.DeleteMetadataTemplate(string scope, string template)` for deleting a Metadata template
- Made API URLs modifiable in `BoxConfig`
- Improved API response error objects/messages

[`nuget.org/packages/Box.V2/3.8.0`](https://www.nuget.org/packages/Box.V2/3.8.0)
[`nuget.org/packages/Box.V2.Core/3.8.0`](https://www.nuget.org/packages/Box.V2.Core/3.8.0)