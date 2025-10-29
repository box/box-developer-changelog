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

Introducing a new major version of Box Java SDK `v5` that includes two packages — the manually maintained `com.box.sdk` package and the generated `com.box.sdkgen` package. The coexisting packages provide easier access to the latest Box API features and support gradual migration to the standalone generated package.

There are no breaking changes between `v4` and `v5` of Box Java SDK. For more information about migrating to `v5` visit [`v4` to `v5` migration guide][1]

### `v5`の新機能

With this SDK version, alongside the existing `com.box.sdk` package, we’re introducing a new `com.box.sdkgen` package, which gives you access to:

* **APIの全面的なサポート** — Box APIエコシステム全体がカバーされるため、最新機能をすべて利用して、機能豊富なアプリケーションを作成できます。

* **迅速なAPIの更新** — Boxの自動生成による新しいアプローチにより、数日以内にBox APIの追加が可能になり、最新の機能をすぐに利用できるようになります。

* **ドキュメントへの埋め込み** — すべてのオブジェクトおよびパラメータはSDKのソースコードに直接記述され、必要な情報が1か所で保持されます。

* **便利なメソッドの強化** — 認証、分割アップロード、自動再試行、再試行戦略などに対応した新しいメソッド。

### 重要な注意事項

This version allows you to gradually migrate your code base to the `com.box.sdkgen` package. The key differences between the packages are documented in the [package migration guide][2].

Ultimately, we recommend to migrate to `v10` which includes only the generated `com.box.sdkgen` package. To migrate from `v5` to `v10` follow this [migration guide][3].

For more information, see the [SDK versioning strategy document][4]. Follow developer changelog for future updates.

[1]: https://github.com/box/box-java-sdk/blob/combined-sdk/migration-guides/from-v4-to-v5.md

[2]: https://github.com/box/box-java-sdk/blob/combined-sdk/migration-guides/from-com-box-sdk-to-com-box-sdkgen.md

[3]: https://github.com/box/box-java-sdk/blob/combined-sdk/migration-guides/from-v5-to-v10.md

[4]: https://developer.box.com/guides/tooling/sdks/sdk-versioning/
