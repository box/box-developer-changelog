---
applied_at: '2025-11-27'
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
id: 2025-11-27-new-ai-models
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2025-12-03-ransomware-activity-detection
previous_page_id: 2025-11-20-box-ios-sdk-610-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2025/11-27-new-ai-models.md
published_at: '2025-11-27'
fullyTranslated: true
---
# Box AI API — 利用可能な新しいAIモデルとデフォルトモデルの更新

[利用可能なAIモデル][supported-models]のリストが更新され、以下のモデルが追加されました。

* [OpenAI GPT-5.1][gpt-5-1]
* [OpenAI GPT-5 mini][gpt-5-mini]
* [Gemini 3 Pro][gemini-3-pro]
* [Llama 4 Maverick][llama-4-maverick]

<!-- more -->

さらに、デフォルトのAIモデルは、Box AI機能に対応するために更新されました。

* Box AI抽出エージェント (強化) のデフォルトモデルが[Gemini 2.5 Pro][gemini-2-5-pro]になりました。
* Box AI抽出エージェント (標準) のデフォルトモデルが[Gemini 2.5 Flash][gemini-2-5-flash]になりました。
* Box AI for Hubs、Box AI for Documents、Box AI for Notes Q&AのBox AI Advancedのデフォルトモデルが[OpenAI GPT-5][gpt-5]になりました。
* Box AI for Hubs、Box AI for Documents、Box AI for Notes Q&Aのデフォルトモデルが[OpenAI GPT-5 mini][gpt-5-mini]になりました。

**注:** **プレビュー**モードで提供されているモデルはパフォーマンスが大規模にテストされておらず、現状のままでの利用となるため、モデル/出力の品質、提供状況、精度にはばらつきがある可能性があります。

提供されているモデルを使用して、AIエージェントの構成で使用されている[デフォルトモデルを上書き][override]できます。Box AI APIの詳細については、[ガイド][ai-guides]と[APIリファレンス][api]を参照してください。

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[Developer Forum][forum]に英語でリクエストを投稿してください。

[supported-models]: g://box-ai/ai-models

[override]: g://box-ai/ai-agents/ai-agent-overrides

[ai-guides]: g://box-ai

[api]: e://post-ai-ask

[forum]: https://forum.box.com/

[gpt-5]: g://box-ai/ai-models/openai-gpt-5-model-card

[gpt-5-1]: g://box-ai/ai-models/openai-gpt-5-1-model-card

[gpt-5-mini]: g://box-ai/ai-models/openai-gpt-5-mini-model-card

[gemini-3-pro]: g://box-ai/ai-models/google-gemini-3-pro-model-card

[llama-4-maverick]: g://box-ai/ai-models/ibm-llama-4-maverick-model-card

[gemini-2-5-pro]: g://box-ai/ai-models/google-gemini-2-5-pro-model-card

[gemini-2-5-flash]: g://box-ai/ai-models/google-gemini-2-5-flash-model-card
