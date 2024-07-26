---
applied_at: '2024-07-24'
applies_to:
  - sdks
  - dotnet
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-dotnet-sdk-gen/releases/tag/v1.0.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2024-07-24-box-dotnet-sdk-generated-v100-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2024-07-25-box-ai-overrides
previous_page_id: 2024-07-22-box-windows-sdk-v580-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2024/07-24-box-dotnet-sdk-generated-v100-released.md
published_at: '2024-07-24'
---
# Box Dotnet SDK Generated `v1.0.0` released

### Bug Fixes

* Extract `IntegrationMappingPartnerItemSlack` to `IntegrationMappingPartnerItemSlackUnion` (box/box-codegen[#530][1]) ([#183][2]) ([`3b1b634`][3])
* Improve chunked upload reliability (box/box-codegen[#529][4]) ([#182][5]) ([`e2a045f`][6])
* remove `init` from some of the required fields, `nullability` fixes (box/box-codegen[#532][7]) ([#190][8]) ([`c58f8af`][9])
* retry requests with status code of 202 and `retry-after` header (box/box-codegen[#533][10]) ([#191][11]) ([`abaafd7`][12])
* Update chunked upload (box/box-codegen[#523][13]) ([#177][14]) ([`9bcaf51`][15])

### New Features and Enhancements

* Add `is_active` parameter to user collaboration (box/box-openapi[#437][16]) ([#181][17]) ([`ec5f2d1`][18])
* simplify `namespaces` (box/box-codegen[#518][19]) ([#175][20]) ([`7831b09`][21])
* Support AI Agent API (box/box-codegen[#531][22]) ([#188][23]) ([`0c29645`][24])
* Support default interface properties, bump dependencies (box/box-codegen[#527][25]) ([#184][26]) ([`6b52792`][27])

[1]: https://github.com/box/box-codegen/issues/530

[2]: https://github.com/box/box-codegen/issues/183

[3]: https://github.com/box/box-codegen/commit/3b1b634904edc73af094aa8aa6e89d32b9e92aee

[4]: https://github.com/box/box-codegen/issues/529

[5]: https://github.com/box/box-codegen/issues/182

[6]: https://github.com/box/box-codegen/commit/e2a045f5d2afbe15be0284099ee2236f9c19cd73

[7]: https://github.com/box/box-codegen/issues/532

[8]: https://github.com/box/box-codegen/issues/190

[9]: https://github.com/box/box-codegen/commit/c58f8afa41fa4346eb3f2ced9e48695980e917e1

[10]: https://github.com/box/box-codegen/issues/533

[11]: https://github.com/box/box-codegen/issues/191

[12]: https://github.com/box/box-codegen/commit/abaafd70b982ae560430ff083b4bee1d533d5275

[13]: https://github.com/box/box-codegen/issues/523

[14]: https://github.com/box/box-codegen/issues/177

[15]: https://github.com/box/box-codegen/commit/9bcaf51e0bcd3134dea2b37277a24abaa483754a

[16]: https://github.com/box/box-codegen/issues/437

[17]: https://github.com/box/box-codegen/issues/181

[18]: https://github.com/box/box-codegen/commit/ec5f2d1d2cdba330f26a7db40042b70d3ec5bca2

[19]: https://github.com/box/box-codegen/issues/518

[20]: https://github.com/box/box-codegen/issues/175

[21]: https://github.com/box/box-codegen/commit/7831b098971616497cbc90a8c277fee9b2c42c39

[22]: https://github.com/box/box-codegen/issues/531

[23]: https://github.com/box/box-codegen/issues/188

[24]: https://github.com/box/box-codegen/commit/0c296458ef966e57c5aba2a8068034d4de820ef9

[25]: https://github.com/box/box-codegen/issues/527

[26]: https://github.com/box/box-codegen/issues/184

[27]: https://github.com/box/box-codegen/commit/6b52792057ab94f6bcc2f86b47e0ed5f25900adf