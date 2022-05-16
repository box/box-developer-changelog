---
applied_at: '2022-05-16'
applies_to:
  - frontend
  - ui-elements
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-ui-elements/releases/tag/v15.0.0'
collapse: true
---

# Box UI Elements `v15.0.0` released

# [15.0.0][1] (2022-05-16)

### Bug Fixes

* **activity-sidebar:** delete and cancel button misalignment ([#2772][2]) ([`25f5341`][3])
* **adobesign:** Re-introduce IconAdobeSign ([#2784][4]) ([`eb6e5ee`][5])
* **alerts:** alerts color contrast ([#2734][6]) ([`709c2fe`][7])
* **alerts:** Revert of notifications fix ([#2729][8]) ([`4d23f99`][9]), closes [#2718][10]
* **avatar:** change unknown avatar svg ([#2837][11]) ([`81bdbd5`][12])
* **avatar:** fix scale of unknown user avtar svg ([#2856][13]) ([`2438daa`][14])
* **avatar:** Update colors to be a11y contrast ratio compliant ([#2767][15]) ([`b281e27`][16])
* **axios:** BREAKING CHANGE Add noop for axios upgrade ([#2849][17]) ([`a755552`][18])
* **axios:** Upgrade axios to v0.25.0 ([#2839][19]) ([`c130849`][20])
* **buttons:** revert new styles ([#2740][21]) ([#2742][22]) ([`a8a256a`][23])
* **collapsible-sidebar:** remove incorrect scss import ([#2847][24]) ([`fc424d5`][25])
* **collapsible-sidebar:** remove unnecessary import from test ([#2846][26]) ([`d246571`][27])
* **content-explorer:** Pass id into custom name renderer ([#2845][28]) ([`633c65d`][29])
* **datepicker:** Add error styling for invalid date inputs ([#2793][30]) ([`c768826`][31])
* **datepicker:** Add local timezone offset to display date ([#2778][32]) ([`1f1abaa`][33])
* **datepicker:** Add margin to isAccessible calendar widget ([#2815][34]) ([`1258dc2`][35])
* **datepicker:** Add max and min attributes to date input ([#2808][36]) ([`ad0a47b`][37])
* **datepicker:** Align icons across browsers ([#2814][38]) ([`c598444`][39])
* **datepicker:** Focus input field when calendar closes ([#2816][40]) ([`c4b942d`][41])
* **datepicker:** Pass INTL timezone to format date for utc format ([#2875][42]) ([`45058f3`][43]), closes [box/box-ui-elements#2874][44]
* **datepicker:** Update input value after date is converted ([#2780][45]) ([`708cdb9`][46])
* **file-icons:** make csv and tsv use spreadsheet icon ([#2877][47]) ([`bdd7a0f`][48])
* **header-flyout:** default resp behavior should be under resp class ([#2890][49]) ([`3761a82`][50])
* **i18n:** update translations ([#2737][51]) ([`04ef3d2`][52])
* **i18n:** update translations ([#2741][53]) ([`81fb05c`][54])
* **i18n:** update translations ([#2765][55]) ([`fae0de1`][56])
* **i18n:** update translations ([#2769][57]) ([`d752287`][58])
* **i18n:** update translations ([#2777][59]) ([`2a90172`][60])
* **i18n:** update translations ([#2789][61]) ([`8d89110`][62])
* **i18n:** update translations ([#2825][63]) ([`a5c2281`][64])
* **i18n:** update translations ([#2843][65]) ([`84ce28b`][66])
* **i18n:** update translations ([#2865][67]) ([`5613c21`][68])
* **message-center:** doesnt load list until scroll ([#2823][69]) ([`6b9f8ef`][70])
* **message-center:** doesnt load list until scroll ([#2827][71]) ([`4097470`][72])
* **notifications:** button text and icon weight ([#2757][73]) ([`a2ca346`][74])
* **presence:** Make more accessible by adding appropriate roles ([#2766][75]) ([`d4fa722`][76])
* **presence-collaborators-list:** simplify presence collaborators list ([#2834][77]) ([`0eeaa56`][78])
* **search:** focus outline ([#2835][79]) ([`490c6a7`][80])
* **selector-dropdown:** Fix usm invite modal ([#2831][81]) ([`7d12731`][82])
* **sidebar:** add data-testid ([#2820][83]) ([`cea1854`][84])
* **style:** fix alignment of select all checkbox in content explorer ([#2782][85]) ([`f9b78a1`][86]), closes [#2781][87]
* **tab-view:** focus outline ([#2828][88]) ([`2aedeff`][89])
* **tooltip:** dismiss tooltip on ESC ([#2818][90]) ([`4478c8f`][91])
* **usm:** Email addresses should not be marked as external due to case ([#2851][92]) ([`cbc5ca5`][93])
* **usm:** ESL warning message fails to gets displayed in USM ([#2852][94]) ([`5a981ab`][95])
* **usm:** supplement email validator with addtl valid tlds ([#2821][96]) ([`0b83339`][97])
* element modal action buttons get large size ([#2759][98]) ([`16804cd`][99])
* Fix className property passed to ImageTooltip component ([#2786][100]) ([`5d99d02`][101])
* fix collaborator access message copy for international translations ([#2794][102]) ([`2b5e398`][103])
* Fix invalid DOM property `tabindex` error ([#2809][104]) ([`ea87483`][105])
* refactor collaborator message ([#2795][106]) ([`4eee84e`][107])
* remove Adobe sign integration ([#2764][108]) ([`5986d53`][109])
* **tooltips:** support hover state for WCAG 1.4.13 ([#2771][110]) ([`2a16bb1`][111])

### Features

* **assets:** Add new content icons for xbd and xdw ([#2859][112]) ([`9db1ee2`][113])
* **assets:** Add new email verification icon from design ([#2879][114]) ([`8bff84f`][115])
* **assets:** added icons for retentions ([#2801][116]) ([`901229d`][117])
* **assets:** update assets to latest from design ([#2752][118]) ([`e332bff`][119])
* **buttons:** new styles, large size, and icon support ([#2740][21]) ([`d11b23a`][120])
* **classification:** add watermarking to security controls ([#2807][121]) ([`c278167`][122])
* **classification:** update security controls watermarking copies ([#2841][123]) ([`76e999f`][124])
* **collapsible-sidebar:** make CollapsibleSidebar fullscreen ([#2882][125]) ([`50a94ab`][126])
* **collapsible-sidebar:** make CollapsibleSidebar hide-able ([#2844][127]) ([`2ae1b1b`][128])
* **copy icon:** add generic copy icon ([#2748][129]) ([`83e5bba`][130])
* **datepicker:** Add option to use date type for text input ([#2751][131]) ([`1128c54`][132]), closes [#2731][133] [#2733][134] [#2735][135] [#2736][136] [#2738][137] [#2747][138] [#2750][139] [#2775][140] [#2776][141]
* **docuworks:** Add icon support for docuworks files ([#2860][142]) ([`3109c43`][143])
* **docuworks:** Update iconType names ([#2861][144]) ([`163d04c`][145])
* **flyout:** Add responsive behavior to Flyout ([#2878][146]) ([`e8da1c0`][147])
* **guidetooltip:** add image example to storybook ([#2762][148]) ([`0befafd`][149])
* **guidetooltip:** add support for image ([#2746][150]) ([`4d5c31e`][151])
* **header-flyout:** add responsive footer behavior and fix a few bugs ([#2883][152]) ([`24a4714`][153])
* **icon-search-juicy:** create IconSearchJuicy ([#2869][154]) ([`8f2ae01`][155])
* **icons:** add Google and Microsoft Office icons ([#2792][156]) ([`c3b911a`][157])
* **media-query:** Add CSS media queries to BUIE ([#2854][158]) ([`f6631e2`][159])
* **modal:** add responsive behavior to Modal component ([#2876][160]) ([`b4f5009`][161])
* **preview:** add constant for preview sidebar origin ([#2872][162]) ([`1b1ed35`][163])
* **quick-search:** Add title prop to QuickSearch for SelectorDropdown ([#2858][164]) ([`1e5e775`][165]), closes [#2857][166] [#2857][166]
* **usm:** Provide permissionLevel to send email and copy link callbacks ([#2888][167]) ([`0da4950`][168])
* add callback function for version history component mounting ([#2850][169]) ([`c0e89a5`][170])
* add conditional and logic to show new upgrade copy ([#2779][171]) ([`fca6935`][172])
* add freemium upsell changes ([#2739][173]) ([`b412e29`][174])
* Add new upgrade inline notice ([#2785][175]) ([`1f483fe`][176])
* add responsive media query hoc and hooks ([#2805][177]) ([#2806][178]) ([`f3ec3a0`][179])
* add version history upsell with version preview ([#2830][180]) ([`3f0ed16`][181])
* changes for an updated error message for version history errors ([#2783][182]) ([`8acb7a6`][183])
* update upgrade upsell behavior and css ([#2774][184]) ([`94978bd`][185])
* **preview:** Update Preview SDK to latest version ([#2770][186]) ([`eaba5ef`][187])
* **textarea:** add ability to specify classname for tooltip tether ([#2758][188]) ([`baa15af`][189])
* **textinput:** add ability to specify classname for tooltip tether ([#2756][190]) ([`00c41da`][191])
* **theme:** Add breaking change commit for dejablue redesign ([#2760][192]) ([`de8f6c1`][193])
* **theme:** Add noop for djb theme breaking changes ([#2761][194]) ([`2a2ed2f`][195])
* **theme:** apply dejablue redesign to components ([#2749][196]) ([`22afcfa`][197]), closes [#2744][198] [#2745][199] [#2743][200] [#2744][198] [#2745][199]

### BREAKING CHANGES

* **axios:** Adds noop for axios upgrade from v0.18.1 to v0.25.0
* **axios:** Requires upgrading axios peer dependency from v0.18.1 to v0.25.0

Co-authored-by: mergify\[bot] <37929162+mergify\[bot][`@users`][201].noreply.github.com>

* **theme:** rename $bdl-border-radius-large-size to $bdl-border-radius-size-large

[1]: https://github.com/box/box-ui-elements/compare/v14.0.0...v15.0.0

[2]: https://github.com/box/box-ui-elements/issues/2772

[3]: https://github.com/box/box-ui-elements/commit/25f5341

[4]: https://github.com/box/box-ui-elements/issues/2784

[5]: https://github.com/box/box-ui-elements/commit/eb6e5ee

[6]: https://github.com/box/box-ui-elements/issues/2734

[7]: https://github.com/box/box-ui-elements/commit/709c2fe

[8]: https://github.com/box/box-ui-elements/issues/2729

[9]: https://github.com/box/box-ui-elements/commit/4d23f99

[10]: https://github.com/box/box-ui-elements/issues/2718

[11]: https://github.com/box/box-ui-elements/issues/2837

[12]: https://github.com/box/box-ui-elements/commit/81bdbd5

[13]: https://github.com/box/box-ui-elements/issues/2856

[14]: https://github.com/box/box-ui-elements/commit/2438daa

[15]: https://github.com/box/box-ui-elements/issues/2767

[16]: https://github.com/box/box-ui-elements/commit/b281e27

[17]: https://github.com/box/box-ui-elements/issues/2849

[18]: https://github.com/box/box-ui-elements/commit/a755552

[19]: https://github.com/box/box-ui-elements/issues/2839

[20]: https://github.com/box/box-ui-elements/commit/c130849

[21]: https://github.com/box/box-ui-elements/issues/2740

[22]: https://github.com/box/box-ui-elements/issues/2742

[23]: https://github.com/box/box-ui-elements/commit/a8a256a

[24]: https://github.com/box/box-ui-elements/issues/2847

[25]: https://github.com/box/box-ui-elements/commit/fc424d5

[26]: https://github.com/box/box-ui-elements/issues/2846

[27]: https://github.com/box/box-ui-elements/commit/d246571

[28]: https://github.com/box/box-ui-elements/issues/2845

[29]: https://github.com/box/box-ui-elements/commit/633c65d

[30]: https://github.com/box/box-ui-elements/issues/2793

[31]: https://github.com/box/box-ui-elements/commit/c768826

[32]: https://github.com/box/box-ui-elements/issues/2778

[33]: https://github.com/box/box-ui-elements/commit/1f1abaa

[34]: https://github.com/box/box-ui-elements/issues/2815

[35]: https://github.com/box/box-ui-elements/commit/1258dc2

[36]: https://github.com/box/box-ui-elements/issues/2808

[37]: https://github.com/box/box-ui-elements/commit/ad0a47b

[38]: https://github.com/box/box-ui-elements/issues/2814

[39]: https://github.com/box/box-ui-elements/commit/c598444

[40]: https://github.com/box/box-ui-elements/issues/2816

[41]: https://github.com/box/box-ui-elements/commit/c4b942d

[42]: https://github.com/box/box-ui-elements/issues/2875

[43]: https://github.com/box/box-ui-elements/commit/45058f3

[44]: https://github.com/box/box-ui-elements/issues/2874

[45]: https://github.com/box/box-ui-elements/issues/2780

[46]: https://github.com/box/box-ui-elements/commit/708cdb9

[47]: https://github.com/box/box-ui-elements/issues/2877

[48]: https://github.com/box/box-ui-elements/commit/bdd7a0f

[49]: https://github.com/box/box-ui-elements/issues/2890

[50]: https://github.com/box/box-ui-elements/commit/3761a82

[51]: https://github.com/box/box-ui-elements/issues/2737

[52]: https://github.com/box/box-ui-elements/commit/04ef3d2

[53]: https://github.com/box/box-ui-elements/issues/2741

[54]: https://github.com/box/box-ui-elements/commit/81fb05c

[55]: https://github.com/box/box-ui-elements/issues/2765

[56]: https://github.com/box/box-ui-elements/commit/fae0de1

[57]: https://github.com/box/box-ui-elements/issues/2769

[58]: https://github.com/box/box-ui-elements/commit/d752287

[59]: https://github.com/box/box-ui-elements/issues/2777

[60]: https://github.com/box/box-ui-elements/commit/2a90172

[61]: https://github.com/box/box-ui-elements/issues/2789

[62]: https://github.com/box/box-ui-elements/commit/8d89110

[63]: https://github.com/box/box-ui-elements/issues/2825

[64]: https://github.com/box/box-ui-elements/commit/a5c2281

[65]: https://github.com/box/box-ui-elements/issues/2843

[66]: https://github.com/box/box-ui-elements/commit/84ce28b

[67]: https://github.com/box/box-ui-elements/issues/2865

[68]: https://github.com/box/box-ui-elements/commit/5613c21

[69]: https://github.com/box/box-ui-elements/issues/2823

[70]: https://github.com/box/box-ui-elements/commit/6b9f8ef

[71]: https://github.com/box/box-ui-elements/issues/2827

[72]: https://github.com/box/box-ui-elements/commit/4097470

[73]: https://github.com/box/box-ui-elements/issues/2757

[74]: https://github.com/box/box-ui-elements/commit/a2ca346

[75]: https://github.com/box/box-ui-elements/issues/2766

[76]: https://github.com/box/box-ui-elements/commit/d4fa722

[77]: https://github.com/box/box-ui-elements/issues/2834

[78]: https://github.com/box/box-ui-elements/commit/0eeaa56

[79]: https://github.com/box/box-ui-elements/issues/2835

[80]: https://github.com/box/box-ui-elements/commit/490c6a7

[81]: https://github.com/box/box-ui-elements/issues/2831

[82]: https://github.com/box/box-ui-elements/commit/7d12731

[83]: https://github.com/box/box-ui-elements/issues/2820

[84]: https://github.com/box/box-ui-elements/commit/cea1854

[85]: https://github.com/box/box-ui-elements/issues/2782

[86]: https://github.com/box/box-ui-elements/commit/f9b78a1

[87]: https://github.com/box/box-ui-elements/issues/2781

[88]: https://github.com/box/box-ui-elements/issues/2828

[89]: https://github.com/box/box-ui-elements/commit/2aedeff

[90]: https://github.com/box/box-ui-elements/issues/2818

[91]: https://github.com/box/box-ui-elements/commit/4478c8f

[92]: https://github.com/box/box-ui-elements/issues/2851

[93]: https://github.com/box/box-ui-elements/commit/cbc5ca5

[94]: https://github.com/box/box-ui-elements/issues/2852

[95]: https://github.com/box/box-ui-elements/commit/5a981ab

[96]: https://github.com/box/box-ui-elements/issues/2821

[97]: https://github.com/box/box-ui-elements/commit/0b83339

[98]: https://github.com/box/box-ui-elements/issues/2759

[99]: https://github.com/box/box-ui-elements/commit/16804cd

[100]: https://github.com/box/box-ui-elements/issues/2786

[101]: https://github.com/box/box-ui-elements/commit/5d99d02

[102]: https://github.com/box/box-ui-elements/issues/2794

[103]: https://github.com/box/box-ui-elements/commit/2b5e398

[104]: https://github.com/box/box-ui-elements/issues/2809

[105]: https://github.com/box/box-ui-elements/commit/ea87483

[106]: https://github.com/box/box-ui-elements/issues/2795

[107]: https://github.com/box/box-ui-elements/commit/4eee84e

[108]: https://github.com/box/box-ui-elements/issues/2764

[109]: https://github.com/box/box-ui-elements/commit/5986d53

[110]: https://github.com/box/box-ui-elements/issues/2771

[111]: https://github.com/box/box-ui-elements/commit/2a16bb1

[112]: https://github.com/box/box-ui-elements/issues/2859

[113]: https://github.com/box/box-ui-elements/commit/9db1ee2

[114]: https://github.com/box/box-ui-elements/issues/2879

[115]: https://github.com/box/box-ui-elements/commit/8bff84f

[116]: https://github.com/box/box-ui-elements/issues/2801

[117]: https://github.com/box/box-ui-elements/commit/901229d

[118]: https://github.com/box/box-ui-elements/issues/2752

[119]: https://github.com/box/box-ui-elements/commit/e332bff

[120]: https://github.com/box/box-ui-elements/commit/d11b23a

[121]: https://github.com/box/box-ui-elements/issues/2807

[122]: https://github.com/box/box-ui-elements/commit/c278167

[123]: https://github.com/box/box-ui-elements/issues/2841

[124]: https://github.com/box/box-ui-elements/commit/76e999f

[125]: https://github.com/box/box-ui-elements/issues/2882

[126]: https://github.com/box/box-ui-elements/commit/50a94ab

[127]: https://github.com/box/box-ui-elements/issues/2844

[128]: https://github.com/box/box-ui-elements/commit/2ae1b1b

[129]: https://github.com/box/box-ui-elements/issues/2748

[130]: https://github.com/box/box-ui-elements/commit/83e5bba

[131]: https://github.com/box/box-ui-elements/issues/2751

[132]: https://github.com/box/box-ui-elements/commit/1128c54

[133]: https://github.com/box/box-ui-elements/issues/2731

[134]: https://github.com/box/box-ui-elements/issues/2733

[135]: https://github.com/box/box-ui-elements/issues/2735

[136]: https://github.com/box/box-ui-elements/issues/2736

[137]: https://github.com/box/box-ui-elements/issues/2738

[138]: https://github.com/box/box-ui-elements/issues/2747

[139]: https://github.com/box/box-ui-elements/issues/2750

[140]: https://github.com/box/box-ui-elements/issues/2775

[141]: https://github.com/box/box-ui-elements/issues/2776

[142]: https://github.com/box/box-ui-elements/issues/2860

[143]: https://github.com/box/box-ui-elements/commit/3109c43

[144]: https://github.com/box/box-ui-elements/issues/2861

[145]: https://github.com/box/box-ui-elements/commit/163d04c

[146]: https://github.com/box/box-ui-elements/issues/2878

[147]: https://github.com/box/box-ui-elements/commit/e8da1c0

[148]: https://github.com/box/box-ui-elements/issues/2762

[149]: https://github.com/box/box-ui-elements/commit/0befafd

[150]: https://github.com/box/box-ui-elements/issues/2746

[151]: https://github.com/box/box-ui-elements/commit/4d5c31e

[152]: https://github.com/box/box-ui-elements/issues/2883

[153]: https://github.com/box/box-ui-elements/commit/24a4714

[154]: https://github.com/box/box-ui-elements/issues/2869

[155]: https://github.com/box/box-ui-elements/commit/8f2ae01

[156]: https://github.com/box/box-ui-elements/issues/2792

[157]: https://github.com/box/box-ui-elements/commit/c3b911a

[158]: https://github.com/box/box-ui-elements/issues/2854

[159]: https://github.com/box/box-ui-elements/commit/f6631e2

[160]: https://github.com/box/box-ui-elements/issues/2876

[161]: https://github.com/box/box-ui-elements/commit/b4f5009

[162]: https://github.com/box/box-ui-elements/issues/2872

[163]: https://github.com/box/box-ui-elements/commit/1b1ed35

[164]: https://github.com/box/box-ui-elements/issues/2858

[165]: https://github.com/box/box-ui-elements/commit/1e5e775

[166]: https://github.com/box/box-ui-elements/issues/2857

[167]: https://github.com/box/box-ui-elements/issues/2888

[168]: https://github.com/box/box-ui-elements/commit/0da4950

[169]: https://github.com/box/box-ui-elements/issues/2850

[170]: https://github.com/box/box-ui-elements/commit/c0e89a5

[171]: https://github.com/box/box-ui-elements/issues/2779

[172]: https://github.com/box/box-ui-elements/commit/fca6935

[173]: https://github.com/box/box-ui-elements/issues/2739

[174]: https://github.com/box/box-ui-elements/commit/b412e29

[175]: https://github.com/box/box-ui-elements/issues/2785

[176]: https://github.com/box/box-ui-elements/commit/1f483fe

[177]: https://github.com/box/box-ui-elements/issues/2805

[178]: https://github.com/box/box-ui-elements/issues/2806

[179]: https://github.com/box/box-ui-elements/commit/f3ec3a0

[180]: https://github.com/box/box-ui-elements/issues/2830

[181]: https://github.com/box/box-ui-elements/commit/3f0ed16

[182]: https://github.com/box/box-ui-elements/issues/2783

[183]: https://github.com/box/box-ui-elements/commit/8acb7a6

[184]: https://github.com/box/box-ui-elements/issues/2774

[185]: https://github.com/box/box-ui-elements/commit/94978bd

[186]: https://github.com/box/box-ui-elements/issues/2770

[187]: https://github.com/box/box-ui-elements/commit/eaba5ef

[188]: https://github.com/box/box-ui-elements/issues/2758

[189]: https://github.com/box/box-ui-elements/commit/baa15af

[190]: https://github.com/box/box-ui-elements/issues/2756

[191]: https://github.com/box/box-ui-elements/commit/00c41da

[192]: https://github.com/box/box-ui-elements/issues/2760

[193]: https://github.com/box/box-ui-elements/commit/de8f6c1

[194]: https://github.com/box/box-ui-elements/issues/2761

[195]: https://github.com/box/box-ui-elements/commit/2a2ed2f

[196]: https://github.com/box/box-ui-elements/issues/2749

[197]: https://github.com/box/box-ui-elements/commit/22afcfa

[198]: https://github.com/box/box-ui-elements/issues/2744

[199]: https://github.com/box/box-ui-elements/issues/2745

[200]: https://github.com/box/box-ui-elements/issues/2743

[201]: https://github.com/users
