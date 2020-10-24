---
applied_at: '2020-10-22'
applies_to:
  - api
is_impactful: false
is_new_feature: true
collapse: false
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2020-10-22-new-folder-lock-apis-now-available
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2020-10-21-metadata-cascade-policy-api-leaves-beta
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2020/10-22-new-folder-lock-apis-now-available.md
published_at: '2020-10-22'
fullyTranslated: true
---
# フォルダのロックAPIが新しく利用可能になりました

フォルダに対する移動および削除アクションの制限を可能にするために、APIの新しいコレクションがリリースされました。フォルダのロックの作成および管理に役立つ、新しい[APIリファレンス][e_post]と[ガイド][g_post]が使用可能になりました。

フォルダが移動または削除されないようにそのフォルダにロックを作成するには、`POST /folder_locks/`エンドポイントにフォルダのIDを指定します。

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

また、開発者が特定のフォルダに対するすべてのロックのリストを取得したり、フォルダから既存のフォルダのロックを削除したりできるように、追加のAPIエンドポイントが提供されています。

* **フォルダのロックを作成する**: [ガイド][g_post] \| [APIリファレンス][e_post]
* **フォルダに対するすべてのロックのリストを取得する**: [ガイド][g_get] \| [APIリファレンス][e_get]
* **フォルダのロックを削除する**: [ガイド][g_del] \| [APIリファレンス][e_del]

[e_get]: e://get-folder-locks

[e_post]: e://post-folder-locks

[e_del]: e://delete-folder-locks-id

[g_get]: g://folders/single/get-locks

[g_post]: g://folders/single/create-lock

[g_del]: g://folders/single/delete-lock
