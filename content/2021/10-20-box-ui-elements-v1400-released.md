---
applied_at: '2021-10-20'
applies_to:
  - frontend
  - ui-elements
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-ui-elements/releases/tag/v14.0.0'
collapse: true
---

# Box UI Elements `v14.0.0` released

# [14.0.0][1] (2021-10-20)

### Bug Fixes

* **mediafigure:** set "as" property to div as default ([#2721][2]) ([`4c10626`][3])
* a11y - change color ([#2726][4]) ([`643d5a9`][5])
* **a11y:** Add arialabel to additional apps button ([#2719][6]) ([`1186ca4`][7])
* **a11y:** change comment tip element from aside to div ([#2720][8]) ([`53688b5`][9])
* **accountsettings:** color contrast on radio btn ([#2667][10]) ([`9a65e7d`][11])
* **AccountSettings:** A11Y - update label color in 2-step verification modal ([#2548][12]) ([`31879f0`][13])
* **alerts:** Improved color contrast to enhance accessibility ([#2718][14]) ([`e709198`][15])
* **buttons:** highlighting button properly on focus ([#2668][16]) ([`8f2924a`][17])
* **checkbox:** add description area note to checkbox ([#2725][18]) ([`3e8484e`][19])
* **checkbox:** render label in case text exist ([#2658][20]) ([`166afe4`][21])
* **comments:** Added Aria attributes to enhance accessibility ([#2639][22]) ([`d643740`][23]), closes [#2654][24]
* **content-explorer:** disable item name click if item disabled ([#2700][25]) ([`e38346f`][26])
* **content-sharing:** save enterprise name after removing link ([#2722][27]) ([`a5b6389`][28])
* **datepicker:** Fix opacity for disabled arrows in IE11 and Edge ([#2671][29]) ([`fef09c6`][30])
* **DraftJSMentionSelectorCore:** Dynamically removed and reapplied alert Mention feature ([#2645][31]) ([`7d0e93d`][32])
* **forms:** highlight properly radio and checkboxes ([#2660][33]) ([`188db59`][34])
* **headings:** fixed headings hierarchy on version history ([#2679][35]) ([`7f8554a`][36])
* **i18n:** update translations ([#2652][37]) ([`c01f3d8`][38])
* **i18n:** update translations ([#2657][39]) ([`a5ab1f2`][40])
* **i18n:** update translations ([#2665][41]) ([`9b7bf6e`][42])
* **i18n:** update translations ([#2670][43]) ([`44a01a4`][44])
* **i18n:** update translations ([#2672][45]) ([`f1475a7`][46])
* **i18n:** update translations ([#2673][47]) ([`e72b879`][48])
* **i18n:** update translations ([#2678][49]) ([`fd93553`][50])
* **i18n:** update translations ([#2689][51]) ([`2a6951d`][52])
* **i18n:** update translations ([#2692][53]) ([`4ef2671`][54])
* **i18n:** update translations ([#2699][55]) ([`5799873`][56])
* **i18n:** update translations ([#2701][57]) ([`9ed6008`][58])
* **i18n:** update translations ([#2712][59]) ([`199d875`][60])
* **itemicon:** Hide preview thumbnail for screen readers ([#2686][61]) ([`00e25ac`][62])
* **metadata:** add ariaLabel to button ([#2677][63]) ([`5e1cf0f`][64])
* **metadata:** added aria-expanded to collapsible buttons ([#2694][65]) ([`8499eff`][66])
* **metadata:** added aria-pressed to edit metadata button ([#2695][67]) ([`76c6fc8`][68])
* **metadata:** added correct role for select button ([#2676][69]) ([`ce5f642`][70])
* **pills:** improved color contrast for accessibility ([#2654][24]) ([`eeb36da`][71])
* **preview:** Update supported indesign extensions ([#2684][72]) ([`521d6b8`][73])
* **select:** changes tooltip trigger to a button instead of hover ([#2710][74]) ([`2c7b416`][75])
* **shared-link-section:** fix reposition esl ftux tooltip ([#2696][76]) ([`0c8f58d`][77])
* **tooltip:** remove button role for targeted click through ([#2651][78]) ([`12b68d7`][79])
* **unified-share-modal:** filter out collaborated users and groups ([#2702][80]) ([`a677bd9`][81])
* **versionhistory:** change minimum contrast color ([#2687][82]) ([`df6cb0f`][83])
* **versions:** improved color contrast on version details ([#2690][84]) ([`ce13947`][85])
* **versions:** improved contrast on highlighted version button ([#2685][86]) ([`501f164`][87])
* Revert "update label color in 2-step verification modal ([#2548][12])" ([#2664][88]) ([`07a735b`][89])
* set listbox instead of standard menu properties ([#2675][90]) ([`d7573da`][91])
* show access-policy specific preview error screen ([#2662][92]) ([`398ab4c`][93])
* **content-explorer:** Get text reps in initial /folders call ([#2647][94]) ([`414d7b8`][95])
* **i18n:** update translations ([#2644][96]) ([`00b993a`][97])
* **metadata:** A11Y - Autofocus on dialog when delete metadata ([#2640][98]) ([`db7d7ab`][99])
* tooltip text for shield access restriction ([#2646][100]) ([`ec09d18`][101])
* update shield tooltip wording ([#2643][102]) ([`252eeaa`][103])
* **a11y:** Change label for screen-reader users ([#2614][104]) ([`c56b446`][105])
* **a11y:** ensure tooltip-labelled content is accessible ([#2544][106]) ([`e699439`][107])
* **AccountSettings:** A11Y- incorrect use of nav tag in TabviewPrimitive ([#2569][108]) ([`cea9fc1`][109])
* **avatar:** Remove role presentation in span element ([#2597][110]) ([`d74935f`][111])
* **button-group:** fix styles when wrapped with tooltip ([#2563][112]) ([`7de98d5`][113])
* **button-group:** fix styles when wrapped with tooltip ([#2565][114]) ([`221434e`][115])
* **commentform:** color contrast correction ([#2618][116]) ([`8f13c94`][117])
* **content-sharing:** allow download settings on gsuite files ([#2545][118]) ([`ecc8a6b`][119])
* **contentsidebar:** change background to white ([#2605][120]) ([`c0ec2b9`][121])
* **countbadge:** tweak contrast color ([#2620][122]) ([`975e7e2`][123])
* **CreateNewFolder:** \[A11Y]- Add aria described by pilled selector ([#2568][124]) ([`b0b3c92`][125])
* **datepicker:** improving color contrast ([#2616][126]) ([`09b8c16`][127])
* **draftjs:** Adds description for screenReader users ([#2624][128]) ([`f83166a`][129])
* **draftjs:** Tweak contrast color ([#2623][130]) ([`600fcc4`][131])
* **flyout:** remove redundant role button ([#2594][132]) ([`3e0e589`][133])
* **flyouts:** made flyout button keyboard accessible ([#2559][134]) ([`b7ca8a9`][135])
* **i18n:** update translations ([#2538][136]) ([`fa62c5f`][137])
* **i18n:** update translations ([#2556][138]) ([`bb81627`][139])
* **i18n:** update translations ([#2566][140]) ([`a038974`][141])
* **i18n:** update translations ([#2567][142]) ([`14f83c4`][143])
* **i18n:** update translations ([#2571][144]) ([`8b48412`][145])
* **i18n:** update translations ([#2593][146]) ([`d632c8c`][147])
* **i18n:** update translations ([#2601][148]) ([`cce2758`][149])
* **i18n:** update translations ([#2630][150]) ([`d75dc30`][151])
* **i18n:** update translations ([#2635][152]) ([`ad979c3`][153])
* **item-details:** add space before extend ([#2585][154]) ([`53dbdde`][155])
* **loading:** Hide preview loading state if files call fails ([#2550][156]) ([`7b7209d`][157])
* **messagecenter:** update typing for onMessageShown ([#2572][158]) ([`24f024f`][159])
* **metadata:** Added visual focus to search btns ([#2627][160]) ([`2cafdcd`][161])
* **metadata:** Fixed lost focus on search ([#2637][162]) ([`fc39711`][163])
* **metadata:** improved color contrast on edit icon button ([#2621][164]) ([`8331d24`][165])
* **metadata:** Tweak contrast color ([#2625][166]) ([`4ed7dc7`][167])
* **pillselectordropdown:** remove label when there is no text inside ([#2576][168]) ([`3affe9d`][169])
* **sidebar:** Change Aside element by Header ([#2582][170]) ([`5a1c965`][171])
* **SidebarSection:** A11Y - add aria-expanded in sidebar section component ([#2604][172]) ([`0c5c7c9`][173])
* **time-input:** Display error when time input is empty ([#2551][174]) ([`004407d`][175])
* **toggle:** update Toggle displayName for proper snaps and test refs ([#2613][176]) ([`8fd0931`][177])
* **Toggle:** A11Y - When shared link does not exist maintain focus on the switch ([#2581][178]) ([`7847dd3`][179])
* **tooltip:** Modify tooltip to allow rerender after closed by user ([#2596][180]) ([`35bbcef`][181])
* **Tooltip:** A11Y - The errormessage should not have role=tooltip  ([#2573][182]) ([`143753f`][183])
* **uploads:** skip upload reachability test for upload.app.box-gov.com ([#2531][184]) ([`83d05c3`][185])

### Features

* **activity-sidebar:** allow callback for task assignment update ([#2546][186]) ([`3a1ee3d`][187])
* **assets:** Update assets to latest from design ([#2638][188]) ([`24b28cc`][189])
* **assets:** update Sign assets to latest ([#2609][190]) ([`bf7aa1a`][191])
* **content-picker:** add flag for hiding pagination buttons ([#2617][192]) ([`83688f6`][193])
* **content-picker:** add flag to hide selected button ([#2598][194]) ([`48cec60`][195])
* **content-picker:** clear selected items on navigation ([#2599][196]) ([`b28f992`][197])
* **content-picker:** pass custom buttons to ContentPicker ([#2590][198]) ([`d69b13d`][199])
* **content-picker:** pass flag to hide logo in ContentPicker ([#2607][200]) ([`ec9e8fd`][201])
* **content-picker:** pass id and name from ContentPicker ([#2600][202]) ([`4c10960`][203])
* **content-preview:** update props in content preview ([#2549][204]) ([`0af42cd`][205])
* **contentexplorermodal:** Added new copy mode ([#2697][206]) ([`078be2a`][207])
* **contentsidebar:** Add instrumentation for data load time ([#2688][208]) ([`2b9df1c`][209])
* **contentsidebar:** Disable SidebarNavSign w/ error message on hover ([#2691][210]) ([`e48e4f4`][211])
* **datepicker:** Option to enable pikaday's default keyboard input ([#2682][212]) ([`b01a2b3`][213])
* **icon:** add files icon ([#2655][214]) ([`804b477`][215])
* **icons:** Import latest assets from design ([#2583][216]) ([`b4dfca4`][217])
* **in-app-messenger:** add new template for modal ([#2606][218]) ([`3e329d4`][219])
* **in-app-messenger:** add new template for popout ([#2575][220]) ([`da25455`][221])
* **in-app-messenger:** move MessagePreviewContent to common place ([#2580][222]) ([`58f1970`][223])
* **message-center:** expand resin tags for links ([#2417][224]) ([`0b52db2`][225])
* **messagecenter:** add callback when message loads ([#2570][226]) ([`346afee`][227])
* **presence:** Hide additional collaborator count ([#2634][228]) ([`5cfef67`][229])
* **preview:** Add indesign extensions for file list and preview ([#2636][230]) ([`c4d4dd8`][231])
* **preview:** Update default version of Preview SDK ([#2552][232]) ([`f8d4310`][233])
* **preview:** Update Preview SDK to latest version ([#2717][234]) ([`406e12a`][235])
* **react-virtualized:** documentation on forked package ([#2715][236]) ([`b427edf`][237])
* **shared-link-permission-menu:** add check for esl ftux ([#2681][238]) ([`80d5e7b`][239])
* **shared-link-permission-menu:** add edit option ([#2659][240]) ([`b700522`][241])
* **shared-link-permission-menu:** add ftux for shared link permission menu ([#2669][242]) ([`4211c4a`][243])
* **shared-link-section:** add tooltip ftux ([#2674][244]) ([`8d683b3`][245])
* **shared-link-section:** add warning copy ([#2663][246]) ([`bea61c8`][247])
* **shared-link-section:** add warning copy for elevated edit permission ([#2666][248]) ([`6d7405e`][249])
* **sharedlinksettingsmodal:** Add optional password info placeholder ([#2642][250]) ([`d006ab4`][251])
* **sign:** Add button for Box Sign to ContentSidebar ([#2586][252]) ([`48432a1`][253])
* **sign:** Add ftux tooltip for Box Sign entry point ([#2592][254]) ([`3684b7e`][255])
* **tooltip:** add classname to tether element component ([#2560][256]) ([`d6db29f`][257])

### BREAKING CHANGES

* **react-virtualized:** this replaces react-virtualized as a peer dependency with the [@box/react-virtualized][258] fork

* feat(react-virtualized): documentation on forked package

* **react-virtualized:** this replaces react-virtualized as a peer dependency with the [@box/react-virtualized][258] fork

[1]: https://github.com/box/box-ui-elements/compare/v13.0.0...v14.0.0

[2]: https://github.com/box/box-ui-elements/issues/2721

[3]: https://github.com/box/box-ui-elements/commit/4c10626

[4]: https://github.com/box/box-ui-elements/issues/2726

[5]: https://github.com/box/box-ui-elements/commit/643d5a9

[6]: https://github.com/box/box-ui-elements/issues/2719

[7]: https://github.com/box/box-ui-elements/commit/1186ca4

[8]: https://github.com/box/box-ui-elements/issues/2720

[9]: https://github.com/box/box-ui-elements/commit/53688b5

[10]: https://github.com/box/box-ui-elements/issues/2667

[11]: https://github.com/box/box-ui-elements/commit/9a65e7d

[12]: https://github.com/box/box-ui-elements/issues/2548

[13]: https://github.com/box/box-ui-elements/commit/31879f0

[14]: https://github.com/box/box-ui-elements/issues/2718

[15]: https://github.com/box/box-ui-elements/commit/e709198

[16]: https://github.com/box/box-ui-elements/issues/2668

[17]: https://github.com/box/box-ui-elements/commit/8f2924a

[18]: https://github.com/box/box-ui-elements/issues/2725

[19]: https://github.com/box/box-ui-elements/commit/3e8484e

[20]: https://github.com/box/box-ui-elements/issues/2658

[21]: https://github.com/box/box-ui-elements/commit/166afe4

[22]: https://github.com/box/box-ui-elements/issues/2639

[23]: https://github.com/box/box-ui-elements/commit/d643740

[24]: https://github.com/box/box-ui-elements/issues/2654

[25]: https://github.com/box/box-ui-elements/issues/2700

[26]: https://github.com/box/box-ui-elements/commit/e38346f

[27]: https://github.com/box/box-ui-elements/issues/2722

[28]: https://github.com/box/box-ui-elements/commit/a5b6389

[29]: https://github.com/box/box-ui-elements/issues/2671

[30]: https://github.com/box/box-ui-elements/commit/fef09c6

[31]: https://github.com/box/box-ui-elements/issues/2645

[32]: https://github.com/box/box-ui-elements/commit/7d0e93d

[33]: https://github.com/box/box-ui-elements/issues/2660

[34]: https://github.com/box/box-ui-elements/commit/188db59

[35]: https://github.com/box/box-ui-elements/issues/2679

[36]: https://github.com/box/box-ui-elements/commit/7f8554a

[37]: https://github.com/box/box-ui-elements/issues/2652

[38]: https://github.com/box/box-ui-elements/commit/c01f3d8

[39]: https://github.com/box/box-ui-elements/issues/2657

[40]: https://github.com/box/box-ui-elements/commit/a5ab1f2

[41]: https://github.com/box/box-ui-elements/issues/2665

[42]: https://github.com/box/box-ui-elements/commit/9b7bf6e

[43]: https://github.com/box/box-ui-elements/issues/2670

[44]: https://github.com/box/box-ui-elements/commit/44a01a4

[45]: https://github.com/box/box-ui-elements/issues/2672

[46]: https://github.com/box/box-ui-elements/commit/f1475a7

[47]: https://github.com/box/box-ui-elements/issues/2673

[48]: https://github.com/box/box-ui-elements/commit/e72b879

[49]: https://github.com/box/box-ui-elements/issues/2678

[50]: https://github.com/box/box-ui-elements/commit/fd93553

[51]: https://github.com/box/box-ui-elements/issues/2689

[52]: https://github.com/box/box-ui-elements/commit/2a6951d

[53]: https://github.com/box/box-ui-elements/issues/2692

[54]: https://github.com/box/box-ui-elements/commit/4ef2671

[55]: https://github.com/box/box-ui-elements/issues/2699

[56]: https://github.com/box/box-ui-elements/commit/5799873

[57]: https://github.com/box/box-ui-elements/issues/2701

[58]: https://github.com/box/box-ui-elements/commit/9ed6008

[59]: https://github.com/box/box-ui-elements/issues/2712

[60]: https://github.com/box/box-ui-elements/commit/199d875

[61]: https://github.com/box/box-ui-elements/issues/2686

[62]: https://github.com/box/box-ui-elements/commit/00e25ac

[63]: https://github.com/box/box-ui-elements/issues/2677

[64]: https://github.com/box/box-ui-elements/commit/5e1cf0f

[65]: https://github.com/box/box-ui-elements/issues/2694

[66]: https://github.com/box/box-ui-elements/commit/8499eff

[67]: https://github.com/box/box-ui-elements/issues/2695

[68]: https://github.com/box/box-ui-elements/commit/76c6fc8

[69]: https://github.com/box/box-ui-elements/issues/2676

[70]: https://github.com/box/box-ui-elements/commit/ce5f642

[71]: https://github.com/box/box-ui-elements/commit/eeb36da

[72]: https://github.com/box/box-ui-elements/issues/2684

[73]: https://github.com/box/box-ui-elements/commit/521d6b8

[74]: https://github.com/box/box-ui-elements/issues/2710

[75]: https://github.com/box/box-ui-elements/commit/2c7b416

[76]: https://github.com/box/box-ui-elements/issues/2696

[77]: https://github.com/box/box-ui-elements/commit/0c8f58d

[78]: https://github.com/box/box-ui-elements/issues/2651

[79]: https://github.com/box/box-ui-elements/commit/12b68d7

[80]: https://github.com/box/box-ui-elements/issues/2702

[81]: https://github.com/box/box-ui-elements/commit/a677bd9

[82]: https://github.com/box/box-ui-elements/issues/2687

[83]: https://github.com/box/box-ui-elements/commit/df6cb0f

[84]: https://github.com/box/box-ui-elements/issues/2690

[85]: https://github.com/box/box-ui-elements/commit/ce13947

[86]: https://github.com/box/box-ui-elements/issues/2685

[87]: https://github.com/box/box-ui-elements/commit/501f164

[88]: https://github.com/box/box-ui-elements/issues/2664

[89]: https://github.com/box/box-ui-elements/commit/07a735b

[90]: https://github.com/box/box-ui-elements/issues/2675

[91]: https://github.com/box/box-ui-elements/commit/d7573da

[92]: https://github.com/box/box-ui-elements/issues/2662

[93]: https://github.com/box/box-ui-elements/commit/398ab4c

[94]: https://github.com/box/box-ui-elements/issues/2647

[95]: https://github.com/box/box-ui-elements/commit/414d7b8

[96]: https://github.com/box/box-ui-elements/issues/2644

[97]: https://github.com/box/box-ui-elements/commit/00b993a

[98]: https://github.com/box/box-ui-elements/issues/2640

[99]: https://github.com/box/box-ui-elements/commit/db7d7ab

[100]: https://github.com/box/box-ui-elements/issues/2646

[101]: https://github.com/box/box-ui-elements/commit/ec09d18

[102]: https://github.com/box/box-ui-elements/issues/2643

[103]: https://github.com/box/box-ui-elements/commit/252eeaa

[104]: https://github.com/box/box-ui-elements/issues/2614

[105]: https://github.com/box/box-ui-elements/commit/c56b446

[106]: https://github.com/box/box-ui-elements/issues/2544

[107]: https://github.com/box/box-ui-elements/commit/e699439

[108]: https://github.com/box/box-ui-elements/issues/2569

[109]: https://github.com/box/box-ui-elements/commit/cea9fc1

[110]: https://github.com/box/box-ui-elements/issues/2597

[111]: https://github.com/box/box-ui-elements/commit/d74935f

[112]: https://github.com/box/box-ui-elements/issues/2563

[113]: https://github.com/box/box-ui-elements/commit/7de98d5

[114]: https://github.com/box/box-ui-elements/issues/2565

[115]: https://github.com/box/box-ui-elements/commit/221434e

[116]: https://github.com/box/box-ui-elements/issues/2618

[117]: https://github.com/box/box-ui-elements/commit/8f13c94

[118]: https://github.com/box/box-ui-elements/issues/2545

[119]: https://github.com/box/box-ui-elements/commit/ecc8a6b

[120]: https://github.com/box/box-ui-elements/issues/2605

[121]: https://github.com/box/box-ui-elements/commit/c0ec2b9

[122]: https://github.com/box/box-ui-elements/issues/2620

[123]: https://github.com/box/box-ui-elements/commit/975e7e2

[124]: https://github.com/box/box-ui-elements/issues/2568

[125]: https://github.com/box/box-ui-elements/commit/b0b3c92

[126]: https://github.com/box/box-ui-elements/issues/2616

[127]: https://github.com/box/box-ui-elements/commit/09b8c16

[128]: https://github.com/box/box-ui-elements/issues/2624

[129]: https://github.com/box/box-ui-elements/commit/f83166a

[130]: https://github.com/box/box-ui-elements/issues/2623

[131]: https://github.com/box/box-ui-elements/commit/600fcc4

[132]: https://github.com/box/box-ui-elements/issues/2594

[133]: https://github.com/box/box-ui-elements/commit/3e0e589

[134]: https://github.com/box/box-ui-elements/issues/2559

[135]: https://github.com/box/box-ui-elements/commit/b7ca8a9

[136]: https://github.com/box/box-ui-elements/issues/2538

[137]: https://github.com/box/box-ui-elements/commit/fa62c5f

[138]: https://github.com/box/box-ui-elements/issues/2556

[139]: https://github.com/box/box-ui-elements/commit/bb81627

[140]: https://github.com/box/box-ui-elements/issues/2566

[141]: https://github.com/box/box-ui-elements/commit/a038974

[142]: https://github.com/box/box-ui-elements/issues/2567

[143]: https://github.com/box/box-ui-elements/commit/14f83c4

[144]: https://github.com/box/box-ui-elements/issues/2571

[145]: https://github.com/box/box-ui-elements/commit/8b48412

[146]: https://github.com/box/box-ui-elements/issues/2593

[147]: https://github.com/box/box-ui-elements/commit/d632c8c

[148]: https://github.com/box/box-ui-elements/issues/2601

[149]: https://github.com/box/box-ui-elements/commit/cce2758

[150]: https://github.com/box/box-ui-elements/issues/2630

[151]: https://github.com/box/box-ui-elements/commit/d75dc30

[152]: https://github.com/box/box-ui-elements/issues/2635

[153]: https://github.com/box/box-ui-elements/commit/ad979c3

[154]: https://github.com/box/box-ui-elements/issues/2585

[155]: https://github.com/box/box-ui-elements/commit/53dbdde

[156]: https://github.com/box/box-ui-elements/issues/2550

[157]: https://github.com/box/box-ui-elements/commit/7b7209d

[158]: https://github.com/box/box-ui-elements/issues/2572

[159]: https://github.com/box/box-ui-elements/commit/24f024f

[160]: https://github.com/box/box-ui-elements/issues/2627

[161]: https://github.com/box/box-ui-elements/commit/2cafdcd

[162]: https://github.com/box/box-ui-elements/issues/2637

[163]: https://github.com/box/box-ui-elements/commit/fc39711

[164]: https://github.com/box/box-ui-elements/issues/2621

[165]: https://github.com/box/box-ui-elements/commit/8331d24

[166]: https://github.com/box/box-ui-elements/issues/2625

[167]: https://github.com/box/box-ui-elements/commit/4ed7dc7

[168]: https://github.com/box/box-ui-elements/issues/2576

[169]: https://github.com/box/box-ui-elements/commit/3affe9d

[170]: https://github.com/box/box-ui-elements/issues/2582

[171]: https://github.com/box/box-ui-elements/commit/5a1c965

[172]: https://github.com/box/box-ui-elements/issues/2604

[173]: https://github.com/box/box-ui-elements/commit/0c5c7c9

[174]: https://github.com/box/box-ui-elements/issues/2551

[175]: https://github.com/box/box-ui-elements/commit/004407d

[176]: https://github.com/box/box-ui-elements/issues/2613

[177]: https://github.com/box/box-ui-elements/commit/8fd0931

[178]: https://github.com/box/box-ui-elements/issues/2581

[179]: https://github.com/box/box-ui-elements/commit/7847dd3

[180]: https://github.com/box/box-ui-elements/issues/2596

[181]: https://github.com/box/box-ui-elements/commit/35bbcef

[182]: https://github.com/box/box-ui-elements/issues/2573

[183]: https://github.com/box/box-ui-elements/commit/143753f

[184]: https://github.com/box/box-ui-elements/issues/2531

[185]: https://github.com/box/box-ui-elements/commit/83d05c3

[186]: https://github.com/box/box-ui-elements/issues/2546

[187]: https://github.com/box/box-ui-elements/commit/3a1ee3d

[188]: https://github.com/box/box-ui-elements/issues/2638

[189]: https://github.com/box/box-ui-elements/commit/24b28cc

[190]: https://github.com/box/box-ui-elements/issues/2609

[191]: https://github.com/box/box-ui-elements/commit/bf7aa1a

[192]: https://github.com/box/box-ui-elements/issues/2617

[193]: https://github.com/box/box-ui-elements/commit/83688f6

[194]: https://github.com/box/box-ui-elements/issues/2598

[195]: https://github.com/box/box-ui-elements/commit/48cec60

[196]: https://github.com/box/box-ui-elements/issues/2599

[197]: https://github.com/box/box-ui-elements/commit/b28f992

[198]: https://github.com/box/box-ui-elements/issues/2590

[199]: https://github.com/box/box-ui-elements/commit/d69b13d

[200]: https://github.com/box/box-ui-elements/issues/2607

[201]: https://github.com/box/box-ui-elements/commit/ec9e8fd

[202]: https://github.com/box/box-ui-elements/issues/2600

[203]: https://github.com/box/box-ui-elements/commit/4c10960

[204]: https://github.com/box/box-ui-elements/issues/2549

[205]: https://github.com/box/box-ui-elements/commit/0af42cd

[206]: https://github.com/box/box-ui-elements/issues/2697

[207]: https://github.com/box/box-ui-elements/commit/078be2a

[208]: https://github.com/box/box-ui-elements/issues/2688

[209]: https://github.com/box/box-ui-elements/commit/2b9df1c

[210]: https://github.com/box/box-ui-elements/issues/2691

[211]: https://github.com/box/box-ui-elements/commit/e48e4f4

[212]: https://github.com/box/box-ui-elements/issues/2682

[213]: https://github.com/box/box-ui-elements/commit/b01a2b3

[214]: https://github.com/box/box-ui-elements/issues/2655

[215]: https://github.com/box/box-ui-elements/commit/804b477

[216]: https://github.com/box/box-ui-elements/issues/2583

[217]: https://github.com/box/box-ui-elements/commit/b4dfca4

[218]: https://github.com/box/box-ui-elements/issues/2606

[219]: https://github.com/box/box-ui-elements/commit/3e329d4

[220]: https://github.com/box/box-ui-elements/issues/2575

[221]: https://github.com/box/box-ui-elements/commit/da25455

[222]: https://github.com/box/box-ui-elements/issues/2580

[223]: https://github.com/box/box-ui-elements/commit/58f1970

[224]: https://github.com/box/box-ui-elements/issues/2417

[225]: https://github.com/box/box-ui-elements/commit/0b52db2

[226]: https://github.com/box/box-ui-elements/issues/2570

[227]: https://github.com/box/box-ui-elements/commit/346afee

[228]: https://github.com/box/box-ui-elements/issues/2634

[229]: https://github.com/box/box-ui-elements/commit/5cfef67

[230]: https://github.com/box/box-ui-elements/issues/2636

[231]: https://github.com/box/box-ui-elements/commit/c4d4dd8

[232]: https://github.com/box/box-ui-elements/issues/2552

[233]: https://github.com/box/box-ui-elements/commit/f8d4310

[234]: https://github.com/box/box-ui-elements/issues/2717

[235]: https://github.com/box/box-ui-elements/commit/406e12a

[236]: https://github.com/box/box-ui-elements/issues/2715

[237]: https://github.com/box/box-ui-elements/commit/b427edf

[238]: https://github.com/box/box-ui-elements/issues/2681

[239]: https://github.com/box/box-ui-elements/commit/80d5e7b

[240]: https://github.com/box/box-ui-elements/issues/2659

[241]: https://github.com/box/box-ui-elements/commit/b700522

[242]: https://github.com/box/box-ui-elements/issues/2669

[243]: https://github.com/box/box-ui-elements/commit/4211c4a

[244]: https://github.com/box/box-ui-elements/issues/2674

[245]: https://github.com/box/box-ui-elements/commit/8d683b3

[246]: https://github.com/box/box-ui-elements/issues/2663

[247]: https://github.com/box/box-ui-elements/commit/bea61c8

[248]: https://github.com/box/box-ui-elements/issues/2666

[249]: https://github.com/box/box-ui-elements/commit/6d7405e

[250]: https://github.com/box/box-ui-elements/issues/2642

[251]: https://github.com/box/box-ui-elements/commit/d006ab4

[252]: https://github.com/box/box-ui-elements/issues/2586

[253]: https://github.com/box/box-ui-elements/commit/48432a1

[254]: https://github.com/box/box-ui-elements/issues/2592

[255]: https://github.com/box/box-ui-elements/commit/3684b7e

[256]: https://github.com/box/box-ui-elements/issues/2560

[257]: https://github.com/box/box-ui-elements/commit/d6db29f

[258]: https://github.com/box/react-virtualized
