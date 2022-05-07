---
applied_at: '2022-05-03'
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
id: 2022-05-03-new-sign-events-payload-field
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2022-05-06-new-editable-shared-links-api
previous_page_id: 2022-04-28-box-python-sdk-v330-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2022/05-03-new-sign-events-payload-field.md
published_at: '2022-05-03'
fullyTranslated: true
---
# New Field Added to Sign Events Payload

The `additional_details` Sign Events payload now includes the `batch_send` field identifying a sign request sent to multiple recipients at once. If such a batch send request exists, the payload also provides its `id`.

<!-- more -->

## 更新内容

* Added new field `batch_send` to `additional_details` payload for [Sign Events][2].

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[開発者向けフォーラム][1]に英語でリクエストを投稿してください。

[1]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum

[2]: g://events/event-triggers/sign-events
