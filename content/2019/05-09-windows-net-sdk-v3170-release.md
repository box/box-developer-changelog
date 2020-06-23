---
applied_at: '2019-05-09'
applies_to:
  - dotnet
  - sdks
is_impactful: false
is_new_feature: true
source_url: 'https://github.com/box/box-windows-sdk-v2/releases/tag/v3.17.0'
---

# Windows .NET SDK `v3.17.0` release

- Fixed the encoding of dates in the query parameters for Events and Search endpoints
- Deprecated `FilesManager.DownloadStreamAsync()` and introduced a replacement method with correct parameter types for byte offsets: `FilesManager.DownloadAsync()`

[`nuget.org/packages/Box.V2/3.17.0`](https://www.nuget.org/packages/Box.V2/3.17.0)
[`nuget.org/packages/Box.V2.Core/3.17.0`](https://www.nuget.org/packages/Box.V2.Core/3.17.0)