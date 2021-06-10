---
applied_at: '2018-03-29'
applies_to:
  - api
is_impactful: false
is_new_feature: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2018-03-29-multiselect-field-type-added-to-metadata-templates
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2018-04-10-java-sdk-v2170-release
previous_page_id: 2018-03-29-java-sdk-v2161-release
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2018/03-29-multiselect-field-type-added-to-metadata-templates.md
published_at: '2018-03-29'
fullyTranslated: true
---
# メタデータテンプレートに`multiSelect`フィールドタイプを追加

[メタデータテンプレート](endpoint://resources/metadata-template/)に`multiSelect`と呼ばれる新しい属性タイプが導入されました。これは複数選択に変換されます。この新しい属性タイプにより、Adobe Sign、G Suite、またはフォルダでファイルコンテンツのテンプレートインスタンスを作成する際、チェックボックススタイルの値の複数選択が可能になります。

このフィールドの追加により[メタデータオブジェクト](endpoint://resources/metadata-template/)(テンプレートインスタンス)が変更されます。これは、有効化されている`multiSelect`オプションが文字列値の配列を使用して表され、配列内の各文字列が`multiSelect`オプションのキーに対応しているためです。
