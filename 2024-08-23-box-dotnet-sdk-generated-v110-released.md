---
applied_at: '2024-08-23'
applies_to:
  - sdks
  - dotnet
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-dotnet-sdk-gen/releases/tag/v1.1.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2024-08-23-box-dotnet-sdk-generated-v110-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2024-08-23-box-python-sdk-generated-v140-released
previous_page_id: 2024-08-22-box-swift-sdk-generated-031-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2024/08-23-box-dotnet-sdk-generated-v110-released.md
published_at: '2024-08-23'
fullyTranslated: true
---
# Box Dotnet SDK Generated `v1.1.0`のリリース

### バグ修正

* 欠落していた`item_upload`スコープを追加 ([#201][1]) ([`483b055`][2])
* Signテンプレートの署名者に不足していたフィールドを追加し、AIスキーマを修正 (box/box-openapi[#451][3]) ([#229][4]) ([`121f733`][5])
* `IntegrationMapping`スキーマを修正 (box/box-codegen[#551][6]) ([#226][7]) ([`3eca154`][8])
* ネットワークの例外の処理を改善し、大きなファイルのアップロードを処理 (box/box-openapi[#444][9]) ([#222][10]) ([`75ccd07`][11])

### 新機能と機能強化

* Box AIのメソッドに新しいパラメータを追加し、`AiResponseFull`バリアントを導入 (box/box-openapi[#446][12]) ([#224][13]) ([`6d205c4`][14])
* `FetchOptions`にURLを追加 (box/box-codegen[#549][15]) ([#231][16]) ([`41c45dc`][17])
* 分割アップロードのエンドポイントURLをパラメータ化 (box/box-openapi[#444][9]) ([#208][18]) ([`feac37c`][19])
* `nullable`フィールドをサポート (box/box-codegen[#550][20]) ([#230][21]) ([`b9da32b`][22])

[1]: https://github.com/box/box-codegen/issues/201

[2]: https://github.com/box/box-codegen/commit/483b05586f8e45771e101d286fddebc564ff89bd

[3]: https://github.com/box/box-codegen/issues/451

[4]: https://github.com/box/box-codegen/issues/229

[5]: https://github.com/box/box-codegen/commit/121f733f52e945927125f4941206b1553202914d

[6]: https://github.com/box/box-codegen/issues/551

[7]: https://github.com/box/box-codegen/issues/226

[8]: https://github.com/box/box-codegen/commit/3eca15434b65bc0bb2421d36ec50691e7fe40e3b

[9]: https://github.com/box/box-codegen/issues/444

[10]: https://github.com/box/box-codegen/issues/222

[11]: https://github.com/box/box-codegen/commit/75ccd078e29015b865462ea1aaf0420d5e63d9cd

[12]: https://github.com/box/box-codegen/issues/446

[13]: https://github.com/box/box-codegen/issues/224

[14]: https://github.com/box/box-codegen/commit/6d205c4e28a657ad65ae704a7343a8670806f7f1

[15]: https://github.com/box/box-codegen/issues/549

[16]: https://github.com/box/box-codegen/issues/231

[17]: https://github.com/box/box-codegen/commit/41c45dcf6476b6cae7941c0952c375aa76ce42a1

[18]: https://github.com/box/box-codegen/issues/208

[19]: https://github.com/box/box-codegen/commit/feac37c34f99b5951731b605ef895f7f3b5de6dd

[20]: https://github.com/box/box-codegen/issues/550

[21]: https://github.com/box/box-codegen/issues/230

[22]: https://github.com/box/box-codegen/commit/b9da32b27f506618faa0119f725528555be14f60
