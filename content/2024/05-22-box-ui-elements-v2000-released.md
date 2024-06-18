---
applied_at: '2024-05-22'
applies_to:
  - frontend
  - ui-elements
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-ui-elements/releases/tag/v20.0.0'
collapse: true
---

# Box UI Elements `v20.0.0` released

# [20.0.0][1] (2024-05-22)

### Bug Fixes

* **content-answers:** scope styles to content answers modal ([#3548][2]) ([`97d49ff`][3])
* **fonts:** update common fonts version ([#3499][4]) ([`870de6d`][5])
* **i18n:** update translations ([#3508][6]) ([`785be2a`][7])
* **i18n:** update translations ([#3509][8]) ([`85ebf26`][9])
* **i18n:** update translations ([#3516][10]) ([`cb470e9`][11])
* **i18n:** update translations ([#3525][12]) ([`ffb447c`][13])
* **i18n:** update translations ([#3528][14]) ([`1cf016f`][15])
* **i18n:** update translations ([#3534][16]) ([`36e95a9`][17])
* **i18n:** update translations ([#3535][18]) ([`c8d03c3`][19])
* **i18n:** update translations ([#3538][20]) ([`cde1b88`][21])
* **i18n:** update translations ([#3540][22]) ([`a7043e6`][23])
* **i18n:** update translations ([#3541][24]) ([`3ced4a5`][25])
* **`multiput-upload`:** improve upload performance ([#3512][26]) ([`2583e94`][27])
* **`npm`:** add chromatic config to `npmignore` ([#3546][28]) ([`e2e6731`][29])
* **preview:** Update default preview version to `2.106.0` ([#3555][30]) ([`f07d616`][31])
* **`react-intl`:** mock date in relative time unit tests ([#3518][32]) ([`3ce175b`][33])
* **shared-link-settings-modal:** correct expiration date formatting ([#3545][34]) ([`e47892f`][35])
* **upload:** improve `multiput` upload performance 2 ([#3517][36]) ([`2440746`][37])
* **usm:** fix item type hubs ([#3532][38]) ([`0d1e9cf`][39])
* **usm:** hide link description when upsell shows ([#3553][40]) ([`838a2e8`][41])

### Features

* **content-explorer:** allow not using Portal when rendering modal ([#3501][42]) ([`b096d38`][43])
* **content-uploader:** Added `allowPrepopulateFiles` prop to content uploader ([#3519][44]) ([`12427b1`][45])
* **content-uploader:** Implemented partial upload for successful file transfers ([#3529][46]) ([`e70825c`][47])
* **docgen:** docgen sidebar base ([#3484][48]) ([`4b18b21`][49])
* **`react-intl`:** Bump `react-intl` package \[BREAKING CHANGE] ([#3466][50]) ([`307c6a4`][51])
* **usm:** Add access level label for hubs ([#3526][52]) ([`6504480`][53])
* **usm:** add inline notice as component ([#3549][54]) ([`d646c65`][55])

### BREAKING CHANGES

* **`react-intl`:** upgrade the major version of the `react-intl` dependency

* fix: fix `intl` type

* fix: fix message syntax

* fix: fix comments and i18n readme file

* fix: fix `react-intl` version comments

* fix: use `IntlShape` as a type in js files

* Fix: correct type import for `IntlShape`

* fix: add resolution

* fix: use exact version to match other repositories

* Fix: correct type import for `IntlShape`

* fix: remove all support for legacy versions

* fix: add `relativeTime` helper function

* fix: fix `relativeTime` in `PresenceAvatarTooltipContent` component

* fix: fix `relativeTime` in `PresenceCollaborator` component

* fix: use inclusive inequalities in `relativeTime` helper

* fix: remove unnecessary modulo operations

* fix: fix `relativeTime` in `ReadableTime` + fix snapshots

* fix: fix `relativeTime` in `lastModifiedByCellRenderer`

* fix: fix tests

* fix: use js

* fix: fix import

* fix: fix else statement

* fix: revert import reorder

[1]: https://github.com/box/box-ui-elements/compare/v19.0.0...v20.0.0

[2]: https://github.com/box/box-ui-elements/issues/3548

[3]: https://github.com/box/box-ui-elements/commit/97d49ff

[4]: https://github.com/box/box-ui-elements/issues/3499

[5]: https://github.com/box/box-ui-elements/commit/870de6d

[6]: https://github.com/box/box-ui-elements/issues/3508

[7]: https://github.com/box/box-ui-elements/commit/785be2a

[8]: https://github.com/box/box-ui-elements/issues/3509

[9]: https://github.com/box/box-ui-elements/commit/85ebf26

[10]: https://github.com/box/box-ui-elements/issues/3516

[11]: https://github.com/box/box-ui-elements/commit/cb470e9

[12]: https://github.com/box/box-ui-elements/issues/3525

[13]: https://github.com/box/box-ui-elements/commit/ffb447c

[14]: https://github.com/box/box-ui-elements/issues/3528

[15]: https://github.com/box/box-ui-elements/commit/1cf016f

[16]: https://github.com/box/box-ui-elements/issues/3534

[17]: https://github.com/box/box-ui-elements/commit/36e95a9

[18]: https://github.com/box/box-ui-elements/issues/3535

[19]: https://github.com/box/box-ui-elements/commit/c8d03c3

[20]: https://github.com/box/box-ui-elements/issues/3538

[21]: https://github.com/box/box-ui-elements/commit/cde1b88

[22]: https://github.com/box/box-ui-elements/issues/3540

[23]: https://github.com/box/box-ui-elements/commit/a7043e6

[24]: https://github.com/box/box-ui-elements/issues/3541

[25]: https://github.com/box/box-ui-elements/commit/3ced4a5

[26]: https://github.com/box/box-ui-elements/issues/3512

[27]: https://github.com/box/box-ui-elements/commit/2583e94

[28]: https://github.com/box/box-ui-elements/issues/3546

[29]: https://github.com/box/box-ui-elements/commit/e2e6731

[30]: https://github.com/box/box-ui-elements/issues/3555

[31]: https://github.com/box/box-ui-elements/commit/f07d616

[32]: https://github.com/box/box-ui-elements/issues/3518

[33]: https://github.com/box/box-ui-elements/commit/3ce175b

[34]: https://github.com/box/box-ui-elements/issues/3545

[35]: https://github.com/box/box-ui-elements/commit/e47892f

[36]: https://github.com/box/box-ui-elements/issues/3517

[37]: https://github.com/box/box-ui-elements/commit/2440746

[38]: https://github.com/box/box-ui-elements/issues/3532

[39]: https://github.com/box/box-ui-elements/commit/0d1e9cf

[40]: https://github.com/box/box-ui-elements/issues/3553

[41]: https://github.com/box/box-ui-elements/commit/838a2e8

[42]: https://github.com/box/box-ui-elements/issues/3501

[43]: https://github.com/box/box-ui-elements/commit/b096d38

[44]: https://github.com/box/box-ui-elements/issues/3519

[45]: https://github.com/box/box-ui-elements/commit/12427b1

[46]: https://github.com/box/box-ui-elements/issues/3529

[47]: https://github.com/box/box-ui-elements/commit/e70825c

[48]: https://github.com/box/box-ui-elements/issues/3484

[49]: https://github.com/box/box-ui-elements/commit/4b18b21

[50]: https://github.com/box/box-ui-elements/issues/3466

[51]: https://github.com/box/box-ui-elements/commit/307c6a4

[52]: https://github.com/box/box-ui-elements/issues/3526

[53]: https://github.com/box/box-ui-elements/commit/6504480

[54]: https://github.com/box/box-ui-elements/issues/3549

[55]: https://github.com/box/box-ui-elements/commit/d646c65
