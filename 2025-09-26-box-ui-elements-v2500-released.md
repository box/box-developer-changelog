---
applied_at: '2025-09-26'
applies_to:
  - frontend
  - ui-elements
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-ui-elements/releases/tag/v25.0.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2025-09-26-box-ui-elements-v2500-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2025-09-29-box-cli-v431-released
previous_page_id: 2025-09-24-metadata-view-enhancements
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2025/09-26-box-ui-elements-v2500-released.md
published_at: '2025-09-26'
fullyTranslated: true
---
# Box UI Elements `v25.0.0`のリリース

# [25.0.0][1] (2025-09-26)

### バグ修正

* **classification:** use `AsyncLoad` for `AppliedByAiClassificationReason` ([#4274][2]) ([`b80df38`][3])
* **common:** Remove `findDOMNode` from `makeDroppable` (BREAKING CHANGE) ([#4276][4]) ([`c3bcad3`][5])
* **i18n:** update translations ([#4269][6]) ([`d27c054`][7])
* **i18n:** update translations ([#4272][8]) ([`9f3520b`][9])
* **i18n:** update translations ([#4277][10]) ([`23b27f6`][11])
* **i18n:** update translations ([#4280][12]) ([`7c633b8`][13])
* **i18n:** update translations ([#4289][14]) ([`8453128`][15])
* **metadata-view:** show error state when exception is thrown ([#4270][16]) ([`246f2df`][17])
* **metadataeditor:** portal dropdown to preview container ([#4273][18]) ([`540a957`][19])

### 機能

* **classification:** `AppliedByAiClassificationReason` card to support empty reason ([#4279][20]) ([`cb04234`][21])
* **classification:** support AI reasoning and new applied by labels ([#4271][22]) ([`681bace`][23])
* **content-sharing:** Create `ContentSharingV2` component ([#4282][24]) ([`ef49c77`][25])
* **metadata-view:** bump metadata view version ([#4287][26]) ([`f5887d7`][27])
* **metadata-view:** update blueprint web version ([#4288][28]) ([`6d599a3`][29])
* **timestamped-comments:** enable timestamp handling in sidebar ([#4275][30]) ([`7f9defa`][31]), closes [#4226][32] [#4230][33] [#4274][2]
* **timestamped-comments:** timestamped comments editor updates ([#4244][34]) ([`6e1bd80`][35]), closes [#4226][32] [#4230][33]

### 重大な変更

* **common:** Wrapped component of `makeDroppable` must have ref prop, for example with `React.forwardRef`

* fix: Clean up tests

[1]: https://github.com/box/box-ui-elements/compare/v24.0.0...v25.0.0

[2]: https://github.com/box/box-ui-elements/issues/4274

[3]: https://github.com/box/box-ui-elements/commit/b80df3853c94a93fecac1d242bea11fce51cef00

[4]: https://github.com/box/box-ui-elements/issues/4276

[5]: https://github.com/box/box-ui-elements/commit/c3bcad39d81692c1d831e090ff3664c07e0ae987

[6]: https://github.com/box/box-ui-elements/issues/4269

[7]: https://github.com/box/box-ui-elements/commit/d27c054e985386fcce723c8929a33eb5c0f1500f

[8]: https://github.com/box/box-ui-elements/issues/4272

[9]: https://github.com/box/box-ui-elements/commit/9f3520b8f63aa7445a83ece2cf0e12610484c506

[10]: https://github.com/box/box-ui-elements/issues/4277

[11]: https://github.com/box/box-ui-elements/commit/23b27f6ef48d4928a7f685ec084174f4b0e7e322

[12]: https://github.com/box/box-ui-elements/issues/4280

[13]: https://github.com/box/box-ui-elements/commit/7c633b85f7c75e0948e7d38db0417f40e7c79f7c

[14]: https://github.com/box/box-ui-elements/issues/4289

[15]: https://github.com/box/box-ui-elements/commit/8453128761a7d239f24654d59992ab38ac9ca501

[16]: https://github.com/box/box-ui-elements/issues/4270

[17]: https://github.com/box/box-ui-elements/commit/246f2dfb3d12f1805ffac279eeceb1f9d59daef8

[18]: https://github.com/box/box-ui-elements/issues/4273

[19]: https://github.com/box/box-ui-elements/commit/540a9575b3e16b23a8affb7ec12dad0ad7406735

[20]: https://github.com/box/box-ui-elements/issues/4279

[21]: https://github.com/box/box-ui-elements/commit/cb04234576cfc65c61402035c03d4a026a5eb08b

[22]: https://github.com/box/box-ui-elements/issues/4271

[23]: https://github.com/box/box-ui-elements/commit/681bace22e3b2c7cc381c73855c1d1dd6b4f1548

[24]: https://github.com/box/box-ui-elements/issues/4282

[25]: https://github.com/box/box-ui-elements/commit/ef49c773b63fb240c115308c48030f46d46971a5

[26]: https://github.com/box/box-ui-elements/issues/4287

[27]: https://github.com/box/box-ui-elements/commit/f5887d74f689dd79e41ca2979d3a2430fc8b8bda

[28]: https://github.com/box/box-ui-elements/issues/4288

[29]: https://github.com/box/box-ui-elements/commit/6d599a3f7a3cc7f8f9f7a724e1d5a7b29522351a

[30]: https://github.com/box/box-ui-elements/issues/4275

[31]: https://github.com/box/box-ui-elements/commit/7f9defa1dae1faff823b414b708f164913aa701e

[32]: https://github.com/box/box-ui-elements/issues/4226

[33]: https://github.com/box/box-ui-elements/issues/4230

[34]: https://github.com/box/box-ui-elements/issues/4244

[35]: https://github.com/box/box-ui-elements/commit/6e1bd8060212d35529fcb0dcc4b7abd77470941d
