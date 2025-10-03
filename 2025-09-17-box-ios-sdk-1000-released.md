---
applied_at: '2025-09-17'
applies_to:
  - sdks
  - swift
is_impactful: false
is_new_feature: false
release_source_url: 'https://github.com/box/box-ios-sdk/releases/tag/10.0.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2025-09-17-box-ios-sdk-1000-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2025-09-17-box-java-sdk-v1000-released
previous_page_id: 2025-09-16-box-typescript-sdk-generated-v1191-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2025/09-17-box-ios-sdk-1000-released.md
published_at: '2025-09-17'
fullyTranslated: true
---
# Box iOS SDK `10.0.0`のリリース

開発者エクスペリエンスを向上させ、Boxコンテンツクラウドとの統合を効率化する、**`Box iOS SDK v10`**を導入しました。現在は個別の[`sdk-gen`][1]ブランチとして利用可能な`v10`が、最終的にメインブランチになります。

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
### 新機能 ([Box Swift SDK Gen][5] `v0.6.3`との比較)

### 新機能と機能強化

* 外部ユーザー削除APIを追加 (box/box-codegen[#550][6]) ([`74571fb`][7])
* 不足していたWebhookイベントを追加 (box/box-openapi[#554][8]) ([#1048][9]) ([`b8bf1ad`][10])
* Swiftのネットワークエラーに対するリクエストを再試行 (box/box-codegen[#820][11]) ([#1051][12]) ([`ba21450`][13])

詳細については、`box-swift-sdk-gen` `v0`から`box-ios-sdk` `v10`への[移行ガイド][14]をご確認ください。

[1]: https://github.com/box/box-ios-sdk/tree/sdk-gen

[2]: https://github.com/box/box-ios-sdk/tree/sdk-gen/docs

[3]: https://github.com/box/box-ios-sdk/blob/sdk-gen/migration-guides/from-v5-to-v10.md

[4]: https://developer.box.com/tooling/sdks/sdk-versioning

[5]: https://github.com/box/box-swift-sdk-gen

[6]: https://github.com/box/box-ios-sdk/issues/969

[7]: https://github.com/box/box-ios-sdk/commit/74571fb6675d0ff90d0ec4ef2baf7113816093f8

[8]: https://github.com/box/box-ios-sdk/issues/554

[9]: https://github.com/box/box-ios-sdk/issues/1048

[10]: https://github.com/box/box-ios-sdk/commit/b8bf1add360119f70a626f663cd810f9598ec794

[11]: https://github.com/box/box-ios-sdk/issues/820

[12]: https://github.com/box/box-ios-sdk/issues/1051

[13]: https://github.com/box/box-ios-sdk/commit/ba214507b37d2a842bcf044b5b4392b442486d6f

[14]: https://github.com/box/box-ios-sdk/blob/sdk-gen/migration-guides/from-box-swift-sdk-gen-v0-to-box-ios-sdk-v10.md
