---
applied_at: '2025-09-17'
applies_to:
  - sdks
  - java
is_impactful: false
is_new_feature: false
release_source_url: 'https://github.com/box/box-java-sdk/releases/tag/v10.0.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2025-09-17-box-java-sdk-v1000-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2025-09-17-box-next-generation-sdk-deprecation
previous_page_id: 2025-09-17-box-ios-sdk-1000-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2025/09-17-box-java-sdk-v1000-released.md
published_at: '2025-09-17'
fullyTranslated: true
---
# Box Java SDK `v10.0.0`のリリース

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
### 新機能 ([Java SDK Gen][5] `v0.8.1`との比較)

<!--alex ignore -->

#### ⚠ 重大な変更

* 共用体の名前を変更 (box/box-codegen[#787][6]) ([#1359][7]) ([`114e778`][8])
* スキーマから未使用のモデルを削除 (box/box-openapi[#547][9]) ([#1354][10]) ([`e031308`][11])、[box/`box-openapi#542`][12] [box/`box-openapi#544`][13] [box/`box-codegen#781`][14] [box/`box-openapi#545`][15] [`box/box-codegen#782`][16]をクローズ
* `Date`を`OffsetDateTime`に置き換え (box/box-codegen[#826][17]) ([#1419][18]) ([`ed04407`][19])

#### 新機能と機能強化

* プロキシのサポートを追加 (box/box-codegen[#830][20]) ([#1424][21]) ([`cc53247`][22])

詳細については、`box-java-sdk-gen` `v0`から`box-java-sdk` `v10`への[移行ガイド][23]をご確認ください。

[1]: https://github.com/box/box-java-sdk/tree/sdk-gen

[2]: https://github.com/box/box-java-sdk/tree/sdk-gen/docs

[3]: https://github.com/box/box-java-sdk/blob/sdk-gen/migration-guides/from-v4-to-v10.md

[4]: g://tooling/sdks/sdk-versioning

[5]: https://github.com/box/box-java-sdk-gen

[6]: https://github.com/box/box-java-sdk/issues/787

[7]: https://github.com/box/box-java-sdk/issues/1359

[8]: https://github.com/box/box-java-sdk/commit/114e7785031e19fb58933f231e656a991b5effb7

[9]: https://github.com/box/box-java-sdk/issues/547

[10]: https://github.com/box/box-java-sdk/issues/1354

[11]: https://github.com/box/box-java-sdk/commit/e031308f102137351238bf3823372150d3927442

[12]: https://github.com/box/box-openapi/issues/542

[13]: https://github.com/box/box-openapi/issues/544

[14]: https://github.com/box/box-codegen/issues/781

[15]: https://github.com/box/box-openapi/issues/545

[16]: https://github.com/box/box-codegen/issues/782

[17]: https://github.com/box/box-java-sdk/issues/826

[18]: https://github.com/box/box-java-sdk/issues/1419

[19]: https://github.com/box/box-java-sdk/commit/ed04407e8effa8811bc85023783097f8a95e5223

[20]: https://github.com/box/box-java-sdk/issues/830

[21]: https://github.com/box/box-java-sdk/issues/1424

[22]: https://github.com/box/box-java-sdk/commit/cc532475cdaf5ec3fd710149b41a6e7b04dcd32f

[23]: https://github.com/box/box-java-sdk/blob/sdk-gen/migration-guides/from-box-java-sdk-gen-v0-to-box-java-sdk-v10.md
