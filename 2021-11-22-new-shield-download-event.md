---
applied_at: '2021-11-22'
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
id: 2021-11-22-new-shield-download-event
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2021-11-23-box-java-sdk-v2580-released
previous_page_id: 2021-11-17-new-event-stream-live-monitoring
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/11-22-new-shield-download-event.md
published_at: '2021-11-22'
fullyTranslated: true
---
# 新しいShieldダウンロードイベント

Shieldアクセスポリシーに基づいて制限されるダウンロードに対する新しい`event_type`を、[Enterprise Event][events] Streamにリリースしました。

<!-- more -->

ダウンロードを制限するShieldアクセスポリシーを管理者が作成し、エンドユーザーがファイルをダウンロードできないようブロックされると、[Enterprise Event][events] Stream内でイベントが生成されます。また、ユーザーがダウンロードが制限されたファイルを含むフォルダを表示したとき、ダウンロードが制限されたファイルをプレビューで表示したとき、ダウンロードが制限されたファイルをAPIを介してダウンロードすることをリクエストしたときにもイベントが生成されます。これらのイベントは、標準のイベントオブジェクトスキーマと、`SHIELD_DOWNLOAD_BLOCKED`に設定された`event_type`値に従います。

## 更新内容

* スマートアクセスのイベントトリガーのドキュメントに[新しいセクション][new-event]を追加
* [Enterprise Eventのリスト][event-list]に`SHIELD_DOWNLOAD_BLOCKED`を追加

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[Developer Forum][forum]に英語でリクエストを投稿してください。

[forum]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum

[events]: g://events/enterprise-events/for-enterprise

[new-event]: g://events/event-triggers/shield-alert-events/#download-restriction

[event-list]: g://events/enterprise-events/for-enterprise/#event-types
