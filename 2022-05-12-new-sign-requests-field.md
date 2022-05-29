---
applied_at: '2022-05-12'
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
id: 2022-05-12-new-sign-requests-field
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2022-05-16-box-ui-elements-v1500-released
previous_page_id: 2022-05-11-new-fields-in-event-api-ref
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2022/05-12-new-sign-requests-field.md
published_at: '2022-05-12'
fullyTranslated: true
---
# 署名リクエストへの新しいフィールドの追加

Box Signのリクエストのレスポンスオブジェクトに、新しいフィールド`content_type`が含まれるようになりました。このフィールドは、署名者の入力用に選択された`input`の`type`に想定されるコンテンツタイプを識別します。

<!-- more -->

## 更新内容

* [署名リクエストのレスポンスオブジェクト][2]に新しいフィールド`content_type`を追加

## サポート情報

問題がある場合やさらにガイドが必要な場合は、Boxの[開発者向けフォーラム][1]に英語でリクエストを投稿してください。

[1]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum

[2]: r://sign-request/#param-signers-inputs-content_type
