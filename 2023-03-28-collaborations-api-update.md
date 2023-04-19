---
applied_at: '2023-03-28'
applies_to:
  - api
is_impactful: false
is_new_feature: true
release_source_url: ''
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2023-03-28-collaborations-api-update
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2023-04-18-box-python-sdk-v371-released
previous_page_id: 2023-03-14-box-windows-sdk-v520-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2023/03-28-collaborations-api-update.md
published_at: '2023-03-28'
fullyTranslated: true
---
# Collaboration API - `pending`ステータス

[Collaboration API][1]に、`pending`ステータスに関する情報を追加しました。

コラボレーションが[`pending`ステータス][2]の場合:

* loginとnameは空の文字列を返します。
* 以下のフィールドが編集されます:
  * `user_id`を使用してコラボレーションが作成された場合、`login`と`name`は非表示になります。
  * `login`を使用してコラボレーションが作成された場合、`name`は非表示になります。

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[開発者向けフォーラム][3]に英語でリクエストを投稿してください。

[1]: r://collaboration

[2]: e://post-collaborations

[3]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum
