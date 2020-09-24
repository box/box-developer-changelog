---
applied_at: '2018-12-12'
applies_to:
  - api
is_impactful: false
is_new_feature: true
collapse: true
show_excerpt: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2018-12-12-collaborations-now-show-unregistered-users
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2018-12-13-java-sdk-v2250-release
previous_page_id: 2018-12-05-enterprise-events-api-adds-created_by-for-supervisors
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2018/12-12-collaborations-now-show-unregistered-users.md
published_at: '2018-12-12'
fullyTranslated: true
---
# コラボレーションに未登録ユーザーを表示

ファイルまたはフォルダのコラボレータとして未登録ユーザーが追加されている場合のために、コラボレーション戻りオブジェクトにフィールド`invite_email`が追加されました。現在返される`accessible_by`オブジェクトでは未登録ユーザーの結果として`null`が表示されることから、この変更が加えられました。新しいフィールドには、ユーザーの招待に使用されたメールアドレスが表示されます。

<!-- more -->

この変更は以下のエンドポイントに影響します。

* [コラボレーションを取得](endpoint://get-collaborations-id)
* [ファイルコラボレーションを取得](endpoint://get-files-id-collaborations)
* [フォルダコラボレーションを取得](endpoint://get-folders-id-collaborations)

これまで、未登録ユーザーを含むコラボレーションオブジェクトは以下のように表示されていました。

```js
{
  "type": "collaboration",
  "id": "376164239",
  .....
  "accessible_by":  null
  .....
}
```

今回の更新により、返されるオブジェクトは以下のように表示されます。

```js
{
  "type": "collaboration",
  "id": "376164239",
  ......
  "accessible_by":  null
  "invite_email": "sadfasdf@box.com",
  },
  ......
}
```
