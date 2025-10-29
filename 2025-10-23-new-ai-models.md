---
applied_at: '2025-10-23'
applies_to:
  - guides
  - api
  - ai
is_impactful: true
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2025-10-23-new-ai-models
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2025-10-23-box-windows-sdk-v600-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2025/10-23-new-ai-models.md
published_at: '2025-10-23'
fullyTranslated: true
---
# Box AI API — 利用可能な新しいAIモデルとデフォルトモデルの更新

[利用可能なAIモデル][supported-models]のリストが更新され、以下のモデルが追加されました。

* [Mistral Medium 3][mistral-medium]
* [Mistral Small 3.1][mistral-small]
* [Claude Haiku 4.5][claude-haiku]

また、Box AI (Box AI for Hubs、Box AI for Documents、Box AI for Notes Q&A) のデフォルトモデルが[OpenAI GPT 5][gpt-5]になりました。

<!-- more -->

**注:** **プレビュー**モードで提供されているモデルはパフォーマンスが大規模にテストされておらず、現状のままでの利用となるため、モデル/出力の品質、可用性、精度にはばらつきがある可能性があります。

提供されているモデルを使用して、AIエージェントの構成で使用されている[デフォルトモデルを上書き][override]できます。Box AI APIの詳細については、[ガイド][ai-guides]と[APIリファレンス][api]を参照してください。

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[Developer Forum][forum]に英語でリクエストを投稿してください。

[supported-models]: https://developer.box.com/guides/box-ai/supported-models/

[override]: https://developer.box.com/guides/box-ai/ai-agents/ai-agent-overrides/

[ai-guides]: https://developer.box.com/guides/box-ai

[api]: https://developer.box.com/reference/post-ai-ask/

[forum]: https://forum.box.com/

[mistral-medium]: https://developer.box.com/guides/box-ai/ai-models/ibm-mistral-medium-3-model-card/

[mistral-small]: https://developer.box.com/guides/box-ai/ai-models/ibm-mistral-small-3-1-model-card/

[claude-haiku]: https://developer.box.com/guides/box-ai/ai-models/aws-claude-4-5-haiku-model-card/

[gpt-5]: https://developer.box.com/guides/box-ai/ai-models/openai-gpt-5-model-card/
