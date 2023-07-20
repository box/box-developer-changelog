---
applied_at: '2023-07-12'
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
id: 2023-07-12-sign-request-status
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2023-07-19-box-cli-v391-released
previous_page_id: 2023-07-07-box-python-sdk-v373-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2023/07-12-sign-request-status.md
published_at: '2023-07-12'
fullyTranslated: true
---
# 署名リクエストAPIの改善

[署名リクエストステータス][1]パラメータに次の2つの値が追加されました。

* `finalizing`: すべての署名者がリクエストに署名済みで、署名された最終的なドキュメントと署名ログがまだ生成されていない状態を示します。
* `error_finalizing`: `finalizing`フェーズが正常に完了しなかった状態を示します。

<!-- more -->

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[開発者向けフォーラム][2]に英語でリクエストを投稿してください。

[1]: r://sign-request#param-status

[2]: https://forum.box.com/
