---
applied_at: '2022-02-01'
applies_to:
  - cli
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/boxcli/releases/tag/v3.0.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2022-02-01-box-cli-v300-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2022-02-02-end-of-support-for-dicom
previous_page_id: 2022-01-26-box-python-sdk-v301-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2022/02-01-box-cli-v300-released.md
published_at: '2022-02-01'
fullyTranslated: true
---
# Box CLI `v3.0.0`のリリース

[Box CLI][17]の`v3.0.0`をリリースしました。このリリースでは、OAuth 2.0サポートの追加のほか、いくつかの機能強化を実施しました。

<!-- more -->

CLIの機能強化やドキュメントの変更に加え、新しく[YouTube動画][18] (英語) もリリースしました。この動画では、Box CLIのクイックスタートガイドを使用して、5分ほどでCLIを利用する方法を紹介しています。

## Developerドキュメントの変更

* OAuth 2.0認証方法の使用について[Box CLIのクイックスタートガイド][19]を更新
* [JWTの設定手順][20]を付録に移動

## 新機能と機能強化

* OAuthを使用したログインのサポートを追加 ([#240][3])
* 機能: ファイルの一括処理時やトークンがある場合にas-userフラグをサポート ([#270][4])
* メタデータテンプレートの`copyInstanceOnItemCopy`フィールドのサポートを追加 ([#239][5])
* 検索の`mdfilter`の等価チェックにサポートに関する注記を追加 ([#253][6])
* Box Sign APIのサポートを追加 ([#258][7])
* メタデータクエリAPIのサポートを追加 ([#259][8])
* 修正: `folder:collaborations:add`が`role`を必須のフラグに設定 (`SDK-1070`) ([#261][9])
* 依存関係のマイナーアップグレード
* リテンションの対象となっているファイルおよびファイルバージョン用に新しいAPIを追加 ([#250][10])
* 署名リクエストのサポートを追加 ([#258][11])
* メタデータクエリAPIをサポート ([#259][12])
* 作業: 従来のコミットを適用 ([#268][13])
* 機能: ファイルの一括処理時やトークンがある場合にas-userフラグをサポート ([#270][14])

## 重大な変更

* Node 10のサポートを終了 (#10)
* 不適切な用語の変更 ([#247][1]、[#252][2])

## バグ修正

* 修正: folder:collaborations:addがroleを必須のフラグに設定 ([#261][15])
* 修正: 共有リンクの削除の例を修正 ([#262][16])

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[開発者向けフォーラム][0]に英語でリクエストを投稿してください。また、それぞれのGitHubリポジトリでSDKチームにお問い合わせいただくことも可能です。

[0]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum

[1]: https://github.com/box/boxcli/issues/247

[2]: https://github.com/box/boxcli/issues/252

[3]: https://github.com/box/boxcli/pull/240

[4]: https://github.com/box/boxcli/pull/270

[5]: https://github.com/box/boxcli/pull/239

[6]: https://github.com/box/boxcli/pull/253

[7]: https://github.com/box/boxcli/pull/258

[8]: https://github.com/box/boxcli/pull/259

[9]: https://github.com/box/boxcli/pull/261

[10]: https://github.com/box/boxcli/issues/250

[11]: https://github.com/box/boxcli/issues/258

[12]: https://github.com/box/boxcli/issues/259

[13]: https://github.com/box/boxcli/issues/268

[14]: https://github.com/box/boxcli/issues/270

[15]: https://github.com/box/boxcli/issues/261

[16]: https://github.com/box/boxcli/issues/262

[17]: https://github.com/box/boxcli/releases

[18]: https://www.youtube.com/watch?v=whxT3Bdx3E0&list=PL0F3BD5B64D6A39F1

[19]: g://cli/quick-start

[20]: g://cli/cli-docs/jwt-cli
