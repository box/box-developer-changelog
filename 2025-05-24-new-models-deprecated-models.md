---
applied_at: '2025-05-24'
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
id: 2025-05-24-new-models-deprecated-models
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2025-06-02-box-java-sdk-v4162-released
previous_page_id: 2025-05-13-box-dotnet-sdk-generated-v1100-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2025/05-24-new-models-deprecated-models.md
published_at: '2025-05-24'
fullyTranslated: true
---
# Box AI API - new AI models now available, Gemini 1.5 models deprecated

[利用可能なAIモデル][1]のリストが更新され、以下のモデルが追加されました。

* AWS Claude 4 Sonnet
* AWS Claude 4 Opus

The following models have been deprecated:

* Google Gemini 1.5 Flash 001
* Google Gemini 1.5 Pro 001

For more information, see [retired models][deprecated].

Azure OpenAI GPT o4 Mini model was removed.

**プレビュー**モードで提供されているモデルはパフォーマンスが大規模にテストされておらず、現状のままでの利用となるため、モデル/出力の品質、可用性、精度にはばらつきがある可能性があります。

提供されているモデルを使用して、AIエージェントの構成で使用されている[デフォルトモデルを上書き][2]できます。Box AI APIの詳細については、[ガイド][3]と[APIリファレンス][4]を参照してください。

<!-- more -->

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[Developer Forum][5]に英語でリクエストを投稿してください。

[1]: https://developer.box.com/guides/box-ai/supported-models/

[2]: https://box-ai/ai-agents/ai-agent-overrides

[3]: https://developer.box.com/guides/box-ai

[4]: https://developer.box.com/reference/post-ai-ask/

[5]: https://forum.box.com/

[deprecated]: https://cloud.google.com/vertex-ai/generative-ai/docs/learn/model-versions#expandable-1
