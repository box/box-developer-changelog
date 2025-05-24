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

開発者がフォルダに対する移動操作と削除操作をロックできるように、APIの新しいコレクションがリリースされました。フォルダロックの作成および管理に役立つ、新しい[APIリファレンス][e_post]と[ガイド][g_post]が使用可能になりました。

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

また、開発者が特定のフォルダに対するすべてのロックのリストを取得したり、フォルダロックIDを使用して既存のフォルダロックを削除したりできるように、追加のAPIエンドポイントが提供されています。

* **フォルダのロックを作成する**: [ガイド][g_post] \| [APIリファレンス][e_post]
* **フォルダに対するすべてのロックのリストを取得する**: [ガイド][g_get] \| [APIリファレンス][e_get]
* **フォルダのロックを削除する**: [ガイド][g_del] \| [APIリファレンス][e_del]

[e_get]: e://get-folder-locks

[e_post]: e://post-folder-locks

[e_del]: e://delete-folder-locks-id

[g_get]: g://folders/single/get-locks

[g_post]: g://folders/single/create-lock

[g_del]: g://folders/single/delete-lock
