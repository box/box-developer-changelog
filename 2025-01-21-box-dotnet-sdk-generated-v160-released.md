---
applied_at: '2025-01-21'
applies_to:
  - sdks
  - dotnet
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-dotnet-sdk-gen/releases/tag/v1.6.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2025-01-21-box-dotnet-sdk-generated-v160-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2025-01-21-box-python-sdk-generated-v1100-released
previous_page_id: 2025-01-13-box-doc-gen
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2025/01-21-box-dotnet-sdk-generated-v160-released.md
published_at: '2025-01-21'
fullyTranslated: true
---
# Box Dotnet SDK Generated `v1.6.0`のリリース

### バグ修正

* Add missing token scope (box/box-openapi[#490][1]) ([#353][2]) ([`d41e1c8`][3])
* Fix incorrect variant config for Integration mapping Slack (box/box-openapi[#492][4]) ([#356][5]) ([`8320fb7`][6])
* order of fields in the `IntegrationMapping` schema (box/box-openapi[#497][7]) ([#370][8]) ([`3361ad1`][9])
* unused parameter from `SignRequest` (box/box-openapi[#489][10]) ([#343][11]) ([`5d88a51`][12])

### 新機能と機能強化

* Add `aiAgent` info to `AiResponse` (box/box-openapi[#485][13]) ([#336][14]) ([`cbf91fc`][15])
* Add support for replacing the network client implementation (box/box-codegen[#629][16]) ([#347][17]) ([`29d904e`][18])
* Support Box Doc Gen API (box/box-codegen[#644][19]) ([#378][20]) ([`5cd0fde`][21])
* Support getting file download URL and file thumbnail URL (box/box-codegen[#642][22]) ([#374][23]) ([`76b1513`][24])
* Support optional `userId` parameter for updating files, folders and web links (box/box-openapi[#488][25]) ([#340][26]) ([`fd1c597`][27])

[1]: https://github.com/box/box-dotnet-sdk-gen/issues/490

[2]: https://github.com/box/box-dotnet-sdk-gen/issues/353

[3]: https://github.com/box/box-dotnet-sdk-gen/commit/d41e1c8c3195a08850f3217fe747e9751a979c76

[4]: https://github.com/box/box-dotnet-sdk-gen/issues/492

[5]: https://github.com/box/box-dotnet-sdk-gen/issues/356

[6]: https://github.com/box/box-dotnet-sdk-gen/commit/8320fb7da8449a8ae9965bd3496523a0f3bfe5af

[7]: https://github.com/box/box-dotnet-sdk-gen/issues/497

[8]: https://github.com/box/box-dotnet-sdk-gen/issues/370

[9]: https://github.com/box/box-dotnet-sdk-gen/commit/3361ad1833670f9e99902b2206112592f7272ab8

[10]: https://github.com/box/box-dotnet-sdk-gen/issues/489

[11]: https://github.com/box/box-dotnet-sdk-gen/issues/343

[12]: https://github.com/box/box-dotnet-sdk-gen/commit/5d88a5176489f82057a93bd5dc119e4ae3afdcd7

[13]: https://github.com/box/box-dotnet-sdk-gen/issues/485

[14]: https://github.com/box/box-dotnet-sdk-gen/issues/336

[15]: https://github.com/box/box-dotnet-sdk-gen/commit/cbf91fc23012588f0f4175a713d562738818218e

[16]: https://github.com/box/box-dotnet-sdk-gen/issues/629

[17]: https://github.com/box/box-dotnet-sdk-gen/issues/347

[18]: https://github.com/box/box-dotnet-sdk-gen/commit/29d904e72fd9c4511183ba35454a82ff9c2d7358

[19]: https://github.com/box/box-dotnet-sdk-gen/issues/644

[20]: https://github.com/box/box-dotnet-sdk-gen/issues/378

[21]: https://github.com/box/box-dotnet-sdk-gen/commit/5cd0fdefb6a976fb8904beb08752f3e7dbb7428b

[22]: https://github.com/box/box-dotnet-sdk-gen/issues/642

[23]: https://github.com/box/box-dotnet-sdk-gen/issues/374

[24]: https://github.com/box/box-dotnet-sdk-gen/commit/76b151371f405940eef5ef34fb00809c8f1d8f35

[25]: https://github.com/box/box-dotnet-sdk-gen/issues/488

[26]: https://github.com/box/box-dotnet-sdk-gen/issues/340

[27]: https://github.com/box/box-dotnet-sdk-gen/commit/fd1c59739c5361ec4462d2597f504fa3cff5be17
