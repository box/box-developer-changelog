---
applied_at: '2018-04-30'
applies_to:
  - dotnet
  - sdks
is_impactful: false
is_new_feature: true
source_url: 'https://github.com/box/box-windows-sdk-v2/releases/tag/v3.8.0'
---

# Windows .NET SDK `v3.8.0` release

- Fixed an issue where users could not create `BoxClient` on `Xamarin`
- Added File property to `BoxLock` objects in events
- Added `MetadataManager.DeleteMetadataTemplate(string scope, string template)` for deleting a Metadata template
- Made API URLs modifiable in `BoxConfig`
- Improved API response error objects/messages

[`nuget.org/packages/Box.V2/3.8.0`](https://www.nuget.org/packages/Box.V2/3.8.0)
[`nuget.org/packages/Box.V2.Core/3.8.0`](https://www.nuget.org/packages/Box.V2.Core/3.8.0)