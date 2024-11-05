---
applied_at: '2024-10-31'
applies_to:
  - sdks
  - dotnet
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-dotnet-sdk-gen/releases/tag/v1.4.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2024-10-31-box-dotnet-sdk-generated-v140-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2024-11-04-box-python-sdk-generated-v170-released
previous_page_id: 2024-10-30-box-python-sdk-generated-v160-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2024/10-31-box-dotnet-sdk-generated-v140-released.md
published_at: '2024-10-31'
fullyTranslated: true
---
# Box Dotnet SDK Generated `v1.4.0`のリリース

### バグ修正

* Change `QueryParams` type in `MetadataQuery` from `Dictionary<string, string>` to `Dictionary<string, object>` (box/box-openapi[#479][1]) ([#298][2]) ([`656b495`][3])
* Fix conversion to `RSAKey` (box/box-codegen[#591][4]) ([#297][5]) ([`068b1f7`][6])

### 新機能と機能強化

* add AI LLM endpoint AWS `params`. Change the type from `AiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi` to `AiLlmEndpointParamsAwsOrAiLlmEndpointParamsGoogleOrAiLlmEndpointParamsOpenAi` (box/box-openapi[#478][7]) ([#291][8]) ([`dcb8a20`][9])

[1]: https://github.com/box/box-codegen/issues/479

[2]: https://github.com/box/box-codegen/issues/298

[3]: https://github.com/box/box-codegen/commit/656b495bea779879bb82b2cda0cca5a30a8ad8ca

[4]: https://github.com/box/box-codegen/issues/591

[5]: https://github.com/box/box-codegen/issues/297

[6]: https://github.com/box/box-codegen/commit/068b1f7b3ea3c62647e03e0e17176bde049949db

[7]: https://github.com/box/box-codegen/issues/478

[8]: https://github.com/box/box-codegen/issues/291

[9]: https://github.com/box/box-codegen/commit/dcb8a201577be08b644266c157db45cd6797c71c
