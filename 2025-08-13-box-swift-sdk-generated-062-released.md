---
applied_at: '2025-08-13'
applies_to:
  - sdks
  - swift
is_impactful: false
is_new_feature: false
release_source_url: 'https://github.com/box/box-swift-sdk-gen/releases/tag/0.6.2'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2025-08-13-box-swift-sdk-generated-062-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2025-08-15-external-users-bulk-delete
previous_page_id: 2025-08-12-box-ui-elements-v2340-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2025/08-13-box-swift-sdk-generated-062-released.md
published_at: '2025-08-13'
---
# Box Swift SDK Generated `0.6.2` released

### Bug Fixes

* Fix downscope token to use `retrieveToken` method for token retrieval (box/box-codegen[#731][1]) ([#459][2]) ([`8992b32`][3])
* Fix parsing `Date` into query parameters (box/box-codegen[#729][4]) ([#449][5]) ([`1a95d0c`][6])
* Specify events `next_stream_position` property type as `int64` (box/box-openapi[#535][7]) ([#502][8]) ([`795fe1c`][9])

### New Features and Enhancements

* Add `downloadZip` method (box/box-codegen[#765][10]) ([#505][11]) ([`c03589d`][12])
* Add `rawData` property (box/box-codegen[#724][13]) ([#445][14]) ([`77405ad`][15])
* add AI agents warnings; allow for more types of metadata value (box/box-openapi[#520][16]) ([#435][17]) ([`af1dc12`][18])
* add AI spreadsheet processor (box/box-openapi[#533][19]) ([#484][20]) ([`14726d1`][21])
* Add Archive Public API (box/box-openapi[#540][22]) ([#509][23]) ([`8266386`][24])
* Add CI for swift (box/box-codegen[#755][25]) ([#494][26]) ([`76a3337`][27])
* add hubs API beta endpoints (box/box-openapi[#531][28]) ([#476][29]) ([`a05aa5f`][30])
* Add new Hubs APIs and Hubs items API (box/box-openapi[#538][31]) ([#503][32]) ([`9058c45`][33])
* Add new schema for `Metadata Error` (box/box-openapi[#539][34]) ([#504][35]) ([`2e9ecf9`][36])
* Add security settings properties on sign template schema (box/box-openapi[#518][37]) ([#426][38]) ([`a741a73`][39])
* add Shield Lists APIs (box/box-openapi[#528][40]) ([#462][41]) ([`b5993b0`][42])
* Add support for `additionalProperties` with Any value (box/box-codegen[#711][43]) ([#427][44]) ([`7fbf706`][45])
* Add support for `nullable` fields (box/box-codegen[#700][46]) ([#420][47]) ([`5d0ff41`][48])
* add support of IBM models to AI API (box/box-openapi[#522][49]) ([#436][50]) ([`0717222`][51])
* Expose `makeRequest` method in `BoxClient` (box/box-codegen[#687][52]) ([#408][53]) ([`7ba7d09`][54])
* Improve AI integration test (box/box-codegen[#758][55]) ([#499][56]) ([`3c7e717`][57])
* Sanitize response body when throwing `BoxAPIError` (box/box-codegen[#760][58]) ([#498][59]) ([`2afc793`][60])
* Support `getDownloadUrl` in Swift (box/box-codegen[#751][61]) ([#491][62]) ([`5916ede`][63])
* Support new tools in AI Studio (box/box-openapi[#534][64]) ([#485][65]) ([`e793d7b`][66])
* Support sensitive data sanitization in errors (box/box-codegen[#695][67]) ([#415][68]) ([`330ca9a`][69])
* Update legal holds and AI models (box/box-openapi[#526][70]) ([#460][71]) ([`caa848a`][72])

[1]: https://github.com/box/box-swift-sdk-gen/issues/731

[2]: https://github.com/box/box-swift-sdk-gen/issues/459

[3]: https://github.com/box/box-swift-sdk-gen/commit/8992b32e9dd058fc77b4d68418da81b162aea315

[4]: https://github.com/box/box-swift-sdk-gen/issues/729

[5]: https://github.com/box/box-swift-sdk-gen/issues/449

[6]: https://github.com/box/box-swift-sdk-gen/commit/1a95d0c80e0bd29dc1b467e7e98e6f5e6196ddfb

[7]: https://github.com/box/box-swift-sdk-gen/issues/535

[8]: https://github.com/box/box-swift-sdk-gen/issues/502

[9]: https://github.com/box/box-swift-sdk-gen/commit/795fe1c7f0aa6074145b675fce4dd8e1432b0a64

[10]: https://github.com/box/box-swift-sdk-gen/issues/765

[11]: https://github.com/box/box-swift-sdk-gen/issues/505

[12]: https://github.com/box/box-swift-sdk-gen/commit/c03589d6add3ee6d548f10b5380031cd38284e42

[13]: https://github.com/box/box-swift-sdk-gen/issues/724

[14]: https://github.com/box/box-swift-sdk-gen/issues/445

[15]: https://github.com/box/box-swift-sdk-gen/commit/77405adc986adb8a1ce3bcff051ea8c481dbfd9d

[16]: https://github.com/box/box-swift-sdk-gen/issues/520

[17]: https://github.com/box/box-swift-sdk-gen/issues/435

[18]: https://github.com/box/box-swift-sdk-gen/commit/af1dc12763f9a84691573fd3ba8307925fc017d6

[19]: https://github.com/box/box-swift-sdk-gen/issues/533

[20]: https://github.com/box/box-swift-sdk-gen/issues/484

[21]: https://github.com/box/box-swift-sdk-gen/commit/14726d1952f5ddb2414f723a0b18fa5226269a64

[22]: https://github.com/box/box-swift-sdk-gen/issues/540

[23]: https://github.com/box/box-swift-sdk-gen/issues/509

[24]: https://github.com/box/box-swift-sdk-gen/commit/82663868c61a31f43b229c6f24e29737913662a0

[25]: https://github.com/box/box-swift-sdk-gen/issues/755

[26]: https://github.com/box/box-swift-sdk-gen/issues/494

[27]: https://github.com/box/box-swift-sdk-gen/commit/76a3337bed9bfc4629ec7dcb9af86bec4aa710f3

[28]: https://github.com/box/box-swift-sdk-gen/issues/531

[29]: https://github.com/box/box-swift-sdk-gen/issues/476

[30]: https://github.com/box/box-swift-sdk-gen/commit/a05aa5fe2aaade1d7bdd7acb90c82fcb3a3bf262

[31]: https://github.com/box/box-swift-sdk-gen/issues/538

[32]: https://github.com/box/box-swift-sdk-gen/issues/503

[33]: https://github.com/box/box-swift-sdk-gen/commit/9058c45c0bcd3e7f294a1bedac151637001aec63

[34]: https://github.com/box/box-swift-sdk-gen/issues/539

[35]: https://github.com/box/box-swift-sdk-gen/issues/504

[36]: https://github.com/box/box-swift-sdk-gen/commit/2e9ecf9477854656958b715674b8aa0413508d31

[37]: https://github.com/box/box-swift-sdk-gen/issues/518

[38]: https://github.com/box/box-swift-sdk-gen/issues/426

[39]: https://github.com/box/box-swift-sdk-gen/commit/a741a7305e2b2d174bc325e35ea9b77548a38095

[40]: https://github.com/box/box-swift-sdk-gen/issues/528

[41]: https://github.com/box/box-swift-sdk-gen/issues/462

[42]: https://github.com/box/box-swift-sdk-gen/commit/b5993b096b4fceb77301f76eba1c17225b2844d6

[43]: https://github.com/box/box-swift-sdk-gen/issues/711

[44]: https://github.com/box/box-swift-sdk-gen/issues/427

[45]: https://github.com/box/box-swift-sdk-gen/commit/7fbf7069eff66afddc328066f8aeb7321b249eea

[46]: https://github.com/box/box-swift-sdk-gen/issues/700

[47]: https://github.com/box/box-swift-sdk-gen/issues/420

[48]: https://github.com/box/box-swift-sdk-gen/commit/5d0ff414b325db92db44c580cebb5636ab33553f

[49]: https://github.com/box/box-swift-sdk-gen/issues/522

[50]: https://github.com/box/box-swift-sdk-gen/issues/436

[51]: https://github.com/box/box-swift-sdk-gen/commit/071722246402e0ec2439ae1e5e3d26bca45a049f

[52]: https://github.com/box/box-swift-sdk-gen/issues/687

[53]: https://github.com/box/box-swift-sdk-gen/issues/408

[54]: https://github.com/box/box-swift-sdk-gen/commit/7ba7d091b0c832276daa571fad2a7db75469676d

[55]: https://github.com/box/box-swift-sdk-gen/issues/758

[56]: https://github.com/box/box-swift-sdk-gen/issues/499

[57]: https://github.com/box/box-swift-sdk-gen/commit/3c7e717c6ca076caf1a963b3f60d3bd88f8c4bff

[58]: https://github.com/box/box-swift-sdk-gen/issues/760

[59]: https://github.com/box/box-swift-sdk-gen/issues/498

[60]: https://github.com/box/box-swift-sdk-gen/commit/2afc7936dac87dee22adff3e22def92913f5854c

[61]: https://github.com/box/box-swift-sdk-gen/issues/751

[62]: https://github.com/box/box-swift-sdk-gen/issues/491

[63]: https://github.com/box/box-swift-sdk-gen/commit/5916ede7454a1926de195e77b9a158c2af0fae2b

[64]: https://github.com/box/box-swift-sdk-gen/issues/534

[65]: https://github.com/box/box-swift-sdk-gen/issues/485

[66]: https://github.com/box/box-swift-sdk-gen/commit/e793d7b3a03e8d58ce6adb63a894a0330ae154d1

[67]: https://github.com/box/box-swift-sdk-gen/issues/695

[68]: https://github.com/box/box-swift-sdk-gen/issues/415

[69]: https://github.com/box/box-swift-sdk-gen/commit/330ca9ad17cbc79c93ffb114fd56c09a41f92694

[70]: https://github.com/box/box-swift-sdk-gen/issues/526

[71]: https://github.com/box/box-swift-sdk-gen/issues/460

[72]: https://github.com/box/box-swift-sdk-gen/commit/caa848ac977c7fedeacbe018339d27b9d948bb1e