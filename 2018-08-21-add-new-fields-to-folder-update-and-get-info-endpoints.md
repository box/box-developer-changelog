---
applied_at: '2018-08-21'
applies_to:
  - api
is_impactful: false
is_new_feature: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2018-08-21-add-new-fields-to-folder-update-and-get-info-endpoints
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2018-08-23-java-sdk-v2230-release
previous_page_id: 2018-08-21-add-new-action_by-field-to-enterprise-events
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2018/08-21-add-new-fields-to-folder-update-and-get-info-endpoints.md
published_at: '2018-08-21'
fullyTranslated: true
---
# フォルダを更新エンドポイントおよびフォルダ情報の取得エンドポイントに新しいフィールドを追加

[フォルダを更新APIエンドポイント](endpoint://put-folders-id)の`is_collaboration_restricted_to_enterprise`に、2つのメジャーリリースが追加されました。これは、将来のコラボレーションをEnterprise内のみに制限するかどうかを設定するために作成されるブール値です。既存のコラボレーションには影響しません。このフィールドの値は、[フォルダ情報の取得エンドポイント](endpoint://get-folders-id)を呼び出したときにも表示されます。
