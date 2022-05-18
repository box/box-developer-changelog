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
next_page_id: ''
previous_page_id: 2022-05-11-new-fields-in-event-api-ref
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2022/05-18-new-endpoints-for-user-avatar.md
published_at: '2022-05-18'
fullyTranslated: true
---
# New Endpoints to Manage User Avatars

Starting today, the User Avatar APIs supports adding, updating, and deleting user avatars.

To create or update a user avatar, call the [`POST /user-avatar`][2] endpoint. Remember to include the path to the file you want to upload. If an avatar already exists, it will be replaced with the new photo uploaded.

```sh
curl -i -X POST -L https://api.box.net/2.0/users/userID/avatar --H 'Authorization: Bearer <ACCESS_TOKEN>' --form 'pic=@"path/to/file/file.jpeg"'
```

The response includes the [user avatar][4] object with URLs to the file location.

To delete a user avatar, call the [`DELETE /user-avatar`][3] endpoint:

```sh
curl -i -X DELETE -L https://api.box.net/2.0/users/userID/avatar -H 'Authorization: Bearer <ACCESS_TOKEN>'
```

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[開発者向けフォーラム][1]に英語でリクエストを投稿してください。

[1]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum

[2]: e://post-users-id-avatar

[3]: e://delete-users-id-avatar

[4]: r://user-avatar
