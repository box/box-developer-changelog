---
applied_at: '2020-12-03'
applies_to:
  - api
is_impactful: false
is_new_feature: false
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2020-12-03-new-type-field-in-search-api-responses
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2020-12-10-blank-oauth2-redirect-uri-change
previous_page_id: 2020-12-03-box-cli-v280-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2020/12-03-new-type-field-in-search-api-responses.md
published_at: '2020-12-03'
fullyTranslated: true
---
# 検索APIの応答の新しい`type`フィールド

返された共有リンク項目の[検索結果応答オブジェクト][search_result_shared_link]に、新しいフィールド`type`が導入されました。

この応答オブジェクト形式が返されるのは、`include_recent_shared_links`クエリパラメータを`true`に設定した状態で[コンテンツの検索][search_content]エンドポイントを呼び出した場合のみです。

現在この応答オブジェクトを使用している既存のアプリケーションに影響はありません。

## 更新内容

このリリースより前は、共有リンクの検索結果の戻りオブジェクトに次の2つのオブジェクトが含まれていました。

* `accessible_via_shared_link`: 項目にアクセスできる共有リンク。
* `item`: 検索クエリに一致したファイル、フォルダ、またはウェブリンク。

```js
{
  "accessible_via_shared_link": "https://www.box.com/s/vfejh7y01sb263wjtgfe",
  "item": {
    ...
  }
}
```

この更新により、新しい`type`フィールドが導入されました。これは、常に`search_result`に設定される文字列です。

```js
{
  "type": "search_result",
  "accessible_via_shared_link": "https://www.box.com/s/vfejh7y01sb263wjtgfe",
  "item": {
    ...
  }
}
```

形式の詳細については、[共有リンクの検索結果][search_result_shared_link]応答オブジェクトを参照してください。

[search_content]: https://developer.box.com/reference/get-search/

[search_result_shared_link]: https://developer.box.com/reference/resources/search-result-with-shared-link/
