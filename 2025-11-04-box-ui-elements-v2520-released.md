---
applied_at: '2025-11-04'
applies_to:
  - frontend
  - ui-elements
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-ui-elements/releases/tag/v25.2.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2025-11-04-box-ui-elements-v2520-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2025-11-07-box-ui-elements-v2530-released
previous_page_id: 2025-10-23-new-ai-models
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2025/11-04-box-ui-elements-v2520-released.md
published_at: '2025-11-04'
---
# Box UI Elements `v25.2.0` released

# [25.2.0][1] (2025-11-04)

### Bug Fixes

* **classification:** Fix flaky ai-icon check ([#4323][2]) ([`0061f34`][3])
* **content-picker:** folder nav ([#4329][4]) ([`8053fa7`][5])
* **content-picker:** Upgrade blueprint to fix scrolling issue ([#4349][6]) ([`d0ce8a6`][7])
* **content-sharing:** Collaborator current user ([#4328][8]) ([`2e9dd6a`][9])
* **content-sharing:** null sharingServiceProps ([#4352][10]) ([`4ea0f83`][11])
* **content-sharing:** Shared link modal and collaborators ([#4360][12]) ([`76e94f1`][13])
* Fix modernization hook for ContentSharing v2 ([#4339][14]) ([`e0a67e0`][15])
* **i18n:** update translations ([#4321][16]) ([`4d89663`][17])
* **i18n:** update translations ([#4325][18]) ([`3e8eeea`][19])
* **i18n:** update translations ([#4330][20]) ([`bd0dd5f`][21])
* **i18n:** update translations ([#4333][22]) ([`b2a4e01`][23])
* **i18n:** update translations ([#4343][24]) ([`847557b`][25])
* **i18n:** update translations ([#4348][26]) ([`d4eae4b`][27])
* **i18n:** update translations ([#4353][28]) ([`e3f4cf9`][29])
* **i18n:** update translations ([#4355][30]) ([`094e633`][31])
* **i18n:** update translations ([#4357][32]) ([`a817d9c`][33])
* **i18n:** update translations ([#4358][34]) ([`33a5861`][35])
* **storybook:** update brand url ([#4337][36]) ([`c73965b`][37])
* **video-annotations:** fixing mentions not being properly parsed ([#4351][38]) ([`6bb2b15`][39])

### Features

* **api:** respect hidden collaborators ([#4346][40]) ([`955e6cb`][41])
* **content-explorer:** Disable selection while editing ([#4317][42]) ([`c08d9b5`][43])
* **content-sharing:** convert api response for collabs ([#4322][44]) ([`6937b60`][45])
* **content-sharing:** Create contact service getContactByEmail ([#4342][46]) ([`05b50cd`][47])
* **content-sharing:** Create contact service getContacts ([#4338][48]) ([`8ae6ccc`][49])
* **content-sharing:** Create contact service getContactsAvatarUrls ([#4345][50]) ([`6f9260b`][51])
* **content-sharing:** Create sharing service changeSharedLinkPermission ([#4332][52]) ([`e64a61b`][53])
* **content-sharing:** Create sharing service sendInvitations ([#4344][54]) ([`d497350`][55])
* **content-sharing:** Define sharing service for shared link and access ([#4340][56]) ([`2f7185d`][57])
* **content-sharing:** Handle error when fetch init data failed ([#4350][58]) ([`f0c9efd`][59])
* **content-sharing:** Render notification for sendInvitations ([#4347][60]) ([`051bd7c`][61])
* **content-sharing:** Sharing service updateSharedLink ([#4336][62]) ([`b39a482`][63])
* **deps:** upgrade package dependencies ([#4359][64]) ([`2f025e3`][65])

### Reverts

* "feat(content-sidebar): implement for custom sidebar panels (#… ([#4320][66]) ([`230f417`][67]), closes [#4239][68]

[1]: https://github.com/box/box-ui-elements/compare/v25.1.0...v25.2.0

[2]: https://github.com/box/box-ui-elements/issues/4323

[3]: https://github.com/box/box-ui-elements/commit/0061f34e9e7f4613f5b15f83eeccde3b518940cb

[4]: https://github.com/box/box-ui-elements/issues/4329

[5]: https://github.com/box/box-ui-elements/commit/8053fa70127203f5d70818228b70272d869965ff

[6]: https://github.com/box/box-ui-elements/issues/4349

[7]: https://github.com/box/box-ui-elements/commit/d0ce8a60056cc2272c96828219897189449fb6ad

[8]: https://github.com/box/box-ui-elements/issues/4328

[9]: https://github.com/box/box-ui-elements/commit/2e9dd6ab3ce63b974241566f3d1c24e401005e96

[10]: https://github.com/box/box-ui-elements/issues/4352

[11]: https://github.com/box/box-ui-elements/commit/4ea0f8376ff34a650b4ad16af91a39e1becbe4d7

[12]: https://github.com/box/box-ui-elements/issues/4360

[13]: https://github.com/box/box-ui-elements/commit/76e94f12fcc6a57809165bebb145fa57560afe56

[14]: https://github.com/box/box-ui-elements/issues/4339

[15]: https://github.com/box/box-ui-elements/commit/e0a67e0618fdbfa6f13cdb58fdba6a6c18a89c47

[16]: https://github.com/box/box-ui-elements/issues/4321

[17]: https://github.com/box/box-ui-elements/commit/4d89663b5481463353cb39f0828304ca1744a07c

[18]: https://github.com/box/box-ui-elements/issues/4325

[19]: https://github.com/box/box-ui-elements/commit/3e8eeea3d203d316b9e3f099f6de06759a56810b

[20]: https://github.com/box/box-ui-elements/issues/4330

[21]: https://github.com/box/box-ui-elements/commit/bd0dd5fa8778e77eb53785fb91b4ab0bdfcb2adf

[22]: https://github.com/box/box-ui-elements/issues/4333

[23]: https://github.com/box/box-ui-elements/commit/b2a4e01003f4b66faea00633e2bc2b3f4c7e13f7

[24]: https://github.com/box/box-ui-elements/issues/4343

[25]: https://github.com/box/box-ui-elements/commit/847557b53bf89ad591e4cb2116d3b0f267b8e757

[26]: https://github.com/box/box-ui-elements/issues/4348

[27]: https://github.com/box/box-ui-elements/commit/d4eae4bed33a7ae4e01565eb7809b2f579bd6066

[28]: https://github.com/box/box-ui-elements/issues/4353

[29]: https://github.com/box/box-ui-elements/commit/e3f4cf90382c2ef531df909c4d7202dfab1126d8

[30]: https://github.com/box/box-ui-elements/issues/4355

[31]: https://github.com/box/box-ui-elements/commit/094e633f76df79bb14d0f193f1a126d93e371324

[32]: https://github.com/box/box-ui-elements/issues/4357

[33]: https://github.com/box/box-ui-elements/commit/a817d9c616f9100f9f6fbe21dadb1cd578a45f39

[34]: https://github.com/box/box-ui-elements/issues/4358

[35]: https://github.com/box/box-ui-elements/commit/33a5861d34e914e037e3a35597b28956f69db6ab

[36]: https://github.com/box/box-ui-elements/issues/4337

[37]: https://github.com/box/box-ui-elements/commit/c73965b87c172bbe59adc456fe64a9d92dd7316d

[38]: https://github.com/box/box-ui-elements/issues/4351

[39]: https://github.com/box/box-ui-elements/commit/6bb2b15c5e0886861c73c1478a05fd30b3bf1832

[40]: https://github.com/box/box-ui-elements/issues/4346

[41]: https://github.com/box/box-ui-elements/commit/955e6cb06cd2d903c7c85e47f005f83c2818c890

[42]: https://github.com/box/box-ui-elements/issues/4317

[43]: https://github.com/box/box-ui-elements/commit/c08d9b5fdd8b20d95f747198c5bbac8204e97bf2

[44]: https://github.com/box/box-ui-elements/issues/4322

[45]: https://github.com/box/box-ui-elements/commit/6937b60ba181e2300eab98934a930d1456ce50e0

[46]: https://github.com/box/box-ui-elements/issues/4342

[47]: https://github.com/box/box-ui-elements/commit/05b50cdd62e7e7d4a59073cf152305fa7ff969fb

[48]: https://github.com/box/box-ui-elements/issues/4338

[49]: https://github.com/box/box-ui-elements/commit/8ae6cccf0c11b1ebc750934c5d23c42a99dae41d

[50]: https://github.com/box/box-ui-elements/issues/4345

[51]: https://github.com/box/box-ui-elements/commit/6f9260b8256aee8c710f24e3e10d5711c5abc19a

[52]: https://github.com/box/box-ui-elements/issues/4332

[53]: https://github.com/box/box-ui-elements/commit/e64a61bcb92f2de6b75e218ae99a55dde82835c4

[54]: https://github.com/box/box-ui-elements/issues/4344

[55]: https://github.com/box/box-ui-elements/commit/d49735065dd73c4a6e3a85ffa99f3b24537c4b48

[56]: https://github.com/box/box-ui-elements/issues/4340

[57]: https://github.com/box/box-ui-elements/commit/2f7185de2d10fe62dba8e8a4f2bc8235009e0b5e

[58]: https://github.com/box/box-ui-elements/issues/4350

[59]: https://github.com/box/box-ui-elements/commit/f0c9efd404abfe29b69bb28e7d3caeba367a9b92

[60]: https://github.com/box/box-ui-elements/issues/4347

[61]: https://github.com/box/box-ui-elements/commit/051bd7c5cccdaebd1d7bcda55de014c6db75f75f

[62]: https://github.com/box/box-ui-elements/issues/4336

[63]: https://github.com/box/box-ui-elements/commit/b39a4824486062c34378ce9a8fbbe34cd6042d3c

[64]: https://github.com/box/box-ui-elements/issues/4359

[65]: https://github.com/box/box-ui-elements/commit/2f025e3765c26bc206440458aaa632dddd36d83b

[66]: https://github.com/box/box-ui-elements/issues/4320

[67]: https://github.com/box/box-ui-elements/commit/230f417c9407c4bbe4705ec8f200c53f572a798a

[68]: https://github.com/box/box-ui-elements/issues/4239