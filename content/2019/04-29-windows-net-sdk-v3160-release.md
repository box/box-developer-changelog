---
applied_at: '2019-04-29'
applies_to:
  - windows
  - sdks
is_impactful: false
is_new_feature: true
collapse: true
release_source_url: 'https://github.com/box/box-windows-sdk-v2/releases/tag/v3.16.0'
---

# Windows .NET SDK `v3.16.0` released

- Added `sort` and `direction` parameters to `client.SearchManager.SearchAsync()` to  control sort order
- Added `extension` parameter to `client.FilesManager.GetThumbnailAsync()` to control which thumbnail format is returned (thanks `@guilmori`!)
- Fixed a bug where query string parameters were not correctly encoded
- Added `SetFileMetadataAsync()` and `SetFolderMetadataAsync()` methods to `client.MetadataManager` to set metadata
  keys and values, overwriting existing values for the provided keys.
- Automatically retry most API calls when the API responds with a transient error status code

[`nuget.org/packages/Box.V2/3.16.0`](https://www.nuget.org/packages/Box.V2/3.16.0)
[`nuget.org/packages/Box.V2.Core/3.16.0`](https://www.nuget.org/packages/Box.V2.Core/3.16.0)