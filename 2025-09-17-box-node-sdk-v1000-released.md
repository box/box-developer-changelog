---
applied_at: '2025-09-17'
applies_to:
  - sdks
  - typescript
is_impactful: false
is_new_feature: false
release_source_url: 'https://github.com/box/box-node-sdk/releases/tag/v10.0.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2025-09-17-box-node-sdk-v1000-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2025-09-17-box-python-sdk-v1000-released
previous_page_id: 2025-09-17-box-next-generation-sdk-deprecation
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2025/09-17-box-node-sdk-v1000-released.md
published_at: '2025-09-17'
fullyTranslated: true
---
# Box Node SDK `v10.0.0`のリリース

開発者エクスペリエンスを向上させ、Boxコンテンツクラウドとの統合を効率化する、**`Box Node SDK v10`**を導入しました。現在は個別の[`sdk-gen`][1]ブランチとして利用可能な`v10`が、最終的にメインブランチになります。

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
### What’s New Compared to [Typescript SDK Gen][5] `v1.19.1`

#### ⚠ 重大な変更

* Change names of unions (box/box-codegen[#787][6]) ([#938][7]) ([`06a8e9b`][8])
* Remove unused models from schemas (box/box-openapi[#547][9]) ([#933][10]) ([`35690f4`][11]), closes box/box-codegen[#773][12] box/box-openapi[#542][13] box/box-openapi[#544][14] box/box-codegen[#781][15] box/box-openapi[#545][16]
* Remove generated suffix from files (box/box-codegen[#779][17]) ([#948][18]) ([`4bfb073`][19])
* Adjust imports and exports (box/box-codegen[#801][20]) ([#965][21]) ([`d8e6a0a`][22])

#### バグ修正

* Fix serialization for unions (box/box-codegen[#800][23]) ([#954][24]) ([`7f75f6d`][25])

#### 新機能と機能強化

* Add missing webhook events (box/box-openapi[#554][26]) ([#982][27]) ([`2f5e245`][28])
* Support external user deletion API (box/box-codegen[#796][29]) ([#946][30]) ([`44b37a4`][31])

詳細については、`box-typescript-sdk-gen` `v1`から`box-node-sdk` `v10`への[移行ガイド][32]をご確認ください。

[1]: https://github.com/box/box-node-sdk/tree/sdk-gen

[2]: https://github.com/box/box-node-sdk/tree/sdk-gen/docs

[3]: https://github.com/box/box-node-sdk/blob/sdk-gen/docs/migration-guides/from-v3-to-v10.md

[4]: https://developer.box.com/tooling/sdks/sdk-versioning

[5]: https://github.com/box/box-typescript-sdk-gen

[6]: https://github.com/box/box-node-sdk/issues/787

[7]: https://github.com/box/box-node-sdk/issues/938

[8]: https://github.com/box/box-node-sdk/commit/06a8e9bb6de67547dd900b74778c8203aa388a91

[9]: https://github.com/box/box-node-sdk/issues/547

[10]: https://github.com/box/box-node-sdk/issues/933

[11]: https://github.com/box/box-node-sdk/commit/35690f4e4ef7383cae890d4df810ed77168384e1

[12]: https://github.com/box/box-codegen/issues/773

[13]: https://github.com/box/box-openapi/issues/542

[14]: https://github.com/box/box-openapi/issues/544

[15]: https://github.com/box/box-codegen/issues/781

[16]: https://github.com/box/box-openapi/issues/545

[17]: https://github.com/box/box-node-sdk/issues/779

[18]: https://github.com/box/box-node-sdk/issues/948

[19]: https://github.com/box/box-node-sdk/commit/4bfb07350be95a5717ee9be032af4995d1d97395

[20]: https://github.com/box/box-node-sdk/issues/801

[21]: https://github.com/box/box-node-sdk/issues/965

[22]: https://github.com/box/box-node-sdk/commit/d8e6a0a466d367dd6c871bc20534f1b950732997

[23]: https://github.com/box/box-node-sdk/issues/800

[24]: https://github.com/box/box-node-sdk/issues/954

[25]: https://github.com/box/box-node-sdk/commit/7f75f6d6d87f2a9b6d500306fcc0dddf023b7118

[26]: https://github.com/box/box-node-sdk/issues/554

[27]: https://github.com/box/box-node-sdk/issues/982

[28]: https://github.com/box/box-node-sdk/commit/2f5e24574dbaff7d23140a2a5c22e54b1f047bf6

[29]: https://github.com/box/box-node-sdk/issues/796

[30]: https://github.com/box/box-node-sdk/issues/946

[31]: https://github.com/box/box-node-sdk/commit/44b37a49ddbf587575f005342c9457cc46b5a573

[32]: https://github.com/box/box-node-sdk/blob/sdk-gen/docs/migration-guides/from-box-typescript-sdk-gen-v1-to-box-node-sdk-v10.md
