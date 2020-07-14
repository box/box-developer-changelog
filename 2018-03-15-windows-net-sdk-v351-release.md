---
applied_at: '2018-03-15'
applies_to:
  - dotnet
  - sdks
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-windows-sdk-v2/releases/tag/v3.5.1'
is_index: false
category_id: changelog
subcategory_id: ''
id: 2018-03-15-windows-net-sdk-v351-release
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2018-03-21-windows-net-sdk-v352-release
previous_page_id: 2018-03-13-update-to-box-annotations
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2018/03-15-windows-net-sdk-v351-release.md
published_at: '2018-03-15'
---
# Windows .NET SDK `v3.5.1` release

- Switched to exponential backoff when the SDK receives a rate limit or server error response.
- Force support for TLS `v1.1` or higher when available to improve the security of connections to the Box API.
- Perform modified retry on JWT auth for when the local clock and the Box Server clock are not aligned as well as if the JWT ID has already been consumed.
- Made `name` parameter optional on `RestoreTrashedAsync()`.

[`nuget.org/packages/Box.V2/3.5.1`](https://www.nuget.org/packages/Box.V2/3.5.1)
[`nuget.org/packages/Box.V2.Core/3.5.1`](https://www.nuget.org/packages/Box.V2.Core/3.5.1)