---
applied_at: '2025-01-27'
applies_to:
  - sdks
  - swift
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-swift-sdk-gen/releases/tag/0.6.0'
collapse: true
---

# Box Swift SDK Generated `0.6.0` released

### Bug Fixes

* Add missing token scope (box/box-openapi[#490][1]) ([#319][2]) ([`220134e`][3])
* Change signature of `readBufferFromFile` method (box/box-codegen[#575][4]) ([#250][5]) ([`21e08ff`][6])
* Correct types of `paged` and `thumb` properties in File representation (box/box-openapi[#503][7]) ([#347][8]) ([`58ff930`][9])
* fix `IntegrationMapping` schemas description (box/box-openapi[#463][10]) ([#257][11]) ([`794f315`][12])
* Fix invalid variant config for Integration mapping Slack (box/box-openapi[#492][13]) ([#322][14]) ([`97f4f94`][15])
* Fix order of fields in the `IntegrationMapping` schema (box/box-openapi[#497][16]) ([#335][17]) ([`cb28e6d`][18])
* remove unused parameter from `SignRequest` (box/box-openapi[#489][19]) ([#310][20]) ([`879897b`][21])
* Support status codes with no content (box/box-codegen[#604][22]) ([#284][23]) ([`5823d2b`][24])
* update client error schema to support schema errors (box/box-openapi[#467][25]) ([#259][26]) ([`40e2279`][27])
* update collaboration, metadata and collection resources (box/box-openapi[#483][28]) ([#286][29]) ([`f5b190a`][30])

### New Features and Enhancements

* Add `aiAgent` info to `AiResponse` (box/box-openapi[#485][31]) ([#304][32]) ([`b614a6f`][33])
* add AI LLM endpoint AWS `params` (box/box-openapi[#478][34]) ([#267][35]) ([`36ee37d`][36])
* Add Box Sign shared requests (box/box-openapi[#504][37]) ([#348][38]) ([`2f5e2f1`][39])
* Add support for replacing the network client implementation (box/box-codegen[#629][40]) ([#313][41]) ([`e08a117`][42])
* Expose method for making custom HTTP requests (box/box-codegen[#610][43]) ([#297][44]) ([`f7da2e3`][45])
* Support `ai/extract` and `ai/extract_structured` endpoints (box/box-codegen[#564][46]) ([#239][47]) ([`9b5d6e9`][48])
* Support Box Doc Gen API (box/box-codegen[#644][49]) ([#343][50]) ([`8ef2533`][51])
* Support get collection by ID endpoint (box/box-codegen[#595][52]) ([#276][53]) ([`112828f`][54])
* Support optional `userId` parameter for updating files, folders and web links (box/box-openapi[#488][55]) ([#308][56]) ([`8bd13d0`][57])
* update client error schema to support schema errors (box/box-openapi[#467][25]) ([#266][58]) ([`4bcf843`][59])
* Use `retrieveAuthorizationHeader` method in fetch (box/box-codegen[#565][60]) ([#235][61]) ([`f68e141`][62])

[1]: https://github.com/box/box-swift-sdk-gen/issues/490

[2]: https://github.com/box/box-swift-sdk-gen/issues/319

[3]: https://github.com/box/box-swift-sdk-gen/commit/220134efb4ba42628de51561749ae218707d5121

[4]: https://github.com/box/box-swift-sdk-gen/issues/575

[5]: https://github.com/box/box-swift-sdk-gen/issues/250

[6]: https://github.com/box/box-swift-sdk-gen/commit/21e08ff673da44c0dfe502c5fbbc14e382ef368b

[7]: https://github.com/box/box-swift-sdk-gen/issues/503

[8]: https://github.com/box/box-swift-sdk-gen/issues/347

[9]: https://github.com/box/box-swift-sdk-gen/commit/58ff9305b34306ca506b08d43b72f95349322172

[10]: https://github.com/box/box-swift-sdk-gen/issues/463

[11]: https://github.com/box/box-swift-sdk-gen/issues/257

[12]: https://github.com/box/box-swift-sdk-gen/commit/794f31548687b4e78e6f96b1a922e7e32dce0b9b

[13]: https://github.com/box/box-swift-sdk-gen/issues/492

[14]: https://github.com/box/box-swift-sdk-gen/issues/322

[15]: https://github.com/box/box-swift-sdk-gen/commit/97f4f944555997b5e09afd66eb9c07008fae8a94

[16]: https://github.com/box/box-swift-sdk-gen/issues/497

[17]: https://github.com/box/box-swift-sdk-gen/issues/335

[18]: https://github.com/box/box-swift-sdk-gen/commit/cb28e6db015d84b59e6dccf6a2fa90c26de20efa

[19]: https://github.com/box/box-swift-sdk-gen/issues/489

[20]: https://github.com/box/box-swift-sdk-gen/issues/310

[21]: https://github.com/box/box-swift-sdk-gen/commit/879897bec80669a46effc2528ec19ce15d7df3b1

[22]: https://github.com/box/box-swift-sdk-gen/issues/604

[23]: https://github.com/box/box-swift-sdk-gen/issues/284

[24]: https://github.com/box/box-swift-sdk-gen/commit/5823d2b1591cb1c817e36a43a78cb41498fcf1b4

[25]: https://github.com/box/box-swift-sdk-gen/issues/467

[26]: https://github.com/box/box-swift-sdk-gen/issues/259

[27]: https://github.com/box/box-swift-sdk-gen/commit/40e2279e222df4a88278125a6a9a13ee4605cd69

[28]: https://github.com/box/box-swift-sdk-gen/issues/483

[29]: https://github.com/box/box-swift-sdk-gen/issues/286

[30]: https://github.com/box/box-swift-sdk-gen/commit/f5b190a648f0c567abe688bd111a5b7c779a036c

[31]: https://github.com/box/box-swift-sdk-gen/issues/485

[32]: https://github.com/box/box-swift-sdk-gen/issues/304

[33]: https://github.com/box/box-swift-sdk-gen/commit/b614a6fe72689ed56947b05cac26a5b62104a621

[34]: https://github.com/box/box-swift-sdk-gen/issues/478

[35]: https://github.com/box/box-swift-sdk-gen/issues/267

[36]: https://github.com/box/box-swift-sdk-gen/commit/36ee37d96ce0a50292036c02e4663fd124544736

[37]: https://github.com/box/box-swift-sdk-gen/issues/504

[38]: https://github.com/box/box-swift-sdk-gen/issues/348

[39]: https://github.com/box/box-swift-sdk-gen/commit/2f5e2f150d45f833fda2ef6e61e6c946ed0c36ad

[40]: https://github.com/box/box-swift-sdk-gen/issues/629

[41]: https://github.com/box/box-swift-sdk-gen/issues/313

[42]: https://github.com/box/box-swift-sdk-gen/commit/e08a117c34e782b83a1fdd7a471938351cd00c6e

[43]: https://github.com/box/box-swift-sdk-gen/issues/610

[44]: https://github.com/box/box-swift-sdk-gen/issues/297

[45]: https://github.com/box/box-swift-sdk-gen/commit/f7da2e31f8e49cdd0b0e62e798d7d93bcea6c50b

[46]: https://github.com/box/box-swift-sdk-gen/issues/564

[47]: https://github.com/box/box-swift-sdk-gen/issues/239

[48]: https://github.com/box/box-swift-sdk-gen/commit/9b5d6e9f31cbcc2411f34be1572ec91c7e4808cf

[49]: https://github.com/box/box-swift-sdk-gen/issues/644

[50]: https://github.com/box/box-swift-sdk-gen/issues/343

[51]: https://github.com/box/box-swift-sdk-gen/commit/8ef25335ecba4fcf2243c8043edc7edc46dbe932

[52]: https://github.com/box/box-swift-sdk-gen/issues/595

[53]: https://github.com/box/box-swift-sdk-gen/issues/276

[54]: https://github.com/box/box-swift-sdk-gen/commit/112828fc499c3148c385dde6adb4fcfe5b791495

[55]: https://github.com/box/box-swift-sdk-gen/issues/488

[56]: https://github.com/box/box-swift-sdk-gen/issues/308

[57]: https://github.com/box/box-swift-sdk-gen/commit/8bd13d024e7f74a15c3377ddfd54bfcdbec71e2b

[58]: https://github.com/box/box-swift-sdk-gen/issues/266

[59]: https://github.com/box/box-swift-sdk-gen/commit/4bcf8439b03e8f3726e51f210bfa71ed3d8d6793

[60]: https://github.com/box/box-swift-sdk-gen/issues/565

[61]: https://github.com/box/box-swift-sdk-gen/issues/235

[62]: https://github.com/box/box-swift-sdk-gen/commit/f68e14174476a40b959280c391475ac8fef644e1
