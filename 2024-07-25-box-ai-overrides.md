---
applied_at: '2024-07-25'
applies_to:
  - guides
is_impactful: true
is_new_feature: true
release_source_url: ''
collapse: true
show_excerpt: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2024-07-25-box-ai-overrides
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2024-07-25-box-swift-sdk-new-gen-released
previous_page_id: 2024-07-24-box-typescript-sdk-generated-v130-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2024/07-25-box-ai-overrides.md
published_at: '2024-07-25'
fullyTranslated: true
---
# デフォルトのAIの構成の取得と上書き

[`GET /2.0/ai_agent_default`][1]エンドポイントにより、AIサービスのデフォルトの構成を取得できるようになりました。

<!-- more -->

構成の詳細を取得したら、[`POST /2.0/ai/ask`][2]および[`POST /2.0/ai/text_gen`][3]リクエストで利用可能な`ai_agent`パラメータを使用して構成を上書きできます。

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[Developer Forum][4]に英語でリクエストを投稿してください。

[1]: e://get_ai_agent_default

[2]: e://post_ai_ask#param_ai_agent

[3]: e://post_ai_text_gen#param_ai_agent

[4]: https://forum.box.com/
