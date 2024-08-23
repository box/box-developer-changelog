---
applied_at: '2024-08-23'
applies_to:
  - sdks
  - dotnet
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-dotnet-sdk-gen/releases/tag/v1.1.0'
collapse: true
---

# Box Dotnet SDK Generated `v1.1.0` released

### Bug Fixes

* Add missing `item_upload` scope ([#201][1]) ([`483b055`][2])
* Add missing fields to Sign Template Signer and fix AI schema (box/box-openapi[#451][3]) ([#229][4]) ([`121f733`][5])
* Fix `IntegrationMapping` schemas (box/box-codegen[#551][6]) ([#226][7]) ([`3eca154`][8])
* Improve handling of network exceptions, handle big file upload (box/box-openapi[#444][9]) ([#222][10]) ([`75ccd07`][11])

### New Features and Enhancements

* Add new parameters to Box AI methods and introduce `AiResponseFull` variant (box/box-openapi[#446][12]) ([#224][13]) ([`6d205c4`][14])
* Include URL into `FetchOptions` (box/box-codegen[#549][15]) ([#231][16]) ([`41c45dc`][17])
* Parametrise chunked uploads endpoint urls (box/box-openapi[#444][9]) ([#208][18]) ([`feac37c`][19])
* Support `nullable` fields (box/box-codegen[#550][20]) ([#230][21]) ([`b9da32b`][22])

[1]: https://github.com/box/box-codegen/issues/201

[2]: https://github.com/box/box-codegen/commit/483b05586f8e45771e101d286fddebc564ff89bd

[3]: https://github.com/box/box-codegen/issues/451

[4]: https://github.com/box/box-codegen/issues/229

[5]: https://github.com/box/box-codegen/commit/121f733f52e945927125f4941206b1553202914d

[6]: https://github.com/box/box-codegen/issues/551

[7]: https://github.com/box/box-codegen/issues/226

[8]: https://github.com/box/box-codegen/commit/3eca15434b65bc0bb2421d36ec50691e7fe40e3b

[9]: https://github.com/box/box-codegen/issues/444

[10]: https://github.com/box/box-codegen/issues/222

[11]: https://github.com/box/box-codegen/commit/75ccd078e29015b865462ea1aaf0420d5e63d9cd

[12]: https://github.com/box/box-codegen/issues/446

[13]: https://github.com/box/box-codegen/issues/224

[14]: https://github.com/box/box-codegen/commit/6d205c4e28a657ad65ae704a7343a8670806f7f1

[15]: https://github.com/box/box-codegen/issues/549

[16]: https://github.com/box/box-codegen/issues/231

[17]: https://github.com/box/box-codegen/commit/41c45dcf6476b6cae7941c0952c375aa76ce42a1

[18]: https://github.com/box/box-codegen/issues/208

[19]: https://github.com/box/box-codegen/commit/feac37c34f99b5951731b605ef895f7f3b5de6dd

[20]: https://github.com/box/box-codegen/issues/550

[21]: https://github.com/box/box-codegen/issues/230

[22]: https://github.com/box/box-codegen/commit/b9da32b27f506618faa0119f725528555be14f60
