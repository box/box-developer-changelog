---
applied_at: '2025-12-19'
applies_to:
  - sdks
  - node
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-node-sdk/releases/tag/v4.3.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2025-12-19-box-node-sdk-v430-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2025-12-19-box-python-sdk-v1030-released
previous_page_id: 2025-12-19-box-node-sdk-v1030-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2025/12-19-box-node-sdk-v430-released.md
published_at: '2025-12-19'
fullyTranslated: true
---
# Box Node SDK `v4.3.0`のリリース

### バグ修正

* **boxsdkgen:** メタデータフィールド (読み取り) の定義にメタデータ階層を追加 (box/box-openapi[#572][1]) ([#1274][2]) ([`3850e6b`][3])
* **boxsdkgen:** `Retry-After`ヘッダーがない場合の`RetryAfter`関数を修正 (box/box-codegen[#903][4]) ([#1250][5]) ([`cd917ee`][6])

### 新機能と機能強化

* **boxsdkgen:** メタデータ階層APIを追加 (box/box-openapi[#569][7]) ([#1256][8]) ([`12d8c9f`][9])
* **boxsdkgen:** Box Signのテキスト入力の検証 (box/box-openapi[#568][10]) ([#1253][11]) ([`5d4f8bf`][12])
* **boxsdkgen:** `nullable`フィールドを省略可として処理 (box/box-codegen[#906][13]) ([#1259][14]) ([`50d7080`][15])
* 従来のSDKとsdk-genで認証とネットワークの設定を再利用 ([#1242][16]) ([`320c35e`][17])

[1]: https://github.com/box/box-node-sdk/issues/572

[2]: https://github.com/box/box-node-sdk/issues/1274

[3]: https://github.com/box/box-node-sdk/commit/3850e6bf164d1a8778258afb54342833366a0b03

[4]: https://github.com/box/box-node-sdk/issues/903

[5]: https://github.com/box/box-node-sdk/issues/1250

[6]: https://github.com/box/box-node-sdk/commit/cd917eec7f785627952cebc32313ec192ade982f

[7]: https://github.com/box/box-node-sdk/issues/569

[8]: https://github.com/box/box-node-sdk/issues/1256

[9]: https://github.com/box/box-node-sdk/commit/12d8c9f5a9748f871b1ca492b3acd388d103039f

[10]: https://github.com/box/box-node-sdk/issues/568

[11]: https://github.com/box/box-node-sdk/issues/1253

[12]: https://github.com/box/box-node-sdk/commit/5d4f8bf8ea3ca433c18150a0d4b474ec85ddc0ef

[13]: https://github.com/box/box-node-sdk/issues/906

[14]: https://github.com/box/box-node-sdk/issues/1259

[15]: https://github.com/box/box-node-sdk/commit/50d70806c4e40ed56b2f8cfea5f5bcec7ec56159

[16]: https://github.com/box/box-node-sdk/issues/1242

[17]: https://github.com/box/box-node-sdk/commit/320c35e8d4add6407cebc0d43bb7522fa980e9cf
