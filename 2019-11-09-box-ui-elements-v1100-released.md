---
applied_at: '2019-11-09'
applies_to:
  - sdks
  - ui-elements
is_impactful: true
is_new_feature: true
collapse: true
release_source_url: 'https://github.com/box/box-ui-elements/releases/tag/v11.0.0'
is_index: false
category_id: changelog
subcategory_id: ''
id: 2019-11-09-box-ui-elements-v1100-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2019-11-18-new-ios-sdk-now-available
previous_page_id: 2019-10-25-new-parameters-for-search-api
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2019/11-09-box-ui-elements-v1100-released.md
published_at: '2019-11-09'
fullyTranslated: true
---
# Box UI Elements `v11.0.0`のリリース

## [11.0.0][1] (2019年11月9日)

### バグ修正

* **`activity-feed`:** Edgeのタスク/コメントの長いユーザー名を修正 ([#1604][2]) ([`572e4d7`][3])
* **`activity-feed`:** アクティビティフィードのバージョン順序を修正 ([#1272][4]) ([`533c112`][5])
* **`activity-feed`:** フィード項目と空の状態のインラインエラーをリファクタリング ([#1697][6]) ([`2702367`][7])
* **`annotation`:** Boxの注釈で使用されるセレクタを追加することでヘッダーを修正 ([#1637][8]) ([`9302486`][9])
* **`app-activity`:** resin機能名からアンダースコアを削除 ([#1456][10]) ([`b7c21e7`][11])
* **`app-activity`:** コメント/タスクに一致するようアプリのアクティビティを更新 ([#1449][12]) ([`b58aa2f`][13])
* **`arrow-stepper`:** KeyBindingコンポーネントの矢印ステッパーを修正 ([#1654][14]) ([`a05b015`][15])
* **`avatar`:** アバターのイニシャルのv位置を修正 ([#1311][16]) ([`23e6d5f`][17])
* **`avatar`:** アクティビティサイドバーでのアバターの解像度を修正 ([#1243][18]) ([`88a5f1c`][19])
* **`avatar`:** URL変更の効果の代わりに派生状態を使用 ([#1643][20]) ([`f89c138`][21])
* **`bdl`:** 色変数名のSCSSチェックを追加 ([#1514][22]) ([`a4f446f`][23])
* **`bdl`:** 標準と太字に一致するようフォントの太さを調整 `lato` ([#1517][24]) ([`35a4070`][25])
* **`beta-feedback`:** `aria-labelledby`属性名を更新 ([#1249][26]) ([`c164aec`][27])
* **`breadcrumb`:** 欠落しているimportを追加 ([#1657][28]) ([`fec4735`][29])
* **`button`:** ボタンから水平方向の余白を削除 ([#1362][30]) ([`a6989a0`][31])
* **`button`:** ボタンからの水平方向の余白の削除を元に戻す ([#1362][30]) ([#1400][32]) ([`3ac424c`][33])
* **`classification`:** バッジに`tabindex`を含めない ([#1622][34]) ([`4ab0c20`][35])
* **`classification`:** 分類バッジUXの微調整 ([#1378][36]) ([`fa82a8d`][37])
* **`classification`:** IE11で分類のツールチップが表示されない ([#1710][38]) ([`d08b53c`][39])
* **`classification`:** `onclick`のフロー定義 ([#1712][40]) ([`9e620ce`][41])
* **`classification`:** 分類バッジアイコンの復元 ([#1390][42]) ([`5db4b3e`][43])
* **`collaborator-avatars`:** キーボードアクセシビリティを追加 ([#1680][44]) ([`baefaed`][45])
* **`collapsible`:** 純粋なコンポーネントにする必要がある ([#1407][46]) ([`5e32c80`][47])
* **`comment`:** 複数のコメントをサポートするためにコメント領域に高さを追加 ([#1474][48]) ([`e270131`][49])
* **`comment`:** コメントUIのパディングと`a11y`の調整 ([#1358][50]) ([`927a34a`][51])
* **`comment`:** 冗長な`aria-label`を削除 ([#1291][52]) ([`ef48f88`][53])
* **`comment`:** 確認ダイアログにオーバーレイのZインデックスを使用 ([#1270][54]) ([`bcf2852`][55])
* **`comments`:** エディタの既存のコメントをフォーマット ([#1469][56]) ([`6b82510`][57])
* **`constants`:** 明示的な型のインポート ([#1584][58]) ([`7d38fb8`][59])
* **`content-explorer`:** `ContentExplorer`および`ContentPicker`でウェブリンクの共有の処理が可能に ([#1515][60]) ([`55edef7`][61])
* **`content-explorer`:** `MDVGridView`インポートの修正 ([#1333][62]) ([`9740342`][63])
* **`content-explorer`:** モーダルを閉じた後に行が動作しなくなる問題を修正 ([#1245][64]) ([`d7f53ff`][65])
* **`content-preview`:** ナビゲーション時にディープリンクパスを削除 ([#1665][66]) ([`84b4ea4`][67])
* **`content-uploader`:** 100%に達したときにキャンセルボタンを無効化 ([#1511][68]) ([`a6de1b0`][69])
* **`content-uploader`:** タスクをキャンセルすると他のタスクが開始される問題を修正 ([#1653][70]) ([`f35b2ea`][71])
* **`content-uploader`:** 同時に重複ファイルがアップロードされる問題を修正 ([#1652][72]) ([`6faed59`][73])
* **`datetime`:**ミリ秒なしの時間のサポートを追加 ([#1191][74]) ([`19f3703`][75])
* **`deps`:** `axios`のピア依存関係をダウングレード ([#1329][76]) ([`d1a1bd9`][77])
* **`examples`:** 現在のBoxの設計言語に合わせて色を変更 ([#1281][78]) ([`94869ad`][79])
* **`explorer`:** オンデマンドで共有リンクを取得 ([#1479][80]) ([`2d29628`][81])
* **`feed`:** フィード項目のディープリンクのインラインエラー ([#1655][82]) ([`e2be3bd`][83])
* **`feed`:** IE11でタスク担当者名が切り詰められる ([#1694][84]) ([`a20e610`][85])
* **`floatfield`:** 浮動小数点フィールドの末尾の`.`を常に許可 ([#1178][86]) ([`61d4e3d`][87])
* **`footer-indicator`:** フッターインジケータの上に表示されるようにツールチップを移動 ([`bf7782c`][88])
* **`header-flyout`:** IE11のスクロールのバグを修正するためのウィンドウに対する制約 ([#1310][89]) ([`f8bb323`][90])
* **`i18n`:** 「承諾済み」コピーを「承認済み」に変更 ([#1214][91]) ([`674bf45`][92])
* **`i18n`:** HTMLで始まるメッセージによって例外が発生するバグを修正 ([#1490][93]) ([`73d95b9`][94])
* **`i18n`:** `Param`と`Plural`を`styleguide.conf`に含めない ([#1197][95]) ([`2d34ad4`][96])
* **`i18n`:** タスク担当者メッセージに複数形式を使用 ([#1345][97]) ([`10d6b76`][98])
* **`icons`:** 地球アイコンの背景を塗りつぶし ([#1226][99]) ([`c91d320`][100])
* **`icons`:** 左ナビゲーションのユーザビリティのためにコレクションアイコンを修正 ([#1238][101]) ([`9e91115`][102])
* **`icons`:** コレクションアイコンにSUIT classNamesを指定 ([#1242][103]) ([`3b62245`][104])
* **`icons`:** 再試行および公開アイコンを更新 ([#1297][105]) ([`bfa075a`][106])
* **`icons`:** ごみ箱、移動/コピー、追加、ダウンロード、アップロード、コレクションを更新 ([#1702][107]) ([`b126ecb`][108])
* **`icons`:** 追加アイコンのスタイルを更新し、非表示の目のアイコンを追加 ([#1266][109]) ([`b47e22e`][110])
* **`iconworkflow`:** 背景の長方形を`viewBox`と同じにする ([#1241][111]) ([`9e07f2e`][112])
* **`inlinenotice`:** Boxデザインの標準に更新 ([#1576][113]) ([`a814657`][114])
* **`item-properties`:** 説明テキストエリアに`aria-labelledby`を追加 ([#1229][115]) ([`05d86b1`][116])
* **`left-sidebar`:** リンクのラッパーをドロップするためのキーを追加 ([#1299][117]) ([`9c78135`][118])
* **`left-sidebar`:** インジケータを読み込むための余白を調整 ([#1545][119]) ([`6ba65c6`][120])
* **`left-sidebar`:** 画面サイズが中の場合に切り替えアイコンを非表示にする ([#1344][121]) ([`716fe01`][122])
* **`media`:** `.btn-plain`を回避するためメディアボタンのCSSの特異性を向上 ([#1463][123]) ([`943638d`][124])
* **`mention-selector`:** `hasReceivedFirstInteraction`ロジックを修正 ([#1434][125]) ([`afd94fa`][126])
* **`menu`:** メニュー項目ボタンのパディングを修正 ([#1446][127]) ([`5baeb5b`][128])
* **`menu`:** 表示されている場合のみマウント時にメニューを自動フォーカス ([#1175][129]) ([`2ba8a1d`][130])
* **`metadata`:** メタデータ入力フィールドのオートコンプリートを表示 ([#1629][131]) ([`85995cd`][132])
* **`metadata`:** Safariのテンプレートドロップダウンスクロールバーの問題 ([#1192][133]) ([`1dc0d99`][134])
* **`metadata-sidebar`:** `onApiError`を適切にバインド ([#1713][135]) ([`50b72f2`][136])
* **`modal`:** スクリーンリーダーを改良するために閉じるボタンをヘッダーの後に移動 `a11y` ([#1684][137]) ([`29a1220`][138])
* **`nav-sidebar`:** フォーカスのアウトラインを修正するために切り替えボタンのサイズを縮小 ([#1305][139]) ([`9a14ae7`][140])
* **`notifications`:** アクセシビリティの属性を追加 ([#1682][141]) ([`21af355`][142])
* **`open-with`:** エラーメッセージを改善 ([#1489][143]) ([`d3d98a5`][144])
* **`pill-selector`:** 行区切りの値をコピーと貼り付けを許可 ([#1350][145]) ([`7933932`][146])
* **`pill-selector`:** 入力をキャッチする`onInput`を公開 ([#1450][147]) ([`48d22a4`][148])
* **`pill-selector`:** UXの微調整 ([#1315][149]) ([`e4fdf58`][150])
* **`pill-selector-dropdown`:** `PillSelector`が無効になるときにピルを無効化 ([#1357][151]) ([`2bf496e`][152])
* **`pill-selector-dropdown`:** aria属性を修正 ([#1681][153]) ([`1e0d1ab`][154])
* **`pill-selector-dropdown`:** クリック時にピルが削除される問題を修正 ([#1367][155]) ([`d67fcfe`][156])
* **`pills`:** ピルセレクタ入力テキストの垂直方向の中央揃えを修正 ([#1364][157]) ([`d47c69c`][158])
* **`pillselectordropdown`:** コンテキストメニューからの貼り付けをサポート ([#1597][159]) ([`d16b0da`][160])
* **`preview`:** プレビューのヘッダースタイルをクリーンアップし、余分な境界線を削除 ([#1484][161]) ([`6c1a363`][162])
* **`quick-search`:** 境界線の半径をBDLに従うように更新 ([#1439][163]) ([`936f5e0`][164])
* **`radio-group`:** 値のプロパティを渡すことでラジオグループを修正 ([#1452][165]) ([`c0c05be`][166])
* **`radio-group`:** 残りのプロパティをラジオ入力に渡す ([#1448][167]) ([`85ca38a`][168])
* **`scripts`:** プッシュ前にすべてのファイルをビルドして更新 ([#1415][169]) ([`e432c47`][170])
* **`scroll-if-needed`:** セレクタドロップダウンのscroll-if-neededを修正 ([#1280][171]) ([`3776dc8`][172])
* **`search`:** `ContentExplorer`検索の丸みのある角を削除 ([#1478][173]) ([`7d9100b`][174])
* **`security`:** セキュリティの脆弱性に対処するために`axios`をアップグレード ([#1228][175]) ([`db26743`][176])
* **`security-badge`:** `SecurityBadge`フロータイプの修正 ([#1664][177]) ([`ae23f01`][178])
* **`select-field`:** 選択フィールドでの矢印スクロールを有効化 ([#1671][179]) ([`9f040f2`][180])
* **`sidebar`:** コメント入力にflex-shrink 0を追加 ([#1359][181]) ([`cd840f4`][182])
* **`sidebar`:** マークアップとアクセシビリティをタブリストに追加 ([#1563][183]) ([`f90a0d7`][184])
* **`sidebar`:** バージョン履歴サイドバーのディープリンクを修正 ([#1649][185]) ([`e85e57a`][186])
* **`sidebar`:** 大きなビューポートでサイドバーが自動で開かない問題を修正 ([#1508][187]) ([`dac39ee`][188])
* **`sidebar`:** サイドバーナビゲーションの追加タブの高さの最大値を制限 ([#1557][189]) ([`e7f953e`][190])
* **`sidebar`:** タブを意味的にわかりやすくする ([#1236][191]) ([`eb398fc`][192])
* **`sidebar`:** 項目プロパティのバージョンのパディング ([#1263][193]) ([`853e106`][194])
* **`sidebar`:** 空の状態の不要な括弧を削除 ([#1645][195]) ([`824f390`][196])
* **`sidebar`:** サイドバーが強制的に開かれた場合にダーティ状態を設定 ([#1366][197]) ([`e71409c`][198])
* **`sidebar`:** アクティビティフィードコンテナの`flexbox`を更新 ([#1341][199]) ([`c5e07b1`][200])
* **`subheader`:** グリッドビューに関するロジックを追加 ([#1659][201]) ([`7a53050`][202])
* **`task`:** タスク完了ルールアイコンの文字列 ([#1573][203]) ([`79c3f00`][204])
* **`task-form`:** フォーム送信時にタスク担当者のオートコンプリートをクリア ([#1605][205]) ([`63efa10`][206])
* **`task-form`:** 日付選択機能でのテキスト入力を禁止 ([#1540][207]) ([`af49827`][208])
* **`task-form`:** タスクフォームの送信ボタンを無効にしない ([#1323][209]) ([`9a4137b`][210])
* **`task-form`:** 重要ではないが必須のフィールドが残っている場合のエラーメッセージを更新 ([#1353][211]) ([`be10f37`][212])
* **`task-new`:**位置の修正、CSSリファクタリング ([#1312][213]) ([`411c3e9`][214])
* **`task-new`:** タスクステータスのチェックマークの位置を修正 ([#1321][215]) ([`9f554ff`][216])
* **`task-new`:** タスクメニューを追加するための視覚的な微調整 ([#1334][217]) ([`95a3c73`][218])
* **`task-new`:** タスクメニューを追加するための視覚的な微調整 ([#1328][219]) ([`cf1acf1`][220])
* **`tasks`:** 欠落しているresinコンポーネントを追加 ([#1513][221]) ([`00e9707`][222])
* **`tasks`:** 担当者の入力フィールドのインタラクション ([#1621][223]) ([`dc33967`][224])
* **`tasks`:** プレビューのアクティビティサイドバーにコメントメニューが表示されない ([#1250][225]) ([`be7bc2f`][226])
* **`tasks`:** タスクの問題を修正 ([#1189][227]) ([`630fd38`][228])
* **`tasks`:** サイズ変更時にモーダルが終了する ([#1603][229]) ([`2cbe014`][230])
* **`tasks`:** 担当者のアバターのサイズ変更を防止 ([#1332][231]) ([`4e760f7`][232])
* **`tasks`:** タスクタイプのサブテキストのコピーを更新 ([#1627][233]) ([`c788770`][234])
* **`tasks_new`:** 欠落しているresinコンポーネントを追加 ([#1295][235]) ([`dbbf598`][236])
* **`tasks-new`:** モーダル終了時にセレクタの連絡先をリセット ([#1301][237]) ([`f387a9b`][238])
* **`tasks-new`:** 削除されたユーザーの「以前のコラボレータ」を表示 ([#1313][239]) ([`c61fa77`][240])
* **`tasks-new`:** タスクのアクションが更新されない ([#1302][241]) ([`2f88e96`][242])
* **`tasks-new`:** ドキュメントと文字列を更新 ([#1317][243]) ([`6560b23`][244])
* **`template-dropdown`:** `onMenuToggle`ハンドラを`TemplateDropdown`に追加 ([#1318][245]) ([`2cdfcc4`][246])
* **`text-input`:** ツールチップの切り替え時にフォーカスが失われる ([#1185][247]) ([`8a4c294`][248])
* **`tooltip`:** 色のコントラストとレイアウトの修正 ([#1692][249]) ([`1c11770`][250])
* **`unfied-share-modal`:**共有リンクのアクセスレベル ([#1647][251]) ([`732a1dd`][252])
* **`unified-share-modal`:** モーダルメニューに制約を追加 ([#1196][253]) ([`6501413`][254])
* **`unified-share-modal`:** タイトルの分類 ([#1453][255]) ([`4ce5a06`][256])
* **`uploader`:** `MultiputUploads` IE11でのハングを停止 ([#1283][257]) ([`c49e52f`][258])
* **`uploads`:** 進行中のタスクをキャンセルしても保留中のタスクが開始されない ([#1570][259]) ([`dbf115c`][260])
* **`uploads`:** アップロードの再開時のハングを修正 ([#1695][261]) ([`3da93c8`][262])
* **`uploads`:** 論理ゲートを削除 ([#1646][263]) ([`38d10e4`][264])
* **`uploads`:** 再試行後に項目エラーをリセット ([#1600][265]) ([`0218f10`][266])
* **`uploads`:** アップロードのキャンセルのためのresin ([#1397][267]) ([`16311dc`][268])
* **`user-link`:** 長いユーザー名の折り返しを許可 ([#1602][269]) ([`bff49bb`][270])
* **`usm`:** \[リンク設定] では行の折り返しができない ([#1674][271]) ([`938c483`][272])
* **`usm`:** `itemTypedId`を`onPillCreate`に追加 ([#1320][273]) ([`c4149ea`][274])
* **`usm`:** `itemTypedID`を`getContactsByEmail`に渡さない ([#1354][275]) ([`e60b020`][276])
* **`versions`:** 電子すかし付きファイルの以前のバージョンのプレビューを無効化 ([#1405][277]) ([`9a527f2`][278])
* **`versions`:** 最も関連性の高いバージョンアクションの日付と名前を表示 ([#1568][279]) ([`b68eccd`][280])
* **`versions`:** 破棄されたAPIファクトリによる無限読み込みを修正 ([#1347][281]) ([`95949e2`][282])
* **`versions`:** バージョングループに前の月/年が折りたたまれている問題を修正 ([#1365][283]) ([`65d23b9`][284])
* **`versions`:** 復元されたバージョンと昇格されたバージョンのエクスペリエンスを改善 ([#1631][285]) ([`25d0741`][286])
* **`versions`:** 電子すかし付きファイルの制限を緩和 ([#1342][287]) ([`2487b42`][288])
* **`versions`:** バージョンの昇格時にページを再読み込み (一時的) ([#1395][289]) ([`de7e74e`][290])
* **`versions`:** 電子すかし付きファイルのアクションとプレビューを制限 ([#1339][291]) ([`fcb390d`][292])
* **`versions`:** 電子すかし付きファイルのプレビューを制限 ([#1351][293]) ([`93b95c4`][294])
* **`versions`:** ファイルバージョンの権限を取得してアクションに使用 ([#1193][295]) ([`9d7567e`][296])
* **`versions`:** 選択されている場合にバージョンボタンをスクロールして表示 ([#1276][297]) ([`e0cd7e3`][298])
* **`versions`:** バージョン履歴を非表示にせずにサーバーエラーを表示 ([#1275][299]) ([`ef3b2fd`][300])
* **`versions`:** 不要なボタンを回避するようバージョンアクションを更新 ([#1556][301]) ([`bc9672e`][302])
* **`versions`:** 最新のリテンションスキーマを使用するようバージョンサイドバーを更新 ([#1662][303]) ([`fa66232`][304])
* `Xhr.js`の`Accept-Language`ヘッダーを追加 ([#1368][305]) ([`361d73f`][306])
* 長いテキストにカーソルを合わせたときにツールチップを表示 ([#1230][307]) ([`c41dd47`][308])
* チェックマークの位置を微調整 ([#1678][309]) ([`cfd055b`][310])
* さまざまなフォームのアクセシビリティの改善 ([#1688][311]) ([`150cbbe`][312])
* **`versions`:** 最新の契約と一致するようバージョンの復元呼び出しを更新 ([#1198][313]) ([`2e590d3`][314])

### 作業

* **`deps`:** `react`のピア/開発の依存関係を更新 ([#1606][315]) ([`1163db5`][316])
* **`formik`:** V2にアップグレード ([#1698][317]) ([`6b9ded9`][318])

### コードのリファクタリング

* `react`と`react-dom`を`v16.8`にアップグレードし、アバターをリファクタリング ([#1171][319]) ([`7dd1bdf`][320])、[#761][321]をクローズ
* **`deps`:** ピアの依存関係を最新の作業バージョンにアップグレード ([#1180][322]) ([`48d711e`][323])

### 機能

* **`activity-feed`:** タスクおよびコメントのディープリンクのサポートを追加 ([#1623][324]) ([`52ecdcb`][325])
* **`additional-tabs`:** 無効になっているアプリをグレー表示 ([#1503][326]) ([`132782d`][327])
* **`avatarinitials`:** `backgroundColor`をSCSSに移動 ([#1585][328]) ([`781a246`][329])
* **`bdl`:** SCSS `bdl`スコープのためのスクリプトを追加 ([#1546][330]) ([`9bdc1e6`][331])
* **`classification`:** 分類/分類アクションのアイコンを変更 ([#1520][332]) ([`8eb68b3`][333])
* **`classification`:** 新しいバッジとレイアウト ([#1231][334]) ([`2336262`][335])
* **`classification`:** 詳細サイドバー内の新しいセクション ([#1237][336]) ([`90bf2f3`][337])
* **`classification`:** 階層リンクから分類を削除 ([#1549][338]) ([`adae46d`][339])
* **`classification`:** 分類のUIを更新 ([#1566][340]) ([`52e2b17`][341])
* **`comments`:** コメント編集を実装 ([#1468][342]) ([`33dd037`][343])
* **`content-explorer`:** サイズ列でコンテンツを並べ替える機能を追加 ([#1239][344]) ([`b29b6bf`][345])
* **`content-explorer`:** グリッドビューの切り替えボタンを追加 ([#1349][346]) ([`97a1d44`][347])
* **`content-explorer`:** 検索と履歴のサムネイルを取得 ([#1475][348]) ([`1035afb`][349])
* **`content-explorer`:** グリッドビュースライダー ([#1482][350]) ([`ef4a7ee`][351])
* **`content-explorer`:** グリッドビューのスタイル ([#1464][352]) ([`f32b8ca`][353])、[#1409][354]をクローズ
* **`content-explorer`:** `MDVGridView`からファイルをインポート ([#1294][355]) ([`a2e5bd9`][356])
* **`content-explorer`:** 表示モード設定のローカルストレージ ([#1476][357]) ([`803b0a0`][358])
* **`content-explorer`:** ギャラリービューの機能の切り替えを削除 ([#1571][359]) ([`3e948b8`][360])
* **`content-explorer`:** サムネイル付きのカードを表示 ([#1409][354]) ([`7bbc2e8`][361])
* **`content-explorer`:** アイコンでグリッドを表示 ([#1372][362]) ([`64a099e`][363])
* **`content-picker`:** 単一選択にラジオを使用 ([#1685][364]) ([`acc3395`][365])
* **`content-sidebar`:** 編集/作成用にタスクモーダルモードを追加 ([#1257][366]) ([`0bdfc96`][367])
* **`content-sidebar`:** サイドバーパネルのプログラムによる更新 ([#1561][368]) ([`2adbaef`][369])
* **`dropdown-menu`:** ドロップダウンが閉じている場合に`esc`の伝播を許可 ([#1686][370]) ([`3d4d59e`][371])
* **`features`:** メタデータリストビューでカーソルを合わせたときに背景色を追加 ([#1618][372]) ([`635808e`][373])
* **`features`:** 新機能metadata-based-viewを追加 ([#1519][374]) ([`faef59e`][375])
* **`features`:** 項目名のクリック時にプレビューを表示 ([#1620][376]) ([`74e46b2`][377])
* **`ghost`:** ゴースト状態のヘルパーコンポーネントを作成 ([#1498][378]) ([`73aadae`][379])
* **`i18n`:** 新しい`FormattedCompMessage`コンポーネントを実装 ([#976][380]) ([`31fdf12`][381])
* **`icon`:** ユーザー追加の空の状態アイコンを作成 ([#1638][382]) ([`33dfacb`][383])
* **`icon`:** ログインとストレージのアイコンを作成 ([#1708][384]) ([`0115fb6`][385])
* **`icons`:** `CollectionItemLink`アイコンを追加 ([#1550][386]) ([`1558d36`][387])
* **`icons`:** 電光と星のコレクションアイコンを追加 ([#1338][388]) ([`8e9d503`][389])
* **`icons`:** コレクションの塗りつぶされた星アイコンを追加 ([#1547][390]) ([`55a182e`][391])
* **`icons`:** `IconFolderTree`アイコンを追加 ([#1696][392]) ([`add261b`][393])
* **`icons`:** コレクションのアイコンを追加 ([#1224][394]) ([`a01ea82`][395])
* **`icons`:** 新しい盾アイコンを追加 ([#1216][396]) ([`753d0e2`][397])
* **`icons`:** サンドボックスとパズルのピースのアイコンを追加 ([#1370][398]) ([`67b6db4`][399])
* **`icons`:** ワークフローアイコンを追加 ([#1225][400]) ([`9d73144`][401])
* **`icons`:** タスクの空の状態アイコンを作成 ([#1583][402]) ([`cac4023`][403])
* **`icons`:** 新しい稲妻アイコン ([#1183][404]) ([`ebccf18`][405])
* **`icons`:** `IconShare`と`IconCollaboration`を新しい`32x32`アイコンに更新 ([#1232][406]) ([`4f4e31b`][407])
* **`icons`:** 新しい地球アイコンに更新し、新しい地球を追加 `tinycon` ([#1217][408]) ([`3dded61`][409])
* **`inline-edit`:** インスタンスフィールドの入力をユーザーに表示 ([#1172][410]) ([`1f90dde`][411])
* **`left-nav`:** Box Relayアイコンを追加 ([#1207][412]) ([`29f07a6`][413])、[#1206][414]をクローズ
* **`left-sidebar`:** `LeftSidebar`がカスタム`navLinkRenderer`をサポート ([#1510][415]) ([`f9705a2`][416])
* **`leftsidebar`:** カーソルを合わせたときにのみドロップ領域を表示 ([#1548][417]) ([`a45c998`][418])
* **`media`:** メディアオブジェクトコンポーネントを作成 ([#1383][419]) ([`5140c13`][420])
* **`metadata`:** メタデータテンプレートのフィルタを有効化 ([#1598][421]) ([`7b341f7`][422])
* **`metadata-views`:** 編集と編集キャンセルのアクションを処理 ([#1703][423]) ([`d55f84a`][424])
* **`metadata-views`:** メタデータビューに編集アイコンを表示 ([#1667][425]) ([`1b8a29d`][426])
* **`metadata-views`:** メタデータビューでメタデータ列のプロパティタイプを更新 ([#1666][427]) ([`cbf96ef`][428])
* **`new-tasks`:** タスクのコラボレータを取得 ([#1286][429]) ([`fb84aee`][430])
* **`office-online`:** `xlsb`ファイルのExcelスプレッドシートアイコンを追加 ([`ee8569f`][431])
* **`pill-selector`:** ピルセレクタの`formik`ラッパー ([#1194][432]) ([`c75a7bb`][433])
* **`pill-selector`:** ダウンストリームの問題のためにフロータイプを更新 ([#1210][434]) ([`69f25e8`][435])
* **`preview`:** プレビューヘッダーでのカスタムロゴURLのサポートを追加 ([#1714][436]) ([`d37b9ec`][437])
* **`preview`:** ポリシーによってブロックされたときのメッセージを改良 ([#1346][438]) ([`a6cde28`][439])
* **`preview`:** セキュリティブロックの新しいアイコン ([#1396][440]) ([`9355631`][441])
* **`preview`:** box-content-previewのデフォルトバージョンを2.16.0にアップグレード ([#1562][442]) ([`7617fd2`][443])
* **`radio`:** `RadioButton`の`formik`ラッパー ([#1204][444]) ([`0b51080`][445])
* **`react`:** 最大バージョン履歴のテキストを追加 ([#1630][446]) ([`705e71f`][447])
* **`scroll`:** 必要時にスクロール表示をアップグレード ([#1200][448]) ([`1532617`][449])
* **`security`:** `SecurityBadge`コンポーネントを追加 ([#1663][450]) ([`3d210bb`][451])
* **`select`:** 開閉時にキャレットをそれぞれ上下に回転 ([#1218][452]) ([`9627e2b`][453])
* **`select-field`:** カスタムオプションのレンダリングを許可 ([#1516][454]) ([`53fe270`][455])
* **`shared-link-settings-modal`:** 分類済みの場合に直接ダウンロードを無効化 ([#1500][456]) ([`2ede02a`][457])
* **`sidebar`:** 外部でのサイドバーの切り替えのサポートを追加 ([#1293][458]) ([`04468fc`][459])
* **`sidebar`:** プログラムによる更新 ([#1472][460]) ([`c7a19e7`][461])
* **`sidebar`:** リテンションポリシー情報をサイドバーに表示 ([#1648][462]) ([`cb9e714`][463])
* **`sidebar`:** 切り替えボタン ([#1268][464]) ([`e2ad4ab`][465])
* **`task-new`:** 担当者を追加/削除する機能を追加 ([#1284][466]) ([`8e87280`][467])
* **`task-new`:** 編集モーダルのサポートを追加 ([#1261][468]) ([`d13839c`][469])
* **`tasks`:**タスクアイコンとツールチップを追加 ([#1491][470]) ([`cf1c5b7`][471])
* **`tasks`:** いずれか/すべてのチェックボックスを追加 ([#1487][472]) ([`21271e3`][473])
* **`tasks`:** タスクのコメント変更オプションを追加 ([#1247][474]) ([`b5775de`][475])
* **`tasks`:** 新しいタスク編集APIメソッドを追加 ([#1260][476]) ([`e05d5a7`][477])
* **`tasks`:** タイトルと説明を含む新しいエラーメッセージを処理 ([#1564][478]) ([`7d691df`][479])
* **`tasks`:** 完了ルールの文字列 ([#1471][480]) ([`cdaf285`][481])
* **`tasks`:** アイコンを使用しないようにタスクのステータスを更新 ([#1169][482]) ([`b4b8bf0`][483])
* **`tasks-new`:** 担当者リストを追加 ([#1287][484]) ([`04b7458`][485])
* **`tasks-new`:** `TaskForm`でタスクメッセージと期日を編集 ([#1269][486]) ([`7f63d97`][487])
* **`tasks-new`:** モーダルヘッダーからベータ版のラベル機能を削除 ([#1314][488]) ([`dca414b`][489])
* **`tasks-new`:** 編集モーダル用のタスクのresin追跡 ([#1327][490]) ([`5b5b354`][491])
* **`typography`:** 本文のタイポグラフィを更新 ([#1442][492]) ([`375c336`][493])、[#1439][163] [#1441][494]をクローズ
* **`unified-share-modal`:** 外部コラボレーションの警告メッセージを追加 ([#1220][495]) ([`064bd2f`][496])
* **`unified-share-modal`:** 連絡先の数を制限するプロパティを追加 ([#1304][497]) ([`2af11b1`][498])
* **`unified-share-modal`:** 招待セクションのツールチップの変更 ([#1499][499]) ([`d7730c7`][500])、[#1498][378]をクローズ
* **`unified-share-modal`:** 招待セクションのツールチップの変更 ([#1504][501]) ([`b9486bc`][502])
* **`unified-share-modal`:** ファイルの分類を表示 ([#1425][503]) ([`e3c7277`][504])
* **`unified-share-modal`:** 外部コラボレータのインジケータを表示 ([#1256][505]) ([`613a438`][506])
* **`uploads`:** アップロードマネージャのresinターゲットを追加 ([#1384][507]) ([`29d2af5`][508])
* **`uploads`:** 単一ファイルのアップロードを再開 ([#1552][509]) ([`093f889`][510])
* **`uploads`:** 複数の失敗したアップロードを再開 ([#1553][511]) ([`60406b9`][512])
* **`uploads`:** 再開可能なアップロード用のアップロードマネージャコンテンツ ([#1555][513]) ([`8380bc7`][514])
* **`usm`:** `initiallySelectedContacts`に基づいて招待セクションを展開 ([#1470][515]) ([`b756a22`][516])
* **`validators`:** `host`、`ipv4`、およびドメイン名の検証機能 ([#1212][517]) ([`f653dac`][518])
* **`versions`:** バージョンアクションにクライアント側エラーメッセージを追加 ([#1404][519]) ([`8ead57c`][520])
* **`versions`:** サイドバーの戻るボタンにresin追跡を追加 ([#1309][521]) ([`901c23d`][522])
* **`versions`:** すべてのバージョン履歴アクションにresin追跡を追加 ([#1285][523]) ([`a4942d3`][524])
* **`versions`:** `ContentSidebar`へのディープリンクのサポートを追加 ([#1203][525]) ([`78ab636`][526])
* **`versions`:** ファイルバージョン復元アクションのサポートを追加 ([#1184][527]) ([`d5396bd`][528])
* **`versions`:** バージョンアクションコールバックのサポートを追加 ([#1417][529]) ([`099a09e`][530])
* **`versions`:** バージョン制限のサポートをサイドバーに追加 ([#1316][531]) ([`bec5699`][532])
* **`versions`:** 相対日付に基づくバージョングループヘッダーを追加 ([#1330][533]) ([`51d5633`][534])
* `metadata_queries` APIレイヤーを追加 ([#1481][535]) ([`2f6ef29`][536])
* 再開可能なアップロード機能の切り替えに関するプロパティを追加 ([#1447][537]) ([`3f19a3b`][538])
* プロパティ`initiallySelectedContacts`を`UnifiedShareModal`に追加 ([#1424][539]) ([`8966016`][540])
* デフォルトのタスクアイコンを`$bdl-box-blue`に ([#1509][541]) ([`dbc7103`][542])
* タスク/コメントに取得されるファイルコラボレータを増加 ([#1483][543]) ([`05f65f4`][544])

### パフォーマンスの向上

* **`sidebar`:** 500ミリ秒の遅延なしでサイドバーパネルを遅延読み込み ([#1223][545]) ([`bb216b4`][546])
* **`sidebar`:** 重複するAPI呼び出しを回避するためにレスポンスをマージ ([#1617][547]) ([`69ad154`][548])
* **`version`:** バージョン履歴モーダルを削除 ([#1633][549]) ([`eb0aac6`][550])

### 取り消し

* **`avatar`:** アバターを非フックの実装に戻す ([#1186][551]) ([`69f329b`][552])

### 重大な変更

* **`formik`:** `inputProps`切り替えコンポーネントからの削除。 `formik`は、V2にアップグレードされました。[ガイドをアップグレードしてください][553]。

* ピア依存関係のReact要件が高くなりました

* リファクタリング (アバター): アバターがフックを使用するようリファクタリング

* 修正 (テスト): 各種テストの問題が修正され、Enzymeが3.8.0にダウングレードされました

* 修正 (アバター): 冗長なチェックが削除されました

* **`classification`:** また、用語の一貫性を保つために`advisoryMessage`プロパティが定義に変更されました

* 機能 (分類): 分類アイコンのストローク幅が大きくなりました

* **`typography`:** 本文の色がデフォルトで[＃222][554] (`bdl-gray`) になります

* 機能 (タイポグラフィ): 一般的なタイポグラフィの文字間隔が更新されました

* **`typography`:** 一般的なタイポグラフィの文字間隔は`em`ではなく`px`になりました。スケーリングを確認してください。

* **`classification`:** 分類データをサイドバーに提供するためのAPIが`{ advisoryMessage, name }`に変更されました

* 機能: デザインの変更

* 機能: 分類バッジの変更

* 修正: PRフィードバック

* 修正: スナップショット

* **`icons`:** `IconShield`が盾を表す新しいアイコンに置き換えられました。32 x 32のガイドラインに従っています。必要に応じてスタイルを上書きしてください。

* **`deps`:** react-\*ピア依存関係を16.9.0に更新

React 16.9への更新には、ライフサイクルメソッドの非推奨の警告が含まれます。これは、依存関係の1つであるreact-tetherに影響します。この警告が表示されないようにする計画は今のところありません。

* **`security`:** [https://nvd.nist.gov/vuln/detail/CVE-2019-10742][555]に対処するため、`axios`のピア依存関係をアップグレード

* **`icons`:** `16x16`の代わりにデフォルトで`20x20`を使用する新しい地球アイコンに更新し、新しい地球`tinycon`を導入

* **`validators`:** メールとドメインの検証に使用される[**`@hapi/address`**][556]のピア依存関係を追加

* 修正: メールチェック用の一般的でない`tlds`が追加されました

* 修正: 不良な`tlds`が追加されました

* **`scroll`:** scroll-into-view-if-neededのメジャーバージョンアップグレード。

* **`i18n`:** `i18n` `FormattedCompMessage`コンポーネントをサポートするため、追加のピア依存関係が追加されました

新しいコンポーネント`FormattedCompMessage`が実装されました。このコンポーネントは、タグのコンテンツを翻訳者またはハッカーから隠し、代わりにソース文字列のコンテンツを翻訳に使用することで、HTMLまたはその他のJSXコンポーネントを含む可能性のある文字列を安全に翻訳します。例: 

```javascript
<FormattedCompMessage id="mystring" description="translator's comment">
   You can <span class="foo">delete</span> <Link to={url}>these files</Link>, or just
  <span id="x" class="unshare">unshare them</span>.
</FormattedCompMessage>
```

`FormattedCompMessage`は`react-intl`の上にレイヤとして構築され、これを使用して実際の翻訳を行います。その機能の目的は、React要素のツリーをコード化された文字列に変換し、`react-intl`でその文字列を翻訳して、コード化された翻訳済みの文字列をReact要素のツリーに再度変換し、最終的にソースツリーの隠されたReact要素を翻訳ツリーの適切な場所に戻すことです。

このコンポーネントは、新しいbabelプラグイン`babel-plugin-box-i18n`を使用して、コード化されたテキストをソースコードから抽出し、`react-intl`babelプラグインによって生成された同じタイプのJSONファイルに配置します。この方法により、これより下流の翻訳プロセスはそれ以上変更しなくても機能します。翻訳はしばらく時間を置いてからプロパティファイルに表示され、`react-intl`によって通常どおりピックアップされます。`FormattedCompMessage`は`react-intl`を使用してこれらの翻訳を取得できます。また、`babel-pluging-box-i18n`プラグインは、すべての文字列に一意のIDと翻訳者の説明が必要であるなどのBoxのポリシーも適用します。

`FormattedCompMessage`コンポーネントは、`FormattedCompMessage`の本文に`<Plural>`コンポーネントを埋め込むことにより、Reactの慣用語法で複数形をサポートできます。

```javascript
<FormattedCompMessage id="mystring" description="translator's comment" count={count}>
  <Plural category="one">This is the <strong>singular</strong> string.</Plural>
  <Plural category="other">This is the <strong>plural</strong> string.</Plural>
</FormattedCompMessage>
```

HTMLとサブコンポーネントは複数形の文字列でも使用できることに注意してください。

`FormattedCompMessage`コンポーネントは、`FormattedCompMessage`の本文に`<Param>`コンポーネントを埋め込むことにより、Reactの慣用語法で置換パラメータをサポートできます。

```javascript
<FormattedCompMessage id="mystring" description="translator's comment">
  User <Param value={user.name} description="The user's full name"/> has already deleted this file.
</FormattedCompMessage>
```

`Param`タグは、通常のコンポーネントであるため、`Plural`タグ内でも使用できることに注意してください。

* **`deps`:** ピア依存関係が更新されました。NPM警告を回避するには、ダウンストリームアプリケーションも更新する必要があります。
* **`icons`:** 古い`IconShare`はデフォルトで`26x26`、古い`IconCollaboration`はデフォルトで`27x26`になっていましたが、新しいアイコンはデフォルトで`32x32`になりました。また、デフォルトのSVGクラス名が`bdl-IconShare`および`bdl-IconCollaboration`に変更されました。

[1]: https://github.com/box/box-ui-elements/compare/v10.2.0...v11.0.0

[2]: https://github.com/box/box-ui-elements/issues/1604

[3]: https://github.com/box/box-ui-elements/commit/572e4d7

[4]: https://github.com/box/box-ui-elements/issues/1272

[5]: https://github.com/box/box-ui-elements/commit/533c112

[6]: https://github.com/box/box-ui-elements/issues/1697

[7]: https://github.com/box/box-ui-elements/commit/2702367

[8]: https://github.com/box/box-ui-elements/issues/1637

[9]: https://github.com/box/box-ui-elements/commit/9302486

[10]: https://github.com/box/box-ui-elements/issues/1456

[11]: https://github.com/box/box-ui-elements/commit/b7c21e7

[12]: https://github.com/box/box-ui-elements/issues/1449

[13]: https://github.com/box/box-ui-elements/commit/b58aa2f

[14]: https://github.com/box/box-ui-elements/issues/1654

[15]: https://github.com/box/box-ui-elements/commit/a05b015

[16]: https://github.com/box/box-ui-elements/issues/1311

[17]: https://github.com/box/box-ui-elements/commit/23e6d5f

[18]: https://github.com/box/box-ui-elements/issues/1243

[19]: https://github.com/box/box-ui-elements/commit/88a5f1c

[20]: https://github.com/box/box-ui-elements/issues/1643

[21]: https://github.com/box/box-ui-elements/commit/f89c138

[22]: https://github.com/box/box-ui-elements/issues/1514

[23]: https://github.com/box/box-ui-elements/commit/a4f446f

[24]: https://github.com/box/box-ui-elements/issues/1517

[25]: https://github.com/box/box-ui-elements/commit/35a4070

[26]: https://github.com/box/box-ui-elements/issues/1249

[27]: https://github.com/box/box-ui-elements/commit/c164aec

[28]: https://github.com/box/box-ui-elements/issues/1657

[29]: https://github.com/box/box-ui-elements/commit/fec4735

[30]: https://github.com/box/box-ui-elements/issues/1362

[31]: https://github.com/box/box-ui-elements/commit/a6989a0

[32]: https://github.com/box/box-ui-elements/issues/1400

[33]: https://github.com/box/box-ui-elements/commit/3ac424c

[34]: https://github.com/box/box-ui-elements/issues/1622

[35]: https://github.com/box/box-ui-elements/commit/4ab0c20

[36]: https://github.com/box/box-ui-elements/issues/1378

[37]: https://github.com/box/box-ui-elements/commit/fa82a8d

[38]: https://github.com/box/box-ui-elements/issues/1710

[39]: https://github.com/box/box-ui-elements/commit/d08b53c

[40]: https://github.com/box/box-ui-elements/issues/1712

[41]: https://github.com/box/box-ui-elements/commit/9e620ce

[42]: https://github.com/box/box-ui-elements/issues/1390

[43]: https://github.com/box/box-ui-elements/commit/5db4b3e

[44]: https://github.com/box/box-ui-elements/issues/1680

[45]: https://github.com/box/box-ui-elements/commit/baefaed

[46]: https://github.com/box/box-ui-elements/issues/1407

[47]: https://github.com/box/box-ui-elements/commit/5e32c80

[48]: https://github.com/box/box-ui-elements/issues/1474

[49]: https://github.com/box/box-ui-elements/commit/e270131

[50]: https://github.com/box/box-ui-elements/issues/1358

[51]: https://github.com/box/box-ui-elements/commit/927a34a

[52]: https://github.com/box/box-ui-elements/issues/1291

[53]: https://github.com/box/box-ui-elements/commit/ef48f88

[54]: https://github.com/box/box-ui-elements/issues/1270

[55]: https://github.com/box/box-ui-elements/commit/bcf2852

[56]: https://github.com/box/box-ui-elements/issues/1469

[57]: https://github.com/box/box-ui-elements/commit/6b82510

[58]: https://github.com/box/box-ui-elements/issues/1584

[59]: https://github.com/box/box-ui-elements/commit/7d38fb8

[60]: https://github.com/box/box-ui-elements/issues/1515

[61]: https://github.com/box/box-ui-elements/commit/55edef7

[62]: https://github.com/box/box-ui-elements/issues/1333

[63]: https://github.com/box/box-ui-elements/commit/9740342

[64]: https://github.com/box/box-ui-elements/issues/1245

[65]: https://github.com/box/box-ui-elements/commit/d7f53ff

[66]: https://github.com/box/box-ui-elements/issues/1665

[67]: https://github.com/box/box-ui-elements/commit/84b4ea4

[68]: https://github.com/box/box-ui-elements/issues/1511

[69]: https://github.com/box/box-ui-elements/commit/a6de1b0

[70]: https://github.com/box/box-ui-elements/issues/1653

[71]: https://github.com/box/box-ui-elements/commit/f35b2ea

[72]: https://github.com/box/box-ui-elements/issues/1652

[73]: https://github.com/box/box-ui-elements/commit/6faed59

[74]: https://github.com/box/box-ui-elements/issues/1191

[75]: https://github.com/box/box-ui-elements/commit/19f3703

[76]: https://github.com/box/box-ui-elements/issues/1329

[77]: https://github.com/box/box-ui-elements/commit/d1a1bd9

[78]: https://github.com/box/box-ui-elements/issues/1281

[79]: https://github.com/box/box-ui-elements/commit/94869ad

[80]: https://github.com/box/box-ui-elements/issues/1479

[81]: https://github.com/box/box-ui-elements/commit/2d29628

[82]: https://github.com/box/box-ui-elements/issues/1655

[83]: https://github.com/box/box-ui-elements/commit/e2be3bd

[84]: https://github.com/box/box-ui-elements/issues/1694

[85]: https://github.com/box/box-ui-elements/commit/a20e610

[86]: https://github.com/box/box-ui-elements/issues/1178

[87]: https://github.com/box/box-ui-elements/commit/61d4e3d

[88]: https://github.com/box/box-ui-elements/commit/bf7782c

[89]: https://github.com/box/box-ui-elements/issues/1310

[90]: https://github.com/box/box-ui-elements/commit/f8bb323

[91]: https://github.com/box/box-ui-elements/issues/1214

[92]: https://github.com/box/box-ui-elements/commit/674bf45

[93]: https://github.com/box/box-ui-elements/issues/1490

[94]: https://github.com/box/box-ui-elements/commit/73d95b9

[95]: https://github.com/box/box-ui-elements/issues/1197

[96]: https://github.com/box/box-ui-elements/commit/2d34ad4

[97]: https://github.com/box/box-ui-elements/issues/1345

[98]: https://github.com/box/box-ui-elements/commit/10d6b76

[99]: https://github.com/box/box-ui-elements/issues/1226

[100]: https://github.com/box/box-ui-elements/commit/c91d320

[101]: https://github.com/box/box-ui-elements/issues/1238

[102]: https://github.com/box/box-ui-elements/commit/9e91115

[103]: https://github.com/box/box-ui-elements/issues/1242

[104]: https://github.com/box/box-ui-elements/commit/3b62245

[105]: https://github.com/box/box-ui-elements/issues/1297

[106]: https://github.com/box/box-ui-elements/commit/bfa075a

[107]: https://github.com/box/box-ui-elements/issues/1702

[108]: https://github.com/box/box-ui-elements/commit/b126ecb

[109]: https://github.com/box/box-ui-elements/issues/1266

[110]: https://github.com/box/box-ui-elements/commit/b47e22e

[111]: https://github.com/box/box-ui-elements/issues/1241

[112]: https://github.com/box/box-ui-elements/commit/9e07f2e

[113]: https://github.com/box/box-ui-elements/issues/1576

[114]: https://github.com/box/box-ui-elements/commit/a814657

[115]: https://github.com/box/box-ui-elements/issues/1229

[116]: https://github.com/box/box-ui-elements/commit/05d86b1

[117]: https://github.com/box/box-ui-elements/issues/1299

[118]: https://github.com/box/box-ui-elements/commit/9c78135

[119]: https://github.com/box/box-ui-elements/issues/1545

[120]: https://github.com/box/box-ui-elements/commit/6ba65c6

[121]: https://github.com/box/box-ui-elements/issues/1344

[122]: https://github.com/box/box-ui-elements/commit/716fe01

[123]: https://github.com/box/box-ui-elements/issues/1463

[124]: https://github.com/box/box-ui-elements/commit/943638d

[125]: https://github.com/box/box-ui-elements/issues/1434

[126]: https://github.com/box/box-ui-elements/commit/afd94fa

[127]: https://github.com/box/box-ui-elements/issues/1446

[128]: https://github.com/box/box-ui-elements/commit/5baeb5b

[129]: https://github.com/box/box-ui-elements/issues/1175

[130]: https://github.com/box/box-ui-elements/commit/2ba8a1d

[131]: https://github.com/box/box-ui-elements/issues/1629

[132]: https://github.com/box/box-ui-elements/commit/85995cd

[133]: https://github.com/box/box-ui-elements/issues/1192

[134]: https://github.com/box/box-ui-elements/commit/1dc0d99

[135]: https://github.com/box/box-ui-elements/issues/1713

[136]: https://github.com/box/box-ui-elements/commit/50b72f2

[137]: https://github.com/box/box-ui-elements/issues/1684

[138]: https://github.com/box/box-ui-elements/commit/29a1220

[139]: https://github.com/box/box-ui-elements/issues/1305

[140]: https://github.com/box/box-ui-elements/commit/9a14ae7

[141]: https://github.com/box/box-ui-elements/issues/1682

[142]: https://github.com/box/box-ui-elements/commit/21af355

[143]: https://github.com/box/box-ui-elements/issues/1489

[144]: https://github.com/box/box-ui-elements/commit/d3d98a5

[145]: https://github.com/box/box-ui-elements/issues/1350

[146]: https://github.com/box/box-ui-elements/commit/7933932

[147]: https://github.com/box/box-ui-elements/issues/1450

[148]: https://github.com/box/box-ui-elements/commit/48d22a4

[149]: https://github.com/box/box-ui-elements/issues/1315

[150]: https://github.com/box/box-ui-elements/commit/e4fdf58

[151]: https://github.com/box/box-ui-elements/issues/1357

[152]: https://github.com/box/box-ui-elements/commit/2bf496e

[153]: https://github.com/box/box-ui-elements/issues/1681

[154]: https://github.com/box/box-ui-elements/commit/1e0d1ab

[155]: https://github.com/box/box-ui-elements/issues/1367

[156]: https://github.com/box/box-ui-elements/commit/d67fcfe

[157]: https://github.com/box/box-ui-elements/issues/1364

[158]: https://github.com/box/box-ui-elements/commit/d47c69c

[159]: https://github.com/box/box-ui-elements/issues/1597

[160]: https://github.com/box/box-ui-elements/commit/d16b0da

[161]: https://github.com/box/box-ui-elements/issues/1484

[162]: https://github.com/box/box-ui-elements/commit/6c1a363

[163]: https://github.com/box/box-ui-elements/issues/1439

[164]: https://github.com/box/box-ui-elements/commit/936f5e0

[165]: https://github.com/box/box-ui-elements/issues/1452

[166]: https://github.com/box/box-ui-elements/commit/c0c05be

[167]: https://github.com/box/box-ui-elements/issues/1448

[168]: https://github.com/box/box-ui-elements/commit/85ca38a

[169]: https://github.com/box/box-ui-elements/issues/1415

[170]: https://github.com/box/box-ui-elements/commit/e432c47

[171]: https://github.com/box/box-ui-elements/issues/1280

[172]: https://github.com/box/box-ui-elements/commit/3776dc8

[173]: https://github.com/box/box-ui-elements/issues/1478

[174]: https://github.com/box/box-ui-elements/commit/7d9100b

[175]: https://github.com/box/box-ui-elements/issues/1228

[176]: https://github.com/box/box-ui-elements/commit/db26743

[177]: https://github.com/box/box-ui-elements/issues/1664

[178]: https://github.com/box/box-ui-elements/commit/ae23f01

[179]: https://github.com/box/box-ui-elements/issues/1671

[180]: https://github.com/box/box-ui-elements/commit/9f040f2

[181]: https://github.com/box/box-ui-elements/issues/1359

[182]: https://github.com/box/box-ui-elements/commit/cd840f4

[183]: https://github.com/box/box-ui-elements/issues/1563

[184]: https://github.com/box/box-ui-elements/commit/f90a0d7

[185]: https://github.com/box/box-ui-elements/issues/1649

[186]: https://github.com/box/box-ui-elements/commit/e85e57a

[187]: https://github.com/box/box-ui-elements/issues/1508

[188]: https://github.com/box/box-ui-elements/commit/dac39ee

[189]: https://github.com/box/box-ui-elements/issues/1557

[190]: https://github.com/box/box-ui-elements/commit/e7f953e

[191]: https://github.com/box/box-ui-elements/issues/1236

[192]: https://github.com/box/box-ui-elements/commit/eb398fc

[193]: https://github.com/box/box-ui-elements/issues/1263

[194]: https://github.com/box/box-ui-elements/commit/853e106

[195]: https://github.com/box/box-ui-elements/issues/1645

[196]: https://github.com/box/box-ui-elements/commit/824f390

[197]: https://github.com/box/box-ui-elements/issues/1366

[198]: https://github.com/box/box-ui-elements/commit/e71409c

[199]: https://github.com/box/box-ui-elements/issues/1341

[200]: https://github.com/box/box-ui-elements/commit/c5e07b1

[201]: https://github.com/box/box-ui-elements/issues/1659

[202]: https://github.com/box/box-ui-elements/commit/7a53050

[203]: https://github.com/box/box-ui-elements/issues/1573

[204]: https://github.com/box/box-ui-elements/commit/79c3f00

[205]: https://github.com/box/box-ui-elements/issues/1605

[206]: https://github.com/box/box-ui-elements/commit/63efa10

[207]: https://github.com/box/box-ui-elements/issues/1540

[208]: https://github.com/box/box-ui-elements/commit/af49827

[209]: https://github.com/box/box-ui-elements/issues/1323

[210]: https://github.com/box/box-ui-elements/commit/9a4137b

[211]: https://github.com/box/box-ui-elements/issues/1353

[212]: https://github.com/box/box-ui-elements/commit/be10f37

[213]: https://github.com/box/box-ui-elements/issues/1312

[214]: https://github.com/box/box-ui-elements/commit/411c3e9

[215]: https://github.com/box/box-ui-elements/issues/1321

[216]: https://github.com/box/box-ui-elements/commit/9f554ff

[217]: https://github.com/box/box-ui-elements/issues/1334

[218]: https://github.com/box/box-ui-elements/commit/95a3c73

[219]: https://github.com/box/box-ui-elements/issues/1328

[220]: https://github.com/box/box-ui-elements/commit/cf1acf1

[221]: https://github.com/box/box-ui-elements/issues/1513

[222]: https://github.com/box/box-ui-elements/commit/00e9707

[223]: https://github.com/box/box-ui-elements/issues/1621

[224]: https://github.com/box/box-ui-elements/commit/dc33967

[225]: https://github.com/box/box-ui-elements/issues/1250

[226]: https://github.com/box/box-ui-elements/commit/be7bc2f

[227]: https://github.com/box/box-ui-elements/issues/1189

[228]: https://github.com/box/box-ui-elements/commit/630fd38

[229]: https://github.com/box/box-ui-elements/issues/1603

[230]: https://github.com/box/box-ui-elements/commit/2cbe014

[231]: https://github.com/box/box-ui-elements/issues/1332

[232]: https://github.com/box/box-ui-elements/commit/4e760f7

[233]: https://github.com/box/box-ui-elements/issues/1627

[234]: https://github.com/box/box-ui-elements/commit/c788770

[235]: https://github.com/box/box-ui-elements/issues/1295

[236]: https://github.com/box/box-ui-elements/commit/dbbf598

[237]: https://github.com/box/box-ui-elements/issues/1301

[238]: https://github.com/box/box-ui-elements/commit/f387a9b

[239]: https://github.com/box/box-ui-elements/issues/1313

[240]: https://github.com/box/box-ui-elements/commit/c61fa77

[241]: https://github.com/box/box-ui-elements/issues/1302

[242]: https://github.com/box/box-ui-elements/commit/2f88e96

[243]: https://github.com/box/box-ui-elements/issues/1317

[244]: https://github.com/box/box-ui-elements/commit/6560b23

[245]: https://github.com/box/box-ui-elements/issues/1318

[246]: https://github.com/box/box-ui-elements/commit/2cdfcc4

[247]: https://github.com/box/box-ui-elements/issues/1185

[248]: https://github.com/box/box-ui-elements/commit/8a4c294

[249]: https://github.com/box/box-ui-elements/issues/1692

[250]: https://github.com/box/box-ui-elements/commit/1c11770

[251]: https://github.com/box/box-ui-elements/issues/1647

[252]: https://github.com/box/box-ui-elements/commit/732a1dd

[253]: https://github.com/box/box-ui-elements/issues/1196

[254]: https://github.com/box/box-ui-elements/commit/6501413

[255]: https://github.com/box/box-ui-elements/issues/1453

[256]: https://github.com/box/box-ui-elements/commit/4ce5a06

[257]: https://github.com/box/box-ui-elements/issues/1283

[258]: https://github.com/box/box-ui-elements/commit/c49e52f

[259]: https://github.com/box/box-ui-elements/issues/1570

[260]: https://github.com/box/box-ui-elements/commit/dbf115c

[261]: https://github.com/box/box-ui-elements/issues/1695

[262]: https://github.com/box/box-ui-elements/commit/3da93c8

[263]: https://github.com/box/box-ui-elements/issues/1646

[264]: https://github.com/box/box-ui-elements/commit/38d10e4

[265]: https://github.com/box/box-ui-elements/issues/1600

[266]: https://github.com/box/box-ui-elements/commit/0218f10

[267]: https://github.com/box/box-ui-elements/issues/1397

[268]: https://github.com/box/box-ui-elements/commit/16311dc

[269]: https://github.com/box/box-ui-elements/issues/1602

[270]: https://github.com/box/box-ui-elements/commit/bff49bb

[271]: https://github.com/box/box-ui-elements/issues/1674

[272]: https://github.com/box/box-ui-elements/commit/938c483

[273]: https://github.com/box/box-ui-elements/issues/1320

[274]: https://github.com/box/box-ui-elements/commit/c4149ea

[275]: https://github.com/box/box-ui-elements/issues/1354

[276]: https://github.com/box/box-ui-elements/commit/e60b020

[277]: https://github.com/box/box-ui-elements/issues/1405

[278]: https://github.com/box/box-ui-elements/commit/9a527f2

[279]: https://github.com/box/box-ui-elements/issues/1568

[280]: https://github.com/box/box-ui-elements/commit/b68eccd

[281]: https://github.com/box/box-ui-elements/issues/1347

[282]: https://github.com/box/box-ui-elements/commit/95949e2

[283]: https://github.com/box/box-ui-elements/issues/1365

[284]: https://github.com/box/box-ui-elements/commit/65d23b9

[285]: https://github.com/box/box-ui-elements/issues/1631

[286]: https://github.com/box/box-ui-elements/commit/25d0741

[287]: https://github.com/box/box-ui-elements/issues/1342

[288]: https://github.com/box/box-ui-elements/commit/2487b42

[289]: https://github.com/box/box-ui-elements/issues/1395

[290]: https://github.com/box/box-ui-elements/commit/de7e74e

[291]: https://github.com/box/box-ui-elements/issues/1339

[292]: https://github.com/box/box-ui-elements/commit/fcb390d

[293]: https://github.com/box/box-ui-elements/issues/1351

[294]: https://github.com/box/box-ui-elements/commit/93b95c4

[295]: https://github.com/box/box-ui-elements/issues/1193

[296]: https://github.com/box/box-ui-elements/commit/9d7567e

[297]: https://github.com/box/box-ui-elements/issues/1276

[298]: https://github.com/box/box-ui-elements/commit/e0cd7e3

[299]: https://github.com/box/box-ui-elements/issues/1275

[300]: https://github.com/box/box-ui-elements/commit/ef3b2fd

[301]: https://github.com/box/box-ui-elements/issues/1556

[302]: https://github.com/box/box-ui-elements/commit/bc9672e

[303]: https://github.com/box/box-ui-elements/issues/1662

[304]: https://github.com/box/box-ui-elements/commit/fa66232

[305]: https://github.com/box/box-ui-elements/issues/1368

[306]: https://github.com/box/box-ui-elements/commit/361d73f

[307]: https://github.com/box/box-ui-elements/issues/1230

[308]: https://github.com/box/box-ui-elements/commit/c41dd47

[309]: https://github.com/box/box-ui-elements/issues/1678

[310]: https://github.com/box/box-ui-elements/commit/cfd055b

[311]: https://github.com/box/box-ui-elements/issues/1688

[312]: https://github.com/box/box-ui-elements/commit/150cbbe

[313]: https://github.com/box/box-ui-elements/issues/1198

[314]: https://github.com/box/box-ui-elements/commit/2e590d3

[315]: https://github.com/box/box-ui-elements/issues/1606

[316]: https://github.com/box/box-ui-elements/commit/1163db5

[317]: https://github.com/box/box-ui-elements/issues/1698

[318]: https://github.com/box/box-ui-elements/commit/6b9ded9

[319]: https://github.com/box/box-ui-elements/issues/1171

[320]: https://github.com/box/box-ui-elements/commit/7dd1bdf

[321]: https://github.com/box/box-ui-elements/issues/761

[322]: https://github.com/box/box-ui-elements/issues/1180

[323]: https://github.com/box/box-ui-elements/commit/48d711e

[324]: https://github.com/box/box-ui-elements/issues/1623

[325]: https://github.com/box/box-ui-elements/commit/52ecdcb

[326]: https://github.com/box/box-ui-elements/issues/1503

[327]: https://github.com/box/box-ui-elements/commit/132782d

[328]: https://github.com/box/box-ui-elements/issues/1585

[329]: https://github.com/box/box-ui-elements/commit/781a246

[330]: https://github.com/box/box-ui-elements/issues/1546

[331]: https://github.com/box/box-ui-elements/commit/9bdc1e6

[332]: https://github.com/box/box-ui-elements/issues/1520

[333]: https://github.com/box/box-ui-elements/commit/8eb68b3

[334]: https://github.com/box/box-ui-elements/issues/1231

[335]: https://github.com/box/box-ui-elements/commit/2336262

[336]: https://github.com/box/box-ui-elements/issues/1237

[337]: https://github.com/box/box-ui-elements/commit/90bf2f3

[338]: https://github.com/box/box-ui-elements/issues/1549

[339]: https://github.com/box/box-ui-elements/commit/adae46d

[340]: https://github.com/box/box-ui-elements/issues/1566

[341]: https://github.com/box/box-ui-elements/commit/52e2b17

[342]: https://github.com/box/box-ui-elements/issues/1468

[343]: https://github.com/box/box-ui-elements/commit/33dd037

[344]: https://github.com/box/box-ui-elements/issues/1239

[345]: https://github.com/box/box-ui-elements/commit/b29b6bf

[346]: https://github.com/box/box-ui-elements/issues/1349

[347]: https://github.com/box/box-ui-elements/commit/97a1d44

[348]: https://github.com/box/box-ui-elements/issues/1475

[349]: https://github.com/box/box-ui-elements/commit/1035afb

[350]: https://github.com/box/box-ui-elements/issues/1482

[351]: https://github.com/box/box-ui-elements/commit/ef4a7ee

[352]: https://github.com/box/box-ui-elements/issues/1464

[353]: https://github.com/box/box-ui-elements/commit/f32b8ca

[354]: https://github.com/box/box-ui-elements/issues/1409

[355]: https://github.com/box/box-ui-elements/issues/1294

[356]: https://github.com/box/box-ui-elements/commit/a2e5bd9

[357]: https://github.com/box/box-ui-elements/issues/1476

[358]: https://github.com/box/box-ui-elements/commit/803b0a0

[359]: https://github.com/box/box-ui-elements/issues/1571

[360]: https://github.com/box/box-ui-elements/commit/3e948b8

[361]: https://github.com/box/box-ui-elements/commit/7bbc2e8

[362]: https://github.com/box/box-ui-elements/issues/1372

[363]: https://github.com/box/box-ui-elements/commit/64a099e

[364]: https://github.com/box/box-ui-elements/issues/1685

[365]: https://github.com/box/box-ui-elements/commit/acc3395

[366]: https://github.com/box/box-ui-elements/issues/1257

[367]: https://github.com/box/box-ui-elements/commit/0bdfc96

[368]: https://github.com/box/box-ui-elements/issues/1561

[369]: https://github.com/box/box-ui-elements/commit/2adbaef

[370]: https://github.com/box/box-ui-elements/issues/1686

[371]: https://github.com/box/box-ui-elements/commit/3d4d59e

[372]: https://github.com/box/box-ui-elements/issues/1618

[373]: https://github.com/box/box-ui-elements/commit/635808e

[374]: https://github.com/box/box-ui-elements/issues/1519

[375]: https://github.com/box/box-ui-elements/commit/faef59e

[376]: https://github.com/box/box-ui-elements/issues/1620

[377]: https://github.com/box/box-ui-elements/commit/74e46b2

[378]: https://github.com/box/box-ui-elements/issues/1498

[379]: https://github.com/box/box-ui-elements/commit/73aadae

[380]: https://github.com/box/box-ui-elements/issues/976

[381]: https://github.com/box/box-ui-elements/commit/31fdf12

[382]: https://github.com/box/box-ui-elements/issues/1638

[383]: https://github.com/box/box-ui-elements/commit/33dfacb

[384]: https://github.com/box/box-ui-elements/issues/1708

[385]: https://github.com/box/box-ui-elements/commit/0115fb6

[386]: https://github.com/box/box-ui-elements/issues/1550

[387]: https://github.com/box/box-ui-elements/commit/1558d36

[388]: https://github.com/box/box-ui-elements/issues/1338

[389]: https://github.com/box/box-ui-elements/commit/8e9d503

[390]: https://github.com/box/box-ui-elements/issues/1547

[391]: https://github.com/box/box-ui-elements/commit/55a182e

[392]: https://github.com/box/box-ui-elements/issues/1696

[393]: https://github.com/box/box-ui-elements/commit/add261b

[394]: https://github.com/box/box-ui-elements/issues/1224

[395]: https://github.com/box/box-ui-elements/commit/a01ea82

[396]: https://github.com/box/box-ui-elements/issues/1216

[397]: https://github.com/box/box-ui-elements/commit/753d0e2

[398]: https://github.com/box/box-ui-elements/issues/1370

[399]: https://github.com/box/box-ui-elements/commit/67b6db4

[400]: https://github.com/box/box-ui-elements/issues/1225

[401]: https://github.com/box/box-ui-elements/commit/9d73144

[402]: https://github.com/box/box-ui-elements/issues/1583

[403]: https://github.com/box/box-ui-elements/commit/cac4023

[404]: https://github.com/box/box-ui-elements/issues/1183

[405]: https://github.com/box/box-ui-elements/commit/ebccf18

[406]: https://github.com/box/box-ui-elements/issues/1232

[407]: https://github.com/box/box-ui-elements/commit/4f4e31b

[408]: https://github.com/box/box-ui-elements/issues/1217

[409]: https://github.com/box/box-ui-elements/commit/3dded61

[410]: https://github.com/box/box-ui-elements/issues/1172

[411]: https://github.com/box/box-ui-elements/commit/1f90dde

[412]: https://github.com/box/box-ui-elements/issues/1207

[413]: https://github.com/box/box-ui-elements/commit/29f07a6

[414]: https://github.com/box/box-ui-elements/issues/1206

[415]: https://github.com/box/box-ui-elements/issues/1510

[416]: https://github.com/box/box-ui-elements/commit/f9705a2

[417]: https://github.com/box/box-ui-elements/issues/1548

[418]: https://github.com/box/box-ui-elements/commit/a45c998

[419]: https://github.com/box/box-ui-elements/issues/1383

[420]: https://github.com/box/box-ui-elements/commit/5140c13

[421]: https://github.com/box/box-ui-elements/issues/1598

[422]: https://github.com/box/box-ui-elements/commit/7b341f7

[423]: https://github.com/box/box-ui-elements/issues/1703

[424]: https://github.com/box/box-ui-elements/commit/d55f84a

[425]: https://github.com/box/box-ui-elements/issues/1667

[426]: https://github.com/box/box-ui-elements/commit/1b8a29d

[427]: https://github.com/box/box-ui-elements/issues/1666

[428]: https://github.com/box/box-ui-elements/commit/cbf96ef

[429]: https://github.com/box/box-ui-elements/issues/1286

[430]: https://github.com/box/box-ui-elements/commit/fb84aee

[431]: https://github.com/box/box-ui-elements/commit/ee8569f

[432]: https://github.com/box/box-ui-elements/issues/1194

[433]: https://github.com/box/box-ui-elements/commit/c75a7bb

[434]: https://github.com/box/box-ui-elements/issues/1210

[435]: https://github.com/box/box-ui-elements/commit/69f25e8

[436]: https://github.com/box/box-ui-elements/issues/1714

[437]: https://github.com/box/box-ui-elements/commit/d37b9ec

[438]: https://github.com/box/box-ui-elements/issues/1346

[439]: https://github.com/box/box-ui-elements/commit/a6cde28

[440]: https://github.com/box/box-ui-elements/issues/1396

[441]: https://github.com/box/box-ui-elements/commit/9355631

[442]: https://github.com/box/box-ui-elements/issues/1562

[443]: https://github.com/box/box-ui-elements/commit/7617fd2

[444]: https://github.com/box/box-ui-elements/issues/1204

[445]: https://github.com/box/box-ui-elements/commit/0b51080

[446]: https://github.com/box/box-ui-elements/issues/1630

[447]: https://github.com/box/box-ui-elements/commit/705e71f

[448]: https://github.com/box/box-ui-elements/issues/1200

[449]: https://github.com/box/box-ui-elements/commit/1532617

[450]: https://github.com/box/box-ui-elements/issues/1663

[451]: https://github.com/box/box-ui-elements/commit/3d210bb

[452]: https://github.com/box/box-ui-elements/issues/1218

[453]: https://github.com/box/box-ui-elements/commit/9627e2b

[454]: https://github.com/box/box-ui-elements/issues/1516

[455]: https://github.com/box/box-ui-elements/commit/53fe270

[456]: https://github.com/box/box-ui-elements/issues/1500

[457]: https://github.com/box/box-ui-elements/commit/2ede02a

[458]: https://github.com/box/box-ui-elements/issues/1293

[459]: https://github.com/box/box-ui-elements/commit/04468fc

[460]: https://github.com/box/box-ui-elements/issues/1472

[461]: https://github.com/box/box-ui-elements/commit/c7a19e7

[462]: https://github.com/box/box-ui-elements/issues/1648

[463]: https://github.com/box/box-ui-elements/commit/cb9e714

[464]: https://github.com/box/box-ui-elements/issues/1268

[465]: https://github.com/box/box-ui-elements/commit/e2ad4ab

[466]: https://github.com/box/box-ui-elements/issues/1284

[467]: https://github.com/box/box-ui-elements/commit/8e87280

[468]: https://github.com/box/box-ui-elements/issues/1261

[469]: https://github.com/box/box-ui-elements/commit/d13839c

[470]: https://github.com/box/box-ui-elements/issues/1491

[471]: https://github.com/box/box-ui-elements/commit/cf1c5b7

[472]: https://github.com/box/box-ui-elements/issues/1487

[473]: https://github.com/box/box-ui-elements/commit/21271e3

[474]: https://github.com/box/box-ui-elements/issues/1247

[475]: https://github.com/box/box-ui-elements/commit/b5775de

[476]: https://github.com/box/box-ui-elements/issues/1260

[477]: https://github.com/box/box-ui-elements/commit/e05d5a7

[478]: https://github.com/box/box-ui-elements/issues/1564

[479]: https://github.com/box/box-ui-elements/commit/7d691df

[480]: https://github.com/box/box-ui-elements/issues/1471

[481]: https://github.com/box/box-ui-elements/commit/cdaf285

[482]: https://github.com/box/box-ui-elements/issues/1169

[483]: https://github.com/box/box-ui-elements/commit/b4b8bf0

[484]: https://github.com/box/box-ui-elements/issues/1287

[485]: https://github.com/box/box-ui-elements/commit/04b7458

[486]: https://github.com/box/box-ui-elements/issues/1269

[487]: https://github.com/box/box-ui-elements/commit/7f63d97

[488]: https://github.com/box/box-ui-elements/issues/1314

[489]: https://github.com/box/box-ui-elements/commit/dca414b

[490]: https://github.com/box/box-ui-elements/issues/1327

[491]: https://github.com/box/box-ui-elements/commit/5b5b354

[492]: https://github.com/box/box-ui-elements/issues/1442

[493]: https://github.com/box/box-ui-elements/commit/375c336

[494]: https://github.com/box/box-ui-elements/issues/1441

[495]: https://github.com/box/box-ui-elements/issues/1220

[496]: https://github.com/box/box-ui-elements/commit/064bd2f

[497]: https://github.com/box/box-ui-elements/issues/1304

[498]: https://github.com/box/box-ui-elements/commit/2af11b1

[499]: https://github.com/box/box-ui-elements/issues/1499

[500]: https://github.com/box/box-ui-elements/commit/d7730c7

[501]: https://github.com/box/box-ui-elements/issues/1504

[502]: https://github.com/box/box-ui-elements/commit/b9486bc

[503]: https://github.com/box/box-ui-elements/issues/1425

[504]: https://github.com/box/box-ui-elements/commit/e3c7277

[505]: https://github.com/box/box-ui-elements/issues/1256

[506]: https://github.com/box/box-ui-elements/commit/613a438

[507]: https://github.com/box/box-ui-elements/issues/1384

[508]: https://github.com/box/box-ui-elements/commit/29d2af5

[509]: https://github.com/box/box-ui-elements/issues/1552

[510]: https://github.com/box/box-ui-elements/commit/093f889

[511]: https://github.com/box/box-ui-elements/issues/1553

[512]: https://github.com/box/box-ui-elements/commit/60406b9

[513]: https://github.com/box/box-ui-elements/issues/1555

[514]: https://github.com/box/box-ui-elements/commit/8380bc7

[515]: https://github.com/box/box-ui-elements/issues/1470

[516]: https://github.com/box/box-ui-elements/commit/b756a22

[517]: https://github.com/box/box-ui-elements/issues/1212

[518]: https://github.com/box/box-ui-elements/commit/f653dac

[519]: https://github.com/box/box-ui-elements/issues/1404

[520]: https://github.com/box/box-ui-elements/commit/8ead57c

[521]: https://github.com/box/box-ui-elements/issues/1309

[522]: https://github.com/box/box-ui-elements/commit/901c23d

[523]: https://github.com/box/box-ui-elements/issues/1285

[524]: https://github.com/box/box-ui-elements/commit/a4942d3

[525]: https://github.com/box/box-ui-elements/issues/1203

[526]: https://github.com/box/box-ui-elements/commit/78ab636

[527]: https://github.com/box/box-ui-elements/issues/1184

[528]: https://github.com/box/box-ui-elements/commit/d5396bd

[529]: https://github.com/box/box-ui-elements/issues/1417

[530]: https://github.com/box/box-ui-elements/commit/099a09e

[531]: https://github.com/box/box-ui-elements/issues/1316

[532]: https://github.com/box/box-ui-elements/commit/bec5699

[533]: https://github.com/box/box-ui-elements/issues/1330

[534]: https://github.com/box/box-ui-elements/commit/51d5633

[535]: https://github.com/box/box-ui-elements/issues/1481

[536]: https://github.com/box/box-ui-elements/commit/2f6ef29

[537]: https://github.com/box/box-ui-elements/issues/1447

[538]: https://github.com/box/box-ui-elements/commit/3f19a3b

[539]: https://github.com/box/box-ui-elements/issues/1424

[540]: https://github.com/box/box-ui-elements/commit/8966016

[541]: https://github.com/box/box-ui-elements/issues/1509

[542]: https://github.com/box/box-ui-elements/commit/dbc7103

[543]: https://github.com/box/box-ui-elements/issues/1483

[544]: https://github.com/box/box-ui-elements/commit/05f65f4

[545]: https://github.com/box/box-ui-elements/issues/1223

[546]: https://github.com/box/box-ui-elements/commit/bb216b4

[547]: https://github.com/box/box-ui-elements/issues/1617

[548]: https://github.com/box/box-ui-elements/commit/69ad154

[549]: https://github.com/box/box-ui-elements/issues/1633

[550]: https://github.com/box/box-ui-elements/commit/eb0aac6

[551]: https://github.com/box/box-ui-elements/issues/1186

[552]: https://github.com/box/box-ui-elements/commit/69f329b

[553]: https://github.com/jaredpalmer/formik/blob/master/docs/migrating-v2.md

[554]: https://github.com/box/box-developer-changelog/issues/222

[555]: https://nvd.nist.gov/vuln/detail/CVE-2019-10742

[556]: https://github.com/hapi/address
