---
applied_at: '2026-03-17'
applies_to:
  - cli
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/boxcli/releases/tag/v4.6.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2026-03-17-box-cli-v460-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2026-03-18-box-python-sdk-v450-released
previous_page_id: 2026-02-20-new-ai-models
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2026/03-17-box-cli-v460-released.md
published_at: '2026-03-17'
---
# Box CLI `v4.6.0` released

### New Features and Enhancements

* Add `--overwrite` flag to `files:upload` command ([#637][1]) ([`6231663`][2])
* Add support for Box Official App in login command ([#638][3]) ([`bcd6835`][4])
* Improve developer and agent experience in `boxcli` commands ([#643][5]) ([`fbc817f`][6])
* Improve login prompt ([#642][7]) ([`a58ff34`][8])
* Store access token encrypted in secure storage ([#639][9]) ([`bed6db3`][10])
* Support logout command ([#635][11]) ([`842e308`][12])
* Unify secure storage backend across platforms ([#647][13]) ([`6b2ed36`][14])

### Bug Fixes

* Fix encoding for example scripts on Windows ([#613][15]) ([`0265e2a`][16])
* fix help commands ([#611][17]) ([`7aec97b`][18])
* Normalize inquirer `signal-exit` compatibility on Windows ([#645][19]) ([`310b2f6`][20])

[1]: https://github.com/box/boxcli/issues/637

[2]: https://github.com/box/boxcli/commit/6231663c3e79eacfd52bcfe399527e12d589adb0

[3]: https://github.com/box/boxcli/issues/638

[4]: https://github.com/box/boxcli/commit/bcd6835fb631ef7cd88ba8545b42b177ed2b3644

[5]: https://github.com/box/boxcli/issues/643

[6]: https://github.com/box/boxcli/commit/fbc817f6e25c6f0236777473e8a3e3ef5241df13

[7]: https://github.com/box/boxcli/issues/642

[8]: https://github.com/box/boxcli/commit/a58ff34dde121285233c174785071057e04c13a6

[9]: https://github.com/box/boxcli/issues/639

[10]: https://github.com/box/boxcli/commit/bed6db362aa501cfa1b47d9db74f26456adfa1be

[11]: https://github.com/box/boxcli/issues/635

[12]: https://github.com/box/boxcli/commit/842e308f38af8351ea469dfb1ecd705304611dc0

[13]: https://github.com/box/boxcli/issues/647

[14]: https://github.com/box/boxcli/commit/6b2ed36655f7e896ee5a41308b60c28594fe693c

[15]: https://github.com/box/boxcli/issues/613

[16]: https://github.com/box/boxcli/commit/0265e2a65c4a985404b07ef2f83f56a903be329d

[17]: https://github.com/box/boxcli/issues/611

[18]: https://github.com/box/boxcli/commit/7aec97b0a63d2c1b3496cb296cf6dddaf539a9aa

[19]: https://github.com/box/boxcli/issues/645

[20]: https://github.com/box/boxcli/commit/310b2f6ea07a856709b6a46454d1852fa66b7a66