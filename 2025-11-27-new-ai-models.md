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
next_page_id: ''
previous_page_id: 2025-11-20-box-ios-sdk-610-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2025/11-27-new-ai-models.md
published_at: '2025-11-27'
fullyTranslated: true
---
# Box AI API — new AI models available and default models update

[利用可能なAIモデル][supported-models]のリストが更新され、以下のモデルが追加されました。

* [OpenAI GPT-5.1][gpt-5-1]
* [OpenAI GPT-5 mini][gpt-5-mini]
* [Gemini 3 Pro][gemini-3-pro]
* [Llama 4 Maverick][llama-4-maverick]

<!-- more -->

Additionally, default AI models have been updated for Box AI features:

* [Gemini 2.5 Pro][gemini-2-5-pro] is now the default model for Box AI Enhanced Extract.
* [Gemini 2.5 Flash][gemini-2-5-flash] is now the default model for Box AI Standard Extract.
* [OpenAI GPT-5][gpt-5] is now the default model for Box AI Advanced Agent for Hubs, Documents, and Notes Q&A.
* [OpenAI GPT-5 mini][gpt-5-mini] is now the default model for Box AI for Hubs, Documents, and Notes Q&A.

**注:** **プレビュー**モードで提供されているモデルはパフォーマンスが大規模にテストされておらず、現状のままでの利用となるため、モデル/出力の品質、可用性、精度にはばらつきがある可能性があります。

提供されているモデルを使用して、AIエージェントの構成で使用されている[デフォルトモデルを上書き][override]できます。Box AI APIの詳細については、[ガイド][ai-guides]と[APIリファレンス][api]を参照してください。

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[Developer Forum][forum]に英語でリクエストを投稿してください。

[supported-models]: https://developer.box.com/guides/box-ai/supported-models/

[override]: https://developer.box.com/guides/box-ai/ai-agents/ai-agent-overrides/

[ai-guides]: https://developer.box.com/guides/box-ai

[api]: https://developer.box.com/reference/post-ai-ask/

[forum]: https://forum.box.com/

[gpt-5]: https://developer.box.com/guides/box-ai/ai-models/openai-gpt-5-model-card/

[gpt-5-1]: https://developer.box.com/guides/box-ai/ai-models/openai-gpt-5-1-model-card/

[gpt-5-mini]: https://developer.box.com/guides/box-ai/ai-models/openai-gpt-5-mini-model-card/

[gemini-3-pro]: https://developer.box.com/guides/box-ai/ai-models/google-gemini-3-pro-model-card/

[llama-4-maverick]: https://developer.box.com/guides/box-ai/ai-models/ibm-llama-4-maverick-model-card/

[gemini-2-5-pro]: https://developer.box.com/guides/box-ai/ai-models/google-gemini-2-5-pro-model-card/

[gemini-2-5-flash]: https://developer.box.com/guides/box-ai/ai-models/google-gemini-2-5-flash-model-card/
