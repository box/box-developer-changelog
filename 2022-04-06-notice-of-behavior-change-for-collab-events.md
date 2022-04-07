---
applied_at: '2022-04-06'
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
id: 2022-04-06-notice-of-behavior-change-for-collab-events
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2022-04-01-box-windows-sdk-v430-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2022/04-06-notice-of-behavior-change-for-collab-events.md
published_at: '2022-04-06'
fullyTranslated: true
---
# changesストリームのコラボレーションイベントの動作変更のお知らせ

本日以降、アプリケーションがBoxの[イベントAPIエンドポイント][event-apis]からコラボレーションイベントを使用した場合のこのイベントの動作に対する変更のリリースを開始します。

この変更は`COLLAB_INVITE_COLLABORATOR`、`COLLAB_ADD_COLLABORATOR`、`COLLAB_ROLE_CHANGE`、`COLLAB_REMOVE_COLLABORATOR` [User Event][user-events]のみに影響し、クエリパラメータ`stream_type`が`changes`に設定されます。既存の[Enterprise Event][enterprise-events]には影響しません。この新しい動作により、既存のアプリケーション内でダウンタイムが発生することはありません。また、稼働時間の中断を防ぐためのアプリケーションの変更も必要ありません。

<!-- more -->

## 変更の概要

これまで、`COLLAB_INVITE_COLLABORATOR`、`COLLAB_ADD_COLLABORATOR`、`COLLAB_ROLE_CHANGE`、`COLLAB_REMOVE_COLLABORATOR`タイプのイベントでは、その影響を受ける、`changes`ストリームをリッスンしているユーザーに対して通知が作成されていました。コラボレーション項目の所有者は、`all`ストリームもリッスンしていない限り、これらのイベントを受け取ることはありませんでした。

Boxでは、`all`ストリームと`changes`ストリーム間にパリティを確立することで、この相違を解消します。この新しい動作により、コラボレーションの通知は`changes`ストリームでコンテンツの所有者にも作成されるようになります。また、コラボレーションの所有者には、`all`ストリームでの表示内容に合わせて追加のイベントが表示されるようになります。

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[開発者向けフォーラム][forum]に英語でリクエストを投稿してください。

[event-apis]: https://developer.box.com/reference/get-events/

[user-events]: https://developer.box.com/guides/events/user-events/for-user/#event-types

[enterprise-events]: https://developer.box.com/guides/events/enterprise-events/for-enterprise/

[user-access-token]: g://authentication/jwt/user-access-tokens/

[forum]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum
