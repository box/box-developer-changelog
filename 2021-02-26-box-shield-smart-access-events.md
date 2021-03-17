---
applied_at: '2021-02-26'
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
id: 2021-02-26-box-shield-smart-access-events
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2021-03-16-new-collection-events
previous_page_id: 2021-02-26-box-cli-v290-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/02-26-box-shield-smart-access-events.md
published_at: '2021-02-26'
fullyTranslated: true
---
# Box Shieldスマートアクセスイベント

外部コラボレーションの制限および正当な理由の承認のイベントが[エンタープライズイベント][events]ストリームから使用可能になりました。

この高度なセキュリティ機能を活用するには、[Box Shield][box-shield]を購入し、Box Enterpriseで有効にする必要があります。

<!-- more -->

これらのイベントは、`event_type`値が次のいずれかに設定されている、標準的な[イベントオブジェクト][eo]スキーマに従います: `SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION`、`SHIELD_EXTERNAL_COLLAB_INVITE_JUSTIFIED`、`SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED`、`SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION`、`SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED`、`SHIELD_JUSTIFICATION_APPROVAL`。

各イベントの`additional_details`ペイロードでは、より多くの情報が提供されます。詳細については、BoxのShieldイベントの[ガイド][saguide]を参照してください。

## 機能

* Box Shieldの外部コラボレーションと正当な理由の承認のサポートをエンタープライズイベントストリームに追加

[box-shield]: https://www.box.com/shield

[eo]: r://event/

[events]: g://events/for-enterprise/

[saguide]: g://events/shield-alert-events/#smart-access
