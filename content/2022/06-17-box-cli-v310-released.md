---
applied_at: '2022-06-17'
applies_to:
  - cli
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/boxcli/releases/tag/v3.1.0'
collapse: true
---

# Box CLI `v3.1.0` released

### New Features and Enhancements

* Add --all flag for search to return all results ([#336][1]) ([`23ea0a5`][2])
* add unique state parameter to `OAuth2` login ([#292][3]) ([`5ce6a40`][4])
* allow changing base URLs ([#303][5]) ([`e284059`][6])
* obtain `oauth` authorization from command line ([#299][7]) ([`18c88bb`][8])
* use native credential storage for MacOS and Windows ([#295][9]) ([`74c4922`][10])

### Bug Fixes

* `users:transfer-content` to respect quiet flag ([#288][11]) ([`1d0bbab`][12])
* correctly pass `copy-instance-on-item-copy` flag ([#285][13]) ([`cd4fbf4`][14])
* Fix updating webhook triggers ([#297][15]) ([`09e94c3`][16])
* support large output when using `json` flag by replacing `json.stringify` ([#328][17]) ([`1204f2c`][18])
* Support limit flag for Box Search ([#323][19]) ([`0009a77`][20]), closes [#322][21]
* Support OAuth with multiple redirect URIs ([#302][22]) ([`9fe216e`][23])

[1]: https://github.com/box/boxcli/issues/336

[2]: https://github.com/box/boxcli/commit/23ea0a5c5b065ea3b91b73b64bb7b267a6ff0a18

[3]: https://github.com/box/boxcli/issues/292

[4]: https://github.com/box/boxcli/commit/5ce6a40b4c6e2fc78b2b598a8b1529200c63902e

[5]: https://github.com/box/boxcli/issues/303

[6]: https://github.com/box/boxcli/commit/e28405971ebcf2c2284bb875b40ceb7eaebb41c4

[7]: https://github.com/box/boxcli/issues/299

[8]: https://github.com/box/boxcli/commit/18c88bb6835509394b92eb0685e3a9306ede8984

[9]: https://github.com/box/boxcli/issues/295

[10]: https://github.com/box/boxcli/commit/74c492271ebc54e15500abbaaa2c7aac32be5070

[11]: https://github.com/box/boxcli/issues/288

[12]: https://github.com/box/boxcli/commit/1d0bbab652bf74a59c8486fc4d5eac415161254c

[13]: https://github.com/box/boxcli/issues/285

[14]: https://github.com/box/boxcli/commit/cd4fbf4f746b83c2b066efb31b2e2952dba1312d

[15]: https://github.com/box/boxcli/issues/297

[16]: https://github.com/box/boxcli/commit/09e94c32ed8e4243e76dd19e67b6d1c17c2cdc04

[17]: https://github.com/box/boxcli/issues/328

[18]: https://github.com/box/boxcli/commit/1204f2c146c713124060730e0554ab2f2dde27fa

[19]: https://github.com/box/boxcli/issues/323

[20]: https://github.com/box/boxcli/commit/0009a77ee3fc4b72ef01bbbeff0ea588c10a6f89

[21]: https://github.com/box/boxcli/issues/322

[22]: https://github.com/box/boxcli/issues/302

[23]: https://github.com/box/boxcli/commit/9fe216e8d2f59e4375a4b7c766844366f7166a0a
