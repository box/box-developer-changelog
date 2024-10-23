---
applied_at: '2024-09-17'
applies_to:
  - guides
  - api
is_impactful: true
is_new_feature: true
release_source_url: ''
collapse: true
show_excerpt: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2024-09-17-box-ai-extract
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2024-09-23-box-ai-api-defaul-model-update
previous_page_id: 2024-09-11-box-typescript-sdk-generated-v160-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2024/09-17-box-ai-extract.md
published_at: '2024-09-17'
---
# Metadata extraction with Box AI API now available in Beta

With its recent addition, Box AI API allows you to extract metadata from the provided input.
For example you can extract the financial information from an invoice, or patient data from a medical certificate.

> **Note**: Box AI API is currently a beta feature offered subject to Box’s Main Beta Agreement, and the available capabilities may change. Box AI API is available to all Enterprise Plus customers.

<!-- more -->

You have the following options:

[`POST /2.0/ai_extract`][1] endpoint allows you to extract metadata from the provided file in a freeform way.
This means you have more freedom in creating the prompt, and the metadata template is not required to run the request.
[`POST /2.0/ai_extract_structured`][2] endpoint allows you to extract metadata from the provided file using a [metadata template][3] or `fields` structure.


## Where to get support

Should you have any issues or need further guidance, please post a request to our [developer forum][4] for any help needed.

[1]: e://post-ai-extract
[2]: e://post-ai-extract-structured
[3]: https://support.box.com/hc/en-us/articles/360044194033-Customizing-Metadata-Templates
[4]: https://forum.box.com/