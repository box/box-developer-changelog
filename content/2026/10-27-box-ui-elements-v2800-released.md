---
applied_at: '2026-10-27'
applies_to:
  - frontend
  - ui-elements
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-ui-elements/releases/tag/v28.0.0'
collapse: true
---

# Box UI Elements `v28.0.0` released

# [28.0.0][1] (2026-10-27)

### Bug Fixes

* **activity-feed-v2:** apply a comment range after the preview width settles ([#4879][2]) ([`430cf02`][3])
* **activity-feed-v2:** clear the timestamp toggle after posting a comment ([#4866][4]) ([`4c45f42`][5])
* **activity-feed-v2:** improve deeplink scroll/highlight and bump activity-feed to 3.0.0 ([#4765][6]) ([`5d273fe`][7])
* **activity-feed-v2:** Map mention contacts via SelectorItem.item ([#4783][8]) ([`c6ef2ce`][9])
* **activity-feed-v2:** show comments-disabled states and bump activity-feed to 2.4.0 ([#4756][10]) ([`84b90a7`][11])
* **activity-feed:** request enhanced_comment_timespan for timespan comments ([#4873][12]) ([`8bdfb29`][13])
* **Add:** fix auto scrolling when clicking the add button ([#4800][14]) ([`083c299`][15])
* **content-explorer:** flatten advanced enum filters for metadata-view 2 ([#4901][16]) ([`352c0d4`][17])
* **content-explorer:** Handle null item extension ([#4890][18]) ([`763b06e`][19])
* **content-insights:** Uppercase metric titles with CSS ([#4857][20]) ([`3bc3d44`][21])
* **content-preview:** keep compare open when clicking compared-pane annotation ([#4852][22]) ([`79a2827`][23])
* **content-preview:** Prevent stuck loading mask for custom previews ([#4766][24]) ([`1fdcc97`][25])
* **content-preview:** route compared-pane annotation scroll ([#4865][26]) ([`4a8c9d5`][27])
* **content-sharing:** grey link expiration from server flag ([#4886][28]) ([`595873a`][29])
* **content-sharing:** omit unchanged shared link expiration ([#4884][30]) ([`478047d`][31])
* **content-sidebar:** Bold details section headers ([#4861][32]) ([`8bd67e3`][33])
* **content-sidebar:** fix version history centering ([#4853][34]) ([`2dd680d`][35])
* **content-sidebar:** Space details sections with padding ([#4868][36]) ([`ed6b9ab`][37])
* **content-sidebar:** Use titleLarge for sidebar titles ([#4867][38]) ([`8fc1f75`][39])
* **content-uploader:** show locked file error in uploads manager ([#4831][40]) ([`d1b4144`][41])
* **deps:** Bump [@box/threaded-annotations][42] from 4.1.12 to 4.11.3 ([#4805][43]) ([`2b8c328`][44])
* **deps:** Bump immutable resolution to 3.8.4 ([#4818][45]) ([`4b8da84`][46])
* **deps:** Bump sanitize html 2.17.7 ([#4817][47]) ([`98b2628`][48])
* **fonts:** add nested style for strong and em ([#4799][49]) ([`a3950cd`][50])
* **i18n:** update translations ([#4828][51]) ([`f4144b4`][52])
* **i18n:** update translations ([#4835][53]) ([`302fbe1`][54])
* **i18n:** update translations ([#4850][55]) ([`2161058`][56])
* **i18n:** update translations ([#4856][57]) ([`708f703`][58])
* **i18n:** update translations ([#4881][59]) ([`c8a3fe1`][60])
* **item-details:** Color file property labels gray ([#4872][61]) ([`d6f0143`][62])
* **item-details:** Use bodyDefaultSemibold for property labels ([#4862][63]) ([`bee7aae`][64])
* **metadata-sidebar:** correct template browser identity and visibility ([#4836][65]) ([`7e8c016`][66])
* **metadata-sidebar:** request box.metadata and offer custom metadata ([#4905][67]) ([`a80a854`][68])
* **metadata-sidebar:** resolve template scope for AI autofill in namespaced mode ([#4916][69]) ([`f8e886c`][70])
* **metadata:** keep custom fields named like Object.prototype properties ([#4860][71]) ([`20d0f33`][72])
* **metadata:** keep custom fields when merging detailed and hydrated views ([#4855][73]) ([`f743f06`][74])
* remove input placeholder color ([#4838][75]) ([`a4ca178`][76])
* support mid-migration metadata templates ([#4653][77]) ([`e634a18`][78])
* **upload:** add exponential backoff for file upload ([#4893][79]) ([`3c1b75e`][80])

### Features

* **activity-feed-v2:** display audio comment time ranges in the composer and badge ([#4820][81]) ([`5a32c45`][82])
* **activity-feed-v2:** emit isSelected on comment markers for the player ([#4808][83]) ([`8455699`][84])
* **activity-feed-v2:** emit isSelected on comment markers without re-seeking ([#4819][85]) ([`f92424a`][86])
* **activity-feed-v2:** enable timestamped comments for audio ([#4796][87]) ([`a10a4e4`][88])
* **activity-feed-v2:** highlight a comment again when it is selected twice ([#4888][89]) ([`afe679f`][90])
* **activity-feed-v2:** open Activity when the viewer drag-creates a comment range ([#4864][91]) ([`9afd2dd`][92])
* **activity-feed-v2:** Persist and restore rich text as markdown ([#4797][93]) ([`f2e5f3c`][94])
* **activity-feed-v2:** support an optional end timestamp in comment markup ([#4814][95]) ([`d56f4f8`][96])
* **activity-feed-v2:** support selecting a time range for audio comments ([#4816][97]) ([`3a6ba6a`][98])
* **activity-feed-v2:** uncheck timestamp toggle when viewer dismisses range draft ([#4841][99]) ([`28e9e65`][100])
* **activity-feed:** open the version a timestamped comment was made on and seek to it ([#4918][101]) ([`5e5c07c`][102])
* add a new flag for fetching detailed extract metadata ([#4815][103]) ([`377d3f6`][104])
* add api specific flags for metadata extract ([#4821][105]) ([`8f4b7c7`][106])
* BREAKING CHANGE noop for blueprint 17 major ([#4870][107]) ([`e0b3e98`][108])
* BREAKING CHANGE Remove blueprint modernization ([#4871][109]) ([`65ec355`][110])
* **content-preview:** add comparedVersion for side-by-side comparison ([#4813][111]) ([`b35b350`][112])
* **content-preview:** forward comparison flags so Preview can own the banners ([#4882][113]) ([`59d10cc`][114])
* **content-preview:** navigate on media play-next ([#4837][115]) ([`2a4ff7c`][116])
* **content-preview:** render the compared version in the custom preview ([#4889][117]) ([`b0e1480`][118])
* **content-preview:** request waveform representation when v2 is enabled ([#4829][119]) ([`5a11860`][120])
* **content-sharing:** add otp integration ([#4917][121]) ([`3585ffa`][122])
* **content-sidebar:** add isForcedToUseTemplates for sign ([#4906][123]) ([`215b0e7`][124])
* **content-sidebar:** Use Blueprint Text for Insights and Details titles ([#4834][125]) ([`bc1bd8d`][126])
* **content-sidebar:** wire metadata user field into redesign sidebar ([#4794][127]) ([`cdb7fd0`][128])
* **deps:** BREAKING CHANGE bump blueprint package ([#4863][129]) ([`fd3afe3`][130])
* **deps:** BREAKING CHANGE bump blueprint-web to 18.0.0 ([#4892][131]) ([`bfe3402`][132])
* **deps:** Bump brace-expansion to 1.1.21 and 2.1.7 ([#4878][133]) ([`0c30344`][134])
* **deps:** bump list of deps ([#4902][135]) ([`11c4bb9`][136])
* **deps:** Resolve webpack-dev-middleware to 7.4.6 ([#4875][137]) ([`d9a5959`][138])
* **deps:** upgrade sanitize-html ([#4921][139]) ([`2e18855`][140])
* **feed:** send enable_rich_text on feed reads and writes ([#4823][141]) ([`e7a7db2`][142])
* **metadata-sidebar:** Search namespaced templates and gate create/edit on API permissions ([#4885][143]) ([`59ad8ef`][144])
* **preview:** support loading the Preview library from npm ([#4695][145]) ([`c2a90cd`][146])
* **preview:** Update the comparison banner on a live preview ([#4907][147]) ([`a0ac01f`][148])
* remove deprecated SASS ([#4859][149]) ([`39b1e06`][150])

### BREAKING CHANGES

* The `enableModernizedComponents` prop is removed from
    all elements.

* fix: Rename Blueprint Modernization VRTs

* Moving forward all UI will be modernized after this breaking change
    blueprint version bump.

Co-authored-by: Cursor [cursoragent@cursor.com][151]

[1]: https://github.com/box/box-ui-elements/compare/v27.0.0...v28.0.0

[2]: https://github.com/box/box-ui-elements/issues/4879

[3]: https://github.com/box/box-ui-elements/commit/430cf020941c3ef4c0eeb53c3436e9670e5c927f

[4]: https://github.com/box/box-ui-elements/issues/4866

[5]: https://github.com/box/box-ui-elements/commit/4c45f423509d6fac3d9df4686cc143d9e1b188f9

[6]: https://github.com/box/box-ui-elements/issues/4765

[7]: https://github.com/box/box-ui-elements/commit/5d273fe7c31cdfebf9179cfccc675680abf0626a

[8]: https://github.com/box/box-ui-elements/issues/4783

[9]: https://github.com/box/box-ui-elements/commit/c6ef2cebe073ec92122661b41303e36ae42eec87

[10]: https://github.com/box/box-ui-elements/issues/4756

[11]: https://github.com/box/box-ui-elements/commit/84b90a72a702b47465fbc6847b97087179357861

[12]: https://github.com/box/box-ui-elements/issues/4873

[13]: https://github.com/box/box-ui-elements/commit/8bdfb29ba56d19afda6886edf36b3914ae3457c3

[14]: https://github.com/box/box-ui-elements/issues/4800

[15]: https://github.com/box/box-ui-elements/commit/083c2992e453a92748ae301ab7e71905b5bfc038

[16]: https://github.com/box/box-ui-elements/issues/4901

[17]: https://github.com/box/box-ui-elements/commit/352c0d40024ebc467434fd55ea070d305347d43e

[18]: https://github.com/box/box-ui-elements/issues/4890

[19]: https://github.com/box/box-ui-elements/commit/763b06e595038f3faa6904e35077c506bcb9798c

[20]: https://github.com/box/box-ui-elements/issues/4857

[21]: https://github.com/box/box-ui-elements/commit/3bc3d447905c40c8cb3e4b50884f2201575a3dbf

[22]: https://github.com/box/box-ui-elements/issues/4852

[23]: https://github.com/box/box-ui-elements/commit/79a282798bf622509d2ffebb1040d5bcecf79eff

[24]: https://github.com/box/box-ui-elements/issues/4766

[25]: https://github.com/box/box-ui-elements/commit/1fdcc97ac150480cb14325f18f7d8b765a033edf

[26]: https://github.com/box/box-ui-elements/issues/4865

[27]: https://github.com/box/box-ui-elements/commit/4a8c9d56e3d0cd3ac990b4da847ab579bdc37a92

[28]: https://github.com/box/box-ui-elements/issues/4886

[29]: https://github.com/box/box-ui-elements/commit/595873aada01d86a9ed3cd305587e7e3db25e820

[30]: https://github.com/box/box-ui-elements/issues/4884

[31]: https://github.com/box/box-ui-elements/commit/478047d27c590778177eaa0ebfdbcd58387d31c6

[32]: https://github.com/box/box-ui-elements/issues/4861

[33]: https://github.com/box/box-ui-elements/commit/8bd67e3e11b71d01b0f6d1e0708aecf01c3ed945

[34]: https://github.com/box/box-ui-elements/issues/4853

[35]: https://github.com/box/box-ui-elements/commit/2dd680d225f0b4b762c00f84cc171eb6b6fd2a2f

[36]: https://github.com/box/box-ui-elements/issues/4868

[37]: https://github.com/box/box-ui-elements/commit/ed6b9ab50b1bd1631e2d1b09d41a545a60ea80d2

[38]: https://github.com/box/box-ui-elements/issues/4867

[39]: https://github.com/box/box-ui-elements/commit/8fc1f75ce513655e22a524e18425e1b4303a38fd

[40]: https://github.com/box/box-ui-elements/issues/4831

[41]: https://github.com/box/box-ui-elements/commit/d1b414436535afb60bdcd855fc671d2bb2da9752

[42]: https://github.com/box/threaded-annotations

[43]: https://github.com/box/box-ui-elements/issues/4805

[44]: https://github.com/box/box-ui-elements/commit/2b8c328cdbc09ef37154687678c671734478ca3d

[45]: https://github.com/box/box-ui-elements/issues/4818

[46]: https://github.com/box/box-ui-elements/commit/4b8da849905d6d1a28087d93d2ec9643123c8961

[47]: https://github.com/box/box-ui-elements/issues/4817

[48]: https://github.com/box/box-ui-elements/commit/98b262809851aff971b95171343a538b99b37fcd

[49]: https://github.com/box/box-ui-elements/issues/4799

[50]: https://github.com/box/box-ui-elements/commit/a3950cdf89b58cb3f1c3bed2ee4e1b4cba2dbd4b

[51]: https://github.com/box/box-ui-elements/issues/4828

[52]: https://github.com/box/box-ui-elements/commit/f4144b448cb19f693bc46b8f449332c41b4c9552

[53]: https://github.com/box/box-ui-elements/issues/4835

[54]: https://github.com/box/box-ui-elements/commit/302fbe1e9414813e053ab9227abdf15e22328a22

[55]: https://github.com/box/box-ui-elements/issues/4850

[56]: https://github.com/box/box-ui-elements/commit/2161058473ab99d548f16a69eeffbe7638ba372f

[57]: https://github.com/box/box-ui-elements/issues/4856

[58]: https://github.com/box/box-ui-elements/commit/708f703b7a2d5eb8f42d9281a7d530aa62e47517

[59]: https://github.com/box/box-ui-elements/issues/4881

[60]: https://github.com/box/box-ui-elements/commit/c8a3fe124d5fd7dbb6a5c8a2737c4a8f68f5e30e

[61]: https://github.com/box/box-ui-elements/issues/4872

[62]: https://github.com/box/box-ui-elements/commit/d6f014370971191f2f4a1ce39166c8e488d90cc2

[63]: https://github.com/box/box-ui-elements/issues/4862

[64]: https://github.com/box/box-ui-elements/commit/bee7aaea89f7ac3abd12a6c4d39be2c1a8082a58

[65]: https://github.com/box/box-ui-elements/issues/4836

[66]: https://github.com/box/box-ui-elements/commit/7e8c016ae560b290a6be274ea4ea2d207c3cb74d

[67]: https://github.com/box/box-ui-elements/issues/4905

[68]: https://github.com/box/box-ui-elements/commit/a80a8549cb16bbb5f3520670c14f3c94413072b6

[69]: https://github.com/box/box-ui-elements/issues/4916

[70]: https://github.com/box/box-ui-elements/commit/f8e886cf9583e5a5cf96bf948665e95b7be109a4

[71]: https://github.com/box/box-ui-elements/issues/4860

[72]: https://github.com/box/box-ui-elements/commit/20d0f33a53bbe4f08681bfe090535354653d9d41

[73]: https://github.com/box/box-ui-elements/issues/4855

[74]: https://github.com/box/box-ui-elements/commit/f743f06f8e1c87c0795eac95873f282c23c273fc

[75]: https://github.com/box/box-ui-elements/issues/4838

[76]: https://github.com/box/box-ui-elements/commit/a4ca178c4916904f5ec4daafb4d0fb68f4e17e95

[77]: https://github.com/box/box-ui-elements/issues/4653

[78]: https://github.com/box/box-ui-elements/commit/e634a18ab57b2376f4485c727648e505578e8888

[79]: https://github.com/box/box-ui-elements/issues/4893

[80]: https://github.com/box/box-ui-elements/commit/3c1b75e4af8cdff42552a8c9de91be0685f26973

[81]: https://github.com/box/box-ui-elements/issues/4820

[82]: https://github.com/box/box-ui-elements/commit/5a32c450977bd187d0bd25dd5406b7da81e99936

[83]: https://github.com/box/box-ui-elements/issues/4808

[84]: https://github.com/box/box-ui-elements/commit/8455699dec57cf31c259b2dcaa79fbe7404d7260

[85]: https://github.com/box/box-ui-elements/issues/4819

[86]: https://github.com/box/box-ui-elements/commit/f92424a9ff3b7076a721213a57d5713fd266a880

[87]: https://github.com/box/box-ui-elements/issues/4796

[88]: https://github.com/box/box-ui-elements/commit/a10a4e4babd52e69a2f8f102600e79d83a9393df

[89]: https://github.com/box/box-ui-elements/issues/4888

[90]: https://github.com/box/box-ui-elements/commit/afe679fc8e8cafb4d4cb00412b9320121442ed6b

[91]: https://github.com/box/box-ui-elements/issues/4864

[92]: https://github.com/box/box-ui-elements/commit/9afd2dd547534d531f4282542da513425a63756e

[93]: https://github.com/box/box-ui-elements/issues/4797

[94]: https://github.com/box/box-ui-elements/commit/f2e5f3ca02daa4b989b470967351021505121a71

[95]: https://github.com/box/box-ui-elements/issues/4814

[96]: https://github.com/box/box-ui-elements/commit/d56f4f83588e0bff41fc86fa21da5e57eba5c343

[97]: https://github.com/box/box-ui-elements/issues/4816

[98]: https://github.com/box/box-ui-elements/commit/3a6ba6a3fb3deb751b545d2fb92af489f42eefae

[99]: https://github.com/box/box-ui-elements/issues/4841

[100]: https://github.com/box/box-ui-elements/commit/28e9e650fc2de0935717b46a8c2afc08374d56f8

[101]: https://github.com/box/box-ui-elements/issues/4918

[102]: https://github.com/box/box-ui-elements/commit/5e5c07c783305bcb9014d1004d5d1885ba618e6a

[103]: https://github.com/box/box-ui-elements/issues/4815

[104]: https://github.com/box/box-ui-elements/commit/377d3f62f9d9c97b6f16f6a3b013c21e87f41511

[105]: https://github.com/box/box-ui-elements/issues/4821

[106]: https://github.com/box/box-ui-elements/commit/8f4b7c7a2540b573eb80ebc970debae01e6a42d8

[107]: https://github.com/box/box-ui-elements/issues/4870

[108]: https://github.com/box/box-ui-elements/commit/e0b3e9835022720d68069fb90496e2615d1007b8

[109]: https://github.com/box/box-ui-elements/issues/4871

[110]: https://github.com/box/box-ui-elements/commit/65ec355a04ae8a06c50d299dd6633d4968674f77

[111]: https://github.com/box/box-ui-elements/issues/4813

[112]: https://github.com/box/box-ui-elements/commit/b35b35082e7e04f094fc50e65ce00fecb0709fd6

[113]: https://github.com/box/box-ui-elements/issues/4882

[114]: https://github.com/box/box-ui-elements/commit/59d10cc3a27a16a8ae68ee88f3305ca0298438f0

[115]: https://github.com/box/box-ui-elements/issues/4837

[116]: https://github.com/box/box-ui-elements/commit/2a4ff7c2ab461272c5bbea2de43452d4700fb87b

[117]: https://github.com/box/box-ui-elements/issues/4889

[118]: https://github.com/box/box-ui-elements/commit/b0e1480d4470b57d29df7d2cc51c793e4fc18428

[119]: https://github.com/box/box-ui-elements/issues/4829

[120]: https://github.com/box/box-ui-elements/commit/5a118601aab05b08eeec2e6af08926fe762e4498

[121]: https://github.com/box/box-ui-elements/issues/4917

[122]: https://github.com/box/box-ui-elements/commit/3585ffaf397b7155982da8579e20ee632c46d463

[123]: https://github.com/box/box-ui-elements/issues/4906

[124]: https://github.com/box/box-ui-elements/commit/215b0e74f451962abbcf217a907adca41497015a

[125]: https://github.com/box/box-ui-elements/issues/4834

[126]: https://github.com/box/box-ui-elements/commit/bc1bd8dfc51b5c7fe14b9d8b1854aa4fcc84764c

[127]: https://github.com/box/box-ui-elements/issues/4794

[128]: https://github.com/box/box-ui-elements/commit/cdb7fd073daad4994d3796d04df8d6dc06829ec4

[129]: https://github.com/box/box-ui-elements/issues/4863

[130]: https://github.com/box/box-ui-elements/commit/fd3afe33c3f1e3c8155b49af580042bbf65077e2

[131]: https://github.com/box/box-ui-elements/issues/4892

[132]: https://github.com/box/box-ui-elements/commit/bfe3402d5a13e958b167a04cf9f30cb0fe84e1c0

[133]: https://github.com/box/box-ui-elements/issues/4878

[134]: https://github.com/box/box-ui-elements/commit/0c30344b449a3de7dff9f91191ec68867032ffb2

[135]: https://github.com/box/box-ui-elements/issues/4902

[136]: https://github.com/box/box-ui-elements/commit/11c4bb9831bda4f9848a81afa4cd6a40e12e2c0d

[137]: https://github.com/box/box-ui-elements/issues/4875

[138]: https://github.com/box/box-ui-elements/commit/d9a5959e7a707a5ca5957d43b6f0832fa4e3de90

[139]: https://github.com/box/box-ui-elements/issues/4921

[140]: https://github.com/box/box-ui-elements/commit/2e188550eff5865d803820e31ea0627205aaafe0

[141]: https://github.com/box/box-ui-elements/issues/4823

[142]: https://github.com/box/box-ui-elements/commit/e7a7db21d854ba52a1fbda489165d970e6a169c0

[143]: https://github.com/box/box-ui-elements/issues/4885

[144]: https://github.com/box/box-ui-elements/commit/59ad8ef3b1c4aa9e7c9c7e0fcb1f391cb17ef0cd

[145]: https://github.com/box/box-ui-elements/issues/4695

[146]: https://github.com/box/box-ui-elements/commit/c2a90cdc7c4e65e9999d233e4787dd5452e8a6b1

[147]: https://github.com/box/box-ui-elements/issues/4907

[148]: https://github.com/box/box-ui-elements/commit/a0ac01ff2f726baa7bec1f4c7301a627f65d8d0d

[149]: https://github.com/box/box-ui-elements/issues/4859

[150]: https://github.com/box/box-ui-elements/commit/39b1e068bc3a2c561006f949d82e5bd07d147b12

[151]: mailto:cursoragent@cursor.com
