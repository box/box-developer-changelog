---
applied_at: '2020-10-02'
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
id: 2020-10-02-new-file-request-apis-available
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2020-10-05-box-node-sdk-v1343-released
previous_page_id: 2020-10-02-box-python-sdk-v2100-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2020/10-02-new-file-request-apis-available.md
published_at: '2020-10-02'
fullyTranslated: true
---
# 新しいファイルリクエストAPI

APIの新しいコレクションが利用可能になりました。開発者はこれを使用して、ファイルリクエストを作成および更新できます。Boxは、ファイルリクエストの管理に役立つよう、[リファレンスドキュメント][copy]を更新したほか、[新しいガイド][guides]を追加しました。

既存のファイルリクエストのコピーを作成するために必要なのは、既存のファイルリクエストの一意のIDと、新しいリクエストの適用先となるフォルダのIDだけです。

```curl
curl -i -X POST "https://api.box.com/2.0/file_requests/42037322/copy" \
     -H "Authorization: Bearer <ACCESS_TOKEN>" \
     -d '{
       "folder": {
         "id": "2233212"
       }
     }'
```

さらに、開発者がファイルリクエストの詳細を取得したり、ファイルリクエストを更新または削除したりできるように追加のAPIも利用可能になりました。詳細については、開発者向けドキュメントをご確認ください。

* **テンプレートのファイルリクエストを作成する**: [ガイド][g_template]
* **ファイルリクエストのコピーを作成する**: [ガイド][g_copy] \| [APIリファレンス][copy]
* **ファイルリクエストに関する情報を取得する**: [ガイド][g_get] \| [APIリファレンス][get]
* **ファイルリクエストの構成を更新する**: [ガイド][g_put] \| [APIリファレンス][put]
* **ファイルリクエストを削除する**: [ガイド][g_del] \| [APIリファレンス][del]

[copy]: e://post_file_requests_id_copy

[get]: e://get_file_requests_id

[del]: e://delete_file_requests_id

[put]: e://put_file_requests_id

[guides]: g://file-requests

[g_template]: g://file-requests/template

[g_copy]: g://file-requests/copy

[g_get]: g://file-requests/get

[g_del]: g://file-requests/delete

[g_put]: g://file-requests/update
