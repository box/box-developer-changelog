---
applied_at: '2021-07-01'
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
id: 2021-07-01-notice-of-behavior-change-for-item-open-events
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2021-07-16-updated-file-size-limits
previous_page_id: 2021-06-16-box-python-sdk-v2121-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/07-01-notice-of-behavior-change-for-item-open-events.md
published_at: '2021-07-01'
fullyTranslated: true
---
# 項目を開くイベントの動作変更のお知らせ

本日以降、アプリケーションがBoxの[イベントAPIエンドポイント][event-apis]から`ITEM_OPEN`イベントを使用した場合のこのイベントの動作に対する変更のリリースを開始します。

この変更は`ITEM_OPEN` [エンタープライズイベント][user-events]のみに影響します。この新しい動作により、既存のアプリケーション内でダウンタイムが発生することはありません。また、稼働時間の中断を防ぐためのアプリケーションの変更も必要ありません。

## 変更の概要

以前の動作では、イベントを使用した場合、開かれた項目イベントが、コンテンツの所有者およびコンテンツに割り当てられたすべてのコラボレータのイベントタイプ`ITEM_OPEN`によって表示されました。つまり、2,000人のコラボレータが存在するファイルがDriveなどで開かれた場合、このファイルの所有者に加えて2,000人のコラボレータ全員に、ファイルが開かれたことを示すイベントが作成されます。

新しい動作では、項目が開かれたという通知がコンテンツの所有者に対してのみ作成され、コラボレータに対しては生成されません。これは、コンテンツの所有者としていつ項目が開かれたかを確認できるようにしたままイベントストリームのノイズを低減するのに役立ちます。

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[開発者向けフォーラム][forum]にリクエストを投稿してください。

[event-apis]: https://developer.box.com/reference/get-events

[user-events]: g://events/for-enterprise

[forum]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum
