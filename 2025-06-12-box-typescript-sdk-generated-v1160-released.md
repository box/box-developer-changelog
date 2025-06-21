---
applied_at: '2025-06-12'
applies_to:
  - sdks
  - typescript
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-typescript-sdk-gen/releases/tag/v1.16.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2025-06-12-box-typescript-sdk-generated-v1160-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2025-06-20-box-cli-v420-released
previous_page_id: 2025-06-12-box-python-sdk-generated-v1150-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2025/06-12-box-typescript-sdk-generated-v1160-released.md
published_at: '2025-06-12'
fullyTranslated: true
---
# Box TypeScript SDK Generated `v1.16.0`のリリース

### バグ修正

* 本文をエスケープする場合としない場合のWebhook署名を計算 (box/box-codegen[#737][1]) ([#627][2]) ([`6a21b8e`][3])
* `boxNetworkClient`の循環依存関係を修正 (box/box-codegen[#708][4]) ([#591][5]) ([`b383889`][6])
* トークンの取得に`retrieveToken`メソッドを使用するようダウンスコープトークンを修正 (box/box-codegen[#731][7]) ([#618][8]) ([`90edb0c`][9])
* Webhook署名を計算する際のスラッシュのエスケープを修正 (box/box-codegen[#736][10]) ([#624][11]) ([`a0307d0`][12])
* メタデータフィルタで文字列のリストを処理 (box/box-codegen[#716][13]) ([#597][14]) ([`979ff2c`][15])
* メモリにコンテンツを格納しないようにファイルのダウンロードを改善 (box/box-codegen[#701][16]) ([#589][17]) ([`513a15e`][18])
* ブラウザのユーティリティ関数を変更 (box/box-codegen[#686][19]) ([#585][20]) ([`7232170`][21])
* HMAC署名に定数時間比較を使用 (box/box-codegen[#739][22]) ([#630][23]) ([`efdcaaf`][24])

### 新機能と機能強化

* AIエージェントの警告を追加し、より多くの種類のメタデータ値を許可 (box/box-openapi[#520][25]) ([#600][26]) ([`a5a555f`][27])
* Signテンプレートスキーマにセキュリティ設定のプロパティを追加 (box/box-openapi[#518][28]) ([#588][29]) ([`dfd3e5f`][30])
* ShieldリストのAPIを追加 (box/box-openapi[#528][31]) ([#622][32]) ([`be3af44`][33])
* AI APIにIBMモデルのサポートを追加 (box/box-openapi[#522][34]) ([#601][35]) ([`b060b8c`][36])
* AI抽出エンドポイントの項目数の上限を引き上げ (box/box-openapi[#525][37]) ([#602][38]) ([`86c5d14`][39])
* リーガルホールドとAIモデルを更新 (box/box-openapi[#526][40]) ([#620][41]) ([`de3df57`][42])

[1]: https://github.com/box/box-typescript-sdk-gen/issues/737

[2]: https://github.com/box/box-typescript-sdk-gen/issues/627

[3]: https://github.com/box/box-typescript-sdk-gen/commit/6a21b8ed54ef26041feccaa5481951355965e514

[4]: https://github.com/box/box-typescript-sdk-gen/issues/708

[5]: https://github.com/box/box-typescript-sdk-gen/issues/591

[6]: https://github.com/box/box-typescript-sdk-gen/commit/b383889b9fdc91c6cfed7169e4d36a22a8c8a0fa

[7]: https://github.com/box/box-typescript-sdk-gen/issues/731

[8]: https://github.com/box/box-typescript-sdk-gen/issues/618

[9]: https://github.com/box/box-typescript-sdk-gen/commit/90edb0cc9bddc474c20b8b83770a4d314843edab

[10]: https://github.com/box/box-typescript-sdk-gen/issues/736

[11]: https://github.com/box/box-typescript-sdk-gen/issues/624

[12]: https://github.com/box/box-typescript-sdk-gen/commit/a0307d0c4c5dfed1a66e395a1dfb4c8ff387561d

[13]: https://github.com/box/box-typescript-sdk-gen/issues/716

[14]: https://github.com/box/box-typescript-sdk-gen/issues/597

[15]: https://github.com/box/box-typescript-sdk-gen/commit/979ff2c82edce9a969444febf1896d866ca154bf

[16]: https://github.com/box/box-typescript-sdk-gen/issues/701

[17]: https://github.com/box/box-typescript-sdk-gen/issues/589

[18]: https://github.com/box/box-typescript-sdk-gen/commit/513a15eb28736d28d665324949d145dd3387d27d

[19]: https://github.com/box/box-typescript-sdk-gen/issues/686

[20]: https://github.com/box/box-typescript-sdk-gen/issues/585

[21]: https://github.com/box/box-typescript-sdk-gen/commit/7232170fe7901cb7ba9ebf79ffc6a7c0b376a1c8

[22]: https://github.com/box/box-typescript-sdk-gen/issues/739

[23]: https://github.com/box/box-typescript-sdk-gen/issues/630

[24]: https://github.com/box/box-typescript-sdk-gen/commit/efdcaaf605fc6f14bbbf171e2797d73e97302bfe

[25]: https://github.com/box/box-typescript-sdk-gen/issues/520

[26]: https://github.com/box/box-typescript-sdk-gen/issues/600

[27]: https://github.com/box/box-typescript-sdk-gen/commit/a5a555f835df5b550b9839e3e1fcff5d9f2b9f96

[28]: https://github.com/box/box-typescript-sdk-gen/issues/518

[29]: https://github.com/box/box-typescript-sdk-gen/issues/588

[30]: https://github.com/box/box-typescript-sdk-gen/commit/dfd3e5f7ecf8a8e49d79ed7df4d7e1f88f3e8537

[31]: https://github.com/box/box-typescript-sdk-gen/issues/528

[32]: https://github.com/box/box-typescript-sdk-gen/issues/622

[33]: https://github.com/box/box-typescript-sdk-gen/commit/be3af441a66da02254d38576bb9ec258142f6d2d

[34]: https://github.com/box/box-typescript-sdk-gen/issues/522

[35]: https://github.com/box/box-typescript-sdk-gen/issues/601

[36]: https://github.com/box/box-typescript-sdk-gen/commit/b060b8c21a13abdfb12988f9c6e6beb014fa104f

[37]: https://github.com/box/box-typescript-sdk-gen/issues/525

[38]: https://github.com/box/box-typescript-sdk-gen/issues/602

[39]: https://github.com/box/box-typescript-sdk-gen/commit/86c5d14bafe8789c306a1688bcf010207c302ca9

[40]: https://github.com/box/box-typescript-sdk-gen/issues/526

[41]: https://github.com/box/box-typescript-sdk-gen/issues/620

[42]: https://github.com/box/box-typescript-sdk-gen/commit/de3df57cc90577a49ea40de278bde423d17c4f06
