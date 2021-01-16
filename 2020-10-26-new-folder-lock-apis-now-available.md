---
applied_at: '2020-10-26'
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
id: 2020-10-26-new-folder-lock-apis-now-available
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2020-10-29-box-java-sdk-v2510-released
previous_page_id: 2020-10-22-new-folder-lock-apis-now-available
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2020/10-26-new-folder-lock-apis-now-available.md
published_at: '2020-10-26'
fullyTranslated: true
---
# 新しくなったフォルダロックAPI

A new collections of APIs have been released to allow developers to lock move and delete operations on folders. New [API reference][e_post] and [guides][g_post] have been made available to help create and manage you folder locks.

フォルダが移動または削除されないようにそのフォルダにロックを作成するには、`folder_locks`エンドポイントにフォルダのIDを指定します。

```curl
curl -i -X POST "https://api.box.com/2.0/folder_locks" \
     -H "Authorization: Bearer <ACCESS_TOKEN>" \
     -H "Content-Type: application/json" \
     -d '{
       "folder": {
         "type": "folder",
         "id": "33552487093"
       }
     }'
```

Additional API endpoints are available to allow a developer to list all locks on a given folder, or to delete an existing folder lock with a folder lock ID.

* **フォルダのロックを作成する**: [ガイド][g_post] \| [APIリファレンス][e_post]
* **フォルダに対するすべてのロックのリストを取得する**: [ガイド][g_get] \| [APIリファレンス][e_get]
* **Delete a folder lock**: [Guide][g_del] \| [API Reference][e_del]

[e_get]: e://get-folder-locks

[e_post]: e://post-folder-locks

[e_del]: e://delete-folder-locks-id

[g_get]: g://folders/single/get-locks

[g_post]: g://folders/single/create-lock

[g_del]: g://folders/single/delete-lock
