---
applied_at: '2020-08-25'
applies_to:
  - api
is_impactful: false
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2020-08-25-multi-select-metadata-support-in-search-api
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2020-09-10-group-api-adds-new-filter-and-permissions
previous_page_id: 2020-08-21-box-cli-v260-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2020/08-25-multi-select-metadata-support-in-search-api.md
published_at: '2020-08-25'
fullyTranslated: true
---
# 検索APIで新しい`multiSelect`メタデータがサポート

本日以降、[検索API][search]では、[`multiSelect`メタデータフィールド][multi_select]の複数の値による項目の照合がサポートされるようになりました。この変更が行われる前は、`multiSelect`フィールドの値で項目を検索することはできませんでした。

メタデータフィールドが複数の値と一致する項目の検索を実行するために、`mdfilters`パラメータでは値のリストがサポートされるようになりました。

```curl
curl -G 'https://api.box.com/2.0/search' \
     -H 'Authorization: Bearer <ACCESS_TOKEN>' \
     -d 'mdfilters=[{"scope":"enterprise_12345","templateKey":"contractInfo","filters":{"products":["shield","platform"]}}]'
```

<!-- more -->

この例の`mdfilters`クエリパラメータには、`scope`、`templateKey`、一連の`filters`を含むフィルタが1つ指定されています。

```json
[
  {
    "scope": "enterprise_12345",
    "templateKey": "contractInfo",
    "filters": {
      "products": [
        "shield",
        "platform"
      ]
    }
  }
]
```

今回新しく、`products`フィルタが複数の値での照合を実行するようになりました。これにより、テンプレートの`products`値が`shield`または`platform`のいずれかであるファイルおよびフォルダのみが返されます。フィールドの値には複数の値を含めることができ、フィルタで指定された1つの値にのみ一致します。たとえば、`["shield", "governance"]`がフィルタ`["shield", "platform"]`に一致するのは、`shield`がフィルタに含まれているためです。

[search]: e://get_search

[multi_select]: g://metadata/fields/multi-select
