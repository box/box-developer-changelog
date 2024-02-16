---
applied_at: '2022-05-18'
applies_to:
  - api
is_impactful: true
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2022-05-18-new-endpoints-for-user-avatar
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2022-05-18-oauth-20-redirect-url-release
previous_page_id: 2022-05-16-box-ui-elements-v1500-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2022/05-18-new-endpoints-for-user-avatar.md
published_at: '2022-05-18'
fullyTranslated: true
---
# ユーザーのアバターを管理するための新しいエンドポイント

本日より、ユーザーアバターAPIでユーザーアバターの追加、更新、削除がサポートされるようになりました。

ユーザーアバターを作成または更新するには、アップロードするファイルへのパスを含めて[`POST /users-id-avatar`][2]エンドポイントを呼び出します。すでにアバターが存在する場合は、新しくアップロードされた写真に置き換えられます。

```sh
curl -i -X POST -L https://api.box.net/2.0/users/userID/avatar 
    -H 'Authorization: Bearer <ACCESS_TOKEN>' 
    --form 'pic=@"path/to/file/file.jpeg"'
```

レスポンスには、ファイルの場所へのURLを示す[user avatar][4]オブジェクトが含まれます。

ユーザーアバターを削除するには、[`DELETE /users-id-avatar`][3]エンドポイントを呼び出します:

```sh
curl -i -X DELETE -L https://api.box.net/2.0/users/userID/avatar 
    -H 'Authorization: Bearer <ACCESS_TOKEN>'
```

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[Developer Forum][1]に英語でリクエストを投稿してください。

[1]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum

[2]: e://post-users-id-avatar

[3]: e://delete-users-id-avatar

[4]: r://user-avatar
