---
applied_at: '2025-09-17'
applies_to:
  - sdks
  - python
is_impactful: false
is_new_feature: false
release_source_url: 'https://github.com/box/box-python-sdk/releases/tag/v10.0.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2025-09-17-box-python-sdk-v1000-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2025-09-17-box-sdk-v10
previous_page_id: 2025-09-17-box-next-generation-sdk-deprecation
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2025/09-17-box-python-sdk-v1000-released.md
published_at: '2025-09-17'
fullyTranslated: true
---
# Box Python SDK `v10.0.0`のリリース

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
### 新機能 ([Python SDK Gen][5] `v1.17.0`との比較)

#### 新機能と機能強化

* 外部ユーザー削除APIを追加 (box/box-openapi[#550][6]) ([#941][7]) ([`a80ad85`][8])

* 不足していたWebhookイベントを追加 (box/box-openapi[#554][9]) ([#988][10]) ([`575ce0b`][11])

* 共用体の名前を変更 (box/box-codegen[#789][12]) ([#939][13]) ([`cf2b1d5`][14])

* スキーマから未使用のモデルを削除 (box/box-openapi[#547][15]) ([#932][16]) ([`6ef6d63`][17])、box/box-openapi[#542][18]、box/box-openapi[#544][19]、box/box-codegen[#781][20]、box/box-openapi[#545][21]をクローズ

詳細については、`box-python-sdk-gen` `v1`から`box-python-sdk` `v10`への[移行ガイド][22]をご確認ください。

[1]: https://github.com/box/box-python-sdk/tree/sdk-gen

[2]: https://github.com/box/box-python-sdk/tree/sdk-gen/docs

[3]: https://github.com/box/box-python-sdk/blob/sdk-gen/migration-guides/from-v3-to-v10.md

[4]: hg://tooling/sdks/sdk-versioning

[5]: https://github.com/box/box-python-sdk-gen

[6]: https://github.com/box/box-python-sdk/issues/550

[7]: https://github.com/box/box-python-sdk/issues/941

[8]: https://github.com/box/box-python-sdk/commit/a80ad856b3193e54272e04f01ddb025b2d9f781f

[9]: https://github.com/box/box-python-sdk/issues/554

[10]: https://github.com/box/box-python-sdk/issues/988

[11]: https://github.com/box/box-python-sdk/commit/575ce0b6d48f90db90349244414e98afe5fcbb9f

[12]: https://github.com/box/box-python-sdk/issues/789

[13]: https://github.com/box/box-python-sdk/issues/939

[14]: https://github.com/box/box-python-sdk/commit/cf2b1d5b12be0ff2453867b7d3502437283bf695

[15]: https://github.com/box/box-python-sdk/issues/547

[16]: https://github.com/box/box-python-sdk/issues/932

[17]: https://github.com/box/box-python-sdk/commit/6ef6d63c37e6eccc3489a9076e0a0b0940a6e0d6

[18]: https://github.com/box/box-openapi/issues/542

[19]: https://github.com/box/box-openapi/issues/544

[20]: https://github.com/box/box-codegen/issues/781

[21]: https://github.com/box/box-openapi/issues/545

[22]: https://github.com/box/box-python-sdk/blob/sdk-gen/migration-guides/from-box-python-sdk-gen-v1-to-box-python-sdk-v10.md
