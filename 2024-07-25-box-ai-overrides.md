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
---
# Fetch and override default AI configuration

Thanks to the [`GET /2.0/ai_agent_default`][1] endpoint you can now fetch the default configuration for AI services.

<!-- more -->

Once you get the configuration details, you can override them using the `ai_agent` parameter available in the [`POST /2.0/ai/ask`][2] and [`POST /2.0/ai/text_gen`][3] requests.

## Where to get support

Should you have any issues or need further guidance, please post a request to our [developer forum][4] for any help needed.

[1]: e://get_ai_agent_default
[2]: e://post_ai_ask#param_ai_agent
[3]: e://post_ai_text_gen#param_ai_agent
[4]: https://forum.box.com/