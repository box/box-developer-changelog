---
applied_at: '2024-01-19'
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
id: 2024-01-19-rule-response-action-param-added copy
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2024-01-25-box-ui-elements-v1900-released
previous_page_id: 2024-01-16-box-java-sdk-v470-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2024/01-19-rule-response-action-param-added
  copy.md
published_at: '2024-01-19'
fullyTranslated: true
---
# Shieldの不審な場所に関するアラートの新しいイベントパラメータ

Shieldの不審な場所に関する自動応答のリリースに伴い、[Shieldアラートイベント][1]のレスポンスに`rule_response_action`パラメータを追加しました。このパラメータは、各Shieldアラートイベントのペイロードで返されますが、**不審な場所**に関するアラートイベントにしか適用できません。

<!-- more -->

パラメータの値は、管理コンソールの \[**ターゲットユーザーのアクセス制限**] のルール設定によって異なります。

* アクティブな場合、アラートがトリガーされると、パラメータの値は`true`になります。
* 非アクティブな場合、アラートがトリガーされると、パラメータの値は`false`になります。

その他すべてのShieldアラート (**異常なダウンロード**、**悪意のあるコンテンツ**、**不審なセッション**) では、`rule_response_action`パラメータは常に`null`になります。

詳細については、[不審な場所のルールの設定][2]を参照してください。

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[Developer Forum][3]に英語でリクエストを投稿してください。

[1]: g://events/event-triggers/shield-alert-events/#suspicious-locations-alert

[2]: https://support.box.com/hc/en-us/articles/9090542213395-Shield-Threat-Detection-Rule-Settings#h_01GE85EWQ1TS5APY7RGN801QSC

[3]: https://forum.box.com/
