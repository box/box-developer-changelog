---
applied_at: '2024-12-10'
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
id: 2024-12-10-upcoming-breaking-change-in-the-box-ai-api
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2024-12-30-box-python-sdk-generated-v190-released
previous_page_id: 2024-12-09-box-typescript-sdk-generated-v190-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2024/12-10-upcoming-breaking-change-in-the-box-ai-api.md
published_at: '2024-12-10'
fullyTranslated: true
---
# 今後予定されている重大な変更: Box AI API - 抽出 (構造化)

Box AI APIの抽出 (構造化) エンドポイントに重大な変更を予定しています。この変更は、追加のフィールドを導入し、メタデータのキー/値ペアを回答オブジェクト内にネストすることで、レスポンスを改善するものです。**変更は1月中旬のリリースを予定しています**。弊社の[変更ログ][1]および[Box開発者向けブログ][2]のフォローをお願いいたします。以下でコードスニペットの例をご確認いただけます。

<!-- more -->

現在のレスポンスの例:

```js
{
  "name": "Marie",
  "date": "10/2/23"
}
```

新しいレスポンス形式の例:

```js
{
  "answer": {
    "name": "Marie",
    "date": "10/2/23"
  },
  "completion_reason": "done",
  "created_at": "2012-12-12T10:53:43-08:00"
}
```

[1]: page/changelog

[2]: https://medium.com/box-developer-blog
