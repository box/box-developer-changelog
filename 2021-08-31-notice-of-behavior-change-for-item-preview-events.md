---
applied_at: '2021-08-31'
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
id: 2021-08-31-notice-of-behavior-change-for-item-preview-events
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2021-09-01-classification-name-field-now-in-events
previous_page_id: 2021-08-31-box-java-sdk-v2560-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/08-31-notice-of-behavior-change-for-item-preview-events.md
published_at: '2021-08-31'
fullyTranslated: true
---
# 項目プレビューイベントの動作変更のお知らせ

本日以降、アプリケーションがBoxの[イベントAPIエンドポイント][event-apis]から項目プレビューイベントを使用した場合のこのイベントの動作に対する変更のリリースを開始します。

この変更は`ITEM_PREVIEW`[ユーザーイベント][user-events]のみに影響し、既存の[エンタープライズイベント][enterprise-events]には影響しません。この新しい動作により、既存のアプリケーション内でダウンタイムが発生することはありません。また、稼働時間の中断を防ぐためのアプリケーションの変更も必要ありません。

<!-- more -->

## 変更の概要

以前の動作では、イベントを使用した場合、プレビューされた項目イベントが、コンテンツの所有者およびコンテンツに割り当てられたすべてのコラボレータのイベントタイプ`ITEM_PREVIEW`によって表示されました。つまり、2,000人のコラボレータが存在するファイルがプレビューされた場合、このファイルの所有者に加えて2,000人のコラボレータ全員に、ファイルがプレビューされたことを示すイベントが作成されます。

新しい動作では、項目のプレビューに関する通知がコンテンツの所有者に対してのみ作成され、コラボレータに対しては生成されません。これは、コンテンツの所有者としていつ項目がプレビューされたかを確認できるようにしたままイベントストリームのノイズを低減するのに役立ちます。

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[開発者向けフォーラム][forum]にリクエストを投稿してください。

[event-apis]: https://developer.box.com/reference/get-events/

[user-events]: https://developer.box.com/guides/events/enterprise-events/for-user/#event-types

[enterprise-events]: https://developer.box.com/guides/events/user-events/for-enterprise/

[forum]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum
