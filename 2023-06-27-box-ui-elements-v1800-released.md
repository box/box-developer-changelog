---
applied_at: '2023-06-27'
applies_to:
  - ui-elements
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-ui-elements/releases/tag/v18.0.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2023-06-27-box-ui-elements-v1800-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2023-06-30-folder-items-api-update
previous_page_id: 2023-06-26-integration-mappings-guide
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2023/06-27-box-ui-elements-v1800-released.md
published_at: '2023-06-27'
---
# Box UI Elements `v18.0.0` released

# [18.0.0][1] (2023-06-27)

### Bug Fixes

* **ci:** remove blank space from release script var  ([#3355][2]) ([`2553ec1`][3])
* **content-explorer:** increase grid button style specificity ([#3328][4]) ([`b2c878a`][5])
* **content-explorer:** map called on undefined object ([#3341][6]) ([`da6ada0`][7])
* **content-picker:** trim name input when creating folder ([#3364][8]) ([`4629726`][9])
* **css:** remove IE7 CSS hack to fix Parcel support ([#3368][10]) ([`cbff7f1`][11])
* **i18n:** update translations ([#3323][12]) ([`c810383`][13])
* **i18n:** update translations ([#3344][14]) ([`755d64b`][15])
* **i18n:** update translations ([#3349][16]) ([`6ba9f27`][17])
* **i18n:** update translations ([#3351][18]) ([`4ff75e8`][19])
* **i18n:** update translations ([#3352][20]) ([`80c795a`][21])
* **i18n:** update translations ([#3359][22]) ([`c94305c`][23])
* **preview:** update thumbnail sidebar width ([#3363][24]) ([`33c8236`][25])
* **sharing:** remove message for shared links for Canvas files ([#3337][26]) ([`9558474`][27])
* align viewer permissions for shared links ([#3335][28]) ([`5d78c11`][29])
* update dist path and react version for elements test pages ([#3350][30]) ([`38ff124`][31])
* **pill-selector-dropdown:** pass `showAvatars` prop to `RoundPill` ([#3329][32]) ([`5632743`][33])
* **share-form:** map called on undefined object ([#3340][34]) ([`a24abb2`][35])
* **usm:** fix message for upgrade notice in share modal ([#3334][36]) ([`4a945ce`][37])

### chore

* **deps:** Bump `react-beautiful-dnd` to version 11.0.5 ([#3345][38]) ([`610c9d2`][39])
* **node:** Upgrade to node 18 ([#3347][40]) ([`cbb3840`][41])

### Features

* **cloud-game:** Adjust cloud game visual ([#3361][42]) ([`fe7fb51`][43])
* **pill-selector-dropdown:** allow setting error tooltip position ([#3330][44]) ([`8df1551`][45])
* **preview:** update default Preview SDK version ([#3366][46]) ([`aa7a875`][47])
* **security-controls:** Remove watermark learn more link ([#3353][48]) ([`379d055`][49])
* **threaded-replies:** reply to annotations ([#3331][50]) ([`4f65525`][51])
* **uaa-integration:** Integrate UAA into `ActivitySidebar` ([#3316][52]) ([`b81e976`][53])

### BREAKING CHANGES

* **deps:** You need to upgrade `react-beautiful-dnd` in the consuming project to version 11.0.5

* **node:** Upgrade to node 18

[1]: https://github.com/box/box-ui-elements/compare/v17.1.0...v18.0.0

[2]: https://github.com/box/box-ui-elements/issues/3355

[3]: https://github.com/box/box-ui-elements/commit/2553ec1

[4]: https://github.com/box/box-ui-elements/issues/3328

[5]: https://github.com/box/box-ui-elements/commit/b2c878a

[6]: https://github.com/box/box-ui-elements/issues/3341

[7]: https://github.com/box/box-ui-elements/commit/da6ada0

[8]: https://github.com/box/box-ui-elements/issues/3364

[9]: https://github.com/box/box-ui-elements/commit/4629726

[10]: https://github.com/box/box-ui-elements/issues/3368

[11]: https://github.com/box/box-ui-elements/commit/cbff7f1

[12]: https://github.com/box/box-ui-elements/issues/3323

[13]: https://github.com/box/box-ui-elements/commit/c810383

[14]: https://github.com/box/box-ui-elements/issues/3344

[15]: https://github.com/box/box-ui-elements/commit/755d64b

[16]: https://github.com/box/box-ui-elements/issues/3349

[17]: https://github.com/box/box-ui-elements/commit/6ba9f27

[18]: https://github.com/box/box-ui-elements/issues/3351

[19]: https://github.com/box/box-ui-elements/commit/4ff75e8

[20]: https://github.com/box/box-ui-elements/issues/3352

[21]: https://github.com/box/box-ui-elements/commit/80c795a

[22]: https://github.com/box/box-ui-elements/issues/3359

[23]: https://github.com/box/box-ui-elements/commit/c94305c

[24]: https://github.com/box/box-ui-elements/issues/3363

[25]: https://github.com/box/box-ui-elements/commit/33c8236

[26]: https://github.com/box/box-ui-elements/issues/3337

[27]: https://github.com/box/box-ui-elements/commit/9558474

[28]: https://github.com/box/box-ui-elements/issues/3335

[29]: https://github.com/box/box-ui-elements/commit/5d78c11

[30]: https://github.com/box/box-ui-elements/issues/3350

[31]: https://github.com/box/box-ui-elements/commit/38ff124

[32]: https://github.com/box/box-ui-elements/issues/3329

[33]: https://github.com/box/box-ui-elements/commit/5632743

[34]: https://github.com/box/box-ui-elements/issues/3340

[35]: https://github.com/box/box-ui-elements/commit/a24abb2

[36]: https://github.com/box/box-ui-elements/issues/3334

[37]: https://github.com/box/box-ui-elements/commit/4a945ce

[38]: https://github.com/box/box-ui-elements/issues/3345

[39]: https://github.com/box/box-ui-elements/commit/610c9d2

[40]: https://github.com/box/box-ui-elements/issues/3347

[41]: https://github.com/box/box-ui-elements/commit/cbb3840

[42]: https://github.com/box/box-ui-elements/issues/3361

[43]: https://github.com/box/box-ui-elements/commit/fe7fb51

[44]: https://github.com/box/box-ui-elements/issues/3330

[45]: https://github.com/box/box-ui-elements/commit/8df1551

[46]: https://github.com/box/box-ui-elements/issues/3366

[47]: https://github.com/box/box-ui-elements/commit/aa7a875

[48]: https://github.com/box/box-ui-elements/issues/3353

[49]: https://github.com/box/box-ui-elements/commit/379d055

[50]: https://github.com/box/box-ui-elements/issues/3331

[51]: https://github.com/box/box-ui-elements/commit/4f65525

[52]: https://github.com/box/box-ui-elements/issues/3316

[53]: https://github.com/box/box-ui-elements/commit/b81e976

[54]: https://github.com/users