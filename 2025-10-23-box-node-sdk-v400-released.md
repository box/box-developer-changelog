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

Introducing a new major version of Box Node SDK `v4` that includes two modules — the manually maintained module and the generated module. The coexisting modules provide easier access to the latest Box API features and support gradual migration to the standalone generated module.

### 重大な変更

* With `v4` of Box Node SDK, support for Node version below 18 has been dropped. While it may still be possible to download and use this SDK under Node below 18, we do not provide support for issues encountered on that version.

* We have updated the module export style in the manually maintained `box-node-sdk` module to support the ES module and be more consistent with the generated `sdk-gen` module. Classes in the manual SDK are now exported as default exports from their respective files. When importing with `CommonJS` (`require`), use `.default` to access the class (e.g., `const BoxSDK = require('box-node-sdk').default;`).

For more information about migrating to `v4` visit [`v3` to `v4` migration guide][1]

### `v4`の新機能

With this SDK version, alongside the existing manually maintained module, we’re introducing a new generated `sdk-gen` module under `box-node-sdk/sdk-gen` import path, which gives you access to:

* **APIの全面的なサポート** — Box APIエコシステム全体がカバーされるため、最新機能をすべて利用して、機能豊富なアプリケーションを作成できます。

* **迅速なAPIの更新** — Boxの自動生成による新しいアプローチにより、数日以内にBox APIの追加が可能になり、最新の機能をすぐに利用できるようになります。

* **ドキュメントへの埋め込み** — すべてのオブジェクトおよびパラメータはSDKのソースコードに直接記述され、必要な情報が1か所で保持されます。

* **便利なメソッドの強化** — 認証、分割アップロード、自動再試行、再試行戦略などに対応した新しいメソッド。

### 重要な注意事項

This version allows you to gradually migrate your code base to the `sdk-gen` module. The key differences between the modules are documented in the [module migration guide][2].

Ultimately, we recommend to migrate to `v10` which includes only the generated `sdk-gen` module. To migrate from `v4` to `v10` follow this [migration guide][3].

For more information, see the [SDK versioning strategy document][4]. Follow developer changelog for future updates.

[1]: https://github.com/box/box-node-sdk/blob/combined-sdk/migration-guides/from-v3-to-v4.md

[2]: https://github.com/box/box-node-sdk/blob/combined-sdk/migration-guides/from-box-node-sdk-to-sdk-gen.md

[3]: https://github.com/box/box-node-sdk/blob/combined-sdk/migration-guides/from-v4-to-v10.md

[4]: https://developer.box.com/guides/tooling/sdks/sdk-versioning/
