---
applied_at: '2024-08-22'
applies_to:
  - sdks
  - swift
is_impactful: false
is_new_feature: false
release_source_url: 'https://github.com/box/box-swift-sdk-gen/releases/tag/0.3.1'
collapse: true
---

# Box Swift SDK Generated `0.3.1` released

### Bug Fixes

* Extract `IntegrationMappingPartnerItemSlack` to `IntegrationMappingPartnerItemSlackUnion` (box/box-codegen[#530][1]) ([#165][2]) ([`d51df9a`][3])
* Improve chunked upload reliability (box/box-codegen[#529][4]) ([#164][5]) ([`5d87629`][6])
* Retry requests with 202 status code and `Retry-After` header (box/box-codegen[#538][7]) ([#177][8]) ([`64f27b3`][9])

### New Features and Enhancements

* Add `is_active` parameter to user collaboration (box/box-openapi[#437][10]) ([#163][11]) ([`5f726bb`][12])
* Add new parameters to Box AI methods and introduce `AiResponseFull` variant (box/box-openapi[#446][13]) ([#201][14]) ([`7c09090`][15])
* Add support for Swift 5.6 (box/box-codegen[#541][16]) ([#180][17]) ([`04b7020`][18])
* parametrize chunked uploads endpoint URLs (box/box-openapi[#444][19]) ([#192][20]) ([`ea18f9e`][21])
* Support AI Agent API (box/box-codegen[#531][22]) ([#170][23]) ([`fc9a00b`][24])

[1]: https://github.com/box/box-codegen/issues/530

[2]: https://github.com/box/box-codegen/issues/165

[3]: https://github.com/box/box-codegen/commit/d51df9a19d06db886358e94ce70551c283e5cc45

[4]: https://github.com/box/box-codegen/issues/529

[5]: https://github.com/box/box-codegen/issues/164

[6]: https://github.com/box/box-codegen/commit/5d876299aa88b18accde22379950780bff100da0

[7]: https://github.com/box/box-codegen/issues/538

[8]: https://github.com/box/box-codegen/issues/177

[9]: https://github.com/box/box-codegen/commit/64f27b3858725adaa53a10a6e8df8c0bcfe73fea

[10]: https://github.com/box/box-codegen/issues/437

[11]: https://github.com/box/box-codegen/issues/163

[12]: https://github.com/box/box-codegen/commit/5f726bbffd682934ab5731e1620489b1ee54e5a1

[13]: https://github.com/box/box-codegen/issues/446

[14]: https://github.com/box/box-codegen/issues/201

[15]: https://github.com/box/box-codegen/commit/7c0909032733742cb5a019c897910ced2e9d6788

[16]: https://github.com/box/box-codegen/issues/541

[17]: https://github.com/box/box-codegen/issues/180

[18]: https://github.com/box/box-codegen/commit/04b7020f1220f73ad4637e6033d5539c56a64fcd

[19]: https://github.com/box/box-codegen/issues/444

[20]: https://github.com/box/box-codegen/issues/192

[21]: https://github.com/box/box-codegen/commit/ea18f9e5eb6558edb29ff378bceb5528ccd4fcfb

[22]: https://github.com/box/box-codegen/issues/531

[23]: https://github.com/box/box-codegen/issues/170

[24]: https://github.com/box/box-codegen/commit/fc9a00bdcaffeaccfd87caad73fe666fb46c36ab
