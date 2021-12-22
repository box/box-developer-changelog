---
applied_at: '2018-08-21'
applies_to:
  - api
is_impactful: false
is_new_feature: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2018-08-21-add-new-action_by-field-to-enterprise-events
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2018-08-21-add-new-fields-to-folder-update-and-get-info-endpoints
previous_page_id: 2018-08-17-box-user_id-field-size-changed
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2018/08-21-add-new-action_by-field-to-enterprise-events.md
published_at: '2018-08-21'
fullyTranslated: true
---
# Enterprise Eventに新しい`action_by`フィールドを追加

ユーザーアカウントで実行された管理者アクションをより適切に記録するために、Enterprise Eventのレスポンスデータに`action_by`ミニユーザーオブジェクトが追加されました。このフィールドには、該当する場合に、ユーザーアクションを実行した管理者アカウントが表示されます。

Enterpriseの管理者の場合、これにはアカウントのID、ログイン、および名前が含まれます。Boxの内部管理者が実行したアクションの場合、これは以下のようになります。

* id: `box_support`
* login: `support@box.com`
* name: `Box Support`

追加のオブジェクトは、Enterpriseの[イベントオブジェクト属性](endpoint://resources/event/)内に記録されます。
