---
applied_at: '2025-10-23'
applies_to:
  - sdks
  - swift
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-ios-sdk/releases/tag/6.0.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2025-10-23-box-ios-sdk-600-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2025-10-23-box-java-sdk-v500-released
previous_page_id: 2025-10-21-box-cli-v441-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2025/10-23-box-ios-sdk-600-released.md
published_at: '2025-10-23'
fullyTranslated: true
---
# Box iOS SDK `6.0.0`のリリース

2つのモジュール (手動で管理されているモジュールと生成されたモジュール) を含むBox iOS SDK `v6`の新しいメジャーバージョンを導入しました。共存するこれらのモジュールにより、最新のBox APIの機能をより簡単に使用できるようになるほか、生成されたスタンドアロンのモジュールへの段階的な移行がサポートされます。

### 重大な変更

* Box iOS SDKの`v6`により、`iOS 11.0`、`macOS 10.13`、`tvOS 11.0`、および`watchOS 4.0`のサポートが終了しました。

`v6`以降、サポート対象の最小バージョンは`iOS 13.0`、`macOS 10.15`、`tvOS 13.0`、`watchOS 6.0`になります。

今回の更新により、SDKは現在のAppleの開発基準に準拠するため、BoxSdkGenモジュールで使用可能な新機能を採用するにはこの更新が必要になります。

最新の提出要件およびSDK `toolchain`の要件については、AppleのSDKの最小要件に関する[Apple Developer][1]を参照してください。

`v6`への移行の詳細については、[`v5`から`v6`への移行ガイド][2]を参照してください。

### `v6`の新機能

このSDKバージョンでは、既存の`BoxSDK`モジュールに加え、新しい`BoxSdkGen`モジュールを導入します。これにより、以下を利用できます。

* **APIの全面的なサポート** — Box APIエコシステム全体がカバーされるため、最新機能をすべて利用して、機能豊富なアプリケーションを作成できます。

* **迅速なAPIの更新** — Boxの自動生成による新しいアプローチにより、数日以内にBox APIの追加が可能になり、最新の機能をすぐに利用できるようになります。

* **ドキュメントへの埋め込み** — すべてのオブジェクトおよびパラメータはSDKのソースコードに直接記述され、必要な情報が1か所で保持されます。

* **便利なメソッドの強化** — 認証、分割アップロード、自動再試行、再試行戦略などに対応した新しいメソッド。

### 重要な注意事項

このバージョンにより、ご利用のコードベースを`BoxSdkGen`モジュールに段階的に移行できます。モジュール間の主な違いについては、[モジュールの移行ガイド][3]を参照してください。

最終的には、生成された`BoxSdkGen`モジュールのみを含む`v10`に移行することをお勧めします。`v6`から`v10`に移行するには、こちらの[移行ガイド][4]に従います。

詳細については、[SDKのバージョン戦略に関するドキュメント][5]を参照してください。今後の更新については、開発者向け変更ログをフォローしてください。

[1]: https://developer.apple.com/news/upcoming-requirements/?id=02212025a

[2]: https://github.com/box/box-ios-sdk/blob/combined-sdk/migration-guides/from-v5-to-v6.md

[3]: https://github.com/box/box-ios-sdk/blob/combined-sdk/migration-guides/from-BoxSDK-to-BoxSdkGen.md

[4]: https://github.com/box/box-ios-sdk/blob/combined-sdk/migration-guides/from-v6-to-v10.md

[5]: https://developer.box.com/guides/tooling/sdks/sdk-versioning/
