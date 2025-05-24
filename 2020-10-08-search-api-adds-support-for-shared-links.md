---
applied_at: '2020-10-08'
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
id: 2020-10-08-search-api-adds-support-for-shared-links
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2020-10-19-box-windows-sdk-v3250-released
previous_page_id: 2020-10-05-box-node-sdk-v1343-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2020/10-08-search-api-adds-support-for-shared-links.md
published_at: '2020-10-08'
fullyTranslated: true
---
# 検索APIで共有リンクのサポートを追加

[検索API][endpoint]では、ユーザーが最近共有リンクを介してアクセスしたファイル、フォルダ、およびウェブリンクが返されるようになりました。

共有項目をリクエストするには、新しい`include_recent_shared_links`クエリパラメータを`true`に設定して[`GET /search`][endpoint] APIを呼び出します。

```sh
curl -i -X GET https://api.box.com/2.0/search?query=Contract&include_recent_shared_link=true
```

このクエリパラメータが指定されていない場合またはtrueに設定されていない場合、デフォルトでは、このAPIによって共有項目が返されることはありません。

## レスポンス形式の変更

`include_recent_shared_links`を`true`に設定した場合、追加情報を返すことができるようにレスポンスが若干変更されました。APIでは、ファイル、フォルダ、およびウェブリンクの直接的なリストではなく、`item`と`accessible_via_shared_link`プロパティを含むオブジェクトのリストが返されるようになりました。

<!-- more -->

<Tabs>

<Tab title="共有リンクが含まれる結果">

```json
{
  "entries": [
    {
      "item": {
        "id": 12345,
        "etag": 1,
        "type": "file",
        "sequence_id": 3,
        "name": "Contract.pdf",
        ...
      },
      "accessible_via_shared_link": "https://www.box.com/s/vspke7y05sb214wjokpk"
    }
    ...
  ],
  "limit": 1000,
  "offset": 2000,
  "total_count": 5000
}
```

</Tab>

<Tab title="共有リンクが含まれない結果">

```json
{
  "entries": [
    {
      "id": 12345,
      "etag": 1,
      "type": "file",
      "sequence_id": 3,
      "name": "Contract.pdf",
      ...
    },
    ...
  ],
  "limit": 1000,
  "offset": 2000,
  "total_count": 5000
}
```

</Tab>

</Tabs>

このレスポンス形式の変更は、新しいクエリパラメータを使用して行われるAPIコールのみに適用されるため、既存のアプリケーションに影響することはありません。

[endpoint]: e://get_search
