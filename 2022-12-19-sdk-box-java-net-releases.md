---
applied_at: '2022-12-19'
applies_to:
  - api
  - java
  - windows
is_impactful: true
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2022-12-19-sdk-box-java-net-releases
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2022-12-01-server-server-service-action-eol
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2022/12-19-sdk-box-java-net-releases.md
published_at: '2022-12-19'
---
# Announcing major releases of Box SDKs

In January 2023, we plan two major releases of Box Windows V2 SDK and Box Java SDK.

<!-- more -->

For Box Windows V2 SDK, we are changing the minimum supported version of .NET Framework from 4.5 to 4.6.2+.
For Box Java SDK, we are replacing networking library and introducing [OkHttp][2] which will give SDK support of HTTP2 protocol and
allow users to use proxies beyond basic authentication.

For both SDKs, we are removing deprecated APIs.

* Read more about changes to [Box Windows V2 SDK][3].
* Read more about changes to [Box Java SDK][4].


## Where to get support

Should you have any issues or need further guidance, please post a request to
our [developer forum][1] for any help needed.

[1]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum
[2]: https://square.github.io/okhttp/
[3]: https://github.com/box/box-windows-sdk-v2/releases/tag/v5.0.0-prerelease
[4]: https://github.com/box/box-java-sdk/releases/tag/v4.0.0-prerelease