---
applied_at: '2024-10-21'
applies_to:
  - frontend
  - ui-elements
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-ui-elements/releases/tag/v22.0.0'
collapse: true
---

# Box UI Elements `v22.0.0` released

# [22.0.0][1] (2024-10-21)

### Bug Fixes

* resolve missing exports for esbuild ([#3719][2]) ([`495f19e`][3])
* **content-answers:** Bump content-answers ([#3713][4]) ([`21c2de1`][5])
* **content-uploader:** resolve ItemAction issues ([#3631][6]) ([`ba299b1`][7])
* **docgen-sidebar:** add collapsible component to hide nested tags ([#3626][8]) ([`3480efb`][9])
* **draft-js:** Upgraded to 0.11.7 ([#3580][10]) ([`179ff9f`][11])
* **hubs:** fix shared link text ([#3657][12]) ([`a938524`][13])
* **i18n:** update translations ([#3603][14]) ([`a467823`][15])
* **i18n:** update translations ([#3607][16]) ([`8ad18b8`][17])
* **i18n:** update translations ([#3612][18]) ([`4bfceaa`][19])
* **i18n:** update translations ([#3615][20]) ([`945fa23`][21])
* **i18n:** update translations ([#3619][22]) ([`bc011eb`][23])
* **i18n:** update translations ([#3620][24]) ([`62a9ef7`][25])
* **i18n:** update translations ([#3627][26]) ([`ae5cc3d`][27])
* **i18n:** update translations ([#3633][28]) ([`13894ca`][29])
* **i18n:** update translations ([#3636][30]) ([`0bee28b`][31])
* **i18n:** update translations ([#3639][32]) ([`83b403c`][33])
* **i18n:** update translations ([#3643][34]) ([`4cf5b3d`][35])
* **i18n:** update translations ([#3648][36]) ([`297fabf`][37])
* **i18n:** update translations ([#3653][38]) ([`7b0e0fb`][39])
* **i18n:** update translations ([#3659][40]) ([`41a17fe`][41])
* **i18n:** update translations ([#3667][42]) ([`1f77bce`][43])
* **i18n:** update translations ([#3673][44]) ([`7e5f7c1`][45])
* **i18n:** update translations ([#3674][46]) ([`ebe8348`][47])
* **i18n:** update translations ([#3679][48]) ([`4bf65f8`][49])
* **i18n:** update translations ([#3683][50]) ([`549188a`][51])
* **i18n:** update translations ([#3686][52]) ([`9927e53`][53])
* **i18n:** update translations ([#3689][54]) ([`47e7a6b`][55])
* **i18n:** update translations ([#3692][56]) ([`d2e59c8`][57])
* **i18n:** update translations ([#3694][58]) ([`1850977`][59])
* **i18n:** update translations ([#3697][60]) ([`665aedf`][61])
* **i18n:** update translations ([#3701][62]) ([`fe9f7cc`][63])
* **i18n:** update translations ([#3705][64]) ([`fa89f87`][65])
* **i18n:** update translations ([#3711][66]) ([`b6b61bf`][67])
* **metadata-instance-editor:** Fix support link ([#3671][68]) ([`b82687e`][69])
* **metadata-sidebar:** fix loading states ([#3684][70]) ([`5c54eb5`][71])
* **metadata-sidebar:** Fix metadata sidebar ai capabilities ([#3681][72]) ([`fd164ec`][73])
* **metadata-sidebar:** Fix storybook tests ([#3695][74]) ([`8326472`][75])
* **metadata-sidebar:** handle onCancel action for editing templates ([#3669][76]) ([`6ad083b`][77])
* **metadata-sidebar:** UnsavedChangesModal changes ([#3691][78]) ([`305d3af`][79])
* **notification:** unblock UI beneath Notification ([#3661][80]) ([`33b34d9`][81])
* **quick-search:** Quick Search buttons and footer navigation ([#3623][82]) ([`0427112`][83])
* **quick-search:** Quick Search Navigation ([#3622][84]) ([`b814223`][85])
* clean up eslint and configs ([#3584][86]) ([`c0ff8d7`][87]), closes [#3583][88]
* resolve changes from box/frontend ([#3590][89]) ([`1d91171`][90])
* **quick-search:** Quick filter navigation ([#3582][91]) ([`6880f67`][92])
* upgrade react-popper ([#3583][88]) ([`13396e4`][93])

### Features

* **taxonomy:** added view/create/updated taxonomy field support ([#3716][94]) ([`cccb0b0`][95])
* noop for BREAKING CHANGE blueprint peer dependency ([#3721][96]) ([`5a117ae`][97])
* **api:** add handling empty metadata suggestions ([#3608][98]) ([`ecd4c80`][99])
* **api:** Extend getMetadata in Metadata API ([#3611][100]) ([`765f592`][101])
* **blueprint:** Added blueprint ([#3585][102]) ([`0f2d876`][103])
* **boxai-sidebar:** BoxAISidebar header added ([#3698][104]) ([`130b6b6`][105])
* **boxai-sidebar:** Empty Sidebar for Box AI ([#3668][106]) ([`611377c`][107])
* **content-answers:** Upgrade Content Answers ([#3658][108]) ([`002d496`][109]), closes [#3626][8]
* **content-explorer-modal-container:** add optional info notice ([#3634][110]) ([`20d4c3f`][111])
* **content-sidebar:** add archived date to content preview sidebar ([#3625][112]) ([`10e68f3`][113])
* **content-sidebar:** Add data-target-id to menu items ([#3610][114]) ([`cf05167`][115])
* **content-sidebar:** Add placehoder metadatasidebar redesigned ([#3570][116]) ([`6a0d7ee`][117])
* **content-sidebar:** disable version modifications for archive file ([#3637][118]) ([`e735c4c`][119])
* **content-sidebar:** pass metadata.aiSuggestions flag into redesigned sidebar ([#3665][120]) ([`b672f70`][121])
* **metadata-sidebar:** Add handler for Autofill button ([#3700][122]) ([`95735e0`][123])
* **metadata-sidebar:** Add metadata instance list ([#3664][124]) ([`b4e4b01`][125]), closes [#3605][126]
* **metadata-sidebar:** disable delete button ([#3677][127]) ([`2941a97`][128])
* **metadata-sidebar:** Handle create metadata isntance ([#3663][129]) ([`321ba7e`][130])
* **metadata-sidebar:** handle delete metadata instance ([#3662][131]) ([`f6abd4e`][132])
* **metadata-sidebar:** handle update metadata instance ([#3672][133]) ([`ef79e44`][134])
* **metadata-sidebar:** Metadata sidebar redesign ([#3654][135]) ([`fe4fede`][136]), closes [#3606][137]
* **metadata-sidebar:** pass areAiSuggestionsAvailable based on file ext ([#3675][138]) ([`dc074cf`][139])
* **metadata-sidebar:** tab content styles change ([#3708][140]) ([`f7c06a4`][141])
* **taxonomy:** added metadata options endpoint ([#3678][142]) ([`47ba331`][143])
* **taxonomy:** added metadata taxonomy field support ([#3710][144]) ([`3a0c27e`][145])
* **uaa-logging:** Log UAA Parity data ([#3629][146]) ([`6cb5d8f`][147])
* **unified-share-modal:** add custom avatars click handler ([#3688][148]) ([`c034de4`][149])
* **update_app_activity_item:** Add permissions field ([#3680][150]) ([`c521c11`][151])
* support /2.0/ai/extract_structured endpoint ([#3596][152]) ([`dee4eee`][153])
* **unified-share-modal:** added targeting attribute ([#3592][154]) ([`e26f1f1`][155])
* support metadata suggestions API ([#3571][156]) ([`c985402`][157]), closes [#3565][158]

### Performance Improvements

* **content-answers:** lazy load content answers in preview ([#3720][159]) ([`ec115f7`][160])

### Reverts

* **content-explorer:** Revert rename dialog ([#3704][161]) ([`13b8c99`][162]), closes [#3666][163]

### BREAKING CHANGES

* blueprint-web and blueprint-web-assets peer dependencies

[1]: https://github.com/box/box-ui-elements/compare/v21.0.0...v22.0.0

[2]: https://github.com/box/box-ui-elements/issues/3719

[3]: https://github.com/box/box-ui-elements/commit/495f19e20c8e3d6b7ab9fe8b6f5c3f833d1c5c46

[4]: https://github.com/box/box-ui-elements/issues/3713

[5]: https://github.com/box/box-ui-elements/commit/21c2de1b3e64ff4766c36ed18a1e720ff79ae5b6

[6]: https://github.com/box/box-ui-elements/issues/3631

[7]: https://github.com/box/box-ui-elements/commit/ba299b1dcee18d3197e5f7df0f15823070a071cb

[8]: https://github.com/box/box-ui-elements/issues/3626

[9]: https://github.com/box/box-ui-elements/commit/3480efb5a03ee73f4d78a5b26f626f059aa31115

[10]: https://github.com/box/box-ui-elements/issues/3580

[11]: https://github.com/box/box-ui-elements/commit/179ff9f718845500ddc76a56e06129e06b386886

[12]: https://github.com/box/box-ui-elements/issues/3657

[13]: https://github.com/box/box-ui-elements/commit/a9385240dc53a9efe5277956a2d81ec1c253716a

[14]: https://github.com/box/box-ui-elements/issues/3603

[15]: https://github.com/box/box-ui-elements/commit/a4678232af14c2220ce8c7125a55bb6714781b7a

[16]: https://github.com/box/box-ui-elements/issues/3607

[17]: https://github.com/box/box-ui-elements/commit/8ad18b8b7887c07189dee590ebc0a931fa5010e8

[18]: https://github.com/box/box-ui-elements/issues/3612

[19]: https://github.com/box/box-ui-elements/commit/4bfceaaf71ed4271ba62d6878ef714617a920c8c

[20]: https://github.com/box/box-ui-elements/issues/3615

[21]: https://github.com/box/box-ui-elements/commit/945fa23a8ba08bebf3bb4415e2b1827377eecbbd

[22]: https://github.com/box/box-ui-elements/issues/3619

[23]: https://github.com/box/box-ui-elements/commit/bc011eb1369fc36762cfa3d7a206a538400d536d

[24]: https://github.com/box/box-ui-elements/issues/3620

[25]: https://github.com/box/box-ui-elements/commit/62a9ef7489e42d3cafa8edfabcddf57928ae514d

[26]: https://github.com/box/box-ui-elements/issues/3627

[27]: https://github.com/box/box-ui-elements/commit/ae5cc3d0b0f0b2afacb37048f994b39867d9006a

[28]: https://github.com/box/box-ui-elements/issues/3633

[29]: https://github.com/box/box-ui-elements/commit/13894caaf44775d80d54b4458a997160be359ed1

[30]: https://github.com/box/box-ui-elements/issues/3636

[31]: https://github.com/box/box-ui-elements/commit/0bee28b6208179a1f0d2ce2428a5200be199302f

[32]: https://github.com/box/box-ui-elements/issues/3639

[33]: https://github.com/box/box-ui-elements/commit/83b403cecc8dcdc210b31cf84fb59461f3325c8e

[34]: https://github.com/box/box-ui-elements/issues/3643

[35]: https://github.com/box/box-ui-elements/commit/4cf5b3d55042274e8d73c8a9f1998ceed791179a

[36]: https://github.com/box/box-ui-elements/issues/3648

[37]: https://github.com/box/box-ui-elements/commit/297fabfe2ab8207ccdcb6e97057a4fb2f3022284

[38]: https://github.com/box/box-ui-elements/issues/3653

[39]: https://github.com/box/box-ui-elements/commit/7b0e0fb44e3d205d28a10d8bc851ebaecaf5222f

[40]: https://github.com/box/box-ui-elements/issues/3659

[41]: https://github.com/box/box-ui-elements/commit/41a17fe815b9ab7da9403836276de3fca379e86f

[42]: https://github.com/box/box-ui-elements/issues/3667

[43]: https://github.com/box/box-ui-elements/commit/1f77bce4f470988d818ce7128954e1cd964d4f7f

[44]: https://github.com/box/box-ui-elements/issues/3673

[45]: https://github.com/box/box-ui-elements/commit/7e5f7c1af0a05c35097827af5a55d5edd3470872

[46]: https://github.com/box/box-ui-elements/issues/3674

[47]: https://github.com/box/box-ui-elements/commit/ebe8348b9cf0a79298ea102f27217b6cd10b631f

[48]: https://github.com/box/box-ui-elements/issues/3679

[49]: https://github.com/box/box-ui-elements/commit/4bf65f8b1c8ed6080a340bb28097d6f04d08ecc0

[50]: https://github.com/box/box-ui-elements/issues/3683

[51]: https://github.com/box/box-ui-elements/commit/549188a9f005b8dd0f63c0ed4906e8a64144c3a4

[52]: https://github.com/box/box-ui-elements/issues/3686

[53]: https://github.com/box/box-ui-elements/commit/9927e53f47e54380d0f2e44e857fbd6b0a6528fd

[54]: https://github.com/box/box-ui-elements/issues/3689

[55]: https://github.com/box/box-ui-elements/commit/47e7a6be3036280bf89220f65ed978b3ef0bc2c7

[56]: https://github.com/box/box-ui-elements/issues/3692

[57]: https://github.com/box/box-ui-elements/commit/d2e59c846c3d72ab9efbe59f1123c72745945aa7

[58]: https://github.com/box/box-ui-elements/issues/3694

[59]: https://github.com/box/box-ui-elements/commit/1850977829e4888139462a6f65794b1cffc52a08

[60]: https://github.com/box/box-ui-elements/issues/3697

[61]: https://github.com/box/box-ui-elements/commit/665aedff1834ffbc4bc1e903262b0d4e0bef2cc3

[62]: https://github.com/box/box-ui-elements/issues/3701

[63]: https://github.com/box/box-ui-elements/commit/fe9f7cca9b100afe1521df41c697ed6f0f621f66

[64]: https://github.com/box/box-ui-elements/issues/3705

[65]: https://github.com/box/box-ui-elements/commit/fa89f876d54680b95bdc2fd3eb0d07a3c729f03e

[66]: https://github.com/box/box-ui-elements/issues/3711

[67]: https://github.com/box/box-ui-elements/commit/b6b61bf47429541b1cbb1091fd94024c4ceeb6c8

[68]: https://github.com/box/box-ui-elements/issues/3671

[69]: https://github.com/box/box-ui-elements/commit/b82687e5cc0a55b6f82eb2c9aa1ea7b3482263b4

[70]: https://github.com/box/box-ui-elements/issues/3684

[71]: https://github.com/box/box-ui-elements/commit/5c54eb51287b1273ad84145952be132b84ef9e04

[72]: https://github.com/box/box-ui-elements/issues/3681

[73]: https://github.com/box/box-ui-elements/commit/fd164ec57c58ac912bdb4edbe4f9cdc30296b11a

[74]: https://github.com/box/box-ui-elements/issues/3695

[75]: https://github.com/box/box-ui-elements/commit/83264724fa9de3e0935cc6f5762362dadcca884f

[76]: https://github.com/box/box-ui-elements/issues/3669

[77]: https://github.com/box/box-ui-elements/commit/6ad083b4d14a721973df5ef3959913772c481922

[78]: https://github.com/box/box-ui-elements/issues/3691

[79]: https://github.com/box/box-ui-elements/commit/305d3af23a162db91e16ce13cc8c0bced865500d

[80]: https://github.com/box/box-ui-elements/issues/3661

[81]: https://github.com/box/box-ui-elements/commit/33b34d9c532501824ed45c8965f82df690bb6e5c

[82]: https://github.com/box/box-ui-elements/issues/3623

[83]: https://github.com/box/box-ui-elements/commit/04271125b0beedaae80f3ec48273ca5fdf266ac7

[84]: https://github.com/box/box-ui-elements/issues/3622

[85]: https://github.com/box/box-ui-elements/commit/b8142235903cd8ee5d36ee9121437b01552a5597

[86]: https://github.com/box/box-ui-elements/issues/3584

[87]: https://github.com/box/box-ui-elements/commit/c0ff8d7d7b24a919fc440a8f06f74b26fb0f5fa1

[88]: https://github.com/box/box-ui-elements/issues/3583

[89]: https://github.com/box/box-ui-elements/issues/3590

[90]: https://github.com/box/box-ui-elements/commit/1d9117162d658215fc9b62bbbfa0d351349901ff

[91]: https://github.com/box/box-ui-elements/issues/3582

[92]: https://github.com/box/box-ui-elements/commit/6880f67d6005f549ca7c2fbc5d9c395f25cf7128

[93]: https://github.com/box/box-ui-elements/commit/13396e4f9f06c30b542fa5846659539f00edc392

[94]: https://github.com/box/box-ui-elements/issues/3716

[95]: https://github.com/box/box-ui-elements/commit/cccb0b084a52838eb9f7e16c084507ef30ba30e1

[96]: https://github.com/box/box-ui-elements/issues/3721

[97]: https://github.com/box/box-ui-elements/commit/5a117ae1f4e887365b65d07dd0b8a3f00ebf45db

[98]: https://github.com/box/box-ui-elements/issues/3608

[99]: https://github.com/box/box-ui-elements/commit/ecd4c80873ae0d447fd5dbfdcf622775eeeb206e

[100]: https://github.com/box/box-ui-elements/issues/3611

[101]: https://github.com/box/box-ui-elements/commit/765f592647c41bb1e2bd48ea32dd7b7e1ba2f305

[102]: https://github.com/box/box-ui-elements/issues/3585

[103]: https://github.com/box/box-ui-elements/commit/0f2d87617838dc2af7c702c91dbc4321d7b31bf5

[104]: https://github.com/box/box-ui-elements/issues/3698

[105]: https://github.com/box/box-ui-elements/commit/130b6b69c45a0b8e4a22009e3e9f44fb285e45e1

[106]: https://github.com/box/box-ui-elements/issues/3668

[107]: https://github.com/box/box-ui-elements/commit/611377ce21b3ed7a804c82eb2c29189851861dc2

[108]: https://github.com/box/box-ui-elements/issues/3658

[109]: https://github.com/box/box-ui-elements/commit/002d4966fa2158c33371d9a218a41206e1462f6b

[110]: https://github.com/box/box-ui-elements/issues/3634

[111]: https://github.com/box/box-ui-elements/commit/20d4c3f3ca981820bf3684afe4ee68775b4b30bd

[112]: https://github.com/box/box-ui-elements/issues/3625

[113]: https://github.com/box/box-ui-elements/commit/10e68f301183244062b6613006a5aa0cbdd33526

[114]: https://github.com/box/box-ui-elements/issues/3610

[115]: https://github.com/box/box-ui-elements/commit/cf05167884084a199512a1d18d41cc9fde7a4fc7

[116]: https://github.com/box/box-ui-elements/issues/3570

[117]: https://github.com/box/box-ui-elements/commit/6a0d7ee0857d9c91719654e2ac387a6e7dc135b9

[118]: https://github.com/box/box-ui-elements/issues/3637

[119]: https://github.com/box/box-ui-elements/commit/e735c4c3f5b755f3a773d2e7f185cd9a961de3cd

[120]: https://github.com/box/box-ui-elements/issues/3665

[121]: https://github.com/box/box-ui-elements/commit/b672f7059697e922d2ae193ef6a98217695c843d

[122]: https://github.com/box/box-ui-elements/issues/3700

[123]: https://github.com/box/box-ui-elements/commit/95735e0291f233d173c17a19304119c83e51723d

[124]: https://github.com/box/box-ui-elements/issues/3664

[125]: https://github.com/box/box-ui-elements/commit/b4e4b01fefea753d21a4aa75dccde92fce05af21

[126]: https://github.com/box/box-ui-elements/issues/3605

[127]: https://github.com/box/box-ui-elements/issues/3677

[128]: https://github.com/box/box-ui-elements/commit/2941a9732b5081872bfcd0c2fe490ab14c6dc2ed

[129]: https://github.com/box/box-ui-elements/issues/3663

[130]: https://github.com/box/box-ui-elements/commit/321ba7e715d51b269ad7bc566b197d0cab52b699

[131]: https://github.com/box/box-ui-elements/issues/3662

[132]: https://github.com/box/box-ui-elements/commit/f6abd4e07d8d23b0a0fe5224b4ba2f6b4c44f4e7

[133]: https://github.com/box/box-ui-elements/issues/3672

[134]: https://github.com/box/box-ui-elements/commit/ef79e44d81eb875eec04233e48485f1c6326606d

[135]: https://github.com/box/box-ui-elements/issues/3654

[136]: https://github.com/box/box-ui-elements/commit/fe4fededd993c4025b1b6f38cc8a6387af1a9acc

[137]: https://github.com/box/box-ui-elements/issues/3606

[138]: https://github.com/box/box-ui-elements/issues/3675

[139]: https://github.com/box/box-ui-elements/commit/dc074cf3f189a9ce06b7854d7245242732c1a294

[140]: https://github.com/box/box-ui-elements/issues/3708

[141]: https://github.com/box/box-ui-elements/commit/f7c06a4c411b453df9a1617d50fdddf77b032db7

[142]: https://github.com/box/box-ui-elements/issues/3678

[143]: https://github.com/box/box-ui-elements/commit/47ba331ca562c152c49cccf2c090664177e1370d

[144]: https://github.com/box/box-ui-elements/issues/3710

[145]: https://github.com/box/box-ui-elements/commit/3a0c27ea1cfbb22c6fd9090f7bd237e62f8536b6

[146]: https://github.com/box/box-ui-elements/issues/3629

[147]: https://github.com/box/box-ui-elements/commit/6cb5d8f1d972b40ec06ce08f39cb25aa1452ad10

[148]: https://github.com/box/box-ui-elements/issues/3688

[149]: https://github.com/box/box-ui-elements/commit/c034de4daec6881c08b05caa1033db91382af6e0

[150]: https://github.com/box/box-ui-elements/issues/3680

[151]: https://github.com/box/box-ui-elements/commit/c521c113dafdc5787f7c4c163d3cbaa01a523c3b

[152]: https://github.com/box/box-ui-elements/issues/3596

[153]: https://github.com/box/box-ui-elements/commit/dee4eee4ff49d7e8e9bc69071ac23164ae180e4e

[154]: https://github.com/box/box-ui-elements/issues/3592

[155]: https://github.com/box/box-ui-elements/commit/e26f1f10731769ad7ed3cc94bdf6ab97117719d7

[156]: https://github.com/box/box-ui-elements/issues/3571

[157]: https://github.com/box/box-ui-elements/commit/c9854024dec37927cfabdef37c4f8fe82ffb8d34

[158]: https://github.com/box/box-ui-elements/issues/3565

[159]: https://github.com/box/box-ui-elements/issues/3720

[160]: https://github.com/box/box-ui-elements/commit/ec115f749fea1c545663888c8d2cfc0bd3cfa514

[161]: https://github.com/box/box-ui-elements/issues/3704

[162]: https://github.com/box/box-ui-elements/commit/13b8c990bc5fb8528e3a79864f8f9579608febd1

[163]: https://github.com/box/box-ui-elements/issues/3666
