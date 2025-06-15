---
applied_at: '2020-04-23'
applies_to:
  - api
is_impactful: false
is_new_feature: true
collapse: true
show_excerpt: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2020-04-23-new-classification-field-for-files
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2020-04-24-python-sdk-v280-release
previous_page_id: 2020-04-23-java-sdk-v2470-release
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2020/04-23-new-classification-field-for-files.md
published_at: '2020-04-23'
fullyTranslated: true
---
# ファイルの新しい`classification`フィールド

`Field`オブジェクト内で、省略可能な新しいフィールド`classification`が使用できるようになりました。このフィールドは、現在ファイルに適用されている分類を表します。

<!-- more -->

分類は、[ファイル情報の取得](endpoint://get-files-id)など、ファイルを返す任意のエンドポイントを介してリクエストでき、[追加`fields`のリクエスト](g://api-calls/request-extra-fields)をサポートします。

```js
{
  "id": "123456789",
  "type": "file",
  "etag": "1",
  "classification": {     
    "name": "Top Secret",     
    "definition": "Content that should not be shared outside the company.",
    "color": "#FF0000"
  },
  ...
}
```

分類は、APIまたはBox Shieldを介して設定することも、ユーザーがウェブアプリケーションを使用して設定することもできます。
