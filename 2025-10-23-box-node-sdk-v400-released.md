---
applied_at: '2025-10-23'
applies_to:
  - sdks
  - node
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-node-sdk/releases/tag/v4.0.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2025-10-23-box-node-sdk-v400-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2025-10-23-box-python-sdk-v400-released
previous_page_id: 2025-10-23-box-java-sdk-v500-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2025/10-23-box-node-sdk-v400-released.md
published_at: '2025-10-23'
fullyTranslated: true
---
# Box Node SDK `v4.0.0`のリリース

2つのモジュール (手動で管理されているモジュールと生成されたモジュール) を含むBox Node SDK `v4`の新しいメジャーバージョンを導入しました。共存するこれらのモジュールにより、最新のBox APIの機能をより簡単に使用できるようになるほか、生成されたスタンドアロンのモジュールへの段階的な移行がサポートされます。

### 重大な変更

* Box Node SDKの`v4`により、バージョン18未満のNodeのサポートが終了しました。18未満のNodeでもこのSDKをダウンロードして使用することは可能ですが、そのバージョンで発生した問題についてサポートは提供されません。

* ESモジュールをサポートし、生成された`sdk-gen`モジュールとの一貫性を高めるために、手動で管理されている`box-node-sdk`モジュールでモジュールのエクスポートスタイルを更新しました。手動のSDKのクラスは、現在、個々のファイルからデフォルトのエクスポートとしてエクスポートされるようになりました。`CommonJS` (`require`) を使用してインポートする際は、`.default`を使用してクラス (例: `const BoxSDK = require('box-node-sdk').default;`) にアクセスしてください。

`v4`への移行の詳細については、[`v3`から`v4`への移行ガイド][1]を参照してください。

### `v4`の新機能

このSDKバージョンでは、既存の手動で管理されているモジュールに加え、インポートパス`box-node-sdk/sdk-gen`で新しく生成された`sdk-gen`モジュールを導入します。これにより、以下を利用できます。

* **APIの全面的なサポート** — Box APIエコシステム全体がカバーされるため、最新機能をすべて利用して、機能豊富なアプリケーションを作成できます。

* **迅速なAPIの更新** — Boxの自動生成による新しいアプローチにより、数日以内にBox APIの追加が可能になり、最新の機能をすぐに利用できるようになります。

* **ドキュメントへの埋め込み** — すべてのオブジェクトおよびパラメータはSDKのソースコードに直接記述され、必要な情報が1か所で保持されます。

* **便利なメソッドの強化** — 認証、分割アップロード、自動再試行、再試行戦略などに対応した新しいメソッド。

### 重要な注意事項

このバージョンにより、ご利用のコードベースを`sdk-gen`モジュールに段階的に移行できます。モジュール間の主な違いについては、[モジュールの移行ガイド][2]を参照してください。

最終的には、生成された`sdk-gen`モジュールのみを含む`v10`に移行することをお勧めします。`v4`から`v10`に移行するには、こちらの[移行ガイド][3]に従います。

詳細については、[SDKのバージョン戦略に関するドキュメント][4]を参照してください。今後の更新については、開発者向け変更ログをフォローしてください。

[1]: https://github.com/box/box-node-sdk/blob/combined-sdk/migration-guides/from-v3-to-v4.md

[2]: https://github.com/box/box-node-sdk/blob/combined-sdk/migration-guides/from-box-node-sdk-to-sdk-gen.md

[3]: https://github.com/box/box-node-sdk/blob/combined-sdk/migration-guides/from-v4-to-v10.md

[4]: https://developer.box.com/guides/tooling/sdks/sdk-versioning/
