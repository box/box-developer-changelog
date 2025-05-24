---
applied_at: '2021-11-16'
applies_to:
  - api
is_impactful: false
is_new_feature: false
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2021-11-16-added-retention-policy-marker-based-pagination
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2021-11-17-new-event-stream-live-monitoring
previous_page_id: 2021-11-03-extend-retention-via-files-api
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/11-16-added-retention-policy-marker-based-pagination.md
published_at: '2021-11-16'
fullyTranslated: true
---
# リテンションポリシーのマーカーベースのページ割りの追加

BoxのOpenAPIの仕様は、リテンションポリシーおよびリテンションポリシー割り当てのエンドポイントで`marker`ベースのページ割りと`fields`クエリパラメータの使用を示すために更新されました。

<!-- more -->

## 更新内容

更新内容は以下のとおりです。

* [`GET /retention-policies`](e://get-retention-policies)および[`GET /retention-policies-id-assignments`](e://get-retention-policies-id-assignments)エンドポイントに`fields`、`limit`、`marker`クエリパラメータを追加しました。
* [リテンションポリシー](e://resources/retention-policies)および[リテンションポリシー割り当て](e://resources/retention-policy-assignments)のレスポンスオブジェクトに`limit`と`next_marker `を追加しました。

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[Developer Forum][forum]に英語で投稿してください。

[forum]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum
