---
applied_at: '2022-10-20'
applies_to:
  - frontend
  - ui-elements
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-ui-elements/releases/tag/v16.0.0'
collapse: true
---

# Box UI Elements `v16.0.0` released

# [16.0.0][1] (2022-10-20)

### Bug Fixes

* **activity-sidebar:** omit retention field fetched by versions api ([#3033][2]) ([`c7f4796`][3])
* **breadcrumbs:** correctly apply breadcrumb styles to overflow ([#3055][4]) ([`ed834c2`][5])
* **button:** diabled button with theme shows custom color in all states ([#2972][6]) ([`ef674ae`][7])
* **classification:** Classification colors in Shared Link Settings Modal ([#3011][8]) ([`27b4057`][9])
* **content-explorer:** Added overflow style to DeleteConfirmationDialog ([#3050][10]) ([`261850c`][11])
* **content-insights:** Allow undefined error ContentAnalyticsErrorState ([#3047][12]) ([`92b8a34`][13])
* **content-insights:** remove numAbbr dependency ([#3074][14]) ([`29c17ec`][15])
* **content-sidebar:** ThreadedComments api; handling reply edit logic ([#3094][16]) ([`eb32f01`][17])
* **dropdown:** add scroll behavior when fullscreen ([#3067][18]) ([`40c4378`][19])
* **dropdown-menu:** fix menu header close btn and text positioning ([#2963][20]) ([`7475fd5`][21])
* **flyout:** unrevert responsive flyout changes and fix safari UI issue ([#2903][22]) ([`088f219`][23])
* **full-icu:** Remove full-icu since its been provided by node 13+ ([#3062][24]) ([`11ae7b8`][25])
* **hotkey:** choose correct hotkey config ([#3092][26]) ([`c0c6ec0`][27])
* **i18n:** update translations ([#2925][28]) ([`3c09e7e`][29])
* **i18n:** update translations ([#2933][30]) ([`98c9790`][31])
* **i18n:** update translations ([#2935][32]) ([`ac37d5d`][33])
* **i18n:** update translations ([#2937][34]) ([`f12992a`][35])
* **i18n:** update translations ([#2981][36]) ([`63c0540`][37])
* **i18n:** update translations ([#2988][38]) ([`38cdd00`][39])
* **i18n:** update translations ([#3008][40]) ([`912b9b2`][41])
* **i18n:** update translations ([#3014][42]) ([`b4ea968`][43])
* **i18n:** update translations ([#3018][44]) ([`068afca`][45])
* **i18n:** update translations ([#3020][46]) ([`8e936f8`][47])
* **i18n:** update translations ([#3024][48]) ([`2702ad1`][49])
* **i18n:** update translations ([#3027][50]) ([`0c486e1`][51])
* **i18n:** update translations ([#3029][52]) ([`877e145`][53])
* **i18n:** update translations ([#3032][54]) ([`beb1417`][55])
* **i18n:** update translations ([#3035][56]) ([`199ef0a`][57])
* **i18n:** update translations ([#3036][58]) ([`1d1590c`][59])
* **i18n:** update translations ([#3037][60]) ([`d703d53`][61])
* **i18n:** update translations ([#3039][62]) ([`df2caa1`][63])
* **i18n:** update translations ([#3041][64]) ([`d0d0132`][65])
* **i18n:** update translations ([#3044][66]) ([`1867425`][67])
* **i18n:** update translations ([#3046][68]) ([`d463fa1`][69])
* **i18n:** update translations ([#3051][70]) ([`96e12cc`][71])
* **i18n:** update translations ([#3058][72]) ([`f84ecad`][73])
* **i18n:** update translations ([#3059][74]) ([`6b59624`][75])
* **i18n:** update translations ([#3066][76]) ([`0fa8b05`][77])
* **i18n:** update translations ([#3071][78]) ([`a051440`][79])
* **i18n:** update translations ([#3073][80]) ([`048a2b9`][81])
* **i18n:** update translations ([#3077][82]) ([`545c99f`][83])
* **i18n:** update translations ([#3080][84]) ([`dcbb2fa`][85])
* **i18n:** update translations ([#3084][86]) ([`7406d10`][87])
* **i18n:** update translations ([#3087][88]) ([`9900734`][89])
* **i18n:** update translations ([#3096][90]) ([`b8581f8`][91])
* **i18n:** update translations ([#3098][92]) ([`fd1c898`][93])
* **i18n:** update translations ([#3102][94]) ([`1caaa4b`][95])
* **infinite-scroll:** fix documentation and prop name mismatch ([#3048][96]) ([`f738d85`][97])
* **infinite-scroll:** fix unscrollable page can't trigger loadMore ([#3057][98]) ([`e221348`][99])
* **media-query:** add min breakpoint sizes ([#2944][100]) ([`9a6b690`][101])
* **mediaquery:** change type of size to string ([#2980][102]) ([`df71d54`][103])
* **menu:** focus next menu item when focused item removed ([#2994][104]) ([`12154c4`][105])
* **menu-separator:** add className prop to MenuSeparator ([#2949][106]) ([`b9503b8`][107])
* **modal:** Adjust CSS to prevent dropdown cutoff ([#3078][108]) ([`3d4201b`][109])
* **modal:** Adjust modal header elements and enable scrolling action ([#2946][110]) ([`722296d`][111])
* **modal:** Relocated action buttons to the bottom on small screens ([#2884][112]) ([`85fabc9`][113])
* **notification:** fix tooltip overlapping notification banner ([#3049][114]) ([`ad45538`][115])
* **notification:** fix variable ordering and value ([#3068][116]) ([`baa7e00`][117])
* **plain-button:** When in disabled don't show cursor pointer ([#2863][118]) ([`55ef6a3`][119])
* **preview:** update more apps icon in Preview sidebar/drawer ([#2975][120]) ([`fa36399`][121])
* **search-form:** fix search button not invoking form submit ([#3013][122]) ([`ed32d0b`][123])
* **sharedlinks:** Update sharedLink support link ([#2938][124]) ([`eb0e683`][125])
* **storybook:** Fix webpack config to include box-cldr-data ([#3045][126]) ([`45ae140`][127])
* **typography:** fixed low contrast text on preview ([#3015][128]) ([`c434315`][129])

### Features

* **annotation-activity:** add resolve functionality ([#3012][130]) ([`e2b0383`][131])
* **annotation-thread:** Add "(edited)" label to edited comments ([#3091][132]) ([`2bab742`][133])
* **annotation-thread:** create base for AnnotationThread component ([#3028][134]) ([`184df09`][135])
* **annotation-thread:** create useRepliesAPI  ([#3061][136]) ([`fc58cee`][137])
* **annotation-thread:** handle create reply ([#3060][138]) ([`4d6cf4a`][139])
* **annotation-thread:** Truncate the message in Comment / AnnotationActivity ([#3079][140]) ([`99d8efa`][141])
* **annotattion-thread:** create new annotation ([#3054][142]) ([`796ac77`][143])
* **assets:** Add CoAuthoringBadge from design ([#2905][144]) ([`4dffe18`][145])
* **assets:** adding assets needed for admin console search from design ([#2908][146]) ([`4373e29`][147])
* **assets:** create ArrowSort16 icon ([#2914][148]) ([`dd51bea`][149])
* **assets:** update Apple iWork icons ([#2895][150]) ([`cc733c6`][151])
* **assets:** update assets to include Canvas icon ([#2912][152]) ([`eaac099`][153])
* **assets:** update assets to latest from design for admin console ([#2942][154]) ([`ebc4599`][155])
* **assets:** update Automation Templates assets ([#3090][156]) ([`fda0bc2`][157])
* **assets:** Update tinycon assets ([#3064][158]) ([`cc01689`][159])
* **classification:** update security controls watermarking copy ([#3083][160]) ([`0359beb`][161])
* **content-explorer:** Add responsive behavior ([#2932][162]) ([`cef1834`][163])
* **content-explorer:** Add responsive behavior ([#2956][164]) ([`75b6285`][165]), closes [#2932][162]
* **content-explorer:** Expose item row renderer ([#2940][166]) ([`4d4ee8a`][167])
* **content-explorer:** refactor breadcrumbs and allow props config ([#3002][168]) ([`0314b13`][169])
* **content-insights:** Add error state to ContentInsightsSummary ([#3034][170]) ([`be38690`][171])
* **content-insights:** Add permission error state for 403 errors ([#3042][172]) ([`b806a00`][173])
* **content-insights:** Migration of components ([#3026][174]) ([`00b9fc2`][175])
* **content-sidebar:** activity feed items filtering ([#3004][176]) ([`6aecf49`][177])
* **content-sidebar:** Add error support for SidebarContentInsights ([#3052][178]) ([`3a91d4d`][179])
* **content-sidebar:** Add SidebarContentInsights for Details Sidebar ([#3040][180]) ([`82bc42d`][181])
* **content-sidebar:** added annotation replies events communication ([#3093][182]) ([`6375841`][183])
* **content-sidebar:** added missing replies logic for threaded replies ([#3043][184]) ([`6b63d70`][185])
* **content-sidebar:** added replies related logic for threaded replies ([#3038][186]) ([`10f11ed`][187])
* **content-sidebar:** extended annotation events communication ([#3088][188]) ([`1f80dbd`][189])
* **content-sidebar:** initial Threaded Replies related changes ([#2999][190]) ([`2abe7f7`][191])
* **content-sidebar:** make sidebar title optional ([#3000][192]) ([`5885cd8`][193])
* **content-sidebar:** updated annotation events communication ([#3081][194]) ([`4199594`][195])
* **content-sidebar:** updated annotations logic for threaded replies ([#3019][196]) ([`beefff7`][197])
* **content-sidebar:** updated comment to support threaded replies changes ([#3053][198]) ([`19c4018`][199])
* **content-sidebar:** updated comments logic for threaded replies ([#3025][200]) ([`dc840bd`][201])
* **contentsidebar:** add blockedReason shieldsign ([#2927][202]) ([`50ed4e7`][203])
* **docs:** Access Token Functions ([#2826][204]) ([`8926959`][205])
* **dropdown-menu:** Add responsive dropdown menu behaviors + menu header composability ([#2952][206]) ([`00fc868`][207])
* **dropdownmenu:** add support for pinning menu ([#3017][208]) ([`55986ba`][209])
* **gridview:** Make hot key config for grid view ([#3082][210]) ([`e5e8e9a`][211])
* **icons:** add doc info icon ([#2979][212]) ([`7e72482`][213])
* **icons:** add user settings icon ([#3005][214]) ([`2a8ed37`][215])
* **icons:** Update IWorkIcon to latests assets ([#2945][216]) ([`7e4fa66`][217])
* **media-queries:** Add xlarge size to media query ([#3056][218]) ([`6cfadee`][219])
* **modal:** default ugrade inline notice to top of share modal ([#2926][220]) ([`472c87a`][221])
* **presence:** Allow PresenceCollaborator to show anonymous avatar ([#2892][222]) ([`84e9d47`][223])
* **presence-collaborator:** add default browser tooltip on list item ([#2891][224]) ([`5833614`][225])
* **preview:** add responsive behavior to preview drawer ([#2917][226]) ([`b9ccce4`][227])
* **preview:** update freemium preview sidebar for upsell ([#2921][228]) ([`8c2e66e`][229])
* **progress-bar:** extended with ability to accept custom message ([#3022][230]) ([`41c839f`][231])
* **radar-animation:** add tetherElementClassName prop ([#2909][232]) ([`87a4121`][233])
* **replies:** Update Annotations API to support threaded replies ([#2982][234]) ([`bcb2657`][235])
* **security-controls:** Add restriction summary copies for Sign ([#2931][236]) ([`9aacb1b`][237])
* **threaded-replies:** add ThrededComments API to support threaded replies ([#3001][238]) ([`6cd6de6`][239])
* **threaded-replies:** create base of ActivityThread component ([#3003][240]) ([`234a04e`][241])
* **threaded-replies:** render replies in ActivityThread ([#3010][242]) ([`ac51b2e`][243])
* **tooltip:** export tooltip props ([#2953][244]) ([`5e5dd35`][245])
* **tooltip:** Set aria-hidden attribute on tooltip ([#3030][246]) ([`04e13e2`][247])
* **unified-share-modal:** add responsive behavior to UnifiedShareModal ([#2957][248]) ([`0a56f2f`][249])
* **usm:** Add attributes to support end-to-end testing ([#2913][250]) ([`d483093`][251])
* **usm:** Add support for group restrictions ([#3031][252]) ([`4f3f40d`][253])
* **usm:** BREAKING CHANGE Clean up USM props used for compatibility ([#2998][254]) ([`ae9c989`][255])
* **usm:** BREAKING CHANGE Display specific message for IB restrictions ([#2977][256]) ([`287eea0`][257])
* **uuid:** bump uuid from 3.3.2 to 8.3.2 ([#3075][258]) ([`a236627`][259])

### Reverts

* **content-explorer) Revert "feat(content-explorer:** Add responsive behavior" ([#2955][260]) ([`9bacf80`][261]), closes [#2932][162]
* Revert responsive flyout changes ([#2902][262]) ([`e9ced6a`][263]), closes [#2890][264] [#2883][265] [#2878][266]

### BREAKING CHANGES

* **uuid:** bumping peer dependency

* feat(uuid): bump uuid from 3.3.2 to 8.3.2

Added flow-typed uuid

Co-authored-by: kkuliczkowski [kkuliczkowski@box.com][267]
Co-authored-by: mergify\[bot] <37929162+mergify\[bot][`@users`][268].noreply.github.com>

* **usm:** onRemoveAllRestrictedExternalCollabs and restrictedExternalCollabEmails props have been removed
* **mediaquery:** the previous type was boolean. This could break type
    checkers

Co-authored-by: Ivan Thai [ivanthai@users.noreply.github.com][269]

* **usm:** onRemoveAllRestrictedExternalCollabs and restrictedExternalCollabEmails props have been renamed

[1]: https://github.com/box/box-ui-elements/compare/v15.0.0...v16.0.0

[2]: https://github.com/box/box-ui-elements/issues/3033

[3]: https://github.com/box/box-ui-elements/commit/c7f4796

[4]: https://github.com/box/box-ui-elements/issues/3055

[5]: https://github.com/box/box-ui-elements/commit/ed834c2

[6]: https://github.com/box/box-ui-elements/issues/2972

[7]: https://github.com/box/box-ui-elements/commit/ef674ae

[8]: https://github.com/box/box-ui-elements/issues/3011

[9]: https://github.com/box/box-ui-elements/commit/27b4057

[10]: https://github.com/box/box-ui-elements/issues/3050

[11]: https://github.com/box/box-ui-elements/commit/261850c

[12]: https://github.com/box/box-ui-elements/issues/3047

[13]: https://github.com/box/box-ui-elements/commit/92b8a34

[14]: https://github.com/box/box-ui-elements/issues/3074

[15]: https://github.com/box/box-ui-elements/commit/29c17ec

[16]: https://github.com/box/box-ui-elements/issues/3094

[17]: https://github.com/box/box-ui-elements/commit/eb32f01

[18]: https://github.com/box/box-ui-elements/issues/3067

[19]: https://github.com/box/box-ui-elements/commit/40c4378

[20]: https://github.com/box/box-ui-elements/issues/2963

[21]: https://github.com/box/box-ui-elements/commit/7475fd5

[22]: https://github.com/box/box-ui-elements/issues/2903

[23]: https://github.com/box/box-ui-elements/commit/088f219

[24]: https://github.com/box/box-ui-elements/issues/3062

[25]: https://github.com/box/box-ui-elements/commit/11ae7b8

[26]: https://github.com/box/box-ui-elements/issues/3092

[27]: https://github.com/box/box-ui-elements/commit/c0c6ec0

[28]: https://github.com/box/box-ui-elements/issues/2925

[29]: https://github.com/box/box-ui-elements/commit/3c09e7e

[30]: https://github.com/box/box-ui-elements/issues/2933

[31]: https://github.com/box/box-ui-elements/commit/98c9790

[32]: https://github.com/box/box-ui-elements/issues/2935

[33]: https://github.com/box/box-ui-elements/commit/ac37d5d

[34]: https://github.com/box/box-ui-elements/issues/2937

[35]: https://github.com/box/box-ui-elements/commit/f12992a

[36]: https://github.com/box/box-ui-elements/issues/2981

[37]: https://github.com/box/box-ui-elements/commit/63c0540

[38]: https://github.com/box/box-ui-elements/issues/2988

[39]: https://github.com/box/box-ui-elements/commit/38cdd00

[40]: https://github.com/box/box-ui-elements/issues/3008

[41]: https://github.com/box/box-ui-elements/commit/912b9b2

[42]: https://github.com/box/box-ui-elements/issues/3014

[43]: https://github.com/box/box-ui-elements/commit/b4ea968

[44]: https://github.com/box/box-ui-elements/issues/3018

[45]: https://github.com/box/box-ui-elements/commit/068afca

[46]: https://github.com/box/box-ui-elements/issues/3020

[47]: https://github.com/box/box-ui-elements/commit/8e936f8

[48]: https://github.com/box/box-ui-elements/issues/3024

[49]: https://github.com/box/box-ui-elements/commit/2702ad1

[50]: https://github.com/box/box-ui-elements/issues/3027

[51]: https://github.com/box/box-ui-elements/commit/0c486e1

[52]: https://github.com/box/box-ui-elements/issues/3029

[53]: https://github.com/box/box-ui-elements/commit/877e145

[54]: https://github.com/box/box-ui-elements/issues/3032

[55]: https://github.com/box/box-ui-elements/commit/beb1417

[56]: https://github.com/box/box-ui-elements/issues/3035

[57]: https://github.com/box/box-ui-elements/commit/199ef0a

[58]: https://github.com/box/box-ui-elements/issues/3036

[59]: https://github.com/box/box-ui-elements/commit/1d1590c

[60]: https://github.com/box/box-ui-elements/issues/3037

[61]: https://github.com/box/box-ui-elements/commit/d703d53

[62]: https://github.com/box/box-ui-elements/issues/3039

[63]: https://github.com/box/box-ui-elements/commit/df2caa1

[64]: https://github.com/box/box-ui-elements/issues/3041

[65]: https://github.com/box/box-ui-elements/commit/d0d0132

[66]: https://github.com/box/box-ui-elements/issues/3044

[67]: https://github.com/box/box-ui-elements/commit/1867425

[68]: https://github.com/box/box-ui-elements/issues/3046

[69]: https://github.com/box/box-ui-elements/commit/d463fa1

[70]: https://github.com/box/box-ui-elements/issues/3051

[71]: https://github.com/box/box-ui-elements/commit/96e12cc

[72]: https://github.com/box/box-ui-elements/issues/3058

[73]: https://github.com/box/box-ui-elements/commit/f84ecad

[74]: https://github.com/box/box-ui-elements/issues/3059

[75]: https://github.com/box/box-ui-elements/commit/6b59624

[76]: https://github.com/box/box-ui-elements/issues/3066

[77]: https://github.com/box/box-ui-elements/commit/0fa8b05

[78]: https://github.com/box/box-ui-elements/issues/3071

[79]: https://github.com/box/box-ui-elements/commit/a051440

[80]: https://github.com/box/box-ui-elements/issues/3073

[81]: https://github.com/box/box-ui-elements/commit/048a2b9

[82]: https://github.com/box/box-ui-elements/issues/3077

[83]: https://github.com/box/box-ui-elements/commit/545c99f

[84]: https://github.com/box/box-ui-elements/issues/3080

[85]: https://github.com/box/box-ui-elements/commit/dcbb2fa

[86]: https://github.com/box/box-ui-elements/issues/3084

[87]: https://github.com/box/box-ui-elements/commit/7406d10

[88]: https://github.com/box/box-ui-elements/issues/3087

[89]: https://github.com/box/box-ui-elements/commit/9900734

[90]: https://github.com/box/box-ui-elements/issues/3096

[91]: https://github.com/box/box-ui-elements/commit/b8581f8

[92]: https://github.com/box/box-ui-elements/issues/3098

[93]: https://github.com/box/box-ui-elements/commit/fd1c898

[94]: https://github.com/box/box-ui-elements/issues/3102

[95]: https://github.com/box/box-ui-elements/commit/1caaa4b

[96]: https://github.com/box/box-ui-elements/issues/3048

[97]: https://github.com/box/box-ui-elements/commit/f738d85

[98]: https://github.com/box/box-ui-elements/issues/3057

[99]: https://github.com/box/box-ui-elements/commit/e221348

[100]: https://github.com/box/box-ui-elements/issues/2944

[101]: https://github.com/box/box-ui-elements/commit/9a6b690

[102]: https://github.com/box/box-ui-elements/issues/2980

[103]: https://github.com/box/box-ui-elements/commit/df71d54

[104]: https://github.com/box/box-ui-elements/issues/2994

[105]: https://github.com/box/box-ui-elements/commit/12154c4

[106]: https://github.com/box/box-ui-elements/issues/2949

[107]: https://github.com/box/box-ui-elements/commit/b9503b8

[108]: https://github.com/box/box-ui-elements/issues/3078

[109]: https://github.com/box/box-ui-elements/commit/3d4201b

[110]: https://github.com/box/box-ui-elements/issues/2946

[111]: https://github.com/box/box-ui-elements/commit/722296d

[112]: https://github.com/box/box-ui-elements/issues/2884

[113]: https://github.com/box/box-ui-elements/commit/85fabc9

[114]: https://github.com/box/box-ui-elements/issues/3049

[115]: https://github.com/box/box-ui-elements/commit/ad45538

[116]: https://github.com/box/box-ui-elements/issues/3068

[117]: https://github.com/box/box-ui-elements/commit/baa7e00

[118]: https://github.com/box/box-ui-elements/issues/2863

[119]: https://github.com/box/box-ui-elements/commit/55ef6a3

[120]: https://github.com/box/box-ui-elements/issues/2975

[121]: https://github.com/box/box-ui-elements/commit/fa36399

[122]: https://github.com/box/box-ui-elements/issues/3013

[123]: https://github.com/box/box-ui-elements/commit/ed32d0b

[124]: https://github.com/box/box-ui-elements/issues/2938

[125]: https://github.com/box/box-ui-elements/commit/eb0e683

[126]: https://github.com/box/box-ui-elements/issues/3045

[127]: https://github.com/box/box-ui-elements/commit/45ae140

[128]: https://github.com/box/box-ui-elements/issues/3015

[129]: https://github.com/box/box-ui-elements/commit/c434315

[130]: https://github.com/box/box-ui-elements/issues/3012

[131]: https://github.com/box/box-ui-elements/commit/e2b0383

[132]: https://github.com/box/box-ui-elements/issues/3091

[133]: https://github.com/box/box-ui-elements/commit/2bab742

[134]: https://github.com/box/box-ui-elements/issues/3028

[135]: https://github.com/box/box-ui-elements/commit/184df09

[136]: https://github.com/box/box-ui-elements/issues/3061

[137]: https://github.com/box/box-ui-elements/commit/fc58cee

[138]: https://github.com/box/box-ui-elements/issues/3060

[139]: https://github.com/box/box-ui-elements/commit/4d6cf4a

[140]: https://github.com/box/box-ui-elements/issues/3079

[141]: https://github.com/box/box-ui-elements/commit/99d8efa

[142]: https://github.com/box/box-ui-elements/issues/3054

[143]: https://github.com/box/box-ui-elements/commit/796ac77

[144]: https://github.com/box/box-ui-elements/issues/2905

[145]: https://github.com/box/box-ui-elements/commit/4dffe18

[146]: https://github.com/box/box-ui-elements/issues/2908

[147]: https://github.com/box/box-ui-elements/commit/4373e29

[148]: https://github.com/box/box-ui-elements/issues/2914

[149]: https://github.com/box/box-ui-elements/commit/dd51bea

[150]: https://github.com/box/box-ui-elements/issues/2895

[151]: https://github.com/box/box-ui-elements/commit/cc733c6

[152]: https://github.com/box/box-ui-elements/issues/2912

[153]: https://github.com/box/box-ui-elements/commit/eaac099

[154]: https://github.com/box/box-ui-elements/issues/2942

[155]: https://github.com/box/box-ui-elements/commit/ebc4599

[156]: https://github.com/box/box-ui-elements/issues/3090

[157]: https://github.com/box/box-ui-elements/commit/fda0bc2

[158]: https://github.com/box/box-ui-elements/issues/3064

[159]: https://github.com/box/box-ui-elements/commit/cc01689

[160]: https://github.com/box/box-ui-elements/issues/3083

[161]: https://github.com/box/box-ui-elements/commit/0359beb

[162]: https://github.com/box/box-ui-elements/issues/2932

[163]: https://github.com/box/box-ui-elements/commit/cef1834

[164]: https://github.com/box/box-ui-elements/issues/2956

[165]: https://github.com/box/box-ui-elements/commit/75b6285

[166]: https://github.com/box/box-ui-elements/issues/2940

[167]: https://github.com/box/box-ui-elements/commit/4d4ee8a

[168]: https://github.com/box/box-ui-elements/issues/3002

[169]: https://github.com/box/box-ui-elements/commit/0314b13

[170]: https://github.com/box/box-ui-elements/issues/3034

[171]: https://github.com/box/box-ui-elements/commit/be38690

[172]: https://github.com/box/box-ui-elements/issues/3042

[173]: https://github.com/box/box-ui-elements/commit/b806a00

[174]: https://github.com/box/box-ui-elements/issues/3026

[175]: https://github.com/box/box-ui-elements/commit/00b9fc2

[176]: https://github.com/box/box-ui-elements/issues/3004

[177]: https://github.com/box/box-ui-elements/commit/6aecf49

[178]: https://github.com/box/box-ui-elements/issues/3052

[179]: https://github.com/box/box-ui-elements/commit/3a91d4d

[180]: https://github.com/box/box-ui-elements/issues/3040

[181]: https://github.com/box/box-ui-elements/commit/82bc42d

[182]: https://github.com/box/box-ui-elements/issues/3093

[183]: https://github.com/box/box-ui-elements/commit/6375841

[184]: https://github.com/box/box-ui-elements/issues/3043

[185]: https://github.com/box/box-ui-elements/commit/6b63d70

[186]: https://github.com/box/box-ui-elements/issues/3038

[187]: https://github.com/box/box-ui-elements/commit/10f11ed

[188]: https://github.com/box/box-ui-elements/issues/3088

[189]: https://github.com/box/box-ui-elements/commit/1f80dbd

[190]: https://github.com/box/box-ui-elements/issues/2999

[191]: https://github.com/box/box-ui-elements/commit/2abe7f7

[192]: https://github.com/box/box-ui-elements/issues/3000

[193]: https://github.com/box/box-ui-elements/commit/5885cd8

[194]: https://github.com/box/box-ui-elements/issues/3081

[195]: https://github.com/box/box-ui-elements/commit/4199594

[196]: https://github.com/box/box-ui-elements/issues/3019

[197]: https://github.com/box/box-ui-elements/commit/beefff7

[198]: https://github.com/box/box-ui-elements/issues/3053

[199]: https://github.com/box/box-ui-elements/commit/19c4018

[200]: https://github.com/box/box-ui-elements/issues/3025

[201]: https://github.com/box/box-ui-elements/commit/dc840bd

[202]: https://github.com/box/box-ui-elements/issues/2927

[203]: https://github.com/box/box-ui-elements/commit/50ed4e7

[204]: https://github.com/box/box-ui-elements/issues/2826

[205]: https://github.com/box/box-ui-elements/commit/8926959

[206]: https://github.com/box/box-ui-elements/issues/2952

[207]: https://github.com/box/box-ui-elements/commit/00fc868

[208]: https://github.com/box/box-ui-elements/issues/3017

[209]: https://github.com/box/box-ui-elements/commit/55986ba

[210]: https://github.com/box/box-ui-elements/issues/3082

[211]: https://github.com/box/box-ui-elements/commit/e5e8e9a

[212]: https://github.com/box/box-ui-elements/issues/2979

[213]: https://github.com/box/box-ui-elements/commit/7e72482

[214]: https://github.com/box/box-ui-elements/issues/3005

[215]: https://github.com/box/box-ui-elements/commit/2a8ed37

[216]: https://github.com/box/box-ui-elements/issues/2945

[217]: https://github.com/box/box-ui-elements/commit/7e4fa66

[218]: https://github.com/box/box-ui-elements/issues/3056

[219]: https://github.com/box/box-ui-elements/commit/6cfadee

[220]: https://github.com/box/box-ui-elements/issues/2926

[221]: https://github.com/box/box-ui-elements/commit/472c87a

[222]: https://github.com/box/box-ui-elements/issues/2892

[223]: https://github.com/box/box-ui-elements/commit/84e9d47

[224]: https://github.com/box/box-ui-elements/issues/2891

[225]: https://github.com/box/box-ui-elements/commit/5833614

[226]: https://github.com/box/box-ui-elements/issues/2917

[227]: https://github.com/box/box-ui-elements/commit/b9ccce4

[228]: https://github.com/box/box-ui-elements/issues/2921

[229]: https://github.com/box/box-ui-elements/commit/8c2e66e

[230]: https://github.com/box/box-ui-elements/issues/3022

[231]: https://github.com/box/box-ui-elements/commit/41c839f

[232]: https://github.com/box/box-ui-elements/issues/2909

[233]: https://github.com/box/box-ui-elements/commit/87a4121

[234]: https://github.com/box/box-ui-elements/issues/2982

[235]: https://github.com/box/box-ui-elements/commit/bcb2657

[236]: https://github.com/box/box-ui-elements/issues/2931

[237]: https://github.com/box/box-ui-elements/commit/9aacb1b

[238]: https://github.com/box/box-ui-elements/issues/3001

[239]: https://github.com/box/box-ui-elements/commit/6cd6de6

[240]: https://github.com/box/box-ui-elements/issues/3003

[241]: https://github.com/box/box-ui-elements/commit/234a04e

[242]: https://github.com/box/box-ui-elements/issues/3010

[243]: https://github.com/box/box-ui-elements/commit/ac51b2e

[244]: https://github.com/box/box-ui-elements/issues/2953

[245]: https://github.com/box/box-ui-elements/commit/5e5dd35

[246]: https://github.com/box/box-ui-elements/issues/3030

[247]: https://github.com/box/box-ui-elements/commit/04e13e2

[248]: https://github.com/box/box-ui-elements/issues/2957

[249]: https://github.com/box/box-ui-elements/commit/0a56f2f

[250]: https://github.com/box/box-ui-elements/issues/2913

[251]: https://github.com/box/box-ui-elements/commit/d483093

[252]: https://github.com/box/box-ui-elements/issues/3031

[253]: https://github.com/box/box-ui-elements/commit/4f3f40d

[254]: https://github.com/box/box-ui-elements/issues/2998

[255]: https://github.com/box/box-ui-elements/commit/ae9c989

[256]: https://github.com/box/box-ui-elements/issues/2977

[257]: https://github.com/box/box-ui-elements/commit/287eea0

[258]: https://github.com/box/box-ui-elements/issues/3075

[259]: https://github.com/box/box-ui-elements/commit/a236627

[260]: https://github.com/box/box-ui-elements/issues/2955

[261]: https://github.com/box/box-ui-elements/commit/9bacf80

[262]: https://github.com/box/box-ui-elements/issues/2902

[263]: https://github.com/box/box-ui-elements/commit/e9ced6a

[264]: https://github.com/box/box-ui-elements/issues/2890

[265]: https://github.com/box/box-ui-elements/issues/2883

[266]: https://github.com/box/box-ui-elements/issues/2878

[267]: mailto:kkuliczkowski@box.com

[268]: https://github.com/users

[269]: mailto:ivanthai@users.noreply.github.com
