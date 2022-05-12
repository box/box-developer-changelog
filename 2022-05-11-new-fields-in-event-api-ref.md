---
applied_at: '2022-05-11'
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
id: 2022-05-11-new-fields-in-event-api-ref
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2022-05-06-new-sign-events-payload-field
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2022/05-11-new-fields-in-event-api-ref.md
published_at: '2022-05-11'
fullyTranslated: true
---
# New Fields Added to Event Specification

The Event resource specification now includes two new fields:

* `created_at` specifying when an event was created
* `recorded_at` specifying when an event was registered in the database

<!-- more -->

## 更新内容

* Added new fields `created_at` and `recorded_at` to the [Event][Event] resource specification [2][2].

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[開発者向けフォーラム][1]に英語でリクエストを投稿してください。

[1]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum

[2]: r://event
