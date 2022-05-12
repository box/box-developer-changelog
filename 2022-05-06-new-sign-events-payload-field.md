---
applied_at: '2022-05-06'
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
id: 2022-05-06-new-sign-events-payload-field
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2022-05-11-new-fields-in-event-api-ref
previous_page_id: 2022-05-06-new-editable-shared-links-api
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2022/05-06-new-sign-events-payload-field.md
published_at: '2022-05-06'
fullyTranslated: true
---
# Sign Eventsペイロードへの新しいフィールドの追加

`additional_details` Sign Eventsペイロードに、複数の受信者に一度に送信される署名リクエストを識別するための`batch_send`が含まれるようになりました。そのような一括送信リクエストが存在する場合、ペイロードはその`id`も提供します。

<!-- more -->

## 更新内容

* 新しいフィールド`batch_send`を[Sign Events][2]の`additional_details`ペイロードに追加しました。

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[開発者向けフォーラム][1]に英語でリクエストを投稿してください。

[1]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum

[2]: g://events/event-triggers/sign-events
