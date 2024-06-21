---
applied_at: '2024-05-22'
applies_to:
  - frontend
  - ui-elements
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-ui-elements/releases/tag/v20.0.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2024-05-22-box-ui-elements-v2000-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2024-05-23-pdf-js-vulnerability
previous_page_id: 2024-05-22-box-python-sdk-v3100-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2024/05-22-box-ui-elements-v2000-released.md
published_at: '2024-05-22'
fullyTranslated: true
---
# Box UI Elements `v20.0.0`のリリース

# [20.0.0][1] (2024/05/22)

### バグ修正

* **content-answers:** content answersモーダルにスタイルをスコープ ([#3548][2]) ([`97d49ff`][3])
* **fonts:** 共通するフォントのバージョンを更新 ([#3499][4]) ([`870de6d`][5])
* **i18n:** 翻訳を更新 ([#3508][6]) ([`785be2a`][7])
* **i18n:** 翻訳を更新 ([#3509][8]) ([`85ebf26`][9])
* **i18n:** 翻訳を更新 ([#3516][10]) ([`cb470e9`][11])
* **i18n:** 翻訳を更新 ([#3525][12]) ([`ffb447c`][13])
* **i18n:** 翻訳を更新 ([#3528][14]) ([`1cf016f`][15])
* **i18n:** 翻訳を更新 ([#3534][16]) ([`36e95a9`][17])
* **i18n:** 翻訳を更新 ([#3535][18]) ([`c8d03c3`][19])
* **i18n:** 翻訳を更新 ([#3538][20]) ([`cde1b88`][21])
* **i18n:** 翻訳を更新 ([#3540][22]) ([`a7043e6`][23])
* **i18n:** 翻訳を更新 ([#3541][24]) ([`3ced4a5`][25])
* **`multiput-upload`:** アップロードのパフォーマンスを改善 ([#3512][26]) ([`2583e94`][27])
* **`npm`:** `npmignore`にchromatic configを追加 ([#3546][28]) ([`e2e6731`][29])
* **preview:** デフォルトのプレビューバージョンを`2.106.0`に更新 ([#3555][30]) ([`f07d616`][31])
* **`react-intl`:** 相対時間の単体テストで日付をモック ([#3518][32]) ([`3ce175b`][33])
* **shared-link-settings-modal:** 有効期限の形式を修正 ([#3545][34]) ([`e47892f`][35])
* **upload:** `multiput`のアップロードパフォーマンス2を改善 ([#3517][36]) ([`2440746`][37])
* **usm:** 項目タイプHubを修正 ([#3532][38]) ([`0d1e9cf`][39])
* **usm:** アップセルの表示時にリンクの説明を非表示にする ([#3553][40]) ([`838a2e8`][41])

### 機能

* **content-explorer:** モーダルのレンダリング時にポータルを使用しないことを許可 ([#3501][42]) ([`b096d38`][43])
* **content-uploader:** コンテンツアップローダーに`allowPrepopulateFiles`プロパティを追加 ([#3519][44]) ([`12427b1`][45])
* **content-uploader:** ファイルの転送を成功させるために部分的なアップロードを実装 ([#3529][46]) ([`e70825c`][47])
* **docgen:** docgenのサイドバーベース ([#3484][48]) ([`4b18b21`][49])
* **`react-intl`:** `react-intl`パッケージを昇格 \[重大な変更] ([#3466][50]) ([`307c6a4`][51])
* **usm:** Hubのアクセスレベルラベルを追加 ([#3526][52]) ([`6504480`][53])
* **usm:** インライン通知をコンポーネントとして追加 ([#3549][54]) ([`d646c65`][55])

### 重大な変更

* **`react-intl`:** `react-intl`依存関係のメジャーバージョンをアップグレード

* 修正: `intl`のタイプを修正

* 修正: メッセージの構文を修正

* 修正: コメントおよびi18n readmeファイルを修正

* 修正: `react-intl`のバージョンのコメントを修正

* 修正: jsファイルで`IntlShape`を型として使用

* 修正: `IntlShape`の型のインポートを修正

* 修正: 解決策を追加

* 修正: 他のリポジトリに一致するよう正確なバージョンを使用

* 修正: `IntlShape`の型のインポートを修正

* 修正: 従来のバージョンのサポートをすべて削除

* 修正: `relativeTime`ヘルパー関数を追加

* 修正: `PresenceAvatarTooltipContent`コンポーネントの`relativeTime`を修正

* 修正: `PresenceCollaborator`コンポーネントの`relativeTime`を修正

* 修正: `relativeTime`ヘルパーで等号付き不等式を使用

* 修正: 不要な剰余演算を削除

* 修正: `ReadableTime`の`relativeTime`を修正し、スナップショットを修正

* 修正: `lastModifiedByCellRenderer`の`relativeTime`を修正

* 修正: テストを修正

* 修正: jsを使用

* 修正: インポートを修正

* 修正: elseステートメントを修正

* 修正: インポートの並べ替えを元に戻す

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
