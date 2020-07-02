---
applied_at: '2019-11-09'
applies_to:
  - sdks
  - ui-elements
is_impactful: true
is_new_feature: true
source_url: 'https://github.com/box/box-ui-elements/releases/tag/v11.0.0'
---
# Box UI elements `v11.0.0` released

## [11.0.0][1] (2019-11-09)

### Bug Fixes

* **`activity-feed`:** fix long user names in tasks/comments in Edge ([#1604][2]) ([`572e4d7`][3])
* **`activity-feed`:** Fix version ordering in Activity Feed ([#1272][4]) ([`533c112`][5])
* **`activity-feed`:** refactor inline error for feed items and empty state ([#1697][6]) ([`2702367`][7])
* **`annotation`:** Fix header by adding selector used by box-annotations ([#1637][8]) ([`9302486`][9])
* **`app-activity`:** Remove underscores from resin feature name ([#1456][10]) ([`b7c21e7`][11])
* **`app-activity`:** Update app activity to match comment/task ([#1449][12]) ([`b58aa2f`][13])
* **`arrow-stepper`:** Fix arrow stepper in KeyBinding component ([#1654][14]) ([`a05b015`][15])
* **`avatar`:** fix avatar initials v-alignment ([#1311][16]) ([`23e6d5f`][17])
* **`avatar`:** Fix avatar resolution in activity sidebar ([#1243][18]) ([`88a5f1c`][19])
* **`avatar`:** use derived state instead of effect for URL change ([#1643][20]) ([`f89c138`][21])
* **`bdl`:** Add SCSS check for color variable name ([#1514][22]) ([`a4f446f`][23])
* **`bdl`:** adjust font weights to match normal and bold `lato` ([#1517][24]) ([`35a4070`][25])
* **`beta-feedback`:** update `aria-labelledby` attribute name ([#1249][26]) ([`c164aec`][27])
* **`breadcrumb`:** add missing import ([#1657][28]) ([`fec4735`][29])
* **`button`:** remove horizontal margin from buttons ([#1362][30]) ([`a6989a0`][31])
* **`button`:** revert remove horizontal margin from buttons ([#1362][30]) ([#1400][32]) ([`3ac424c`][33])
* **`classification`:** badge should not have a `tabindex` ([#1622][34]) ([`4ab0c20`][35])
* **`classification`:** Classification badge UX tweaks ([#1378][36]) ([`fa82a8d`][37])
* **`classification`:** classification tooltip not showing in IE11 ([#1710][38]) ([`d08b53c`][39])
* **`classification`:** flow definitions for `onclick` ([#1712][40]) ([`9e620ce`][41])
* **`classification`:** Restoring classification badge icons ([#1390][42]) ([`5db4b3e`][43])
* **`collaborator-avatars`:** add keyboard accessibility ([#1680][44]) ([`baefaed`][45])
* **`collapsible`:** should be pure component ([#1407][46]) ([`5e32c80`][47])
* **`comment`:** Add height to comment area to support multiple mentions ([#1474][48]) ([`e270131`][49])
* **`comment`:** padding and `a11y` adjustments for comment UI ([#1358][50]) ([`927a34a`][51])
* **`comment`:** remove redundant `aria-label` ([#1291][52]) ([`ef48f88`][53])
* **`comment`:** use overlay z-index for confirmation dialog ([#1270][54]) ([`bcf2852`][55])
* **`comments`:** format existing mentions in editor ([#1469][56]) ([`6b82510`][57])
* **`constants`:** explicit type import ([#1584][58]) ([`7d38fb8`][59])
* **`content-explorer`:** `ContentExplorer` and `ContentPicker` can handle
  sharing web links now ([#1515][60]) ([`55edef7`][61])
* **`content-explorer`:** `MDVGridView` import fixes ([#1333][62]) ([`9740342`][63])
* **`content-explorer`:** rows no longer stuck after closing modal ([#1245][64]) ([`d7f53ff`][65])
* **`content-preview`:** remove deeplink path upon navigation ([#1665][66]) ([`84b4ea4`][67])
* **`content-uploader`:** Disable cancel button when 100% is reached ([#1511][68]) ([`a6de1b0`][69])
* **`content-uploader`:** Fix cancelling task triggers the others to start ([#1653][70]) ([`f35b2ea`][71])
* **`content-uploader`:** Fix duplicate files upload at the same time ([#1652][72]) ([`6faed59`][73])
* **`datetime`:** add missing support for times w/o ms ([#1191][74]) ([`19f3703`][75])
* **`deps`:** downgrade `axios` peer dependency ([#1329][76]) ([`d1a1bd9`][77])
* **`examples`:** change colors to the current box design language ([#1281][78]) ([`94869ad`][79])
* **`explorer`:** fetch shared link on demand ([#1479][80]) ([`2d29628`][81])
* **`feed`:** inline error for deeplinking feed items ([#1655][82]) ([`e2be3bd`][83])
* **`feed`:** Task assignee names not truncating IE11 ([#1694][84]) ([`a20e610`][85])
* **`floatfield`:** always allow trailing period for float field ([#1178][86]) ([`61d4e3d`][87])
* **`footer-indicator`:** move tooltip to appear above footer indicator ([`bf7782c`][88])
* **`header-flyout`:** Constraint to window to fix IE11 scroll bug ([#1310][89]) ([`f8bb323`][90])
* **`i18n`:** change "accepted" copy to "approved" ([#1214][91]) ([`674bf45`][92])
* **`i18n`:** Fix bug where messages starting with HTML cause an exception ([#1490][93]) ([`73d95b9`][94])
* **`i18n`:** `Param` and `Plural` should not be in the `styleguide.conf` ([#1197][95]) ([`2d34ad4`][96])
* **`i18n`:** use plural format for task assignee message ([#1345][97]) ([`10d6b76`][98])
* **`icons`:** fill in background for globe icon ([#1226][99]) ([`c91d320`][100])
* **`icons`:** fix collections icons for left navigation usability ([#1238][101]) ([`9e91115`][102])
* **`icons`:** give collections Icons SUIT classNames ([#1242][103]) ([`3b62245`][104])
* **`icons`:** update retry and public icon ([#1297][105]) ([`bfa075a`][106])
* **`icons`:** update trash, move/copy, add, download, upload, collections ([#1702][107]) ([`b126ecb`][108])
* **`icons`:** updating add icon style and adding hidden eye icon ([#1266][109]) ([`b47e22e`][110])
* **`iconworkflow`:** make background rectangle same as `viewBox` ([#1241][111]) ([`9e07f2e`][112])
* **`inlinenotice`:** update to box design standard ([#1576][113]) ([`a814657`][114])
* **`item-properties`:** Add `aria-labelledby` to description textarea ([#1229][115]) ([`05d86b1`][116])
* **`left-sidebar`:** add key to drop wrapper for links ([#1299][117]) ([`9c78135`][118])
* **`left-sidebar`:** Adjust margins for loading indicator ([#1545][119]) ([`6ba65c6`][120])
* **`left-sidebar`:** hide toggle icon on medium screen size ([#1344][121]) ([`716fe01`][122])
* **`media`:** increase specificity of Media-button CSS to avoid `.btn-plain` ([#1463][123]) ([`943638d`][124])
* **`mention-selector`:** Fix `hasReceivedFirstInteraction` logic ([#1434][125]) ([`afd94fa`][126])
* **`menu`:** Fix padding for menu item buttons ([#1446][127]) ([`5baeb5b`][128])
* **`menu`:** Menu should only autofocus on mount if visible ([#1175][129]) ([`2ba8a1d`][130])
* **`metadata`:** Show autocomplete for metadata input fields ([#1629][131]) ([`85995cd`][132])
* **`metadata`:** template dropdown scrollbar issue in safari ([#1192][133]) ([`1dc0d99`][134])
* **`metadata-sidebar`:** bind `onApiError` properly ([#1713][135]) ([`50b72f2`][136])
* **`modal`:** move close button after header for better screen reader `a11y` ([#1684][137]) ([`29a1220`][138])
* **`nav-sidebar`:** reduce size of toggle button to fix focus outline ([#1305][139]) ([`9a14ae7`][140])
* **`notifications`:** add accessibility attributes ([#1682][141]) ([`21af355`][142])
* **`open-with`:** better error messaging ([#1489][143]) ([`d3d98a5`][144])
* **`pill-selector`:** Allow copy pasting line separated values ([#1350][145]) ([`7933932`][146])
* **`pill-selector`:** expose `onInput` to trap input ([#1450][147]) ([`48d22a4`][148])
* **`pill-selector`:** UX tweaks ([#1315][149]) ([`e4fdf58`][150])
* **`pill-selector-dropdown`:** disable pills when `PillSelector` is disabled ([#1357][151]) ([`2bf496e`][152])
* **`pill-selector-dropdown`:** fix aria attributes ([#1681][153]) ([`1e0d1ab`][154])
* **`pill-selector-dropdown`:** Fix for pills getting removed on click ([#1367][155]) ([`d67fcfe`][156])
* **`pills`:** Fix vertical centering of pill selector input text ([#1364][157]) ([`d47c69c`][158])
* **`pillselectordropdown`:** support paste from context menu ([#1597][159]) ([`d16b0da`][160])
* **`preview`:** Clean up preview header styles and remove extra borders ([#1484][161]) ([`6c1a363`][162])
* **`quick-search`:** update border radius to follow BDL ([#1439][163]) ([`936f5e0`][164])
* **`radio-group`:** fix radio group by passing the value prop ([#1452][165]) ([`c0c05be`][166])
* **`radio-group`:** pass rest of props to radio input ([#1448][167]) ([`85ca38a`][168])
* **`scripts`:** Build and update all files prior to push ([#1415][169]) ([`e432c47`][170])
* **`scroll-if-needed`:** fix scroll-if-needed on selector dropdown ([#1280][171]) ([`3776dc8`][172])
* **`search`:** Remove rounded corners for `ContentExplorer` search ([#1478][173]) ([`7d9100b`][174])
* **`security`:** Upgrade `axios` to address security vulnerability ([#1228][175]) ([`db26743`][176])
* **`security-badge`:** Fixing `SecurityBadge` flow type ([#1664][177]) ([`ae23f01`][178])
* **`select-field`:** Enable arrow scrolling in select fields ([#1671][179]) ([`9f040f2`][180])
* **`sidebar`:** Add flex-shrink 0 to comment input ([#1359][181]) ([`cd840f4`][182])
* **`sidebar`:** add markup and accessibility to tab list ([#1563][183]) ([`f90a0d7`][184])
* **`sidebar`:** Fix deeplinking for version history sidebar ([#1649][185]) ([`e85e57a`][186])
* **`sidebar`:** Fix sidebar not auto-opening for large viewports ([#1508][187]) ([`dac39ee`][188])
* **`sidebar`:** Limit maximum height of additional tabs in sidebar navigation ([#1557][189]) ([`e7f953e`][190])
* **`sidebar`:** More semantically accessible tabs ([#1236][191]) ([`eb398fc`][192])
* **`sidebar`:** padding on item properties versions ([#1263][193]) ([`853e106`][194])
* **`sidebar`:** removing unwanted parenthesis in empty state ([#1645][195]) ([`824f390`][196])
* **`sidebar`:** Set dirty state if the sidebar was forced open ([#1366][197]) ([`e71409c`][198])
* **`sidebar`:** Update `flexbox` for Activity Feed Container ([#1341][199]) ([`c5e07b1`][200])
* **`subheader`:** Add logic around grid view ([#1659][201]) ([`7a53050`][202])
* **`task`:** string for task completed rule icon ([#1573][203]) ([`79c3f00`][204])
* **`task-form`:** clear task assignee autocomplete on form submit ([#1605][205]) ([`63efa10`][206])
* **`task-form`:** disallow text input in date picker ([#1540][207]) ([`af49827`][208])
* **`task-form`:** don't disable task form submit button ([#1323][209]) ([`9a4137b`][210])
* **`task-form`:** Update error message when leaving invalid required field ([#1353][211]) ([`be10f37`][212])
* **`task-new`:** alignment fixes, CSS refactor ([#1312][213]) ([`411c3e9`][214])
* **`task-new`:** fix placement of task status checkmark ([#1321][215]) ([`9f554ff`][216])
* **`task-new`:** Minor visual tweak to add tasks menu ([#1334][217]) ([`95a3c73`][218])
* **`task-new`:** Minor visual tweaks to add tasks menu ([#1328][219]) ([`cf1acf1`][220])
* **`tasks`:** add missing resin component ([#1513][221]) ([`00e9707`][222])
* **`tasks`:** assignee input field interactions ([#1621][223]) ([`dc33967`][224])
* **`tasks`:** comments menu does not appear on activity sidebar in preview ([#1250][225]) ([`be7bc2f`][226])
* **`tasks`:** fix task issues ([#1189][227]) ([`630fd38`][228])
* **`tasks`:** modal closing on resize ([#1603][229]) ([`2cbe014`][230])
* **`tasks`:** prevent resize of assignee avatar ([#1332][231]) ([`4e760f7`][232])
* **`tasks`:** Update copy for task type subtext ([#1627][233]) ([`c788770`][234])
* **`tasks_new`:** add missing resin component ([#1295][235]) ([`dbbf598`][236])
* **`tasks-new`:** Reset selector contacts on modal close ([#1301][237]) ([`f387a9b`][238])
* **`tasks-new`:** show "a prior collaborator" for deleted users ([#1313][239]) ([`c61fa77`][240])
* **`tasks-new`:** task actions are not updating ([#1302][241]) ([`2f88e96`][242])
* **`tasks-new`:** update documents and strings ([#1317][243]) ([`6560b23`][244])
* **`template-dropdown`:** add `onMenuToggle` handler to `TemplateDropdown` ([#1318][245]) ([`2cdfcc4`][246])
* **`text-input`:** looses focus when tooltip toggles ([#1185][247]) ([`8a4c294`][248])
* **`tooltip`:** color contrast and layout fixes ([#1692][249]) ([`1c11770`][250])
* **`unfied-share-modal`:** shared link access levels ([#1647][251]) ([`732a1dd`][252])
* **`unified-share-modal`:** add constraints to modal menus ([#1196][253]) ([`6501413`][254])
* **`unified-share-modal`:** classification in title ([#1453][255]) ([`4ce5a06`][256])
* **`uploader`:** `MultiputUploads` stop hanging in IE11 ([#1283][257]) ([`c49e52f`][258])
* **`uploads`:** cancelling in-progress tasks does not start pending ones ([#1570][259]) ([`dbf115c`][260])
* **`uploads`:** Fix hanging on resuming uploads ([#1695][261]) ([`3da93c8`][262])
* **`uploads`:** Remove logic gate ([#1646][263]) ([`38d10e4`][264])
* **`uploads`:** reset item error after retry ([#1600][265]) ([`0218f10`][266])
* **`uploads`:** resin for canceling uploads ([#1397][267]) ([`16311dc`][268])
* **`user-link`:** allow wrapping of long user names ([#1602][269]) ([`bff49bb`][270])
* **`usm`:** "Link Settings" should not line wrap ([#1674][271]) ([`938c483`][272])
* **`usm`:** Add `itemTypedId` to `onPillCreate` ([#1320][273]) ([`c4149ea`][274])
* **`usm`:** Do not pass `itemTypedID` to `getContactsByEmail` ([#1354][275]) ([`e60b020`][276])
* **`versions`:** Disable prior version preview for watermarked files ([#1405][277]) ([`9a527f2`][278])
* **`versions`:** Display date and name for most relevant version action ([#1568][279]) ([`b68eccd`][280])
* **`versions`:** Fix infinite load due to destroyed API factory ([#1347][281]) ([`95949e2`][282])
* **`versions`:** Fix version groups collapsing prior months/years ([#1365][283]) ([`65d23b9`][284])
* **`versions`:** Improve experience for restored vs promoted versions ([#1631][285]) ([`25d0741`][286])
* **`versions`:** Relax restrictions for watermarked files ([#1342][287]) ([`2487b42`][288])
* **`versions`:** Reload the page when a version is promoted (temporary) ([#1395][289]) ([`de7e74e`][290])
* **`versions`:** Restrict actions and preview for watermarked files ([#1339][291]) ([`fcb390d`][292])
* **`versions`:** Restrict preview for watermarked files ([#1351][293]) ([`93b95c4`][294])
* **`versions`:** Retrieve and use file version permissions for actions ([#1193][295]) ([`9d7567e`][296])
* **`versions`:** Scroll version button into view if selected ([#1276][297]) ([`e0cd7e3`][298])
* **`versions`:** Show server errors without hiding version history ([#1275][299]) ([`ef3b2fd`][300])
* **`versions`:** Update version actions to avoid unnecessary buttons ([#1556][301]) ([`bc9672e`][302])
* **`versions`:** Update version sidebar to use latest retention schema ([#1662][303]) ([`fa66232`][304])
* Adding `Accept-Language` header for `Xhr.js` ([#1368][305]) ([`361d73f`][306])
* show tooltip on hover long text ([#1230][307]) ([`c41dd47`][308])
* slight adjust in check mark alignment ([#1678][309]) ([`cfd055b`][310])
* various form accessibility improvements ([#1688][311]) ([`150cbbe`][312])
* **`versions`:** Update versions restore call to match latest contract ([#1198][313]) ([`2e590d3`][314])

### chore

* **`deps`:** update `react` peer / development dependency ([#1606][315]) ([`1163db5`][316])
* **`formik`:** upgrade to V2 ([#1698][317]) ([`6b9ded9`][318])

### Code Refactoring

* Upgrade `react` and `react-dom` to `v16.8` and refactor Avatar ([#1171][319]) ([`7dd1bdf`][320]), closes [#761][321]
* **`deps`:** Upgrade peer dependencies to latest working versions ([#1180][322]) ([`48d711e`][323])

### Features

* **`activity-feed`:** add support for deeplinking tasks and comments ([#1623][324]) ([`52ecdcb`][325])
* **`additional-tabs`:** gray out disabled apps ([#1503][326]) ([`132782d`][327])
* **`avatarinitials`:** move `backgroundColor` into SCSS ([#1585][328]) ([`781a246`][329])
* **`bdl`:** Add script for SCSS `bdl` scoping ([#1546][330]) ([`9bdc1e6`][331])
* **`classification`:** change icon for classify/classification action ([#1520][332]) ([`8eb68b3`][333])
* **`classification`:** new badge and layout ([#1231][334]) ([`2336262`][335])
* **`classification`:** new section within the details sidebar ([#1237][336]) ([`90bf2f3`][337])
* **`classification`:** remove classify from breadcrumbs ([#1549][338]) ([`adae46d`][339])
* **`classification`:** updated UI for classification ([#1566][340]) ([`52e2b17`][341])
* **`comments`:** implement comment edit ([#1468][342]) ([`33dd037`][343])
* **`content-explorer`:** Add ability to sort contents by size column ([#1239][344]) ([`b29b6bf`][345])
* **`content-explorer`:** Add toggle button for grid view ([#1349][346]) ([`97a1d44`][347])
* **`content-explorer`:** Fetch thumbnails for search and recents ([#1475][348]) ([`1035afb`][349])
* **`content-explorer`:** grid view slider ([#1482][350]) ([`ef4a7ee`][351])
* **`content-explorer`:** grid view styling ([#1464][352]) ([`f32b8ca`][353]), closes [#1409][354]
* **`content-explorer`:** import files from `MDVGridView` ([#1294][355]) ([`a2e5bd9`][356])
* **`content-explorer`:** local storage for view mode preference ([#1476][357]) ([`803b0a0`][358])
* **`content-explorer`:** Remove feature flip for gallery view ([#1571][359]) ([`3e948b8`][360])
* **`content-explorer`:** show cards with thumbnails ([#1409][354]) ([`7bbc2e8`][361])
* **`content-explorer`:** Show grid with icons ([#1372][362]) ([`64a099e`][363])
* **`content-picker`:** use radios for single select ([#1685][364]) ([`acc3395`][365])
* **`content-sidebar`:** add task modal mode for edit/create ([#1257][366]) ([`0bdfc96`][367])
* **`content-sidebar`:** programmatic refresh for sidebar panels ([#1561][368]) ([`2adbaef`][369])
* **`dropdown-menu`:** allow `esc` to propagate if dropdown is closed ([#1686][370]) ([`3d4d59e`][371])
* **`features`:** Add background color on hover in metadata list view ([#1618][372]) ([`635808e`][373])
* **`features`:** Add new feature metadata-based-view ([#1519][374]) ([`faef59e`][375])
* **`features`:** Show preview upon clicking the item name ([#1620][376]) ([`74e46b2`][377])
* **`ghost`:** create ghost state helper component ([#1498][378]) ([`73aadae`][379])
* **`i18n`:** Implement the new `FormattedCompMessage` component ([#976][380]) ([`31fdf12`][381])
* **`icon`:** create add users empty state icon ([#1638][382]) ([`33dfacb`][383])
* **`icon`:** create login and storage icon ([#1708][384]) ([`0115fb6`][385])
* **`icons`:** Add `CollectionItemLink` icon ([#1550][386]) ([`1558d36`][387])
* **`icons`:** add collections icons for bolt and star ([#1338][388]) ([`8e9d503`][389])
* **`icons`:** add collections star filled icon ([#1547][390]) ([`55a182e`][391])
* **`icons`:** add `IconFolderTree` icon ([#1696][392]) ([`add261b`][393])
* **`icons`:** add icons for collections ([#1224][394]) ([`a01ea82`][395])
* **`icons`:** add new shield Icon ([#1216][396]) ([`753d0e2`][397])
* **`icons`:** Add sandbox and puzzle piece icons ([#1370][398]) ([`67b6db4`][399])
* **`icons`:** add workflow icon ([#1225][400]) ([`9d73144`][401])
* **`icons`:** creating task empty state icon ([#1583][402]) ([`cac4023`][403])
* **`icons`:** new lightning icon ([#1183][404]) ([`ebccf18`][405])
* **`icons`:** update `IconShare` and `IconCollaboration` to new `32x32` icons ([#1232][406]) ([`4f4e31b`][407])
* **`icons`:** update to new globe icon and add new globe `tinycon` ([#1217][408]) ([`3dded61`][409])
* **`inline-edit`:** user should see instance field input ([#1172][410]) ([`1f90dde`][411])
* **`left-nav`:** add Box Relay icon ([#1207][412]) ([`29f07a6`][413]), closes [#1206][414]
* **`left-sidebar`:** `LeftSidebar` supports custom `navLinkRenderer` ([#1510][415]) ([`f9705a2`][416])
* **`leftsidebar`:** Show drop zones only on hover ([#1548][417]) ([`a45c998`][418])
* **`media`:** create media object component ([#1383][419]) ([`5140c13`][420])
* **`metadata`:** Enable metadata template filtering ([#1598][421]) ([`7b341f7`][422])
* **`metadata-views`:** Handle edit and cancel edit actions ([#1703][423]) ([`d55f84a`][424])
* **`metadata-views`:** Show edit icon in metadata view ([#1667][425]) ([`1b8a29d`][426])
* **`metadata-views`:** Update metadata columns prop type in metadata view ([#1666][427]) ([`cbf96ef`][428])
* **`new-tasks`:** Fetch task collaborators ([#1286][429]) ([`fb84aee`][430])
* **`office-online`:** adding excel spreadsheet icon for `xlsb` files ([`ee8569f`][431])
* **`pill-selector`:** `formik` wrapper for pill selector ([#1194][432]) ([`c75a7bb`][433])
* **`pill-selector`:** update flow type for downstream issue ([#1210][434]) ([`69f25e8`][435])
* **`preview`:** Add support for custom logo URL in preview header ([#1714][436]) ([`d37b9ec`][437])
* **`preview`:** better message when blocked by a policy ([#1346][438]) ([`a6cde28`][439])
* **`preview`:** new icon for security blocking ([#1396][440]) ([`9355631`][441])
* **`preview`:** Upgrade default version of box-content-preview to 2.16.0 ([#1562][442]) ([`7617fd2`][443])
* **`radio`:** `formik` wrapper for `RadioButton` ([#1204][444]) ([`0b51080`][445])
* **`react`:** Add text for max version history ([#1630][446]) ([`705e71f`][447])
* **`scroll`:** upgrade scroll in to view if needed ([#1200][448]) ([`1532617`][449])
* **`security`:** adding `SecurityBadge` component ([#1663][450]) ([`3d210bb`][451])
* **`select`:** make caret rotate up/down on open/close respectively ([#1218][452]) ([`9627e2b`][453])
* **`select-field`:** Allow rendering custom options ([#1516][454]) ([`53fe270`][455])
* **`shared-link-settings-modal`:** Disable direct downloads if classified ([#1500][456]) ([`2ede02a`][457])
* **`sidebar`:** Add support for toggling the sidebar externally ([#1293][458]) ([`04468fc`][459])
* **`sidebar`:** programmatic refresh ([#1472][460]) ([`c7a19e7`][461])
* **`sidebar`:** Show retention policy info in sidebar ([#1648][462]) ([`cb9e714`][463])
* **`sidebar`:** Toggle button ([#1268][464]) ([`e2ad4ab`][465])
* **`task-new`:** add ability to add/remove assignees ([#1284][466]) ([`8e87280`][467])
* **`task-new`:** Add support for edit modal ([#1261][468]) ([`d13839c`][469])
* **`tasks`:** add any task icon + tooltip ([#1491][470]) ([`cf1c5b7`][471])
* **`tasks`:** add any/all checkbox ([#1487][472]) ([`21271e3`][473])
* **`tasks`:** add in comment modification option for tasks ([#1247][474]) ([`b5775de`][475])
* **`tasks`:** Add new task edit API methods ([#1260][476]) ([`e05d5a7`][477])
* **`tasks`:** handle new error message with title and description ([#1564][478]) ([`7d691df`][479])
* **`tasks`:** strings for any completion rule ([#1471][480]) ([`cdaf285`][481])
* **`tasks`:** Update task status to not use an icon ([#1169][482]) ([`b4b8bf0`][483])
* **`tasks-new`:** add assignee list ([#1287][484]) ([`04b7458`][485])
* **`tasks-new`:** Edit task message and due date in `TaskForm` ([#1269][486]) ([`7f63d97`][487])
* **`tasks-new`:** remove beta label functionality from modal header ([#1314][488]) ([`dca414b`][489])
* **`tasks-new`:** tasks resin tracking for edit modal ([#1327][490]) ([`5b5b354`][491])
* **`typography`:** update body typography ([#1442][492]) ([`375c336`][493]), closes [#1439][163] [#1441][494]
* **`unified-share-modal`:** add external collaboration warning message ([#1220][495]) ([`064bd2f`][496])
* **`unified-share-modal`:** add property to limit the number of contacts ([#1304][497]) ([`2af11b1`][498])
* **`unified-share-modal`:** invite section tooltip changes ([#1499][499]) ([`d7730c7`][500]), closes [#1498][378]
* **`unified-share-modal`:** invite section tooltips changes ([#1504][501]) ([`b9486bc`][502])
* **`unified-share-modal`:** show classification for the file ([#1425][503]) ([`e3c7277`][504])
* **`unified-share-modal`:** Show external collaborators indicator ([#1256][505]) ([`613a438`][506])
* **`uploads`:** add resin targets for uploads manager ([#1384][507]) ([`29d2af5`][508])
* **`uploads`:** resume a single file upload ([#1552][509]) ([`093f889`][510])
* **`uploads`:** resume multiple failed uploads ([#1553][511]) ([`60406b9`][512])
* **`uploads`:** uploads manager contents for resumable uploads ([#1555][513]) ([`8380bc7`][514])
* **`usm`:** expand Invite Section based on `initiallySelectedContacts` ([#1470][515]) ([`b756a22`][516])
* **`validators`:** host, `ipv4` and domain name validators ([#1212][517]) ([`f653dac`][518])
* **`versions`:** Add client-side error messages for version actions ([#1404][519]) ([`8ead57c`][520])
* **`versions`:** Add resin tracking for sidebar back button ([#1309][521]) ([`901c23d`][522])
* **`versions`:** Add resin tracking to all version history actions ([#1285][523]) ([`a4942d3`][524])
* **`versions`:** Add support for deep linking to `ContentSidebar` ([#1203][525]) ([`78ab636`][526])
* **`versions`:** Add support for file version restore actions ([#1184][527]) ([`d5396bd`][528])
* **`versions`:** Add support for version action callbacks ([#1417][529]) ([`099a09e`][530])
* **`versions`:** Add support for version limits to sidebar ([#1316][531]) ([`bec5699`][532])
* **`versions`:** Add version group headers based on relative date ([#1330][533]) ([`51d5633`][534])
* add `metadata_queries` API layer ([#1481][535]) ([`2f6ef29`][536])
* add prop for resumable uploads feature flip ([#1447][537]) ([`3f19a3b`][538])
* Adding prop `initiallySelectedContacts` to `UnifiedShareModal` ([#1424][539]) ([`8966016`][540])
* default task icons to `$bdl-box-blue` ([#1509][541]) ([`dbc7103`][542])
* increase fetched file collaborators for tasks/comments ([#1483][543]) ([`05f65f4`][544])

### Performance Improvements

* **`sidebar`:** Lazy load sidebar panels without 500 millisecond delay ([#1223][545]) ([`bb216b4`][546])
* **`sidebar`:** merge response to avoid redundant API calls ([#1617][547]) ([`69ad154`][548])
* **`version`:** Remove version history modal ([#1633][549]) ([`eb0aac6`][550])

### Reverts

* **`avatar`:** Move Avatar back to non-hook implementation ([#1186][551]) ([`69f329b`][552])

### BREAKING CHANGES

* **`formik`:** `inputProps` dropped from Toggle component. `formik` has been upgraded to V2. Upgrade guide [https://github.com/jaredpalmer/formik/blob/master/docs/migrating-v2.md][553]

* Peer dependency React requirement have been bumped higher

* refactor(avatar): Refactor Avatar to use hooks

* fix(test): Fixed various test issues, downgraded enzyme back to 3.8.0

* fix(avatar): remove redundant check

* **`classification`:** Also changes `advisoryMessage` prop to definition to keep terminology consistent

* feat(classification): Increasing classification icon stroke width

* **`typography`:** The color of the body will be default to [#222][554] which
    is the `bdl-gray`

* feat(typography): update letter spacing for common typography

* **`typography`:** The letter spacing for common typography will now
    be `px` instead of `em`. Please check scaling.

* **`classification`:** The API for providing classification data to the sidebar has changed to `{ advisoryMessage, name }`

* feat: design changes

* feat: classification badge changes

* fix: PR feedback

* fix: snapshot

* **`icons`:** Replacing `IconShield` with a new Icon that represent
    Shield. It follows the the 32 x 32 guideline. Please override any style if needed.

* **`deps`:** update react-\* peer dependencies to 16.9.0

Updating to React 16.9 includes deprecation warnings for lifecycle methods.
This affects one of our dependencies, react-tether; we have no immediate
plans to silence the warnings.

* **`security`:** Upgrade `axios` peer dependency to address [https://nvd.nist.gov/vuln/detail/CVE-2019-10742][555]

* **`icons`:** update to new globe icon which uses `20x20` by default instead of `16x16` and introduced new globe `tinycon`

* **`validators`:** Adds peer dependency of [**`@hapi/address`**][556] used for email and domain validation

* fix: added uncommon `tlds` for email checking

* fix: adding some bad `tlds`

* **`scroll`:** Major version upgrade for scroll-into-view-if-needed.

* **`i18n`:** Added additional peer dependencies to support `i18n` `FormattedCompMessage` component

Implement a new component called `FormattedCompMessage`. This translates strings which can contain HTML or other JSX components in a safe way by hiding the contents of those tags from the translators or hackers and substituting the contents from source strings into the translations. Example:

```javascript
<FormattedCompMessage id="mystring" description="translator's comment">
   You can <span class="foo">delete</span> <Link to={url}>these files</Link>, or just
  <span id="x" class="unshare">unshare them</span>.
</FormattedCompMessage>
```

`FormattedCompMessage` is built as a layer on top of `react-intl`, and uses it to do the actual translations. Its function is to transform a tree of React elements into a coded string, get that string translated with `react-intl`, transform the coded translated string back into a tree of React elements, and finally substitute the hidden React elements from the source tree back into the translation tree in the right locations.

The component depends on the new babel plugin `babel-plugin-box-i18n` to extract the coded texts from the source code and place them into the same type of JSON files that the `react-intl` babel plugin produces. In this way, the translation process downstream from there works with no further changes. The translations appear in the properties files some time later and `react-intl` picks them up as normal. The `FormattedCompMessage` can retrieve these translations using `react-intl`. The `babel-pluging-box-i18n` plugin also enforces Box's policies, such as the requirement that all strings have a unique id and a description for the translators.

The `FormattedCompMessage` component can support plurals in a React-idiomatic way by embedding `<Plural>` components in the body of the `FormattedCompMessage`:

```javascript
<FormattedCompMessage id="mystring" description="translator's comment" count={count}>
  <Plural category="one">This is the <strong>singular</strong> string.</Plural>
  <Plural category="other">This is the <strong>plural</strong> string.</Plural>
</FormattedCompMessage>
```

Note that HTML and subcomponents are allowed in the plural string as well.

The `FormattedCompMessage` component supports replacement parameters in a React-idiomatic way by embedding `<Param>` components in the body of the `FormattedCompMessage`:

```javascript
<FormattedCompMessage id="mystring" description="translator's comment">
  User <Param value={user.name} description="The user's full name"/> has already deleted this file.
</FormattedCompMessage>
```

Note that the `Param` tags can be used inside of `Plural` tags as well, as they are normal components.

* **`deps`:** Peer dependencies have been updated and will require host applications to update as well to avoid NPM warnings.
* **`icons`:** Old `IconShare` defaulted to `26x26` and old `IconCollaboration` defaulted to `27x26` but new icons are defaulted to `32x32`.  Also, default SVG classnames are now changed to `bdl-IconShare` and `bdl-IconCollaboration`.

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
