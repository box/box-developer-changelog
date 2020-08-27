---
applied_at: '2018-08-17'
applies_to:
  - api
is_impactful: true
is_new_feature: false
is_index: false
category_id: changelog
subcategory_id: ''
id: 2018-08-17-box-user_id-field-size-changed
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2018-08-21-add-new-action_by-field-to-enterprise-events
previous_page_id: 2018-08-16-generic-method-added-to-the-salesforce-sdk
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2018/08-17-box-user_id-field-size-changed.md
published_at: '2018-08-17'
---
# Box `user_id`フィールドのサイズを変更

すべてのプラットフォームユーザー(管理対象ユーザー、外部管理ユーザー、アプリユーザー)の追跡に使用される`user_id`フィールドは、まもなく現在の32ビット整数ではなく、64ビット整数の生成を開始するよう更新されます。

この更新は内部システムに影響するため、APIから生成された`user_id`文字列を32ビット整数フィールドに変換している場合には、新しい64ビット`user_id`の整数サイズをサポートするよう更新する必要があります。[APIドキュメント](endpoint://resources/user/)に従って、すべての`user_id`フィールドを文字列として保存することをお勧めします。
