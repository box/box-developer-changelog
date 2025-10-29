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

Introducing a new major version of Box iOS SDK `v6` that includes two modules — the manually maintained module and the generated module. The coexisting modules provide easier access to the latest Box API features and support gradual migration to the standalone generated module.

### 重大な変更

* With `v6` of Box iOS SDK, support for `iOS 11.0`, `macOS 10.13`, `tvOS 11.0` and `watchOS 4.0` has been dropped.

Starting with `v6`, the minimum supported versions are `iOS 13.0`, `macOS 10.15`, `tvOS 13.0`, and `watchOS 6.0`.

This update aligns the SDK with current Apple development standards and is required to adopt the new features available in the BoxSdkGen module.

For the latest submission and SDK `toolchain` requirements, see Apple’s SDK minimum requirements [Apple Developer][1].

For more information about migrating to `v6` visit [`v5` to `v6` migration guide][2].

### `v6`の新機能

With this SDK version, alongside the existing `BoxSDK` module, we’re introducing a new `BoxSdkGen` module, which gives you access to:

* **APIの全面的なサポート** — Box APIエコシステム全体がカバーされるため、最新機能をすべて利用して、機能豊富なアプリケーションを作成できます。

* **迅速なAPIの更新** — Boxの自動生成による新しいアプローチにより、数日以内にBox APIの追加が可能になり、最新の機能をすぐに利用できるようになります。

* **ドキュメントへの埋め込み** — すべてのオブジェクトおよびパラメータはSDKのソースコードに直接記述され、必要な情報が1か所で保持されます。

* **便利なメソッドの強化** — 認証、分割アップロード、自動再試行、再試行戦略などに対応した新しいメソッド。

### 重要な注意事項

This version allows you to gradually migrate your code base to the `BoxSdkGen` module. The key differences between the modules are documented in the [module migration guide][3].

Ultimately, we recommend to migrate to `v10` which includes only the generated module `BoxSdkGen`. To migrate from `v6` to `v10` follow this [migration guide][4].

For more information, see the [SDK versioning strategy document][5]. Follow developer changelog for future updates.

[1]: https://developer.apple.com/news/upcoming-requirements/?id=02212025a

[2]: https://github.com/box/box-ios-sdk/blob/combined-sdk/migration-guides/from-v5-to-v6.md

[3]: https://github.com/box/box-ios-sdk/blob/combined-sdk/migration-guides/from-BoxSDK-to-BoxSdkGen.md

[4]: https://github.com/box/box-ios-sdk/blob/combined-sdk/migration-guides/from-v6-to-v10.md

[5]: https://developer.box.com/guides/tooling/sdks/sdk-versioning/
