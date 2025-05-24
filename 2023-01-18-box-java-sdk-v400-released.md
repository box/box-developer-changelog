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
# Box Java SDK `v4.0.0`のリリース

このリリースに含まれる最も重要な変更は、ネイティブのHTTPライブラリから[OkHttp][1]のライブラリへの置き換えです。これにより、SDKで以下が可能になります。

* HTTPプロトコルのHTTP2バージョンのサポート
* Basic認証方法以外も使用するプロキシのサポート。カスタムプロキシ認証の作成の詳細とNTLMプロキシ認証の例については、[こちら][2]を参照してください。

### 重大な変更

* `BatchAPIRequest`はSDKのサポート対象外になりました
* `BoxAPIConnection#DEFAULT_MAX_ATTEMPTS`は`BoxAPIConnection#DEFAULT_MAX_RETRIES`に置き換えられました
* `BoxRedirectResponse`は削除され、置き換えはありません
* `BoxEvent.Type`は`EventType`に置き換えられました
* 非推奨となったメソッドが`BoxFile`、`BoxFileVersionRetention`、`BoxFolder`、`BoxGroup`、`BoxGroupMembership`、`BoxItem`、`BoxRetentionPolicy`、`BoxTask`、`BoxUser`、`BoxWebLink`、`EventLog`、`Metadata`、`MetadataTemplate`から削除されました

移行の詳細については[こちら][3]を参照してください。

### 新機能と機能強化

* Java SDKでの`OkHttp`の使用 ([#1083][4]) ([`2656698`][5])

[1]: https://square.github.io/okhttp/

[2]: https://github.com/box/box-java-sdk/blob/main/doc/configuration.md#example-ntlm-authenticator

[3]: https://github.com/box/box-java-sdk/blob/main/doc/upgrades/3.x.x%20to%204.x.x.md

[4]: https://github.com/box/box-java-sdk/issues/1083

[5]: https://github.com/box/box-java-sdk/commit/265669897100dd8f1757fc2c5f25665da42c2889
