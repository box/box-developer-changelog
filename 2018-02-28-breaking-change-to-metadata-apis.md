---
applied_at: '2018-03-29'
applies_to:
  - api
is_impactful: true
is_new_feature: false
collapse: true
show_excerpt: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2018-02-28-breaking-change-to-metadata-apis
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2018-03-01-java-sdk-v2141-release
previous_page_id: 2018-02-15-java-sdk-v2140-release
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2018/02-28-breaking-change-to-metadata-apis.md
published_at: '2018-02-28'
fullyTranslated: true
---
# メタデータAPIへの重大な変更

2018年3月29日に、メタデータAPIエンドポイントのレスポンス本文に新しいデータ型 (文字列の配列) が導入されます。この変更は、Boxのメタデータテンプレートに`multiSelect`という新しいフィールドタイプを追加するために行われます。この新しいフィールドタイプは、ファイルまたはフォルダにテンプレートインスタンスを作成する際の、複数の値を選択するためのチェックボックスタイプを表します。このフィールドタイプでは、選択されたオプションが文字列の配列に格納されます。この配列内の各文字列が、選択された`multiSelect`オプションのキーに対応します。

<!-- more -->

以下にメタデータテンプレートのJSONレスポンス本文の例を示します。キー`audience1`の値は、この変更で導入される新しいデータ型 (文字列の配列) の例を示しています。

```js
{
  "audience1": ["internal", "internalEng"],
  "documentType": "Q1 plans",
  "competitiveDocument": "no",
  "status": "active",
  "author": "Jones",
  "currentState": "proposal",
  "$type": "marketingCollateral-d086c908-2498-4d3e-8a1f-01e82bfc2abe",
  "$parent": "file_5010739061",
  "$id": "2094c584-68e1-475c-a581-534a4609594e",
  "$version": 0,
  "$typeVersion": 0,
  "$template": "marketingCollateral",
  "$scope": "enterprise_12345"
}
```
