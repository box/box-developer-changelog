---
applied_at: '2023-01-18'
applies_to:
  - sdks
  - java
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-java-sdk/releases/tag/v4.0.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2023-01-18-box-java-sdk-v400-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2023-01-19-box-cli-v370-released
previous_page_id: 2023-01-17-box-windows-sdk-v510-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2023/01-18-box-java-sdk-v400-released.md
published_at: '2023-01-18'
fullyTranslated: true
---
# Box Java SDK `v4.0.0` released

The most important change this release includes is the replacement of the HTTP library from a native one to
[OkHttp][1] which allows SDK to

* Support the HTTP2 version of the HTTP protocol.
* Support proxies that do not use only basic authentication method. For details on creating custom proxy authenticators and an example of
    [NTLM proxy authentication][2].

### Breaking Changes

* `BatchAPIRequest` is no longer supported by the SDK
* `BoxAPIConnection#DEFAULT_MAX_ATTEMPTS` is replaced with `BoxAPIConnection#DEFAULT_MAX_RETRIES`
* `BoxRedirectResponse` was removed and will not be replaced
* `BoxEvent.Type` is replaced with `EventType`
* Removed deprecated methods from `BoxFile`, `BoxFileVersionRetention`, `BoxFolder`, `BoxGroup`, `BoxGroupMembership`,`BoxItem`, `BoxRetentionPolicy`, `BoxTask`, `BoxUser`, `BoxWebLink`, `EventLog`, `Metadata` and `MetadataTemplate`.

Migration details can be found [here][3].

### New Features and Enhancements

* Using `OkHttp` in Java SDK ([#1083][4]) ([`2656698`][5])

[1]: https://square.github.io/okhttp/

[2]: https://github.com/box/box-java-sdk/blob/main/doc/configuration.md#example-ntlm-authenticator

[3]: https://github.com/box/box-java-sdk/blob/main/doc/upgrades/3.x.x%20to%204.x.x.md

[4]: https://github.com/box/box-java-sdk/issues/1083

[5]: https://github.com/box/box-java-sdk/commit/265669897100dd8f1757fc2c5f25665da42c2889
