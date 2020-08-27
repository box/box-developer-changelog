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
id: 2020-04-23-add-new-uploader_display_name-field-to-file-and-file-versions
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2020-04-23-java-sdk-v2470-release
previous_page_id: 2020-04-21-new-metadata-query-apis-available
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2020/04-23-add-new-uploader_display_name-field-to-file-and-file-versions.md
published_at: '2020-04-23'
---
# ファイルおよびファイルバージョンに新しい`uploader_display_name`を追加

新しいフィールド`uploader_display_name`がファイルリソースとファイルバージョンリソースの両方に追加されました。このフィールドでは、アップロード時にユーザーの名前を指定します。

<!-- more -->

```json
{
  ...
  "uploader_display_name": "Ellis Wiggins"
}
```

このフィールドをファイルおよびファイルバージョンのエンドポイントのいずれかでリクエストするには、`fields`クエリパラメータを指定します。以下に例を示します。

```bash
curl -X GET https://api.box.com/2.0/files/12345?fields=uploader_display_name \
     -H 'Authorization: Bearer <ACCESS_TOKEN>'
```

ログアウトした匿名ユーザーがファイルをアップロードすると、そのユーザーのメールアドレスが返されます。使用可能なメールアドレスがない場合、このフィールドはデフォルトで`Someone`というテキストが設定されます。
