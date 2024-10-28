---
applied_at: '2024-01-25'
applies_to:
  - frontend
  - ui-elements
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-ui-elements/releases/tag/v19.0.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2024-01-25-box-ui-elements-v1900-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2024-02-02-metadata-view-content-explorer
previous_page_id: 2024-01-19-rule-response-action-param-added
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2024/01-25-box-ui-elements-v1900-released.md
published_at: '2024-01-25'
fullyTranslated: true
---
# Box UI Elements `v19.0.0`のリリース

# [19.0.0][1] (2024/01/25)

### バグ修正

* **activity-feed-zoom:** 項目コンテナにmin-heightプロパティを追加 ([#3411][2]) ([`a60a70d`][3])
* **button:** アクセシビリティのためにariaラベルを追加 ([#3377][4]) ([`9a9b5e3`][5])
* **content-answers:** stylesに`bdl`プレフィックスを追加 ([#3421][6]) ([`fdbfc4d`][7])
* **content-explorer:** 404の発生時に`onDelete`コールバックの成功を許可 ([#3468][8]) ([`13ed6da`][9])
* **content-explorer:** デバイスがダウンロードをサポートするかどうかを検出 ([#3480][10]) ([`fa68f9b`][11])
* **content-explorer:** 階層リンクにおけるテキストの省略を修正 ([#3481][12]) ([`6099b1d`][13])
* **content-explorer:** 残っていた`contentPreviewProps`を削除 ([#3489][14]) ([`4181e0c`][15])
* **content-explorer:** デバイスが小さい場合にページ数を表示 ([#3498][16]) ([`98537b9`][17])
* **content-picker:** ページ割りコンポーネントを使用して適切なスタイルをインポート ([#3472][18]) ([`6aef87b`][19])
* **content-sidebar:** 注釈の上に積み重なるようにZインデックスを大きくする ([#3478][20]) ([`762b82d`][21])
* **content-uploader:** テキストの省略を追加して間隔を調整 ([#3479][22]) ([`36df228`][23])
* **flyout:** Flyoutのデフォルトのロールを「dialog」に設定 ([#3388][24]) ([`942f6b7`][25])
* **i18n:** 翻訳を更新 ([#3396][26]) ([`2175a82`][27])
* **i18n:** 翻訳を更新 ([#3398][28]) ([`4d71c62`][29])
* **i18n:** 翻訳を更新 ([#3401][30]) ([`0911005`][31])
* **i18n:** 翻訳を更新 ([#3409][32]) ([`4c95746`][33])
* **i18n:** 翻訳を更新 ([#3413][34]) ([`65eb428`][35])
* **i18n:** 翻訳を更新 ([#3417][36]) ([`9aab003`][37])
* **i18n:** 翻訳を更新 ([#3422][38]) ([`523492a`][39])
* **i18n:** 翻訳を更新 ([#3430][40]) ([`7b705bc`][41])
* **i18n:** 翻訳を更新 ([#3433][42]) ([`0e8decb`][43])
* **i18n:** 翻訳を更新 ([#3434][44]) ([`15e2e2e`][45])
* **i18n:** 翻訳を更新 ([#3437][46]) ([`0d06403`][47])
* **i18n:** 翻訳を更新 ([#3438][48]) ([`a6f4868`][49])
* **i18n:** 翻訳を更新 ([#3452][50]) ([`22bb031`][51])
* **i18n:** 翻訳を更新 ([#3453][52]) ([`85d2521`][53])
* **i18n:** 翻訳を更新 ([#3454][54]) ([`e83185e`][55])
* **i18n:** 翻訳を更新 ([#3455][56]) ([`a10aa5c`][57])
* **i18n:** 翻訳を更新 ([#3456][58]) ([`41ad809`][59])
* **i18n:** 翻訳を更新 ([#3457][60]) ([`b3f57ff`][61])
* **i18n:** 翻訳を更新 ([#3458][62]) ([`a1c42d7`][63])
* **i18n:** 翻訳を更新 ([#3459][64]) ([`1b6f4c2`][65])
* **i18n:** 翻訳を更新 ([#3462][66]) ([`13fc9b0`][67])
* **i18n:** 翻訳を更新 ([#3464][68]) ([`d1a888d`][69])
* **i18n:** 翻訳を更新 ([#3465][70]) ([`5413089`][71])
* **i18n:** 翻訳を更新 ([#3469][72]) ([`2ffe17f`][73])
* **i18n:** 翻訳を更新 ([#3470][74]) ([`1139bb0`][75])
* **i18n:** 翻訳を更新 ([#3471][76]) ([`41e02db`][77])
* **modal-dialog:** `ModalDialog`にaria-modalを追加 ([#3380][78]) ([`c8f8509`][79])
* **modify-reply:** オブジェクトをパラメータにマッピング ([#3387][80]) ([`3989675`][81])
* **preview:** 注釈のバッジタイプアイコンにアクセシビリティを追加 ([#3404][82]) ([`d4b7852`][83])
* **preview:** バージョンのパネルで操作のフォーカスインジケータを変更 ([#3397][84]) ([`f111c64`][85])
* **preview:** 昇格者フィールドに適切なユーザーを表示 ([#3414][86]) ([`458fdbf`][87])
* **preview:** `onDismiss`コールバックをオーバーライドしないようにHOCを拡張 ([#3431][88]) ([`4cc57a3`][89])
* **search-form:** 検索操作コンポーネントを抽出 ([#3475][90]) ([`8d77320`][91])
* ボタンが非アクティブの場合に`textInputWithCopyButton`でコピーを非アクティブ化 ([#3419][92]) ([`68b2def`][93])
* 表示されていない場合にスクリーンリーダーに対してアップロードマネージャの進捗バーを非表示にする ([#3383][94]) ([`5592a48`][95])
* examplesラッパーから`core-js`を削除 ([#3392][96]) ([`48ccdf7`][97])
* 内部Boxユーザーの名前を削除 ([#3390][98]) ([`65cc5cb`][99])
* **preview-sidebar:** プレビューのバージョンの動作を修正 ([#3203][100]) ([`d940782`][101])
* テストページのソースパスを更新 ([#3378][102]) ([`ff6b349`][103])

### 機能

* **aci:** featuresプロパティに`ACI`の構成を追加 ([#3410][104]) ([`e95a35e`][105])
* **activityitems:** 新しいレイアウト ([#3405][106]) ([`665d30a`][107])
* **annotations:** 注釈の返信を編集 ([#3412][108]) ([`025ad7e`][109])
* **assets:** Box AIアセットを追加 ([#3393][110]) ([`bc6b04d`][111])
* **content-answers:** `contentAnswers`ウィンドウのヘッダーとフッターを追加 ([#3403][112]) ([`a7d0a3e`][113])
* **content-answers:** インラインエラーを追加 ([#3444][114]) ([`405cdb4`][115])
* **content-answers:** 最初のウェルカムメッセージを含むウィンドウ本文を追加 ([#3415][116]) ([`6748e73`][117])
* **content-answers:** `contentAnswers`の表示を制御するプロパティを追加 ([#3399][118]) ([`f0b0922`][119])
* **content-answers:** 下までのスクロールを追加 ([#3442][120]) ([`59c8c45`][121])
* **content-answers:** アバター ([#3418][122]) ([`45166f4`][123])
* **content-answers:** ボタンのフォーカス ([#3448][124]) ([`2358321`][125])
* **content-answers:** Content Answersウィンドウのエラー ([#3425][126]) ([`a5084a5`][127])
* **content-answers:** content-answersウィンドウの最初のボタンコンポーネントを作成 ([#3395][128]) ([`217a393`][129])
* **content-answers:** 許可されてないファイルタイプの場合にボタンを非アクティブ化 ([#3406][130]) ([`f950772`][131])
* **content-answers:** インテリジェンスAPI ([#3420][132]) ([`76fd991`][133])
* **content-answers:** Questions Answersインテリジェンスエンドポイント ([#3435][134]) ([`4c7c0c0`][135])
* **content-answers:** 再試行ボタン ([#3451][136]) ([`e0976b8`][137])
* **content-explorer:** 自動選択された項目をコンテンツエクスプローラに追加 ([#3474][138]) ([`215cfdd`][139])
* **content-sidebar:** プレビューとサイドバーへのレスポンスを有効化 ([#3497][140]) ([`1652982`][141])
* **label-primitive:** ラベルにプロパティを渡す ([#3473][142]) ([`7e88772`][143])
* **modal:** レスポンスの動作を有効化 ([#3492][144]) ([`7fe59b8`][145])
* **pill-selector:** テキスト入力に関するオプションをさらに追加 ([#3440][146]) ([`d782e4a`][147])
* **preview:** 返信および変更用のコメントフォームをフォーカス ([#3407][148]) ([`69293d8`][149])
* **threaded-replies:** 注釈の対応/未対応を追加 ([#3423][150]) ([`c489ad3`][151])
* **threaded-replies:** スレッド形式の返信コメントを削除 ([#3402][152]) ([`37437c5`][153])
* **uaa-integration:** コメントの権限がない場合に処理 ([#3394][154]) ([`5a28b49`][155])
* **uaa-integration:** アプリアクティビティ項目を解析 ([#3386][156]) ([`44fd12b`][157])
* **uaa-integration:** UAAからのバージョンのレスポンスを解析 ([#3385][158]) ([`0fa730f`][159])
* **usm:** レスポンスの動作を有効化 ([#3494][160]) ([`76db2a5`][161])
* IE11のブラウザサポートを削除 ([#3382][162]) ([`e151c87`][163])

### 取り消し

* 「作業 (コード所有者): コード所有者を一時的に更新 ([#3446][164])」([#3476][165]) ([`3e38fa5`][166])

### 重大な変更

* Internet Explorer 11はサポートされなくなりました

[1]: https://github.com/box/box-ui-elements/compare/v18.1.0...v19.0.0

[2]: https://github.com/box/box-ui-elements/issues/3411

[3]: https://github.com/box/box-ui-elements/commit/a60a70d

[4]: https://github.com/box/box-ui-elements/issues/3377

[5]: https://github.com/box/box-ui-elements/commit/9a9b5e3

[6]: https://github.com/box/box-ui-elements/issues/3421

[7]: https://github.com/box/box-ui-elements/commit/fdbfc4d

[8]: https://github.com/box/box-ui-elements/issues/3468

[9]: https://github.com/box/box-ui-elements/commit/13ed6da

[10]: https://github.com/box/box-ui-elements/issues/3480

[11]: https://github.com/box/box-ui-elements/commit/fa68f9b

[12]: https://github.com/box/box-ui-elements/issues/3481

[13]: https://github.com/box/box-ui-elements/commit/6099b1d

[14]: https://github.com/box/box-ui-elements/issues/3489

[15]: https://github.com/box/box-ui-elements/commit/4181e0c

[16]: https://github.com/box/box-ui-elements/issues/3498

[17]: https://github.com/box/box-ui-elements/commit/98537b9

[18]: https://github.com/box/box-ui-elements/issues/3472

[19]: https://github.com/box/box-ui-elements/commit/6aef87b

[20]: https://github.com/box/box-ui-elements/issues/3478

[21]: https://github.com/box/box-ui-elements/commit/762b82d

[22]: https://github.com/box/box-ui-elements/issues/3479

[23]: https://github.com/box/box-ui-elements/commit/36df228

[24]: https://github.com/box/box-ui-elements/issues/3388

[25]: https://github.com/box/box-ui-elements/commit/942f6b7

[26]: https://github.com/box/box-ui-elements/issues/3396

[27]: https://github.com/box/box-ui-elements/commit/2175a82

[28]: https://github.com/box/box-ui-elements/issues/3398

[29]: https://github.com/box/box-ui-elements/commit/4d71c62

[30]: https://github.com/box/box-ui-elements/issues/3401

[31]: https://github.com/box/box-ui-elements/commit/0911005

[32]: https://github.com/box/box-ui-elements/issues/3409

[33]: https://github.com/box/box-ui-elements/commit/4c95746

[34]: https://github.com/box/box-ui-elements/issues/3413

[35]: https://github.com/box/box-ui-elements/commit/65eb428

[36]: https://github.com/box/box-ui-elements/issues/3417

[37]: https://github.com/box/box-ui-elements/commit/9aab003

[38]: https://github.com/box/box-ui-elements/issues/3422

[39]: https://github.com/box/box-ui-elements/commit/523492a

[40]: https://github.com/box/box-ui-elements/issues/3430

[41]: https://github.com/box/box-ui-elements/commit/7b705bc

[42]: https://github.com/box/box-ui-elements/issues/3433

[43]: https://github.com/box/box-ui-elements/commit/0e8decb

[44]: https://github.com/box/box-ui-elements/issues/3434

[45]: https://github.com/box/box-ui-elements/commit/15e2e2e

[46]: https://github.com/box/box-ui-elements/issues/3437

[47]: https://github.com/box/box-ui-elements/commit/0d06403

[48]: https://github.com/box/box-ui-elements/issues/3438

[49]: https://github.com/box/box-ui-elements/commit/a6f4868

[50]: https://github.com/box/box-ui-elements/issues/3452

[51]: https://github.com/box/box-ui-elements/commit/22bb031

[52]: https://github.com/box/box-ui-elements/issues/3453

[53]: https://github.com/box/box-ui-elements/commit/85d2521

[54]: https://github.com/box/box-ui-elements/issues/3454

[55]: https://github.com/box/box-ui-elements/commit/e83185e

[56]: https://github.com/box/box-ui-elements/issues/3455

[57]: https://github.com/box/box-ui-elements/commit/a10aa5c

[58]: https://github.com/box/box-ui-elements/issues/3456

[59]: https://github.com/box/box-ui-elements/commit/41ad809

[60]: https://github.com/box/box-ui-elements/issues/3457

[61]: https://github.com/box/box-ui-elements/commit/b3f57ff

[62]: https://github.com/box/box-ui-elements/issues/3458

[63]: https://github.com/box/box-ui-elements/commit/a1c42d7

[64]: https://github.com/box/box-ui-elements/issues/3459

[65]: https://github.com/box/box-ui-elements/commit/1b6f4c2

[66]: https://github.com/box/box-ui-elements/issues/3462

[67]: https://github.com/box/box-ui-elements/commit/13fc9b0

[68]: https://github.com/box/box-ui-elements/issues/3464

[69]: https://github.com/box/box-ui-elements/commit/d1a888d

[70]: https://github.com/box/box-ui-elements/issues/3465

[71]: https://github.com/box/box-ui-elements/commit/5413089

[72]: https://github.com/box/box-ui-elements/issues/3469

[73]: https://github.com/box/box-ui-elements/commit/2ffe17f

[74]: https://github.com/box/box-ui-elements/issues/3470

[75]: https://github.com/box/box-ui-elements/commit/1139bb0

[76]: https://github.com/box/box-ui-elements/issues/3471

[77]: https://github.com/box/box-ui-elements/commit/41e02db

[78]: https://github.com/box/box-ui-elements/issues/3380

[79]: https://github.com/box/box-ui-elements/commit/c8f8509

[80]: https://github.com/box/box-ui-elements/issues/3387

[81]: https://github.com/box/box-ui-elements/commit/3989675

[82]: https://github.com/box/box-ui-elements/issues/3404

[83]: https://github.com/box/box-ui-elements/commit/d4b7852

[84]: https://github.com/box/box-ui-elements/issues/3397

[85]: https://github.com/box/box-ui-elements/commit/f111c64

[86]: https://github.com/box/box-ui-elements/issues/3414

[87]: https://github.com/box/box-ui-elements/commit/458fdbf

[88]: https://github.com/box/box-ui-elements/issues/3431

[89]: https://github.com/box/box-ui-elements/commit/4cc57a3

[90]: https://github.com/box/box-ui-elements/issues/3475

[91]: https://github.com/box/box-ui-elements/commit/8d77320

[92]: https://github.com/box/box-ui-elements/issues/3419

[93]: https://github.com/box/box-ui-elements/commit/68b2def

[94]: https://github.com/box/box-ui-elements/issues/3383

[95]: https://github.com/box/box-ui-elements/commit/5592a48

[96]: https://github.com/box/box-ui-elements/issues/3392

[97]: https://github.com/box/box-ui-elements/commit/48ccdf7

[98]: https://github.com/box/box-ui-elements/issues/3390

[99]: https://github.com/box/box-ui-elements/commit/65cc5cb

[100]: https://github.com/box/box-ui-elements/issues/3203

[101]: https://github.com/box/box-ui-elements/commit/d940782

[102]: https://github.com/box/box-ui-elements/issues/3378

[103]: https://github.com/box/box-ui-elements/commit/ff6b349

[104]: https://github.com/box/box-ui-elements/issues/3410

[105]: https://github.com/box/box-ui-elements/commit/e95a35e

[106]: https://github.com/box/box-ui-elements/issues/3405

[107]: https://github.com/box/box-ui-elements/commit/665d30a

[108]: https://github.com/box/box-ui-elements/issues/3412

[109]: https://github.com/box/box-ui-elements/commit/025ad7e

[110]: https://github.com/box/box-ui-elements/issues/3393

[111]: https://github.com/box/box-ui-elements/commit/bc6b04d

[112]: https://github.com/box/box-ui-elements/issues/3403

[113]: https://github.com/box/box-ui-elements/commit/a7d0a3e

[114]: https://github.com/box/box-ui-elements/issues/3444

[115]: https://github.com/box/box-ui-elements/commit/405cdb4

[116]: https://github.com/box/box-ui-elements/issues/3415

[117]: https://github.com/box/box-ui-elements/commit/6748e73

[118]: https://github.com/box/box-ui-elements/issues/3399

[119]: https://github.com/box/box-ui-elements/commit/f0b0922

[120]: https://github.com/box/box-ui-elements/issues/3442

[121]: https://github.com/box/box-ui-elements/commit/59c8c45

[122]: https://github.com/box/box-ui-elements/issues/3418

[123]: https://github.com/box/box-ui-elements/commit/45166f4

[124]: https://github.com/box/box-ui-elements/issues/3448

[125]: https://github.com/box/box-ui-elements/commit/2358321

[126]: https://github.com/box/box-ui-elements/issues/3425

[127]: https://github.com/box/box-ui-elements/commit/a5084a5

[128]: https://github.com/box/box-ui-elements/issues/3395

[129]: https://github.com/box/box-ui-elements/commit/217a393

[130]: https://github.com/box/box-ui-elements/issues/3406

[131]: https://github.com/box/box-ui-elements/commit/f950772

[132]: https://github.com/box/box-ui-elements/issues/3420

[133]: https://github.com/box/box-ui-elements/commit/76fd991

[134]: https://github.com/box/box-ui-elements/issues/3435

[135]: https://github.com/box/box-ui-elements/commit/4c7c0c0

[136]: https://github.com/box/box-ui-elements/issues/3451

[137]: https://github.com/box/box-ui-elements/commit/e0976b8

[138]: https://github.com/box/box-ui-elements/issues/3474

[139]: https://github.com/box/box-ui-elements/commit/215cfdd

[140]: https://github.com/box/box-ui-elements/issues/3497

[141]: https://github.com/box/box-ui-elements/commit/1652982

[142]: https://github.com/box/box-ui-elements/issues/3473

[143]: https://github.com/box/box-ui-elements/commit/7e88772

[144]: https://github.com/box/box-ui-elements/issues/3492

[145]: https://github.com/box/box-ui-elements/commit/7fe59b8

[146]: https://github.com/box/box-ui-elements/issues/3440

[147]: https://github.com/box/box-ui-elements/commit/d782e4a

[148]: https://github.com/box/box-ui-elements/issues/3407

[149]: https://github.com/box/box-ui-elements/commit/69293d8

[150]: https://github.com/box/box-ui-elements/issues/3423

[151]: https://github.com/box/box-ui-elements/commit/c489ad3

[152]: https://github.com/box/box-ui-elements/issues/3402

[153]: https://github.com/box/box-ui-elements/commit/37437c5

[154]: https://github.com/box/box-ui-elements/issues/3394

[155]: https://github.com/box/box-ui-elements/commit/5a28b49

[156]: https://github.com/box/box-ui-elements/issues/3386

[157]: https://github.com/box/box-ui-elements/commit/44fd12b

[158]: https://github.com/box/box-ui-elements/issues/3385

[159]: https://github.com/box/box-ui-elements/commit/0fa730f

[160]: https://github.com/box/box-ui-elements/issues/3494

[161]: https://github.com/box/box-ui-elements/commit/76db2a5

[162]: https://github.com/box/box-ui-elements/issues/3382

[163]: https://github.com/box/box-ui-elements/commit/e151c87

[164]: https://github.com/box/box-ui-elements/issues/3446

[165]: https://github.com/box/box-ui-elements/issues/3476

[166]: https://github.com/box/box-ui-elements/commit/3e38fa5
