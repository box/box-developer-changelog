---
applied_at: '2022-06-17'
applies_to:
  - cli
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/boxcli/releases/tag/v3.1.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2022-06-17-box-cli-v310-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2022-06-14-box-windows-sdk-v440-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2022/06-17-box-cli-v310-released.md
published_at: '2022-06-17'
fullyTranslated: true
---
# Box CLI `v3.1.0`のリリース

### 新機能と機能強化

* 検索に、すべての結果を返す--allフラグを追加 ([#336][1]) ([`23ea0a5`][2])
* `OAuth2`ログインに一意のstateパラメータを追加 ([#292][3]) ([`5ce6a40`][4])
* ベースURLの変更を許可 ([#303][5]) ([`e284059`][6])
* コマンドラインから`oauth`承認を取得 ([#299][7]) ([`18c88bb`][8])
* MacOSとWindowsにネイティブの資格情報ストレージを使用 ([#295][9]) ([`74c4922`][10])

### バグ修正

* `users:transfer-content`でquietフラグを考慮 ([#288][11]) ([`1d0bbab`][12])
* `copy-instance-on-item-copy`フラグを正しく渡す ([#285][13]) ([`cd4fbf4`][14])
* webhookトリガーの更新を修正 ([#297][15]) ([`09e94c3`][16])
* `json.stringify`の置き換えにより、`json`フラグ使用時の大量の出力をサポート ([#328][17]) ([`1204f2c`][18])
* Boxの検索でlimitフラグをサポート ([#323][19]) ([`0009a77`][20])、[#322][21]をクローズ
* 複数のリダイレクトURIでのOAuthをサポート ([#302][22]) ([`9fe216e`][23])

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
