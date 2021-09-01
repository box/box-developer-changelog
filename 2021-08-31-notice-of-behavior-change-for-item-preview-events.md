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
next_page_id: ''
previous_page_id: 2021-08-31-box-java-sdk-v2560-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/08-31-notice-of-behavior-change-for-item-preview-events.md
published_at: '2021-08-31'
fullyTranslated: true
---
# Notice of behavior change for item preview events

Starting today, we will begin rolling out changes to the behavior of item preview events when an application consumes those events from our [event API endpoints][event-apis].

この変更は`ITEM_PREVIEW`[ユーザーイベント][user-events]のみに影響し、既存の[エンタープライズイベント][enterprise-events]には影響しません。この新しい動作により、既存のアプリケーション内でダウンタイムが発生することはありません。また、稼働時間の中断を防ぐためのアプリケーションの変更も必要ありません。

<!-- more -->

## 変更の概要

Within the previous behavior when events were consumed, previewed item events were surfaced through the `ITEM_PREVIEW` event type for the owner of the content as well as any contributors assigned to the content. This meant that if a file with 2000 collaborators on it was previewed, the file owner plus all 2000 collaborators would have an event created stating that the file was previewed.

With the new behavior, notification of an item being previewed will only be created for the owner of the content and will not be produced for collaborators. This will help to reduce the noise of the event stream while preserving the ability to see when items are previewed as a content owner.

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[開発者向けフォーラム][forum]にリクエストを投稿してください。

[event-apis]: https://developer.box.com/reference/get-events/

[user-events]: https://developer.box.com/guides/events/for-user/#event-types

[enterprise-events]: https://developer.box.com/guides/events/for-enterprise/

[forum]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum
