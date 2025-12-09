---
applied_at: '2025-10-23'
applies_to:
  - sdks
  - java
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-java-sdk/releases/tag/v5.0.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2025-10-23-box-java-sdk-v500-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2025-10-23-box-node-sdk-v400-released
previous_page_id: 2025-10-23-box-ios-sdk-600-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2025/10-23-box-java-sdk-v500-released.md
published_at: '2025-10-23'
fullyTranslated: true
---
# Box Java SDK `v5.0.0`のリリース

2つのパッケージ (手動で管理されている`com.box.sdk`パッケージと生成された`com.box.sdkgen`パッケージ) を含むBox Java SDK `v5`の新しいメジャーバージョンを導入しました。共存するこれらのパッケージにより、最新のBox APIの機能をより簡単に使用できるようになるほか、生成されたスタンドアロンのパッケージへの段階的な移行がサポートされます。

Box Java SDKの`v4`と`v5`の間には重大な変更はありません。`v5`への移行の詳細については、[`v4`から`v5`への移行ガイド][1]を参照してください。

### `v5`の新機能

このSDKバージョンでは、既存の`com.box.sdk`パッケージに加え、新しい`com.box.sdkgen`パッケージを導入します。これにより、以下を利用できます。

* **APIの全面的なサポート** — Box APIエコシステム全体がカバーされるため、最新機能をすべて利用して、機能豊富なアプリケーションを作成できます。

* **迅速なAPIの更新** — Boxの自動生成による新しいアプローチにより、数日以内にBox APIの追加が可能になり、最新の機能をすぐに利用できるようになります。

* **ドキュメントへの埋め込み** — すべてのオブジェクトおよびパラメータはSDKのソースコードに直接記述され、必要な情報が1か所で保持されます。

* **便利なメソッドの強化** — 認証、分割アップロード、自動再試行、再試行戦略などに対応した新しいメソッド。

### 重要な注意事項

このバージョンにより、ご利用のコードベースを`com.box.sdkgen`パッケージに段階的に移行できます。パッケージ間の主な違いについては、[パッケージの移行ガイド][2]を参照してください。

最終的には、生成された`com.box.sdkgen`パッケージのみを含む`v10`に移行することをお勧めします。`v5`から`v10`に移行するには、こちらの[移行ガイド][3]に従います。

詳細については、[SDKのバージョン戦略に関するドキュメント][4]を参照してください。今後の更新については、開発者向け変更ログをフォローしてください。

[1]: https://github.com/box/box-java-sdk/blob/combined-sdk/migration-guides/from-v4-to-v5.md

[2]: https://github.com/box/box-java-sdk/blob/combined-sdk/migration-guides/from-com-box-sdk-to-com-box-sdkgen.md

[3]: https://github.com/box/box-java-sdk/blob/combined-sdk/migration-guides/from-v5-to-v10.md

[4]: g://tooling/sdks/sdk-versioning
