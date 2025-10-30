---
applied_at: '2025-10-23'
applies_to:
  - sdks
  - dotnet
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-windows-sdk-v2/releases/tag/v6.0.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2025-10-23-box-windows-sdk-v600-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2025-10-23-new-ai-models
previous_page_id: 2025-10-23-box-sdks-major-version
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2025/10-23-box-windows-sdk-v600-released.md
published_at: '2025-10-23'
fullyTranslated: true
---
# Box Windows SDK `v6.0.0`のリリース

2つの`namespaces` (手動で管理されている`namespace`と生成された`namespace`) を含むBox Windows SDK V2 `v6`の新しいメジャーバージョンを導入しました。共存するこれらの`namespaces`により、最新のBox APIの機能をより簡単に使用できるようになるほか、生成されたスタンドアロンの`namespace`への段階的な移行がサポートされます。

### 重大な変更

* Box Windows SDK V2の`v6`により、.NET 6のサポートは終了しました。Boxでは、公式の[.NETのリリースライフサイクル][1]に従います。日本時間2024年11月13日以降、.NET 6は公式サポート対象外となりました。.NET 6でもこのSDKをコンパイルして使用することは可能ですが、そのバージョンで発生した問題についてサポートは提供されません。

`v6`への移行の詳細については、[`v5`から`v6`への移行ガイド][2]を参照してください。

### `v6`の新機能

このSDKバージョンでは、既存の`Box.V2` `namespace`に加え、新しい`Box.Sdk.Gen` `namespace`を導入します。これにより、以下を利用できます。

* **APIの全面的なサポート** — Box APIエコシステム全体がカバーされるため、最新機能をすべて利用して、機能豊富なアプリケーションを作成できます。

* **迅速なAPIの更新** — Boxの自動生成による新しいアプローチにより、数日以内にBox APIの追加が可能になり、最新の機能をすぐに利用できるようになります。

* **ドキュメントへの埋め込み** — すべてのオブジェクトおよびパラメータはSDKのソースコードに直接記述され、必要な情報が1か所で保持されます。

* **便利なメソッドの強化** — 認証、分割アップロード、自動再試行、再試行戦略などに対応した新しいメソッド。

### 重要な注意事項

このバージョンにより、ご利用のコードベースを`Box.Sdk.Gen` `namespace`に段階的に移行できます。`namespaces`間の主な違いについては、[`namespace`の移行ガイド][3]を参照してください。

最終的には、生成された`namespace` `Box.Sdk.Gen`のみを含む`v10`に移行することをお勧めします。`v6`から`v10`に移行するには、こちらの[移行ガイド][4]に従います。

詳細については、[SDKのバージョン戦略に関するドキュメント][5]を参照してください。今後の更新については、開発者向け変更ログをフォローしてください。

[1]: https://dotnet.microsoft.com/en-us/platform/support/policy/dotnet-core

[2]: https://github.com/box/box-windows-sdk-v2/blob/combined-sdk/migration-guides/from-v5-to-v6.md

[3]: https://github.com/box/box-windows-sdk-v2/blob/combined-sdk/migration-guides/from-box-v2-to-box-sdk-gen-namespace.md

[4]: https://github.com/box/box-windows-sdk-v2/blob/combined-sdk/migration-guides/from-v6-to-v10.md

[5]: https://developer.box.com/guides/tooling/sdks/sdk-versioning/
