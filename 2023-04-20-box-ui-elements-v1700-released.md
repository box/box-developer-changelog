---
applied_at: '2023-04-20'
applies_to:
  - ui-elements
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-ui-elements/releases/tag/v17.0.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2023-04-20-box-ui-elements-v1700-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2023-04-24-box-java-sdk-v410-released
previous_page_id: 2023-04-20-box-embed-guide-update
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2023/04-20-box-ui-elements-v1700-released.md
published_at: '2023-04-20'
fullyTranslated: true
---
# Box UI Elements `v17.0.0`のリリース

# [17.0.0][1] (2023-04-20)

### バグ修正

* **aci-toggle:** info badge vertical alignment ([#3290][2]) ([`f73b9f9`][3])
* **avatar:** Add `aria-label` to external user icon ([#3263][4]) ([`18cdf3f`][5])
* **collaborator-list-item:** remove redundant titles ([#3255][6]) ([`d805249`][7])
* **content-explorer:** add arrow navigation ([#3219][8]) ([`35bf8de`][9])
* **content-explorer:** Add `svg` titles to icons ([#3227][10]) ([`506ca45`][11])
* **content-explorer:** change color of folder tree breadcrumbs text ([#3268][12]) ([`fc95d4d`][13])
* **content-explorer:** enable create folder with trailing space in name ([#3246][14]) ([`e0b03c7`][15])
* **content-explorer:** Fix color contrast issue for item details ([#3273][16]) ([`4db0231`][17])
* **content-explorer:** Fix color contrast issues ([#3221][18]) ([`b7ecaab`][19])
* **content-explorer:** fix item list column header role ([#3232][20]) ([`718a71a`][21])
* **content-explorer:** focus border on selected item row buttons ([#3314][22]) ([`a596557`][23])
* **content-explorer:** hide instead of deactivate breadcrumbs ([#3260][24]) ([`5b5fec1`][25])
* **content-explorer:** Include subfolders sub-header fix ([#3259][26]) ([`6ec1512`][27])
* **content-explorer:** status message for include subfolders ([#3261][28]) ([`3ce688d`][29])
* **content-explorer:** Update Share button border on selected row ([#3278][30]) ([`28c79dd`][31])
* **content-picker:** add `disabled` attribute ([#3243][32]) ([`a88a96c`][33])
* **content-sharing:** removed API condition when constructing API ([#3251][34]) ([`24dcba2`][35])
* **content-uploader:** make deactivated buttons unfocusable ([#3248][36]) ([`2302712`][37])
* **flyout:** increase flyout overlay CSS specificity ([#3257][38]) ([`0933062`][39])
* **i18n:** update translations ([#3250][40]) ([`d84d1ca`][41])
* **i18n:** update translations ([#3276][42]) ([`018a99c`][43])
* **i18n:** update translations ([#3285][44]) ([`bfbcf55`][45])
* **i18n:** update translations ([#3300][46]) ([`88116cb`][47])
* **itemlist:** Remove header section when list is empty ([#3224][48]) ([`0274618`][49])
* **makeselectable:** Prevent arrow hotkeys on slider ([#3299][50]) ([`a893e5a`][51])
* **metadata:** fix template drop-down truncation issue ([#3265][52]) ([`c3ae099`][53])
* **select-field:** Add bottom margin when drop-down has top placement ([#3302][54]) ([`11e6979`][55])
* **select-field:** add tether class for select drop-downs ([#3303][56]) ([`ce27f70`][57])
* **selector-dropdown:** add dynamic positioning to the drop-down overlay ([#3262][58]) ([`7f05653`][59])
* **usm:** Order person before icon in collaborator list DOM ([#3306][60]) ([`32c656d`][61])
* add props to omit to avoid console warnings ([#3286][62]) ([`11328fb`][63])
* Align menu options in BE sort button ([#3231][64]) ([`dcc06e2`][65])
* Fix `aria-label` for BE header search ([#3244][66]) ([`ca01965`][67])
* Replace `bdl-gray-62` for USM and Shared Link components ([#3289][68]) ([`1f25b98`][69])
* **makeselectable:** shift and arrow selects first row ([#3223][70]) ([`9b209e5`][71])
* **scss:** Replace all division for dart-sass ([#3253][72]) ([`ac92e21`][73])
* **shared-link-section:** accessibility tooltip ([#3216][74]) ([`4ecdd81`][75])
* **sub-header:** sort menu item accessibility ([#3230][76]) ([`20f4454`][77])
* **sub-header:** update sort to use select component and update tests ([#3239][78]) ([`528a157`][79])
* **toggle:** add switch role ([#3254][80]) ([`cf0c894`][81])
* **tooltip:** Deactivate `aria-describedby` when `ariaHidden` is `true` ([#3233][82]) ([`d9108c4`][83])
* **tooltip:** tooltip should be dialog ([#3226][84])" ([#3264][85]) ([`fa68dd6`][86])
* **usm:** Remove `aria-label` and add `aria-haspopup` ([#3281][87]) ([`fd1a82d`][88])
* **usm:** Removing redundant button element ([#3282][89]) ([`a7005ff`][90])
* change type of buttons in Content Sharing from 'submit' to 'button' ([#3277][91]) ([`26b7e5f`][92])
* Improve color contrast for input borders ([#3234][93]) ([`3917bee`][94])
* Improve color contrast for placeholder text ([#3228][95]) ([`1f7b9f9`][96])
* Update `box-shadow` for inputs ([#3236][97]) ([`07cc347`][98])
* **assets:** Use correct icons after icons were renamed ([#3138][99]) ([`2c80164`][100])
* **content-explorer:** add `aria-label` for `MoreOptions` button ([#3197][101]) ([`f4b69f0`][102])
* **content-explorer:** add `aria-label` to grid slider ([#3189][103]) ([`e3900b3`][104])
* **content-explorer:** create default shared link when none exists ([#3209][105]) ([`5d05a2b`][106])
* **content-explorer:** Pass all props from `modalContainer` to `Modal` ([#3104][107]) ([`5d5b314`][108])
* **content-explorer:** Remove props from `styleguidist` examples ([#3146][109]) ([`1f0809b`][110])
* **content-picker:** add accessible names to Footer ([#3177][111]) ([`bd8e1e6`][112])
* **content-sidebar:** reply operations interactions ([#3103][113]) ([`9400f5a`][114])
* **content-sidebar:** reply operations interactions ([#3123][115]) ([`8d2c3f1`][116])
* **content-sidebar:** select and hover state for threaded feed items ([#3173][117]) ([`a7dc6a9`][118])
* **content-uploader:** fix `UploadInput` keyboard accessibility ([#3205][119]) ([`e918b5f`][120])
* **dropdown-menu:** fix positioning for responsive drop-down menu ([#3149][121]) ([`729f6f1`][122])
* **grid-view:** unhide focus outline for grid view slider ([#3212][123]) ([`b35e977`][124])
* **i18n:** update translations ([#3105][125]) ([`b8521e4`][126])
* **i18n:** update translations ([#3111][127]) ([`29fc19c`][128])
* **i18n:** update translations ([#3121][129]) ([`16bc077`][130])
* **i18n:** update translations ([#3130][131]) ([`8ca714b`][132])
* **i18n:** update translations ([#3135][133]) ([`53c0370`][134])
* **i18n:** update translations ([#3137][135]) ([`7fe32a6`][136])
* **i18n:** update translations ([#3139][137]) ([`82f414d`][138])
* **i18n:** update translations ([#3150][139]) ([`d428a43`][140])
* **i18n:** update translations ([#3158][141]) ([`02eb624`][142])
* **i18n:** update translations ([#3159][143]) ([`6df6f0d`][144])
* **i18n:** update translations ([#3174][145]) ([`0e9ea9d`][146])
* **i18n:** update translations ([#3183][147]) ([`c32bbae`][148])
* **i18n:** update translations ([#3199][149]) ([`eb1acee`][150])
* **i18n:** update translations ([#3207][151]) ([`d9d571d`][152])
* **i18n:** update translations ([#3213][153]) ([`64364c3`][154])
* **i18n:** update translations ([#3220][155]) ([`39739ab`][156])
* **i18n:** update translations ([#3222][157]) ([`429c856`][158])
* **item-action:** add `aria-label` to `PlainButton` ([#3180][159]) ([`2553713`][160])
* **item-remove:** add `aria-label` ([#3181][161]) ([`0fce635`][162])
* **menu:** fix long title in menu header ([#3125][163]) ([`79420f2`][164])
* **modal:** Modal header for long file names was displaying incorrectly ([#3108][165]) ([`d8321aa`][166])
* **react-virtualized:** Bumped `react-virtualized` ([#3160][167]) ([`b256b07`][168])
* **react-virtualized:** remove duplicate `a11y` label ([#3204][169]) ([`c67a4dd`][170])
* **react-virtualized:** Remove role for `Table_Grid_innerScrollContainer` ([#3218][171]) ([`cabb4a8`][172])
* **replies:** fix `total_replies_count` value update after delete reply ([#3147][173]) ([`8f75827`][174])
* **sharedlinksettings:** fix expiration timestamp ([#3179][175]) ([`1a698c5`][176])
* **sub-header:** add accessibility label to `SortButton` ([#3178][177]) ([`ba66a34`][178])
* **threaded-replies:** deactivate reply button for pending status ([#3186][179]) ([`efbc532`][180])
* **threaded-replies:** fix styling for replies ([#3110][181]) ([`f78e36b`][182])
* **tooltips:** Error tooltips were being truncated on smaller screens ([#3107][183]) ([`7e12d88`][184])
* **usm:** add `aria label` ([#3191][185]) ([`f1f5c81`][186])
* **usm:** add `aria-label` to expiration icon ([#3193][187]) ([`af3c567`][188])
* **usm:** add `aria-label` to tooltip close button ([#3211][189]) ([`529bf10`][190])
* **usm:** add role `img` to shared link expiration tooltip icon ([#3195][191]) ([`a79e193`][192])
* **usm:** tooltip should be dialog ([#3226][84]) ([`f52ad0e`][193])
* remove warning when passing `initialSelectedItems` to `ContentExplorer` ([#3151][194]) ([`bf3256a`][195])

### コードのリファクタリング

* deprecate `bdl-gray-62` color ([#3312][196]) ([`93720ce`][197])

### 機能

* **aci-toggle:** add separate prop for description ([#3307][198]) ([`cadab1d`][199])
* **aci-toggle:** UI adjustments ([#3297][200]) ([`84f9abb`][201])
* **annotation:** Add icon indicator for `AnnotationActivity` ([#3176][202]) ([`f773aa3`][203])
* **annotation-activity:** hide `AnnotationActivityLink` ([#3089][204]) ([`dc3642e`][205])
* **annotation-thread:** added reply form, UI and other minor fixes ([#3157][206]) ([`55ca058`][207])
* **annotation-thread:** Annotation thread comments visual fixes ([#3128][208]) ([`fac5133`][209])
* **annotation-thread:** annotation thread events handling ([#3196][210]) ([`1c07b41`][211])
* **annotation-thread:** annotation thread related hooks refactoring ([#3192][212]) ([`0168f1a`][213])
* **annotation-thread:** annotation thread replies events handling ([#3201][214]) ([`3df222a`][215])
* **annotation-thread:** introduce `useAnnotationThread` and handle `useAnnotatorEvents` ([#3097][216]) ([`a8d1985`][217])
* **annotation-thread:** use of event emitter and hooks refactoring ([#3184][218]) ([`cfed356`][219])
* **annotations:** hide `AnnotationActivityLink` based on `hasVersions` prop ([#3132][220]) ([`3469413`][221])
* **assets:** update cancellation flow assets ([#3117][222]) ([`42e1122`][223])
* **checkbox:** allow `stopPropagation` on `onClick` events ([#3122][224]) ([`9c25858`][225])
* **checkbox:** make focus behavior configurable ([#3214][226]) ([`18b8ea6`][227])
* **checkbox:** prop to add class to input ([#3194][228]) ([`e0cc12d`][229])
* **checkbox:** revert allow `stopPropagation` on `onClick` events ([#3127][230]) ([`e37de34`][231]), closes [#3122][224]
* **cloud-game:** Add accessibility to security cloud game ([#3086][232]) ([`684e9f6`][233])
* **collapsible-sidebar:** add prop to hide Box logo ([#3256][234]) ([`43279c0`][235])
* **collapsible-sidebar:** add `wrapperClassName` prop ([#3295][236]) ([`2cde065`][237])
* **content-explorer:** adding folder tree ([#3240][238]) ([`03b0dea`][239])
* **content-explorer:** Allow selecting empty selection in `ContentExplorer` ([#3175][240]) ([`fead6e4`][241])
* **content-explorer:** clickable status message for include subfolders ([#3266][242]) ([`3d8eaf8`][243])
* **content-explorer:** include subfolders toggle ([#3242][244]) ([`b75c7ee`][245])
* **content-sidebar:** add on fetch file callback function ([#3118][246]) ([`5373031`][247])
* **content-sidebar:** added support for active comment reply ([#3134][248]) ([`3ef81e1`][249])
* **content-sidebar:** hide "edited" for resolved comment/annotation ([#3152][250]) ([`07f5fc7`][251])
* **content-sidebar:** select and hover state for threaded feed items ([#3162][252]) ([`a6c125d`][253])
* **input-with-copy:** add node for settings button ([#3267][254]) ([`719b31f`][255])
* **insights:** Added support for Advanced Content Insights ([#3116][256]) ([`a66ec89`][257])
* **left-nav:** Update medium width in `\_sizes.media.scss` ([#3131][258]) ([`aaf112d`][259])
* **list-view:** List View item hover state changes ([#3115][260]) ([`103a5d1`][261])
* **make-selectable:** Add select click functionality to on checkbox click ([#3112][262]) ([`ffc2e33`][263])
* **make-selectable:** expose `selectToggle` function ([#3109][264]) ([`8d9fb90`][265])
* **mediaquery:** add `isTouchScreen` logic ([#3269][266]) ([`3e80a06`][267])
* **modal:** add callback to check permission on shared link load ([#3188][268]) ([`2b316db`][269])
* **preview:** add new sign drop-down under ff ([#3190][270]) ([`37e8a19`][271])
* **threaded-replies:** Create `Replies` component ([#3288][272]) ([`006e33c`][273])
* **threaded-replies:** Create `RepliesToggle` component ([#3294][274]) ([`92d0ddb`][275])
* **threaded-replies:** Create `Reply` button component ([#3298][276]) ([`f9d4130`][277])
* **threaded-replies:** Decouple `ActivityCard` from Comment ([#3279][278]) ([`7d1d3bf`][279])
* **threaded-replies:** Implement Create Replies and Replies Toggle ([#3304][280]) ([`044a336`][281])
* **threaded-replies:** Refactor Comment component to functional ([#3270][282]) ([`3900d1c`][283])
* **threaded-replies:** Update activity filter to support more options ([#3280][284]) ([`76e4010`][285])
* add `additionalColumns` prop to `ContentExplorerModalContainer` ([#3143][286]) ([`d4eea59`][287])
* Add option to display header in `ContentExplorerModalContainer` ([#3144][288]) ([`5685142`][289])
* Add optional tether props to `DropdownMenu` ([#3245][290]) ([`9db75e7`][291])
* **threaded-replies:** fix styling for resolve ([#3129][292]) ([`b291c50`][293])
* **threaded-replies:** keep replies visible when loading more replies ([#3133][294]) ([`295533c`][295])
* **tooltip:** support error tooltip position ([#3187][296]) ([`941e990`][297])
* add `rowHeight` prop to `ContentExplorerModal` ([#3140][298]) ([`476d739`][299])

### 取り消し

* "chore(answers): added foundation for content-answers element … ([#3249][300]) ([`56f58a5`][301]), closes [#3247][302]
* **annotation-activity:** hide `AnnotationActivityLink` ([#3120][303]) ([`ba22807`][304]), closes [#3089][204]

### 重大な変更

* `bdl-gray-62`は`bdl-gray-65`に置き換えられました

[1]: https://github.com/box/box-ui-elements/compare/v16.0.0...v17.0.0

[2]: https://github.com/box/box-ui-elements/issues/3290

[3]: https://github.com/box/box-ui-elements/commit/f73b9f9

[4]: https://github.com/box/box-ui-elements/issues/3263

[5]: https://github.com/box/box-ui-elements/commit/18cdf3f

[6]: https://github.com/box/box-ui-elements/issues/3255

[7]: https://github.com/box/box-ui-elements/commit/d805249

[8]: https://github.com/box/box-ui-elements/issues/3219

[9]: https://github.com/box/box-ui-elements/commit/35bf8de

[10]: https://github.com/box/box-ui-elements/issues/3227

[11]: https://github.com/box/box-ui-elements/commit/506ca45

[12]: https://github.com/box/box-ui-elements/issues/3268

[13]: https://github.com/box/box-ui-elements/commit/fc95d4d

[14]: https://github.com/box/box-ui-elements/issues/3246

[15]: https://github.com/box/box-ui-elements/commit/e0b03c7

[16]: https://github.com/box/box-ui-elements/issues/3273

[17]: https://github.com/box/box-ui-elements/commit/4db0231

[18]: https://github.com/box/box-ui-elements/issues/3221

[19]: https://github.com/box/box-ui-elements/commit/b7ecaab

[20]: https://github.com/box/box-ui-elements/issues/3232

[21]: https://github.com/box/box-ui-elements/commit/718a71a

[22]: https://github.com/box/box-ui-elements/issues/3314

[23]: https://github.com/box/box-ui-elements/commit/a596557

[24]: https://github.com/box/box-ui-elements/issues/3260

[25]: https://github.com/box/box-ui-elements/commit/5b5fec1

[26]: https://github.com/box/box-ui-elements/issues/3259

[27]: https://github.com/box/box-ui-elements/commit/6ec1512

[28]: https://github.com/box/box-ui-elements/issues/3261

[29]: https://github.com/box/box-ui-elements/commit/3ce688d

[30]: https://github.com/box/box-ui-elements/issues/3278

[31]: https://github.com/box/box-ui-elements/commit/28c79dd

[32]: https://github.com/box/box-ui-elements/issues/3243

[33]: https://github.com/box/box-ui-elements/commit/a88a96c

[34]: https://github.com/box/box-ui-elements/issues/3251

[35]: https://github.com/box/box-ui-elements/commit/24dcba2

[36]: https://github.com/box/box-ui-elements/issues/3248

[37]: https://github.com/box/box-ui-elements/commit/2302712

[38]: https://github.com/box/box-ui-elements/issues/3257

[39]: https://github.com/box/box-ui-elements/commit/0933062

[40]: https://github.com/box/box-ui-elements/issues/3250

[41]: https://github.com/box/box-ui-elements/commit/d84d1ca

[42]: https://github.com/box/box-ui-elements/issues/3276

[43]: https://github.com/box/box-ui-elements/commit/018a99c

[44]: https://github.com/box/box-ui-elements/issues/3285

[45]: https://github.com/box/box-ui-elements/commit/bfbcf55

[46]: https://github.com/box/box-ui-elements/issues/3300

[47]: https://github.com/box/box-ui-elements/commit/88116cb

[48]: https://github.com/box/box-ui-elements/issues/3224

[49]: https://github.com/box/box-ui-elements/commit/0274618

[50]: https://github.com/box/box-ui-elements/issues/3299

[51]: https://github.com/box/box-ui-elements/commit/a893e5a

[52]: https://github.com/box/box-ui-elements/issues/3265

[53]: https://github.com/box/box-ui-elements/commit/c3ae099

[54]: https://github.com/box/box-ui-elements/issues/3302

[55]: https://github.com/box/box-ui-elements/commit/11e6979

[56]: https://github.com/box/box-ui-elements/issues/3303

[57]: https://github.com/box/box-ui-elements/commit/ce27f70

[58]: https://github.com/box/box-ui-elements/issues/3262

[59]: https://github.com/box/box-ui-elements/commit/7f05653

[60]: https://github.com/box/box-ui-elements/issues/3306

[61]: https://github.com/box/box-ui-elements/commit/32c656d

[62]: https://github.com/box/box-ui-elements/issues/3286

[63]: https://github.com/box/box-ui-elements/commit/11328fb

[64]: https://github.com/box/box-ui-elements/issues/3231

[65]: https://github.com/box/box-ui-elements/commit/dcc06e2

[66]: https://github.com/box/box-ui-elements/issues/3244

[67]: https://github.com/box/box-ui-elements/commit/ca01965

[68]: https://github.com/box/box-ui-elements/issues/3289

[69]: https://github.com/box/box-ui-elements/commit/1f25b98

[70]: https://github.com/box/box-ui-elements/issues/3223

[71]: https://github.com/box/box-ui-elements/commit/9b209e5

[72]: https://github.com/box/box-ui-elements/issues/3253

[73]: https://github.com/box/box-ui-elements/commit/ac92e21

[74]: https://github.com/box/box-ui-elements/issues/3216

[75]: https://github.com/box/box-ui-elements/commit/4ecdd81

[76]: https://github.com/box/box-ui-elements/issues/3230

[77]: https://github.com/box/box-ui-elements/commit/20f4454

[78]: https://github.com/box/box-ui-elements/issues/3239

[79]: https://github.com/box/box-ui-elements/commit/528a157

[80]: https://github.com/box/box-ui-elements/issues/3254

[81]: https://github.com/box/box-ui-elements/commit/cf0c894

[82]: https://github.com/box/box-ui-elements/issues/3233

[83]: https://github.com/box/box-ui-elements/commit/d9108c4

[84]: https://github.com/box/box-ui-elements/issues/3226

[85]: https://github.com/box/box-ui-elements/issues/3264

[86]: https://github.com/box/box-ui-elements/commit/fa68dd6

[87]: https://github.com/box/box-ui-elements/issues/3281

[88]: https://github.com/box/box-ui-elements/commit/fd1a82d

[89]: https://github.com/box/box-ui-elements/issues/3282

[90]: https://github.com/box/box-ui-elements/commit/a7005ff

[91]: https://github.com/box/box-ui-elements/issues/3277

[92]: https://github.com/box/box-ui-elements/commit/26b7e5f

[93]: https://github.com/box/box-ui-elements/issues/3234

[94]: https://github.com/box/box-ui-elements/commit/3917bee

[95]: https://github.com/box/box-ui-elements/issues/3228

[96]: https://github.com/box/box-ui-elements/commit/1f7b9f9

[97]: https://github.com/box/box-ui-elements/issues/3236

[98]: https://github.com/box/box-ui-elements/commit/07cc347

[99]: https://github.com/box/box-ui-elements/issues/3138

[100]: https://github.com/box/box-ui-elements/commit/2c80164

[101]: https://github.com/box/box-ui-elements/issues/3197

[102]: https://github.com/box/box-ui-elements/commit/f4b69f0

[103]: https://github.com/box/box-ui-elements/issues/3189

[104]: https://github.com/box/box-ui-elements/commit/e3900b3

[105]: https://github.com/box/box-ui-elements/issues/3209

[106]: https://github.com/box/box-ui-elements/commit/5d05a2b

[107]: https://github.com/box/box-ui-elements/issues/3104

[108]: https://github.com/box/box-ui-elements/commit/5d5b314

[109]: https://github.com/box/box-ui-elements/issues/3146

[110]: https://github.com/box/box-ui-elements/commit/1f0809b

[111]: https://github.com/box/box-ui-elements/issues/3177

[112]: https://github.com/box/box-ui-elements/commit/bd8e1e6

[113]: https://github.com/box/box-ui-elements/issues/3103

[114]: https://github.com/box/box-ui-elements/commit/9400f5a

[115]: https://github.com/box/box-ui-elements/issues/3123

[116]: https://github.com/box/box-ui-elements/commit/8d2c3f1

[117]: https://github.com/box/box-ui-elements/issues/3173

[118]: https://github.com/box/box-ui-elements/commit/a7dc6a9

[119]: https://github.com/box/box-ui-elements/issues/3205

[120]: https://github.com/box/box-ui-elements/commit/e918b5f

[121]: https://github.com/box/box-ui-elements/issues/3149

[122]: https://github.com/box/box-ui-elements/commit/729f6f1

[123]: https://github.com/box/box-ui-elements/issues/3212

[124]: https://github.com/box/box-ui-elements/commit/b35e977

[125]: https://github.com/box/box-ui-elements/issues/3105

[126]: https://github.com/box/box-ui-elements/commit/b8521e4

[127]: https://github.com/box/box-ui-elements/issues/3111

[128]: https://github.com/box/box-ui-elements/commit/29fc19c

[129]: https://github.com/box/box-ui-elements/issues/3121

[130]: https://github.com/box/box-ui-elements/commit/16bc077

[131]: https://github.com/box/box-ui-elements/issues/3130

[132]: https://github.com/box/box-ui-elements/commit/8ca714b

[133]: https://github.com/box/box-ui-elements/issues/3135

[134]: https://github.com/box/box-ui-elements/commit/53c0370

[135]: https://github.com/box/box-ui-elements/issues/3137

[136]: https://github.com/box/box-ui-elements/commit/7fe32a6

[137]: https://github.com/box/box-ui-elements/issues/3139

[138]: https://github.com/box/box-ui-elements/commit/82f414d

[139]: https://github.com/box/box-ui-elements/issues/3150

[140]: https://github.com/box/box-ui-elements/commit/d428a43

[141]: https://github.com/box/box-ui-elements/issues/3158

[142]: https://github.com/box/box-ui-elements/commit/02eb624

[143]: https://github.com/box/box-ui-elements/issues/3159

[144]: https://github.com/box/box-ui-elements/commit/6df6f0d

[145]: https://github.com/box/box-ui-elements/issues/3174

[146]: https://github.com/box/box-ui-elements/commit/0e9ea9d

[147]: https://github.com/box/box-ui-elements/issues/3183

[148]: https://github.com/box/box-ui-elements/commit/c32bbae

[149]: https://github.com/box/box-ui-elements/issues/3199

[150]: https://github.com/box/box-ui-elements/commit/eb1acee

[151]: https://github.com/box/box-ui-elements/issues/3207

[152]: https://github.com/box/box-ui-elements/commit/d9d571d

[153]: https://github.com/box/box-ui-elements/issues/3213

[154]: https://github.com/box/box-ui-elements/commit/64364c3

[155]: https://github.com/box/box-ui-elements/issues/3220

[156]: https://github.com/box/box-ui-elements/commit/39739ab

[157]: https://github.com/box/box-ui-elements/issues/3222

[158]: https://github.com/box/box-ui-elements/commit/429c856

[159]: https://github.com/box/box-ui-elements/issues/3180

[160]: https://github.com/box/box-ui-elements/commit/2553713

[161]: https://github.com/box/box-ui-elements/issues/3181

[162]: https://github.com/box/box-ui-elements/commit/0fce635

[163]: https://github.com/box/box-ui-elements/issues/3125

[164]: https://github.com/box/box-ui-elements/commit/79420f2

[165]: https://github.com/box/box-ui-elements/issues/3108

[166]: https://github.com/box/box-ui-elements/commit/d8321aa

[167]: https://github.com/box/box-ui-elements/issues/3160

[168]: https://github.com/box/box-ui-elements/commit/b256b07

[169]: https://github.com/box/box-ui-elements/issues/3204

[170]: https://github.com/box/box-ui-elements/commit/c67a4dd

[171]: https://github.com/box/box-ui-elements/issues/3218

[172]: https://github.com/box/box-ui-elements/commit/cabb4a8

[173]: https://github.com/box/box-ui-elements/issues/3147

[174]: https://github.com/box/box-ui-elements/commit/8f75827

[175]: https://github.com/box/box-ui-elements/issues/3179

[176]: https://github.com/box/box-ui-elements/commit/1a698c5

[177]: https://github.com/box/box-ui-elements/issues/3178

[178]: https://github.com/box/box-ui-elements/commit/ba66a34

[179]: https://github.com/box/box-ui-elements/issues/3186

[180]: https://github.com/box/box-ui-elements/commit/efbc532

[181]: https://github.com/box/box-ui-elements/issues/3110

[182]: https://github.com/box/box-ui-elements/commit/f78e36b

[183]: https://github.com/box/box-ui-elements/issues/3107

[184]: https://github.com/box/box-ui-elements/commit/7e12d88

[185]: https://github.com/box/box-ui-elements/issues/3191

[186]: https://github.com/box/box-ui-elements/commit/f1f5c81

[187]: https://github.com/box/box-ui-elements/issues/3193

[188]: https://github.com/box/box-ui-elements/commit/af3c567

[189]: https://github.com/box/box-ui-elements/issues/3211

[190]: https://github.com/box/box-ui-elements/commit/529bf10

[191]: https://github.com/box/box-ui-elements/issues/3195

[192]: https://github.com/box/box-ui-elements/commit/a79e193

[193]: https://github.com/box/box-ui-elements/commit/f52ad0e

[194]: https://github.com/box/box-ui-elements/issues/3151

[195]: https://github.com/box/box-ui-elements/commit/bf3256a

[196]: https://github.com/box/box-ui-elements/issues/3312

[197]: https://github.com/box/box-ui-elements/commit/93720ce

[198]: https://github.com/box/box-ui-elements/issues/3307

[199]: https://github.com/box/box-ui-elements/commit/cadab1d

[200]: https://github.com/box/box-ui-elements/issues/3297

[201]: https://github.com/box/box-ui-elements/commit/84f9abb

[202]: https://github.com/box/box-ui-elements/issues/3176

[203]: https://github.com/box/box-ui-elements/commit/f773aa3

[204]: https://github.com/box/box-ui-elements/issues/3089

[205]: https://github.com/box/box-ui-elements/commit/dc3642e

[206]: https://github.com/box/box-ui-elements/issues/3157

[207]: https://github.com/box/box-ui-elements/commit/55ca058

[208]: https://github.com/box/box-ui-elements/issues/3128

[209]: https://github.com/box/box-ui-elements/commit/fac5133

[210]: https://github.com/box/box-ui-elements/issues/3196

[211]: https://github.com/box/box-ui-elements/commit/1c07b41

[212]: https://github.com/box/box-ui-elements/issues/3192

[213]: https://github.com/box/box-ui-elements/commit/0168f1a

[214]: https://github.com/box/box-ui-elements/issues/3201

[215]: https://github.com/box/box-ui-elements/commit/3df222a

[216]: https://github.com/box/box-ui-elements/issues/3097

[217]: https://github.com/box/box-ui-elements/commit/a8d1985

[218]: https://github.com/box/box-ui-elements/issues/3184

[219]: https://github.com/box/box-ui-elements/commit/cfed356

[220]: https://github.com/box/box-ui-elements/issues/3132

[221]: https://github.com/box/box-ui-elements/commit/3469413

[222]: https://github.com/box/box-ui-elements/issues/3117

[223]: https://github.com/box/box-ui-elements/commit/42e1122

[224]: https://github.com/box/box-ui-elements/issues/3122

[225]: https://github.com/box/box-ui-elements/commit/9c25858

[226]: https://github.com/box/box-ui-elements/issues/3214

[227]: https://github.com/box/box-ui-elements/commit/18b8ea6

[228]: https://github.com/box/box-ui-elements/issues/3194

[229]: https://github.com/box/box-ui-elements/commit/e0cc12d

[230]: https://github.com/box/box-ui-elements/issues/3127

[231]: https://github.com/box/box-ui-elements/commit/e37de34

[232]: https://github.com/box/box-ui-elements/issues/3086

[233]: https://github.com/box/box-ui-elements/commit/684e9f6

[234]: https://github.com/box/box-ui-elements/issues/3256

[235]: https://github.com/box/box-ui-elements/commit/43279c0

[236]: https://github.com/box/box-ui-elements/issues/3295

[237]: https://github.com/box/box-ui-elements/commit/2cde065

[238]: https://github.com/box/box-ui-elements/issues/3240

[239]: https://github.com/box/box-ui-elements/commit/03b0dea

[240]: https://github.com/box/box-ui-elements/issues/3175

[241]: https://github.com/box/box-ui-elements/commit/fead6e4

[242]: https://github.com/box/box-ui-elements/issues/3266

[243]: https://github.com/box/box-ui-elements/commit/3d8eaf8

[244]: https://github.com/box/box-ui-elements/issues/3242

[245]: https://github.com/box/box-ui-elements/commit/b75c7ee

[246]: https://github.com/box/box-ui-elements/issues/3118

[247]: https://github.com/box/box-ui-elements/commit/5373031

[248]: https://github.com/box/box-ui-elements/issues/3134

[249]: https://github.com/box/box-ui-elements/commit/3ef81e1

[250]: https://github.com/box/box-ui-elements/issues/3152

[251]: https://github.com/box/box-ui-elements/commit/07f5fc7

[252]: https://github.com/box/box-ui-elements/issues/3162

[253]: https://github.com/box/box-ui-elements/commit/a6c125d

[254]: https://github.com/box/box-ui-elements/issues/3267

[255]: https://github.com/box/box-ui-elements/commit/719b31f

[256]: https://github.com/box/box-ui-elements/issues/3116

[257]: https://github.com/box/box-ui-elements/commit/a66ec89

[258]: https://github.com/box/box-ui-elements/issues/3131

[259]: https://github.com/box/box-ui-elements/commit/aaf112d

[260]: https://github.com/box/box-ui-elements/issues/3115

[261]: https://github.com/box/box-ui-elements/commit/103a5d1

[262]: https://github.com/box/box-ui-elements/issues/3112

[263]: https://github.com/box/box-ui-elements/commit/ffc2e33

[264]: https://github.com/box/box-ui-elements/issues/3109

[265]: https://github.com/box/box-ui-elements/commit/8d9fb90

[266]: https://github.com/box/box-ui-elements/issues/3269

[267]: https://github.com/box/box-ui-elements/commit/3e80a06

[268]: https://github.com/box/box-ui-elements/issues/3188

[269]: https://github.com/box/box-ui-elements/commit/2b316db

[270]: https://github.com/box/box-ui-elements/issues/3190

[271]: https://github.com/box/box-ui-elements/commit/37e8a19

[272]: https://github.com/box/box-ui-elements/issues/3288

[273]: https://github.com/box/box-ui-elements/commit/006e33c

[274]: https://github.com/box/box-ui-elements/issues/3294

[275]: https://github.com/box/box-ui-elements/commit/92d0ddb

[276]: https://github.com/box/box-ui-elements/issues/3298

[277]: https://github.com/box/box-ui-elements/commit/f9d4130

[278]: https://github.com/box/box-ui-elements/issues/3279

[279]: https://github.com/box/box-ui-elements/commit/7d1d3bf

[280]: https://github.com/box/box-ui-elements/issues/3304

[281]: https://github.com/box/box-ui-elements/commit/044a336

[282]: https://github.com/box/box-ui-elements/issues/3270

[283]: https://github.com/box/box-ui-elements/commit/3900d1c

[284]: https://github.com/box/box-ui-elements/issues/3280

[285]: https://github.com/box/box-ui-elements/commit/76e4010

[286]: https://github.com/box/box-ui-elements/issues/3143

[287]: https://github.com/box/box-ui-elements/commit/d4eea59

[288]: https://github.com/box/box-ui-elements/issues/3144

[289]: https://github.com/box/box-ui-elements/commit/5685142

[290]: https://github.com/box/box-ui-elements/issues/3245

[291]: https://github.com/box/box-ui-elements/commit/9db75e7

[292]: https://github.com/box/box-ui-elements/issues/3129

[293]: https://github.com/box/box-ui-elements/commit/b291c50

[294]: https://github.com/box/box-ui-elements/issues/3133

[295]: https://github.com/box/box-ui-elements/commit/295533c

[296]: https://github.com/box/box-ui-elements/issues/3187

[297]: https://github.com/box/box-ui-elements/commit/941e990

[298]: https://github.com/box/box-ui-elements/issues/3140

[299]: https://github.com/box/box-ui-elements/commit/476d739

[300]: https://github.com/box/box-ui-elements/issues/3249

[301]: https://github.com/box/box-ui-elements/commit/56f58a5

[302]: https://github.com/box/box-ui-elements/issues/3247

[303]: https://github.com/box/box-ui-elements/issues/3120

[304]: https://github.com/box/box-ui-elements/commit/ba22807
