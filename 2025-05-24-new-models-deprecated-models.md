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
next_page_id: ''
previous_page_id: 2025-05-13-box-dotnet-sdk-generated-v1100-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2025/05-24-new-models-deprecated-models.md
published_at: '2025-05-24'
---
# Box AI API - new AI models now available, Gemini 1.5 models deprecated

The list of [available AI models][1] has been recently updated with the following models:

* AWS Claude 4 Sonnet
* AWS Claude 4 Opus

The following models have been deprecated:

* Google Gemini 1.5 Flash 001
* Google Gemini 1.5 Pro 001

For more information, see [retired models][deprecated].

Azure OpenAI GPT o4 Mini model was removed.

Models offered in **Preview** mode have not been fully performance-tested at scale and are made available on an as-is basis. You may experience variability in model/output quality, availability, and accuracy.

You can use the provided models to [override the default model][2] used in the AI agent configuration.
For further details on Box AI API, see the [guides][3] and [API reference][4].

<!-- more -->


## Where to get support

Should you have any issues or need further guidance, please post a request to our [developer forum][5] for any help needed.

[1]: https://developer.box.com/guides/box-ai/supported-models/
[2]: https://box-ai/ai-agents/ai-agent-overrides
[3]: https://developer.box.com/guides/box-ai
[4]: https://developer.box.com/reference/post-ai-ask/
[5]: https://forum.box.com/
[deprecated]: https://cloud.google.com/vertex-ai/generative-ai/docs/learn/model-versions#expandable-1