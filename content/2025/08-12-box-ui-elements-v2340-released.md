---
applied_at: '2025-08-12'
applies_to:
  - frontend
  - ui-elements
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-ui-elements/releases/tag/v23.4.0'
collapse: true
---

# Box UI Elements `v23.4.0` released

# [23.4.0][1] (2025-08-12)

### Bug Fixes

* **`ai-sidebar`:** Add callback for selected agent ([#4115][2]) ([`8bdbf3e`][3])
* **`blueprint`:** Bump blueprint ([#4205][4]) ([`5e7f4b2`][5])
* **`breadcrumb`:** Add missing key property ([#4170][6]) ([`c10b059`][7])
* **`content-preview`:** prevent item icon shrinking on small screens ([#4111][8]) ([`e5004f7`][9])
* **`gh-pages`:** deploy storybook from docs folder ([#4100][10]) ([`dd34522`][11])
* **`header-flyout`:** remove animation on < medium screen size ([#4163][12]) ([`cf3123e`][13])
* **`i18n`:** update translations ([#4105][14]) ([`df61d95`][15])
* **`i18n`:** update translations ([#4108][16]) ([`e702f97`][17])
* **`i18n`:** update translations ([#4113][18]) ([`196beee`][19])
* **`i18n`:** update translations ([#4119][20]) ([`113915b`][21])
* **`i18n`:** update translations ([#4121][22]) ([`02cb22e`][23])
* **`i18n`:** update translations ([#4130][24]) ([`ff8f322`][25])
* **`i18n`:** update translations ([#4139][26]) ([`47b7690`][27])
* **`i18n`:** update translations ([#4185][28]) ([`fef4134`][29])
* **`i18n`:** update translations ([#4196][30]) ([`dd19958`][31])
* **`i18n`:** update translations ([#4203][32]) ([`bd31196`][33])
* **`i18n`:** update translations ([#4208][34]) ([`95b3cc6`][35])
* **`i18n`:** update translations ([#4211][36]) ([`bee412f`][37])
* **`i18n`:** update translations ([#4216][38]) ([`da932f1`][39])
* **`i18n`:** update translations ([#4219][40]) ([`d8a8fcb`][41])
* **`metadata-editor`:** package bump for bug fixes ([#4171][42]) ([`51dd7ca`][43])
* **`metadata-instance-fields`:** add minimal taxonomy support in `metada-instance-field`s ([#4133][44]) ([`0dff276`][45])
* resolve CVE-2025-7783 `form-data` vulnerability ([#4213][46]) ([`96252db`][47])
* resolve incorrect type import ([#4132][48]) ([`8b5eec6`][49])
* Throttle create folder to avoid rapid clicks ([#4193][50]) ([`67ec941`][51])
* **`uploads`:** handle rate limit errors with retries ([#4134][52]) ([`eb3e3da`][53])

### Features

* **`boxai-sidebar`:** Add logic to render remote sidebar from prop  ([#4106][54]) ([`7f8802a`][55])
* **`cascadepolicy`:** disable inputs if cascade policy exists ([#4175][56]) ([`b6d778c`][57])
* **`header-flyout`:** add opening animation ([#4159][58]) ([`3b417ba`][59])
* **`header-flyout`:** optionally allow header actions ([#4164][60]) ([`8f3ad6e`][61])
* **`mergify`:** update rule to require conversation resolution ([#4142][62]) ([`ef3291e`][63])
* `metadata-edito`r and `blueprint-web-assets` package bump ([#4137][64]) ([`070ff74`][65])
* **`metadata-editor`:** expose advanced metadata extract agent props ([#4128][66]) ([`f59b0aa`][67])
* **`metadata-editor`:** expose custom agent in `extractStructured` payload ([#4135][68]) ([`076e719`][69]), closes [#4102][70]
* **`metadata-editor`:** Metadata API adjustments ([#4192][71]) ([`6112967`][72])
* **`metadata-editor`:** package bump for new icons ([#4195][73]) ([`1506020`][74])
* **`metadata-instance-editor`:** add enhanced ai extract support ([#4197][75]) ([`540026a`][76])
* **`metadata-instance-editor`:** allow hydration of enhanced ai extract ([#4217][77]) ([`5a93a16`][78])
* **`metadata-view`:** Add `MetadataView` V2 ([#4191][79]) ([`c0ab1e7`][80])
* **`metadata-view`:** Add Subheader for Metadata View v2 ([#4202][81]) ([`ab12626`][82])
* **`metadata-view`:** Added Metadata V2 button ([#4174][83]) ([`d8ec9c7`][84])
* **`metadata-view`:** custom actions ([#4215][85]) ([`88a5187`][86])
* **`metadataeditor`:** enable ai folder extraction through API ([#4102][70]) ([`6ebec78`][87])
* **`metadataeditor`:** remove ai pricing notice ([#4107][88]) ([`4bd24bc`][89])
* **`notification-redesign`:** Add logic for use of BP icons ([#4103][90]) ([`7907136`][91])
* **`router`:** added router-less logic to `VersionsSidebarContainer` ([#4209][92]) ([`0f46866`][93])
* **`router`:** Merging `NavButton` functionality into `SidebarNavButton` ([#4150][94]) ([`814035d`][95])
* **`router`:** optional router in `ActivitySidebar` ([#4199][96]) ([`435c75a`][97])
* **`router`:** optional router in `AddTaskButton` ([#4176][98]) ([`90537b4`][99])
* **`router`:** optional router in `NavRouter` and `withNavRouter` ([#4161][100]) ([`7f9cad4`][101])
* **`router`:** optional router in `SidebarNav`, `SidebarNavTablist` ([#4177][102]) ([`d14e06e`][103])
* **`router`:** optional router in `SidebarNavButton` ([#4156][104]) ([`dc8af3b`][105])
* **`router`:** optional router in `SidebarNavigation` ([#4194][106]) ([`e25e0e1`][107])
* **`router`:** optional router in `SidebarToggle` ([#4160][108]) ([`12c9a3a`][109])
* **`router`:** optional router in `StaticVersionSidebar` and `VersionsSid…` ([#4152][110]) ([`a456f3d`][111])
* **`router`:** optional router in `VersionsList` ([#4144][112]) ([`15c5d8d`][113])
* **`router`:** optional router in `withAnnotatorContext` and `withAnnotations` ([#4136][114]) ([`d08545e`][115])
* **`router`:** optional router in `withRouterAndRef` hoc ([#4162][116]) ([`32b08b9`][117])
* **`router`:** optional router in `withSidebarAnnotations` ([#4206][118]) ([`782877d`][119])
* **`router`:** Removed router functionality from `BackButton` component ([#4141][120]) ([`f01364c`][121])
* upgrade blueprint packages ([#4123][122]) ([`c166d7d`][123])
* upgrade react-virtualized for react 19 support ([#4157][124]) ([`269f585`][125])
* **`uploads`:** add option to error on name conflicts ([#4117][126]) ([`463839e`][127])

[1]: https://github.com/box/box-ui-elements/compare/v23.3.0...v23.4.0

[2]: https://github.com/box/box-ui-elements/issues/4115

[3]: https://github.com/box/box-ui-elements/commit/8bdbf3eee149e3a6dbc3431792509f3005371561

[4]: https://github.com/box/box-ui-elements/issues/4205

[5]: https://github.com/box/box-ui-elements/commit/5e7f4b21f47d6be7416e06a1554bc58c0b150395

[6]: https://github.com/box/box-ui-elements/issues/4170

[7]: https://github.com/box/box-ui-elements/commit/c10b05951c6efa185b0a04517d4cf91349f8a545

[8]: https://github.com/box/box-ui-elements/issues/4111

[9]: https://github.com/box/box-ui-elements/commit/e5004f785d38fe6681dcd70b11842e413fef55bb

[10]: https://github.com/box/box-ui-elements/issues/4100

[11]: https://github.com/box/box-ui-elements/commit/dd345227b8cb864cb42eabdbefd4208cfdd690c2

[12]: https://github.com/box/box-ui-elements/issues/4163

[13]: https://github.com/box/box-ui-elements/commit/cf3123e802fdd64d794087d7dd7551a3b5b28c32

[14]: https://github.com/box/box-ui-elements/issues/4105

[15]: https://github.com/box/box-ui-elements/commit/df61d95591f74c44351e083fd139aed0bcf5e92a

[16]: https://github.com/box/box-ui-elements/issues/4108

[17]: https://github.com/box/box-ui-elements/commit/e702f9773ae876c9355ebb9a02221e7f935f729e

[18]: https://github.com/box/box-ui-elements/issues/4113

[19]: https://github.com/box/box-ui-elements/commit/196beee85ebdcea2cfbc92ef70c1332d9b8ea25c

[20]: https://github.com/box/box-ui-elements/issues/4119

[21]: https://github.com/box/box-ui-elements/commit/113915b34d9f4895bae0b3085544bcd34dd7794c

[22]: https://github.com/box/box-ui-elements/issues/4121

[23]: https://github.com/box/box-ui-elements/commit/02cb22e1727821da51e366bdd8e70ab56e6c8a45

[24]: https://github.com/box/box-ui-elements/issues/4130

[25]: https://github.com/box/box-ui-elements/commit/ff8f3223c72e7f6aaea5d571fd5cf3bcd71b5857

[26]: https://github.com/box/box-ui-elements/issues/4139

[27]: https://github.com/box/box-ui-elements/commit/47b76902799c69d1d5cd54965fb37d5781451423

[28]: https://github.com/box/box-ui-elements/issues/4185

[29]: https://github.com/box/box-ui-elements/commit/fef4134a26b59ee7bbb3e9da13ae488a98e6fa52

[30]: https://github.com/box/box-ui-elements/issues/4196

[31]: https://github.com/box/box-ui-elements/commit/dd19958289d113f4272559edbd1307e4d81e3137

[32]: https://github.com/box/box-ui-elements/issues/4203

[33]: https://github.com/box/box-ui-elements/commit/bd31196e11bcae1b2efa732255697751c25644a4

[34]: https://github.com/box/box-ui-elements/issues/4208

[35]: https://github.com/box/box-ui-elements/commit/95b3cc6b48ea7850e348936d040e4fda4f64e4df

[36]: https://github.com/box/box-ui-elements/issues/4211

[37]: https://github.com/box/box-ui-elements/commit/bee412f1bad7e647b814d7601ddd04fe2d2421d1

[38]: https://github.com/box/box-ui-elements/issues/4216

[39]: https://github.com/box/box-ui-elements/commit/da932f18801e936cffe7951a95639af2e52e05d8

[40]: https://github.com/box/box-ui-elements/issues/4219

[41]: https://github.com/box/box-ui-elements/commit/d8a8fcbc6ad3cbf11fec25949374bb73dce01d56

[42]: https://github.com/box/box-ui-elements/issues/4171

[43]: https://github.com/box/box-ui-elements/commit/51dd7caf8b273e0c0adba948f58e4b69be3a708e

[44]: https://github.com/box/box-ui-elements/issues/4133

[45]: https://github.com/box/box-ui-elements/commit/0dff276da6b497220f762fd917c421db4d5cf343

[46]: https://github.com/box/box-ui-elements/issues/4213

[47]: https://github.com/box/box-ui-elements/commit/96252db2ca2cad6b9b07787621e027e0a8ac7c84

[48]: https://github.com/box/box-ui-elements/issues/4132

[49]: https://github.com/box/box-ui-elements/commit/8b5eec6b4eda2a8291a8fda142b33ba6ba4498c0

[50]: https://github.com/box/box-ui-elements/issues/4193

[51]: https://github.com/box/box-ui-elements/commit/67ec94170a855e6ec62064f51e0b2e5d6d5aa729

[52]: https://github.com/box/box-ui-elements/issues/4134

[53]: https://github.com/box/box-ui-elements/commit/eb3e3da1c5b145f07994c5bb1eec38567de78187

[54]: https://github.com/box/box-ui-elements/issues/4106

[55]: https://github.com/box/box-ui-elements/commit/7f8802a4997322503e5f31bb86aaeb252b99ef70

[56]: https://github.com/box/box-ui-elements/issues/4175

[57]: https://github.com/box/box-ui-elements/commit/b6d778c6d3b0778a3e2f786b4b53d6d7ce045076

[58]: https://github.com/box/box-ui-elements/issues/4159

[59]: https://github.com/box/box-ui-elements/commit/3b417ba0a71d10026ba1c1857a974487eaf27f86

[60]: https://github.com/box/box-ui-elements/issues/4164

[61]: https://github.com/box/box-ui-elements/commit/8f3ad6e9f39d5fd8a5dcc54691bca6360af74dc6

[62]: https://github.com/box/box-ui-elements/issues/4142

[63]: https://github.com/box/box-ui-elements/commit/ef3291ed0f65122bfdaf9dd0fb51cfb6fc8acd64

[64]: https://github.com/box/box-ui-elements/issues/4137

[65]: https://github.com/box/box-ui-elements/commit/070ff749e085283ad97487a8a7daf6b44807fa94

[66]: https://github.com/box/box-ui-elements/issues/4128

[67]: https://github.com/box/box-ui-elements/commit/f59b0aa998fea1d54e2bc14a841dbfd3adc8be65

[68]: https://github.com/box/box-ui-elements/issues/4135

[69]: https://github.com/box/box-ui-elements/commit/076e719857d17bd52de52f904bf5ee2763bc0ef7

[70]: https://github.com/box/box-ui-elements/issues/4102

[71]: https://github.com/box/box-ui-elements/issues/4192

[72]: https://github.com/box/box-ui-elements/commit/6112967007196e2c91ca54ed7a7ce3afc5ab994b

[73]: https://github.com/box/box-ui-elements/issues/4195

[74]: https://github.com/box/box-ui-elements/commit/150602092e957693b7fbd227e92adac8110ac327

[75]: https://github.com/box/box-ui-elements/issues/4197

[76]: https://github.com/box/box-ui-elements/commit/540026a28bb805dd06d4b3f22c868ed0edd3f56e

[77]: https://github.com/box/box-ui-elements/issues/4217

[78]: https://github.com/box/box-ui-elements/commit/5a93a16c29187618429b8f0e4a53b8140a11b5f1

[79]: https://github.com/box/box-ui-elements/issues/4191

[80]: https://github.com/box/box-ui-elements/commit/c0ab1e7670e5f7c7ae8ff7572709ac19c9788a46

[81]: https://github.com/box/box-ui-elements/issues/4202

[82]: https://github.com/box/box-ui-elements/commit/ab1262690196a3ebb220250b1ad0243cd18932ce

[83]: https://github.com/box/box-ui-elements/issues/4174

[84]: https://github.com/box/box-ui-elements/commit/d8ec9c75d6c7d2fa502d7d44aad2e7cd0ad1721e

[85]: https://github.com/box/box-ui-elements/issues/4215

[86]: https://github.com/box/box-ui-elements/commit/88a518723c44bcf6a6d0762c1ff8e16ebcdb5fd6

[87]: https://github.com/box/box-ui-elements/commit/6ebec78fff6ece2f1ea3c4bc20ef7409e33f27fd

[88]: https://github.com/box/box-ui-elements/issues/4107

[89]: https://github.com/box/box-ui-elements/commit/4bd24bcf59489f7aaac381d9c66b7e1b9d2a64df

[90]: https://github.com/box/box-ui-elements/issues/4103

[91]: https://github.com/box/box-ui-elements/commit/79071362aea99c02993ed89cd9bee34bbe196b25

[92]: https://github.com/box/box-ui-elements/issues/4209

[93]: https://github.com/box/box-ui-elements/commit/0f46866a9490bd8c9872f9e76147ed72d9d7a287

[94]: https://github.com/box/box-ui-elements/issues/4150

[95]: https://github.com/box/box-ui-elements/commit/814035d73280b7d1e0e9a068876ca3c0cf471b94

[96]: https://github.com/box/box-ui-elements/issues/4199

[97]: https://github.com/box/box-ui-elements/commit/435c75a9bce168c8206597da804b7ce55c97467d

[98]: https://github.com/box/box-ui-elements/issues/4176

[99]: https://github.com/box/box-ui-elements/commit/90537b471fce6643dd5eaecf1e5b0a1e3f196012

[100]: https://github.com/box/box-ui-elements/issues/4161

[101]: https://github.com/box/box-ui-elements/commit/7f9cad4b85f96d8d65f11c30ae3a45f2a3c96e40

[102]: https://github.com/box/box-ui-elements/issues/4177

[103]: https://github.com/box/box-ui-elements/commit/d14e06eb47083160dcf04055d3f418c4457d1255

[104]: https://github.com/box/box-ui-elements/issues/4156

[105]: https://github.com/box/box-ui-elements/commit/dc8af3b1dda45b1617aeac5a2d04af07af7e1e21

[106]: https://github.com/box/box-ui-elements/issues/4194

[107]: https://github.com/box/box-ui-elements/commit/e25e0e1174efd262f93e70619ff5f9a79d168fd8

[108]: https://github.com/box/box-ui-elements/issues/4160

[109]: https://github.com/box/box-ui-elements/commit/12c9a3a840545048f53ebae7b278208981ed1a55

[110]: https://github.com/box/box-ui-elements/issues/4152

[111]: https://github.com/box/box-ui-elements/commit/a456f3d677c3ad15e5ec2e052dcedf93d0d612f3

[112]: https://github.com/box/box-ui-elements/issues/4144

[113]: https://github.com/box/box-ui-elements/commit/15c5d8dfed2b2cc777344d0e0ef10da8c3525434

[114]: https://github.com/box/box-ui-elements/issues/4136

[115]: https://github.com/box/box-ui-elements/commit/d08545ef0650ad7082040d74acddb365bc8122f4

[116]: https://github.com/box/box-ui-elements/issues/4162

[117]: https://github.com/box/box-ui-elements/commit/32b08b929acbd906b2a348b8939234c980f1b642

[118]: https://github.com/box/box-ui-elements/issues/4206

[119]: https://github.com/box/box-ui-elements/commit/782877d2dcfa6d928da884055f1cc4bb17745d18

[120]: https://github.com/box/box-ui-elements/issues/4141

[121]: https://github.com/box/box-ui-elements/commit/f01364c73117a4d0638b28d4e3c6e832b1c27a62

[122]: https://github.com/box/box-ui-elements/issues/4123

[123]: https://github.com/box/box-ui-elements/commit/c166d7d49373168daed0eab315f2e90d4b0532a9

[124]: https://github.com/box/box-ui-elements/issues/4157

[125]: https://github.com/box/box-ui-elements/commit/269f5854c5c15a48c971207cf00bc2f1a98ccb97

[126]: https://github.com/box/box-ui-elements/issues/4117

[127]: https://github.com/box/box-ui-elements/commit/463839ee00c901cd9752106ca1a44e7a3906dc0b
