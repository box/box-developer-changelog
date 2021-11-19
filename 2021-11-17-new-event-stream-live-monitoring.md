---
applied_at: '2021-11-17'
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
id: 2021-11-17-new-event-stream-live-monitoring
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2021-11-16-added-retention-policy-marker-based-pagination
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/11-17-new-event-stream-live-monitoring.md
published_at: '2021-11-17'
fullyTranslated: true
---
# `stream_type`をライブで監視する新しいイベントストリーム

`admin_logs_streaming`という[`GET /events`][event-api] API用に新しい`stream_type`をリリースしました。これにより、Boxで発生したイベントをほぼリアルタイムで監視できるようになります。

<!-- more -->

`admin_logs`を使用してライブイベントを登録しているアプリケーションは、最も低く一貫性のあるレイテンシを実現するために、`admin_logs_streaming`に移行することをお勧めします。この`stream_type`を使用するには、ユーザーは、**新規レポートの実行および既存レポートへのアクセスを行う**ための権限を持つEnterprise管理者または共同管理者である必要があります。

## 更新内容

この新しいオプションについて説明するために、ドキュメントを更新しました。

* わかりやすくするために[イベント][event-guide]ガイドを全面的に再編しました (各種セクションのすべてのページへの情報の追加を含む)
* [`GET /events`][event-api]エンドポイントに関するOpenAPIの仕様を更新して、`admin_logs_streaming`の新しい`stream_type`オプションを含めました
* 切り替え時の手順を含め、[`stream_type`ページ][migration]の新しい移行方法を追加しました

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[開発者向けフォーラム][forum]に英語でリクエストを投稿してください。

[forum]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum

[event-api]: e://get-events

[event-guide]: g://events

[migration]: g://events/enterprise-events/migrate-to-stream
