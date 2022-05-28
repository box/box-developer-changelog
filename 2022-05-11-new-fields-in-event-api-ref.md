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
next_page_id: 2022-05-12-new-sign-requests-field
previous_page_id: 2022-05-06-new-sign-events-payload-field
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2022/05-11-new-fields-in-event-api-ref.md
published_at: '2022-05-11'
fullyTranslated: true
---
# Eventの仕様への新しいフィールドの追加

Eventリソースの仕様に、次の新しいフィールドが含まれるようになりました。

* `created_at`: イベントの作成日時を指定
* `recorded_at`: データベースへのイベントの登録日時の指定

<!-- more -->

## 更新内容

* [Event][Event]リソースの仕様[2][2]に新しいフィールド`created_at`と`recorded_at`を追加しました。

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[開発者向けフォーラム][1]に英語でリクエストを投稿してください。

[1]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum

[2]: r://event
