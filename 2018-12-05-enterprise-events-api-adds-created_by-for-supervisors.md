---
applied_at: '2018-12-05'
applies_to:
  - api
is_impactful: true
is_new_feature: false
collapse: true
show_excerpt: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2018-12-05-enterprise-events-api-adds-created_by-for-supervisors
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2018-12-12-collaborations-now-show-unregistered-users
previous_page_id: 2018-11-16-java-sdk-v2240-release
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2018/12-05-enterprise-events-api-adds-created_by-for-supervisors.md
published_at: '2018-12-05'
---
# エンタープライズイベントAPIにスーパーバイザー向けの`created_by`を追加

Box管理者などのスーパーバイザーまたは内部管理者ユーザーがアクションを実行する場合の[エンタープライズイベント](endpoint://get-events/#request) APIエンドポイントの応答オブジェクトに小さな変更が加えられました。

<!-- more -->

この更新の前は、スーパーバイザーまたは内部管理ユーザーのユーザー情報が応答オブジェクトの`created_by`フィールドに表示されていました。今回の更新により、そのユーザーがスーパーバイザーまたは内部管理者である場合、応答に一般的なユーザー情報が表示されるようになりました。

これまで、応答の`created_by`フィールドは以下のように表示されていました。

```js
"created_by": {
  "type": "user",
  "id": "2030401181",
  "name": "sshah+iadev",
  "login": "admin_sshah"
}
```

今回の更新により、同じ応答が以下のように表示されます。

```js
"created_by": {
  "type": "user",
  "id": "box_support",
  "name": "Box Support",
  "login": "support@box.com"
}
```
