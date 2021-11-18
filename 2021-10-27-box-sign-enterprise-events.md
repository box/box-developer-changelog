---
applied_at: '2021-10-27'
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
id: 2021-10-27-box-sign-enterprise-events
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2021-10-28-box-ios-sdk-v500-released
previous_page_id: 2021-10-20-box-ui-elements-v1400-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/10-27-box-sign-enterprise-events.md
published_at: '2021-10-27'
fullyTranslated: true
---
# Box Signエンタープライズイベント

[Box Sign][sign]イベントが、エンタープライズイベントストリームを使用して利用できるようになりました。詳細については、[Box Signイベントガイド][seg]をご参照ください。

## 更新内容

<!--alex ignore cancelled and expired-->

* 署名リクエストの[ドキュメントイベント][d]を追加: 作成、変換、完了、キャンセル、期限切れ

* 署名リクエストの[署名者イベント][s]を追加: 割り当て、署名者による表示、ダウンロード、転送、署名、拒否

* 2つの新しい[ステータス][stat]を追加: `downloaded`、`downloaded and signed`

[stat]: e://resources/sign-requests/#param-status

[s]: g://events/event-triggers/sign-events/#signer-events

[d]: g://events/event-triggers/sign-events/#document-events

[seg]: g://events/event-triggers/sign-events

[sign]: g://box-sign
