---
applied_at: '2019-01-18'
applies_to:
  - windows
  - sdks
is_impactful: false
is_new_feature: true
collapse: true
release_source_url: 'https://github.com/box/box-windows-sdk-v2/releases/tag/v3.11.0'
---

# Windows .NET SDK `v3.11.0` released

- Added support for reading and writing more Group fields
- Fixed an issue where the `UnsharedAt` field of a shared link could not be set to `null`
- Fixed renaming a file on new version upload
- Added the ability to set the content modification timestamp on file version upload
- Fixed issues around reading the source of an event when the source item is a web link

[`nuget.org/packages/Box.V2/3.11.0`](https://www.nuget.org/packages/Box.V2/3.11.0)
[`nuget.org/packages/Box.V2.Core/3.11.0`](https://www.nuget.org/packages/Box.V2.Core/3.11.0)