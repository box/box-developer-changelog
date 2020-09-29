---
applied_at: '2018-03-15'
applies_to:
  - windows
  - sdks
is_impactful: false
is_new_feature: true
collapse: true
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
fullyTranslated: true
---
# Windows .NET SDK `v3.5.1`のリリース

* SDKがレート制限またはサーバーエラー応答を受信したときに指数バックオフに切り替えられました。
* Box APIへの接続のセキュリティを強化するため、可能な場合はTLS `v1.1`以上のサポートを強制します。
* ローカルのクロックとBoxサーバーのクロックが一致しない場合、およびJWT IDがすでに使用されている場合にJWT認証で変更された再試行を実行します。
* `RestoreTrashedAsync()`の`name`パラメータが省略可能になりました。

[`nuget.org/packages/Box.V2/3.5.1`](https://www.nuget.org/packages/Box.V2/3.5.1)
[`nuget.org/packages/Box.V2.Core/3.5.1`](https://www.nuget.org/packages/Box.V2.Core/3.5.1)
