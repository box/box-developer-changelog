---
applied_at: '2019-02-08'
applies_to:
  - dotnet
  - sdks
is_impactful: false
is_new_feature: true
source_url: 'https://github.com/box/box-windows-sdk-v2/releases/tag/v3.12.0'
---

# Windows .NET SDK `v3.12.0` release

- Added `client.FilesManager.GetCollaborationsCollectionAsync()` and deprecated
  `client.FilesManager.GetCollaborationsAsync()` to enable paging through the entire
  collection of collaborations on a file
- Added `client.WebLinksManager.CopyAsync()`, `client.WebLinksManager.CreateSharedLinkAsync()`,
  and `client.WebLinksManager.DeleteSharedLinkAsync()`
- Added `client.UsersManager.GetUserAvatarAsync()` for retrieving a user's avatar image

https://www.nuget.org/packages/Box.V2/3.12.0
https://www.nuget.org/packages/Box.V2.Core/3.12.0