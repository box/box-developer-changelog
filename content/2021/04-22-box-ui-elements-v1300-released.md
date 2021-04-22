---
applied_at: '2021-04-22'
applies_to:
  - frontend
  - ui-elements
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-ui-elements/releases/tag/v13.0.0'
collapse: true
---

# Box UI Elements `v13.0.0` released

# [13.0.0][1] (2021-04-22)

### Bug Fixes

* **\_buttons:** Tweak border-color in order to be A11Y compliant ([#2504][2]) ([`731cd7f`][3])
* **a11y:** Add accessible text to dropdown toggle buttons ([#2529][4]) ([`965048e`][5])
* **activity:** annotation activity width truncation after deletion ([#2464][6]) ([`0ff91cd`][7])
* **annotation:** disable modify annotations ([#2398][8]) ([`401c359`][9])
* **annotation:** enable modify annotations ([#2387][10]) ([`7155b78`][11])
* **annotation:** enable modify annotations ([#2400][12]) ([`53acd92`][13])
* **annotations:** disable modify menu item ([#2385][14]) ([`158ac7a`][15])
* **annotations:** Follow user-link and at-mention links ([#2541][16]) ([`592e531`][17])
* **annotations:** hide delete confirm after confirmation ([#2539][18]) ([`d11bdd8`][19])
* **annotations:** Move time and link separator ([#2517][20]) ([`3440e74`][21])
* **annotations:** Truncate annotation link when too long ([#2513][22]) ([`4d9e389`][23])
* **annotations:** use correct pencil icon ([#2389][24]) ([`d360eac`][25])
* **annotations:** use correct value for isOpen prop ([#2379][26]) ([`0714986`][27])
* **asset-pipeline:** use generic check for key type in color parsing ([#2338][28]) ([`6771fdf`][29])
* **collapsible-sidebar:** prevent h-scrollbar from appearing ([#2490][30]) ([`c329303`][31])
* **comment-form:** use length check ([#2408][32]) ([`3709fb5`][33])
* **content-explorer:** Request fields for Preview SDK file cache ([#2540][34]) ([`af36684`][35])
* **content-picker:** Add spacing between user and size tags ([#2543][36]) ([`774d9f4`][37])
* **content-sharing:** Display correct timestamp in SharedLinkSection ([#2348][38]) ([`e078c35`][39])
* **content-sharing:** Display external collaborator warnings ([#2347][40]) ([`ccb4cd3`][41])
* **content-sharing:** Enable reinstantiation via a custom button ([#2344][42]) ([`5457ce2`][43])
* **content-sharing:** limit collab and link permissions ([#2361][44]) ([`c56dc8c`][45])
* **content-sharing:** Refresh component from ES6 wrapper ([#2373][46]) ([`711ecb0`][47])
* **content-sharing:** Show disabled access levels with reasons ([#2349][48]) ([`6f53b7e`][49])
* **content-sharing:** Show newly invited collaborators in modal ([#2394][50]) ([`5e21d2a`][51])
* **content-sharing:** Show notifications after closing modal ([#2358][52]) ([`5d01c62`][53])
* **content-sharing:** Show notifications for initial data calls ([#2378][54]) ([`f631c9a`][55])
* **content-sharing:** Small styling issues with standalone element ([#2350][56]) ([`b43ecb3`][57])
* **content-sharing:** sort contacts and filter inactive users ([#2380][58]) ([`6a52be8`][59])
* **content-sharing:** stop free users from setting expiration ([#2392][60]) ([`531727a`][61])
* **content-sharing:** style issues when using element via ES6 wrapper ([#2332][62]) ([`db97fc1`][63])
* **datalistitem:** adds aria-selected attribute ([#2494][64]) ([`85c005a`][65])
* **delete-confirmation:** update container styles for delete confirm ([#2337][66]) ([`cdfd094`][67])
* **dropdownmenu:** Ensure onMenuClose gets called consistently ([#2502][68]) ([`4841974`][69])
* **flyout:** opening with keyboard should be same as with mouse ([#2519][70]) ([`502fa9f`][71])
* **i18n:** update translations ([#2333][72]) ([`3fdb29d`][73])
* **i18n:** update translations ([#2334][74]) ([`1c0045a`][75])
* **i18n:** update translations ([#2340][76]) ([`3848552`][77])
* **i18n:** update translations ([#2355][78]) ([`c5b83b7`][79])
* **i18n:** update translations ([#2364][80]) ([`40fd34d`][81])
* **i18n:** update translations ([#2374][82]) ([`0d55546`][83])
* **i18n:** update translations ([#2386][84]) ([`fa9bbb5`][85])
* **i18n:** update translations ([#2388][86]) ([`cf99b77`][87])
* **i18n:** update translations ([#2391][88]) ([`b86abf7`][89])
* **i18n:** update translations ([#2399][90]) ([`3917cdc`][91])
* **i18n:** update translations ([#2404][92]) ([`9a4a969`][93])
* **i18n:** update translations ([#2409][94]) ([`d229d9b`][95])
* **i18n:** update translations ([#2415][96]) ([`390ab77`][97])
* **i18n:** update translations ([#2421][98]) ([`6717ba4`][99])
* **i18n:** update translations ([#2425][100]) ([`ae845fd`][101])
* **i18n:** update translations ([#2427][102]) ([`c76e5e1`][103])
* **i18n:** update translations ([#2428][104]) ([`e89eb9f`][105])
* **i18n:** update translations ([#2437][106]) ([`2091a02`][107])
* **i18n:** update translations ([#2439][108]) ([`ffb91ae`][109])
* **i18n:** update translations ([#2440][110]) ([`41ce975`][111])
* **i18n:** update translations ([#2443][112]) ([`4d902df`][113])
* **i18n:** update translations ([#2447][114]) ([`2d961e0`][115])
* **i18n:** update translations ([#2450][116]) ([`cf97ee8`][117])
* **i18n:** update translations ([#2453][118]) ([`e050dcf`][119])
* **i18n:** update translations ([#2455][120]) ([`063ee44`][121])
* **i18n:** update translations ([#2458][122]) ([`5c4f736`][123])
* **i18n:** update translations ([#2459][124]) ([`4ddb0e5`][125])
* **i18n:** update translations ([#2461][126]) ([`74577b7`][127])
* **i18n:** update translations ([#2462][128]) ([`f8874eb`][129])
* **i18n:** update translations ([#2463][130]) ([`b0742fd`][131])
* **i18n:** update translations ([#2474][132]) ([`95199a4`][133])
* **i18n:** update translations ([#2475][134]) ([`88f8dfc`][135])
* **i18n:** update translations ([#2482][136]) ([`1a5b277`][137])
* **i18n:** update translations ([#2483][138]) ([`364ba87`][139])
* **i18n:** update translations ([#2500][140]) ([`e5f694f`][141])
* **i18n:** update translations ([#2506][142]) ([`b08a93a`][143])
* **i18n:** update translations ([#2518][144]) ([`4e614fd`][145])
* **i18n:** update translations ([#2534][146]) ([`e709f89`][147])
* **message-center:** add intl provider ([#2390][148]) ([`4a586b5`][149])
* **message-center:** fix header animation after scrolling ([#2366][150]) ([`ea29b21`][151])
* **message-center:** fix overflow in category filter for ie11 ([#2381][152]) ([`22f8401`][153])
* **message-center:** reset loading state after category change ([#2371][154]) ([`d66cdeb`][155])
* **messagecenter:** wrap tags when too long ([#2514][156]) ([`d28d4cb`][157])
* **NavButton:** A11y add aria label navbar button ([#2503][158]) ([`b12e05f`][159])
* **security-controls:** Revert app restrictions update ([#2431][160]) ([#2435][161]) ([`75df3d4`][162])
* **sharedlinksettings:** Disabled text color has changed to solve a contrast color minimum issue ([#2521][163]) ([`c4a38d2`][164])
* **tasks:** Hide time when older than 12 months ([#2516][165]) ([`15ead28`][166])
* **time-input:** Add support for el-GR, ko-KR, zh-CN, and zh-TW ([#2533][167]) ([`4efb41e`][168])
* **tooltip:** add useEffect compatible with React v17 ([#2476][169]) ([`ddbdbc1`][170])
* **ts:** update lint & config for typescript ([#2445][171]) ([`349ca6f`][172])
* **typography:** add minimum allowed font size ([#2510][173]) ([`c13ff11`][174])
* **upload:** add support for detecting and handling package files ([#2343][175]) ([`2332327`][176])
* **upload:** Remove file change checks on evergreen browsers ([#2441][177]) ([`d540003`][178])
* **uploads:** add detection to file type when determining package type ([#2372][179]) ([`c5119b7`][180])
* **uploads:** add upload.app.box.com as a default upload hostname ([#2370][181]) ([`ca1567b`][182])
* **uploads:** update message for when package file uploads fail ([#2360][183]) ([`a428281`][184])
* **uploads:** update multiput support for mobile chrome ios ([#2505][185]) ([`28d11ac`][186])
* **uploads:** update multiput support for mobile safari ([#2487][187]) ([`7f8b0c1`][188])
* **uploads:** update multiput upload support for mobile chrome ios ([#2520][189]) ([`3655ee3`][190])
* **usm:** Fix line overlap on ContactRestrictionNotice ([#2426][191]) ([`d0b27ef`][192])
* **usm:** Fix translation issue in ContactRestrictionNotice ([#2423][193]) ([`773abc6`][194])
* **versions:** Disable preview for prior versions using office viewer ([#2351][195]) ([`cb0f183`][196])

### Features

* **activityfeed:** Only show time if within the last 12 months ([#2499][197]) ([`c58a53c`][198])
* **activityfeed:** Update versions info icon ([#2525][199]) ([`1798ac2`][200])
* **animation:** convert to fade-in animation across flyout components ([#2336][201]) ([`b1efac1`][202])
* **annotations:** add update annotation logic ([#2359][203]) ([`e4191bb`][204])
* **annotations:** Selectable annotation activity card ([#2508][205]) ([`07f7019`][206])
* **annotations:** update error callback for annotation modify ([#2376][207]) ([`6f7e4cf`][208])
* **assets:** Add Key icon asset ([#2465][209]) ([`aa0d2d7`][210])
* **assets:** Add ribbon icon asset ([#2363][211]) ([`9fa5372`][212])
* **assets:** import latest assets from design ([#2526][213]) ([`26190f1`][214])
* **assets:** import latests SVG assets from design ([#2354][215]) ([`c038084`][216])
* **assets:** update assets to latest from design ([#2339][217]) ([`3393858`][218])
* **assets:** update assets to latest from design ([#2346][219]) ([`239e986`][220])
* **assets:** update assets to latest from design ([#2377][221]) ([`df61c57`][222])
* **assets:** update assets to latest from design ([#2383][223]) ([`bf9dc9c`][224])
* **assets:** update assets to latest from design ([#2412][225]) ([`a20c862`][226])
* **assets:** update assets to latest from design ([#2430][227]) ([`98723f5`][228])
* **assets:** update design assets ([#2477][229]) ([`b3aa617`][230])
* **assets:** update download16 icon to correct color ([#2491][231]) ([`903fcd7`][232])
* **category-selector:** add category selector component from Relay ([#2442][233]) ([`2e98d7d`][234]), closes [#2438][235] [#2438][235] [#2438][235] [#2438][235] [#2438][235] [#2438][235] [#2438][235] [#2438][235] [#2438][235]
* **classification:** Update classification modified by copies ([#2515][236]) ([`72518f9`][237])
* **collapsiblesidebarmenuitem:** add tooltipisdisabled prop ([#2492][238]) ([`03982ea`][239])
* **content-explorer:** Pass in initial select items ([#2488][240]) ([`2057d52`][241])
* **content-sharing:** Allow hiding message section of collab page ([#2395][242]) ([`c4d12be`][243])
* **date-picker:** Allow permanent visibility and custom inputs ([#2486][244]) ([`7261731`][245])
* **deps:** update react peer/dev dep to 17.0.1 ([#2419][246]) ([`830bf71`][247])
* **icons:** update iwork icons in iWorkDesktopIcon ([#2433][248]) ([`13747ec`][249])
* **label-pill:** update design to match latest from design ([#2365][250]) ([`d6a9d5e`][251])
* **left-sidebar:** add isShown prop to LeftSidebarLinkCallout component ([#2485][252]) ([`00991cd`][253])
* **left-sidebar:** add optional classname prop for left nav callout ([#2489][254]) ([`e8a908a`][255])
* **message-center:** Add Message Center feature ([#2352][256]) ([`7f6800b`][257])
* **message-center:** add message.id to key in virtualized list ([#2396][258]) ([`779b6b1`][259])
* **message-center:** add prop for configuring preview ([#2369][260]) ([`d7ff786`][261])
* **message-center:** add test ids ([#2420][262]) ([`cb7843b`][263])
* **message-center:** minor styling and scroll behavior updates ([#2357][264]) ([`31c4521`][265])
* **message-center:** minor styling changes for images shown in preview ([#2367][266]) ([`bac6f4e`][267])
* **messagecenter:** only show categories when more than 1 category ([#2532][268]) ([`56f1abb`][269])
* **pill-cloud:** add resin target ([#2418][270]) ([`2195624`][271])
* **pill-selector-dropdown:** Adding function to get custom pill class ([#2411][272]) ([`0649634`][273])
* **pill-styling:** support for pill styling updates in activity sidebar ([#2335][274]) ([`99aeea0`][275])
* **preview:** Add new loading experience to preview element ([#2512][276]) ([`d014867`][277])
* **preview:** Create new loading components for preview ([#2498][278]) ([`b669d97`][279])
* **preview:** pass preview experiences to preview ([#2542][280]) ([`6d1dc25`][281])
* **quick-search:** update folder icon ([#2460][282]) ([`8017064`][283])
* **security-controls:** Allow app restrictions without app list ([#2431][160]) ([`f510a28`][284])
* **security-controls:** Allow app restrictions without app list ([#2436][285]) ([`da08924`][286])
* **security-controls:** Update app restriction copy ([#2449][287]) ([`fa4af2c`][288])
* **selectall:** add select all to content explorer ([#2537][289]) ([`da38e93`][290]), closes [#2536][291]
* **storybook:** create stories for Logo ([#2480][292]) ([`169c3cd`][293])
* **time-input:** Add TimeInput component ([#2493][294]) ([`1423c1e`][295])
* **usm:** Adding new external collab restriction flow ([#2403][296]) ([`5f5d4ec`][297])
* **usm:** Adding UI for business justifications ([#2375][298]) ([`6c39184`][299])
* **usm:** Allow red pills for external collab restrictions ([#2353][300]) ([`8937edc`][301])
* **usm:** Display restricted pills as waived when justification present ([#2416][302]) ([`8820149`][303])
* **usm:** Integrate collab restriction justification flow ([#2401][304]) ([`149276e`][305])
* **usm:** Update justification notice copy ([#2452][306]) ([`605d166`][307])
* **usm:** Updating collab restriction notice copy ([#2454][308]) ([`81210eb`][309])

### BREAKING CHANGES

* **deps:** This change upgrades React to 17.0.1

[1]: https://github.com/box/box-ui-elements/compare/v12.0.0...v13.0.0

[2]: https://github.com/box/box-ui-elements/issues/2504

[3]: https://github.com/box/box-ui-elements/commit/731cd7f

[4]: https://github.com/box/box-ui-elements/issues/2529

[5]: https://github.com/box/box-ui-elements/commit/965048e

[6]: https://github.com/box/box-ui-elements/issues/2464

[7]: https://github.com/box/box-ui-elements/commit/0ff91cd

[8]: https://github.com/box/box-ui-elements/issues/2398

[9]: https://github.com/box/box-ui-elements/commit/401c359

[10]: https://github.com/box/box-ui-elements/issues/2387

[11]: https://github.com/box/box-ui-elements/commit/7155b78

[12]: https://github.com/box/box-ui-elements/issues/2400

[13]: https://github.com/box/box-ui-elements/commit/53acd92

[14]: https://github.com/box/box-ui-elements/issues/2385

[15]: https://github.com/box/box-ui-elements/commit/158ac7a

[16]: https://github.com/box/box-ui-elements/issues/2541

[17]: https://github.com/box/box-ui-elements/commit/592e531

[18]: https://github.com/box/box-ui-elements/issues/2539

[19]: https://github.com/box/box-ui-elements/commit/d11bdd8

[20]: https://github.com/box/box-ui-elements/issues/2517

[21]: https://github.com/box/box-ui-elements/commit/3440e74

[22]: https://github.com/box/box-ui-elements/issues/2513

[23]: https://github.com/box/box-ui-elements/commit/4d9e389

[24]: https://github.com/box/box-ui-elements/issues/2389

[25]: https://github.com/box/box-ui-elements/commit/d360eac

[26]: https://github.com/box/box-ui-elements/issues/2379

[27]: https://github.com/box/box-ui-elements/commit/0714986

[28]: https://github.com/box/box-ui-elements/issues/2338

[29]: https://github.com/box/box-ui-elements/commit/6771fdf

[30]: https://github.com/box/box-ui-elements/issues/2490

[31]: https://github.com/box/box-ui-elements/commit/c329303

[32]: https://github.com/box/box-ui-elements/issues/2408

[33]: https://github.com/box/box-ui-elements/commit/3709fb5

[34]: https://github.com/box/box-ui-elements/issues/2540

[35]: https://github.com/box/box-ui-elements/commit/af36684

[36]: https://github.com/box/box-ui-elements/issues/2543

[37]: https://github.com/box/box-ui-elements/commit/774d9f4

[38]: https://github.com/box/box-ui-elements/issues/2348

[39]: https://github.com/box/box-ui-elements/commit/e078c35

[40]: https://github.com/box/box-ui-elements/issues/2347

[41]: https://github.com/box/box-ui-elements/commit/ccb4cd3

[42]: https://github.com/box/box-ui-elements/issues/2344

[43]: https://github.com/box/box-ui-elements/commit/5457ce2

[44]: https://github.com/box/box-ui-elements/issues/2361

[45]: https://github.com/box/box-ui-elements/commit/c56dc8c

[46]: https://github.com/box/box-ui-elements/issues/2373

[47]: https://github.com/box/box-ui-elements/commit/711ecb0

[48]: https://github.com/box/box-ui-elements/issues/2349

[49]: https://github.com/box/box-ui-elements/commit/6f53b7e

[50]: https://github.com/box/box-ui-elements/issues/2394

[51]: https://github.com/box/box-ui-elements/commit/5e21d2a

[52]: https://github.com/box/box-ui-elements/issues/2358

[53]: https://github.com/box/box-ui-elements/commit/5d01c62

[54]: https://github.com/box/box-ui-elements/issues/2378

[55]: https://github.com/box/box-ui-elements/commit/f631c9a

[56]: https://github.com/box/box-ui-elements/issues/2350

[57]: https://github.com/box/box-ui-elements/commit/b43ecb3

[58]: https://github.com/box/box-ui-elements/issues/2380

[59]: https://github.com/box/box-ui-elements/commit/6a52be8

[60]: https://github.com/box/box-ui-elements/issues/2392

[61]: https://github.com/box/box-ui-elements/commit/531727a

[62]: https://github.com/box/box-ui-elements/issues/2332

[63]: https://github.com/box/box-ui-elements/commit/db97fc1

[64]: https://github.com/box/box-ui-elements/issues/2494

[65]: https://github.com/box/box-ui-elements/commit/85c005a

[66]: https://github.com/box/box-ui-elements/issues/2337

[67]: https://github.com/box/box-ui-elements/commit/cdfd094

[68]: https://github.com/box/box-ui-elements/issues/2502

[69]: https://github.com/box/box-ui-elements/commit/4841974

[70]: https://github.com/box/box-ui-elements/issues/2519

[71]: https://github.com/box/box-ui-elements/commit/502fa9f

[72]: https://github.com/box/box-ui-elements/issues/2333

[73]: https://github.com/box/box-ui-elements/commit/3fdb29d

[74]: https://github.com/box/box-ui-elements/issues/2334

[75]: https://github.com/box/box-ui-elements/commit/1c0045a

[76]: https://github.com/box/box-ui-elements/issues/2340

[77]: https://github.com/box/box-ui-elements/commit/3848552

[78]: https://github.com/box/box-ui-elements/issues/2355

[79]: https://github.com/box/box-ui-elements/commit/c5b83b7

[80]: https://github.com/box/box-ui-elements/issues/2364

[81]: https://github.com/box/box-ui-elements/commit/40fd34d

[82]: https://github.com/box/box-ui-elements/issues/2374

[83]: https://github.com/box/box-ui-elements/commit/0d55546

[84]: https://github.com/box/box-ui-elements/issues/2386

[85]: https://github.com/box/box-ui-elements/commit/fa9bbb5

[86]: https://github.com/box/box-ui-elements/issues/2388

[87]: https://github.com/box/box-ui-elements/commit/cf99b77

[88]: https://github.com/box/box-ui-elements/issues/2391

[89]: https://github.com/box/box-ui-elements/commit/b86abf7

[90]: https://github.com/box/box-ui-elements/issues/2399

[91]: https://github.com/box/box-ui-elements/commit/3917cdc

[92]: https://github.com/box/box-ui-elements/issues/2404

[93]: https://github.com/box/box-ui-elements/commit/9a4a969

[94]: https://github.com/box/box-ui-elements/issues/2409

[95]: https://github.com/box/box-ui-elements/commit/d229d9b

[96]: https://github.com/box/box-ui-elements/issues/2415

[97]: https://github.com/box/box-ui-elements/commit/390ab77

[98]: https://github.com/box/box-ui-elements/issues/2421

[99]: https://github.com/box/box-ui-elements/commit/6717ba4

[100]: https://github.com/box/box-ui-elements/issues/2425

[101]: https://github.com/box/box-ui-elements/commit/ae845fd

[102]: https://github.com/box/box-ui-elements/issues/2427

[103]: https://github.com/box/box-ui-elements/commit/c76e5e1

[104]: https://github.com/box/box-ui-elements/issues/2428

[105]: https://github.com/box/box-ui-elements/commit/e89eb9f

[106]: https://github.com/box/box-ui-elements/issues/2437

[107]: https://github.com/box/box-ui-elements/commit/2091a02

[108]: https://github.com/box/box-ui-elements/issues/2439

[109]: https://github.com/box/box-ui-elements/commit/ffb91ae

[110]: https://github.com/box/box-ui-elements/issues/2440

[111]: https://github.com/box/box-ui-elements/commit/41ce975

[112]: https://github.com/box/box-ui-elements/issues/2443

[113]: https://github.com/box/box-ui-elements/commit/4d902df

[114]: https://github.com/box/box-ui-elements/issues/2447

[115]: https://github.com/box/box-ui-elements/commit/2d961e0

[116]: https://github.com/box/box-ui-elements/issues/2450

[117]: https://github.com/box/box-ui-elements/commit/cf97ee8

[118]: https://github.com/box/box-ui-elements/issues/2453

[119]: https://github.com/box/box-ui-elements/commit/e050dcf

[120]: https://github.com/box/box-ui-elements/issues/2455

[121]: https://github.com/box/box-ui-elements/commit/063ee44

[122]: https://github.com/box/box-ui-elements/issues/2458

[123]: https://github.com/box/box-ui-elements/commit/5c4f736

[124]: https://github.com/box/box-ui-elements/issues/2459

[125]: https://github.com/box/box-ui-elements/commit/4ddb0e5

[126]: https://github.com/box/box-ui-elements/issues/2461

[127]: https://github.com/box/box-ui-elements/commit/74577b7

[128]: https://github.com/box/box-ui-elements/issues/2462

[129]: https://github.com/box/box-ui-elements/commit/f8874eb

[130]: https://github.com/box/box-ui-elements/issues/2463

[131]: https://github.com/box/box-ui-elements/commit/b0742fd

[132]: https://github.com/box/box-ui-elements/issues/2474

[133]: https://github.com/box/box-ui-elements/commit/95199a4

[134]: https://github.com/box/box-ui-elements/issues/2475

[135]: https://github.com/box/box-ui-elements/commit/88f8dfc

[136]: https://github.com/box/box-ui-elements/issues/2482

[137]: https://github.com/box/box-ui-elements/commit/1a5b277

[138]: https://github.com/box/box-ui-elements/issues/2483

[139]: https://github.com/box/box-ui-elements/commit/364ba87

[140]: https://github.com/box/box-ui-elements/issues/2500

[141]: https://github.com/box/box-ui-elements/commit/e5f694f

[142]: https://github.com/box/box-ui-elements/issues/2506

[143]: https://github.com/box/box-ui-elements/commit/b08a93a

[144]: https://github.com/box/box-ui-elements/issues/2518

[145]: https://github.com/box/box-ui-elements/commit/4e614fd

[146]: https://github.com/box/box-ui-elements/issues/2534

[147]: https://github.com/box/box-ui-elements/commit/e709f89

[148]: https://github.com/box/box-ui-elements/issues/2390

[149]: https://github.com/box/box-ui-elements/commit/4a586b5

[150]: https://github.com/box/box-ui-elements/issues/2366

[151]: https://github.com/box/box-ui-elements/commit/ea29b21

[152]: https://github.com/box/box-ui-elements/issues/2381

[153]: https://github.com/box/box-ui-elements/commit/22f8401

[154]: https://github.com/box/box-ui-elements/issues/2371

[155]: https://github.com/box/box-ui-elements/commit/d66cdeb

[156]: https://github.com/box/box-ui-elements/issues/2514

[157]: https://github.com/box/box-ui-elements/commit/d28d4cb

[158]: https://github.com/box/box-ui-elements/issues/2503

[159]: https://github.com/box/box-ui-elements/commit/b12e05f

[160]: https://github.com/box/box-ui-elements/issues/2431

[161]: https://github.com/box/box-ui-elements/issues/2435

[162]: https://github.com/box/box-ui-elements/commit/75df3d4

[163]: https://github.com/box/box-ui-elements/issues/2521

[164]: https://github.com/box/box-ui-elements/commit/c4a38d2

[165]: https://github.com/box/box-ui-elements/issues/2516

[166]: https://github.com/box/box-ui-elements/commit/15ead28

[167]: https://github.com/box/box-ui-elements/issues/2533

[168]: https://github.com/box/box-ui-elements/commit/4efb41e

[169]: https://github.com/box/box-ui-elements/issues/2476

[170]: https://github.com/box/box-ui-elements/commit/ddbdbc1

[171]: https://github.com/box/box-ui-elements/issues/2445

[172]: https://github.com/box/box-ui-elements/commit/349ca6f

[173]: https://github.com/box/box-ui-elements/issues/2510

[174]: https://github.com/box/box-ui-elements/commit/c13ff11

[175]: https://github.com/box/box-ui-elements/issues/2343

[176]: https://github.com/box/box-ui-elements/commit/2332327

[177]: https://github.com/box/box-ui-elements/issues/2441

[178]: https://github.com/box/box-ui-elements/commit/d540003

[179]: https://github.com/box/box-ui-elements/issues/2372

[180]: https://github.com/box/box-ui-elements/commit/c5119b7

[181]: https://github.com/box/box-ui-elements/issues/2370

[182]: https://github.com/box/box-ui-elements/commit/ca1567b

[183]: https://github.com/box/box-ui-elements/issues/2360

[184]: https://github.com/box/box-ui-elements/commit/a428281

[185]: https://github.com/box/box-ui-elements/issues/2505

[186]: https://github.com/box/box-ui-elements/commit/28d11ac

[187]: https://github.com/box/box-ui-elements/issues/2487

[188]: https://github.com/box/box-ui-elements/commit/7f8b0c1

[189]: https://github.com/box/box-ui-elements/issues/2520

[190]: https://github.com/box/box-ui-elements/commit/3655ee3

[191]: https://github.com/box/box-ui-elements/issues/2426

[192]: https://github.com/box/box-ui-elements/commit/d0b27ef

[193]: https://github.com/box/box-ui-elements/issues/2423

[194]: https://github.com/box/box-ui-elements/commit/773abc6

[195]: https://github.com/box/box-ui-elements/issues/2351

[196]: https://github.com/box/box-ui-elements/commit/cb0f183

[197]: https://github.com/box/box-ui-elements/issues/2499

[198]: https://github.com/box/box-ui-elements/commit/c58a53c

[199]: https://github.com/box/box-ui-elements/issues/2525

[200]: https://github.com/box/box-ui-elements/commit/1798ac2

[201]: https://github.com/box/box-ui-elements/issues/2336

[202]: https://github.com/box/box-ui-elements/commit/b1efac1

[203]: https://github.com/box/box-ui-elements/issues/2359

[204]: https://github.com/box/box-ui-elements/commit/e4191bb

[205]: https://github.com/box/box-ui-elements/issues/2508

[206]: https://github.com/box/box-ui-elements/commit/07f7019

[207]: https://github.com/box/box-ui-elements/issues/2376

[208]: https://github.com/box/box-ui-elements/commit/6f7e4cf

[209]: https://github.com/box/box-ui-elements/issues/2465

[210]: https://github.com/box/box-ui-elements/commit/aa0d2d7

[211]: https://github.com/box/box-ui-elements/issues/2363

[212]: https://github.com/box/box-ui-elements/commit/9fa5372

[213]: https://github.com/box/box-ui-elements/issues/2526

[214]: https://github.com/box/box-ui-elements/commit/26190f1

[215]: https://github.com/box/box-ui-elements/issues/2354

[216]: https://github.com/box/box-ui-elements/commit/c038084

[217]: https://github.com/box/box-ui-elements/issues/2339

[218]: https://github.com/box/box-ui-elements/commit/3393858

[219]: https://github.com/box/box-ui-elements/issues/2346

[220]: https://github.com/box/box-ui-elements/commit/239e986

[221]: https://github.com/box/box-ui-elements/issues/2377

[222]: https://github.com/box/box-ui-elements/commit/df61c57

[223]: https://github.com/box/box-ui-elements/issues/2383

[224]: https://github.com/box/box-ui-elements/commit/bf9dc9c

[225]: https://github.com/box/box-ui-elements/issues/2412

[226]: https://github.com/box/box-ui-elements/commit/a20c862

[227]: https://github.com/box/box-ui-elements/issues/2430

[228]: https://github.com/box/box-ui-elements/commit/98723f5

[229]: https://github.com/box/box-ui-elements/issues/2477

[230]: https://github.com/box/box-ui-elements/commit/b3aa617

[231]: https://github.com/box/box-ui-elements/issues/2491

[232]: https://github.com/box/box-ui-elements/commit/903fcd7

[233]: https://github.com/box/box-ui-elements/issues/2442

[234]: https://github.com/box/box-ui-elements/commit/2e98d7d

[235]: https://github.com/box/box-ui-elements/issues/2438

[236]: https://github.com/box/box-ui-elements/issues/2515

[237]: https://github.com/box/box-ui-elements/commit/72518f9

[238]: https://github.com/box/box-ui-elements/issues/2492

[239]: https://github.com/box/box-ui-elements/commit/03982ea

[240]: https://github.com/box/box-ui-elements/issues/2488

[241]: https://github.com/box/box-ui-elements/commit/2057d52

[242]: https://github.com/box/box-ui-elements/issues/2395

[243]: https://github.com/box/box-ui-elements/commit/c4d12be

[244]: https://github.com/box/box-ui-elements/issues/2486

[245]: https://github.com/box/box-ui-elements/commit/7261731

[246]: https://github.com/box/box-ui-elements/issues/2419

[247]: https://github.com/box/box-ui-elements/commit/830bf71

[248]: https://github.com/box/box-ui-elements/issues/2433

[249]: https://github.com/box/box-ui-elements/commit/13747ec

[250]: https://github.com/box/box-ui-elements/issues/2365

[251]: https://github.com/box/box-ui-elements/commit/d6a9d5e

[252]: https://github.com/box/box-ui-elements/issues/2485

[253]: https://github.com/box/box-ui-elements/commit/00991cd

[254]: https://github.com/box/box-ui-elements/issues/2489

[255]: https://github.com/box/box-ui-elements/commit/e8a908a

[256]: https://github.com/box/box-ui-elements/issues/2352

[257]: https://github.com/box/box-ui-elements/commit/7f6800b

[258]: https://github.com/box/box-ui-elements/issues/2396

[259]: https://github.com/box/box-ui-elements/commit/779b6b1

[260]: https://github.com/box/box-ui-elements/issues/2369

[261]: https://github.com/box/box-ui-elements/commit/d7ff786

[262]: https://github.com/box/box-ui-elements/issues/2420

[263]: https://github.com/box/box-ui-elements/commit/cb7843b

[264]: https://github.com/box/box-ui-elements/issues/2357

[265]: https://github.com/box/box-ui-elements/commit/31c4521

[266]: https://github.com/box/box-ui-elements/issues/2367

[267]: https://github.com/box/box-ui-elements/commit/bac6f4e

[268]: https://github.com/box/box-ui-elements/issues/2532

[269]: https://github.com/box/box-ui-elements/commit/56f1abb

[270]: https://github.com/box/box-ui-elements/issues/2418

[271]: https://github.com/box/box-ui-elements/commit/2195624

[272]: https://github.com/box/box-ui-elements/issues/2411

[273]: https://github.com/box/box-ui-elements/commit/0649634

[274]: https://github.com/box/box-ui-elements/issues/2335

[275]: https://github.com/box/box-ui-elements/commit/99aeea0

[276]: https://github.com/box/box-ui-elements/issues/2512

[277]: https://github.com/box/box-ui-elements/commit/d014867

[278]: https://github.com/box/box-ui-elements/issues/2498

[279]: https://github.com/box/box-ui-elements/commit/b669d97

[280]: https://github.com/box/box-ui-elements/issues/2542

[281]: https://github.com/box/box-ui-elements/commit/6d1dc25

[282]: https://github.com/box/box-ui-elements/issues/2460

[283]: https://github.com/box/box-ui-elements/commit/8017064

[284]: https://github.com/box/box-ui-elements/commit/f510a28

[285]: https://github.com/box/box-ui-elements/issues/2436

[286]: https://github.com/box/box-ui-elements/commit/da08924

[287]: https://github.com/box/box-ui-elements/issues/2449

[288]: https://github.com/box/box-ui-elements/commit/fa4af2c

[289]: https://github.com/box/box-ui-elements/issues/2537

[290]: https://github.com/box/box-ui-elements/commit/da38e93

[291]: https://github.com/box/box-ui-elements/issues/2536

[292]: https://github.com/box/box-ui-elements/issues/2480

[293]: https://github.com/box/box-ui-elements/commit/169c3cd

[294]: https://github.com/box/box-ui-elements/issues/2493

[295]: https://github.com/box/box-ui-elements/commit/1423c1e

[296]: https://github.com/box/box-ui-elements/issues/2403

[297]: https://github.com/box/box-ui-elements/commit/5f5d4ec

[298]: https://github.com/box/box-ui-elements/issues/2375

[299]: https://github.com/box/box-ui-elements/commit/6c39184

[300]: https://github.com/box/box-ui-elements/issues/2353

[301]: https://github.com/box/box-ui-elements/commit/8937edc

[302]: https://github.com/box/box-ui-elements/issues/2416

[303]: https://github.com/box/box-ui-elements/commit/8820149

[304]: https://github.com/box/box-ui-elements/issues/2401

[305]: https://github.com/box/box-ui-elements/commit/149276e

[306]: https://github.com/box/box-ui-elements/issues/2452

[307]: https://github.com/box/box-ui-elements/commit/605d166

[308]: https://github.com/box/box-ui-elements/issues/2454

[309]: https://github.com/box/box-ui-elements/commit/81210eb
