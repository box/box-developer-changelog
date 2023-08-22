---
applied_at: '2021-09-01'
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
id: 2021-09-01-classification-name-field-now-in-events
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2021-09-07-new-enhancements-to-retention-apis
previous_page_id: 2021-08-31-notice-of-behavior-change-for-item-preview-events
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/09-01-classification-name-field-now-in-events.md
published_at: '2021-09-01'
fullyTranslated: true
---
# イベントAPIで分類の名前フィールドが追加

コンテンツに分類が存在する場合、[イベント][events]APIにより、レスポンスオブジェクトで分類の`name`フィールドが返されるようになりました。

<!-- more -->

* イベントソースのレスポンスオブジェクトの更新については、[こちら][event-source]を参照してください。
* ユーザーソースおよびイベントソースによってトリガーされるイベントの例を紹介するために新しい[ガイドページ][event-triggers]が追加されました。

機能強化前と機能強化後のレスポンスの例を以下に示します。分類が存在しない場合は機能強化前の例が返されることに注意してください。

機能強化前:

```js
{
  "source": {
    "item_type": "file",
    "item_id": "8903212345",
    "item_name": "example.docx",
    "parent": {
      "type": "folder",
      "name": "All Files",
      "id": "0"
    },
    "owned_by": {
      "type": "user",
      "id": "11446498",
      "name": "Aaron Levie",
      "login": "notifications@example.com"
    }
  }
}
```

機能強化後:

```js
{
  "source": {
    "item_type": "file",
    "item_id": "8903212345",
    "item_name": "example.docx",
    "parent": {
      "type": "folder",
      "name": "All Files",
      "id": "0"
    },
    "owned_by": {
      "type": "user",
      "id": "11446498",
      "name": "Aaron Levie",
      "login": "notifications@example.com"
    },
    "classification": {
      "name": "Top Secret"
    }
  }
}
```

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[Developer Forum][forum]に英語でリクエストを投稿してください。

[forum]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum

[events]: e://get-events/

[event-source]: e://resources/event-source/

[event-triggers]: g://events/event-triggers/event-source
