---
applied_at: '2025-10-23'
applies_to:
  - sdks
  - python
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-python-sdk/releases/tag/v4.0.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2025-10-23-box-python-sdk-v400-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2025-10-23-box-sdks-major-version
previous_page_id: 2025-10-23-box-node-sdk-v400-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2025/10-23-box-python-sdk-v400-released.md
published_at: '2025-10-23'
fullyTranslated: true
---
# Box Python SDK `v4.0.0`のリリース

Introducing a new major version of Box Python SDK `v4` that includes two packages — the manually maintained `boxsdk` package and the generated `box_sdk_gen` package. The coexisting packages provide easier access to the latest Box API features and support gradual migration to the standalone generated package.

### 重大な変更

* `v4` of Box Python SDK supports Python versions: 3.8+. Compared to `v3`, Python 3.6 and 3.7 are no longer supported.

For more information about migrating to `v4` visit [`v3` to `v4` migration guide][1]

### `v4`の新機能

With this SDK version, alongside the existing `boxsdk` package, we’re introducing a new `box_sdk_gen` package, which gives you access to:

* **APIの全面的なサポート** — Box APIエコシステム全体がカバーされるため、最新機能をすべて利用して、機能豊富なアプリケーションを作成できます。

* **迅速なAPIの更新** — Boxの自動生成による新しいアプローチにより、数日以内にBox APIの追加が可能になり、最新の機能をすぐに利用できるようになります。

* **ドキュメントへの埋め込み** — すべてのオブジェクトおよびパラメータはSDKのソースコードに直接記述され、必要な情報が1か所で保持されます。

* **便利なメソッドの強化** — 認証、分割アップロード、自動再試行、再試行戦略などに対応した新しいメソッド。

### 重要な注意事項

This version allows you to gradually migrate your code base to the `box_sdk_gen` package. The key differences between the packages are documented in the [package migration guide][2].

Ultimately, we recommend to migrate to `v10` which includes only the generated `box_sdk_gen` package. To migrate from `v4` to `v10` follow this [migration guide][3].

For more information, see the [SDK versioning strategy document][4]. Follow developer changelog for future updates.

[1]: https://github.com/box/box-python-sdk/blob/combined-sdk/migration-guides/from-v3-to-v4.md

[2]: https://github.com/box/box-python-sdk/blob/combined-sdk/migration-guides/from-boxsdk-to-box_sdk_gen.md

[3]: https://github.com/box/box-python-sdk/blob/combined-sdk/migration-guides/from-v4-to-v10.md

[4]: https://developer.box.com/guides/tooling/sdks/sdk-versioning/
