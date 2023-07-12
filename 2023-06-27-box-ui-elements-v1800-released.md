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
fullyTranslated: true
---
# Box UI Elements `v18.0.0`のリリース

# [18.0.0][1] (2023-06-27)

### バグ修正

* **ci:** releaseスクリプトの変数から空白を削除 ([#3355][2]) ([`2553ec1`][3])
* **content-explorer:** グリッドボタンのスタイルの詳細度を向上 ([#3328][4]) ([`b2c878a`][5])
* **content-explorer:** 未定義のオブジェクトで呼び出されるマッピング ([#3341][6]) ([`da6ada0`][7])
* **content-picker:** フォルダ作成時の名前入力のトリミング ([#3364][8]) ([`4629726`][9])
* **css:** IE7 CSSハックを削除してParcelのサポートを修正 ([#3368][10]) ([`cbff7f1`][11])
* **i18n:** 翻訳を更新 ([#3323][12]) ([`c810383`][13])
* **i18n:** 翻訳を更新 ([#3344][14]) ([`755d64b`][15])
* **i18n:** 翻訳を更新 ([#3349][16]) ([`6ba9f27`][17])
* **i18n:** 翻訳を更新 ([#3351][18]) ([`4ff75e8`][19])
* **i18n:** 翻訳を更新 ([#3352][20]) ([`80c795a`][21])
* **i18n:** 翻訳を更新 ([#3359][22]) ([`c94305c`][23])
* **preview:** サムネイルのサイドバーの幅を更新 ([#3363][24]) ([`33c8236`][25])
* **sharing:** Canvasファイルの共有リンクのメッセージを削除 ([#3337][26]) ([`9558474`][27])
* 共有リンクのビューアー権限の調整 ([#3335][28]) ([`5d78c11`][29])
* 要素のテストページでdistパスとReactバージョンを更新 ([#3350][30]) ([`38ff124`][31])
* **pill-selector-dropdown:** `showAvatars`プロパティを`RoundPill`にパス ([#3329][32]) ([`5632743`][33])
* **share-form:** 未定義のオブジェクトで呼び出されるマッピング ([#3340][34]) ([`a24abb2`][35])
* **usm:** 共有モーダルのアップグレード通知のメッセージを修正 ([#3334][36]) ([`4a945ce`][37])

### 作業

* **deps:** `react-beautiful-dnd`をバージョン11.0.5に昇格 ([#3345][38]) ([`610c9d2`][39])
* **node:** Node 18にアップグレード ([#3347][40]) ([`cbb3840`][41])

### 機能

* **cloud-game:** クラウドゲームの外観を調整 ([#3361][42]) ([`fe7fb51`][43])
* **pill-selector-dropdown:** エラーのツールチップの位置設定を許可 ([#3330][44]) ([`8df1551`][45])
* **preview:** デフォルトのPreview SDKのバージョンを更新 ([#3366][46]) ([`aa7a875`][47])
* **security-controls:** 電子すかしの \[詳細を表示] リンクを削除 ([#3353][48]) ([`379d055`][49])
* **threaded-replies:** 注釈に対する返信 ([#3331][50]) ([`4f65525`][51])
* **uaa-integration:** UAAを`ActivitySidebar`に統合 ([#3316][52]) ([`b81e976`][53])

### 重大な変更

* **deps:** 使用中のプロジェクトにおける`react-beautiful-dnd`のバージョン11.0.5へのアップグレードが必要

* **node:** Node 18にアップグレード

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
