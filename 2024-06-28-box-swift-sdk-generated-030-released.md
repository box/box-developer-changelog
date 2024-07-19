---
applied_at: '2024-06-28'
applies_to:
  - sdks
  - swift
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-swift-sdk-gen/releases/tag/0.3.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2024-06-28-box-swift-sdk-generated-030-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2024-06-28-box-windows-sdk-v571-released
previous_page_id: 2024-06-12-box-typescript-sdk-generated-v110-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2024/06-28-box-swift-sdk-generated-030-released.md
published_at: '2024-06-28'
fullyTranslated: true
---
# Box Swift SDK Generated `0.3.0`のリリース

### バグ修正

* ベースURLを変更 (box/box-codegen[#491][1]) ([#115][2]) ([`d0a7adb`][3])
* Box AIエンドポイントを修正 (box/box-openapi[#418][4]) ([#88][5]) ([`022f83a`][6])
* 自動更新のプルリクエストのCIを修正 (box/box-codegen[#506][7]) ([#135][8]) ([`a62e238`][9])
* Swiftで配列を使用したUnionの逆シリアル化を修正 (box/box-codegen[#486][10]) ([#94][11]) ([`4f187be`][12])
* メタデータフィルタリソースを修正 (box/box-openapi[#419][13]) ([#90][14]) ([`b04f7ce`][15])
* ファイルやフォルダの分類を更新するためのスキーマを修正 (box/box-openapi[#423][16]) ([#104][17]) ([`caa9d2b`][18])
* Box Signの表現を改善 (box/box-openapi[#424][19]) ([#111][20]) ([`4fa69f0`][21])

### 新機能と機能強化

* 欠落しているマーカーページ割りフィールドを追加し、新しいイベントタイプを導入 `(box/box-openapi[#431](https://github.com/box/box-codegen/issues/431))` ([#136][22]) ([`b186b11`][23])
* `visionOS`のサポートを追加し、Swift用のPrivacy Manifestファイルを追加 `(box/box-codegen[#510](https://github.com/box/box-codegen/issues/510))` ([#139][24]) ([`7fc76fc`][25])
* Swiftで日付のサポートを追加 (box/box-codegen[#488][26]) ([#103][27]) ([`7e1ea1a`][28])
* Swiftでの分割アップロードを改善 `(box/box-codegen[#515](https://github.com/box/box-codegen/issues/515))` ([#143][29]) ([`b8099ab`][30])
* 通知の抑制をパブリックスキーマに移動 (box/box-openapi[#425][31]) ([#113][32]) ([`069be60`][33])
* スキーマを個別のモジュールに移動 (box/box-codegen[#483][34]) ([#99][35]) ([`c7a8506`][36])
* 一般的なエラーのスローを開始 `(box/box-codegen[#516](https://github.com/box/box-codegen/issues/516))` ([#147][37]) ([`d12bbb7`][38])
* Box AIエンドポイントをサポート (box/box-openapi[#416][39]) ([#86][40]) ([`175ab82`][41])
* Swiftでの分割アップロードをサポート `(box/box-codegen[#513](https://github.com/box/box-codegen/issues/513))` ([#142][42]) ([`9e0b4e2`][43])
* パーサーのエンドポイントおよびスキーマの除外をサポート (box/box-codegen[#487][44]) ([#100][45]) ([`af9e171`][46])

[1]: https://github.com/box/box-codegen/issues/491

[2]: https://github.com/box/box-codegen/issues/115

[3]: https://github.com/box/box-codegen/commit/d0a7adb201c823313f0a5de25fa4fc5469590c97

[4]: https://github.com/box/box-codegen/issues/418

[5]: https://github.com/box/box-codegen/issues/88

[6]: https://github.com/box/box-codegen/commit/022f83aaa7fbe3f4292a06527875123ecc7b99f0

[7]: https://github.com/box/box-codegen/issues/506

[8]: https://github.com/box/box-codegen/issues/135

[9]: https://github.com/box/box-codegen/commit/a62e238534cb625dbc98cbe59c98939c78b74f4a

[10]: https://github.com/box/box-codegen/issues/486

[11]: https://github.com/box/box-codegen/issues/94

[12]: https://github.com/box/box-codegen/commit/4f187bed1e88c93c1258be8723a39b45129ff21f

[13]: https://github.com/box/box-codegen/issues/419

[14]: https://github.com/box/box-codegen/issues/90

[15]: https://github.com/box/box-codegen/commit/b04f7ceee9bca4f1f19d66401f38636e7737b4b1

[16]: https://github.com/box/box-codegen/issues/423

[17]: https://github.com/box/box-codegen/issues/104

[18]: https://github.com/box/box-codegen/commit/caa9d2b7d0a6c2728f543fa19acb7859f21fb5c9

[19]: https://github.com/box/box-codegen/issues/424

[20]: https://github.com/box/box-codegen/issues/111

[21]: https://github.com/box/box-codegen/commit/4fa69f01ca3a2a7fc8dcdc71cbecb03c469a83e6

[22]: https://github.com/box/box-codegen/issues/136

[23]: https://github.com/box/box-codegen/commit/b186b11a2c591cd4fdd3b50733750a7bb4ec94e9

[24]: https://github.com/box/box-codegen/issues/139

[25]: https://github.com/box/box-codegen/commit/7fc76fc1799db0a50ad22eb047d013c4597c5277

[26]: https://github.com/box/box-codegen/issues/488

[27]: https://github.com/box/box-codegen/issues/103

[28]: https://github.com/box/box-codegen/commit/7e1ea1af553cc8458eb9026c777608f7929e686d

[29]: https://github.com/box/box-codegen/issues/143

[30]: https://github.com/box/box-codegen/commit/b8099ab41ea5b8706e14285a0f9db2fd3c0a7a6d

[31]: https://github.com/box/box-codegen/issues/425

[32]: https://github.com/box/box-codegen/issues/113

[33]: https://github.com/box/box-codegen/commit/069be60613889b45b396bbe22262c5f8df32b158

[34]: https://github.com/box/box-codegen/issues/483

[35]: https://github.com/box/box-codegen/issues/99

[36]: https://github.com/box/box-codegen/commit/c7a85069544c28e2be918eafd9e240f39660ead3

[37]: https://github.com/box/box-codegen/issues/147

[38]: https://github.com/box/box-codegen/commit/d12bbb7d06bd3fcf39c31e316f1047065b56baac

[39]: https://github.com/box/box-codegen/issues/416

[40]: https://github.com/box/box-codegen/issues/86

[41]: https://github.com/box/box-codegen/commit/175ab82c18dc390bcd4c8e20aea8e405a2e31c4d

[42]: https://github.com/box/box-codegen/issues/142

[43]: https://github.com/box/box-codegen/commit/9e0b4e26a9283b5900ae0fe0fa858394b732f51b

[44]: https://github.com/box/box-codegen/issues/487

[45]: https://github.com/box/box-codegen/issues/100

[46]: https://github.com/box/box-codegen/commit/af9e171c101703c98ff9a53093d7fc9c306137d9
