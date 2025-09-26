---
applied_at: '2025-09-17'
applies_to:
  - sdks
  - dotnet
is_impactful: false
is_new_feature: false
release_source_url: 'https://github.com/box/box-windows-sdk-v2/releases/tag/v10.0.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2025-09-17-box-windows-sdk-v1000-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2025-09-24-metadata-view-enhancements
previous_page_id: 2025-09-17-box-sdk-v10
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2025/09-17-box-windows-sdk-v1000-released.md
published_at: '2025-09-17'
fullyTranslated: true
---
# Box Windows SDK `v10.0.0`のリリース

開発者エクスペリエンスを向上させ、Boxコンテンツクラウドとの統合を効率化する、**`Box SDK v10`**を導入しました。現在は個別の[`sdk-gen`][1]ブランチとして利用可能な`v10`が、最終的にメインブランチになります。

### 重大な変更

* このSDKのバージョンは、自動生成されており、すべてのメソッドに新しいインターフェースを導入しています。詳細なドキュメントについては、[こちら][2]を参照してください。

### `v10`の新機能

* **APIの全面的なサポート** — Box APIエコシステム全体がカバーされるため、最新機能をすべて利用して、機能豊富なアプリケーションを作成できます。

* **迅速なAPIの更新** — Boxの自動生成による新しいアプローチにより、数日以内にBox APIの追加が可能になり、最新の機能をすぐに利用できるようになります。

* **ドキュメントへの埋め込み** — すべてのオブジェクトおよびパラメータはSDKのソースコードに直接記述され、必要な情報が1か所で保持されます。

* **便利なメソッドの強化** — 認証、分割アップロード、自動再試行、再試行戦略などに対応した新しいメソッド。

### 重要な注意事項

このバージョンには、BoxのコアSDKと並行して以前に開発された、Boxの次世代SDKのアーティファクトが含まれています。Boxでは、移行を促進し、最新の機能を利用できるようにするため、まもなく、両方のアーティファクトを兼ね備えたメジャーバージョンを追加でリリースする予定です。`v10`への移行には重大な変更が含まれるため、詳細については[移行ガイド][3]を確認してください。詳細については、[SDKのバージョン戦略に関するドキュメント][4]を参照してください。今後の更新については、開発者向け変更ログをフォローしてください。
---
### 新機能 ([Dotnet SDK Gen][5] `v1.12.0`との比較)

#### ⚠ 重大な変更

* 共用体の名前を変更 (box/box-openapi[#549][6]) ([#1007][7]) ([`fcef4ec`][8])
* スキーマから未使用のモデルを削除 (box/box-openapi[#547][9]) ([#999][10]) ([`ffcb488`][11])

#### バグ修正

* `net462`のデバッグビルドを修正 ([#1020][12]) ([`04f8343`][13])
* 外部ユーザー削除メソッドの名前を変更 (box/box-codegen[#796][14]) ([#1024][15]) ([`13928c5`][16])

#### 新機能と機能強化

* 外部ユーザー削除APIを追加 (box/box-openapi[#550][17]) ([#1009][18]) ([`2178bc8`][19])
* 不足していたWebhookイベントを追加 (box/box-openapi[#554][20]) ([#1068][21]) ([`7fe3b99`][22])
* `v10`用に.Net Framework 4.6.2のサポートを追加 (box/box-codegen[#773][23]) ([#986][24]) ([`67366c7`][25])
* `jwt`のカスタム復号メカニズムの挿入を許可 ([#974][26]) ([`b877355`][27])

詳細については、`box-dotnet-sdk-gen` `v1`から`box-windows-sdk-v2` `v10`への[移行ガイド][28]をご確認ください。

[1]: https://github.com/box/box-windows-sdk-v2/tree/sdk-gen

[2]: https://github.com/box/box-windows-sdk-v2/tree/sdk-gen/docs

[3]: https://github.com/box/box-windows-sdk-v2/blob/sdk-gen/migration-guides/from-v5-to-v10.md

[4]: https://developer.box.com/guides/tooling/sdks/sdk-versioning/

[5]: https://github.com/box/box-dotnet-sdk-gen

[6]: https://github.com/box/box-windows-sdk-v2/issues/549

[7]: https://github.com/box/box-windows-sdk-v2/issues/1007

[8]: https://github.com/box/box-windows-sdk-v2/commit/fcef4ecab38435fb4a79e2db8fcf2c5ad931986b

[9]: https://github.com/box/box-windows-sdk-v2/issues/547

[10]: https://github.com/box/box-windows-sdk-v2/issues/999

[11]: https://github.com/box/box-windows-sdk-v2/commit/ffcb4888e6ad52f10028f92c49b5d919cb1ac620

[12]: https://github.com/box/box-windows-sdk-v2/issues/1020

[13]: https://github.com/box/box-windows-sdk-v2/commit/04f8343c200e45ebe65bd29f03f55a44e76bcbde

[14]: https://github.com/box/box-windows-sdk-v2/issues/796

[15]: https://github.com/box/box-windows-sdk-v2/issues/1024

[16]: https://github.com/box/box-windows-sdk-v2/commit/13928c559bd3e97d060c48997b05ca384333d03d

[17]: https://github.com/box/box-windows-sdk-v2/issues/550

[18]: https://github.com/box/box-windows-sdk-v2/issues/1009

[19]: https://github.com/box/box-windows-sdk-v2/commit/2178bc87c8b724598616e99f0a528c7b21ff12c6

[20]: https://github.com/box/box-windows-sdk-v2/issues/554

[21]: https://github.com/box/box-windows-sdk-v2/issues/1068

[22]: https://github.com/box/box-windows-sdk-v2/commit/7fe3b99cae1cf5be9ad3ec7bec54c97f198fd8c7

[23]: https://github.com/box/box-windows-sdk-v2/issues/773

[24]: https://github.com/box/box-windows-sdk-v2/issues/986

[25]: https://github.com/box/box-windows-sdk-v2/commit/67366c7274faa5c758490d393605c76220aa6a79

[26]: https://github.com/box/box-windows-sdk-v2/issues/974

[27]: https://github.com/box/box-windows-sdk-v2/commit/b877355493b60dc6f9c1a576927d6e0c62ec27f3

[28]: https://github.com/box/box-windows-sdk-v2/blob/sdk-gen/migration-guides/from-dotnet-sdk-gen-v1-to-box-windows-sdk-v10.md
