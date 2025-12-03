---
applied_at: "2025-11-27"
applies_to:
  - guides
  - api
  - ai
is_impactful: true
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ""
---

# Box AI API — new AI models available and default models update

The list of [available AI models][supported-models] has been recently updated with the following models:

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

**Note:** Models offered in **Preview** mode have not been fully performance-tested at scale and are provided on an as-is basis. You may experience variability in model/output quality, availability, and accuracy.

You can use the provided models to [override the default model][override] used in the AI agent configuration. 
For further details on Box AI API, see the [guides][ai-guides] and [API reference][api].

## Where to get support

Should you have any issues or need further guidance, please post a request to our [developer forum][forum] for any help needed.

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