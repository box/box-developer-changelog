---
applied_at: '2020-09-11'
applies_to:
  - frontend
  - ui-elements
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-ui-elements/releases/tag/v12.0.0'
collapse: true
---

# Box UI Elements `v12.0.0` released

# [12.0.0][1] (2020-09-11)

### Bug Fixes

- **a11y:** Fix a11y bug for error showing up as tooltip ([#1989][2]) ([`64a611b`][3])
- **a11y:** Fixing keyboard trap in SelectField ([#2015][4]) ([`cf06b21`][5])
- **a11y:** Fixing lost focus when task modal is closed ([#2018][6]) ([`6c754a9`][7])
- **accessibility:** add labels and remove un-needed ids ([#1752][8]) ([`49145b7`][9])
- **activity-feed:** Check for component changes before scrolling ([#1807][10]) ([`677d49c`][11])
- **activity-feed:** Deleting task when comments disabled ([#2026][12]) ([`ef0482e`][13])
- **activityfeed:** 16px margin around version activity ([#2223][14]) ([`e6f6e50`][15])
- **annotations:** Avoid error when adding initial annotation on a file ([#2227][16]) ([`69cc186`][17])
- **annotations:** Avoid path rewrite when ActivitySidebar remounts ([#2163][18]) ([`942d196`][19])
- **annotations:** cleanup Preview when changing versions ([#2174][20]) ([`161b983`][21])
- **annotations:** fix styling for annotation cards ([#2107][22]) ([`71b6eb4`][23])
- **annotations:** Move logic to withSidebarAnnotations hoc ([#2169][24]) ([`f959ad0`][25])
- **annotations:** Prevent reselecting selected annotation on link click ([#2230][26]) ([`50c72b5`][27])
- **annotations:** Prevent setting focus on disabled annotation links ([#2232][28]) ([`7c2f8d7`][29])
- **annotations:** Reset version header when navigating preview ([#2182][30]) ([`c0fe3d3`][31])
- **annotations:** scroll to emitted annotation ([#2162][32]) ([`b850a57`][33])
- **annotations:** Update annotation resin component to be alphanumeric ([#2146][34]) ([`1738c33`][35])
- **annotations:** update url for prefix ([#2099][36]) ([`6de7b6c`][37])
- **api:** Update annotations api endpoints to use production path ([#2136][38]) ([`4fe8ff5`][39])
- **avatar:** check for mount status before calling promise ([#1987][40]) ([`12d059a`][41])
- **avatar:** strip any bracketed text when forming avatar initials ([#2170][42]) ([`e7bac77`][43])
- **baseselect:** click to close dropdown for safari and firefox ([#2075][44]) ([`a250fc3`][45])
- **checkbox:** fix tooltips on checkbox labels that wrap ([#1901][46]) ([`2348059`][47])
- **classification:** Added missing application restriction messages ([#1747][48]) ([`f3fca8e`][49])
- **classification:** Fixing messages for sharing restrictions ([#1783][50]) ([`de1c26c`][51])
- **classification:** Fixing typo on security controls message ([#1778][52]) ([`ead34d6`][53])
- **classification:** Fixing util function export ([#1982][54]) ([`76f2c6c`][55])
- **classification:** Updated Security Controls messages ([#1749][56]) ([`44bc333`][57])
- **classifications:** Classification tinycons have their own color map ([#2125][58]) ([`ded0e37`][59])
- **collaborator-avatars:** use standard position for external contacts ([#2164][60]) ([`3d52f4f`][61])
- **collabsiblesidebar:** add a label for expand/collapse button ([#2132][62]) ([`edd8dbe`][63])
- **collabsiblesidebar:** additional prop linkClassName ([#2200][64]) ([`a3aca4b`][65])
- **collabsiblesidebar:** Fix sidebar logo height and placement ([#2243][66]) ([`9237e6f`][67])
- **collabsiblesidebar:** sidebar focus states updated ([#2193][68]) ([`791daf6`][69])
- **collabsiblesidebar:** up/down arrow key for navigation ([#2221][70]) ([`97989d5`][71])
- **collapsible:** fix hover over issue in collapsed state ([#1859][72]) ([`bc3fddc`][73])
- **collapsiblesidebar:** Fix sidebar footer style and shadow ([#2244][74]) ([`b2f969f`][75])
- **collapsiblesidebar:** Update menu item to take custom content ([#2151][76]) ([`1777975`][77])
- **collapsiblesidebar:** Update menu item to take text and content ([#2158][78]) ([`08c58ef`][79])
- **collapsiblesidebar:** Update toggle button to take additional props ([#2166][80]) ([`da672df`][81])
- **collapsiblesidebarlogo:** Update component to take additional props ([#2147][82]) ([`ae25534`][83])
- **CollapsibleSidebarMenuItem:** fix ref hook ([#2201][84]) ([`d084aa8`][85])
- **colors:** correct orange base hex value ([#2126][86]) ([`2fd344a`][87])
- **contacts:** add inline docs & test warning fix for contact conversion ([#1984][88]) ([`2759edc`][89])
- **content-explorer:** Add URL parameter to folders API call ([#2020][90]) ([`6cd794d`][91])
- **content-explorer:** Align copy button in ShareDialog ([#2093][92]) ([`7fba52d`][93])
- **content-explorer:** fix prop usage warning in content explorer ([#1960][94]) ([`deb6207`][95])
- **content-explorer:** Get PDF reps in initial /folders call ([#2076][96]) ([`9fd8627`][97])
- **content-explorer:** remove inline-editing in metadata view ([#1829][98]) ([`fdf2692`][99])
- **content-picker:** Fix pagination and add tests ([#2081][100]) ([`f2affab`][101])
- **content-picker:** Fix shared-access width issue ([#2311][102]) ([`8dfaea3`][103])
- **content-preview:** allow updating token in elements api ([#2036][104]) ([`ffcb46f`][105])
- **content-sharing:** add regenerator-runtime to content sharing element ([#2313][106]) ([`27cc6b4`][107])
- **content-sharing:** Update disabled reasons field name ([#2312][108]) ([`897851d`][109])
- **content-sharing:** Use marker-based paging for users and groups ([#2314][110]) ([`d012b31`][111])
- **content-sidebar:** update styling for add task menu to match BDL ([#2294][112]) ([`8f7c745`][113])
- **content-uploader:** allow cancellation of folder uploads ([#2298][114]) ([`4908697`][115])
- **content-uploader:** allow existing sub-folders to be uploaded ([#2113][116]) ([`429a559`][117])
- **content-uploader:** Cancel retry timeout on pause ([#1814][118]) ([`52f4dde`][119])
- **content-uploader:** Fix 100% indicator being cropped ([#1999][120]) ([`7e17c55`][121])
- **content-uploader:** revert the fix for folder upload failure display ([#1755][122]) ([`1e5ca4f`][123])
- **copy:** update casing and language for shared links in components ([#2137][124]) ([`afcb589`][125])
- **css:** Add legacy class names to pill components ([#1750][126]) ([`21d1a60`][127])
- **css:** add new grid unit variable ([#1952][128]) ([`f28bad3`][129])
- **css:** Replace tilde imports ([#1780][130]) ([`1dffd64`][131])
- **css:** Update pill components in modals ([#1745][132]) ([`25fd95a`][133])
- **datepicker:** use locale preference for week start date ([#1572][134]) ([`f08501d`][135])
- **draftjseditor:** adding aria-labelledBy to comment input field ([#2056][136]) ([`87ed4cd`][137])
- **dropdown-menu:** Call onMenuClose on document clicks ([#2029][138]) ([`c630174`][139])
- **explorer:** All Files breadcrumb localization ([#2310][140]) ([`e875a2f`][141])
- **explorer:** Fix search dropdown too long ([#1930][142]) ([`0eec7e7`][143])
- **flow:** fix flowtypes for RadarAnimation and GuideTooltip ([#2206][144]) ([`141ff8f`][145])
- **flyout:** add non-DOM prop to default values in `FakeOverlay` ([#1957][146]) ([`3f568ff`][147])
- **form:** make description more customizable for components ([#1863][148]) ([`bee35a5`][149])
- **formik:** fix lost focus on radio buttons ([#1996][150]) ([`8414aa8`][151])
- **getfilesize:** locale is not being set to format number ([#2071][152]) ([`66e4a97`][153])
- **header-flyout:** update header flyout container overly to match BDL ([#2296][154]) ([`0c274f4`][155])
- **i18n:** formatted comp message ([#1736][156]) ([`851e418`][157])
- **i18n:** update translations ([#2043][158]) ([`e1a75a6`][159])
- **i18n:** update translations ([#2046][160]) ([`140983d`][161])
- **i18n:** update translations ([#2047][162]) ([`e6ff604`][163])
- **i18n:** update translations ([#2050][164]) ([`85c8aa6`][165])
- **i18n:** update translations ([#2054][166]) ([`9d12782`][167])
- **i18n:** update translations ([#2055][168]) ([`c19aac2`][169])
- **i18n:** update translations ([#2059][170]) ([`65602c8`][171])
- **i18n:** update translations ([#2060][172]) ([`b00c5e6`][173])
- **i18n:** update translations ([#2062][174]) ([`cb93a6a`][175])
- **i18n:** update translations ([#2069][176]) ([`aeb0a5d`][177])
- **i18n:** update translations ([#2082][178]) ([`0094316`][179])
- **i18n:** update translations ([#2086][180]) ([`833f86a`][181])
- **i18n:** update translations ([#2094][182]) ([`7b42192`][183])
- **i18n:** update translations ([#2102][184]) ([`35cca4a`][185])
- **i18n:** update translations ([#2108][186]) ([`be73530`][187])
- **i18n:** update translations ([#2115][188]) ([`35fea15`][189])
- **i18n:** update translations ([#2118][190]) ([`2bd37fa`][191])
- **i18n:** update translations ([#2191][192]) ([`8d1f261`][193])
- **i18n:** update translations ([#2246][194]) ([`5df342d`][195])
- **i18n:** update translations ([#2252][196]) ([`99e8627`][197])
- **i18n:** update translations ([#2254][198]) ([`2f1e384`][199])
- **i18n:** update translations ([#2256][200]) ([`6380f6d`][201])
- **i18n:** update translations ([#2258][202]) ([`bc84604`][203])
- **i18n:** update translations ([#2261][204]) ([`ae28a79`][205])
- **i18n:** update translations ([#2262][206]) ([`091be37`][207])
- **i18n:** update translations ([#2265][208]) ([`c5cce79`][209])
- **i18n:** update translations ([#2270][210]) ([`dbe92fd`][211])
- **i18n:** update translations ([#2277][212]) ([`77dd5e0`][213])
- **i18n:** update translations ([#2281][214]) ([`1346259`][215])
- **i18n:** update translations ([#2291][216]) ([`62fb604`][217])
- **i18n:** update translations ([#2317][218]) ([`2547816`][219])
- **icon:** add monotone external folder icon ([#2021][220]) ([`c9a98ae`][221])
- **icon:** Use image icon for heic and heif files ([#2038][222]) ([`9ea5731`][223])
- **image-tooltip:** hide ImageTooltip until image has loaded ([#2299][224]) ([`b419b4d`][225])
- **label-pill:** updating labelpill css and icon size ([#1970][226]) ([`5e64c5d`][227])
- **localstore:** handle error with access restriction to local storage ([#2269][228]) ([`cbff42f`][229])
- **menu:** update menu css to use mixins to update stnadard menus ([#2305][230]) ([`dd5d54d`][231])
- **metadata:** Fix misaligned multiselect dropdown ([#1793][232]) ([`cb23f52`][233])
- **metadata:** Fix misaligned singleselect dropdown ([#1801][234]) ([`294eef0`][235])
- **metadata-instance-editor:** allow specifying blur handler class names ([#2288][236]) ([`458ff8a`][237])
- **metadata-instance-editor:** fix test warning in componentDidUpdate() ([#1966][238]) ([`cd66721`][239])
- **modal:** Fix shared link setting modal input overflow ([#1928][240]) ([`1638b40`][241])
- **nudge:** add resin tags to nudge ([#2022][242]) ([`cd7b7dd`][243])
- **nudge:** style modifications per brand ([#1945][244]) ([`6832500`][245])
- **nudge:** update to use border radius style variable ([#1942][246]) ([`5a6f4a0`][247])
- **open-with:** fix onError and onExecute callback options ([#2306][248]) ([`c086f85`][249])
- **pill-selector-dropdown:** adds padding back for scrollable dropdowns ([#2196][250]) ([`ba64f8b`][251])
- **preview:** fix prefetch fails to trigger when collection has 2 items ([#1995][252]) ([`dcc7026`][253])
- **preview:** Fix preview header button spacing overrides ([#1732][254]) ([`0c7eb25`][255])
- **preview:** Prevent preview and sidebar overflowing parent container ([#2315][256]) ([`8fa604b`][257])
- **printing:** Fix print button on ContentPreview ([#1992][258]) ([`04fccd3`][259])
- **renderers:** Fix column header not centered vertically ([#1858][260]) ([`84a155d`][261])
- **searchform:** update icons with latest assests ([#2240][262]) ([`6e46a5c`][263])
- **select-field:** no longer selecting the wrong item ([#2131][264]) ([`c745331`][265])
- **select-field:** Reintroduce separators ([#1803][266]) ([`b64103d`][267])
- **select-field:** use custom selector for SearchForm component ([#2133][268]) ([`9950fd8`][269])
- **shared-link-settings:** match classification type to value ([#1962][270]) ([`f3b939c`][271])
- **sharedlinksection:** adding aria label to shared link input field ([#2052][272]) ([`a9098e6`][273])
- **sidebar:** Only render restrictions label when items exist ([#2251][274]) ([`072337b`][275])
- **sidebar:** Tasks and mentions should not have uploaders as options ([#1902][276]) ([`4cd0721`][277])
- **style:** move generic BDL overlay styles to shared mixin directory ([#2293][278]) ([`1802a93`][279])
- **tab:** tab content should not receive keyboard focus ([#2202][280]) ([`3b64ddb`][281])
- **table:** Fix broken test for makeSelectable HOC ([#1910][282]) ([`6262878`][283])
- **targeting:** fix lost click event for targeted tooltip children ([#2273][284]) ([`bbd09d5`][285])
- **targeting:** fix tooltip position in dropdown menu ([#1946][286]) ([`a30bbd9`][287])
- **targeting:** improve message context provider ([#1874][288]) ([`97a2e98`][289])
- **task-form:** change mock for datepicker to remove warnings from tests ([#1965][290]) ([`f58d075`][291])
- **task-form:** enable any/all checkbox for completion rule with groups ([#1879][292]) ([`2e89f8f`][293])
- **tasks:** remove assign tasks to groups FF ([#2127][294]) ([`85db944`][295])
- **test:** Fix date picker test and add new test ([#1907][296]) ([`2da2a3a`][297])
- **test:** Fix tests using rewire ([#1914][298]) ([`b7bf599`][299])
- **textinput:** have TextInput respect description accessibility ([#1835][300]) ([`9d0d244`][301])
- **textinputwithcopybutton:** clicks on URL within USM should select all ([#1926][302]) ([`39deef9`][303])
- **theme:** Adjusting scroll shadow value. Improving theme storybook ([#2039][304]) ([`c7e1560`][305])
- **thumbnail-card:** fix flow issue with thumbnailCardDetails ([#2285][306]) ([`bce03b5`][307])
- **thumbnail-card:** suppress flow issue ([#2286][308]) ([`a705508`][309])
- **thumbnail-card:** use different flow typing for textRef ([#2283][310]) ([`50c34b5`][311])
- **tooltip:** remove implementation in tooltip flow files ([#1988][312]) ([`9713e8a`][313])
- **tooltip:** tooltip stop event bubble across whole tooltip ([#2024][314]) ([`845934c`][315])
- **typescript:** migrate to explicit exports ([#1857][316]) ([`6c36428`][317])
- **typescript:** remove prop exports ([#1866][318]) ([`52caa30`][319])
- **unified-share-modal:** adding aria-label attribute to email button ([#2304][320]) ([`fc62bec`][321])
- **upload:** fallback sha1 calculation for IE11 using new package ([#2061][322]) ([`ce71755`][323])
- **upload:** sha1 calculation of ie-11 using new package ([#2048][324]) ([`d91f2a6`][325])
- **uploader:** fix drag and drop of files in content uploader for IE11 ([#2209][326]) ([`79f6a02`][327])
- **uploads:** fix auto retry after timeout ([#1785][328]) ([`c3c601d`][329])
- **uploads:** resuming an upload while disconnected ([#1726][330]) ([`9bd825a`][331])
- **usm:** Check view permissions on classification in share modal ([#1898][332]) ([`3eac95e`][333])
- **usm:** fix space in between modal title and classification badge ([#2295][334]) ([`bec5104`][335])
- **usm:** handle create disabled shared link toggle tooltip ([#2040][336]) ([`1245947`][337])
- **usm:** override padding to fix usm scrollable dropdown ([#2320][338]) ([`5907a63`][339])
- **usm:** prevent component updates from continuing unabated ([#2095][340]) ([`13a5519`][341])
- **usm:** Remove base styles; enable loading indicator ([#2155][342]) ([`ec58322`][343])
- **utils:** if openUrlInsideIframe fails it will fail everytime after ([#2121][344]) ([`f048e89`][345])
- **versions:** show version uploaded by File Request ([#2111][346]) ([`2d57515`][347])
- **virtualized-table:** Enforce fixed height on draggable table ([#2148][348]) ([`162b1e5`][349])
- **virtualized-table:** Fix upside down sort icon ([#1908][350]) ([`b1743b8`][351])
- storybook publishing to gh-pages ([#1746][352]) ([`fecc4c6`][353])

### chore

- **node:** Upgrade node dependency to 12.x ([#1875][354]) ([`4fba5ad`][355])
- upgrades react-intl dev dependency ([#1762][356]) ([`548f5ea`][357])

### Code Refactoring

- **css:** Add backwards-compatible names to common components ([#1917][358]) ([`939e089`][359])

### Features

- **annotation:** Annotation reflect isPending and error states ([#2152][360]) ([`522d735`][361])
- **annotation:** scroll into view on activeEntryId change ([#2105][362]) ([`1123db9`][363])
- **annotation:** View annotations on previous file version ([#2117][364]) ([`c4db1b2`][365])
- **annotations:** Add context info to annotations events ([#2224][366]) ([`f9aede1`][367])
- **annotations:** Add delete flow ([#2135][368]) ([`b3ed502`][369])
- **annotations:** add new annotation to sidebar ([#2090][370]) ([`9296c73`][371])
- **annotations:** add region annotation icon ([#2195][372]) ([`239739f`][373])
- **annotations:** bring Activity sidebar into view on select ([#2159][374]) ([`745f697`][375])
- **annotations:** Call onError callback when annotation creation fails ([#2217][376]) ([`43d61d1`][377])
- **annotations:** Handle API fetch error ([#2172][378]) ([`4858ac4`][379])
- **annotations:** Handle file versions unavailable ([#2198][380]) ([`8f73c26`][381])
- **annotations:** handle fileVersionId when active annotation changes ([#2173][382]) ([`65a149c`][383])
- **annotations:** Improve annotation activity card interactions ([#2231][384]) ([`a04093c`][385])
- **annotations:** Integrate annotation api with Feed ([#2104][386]) ([`db2b0da`][387])
- **annotations:** Reflect deeplink annotations on hard load ([#2100][388]) ([`0149613`][389])
- **annotations:** Rewrite deep-linked file version to current ([#2153][390]) ([`c55949d`][391])
- **annotations:** Show versioned annotation activity cards ([#2109][392]) ([`d46197c`][393])
- **annotations:** support partial link to file versions ([#2130][394]) ([`6299771`][395])
- **api:** Add initial annotations api module and factory ([#2089][396]) ([`aefef0b`][397])
- **archive:** Add json to rep hint ([#1818][398]) ([`324c4be`][399])
- **assets:** add/modify icons to reflect latest designs ([#2140][400]) ([`3845824`][401])
- **assets:** update assets to latest from design ([#2220][402]) ([`738ec5e`][403])
- **assets:** update assets to latest from design ([#2236][404]) ([`5f07fff`][405])
- **assets:** update assets to latest from design ([#2292][406]) ([`ead150b`][407])
- **assets:** update assets to latest from design ([#2308][408]) ([`41c67a5`][409])
- **assets:** update assets to latest from design ([#2319][410]) ([`79beb99`][411])
- **assets:** update latest assets from design ([#2275][412]) ([`167f9cf`][413])
- **assets:** update to latest assets from design ([#2154][414]) ([`72c5e59`][415])
- **assets:** update to latest assets from design ([#2180][416]) ([`47dec94`][417])
- **assets:** update to latest assets from design ([#2257][418]) ([`31c8b99`][419])
- **avatar:** add support for showing avatars with a badge for external ([#2149][420]) ([`60ff32d`][421])
- **classification:** New classification badge design ([#2112][422]) ([`b608111`][423])
- **classification:** New solid security classification icon ([#2142][424]) ([`627fd4c`][425])
- **classification:** Render classification modified info when provided ([#2250][426]) ([`73b8ea5`][427])
- **collapsible-sidebar:** Adding collapsible sidebar ([#2110][428]) ([`79e8a31`][429])
- **contact-datalist-item:** add support for avatars in the dropdown ([#2150][430]) ([`605d008`][431])
- **content-explorer:** add optional prop to content explorer modal ([#2234][432]) ([`b5166a8`][433])
- **content-explorer:** custom status to action buttons ([#2194][434]) ([`7a96ed7`][435])
- **content-sharing:** Add config for email button ([#2278][436]) ([`4bb7136`][437])
- **content-sharing:** Add ContentSharing Element ([#2192][438]) ([`0b233b5`][439])
- **content-sharing:** Add ES6 wrapper ([#2264][440]) ([`7dc2fc0`][441])
- **content-sharing:** Add loading states to ContentSharing ([#2268][442]) ([`49dc47d`][443])
- **content-sharing:** Close modal after certain actions ([#2274][444]) ([`0c2445c`][445])
- **content-sharing:** Display avatars ([#2307][446]) ([`d9d0820`][447])
- **content-sharing:** Display collaborators ([#2226][448]) ([`4939faf`][449])
- **content-sharing:** Display contacts in collaborator form ([#2235][450]) ([`dafc53f`][451])
- **content-sharing:** Display shared link settings ([#2229][452]) ([`179bd93`][453])
- **content-sharing:** Enable creation of shared links ([#2211][454]) ([`cef7569`][455])
- **content-sharing:** Enable permissions level changes ([#2219][456]) ([`600558a`][457])
- **content-sharing:** Enable shared link access level changes ([#2215][458]) ([`d79f79e`][459])
- **content-sharing:** Enable shared link deletion ([#2214][460]) ([`914db7a`][461])
- **content-sharing:** Filter out app users ([#2290][462]) ([`35e24c1`][463])
- **content-sharing:** Invite collaborators ([#2259][464]) ([`58df161`][465])
- **content-sharing:** Launch ContentSharing from a custom button ([#2266][466]) ([`ce3716a`][467])
- **content-sharing:** Retrieve allowed access levels from the Item API ([#2279][468]) ([`2990b37`][469])
- **content-sharing:** Retrieve autofilled groups ([#2289][470]) ([`74b2924`][471])
- **content-sharing:** Retrieve classifications for items ([#2271][472]) ([`843e76d`][473])
- **content-sharing:** Update shared link settings ([#2253][474]) ([`69a6826`][475])
- **contentpreview:** Make ContentPreview location aware ([#2124][476]) ([`d8ba843`][477])
- **draftjs:** Extract functions into utils for other libs to reuse ([#2106][478]) ([`fc8110e`][479])
- **draftjs:** Move more functions into utils ([#2145][480]) ([`f7d60a8`][481])
- **flyout:** remove styles for flyout arrows ([#2316][482]) ([`fcaa35b`][483])
- **guidetooltip:** add GuideTooltip component ([#2203][484]) ([`023f0c1`][485])
- **i18n:** implement a number abbreviation formatter ([#1923][486]) ([`a9baa01`][487])
- **icons:** update icon assets ([#2134][488]) ([`792142d`][489])
- **icons:** update icon assets ([#2167][490]) ([`0c30d23`][491])
- **log:** Add iscurrent resin tag for AnnotationActivityLink ([#2255][492]) ([`e64994e`][493])
- **menu:** add onOpen prop to SubmenuItem ([#2128][494]) ([`a3e04da`][495])
- **menu:** Additional prop to override the default menu selector ([#2070][496]) ([`f9751d1`][497])
- **metadata-view:** Add name field by default to md query ([#2300][498]) ([`cae1013`][499])
- **metadata-views:** Support adding removing values ([#2284][500]) ([`dc856fa`][501])
- **permissions:** Add permissions checks to annotations api endpoints ([#2138][502]) ([`2951dc4`][503])
- **pill-selector-dropdown:** add ability to set round pill image urls ([#2190][504]) ([`aad1af1`][505])
- **pill-selector-dropdown:** add new avatar pill for pill selector ([#2171][506]) ([`2a3792a`][507])
- **pill-selector-dropdown:** update styles to latest design ([#2179][508]) ([`057efed`][509])
- **preview:** Add currentFileVersionId in preview options ([#2249][510]) ([`b527df8`][511])
- **preview:** add ftux tooltip to AdditionalTab ([#2247][512]) ([`f8a4ef0`][513])
- **preview:** use uploader_display_name for sidebar uploader info ([#2091][514]) ([`bcc909e`][515])
- **radaranimation:** add offset prop ([#2204][516]) ([`21a67ce`][517])
- **radaranimation:** spread rest to div ([#2184][518]) ([`b9f1306`][519])
- **sandbox-banner:** add SandboxBanner component ([#2263][520]) ([`556fe48`][521])
- **select-field:** add search input to BaseSelectField ([#2123][522]) ([`9188941`][523])
- **sidebar:** Remove closing sidebar behavior by clicking nav buttons ([#2187][524]) ([`e56eb88`][525])
- **sidebar:** Update activity feed empty state illustration ([#2242][526]) ([`00573f8`][527])
- **sidebar:** Updated empty state with annotations ([#2222][528]) ([`effdd73`][529])
- **targeting:** Add class to targeted span ([#2280][530]) ([`1351fcc`][531])
- **targeting:** update targeting feature ([#2228][532]) ([`07154ca`][533])
- **task:** use atomic api for create/update task, tack-link, and task-collab ([#2143][534]) ([`9ae2349`][535])
- **tasks:** Add resin for multifiles ([#2120][536]) ([`77db92d`][537])
- **thumbnail-card:** Add actionItem to ThumbnailCard ([#2225][538]) ([`d3af687`][539])
- **thumbnail-card:** add hover state to thumbnail card ([#2161][540]) ([`a649e72`][541])
- **thumbnail-card:** User sees tooltip on hover thumbnail card ([#2276][542]) ([`435eb2f`][543])
- **tooltip:** Add offset prop ([#2183][544]) ([`3fc5a59`][545])
- **unified-share-modal:** Add fuzzy search to USM ([#1932][546]) ([`e9d7c3b`][547])
- **unified-share-modal:** enable round pills ([#2188][548]) ([`df9e5af`][549])
- **unified-share-modal:** enable showing non-image avatars for contacts ([#2156][550]) ([`c0e9605`][551])
- **unified-share-modal:** support method to get image url for avatars ([#2186][552]) ([`5a73b08`][553])
- **uploads:** add upload fallback logic  ([#2287][554]) ([`ba2eb72`][555])
- **usm:** add ability to trigger copy to clipboard on modal open ([#2085][556]) ([`e132dd9`][557])
- **usm:** Separate USM into two components ([#2129][558]) ([`65b44c6`][559])
- **virtualized-table:** Adding DraggableVirtualizedTable component ([#2141][560]) ([`6eb3216`][561])
- **visual-tooltip:** Add in VisualTooltip component ([#2165][562]) ([`a0196c7`][563])
- add clear option to BaseSelectField ([#2067][564]) ([`5c3c4d8`][565])
- **annotations:** handle annotator events ([#2080][566]) ([`7ffb448`][567])
- **annotations:** Provide Annotations context ([#2064][568]) ([`2ad3676`][569])
- **annotations:** reset annotator context when destroying preview ([#2083][570]) ([`bb68144`][571])
- **annotations:** update url on annotation selection ([#2079][572]) ([`98434cd`][573])
- **assets:** add asset importer script ([#1904][574]) ([`255e1a8`][575])
- **assets:** add latest assets from design ([#2016][576]) ([`81ec28d`][577])
- **assets:** add new and update existing assets ([#1843][578]) ([`887a9ef`][579])
- **assets:** Import latest assets from design ([#1792][580]) ([`a356c21`][581])
- **assets:** import latest SVG assets from design ([#1891][582]) ([`ed96761`][583])
- **assets:** import latest SVG assets from design ([#2051][584]) ([`2d76f2d`][585])
- **assets:** import latests SVG assets from design ([#2006][586]) ([`05414a9`][587])
- **avatar:** size options and composition fixes ([#1951][588]) ([`e1749ac`][589])
- **badge:** Add new Trial Badge component ([#1833][590]) ([`efa7b93`][591])
- **base-select:** Add ability to use letter for menu ([#1788][592]) ([`0d1b520`][593])
- **classification:** Add Classification Security Controls ([#1738][594]) ([`180f2b4`][595])
- **classification:** add tooltip to display all applications name list ([#2035][596]) ([`fa787a4`][597])
- **classification:** Adding classification badge icon ([#2037][598]) ([`da7f149`][599])
- **classification:** Adding loading indicator for SecurityControls ([#1760][600]) ([`fd5271b`][601])
- **classification:** Configurable colors for Classification components ([#1944][602]) ([`0c85f02`][603])
- **classification:** Integrating Security Controls with Classification ([#1743][604]) ([`fe9dae6`][605])
- **classification:** Map classification colorID to color name and value ([#1954][606]) ([`f141874`][607])
- **classification:** Remove shield icon from security controls ([#2010][608]) ([`3cc0ad1`][609])
- **collapsible:** display action button when collapsed and hovered ([#1850][610]) ([`ffb8379`][611])
- **colors:** Added new BDL colors ([#1981][612]) ([`eda45ff`][613])
- **content-explorer:** Generate thumbnails in grid view ([#1486][614]) ([`fd93535`][615])
- **content-explorer:** Update metadata query API params ([#1805][616]) ([`c9fcd00`][617])
- **content-sidebar:** Add annotations activity type ([#2063][618]) ([`6653d15`][619])
- **content-sidebar:** Support multifile tasks ([#2049][620]) ([`e29f00b`][621])
- **content-uploader:** Add tracking on upload resume buttons ([#1799][622]) ([`dfb52b9`][623])
- **content-uploader:** added onProgress callback in handleUploadProgress ([#1825][624]) ([`7efb090`][625])
- **content-uploader:** batch onComplete and add onResume prop ([#1786][626]) ([`f04f936`][627])
- **content-uploader:** batching onComplete for resumable uploads ([#1791][628]) ([`2cfdbba`][629])
- **content-uploader:** Expose contentUploaderProps in Explorer & Picker ([#1876][630]) ([`c14c756`][631])
- **content-uploader:** fix folder upload failure display and add a resume callback ([#1719][632]) ([`66760cc`][633])
- **content-uploader:** remove resin and add new onClick callbacks ([#1860][634]) ([`49edf06`][635])
- **dropdown-menu:** dropdown menu can elect to close on event bubble ([#2012][636]) ([`3252e28`][637])
- **i18n:** deprecate FormattedCompMessage and Plural ([#1963][638]) ([`bee300f`][639])
- **icon:** import line icons from design ([#1806][640]) ([`4995182`][641])
- **icon:** update clock icon for shared link expiry ([#1741][642]) ([#1742][643]) ([`a0eb0b9`][644])
- **icon:** update icon assets ([#2077][645]) ([`d596cfe`][646])
- **icons:** Add IconPlusRound and IconCaretRound for collections ([#1735][647]) ([`999d4f8`][648])
- **icons:** add monotone variant for ItemIcon ([#1939][649]) ([`619da43`][650])
- **icons:** add Relay flag icon ([#1794][651]) ([`052d4bc`][652])
- **icons:** integrate new file and folder icons ([#1729][653]) ([`3251e98`][654])
- **label-pill:** add LabelPill component ([#1909][655]) ([`a1b1929`][656])
- **label-pill:** size options and composition fixes ([#1950][657]) ([`21f3091`][658])
- **metadata-views:** Add box-shadow for scrollable content ([#1838][659]) ([`84ee19a`][660])
- **metadata-views:** Add pagination to metadata view ([#1854][661]) ([`fd7e97c`][662])
- **metadata-views:** Data types for inline edit in metadata view ([#1716][663]) ([`17af052`][664])
- **metadata-views:** Save inline edited metadata ([#1737][665]) ([`a4fec18`][666])
- **metadata-views:** Save inline edited metadata using fields feature ([#1920][667]) ([`1e36e51`][668])
- **nudge:** add in nudge component ([#1870][669]) ([`cd708f9`][670])
- **nudge:** update nudge based on modified designs ([#2053][671]) ([`0d4f396`][672])
- **preview:** Update default preview version to 2.26.1 ([#1761][673]) ([`ed14b9c`][674])
- **quick-search:** Allow divider index and update separator char ([#1769][675]) ([`50eba71`][676])
- **radio-group:** Add support for custom radio button components ([#1959][677]) ([`e49ed16`][678])
- **readabletime:** add support for uppercase timestamps ([#1983][679]) ([`5d24051`][680])
- **renderers:** Change renderers empty value to '--' ([#1824][681]) ([`9a5fa20`][682])
- **select-field:** Use Popper to implement dropdown ([#1715][683]) ([`2891383`][684])
- **siderail:** take in both controlsFormat as BTN and TOOLTIP ([#1819][685]) ([`5d3623f`][686])
- **storybook:** add in breadcrumb component ([#1865][687]) ([`4a2eb5a`][688])
- **storybook:** Create stories for Avatar ([#1841][689]) ([`5267bc8`][690])
- **storybook:** Create stories for Badge ([#1842][691]) ([`c73752c`][692])
- **storybook:** Create stories for components with disabled states ([#1798][693]) ([`0d2188b`][694])
- **storybook:** Create stories for Form Elements ([#1852][695]) ([`dbaf765`][696])
- **storybook:** Create stories for Menu-based components ([#1849][697]) ([`d4da918`][698])
- **storybook:** storybook integration ([#1731][699]) ([`d98028c`][700])
- **targeting-ftux:** add targeting and ftux context ([#1844][701]) ([`d17cd42`][702])
- **theme:** Adding a new theme component and provider ([#1836][703]) ([`6f3746d`][704])
- typescript infrastructure and few components conversion ([#1797][705]) ([`d04ce54`][706])
- **storybook:** Create stories for modals ([#1830][707]) ([`aa5f475`][708])
- **storybook:** Create Storybook stories for several components ([#1784][709]) ([`77db364`][710])
- **storybook:** stories for radar and loading indicator ([#1877][711]) ([`8fba21a`][712])
- **table:** Add option for blur detection to selectable tables ([#2032][713]) ([`417f873`][714])
- **targeting:** add targetingContextProvider ([#1845][715]) ([`4aea13a`][716])
- **targeting:** add types used for targeting ([#1851][717]) ([`5f23139`][718])
- **taskform:** error handling for groups ([#1882][719]) ([`5bd1aac`][720])
- **tasks:** add check for proper tooltip when allowing group assignees ([#1821][721]) ([`4bf992e`][722])
- **tasks:** allow selecting groups for task assignment ([#1810][723]) ([`d507f03`][724])
- **tasks:** updating task layout in preview ([#1947][725]) ([`249d457`][726])
- **tasks:** using expand groups api endpoint ([#1809][727]) ([`3d9a129`][728])
- **textarea:** add description to TextArea component ([#1837][729]) ([`49c2585`][730])
- **theme:** add progressbar and scroll shadow ([#2031][731]) ([`a0655d8`][732])
- **theme:** Updating theming logic per design ([#1903][733]) ([`785bc6a`][734])
- **tooltip:** add custom position for tooltip ([#1990][735]) ([`95b3232`][736])
- **tooltip:** Menu can recognize MenuItem wrapped by tooltip ([#2004][737]) ([`a0730df`][738])
- **tooltip:** Tooltip can stop event propagation ([#2005][739]) ([`97df64e`][740])
- **typescript:** migrate plain button ([#1885][741]) ([`34a5d76`][742])
- **upload:** Allow file description option for upload ([#1964][743]) ([`464dd76`][744])
- **uploads:** add conflictCallback option ([#2041][745]) ([`180273f`][746])
- **uploads:** save the mb uploaded for an item on resume ([#1846][747]) ([`8b553db`][748])
- **usm:** add ability to create shared links on modal open ([#2074][749]) ([`0805619`][750])
- **usm:** Add support for classification colors ([#1980][751]) ([`80f2dac`][752])
- **usm:** Add support for sharing block message ([#2045][753]) ([`2715c7e`][754])
- **virtualized-table:** add virtualized-table feature ([#1770][755]) ([`a868fc0`][756])

### BREAKING CHANGES

- **open-with:** onError & onExecute options will now overwrite these ES6 wrapper methods
- **targeting:** keeps the targeted wrapped component in DOM relying on the isShown prop

Co-authored-by: mergify[bot] [37929162+mergify\[bot\]@users.noreply.github.com][757]

- **targeting:** several files have been added/removed in the features/targeting folder and targetingApi type has been updated

Co-authored-by: mergify[bot] [37929162+mergify\[bot\]@users.noreply.github.com][757]

- **i18n:** Adds [**@box/cldr-data**][758] and intl-messageformat as peerDependencies

- This formatter is locale-sensitive.
- Implemented in typescript, along with ts unit tests
- Uses v34.2.0 of [**@box/cldr-data**][758]
- Intl.NumberFormat does not work properly on node &lt; 12.X. On the
    CI machines, it is using node 10.10.0, so we need the formatjs polyfill
    to get unit tests to pass properly.
- Update to [**@box/frontend**][759] v8.0.0

- **upload:** add js-sha1 package peer dependency

- **css:** Many CSS and JS/TSX files have been updated to include bdl-namespaced class names.

- chore(css): Add backwards-compatible names to common components

- **css:** Many CSS and JS/TSX files have been updated to include bdl-namespaced class names.

- chore(css): Add backwards-compatible names to common components

- chore(css): Add backwards-compatible names to common components

- refactor(css): Add backwards-compatible names to common components

- refactor(css): Add backwards-compatible names to common components

- refactor(css): Add backwards-compatible names to common components

Replace straight apostrophes with curly apostrophes in the UnifiedShareModal,
which allows values in messages to be parsed correctly. This follows the
ICU Message Format syntax changes introduced in react-intl v3.

Co-authored-by: mergify[bot] [37929162+mergify\[bot\]@users.noreply.github.com][757]

- **node:** Minimum version of node for box-ui-elements bumped to 10.x

- chore(node): Removed old version of fsevents from yarn.lock

Co-authored-by: mergify[bot] [37929162+mergify\[bot\]@users.noreply.github.com][757]

- Peer deps have been updated and added.

- chore: upgrading to new [**@box/frontend**][759]

- fix: merge conflicts

- fix: tsconfig should list its own path

relative to this current project. See [Microsoft/TypeScript#25430][760]

- **assets:** Import paths for previous file/folder icons has changed, and will need to be
    updated to support the new structure. Users of the ItemIcon and FileIcon components will not need to
    make any changes.

- docs(icons): update documented icon name to match component

- **select-field:** This will move the BaseSelectField to use Popper

- Peer dependency upgrade.

- **icon:** The clock icon viewbox is now 0x0x16x16 instead of
    0x0x15x15. Default icon color updated.

[1]: https://github.com/box/box-ui-elements/compare/v11.0.0...v12.0.0

[2]: https://github.com/box/box-ui-elements/issues/1989

[3]: https://github.com/box/box-ui-elements/commit/64a611b

[4]: https://github.com/box/box-ui-elements/issues/2015

[5]: https://github.com/box/box-ui-elements/commit/cf06b21

[6]: https://github.com/box/box-ui-elements/issues/2018

[7]: https://github.com/box/box-ui-elements/commit/6c754a9

[8]: https://github.com/box/box-ui-elements/issues/1752

[9]: https://github.com/box/box-ui-elements/commit/49145b7

[10]: https://github.com/box/box-ui-elements/issues/1807

[11]: https://github.com/box/box-ui-elements/commit/677d49c

[12]: https://github.com/box/box-ui-elements/issues/2026

[13]: https://github.com/box/box-ui-elements/commit/ef0482e

[14]: https://github.com/box/box-ui-elements/issues/2223

[15]: https://github.com/box/box-ui-elements/commit/e6f6e50

[16]: https://github.com/box/box-ui-elements/issues/2227

[17]: https://github.com/box/box-ui-elements/commit/69cc186

[18]: https://github.com/box/box-ui-elements/issues/2163

[19]: https://github.com/box/box-ui-elements/commit/942d196

[20]: https://github.com/box/box-ui-elements/issues/2174

[21]: https://github.com/box/box-ui-elements/commit/161b983

[22]: https://github.com/box/box-ui-elements/issues/2107

[23]: https://github.com/box/box-ui-elements/commit/71b6eb4

[24]: https://github.com/box/box-ui-elements/issues/2169

[25]: https://github.com/box/box-ui-elements/commit/f959ad0

[26]: https://github.com/box/box-ui-elements/issues/2230

[27]: https://github.com/box/box-ui-elements/commit/50c72b5

[28]: https://github.com/box/box-ui-elements/issues/2232

[29]: https://github.com/box/box-ui-elements/commit/7c2f8d7

[30]: https://github.com/box/box-ui-elements/issues/2182

[31]: https://github.com/box/box-ui-elements/commit/c0fe3d3

[32]: https://github.com/box/box-ui-elements/issues/2162

[33]: https://github.com/box/box-ui-elements/commit/b850a57

[34]: https://github.com/box/box-ui-elements/issues/2146

[35]: https://github.com/box/box-ui-elements/commit/1738c33

[36]: https://github.com/box/box-ui-elements/issues/2099

[37]: https://github.com/box/box-ui-elements/commit/6de7b6c

[38]: https://github.com/box/box-ui-elements/issues/2136

[39]: https://github.com/box/box-ui-elements/commit/4fe8ff5

[40]: https://github.com/box/box-ui-elements/issues/1987

[41]: https://github.com/box/box-ui-elements/commit/12d059a

[42]: https://github.com/box/box-ui-elements/issues/2170

[43]: https://github.com/box/box-ui-elements/commit/e7bac77

[44]: https://github.com/box/box-ui-elements/issues/2075

[45]: https://github.com/box/box-ui-elements/commit/a250fc3

[46]: https://github.com/box/box-ui-elements/issues/1901

[47]: https://github.com/box/box-ui-elements/commit/2348059

[48]: https://github.com/box/box-ui-elements/issues/1747

[49]: https://github.com/box/box-ui-elements/commit/f3fca8e

[50]: https://github.com/box/box-ui-elements/issues/1783

[51]: https://github.com/box/box-ui-elements/commit/de1c26c

[52]: https://github.com/box/box-ui-elements/issues/1778

[53]: https://github.com/box/box-ui-elements/commit/ead34d6

[54]: https://github.com/box/box-ui-elements/issues/1982

[55]: https://github.com/box/box-ui-elements/commit/76f2c6c

[56]: https://github.com/box/box-ui-elements/issues/1749

[57]: https://github.com/box/box-ui-elements/commit/44bc333

[58]: https://github.com/box/box-ui-elements/issues/2125

[59]: https://github.com/box/box-ui-elements/commit/ded0e37

[60]: https://github.com/box/box-ui-elements/issues/2164

[61]: https://github.com/box/box-ui-elements/commit/3d52f4f

[62]: https://github.com/box/box-ui-elements/issues/2132

[63]: https://github.com/box/box-ui-elements/commit/edd8dbe

[64]: https://github.com/box/box-ui-elements/issues/2200

[65]: https://github.com/box/box-ui-elements/commit/a3aca4b

[66]: https://github.com/box/box-ui-elements/issues/2243

[67]: https://github.com/box/box-ui-elements/commit/9237e6f

[68]: https://github.com/box/box-ui-elements/issues/2193

[69]: https://github.com/box/box-ui-elements/commit/791daf6

[70]: https://github.com/box/box-ui-elements/issues/2221

[71]: https://github.com/box/box-ui-elements/commit/97989d5

[72]: https://github.com/box/box-ui-elements/issues/1859

[73]: https://github.com/box/box-ui-elements/commit/bc3fddc

[74]: https://github.com/box/box-ui-elements/issues/2244

[75]: https://github.com/box/box-ui-elements/commit/b2f969f

[76]: https://github.com/box/box-ui-elements/issues/2151

[77]: https://github.com/box/box-ui-elements/commit/1777975

[78]: https://github.com/box/box-ui-elements/issues/2158

[79]: https://github.com/box/box-ui-elements/commit/08c58ef

[80]: https://github.com/box/box-ui-elements/issues/2166

[81]: https://github.com/box/box-ui-elements/commit/da672df

[82]: https://github.com/box/box-ui-elements/issues/2147

[83]: https://github.com/box/box-ui-elements/commit/ae25534

[84]: https://github.com/box/box-ui-elements/issues/2201

[85]: https://github.com/box/box-ui-elements/commit/d084aa8

[86]: https://github.com/box/box-ui-elements/issues/2126

[87]: https://github.com/box/box-ui-elements/commit/2fd344a

[88]: https://github.com/box/box-ui-elements/issues/1984

[89]: https://github.com/box/box-ui-elements/commit/2759edc

[90]: https://github.com/box/box-ui-elements/issues/2020

[91]: https://github.com/box/box-ui-elements/commit/6cd794d

[92]: https://github.com/box/box-ui-elements/issues/2093

[93]: https://github.com/box/box-ui-elements/commit/7fba52d

[94]: https://github.com/box/box-ui-elements/issues/1960

[95]: https://github.com/box/box-ui-elements/commit/deb6207

[96]: https://github.com/box/box-ui-elements/issues/2076

[97]: https://github.com/box/box-ui-elements/commit/9fd8627

[98]: https://github.com/box/box-ui-elements/issues/1829

[99]: https://github.com/box/box-ui-elements/commit/fdf2692

[100]: https://github.com/box/box-ui-elements/issues/2081

[101]: https://github.com/box/box-ui-elements/commit/f2affab

[102]: https://github.com/box/box-ui-elements/issues/2311

[103]: https://github.com/box/box-ui-elements/commit/8dfaea3

[104]: https://github.com/box/box-ui-elements/issues/2036

[105]: https://github.com/box/box-ui-elements/commit/ffcb46f

[106]: https://github.com/box/box-ui-elements/issues/2313

[107]: https://github.com/box/box-ui-elements/commit/27cc6b4

[108]: https://github.com/box/box-ui-elements/issues/2312

[109]: https://github.com/box/box-ui-elements/commit/897851d

[110]: https://github.com/box/box-ui-elements/issues/2314

[111]: https://github.com/box/box-ui-elements/commit/d012b31

[112]: https://github.com/box/box-ui-elements/issues/2294

[113]: https://github.com/box/box-ui-elements/commit/8f7c745

[114]: https://github.com/box/box-ui-elements/issues/2298

[115]: https://github.com/box/box-ui-elements/commit/4908697

[116]: https://github.com/box/box-ui-elements/issues/2113

[117]: https://github.com/box/box-ui-elements/commit/429a559

[118]: https://github.com/box/box-ui-elements/issues/1814

[119]: https://github.com/box/box-ui-elements/commit/52f4dde

[120]: https://github.com/box/box-ui-elements/issues/1999

[121]: https://github.com/box/box-ui-elements/commit/7e17c55

[122]: https://github.com/box/box-ui-elements/issues/1755

[123]: https://github.com/box/box-ui-elements/commit/1e5ca4f

[124]: https://github.com/box/box-ui-elements/issues/2137

[125]: https://github.com/box/box-ui-elements/commit/afcb589

[126]: https://github.com/box/box-ui-elements/issues/1750

[127]: https://github.com/box/box-ui-elements/commit/21d1a60

[128]: https://github.com/box/box-ui-elements/issues/1952

[129]: https://github.com/box/box-ui-elements/commit/f28bad3

[130]: https://github.com/box/box-ui-elements/issues/1780

[131]: https://github.com/box/box-ui-elements/commit/1dffd64

[132]: https://github.com/box/box-ui-elements/issues/1745

[133]: https://github.com/box/box-ui-elements/commit/25fd95a

[134]: https://github.com/box/box-ui-elements/issues/1572

[135]: https://github.com/box/box-ui-elements/commit/f08501d

[136]: https://github.com/box/box-ui-elements/issues/2056

[137]: https://github.com/box/box-ui-elements/commit/87ed4cd

[138]: https://github.com/box/box-ui-elements/issues/2029

[139]: https://github.com/box/box-ui-elements/commit/c630174

[140]: https://github.com/box/box-ui-elements/issues/2310

[141]: https://github.com/box/box-ui-elements/commit/e875a2f

[142]: https://github.com/box/box-ui-elements/issues/1930

[143]: https://github.com/box/box-ui-elements/commit/0eec7e7

[144]: https://github.com/box/box-ui-elements/issues/2206

[145]: https://github.com/box/box-ui-elements/commit/141ff8f

[146]: https://github.com/box/box-ui-elements/issues/1957

[147]: https://github.com/box/box-ui-elements/commit/3f568ff

[148]: https://github.com/box/box-ui-elements/issues/1863

[149]: https://github.com/box/box-ui-elements/commit/bee35a5

[150]: https://github.com/box/box-ui-elements/issues/1996

[151]: https://github.com/box/box-ui-elements/commit/8414aa8

[152]: https://github.com/box/box-ui-elements/issues/2071

[153]: https://github.com/box/box-ui-elements/commit/66e4a97

[154]: https://github.com/box/box-ui-elements/issues/2296

[155]: https://github.com/box/box-ui-elements/commit/0c274f4

[156]: https://github.com/box/box-ui-elements/issues/1736

[157]: https://github.com/box/box-ui-elements/commit/851e418

[158]: https://github.com/box/box-ui-elements/issues/2043

[159]: https://github.com/box/box-ui-elements/commit/e1a75a6

[160]: https://github.com/box/box-ui-elements/issues/2046

[161]: https://github.com/box/box-ui-elements/commit/140983d

[162]: https://github.com/box/box-ui-elements/issues/2047

[163]: https://github.com/box/box-ui-elements/commit/e6ff604

[164]: https://github.com/box/box-ui-elements/issues/2050

[165]: https://github.com/box/box-ui-elements/commit/85c8aa6

[166]: https://github.com/box/box-ui-elements/issues/2054

[167]: https://github.com/box/box-ui-elements/commit/9d12782

[168]: https://github.com/box/box-ui-elements/issues/2055

[169]: https://github.com/box/box-ui-elements/commit/c19aac2

[170]: https://github.com/box/box-ui-elements/issues/2059

[171]: https://github.com/box/box-ui-elements/commit/65602c8

[172]: https://github.com/box/box-ui-elements/issues/2060

[173]: https://github.com/box/box-ui-elements/commit/b00c5e6

[174]: https://github.com/box/box-ui-elements/issues/2062

[175]: https://github.com/box/box-ui-elements/commit/cb93a6a

[176]: https://github.com/box/box-ui-elements/issues/2069

[177]: https://github.com/box/box-ui-elements/commit/aeb0a5d

[178]: https://github.com/box/box-ui-elements/issues/2082

[179]: https://github.com/box/box-ui-elements/commit/0094316

[180]: https://github.com/box/box-ui-elements/issues/2086

[181]: https://github.com/box/box-ui-elements/commit/833f86a

[182]: https://github.com/box/box-ui-elements/issues/2094

[183]: https://github.com/box/box-ui-elements/commit/7b42192

[184]: https://github.com/box/box-ui-elements/issues/2102

[185]: https://github.com/box/box-ui-elements/commit/35cca4a

[186]: https://github.com/box/box-ui-elements/issues/2108

[187]: https://github.com/box/box-ui-elements/commit/be73530

[188]: https://github.com/box/box-ui-elements/issues/2115

[189]: https://github.com/box/box-ui-elements/commit/35fea15

[190]: https://github.com/box/box-ui-elements/issues/2118

[191]: https://github.com/box/box-ui-elements/commit/2bd37fa

[192]: https://github.com/box/box-ui-elements/issues/2191

[193]: https://github.com/box/box-ui-elements/commit/8d1f261

[194]: https://github.com/box/box-ui-elements/issues/2246

[195]: https://github.com/box/box-ui-elements/commit/5df342d

[196]: https://github.com/box/box-ui-elements/issues/2252

[197]: https://github.com/box/box-ui-elements/commit/99e8627

[198]: https://github.com/box/box-ui-elements/issues/2254

[199]: https://github.com/box/box-ui-elements/commit/2f1e384

[200]: https://github.com/box/box-ui-elements/issues/2256

[201]: https://github.com/box/box-ui-elements/commit/6380f6d

[202]: https://github.com/box/box-ui-elements/issues/2258

[203]: https://github.com/box/box-ui-elements/commit/bc84604

[204]: https://github.com/box/box-ui-elements/issues/2261

[205]: https://github.com/box/box-ui-elements/commit/ae28a79

[206]: https://github.com/box/box-ui-elements/issues/2262

[207]: https://github.com/box/box-ui-elements/commit/091be37

[208]: https://github.com/box/box-ui-elements/issues/2265

[209]: https://github.com/box/box-ui-elements/commit/c5cce79

[210]: https://github.com/box/box-ui-elements/issues/2270

[211]: https://github.com/box/box-ui-elements/commit/dbe92fd

[212]: https://github.com/box/box-ui-elements/issues/2277

[213]: https://github.com/box/box-ui-elements/commit/77dd5e0

[214]: https://github.com/box/box-ui-elements/issues/2281

[215]: https://github.com/box/box-ui-elements/commit/1346259

[216]: https://github.com/box/box-ui-elements/issues/2291

[217]: https://github.com/box/box-ui-elements/commit/62fb604

[218]: https://github.com/box/box-ui-elements/issues/2317

[219]: https://github.com/box/box-ui-elements/commit/2547816

[220]: https://github.com/box/box-ui-elements/issues/2021

[221]: https://github.com/box/box-ui-elements/commit/c9a98ae

[222]: https://github.com/box/box-ui-elements/issues/2038

[223]: https://github.com/box/box-ui-elements/commit/9ea5731

[224]: https://github.com/box/box-ui-elements/issues/2299

[225]: https://github.com/box/box-ui-elements/commit/b419b4d

[226]: https://github.com/box/box-ui-elements/issues/1970

[227]: https://github.com/box/box-ui-elements/commit/5e64c5d

[228]: https://github.com/box/box-ui-elements/issues/2269

[229]: https://github.com/box/box-ui-elements/commit/cbff42f

[230]: https://github.com/box/box-ui-elements/issues/2305

[231]: https://github.com/box/box-ui-elements/commit/dd5d54d

[232]: https://github.com/box/box-ui-elements/issues/1793

[233]: https://github.com/box/box-ui-elements/commit/cb23f52

[234]: https://github.com/box/box-ui-elements/issues/1801

[235]: https://github.com/box/box-ui-elements/commit/294eef0

[236]: https://github.com/box/box-ui-elements/issues/2288

[237]: https://github.com/box/box-ui-elements/commit/458ff8a

[238]: https://github.com/box/box-ui-elements/issues/1966

[239]: https://github.com/box/box-ui-elements/commit/cd66721

[240]: https://github.com/box/box-ui-elements/issues/1928

[241]: https://github.com/box/box-ui-elements/commit/1638b40

[242]: https://github.com/box/box-ui-elements/issues/2022

[243]: https://github.com/box/box-ui-elements/commit/cd7b7dd

[244]: https://github.com/box/box-ui-elements/issues/1945

[245]: https://github.com/box/box-ui-elements/commit/6832500

[246]: https://github.com/box/box-ui-elements/issues/1942

[247]: https://github.com/box/box-ui-elements/commit/5a6f4a0

[248]: https://github.com/box/box-ui-elements/issues/2306

[249]: https://github.com/box/box-ui-elements/commit/c086f85

[250]: https://github.com/box/box-ui-elements/issues/2196

[251]: https://github.com/box/box-ui-elements/commit/ba64f8b

[252]: https://github.com/box/box-ui-elements/issues/1995

[253]: https://github.com/box/box-ui-elements/commit/dcc7026

[254]: https://github.com/box/box-ui-elements/issues/1732

[255]: https://github.com/box/box-ui-elements/commit/0c7eb25

[256]: https://github.com/box/box-ui-elements/issues/2315

[257]: https://github.com/box/box-ui-elements/commit/8fa604b

[258]: https://github.com/box/box-ui-elements/issues/1992

[259]: https://github.com/box/box-ui-elements/commit/04fccd3

[260]: https://github.com/box/box-ui-elements/issues/1858

[261]: https://github.com/box/box-ui-elements/commit/84a155d

[262]: https://github.com/box/box-ui-elements/issues/2240

[263]: https://github.com/box/box-ui-elements/commit/6e46a5c

[264]: https://github.com/box/box-ui-elements/issues/2131

[265]: https://github.com/box/box-ui-elements/commit/c745331

[266]: https://github.com/box/box-ui-elements/issues/1803

[267]: https://github.com/box/box-ui-elements/commit/b64103d

[268]: https://github.com/box/box-ui-elements/issues/2133

[269]: https://github.com/box/box-ui-elements/commit/9950fd8

[270]: https://github.com/box/box-ui-elements/issues/1962

[271]: https://github.com/box/box-ui-elements/commit/f3b939c

[272]: https://github.com/box/box-ui-elements/issues/2052

[273]: https://github.com/box/box-ui-elements/commit/a9098e6

[274]: https://github.com/box/box-ui-elements/issues/2251

[275]: https://github.com/box/box-ui-elements/commit/072337b

[276]: https://github.com/box/box-ui-elements/issues/1902

[277]: https://github.com/box/box-ui-elements/commit/4cd0721

[278]: https://github.com/box/box-ui-elements/issues/2293

[279]: https://github.com/box/box-ui-elements/commit/1802a93

[280]: https://github.com/box/box-ui-elements/issues/2202

[281]: https://github.com/box/box-ui-elements/commit/3b64ddb

[282]: https://github.com/box/box-ui-elements/issues/1910

[283]: https://github.com/box/box-ui-elements/commit/6262878

[284]: https://github.com/box/box-ui-elements/issues/2273

[285]: https://github.com/box/box-ui-elements/commit/bbd09d5

[286]: https://github.com/box/box-ui-elements/issues/1946

[287]: https://github.com/box/box-ui-elements/commit/a30bbd9

[288]: https://github.com/box/box-ui-elements/issues/1874

[289]: https://github.com/box/box-ui-elements/commit/97a2e98

[290]: https://github.com/box/box-ui-elements/issues/1965

[291]: https://github.com/box/box-ui-elements/commit/f58d075

[292]: https://github.com/box/box-ui-elements/issues/1879

[293]: https://github.com/box/box-ui-elements/commit/2e89f8f

[294]: https://github.com/box/box-ui-elements/issues/2127

[295]: https://github.com/box/box-ui-elements/commit/85db944

[296]: https://github.com/box/box-ui-elements/issues/1907

[297]: https://github.com/box/box-ui-elements/commit/2da2a3a

[298]: https://github.com/box/box-ui-elements/issues/1914

[299]: https://github.com/box/box-ui-elements/commit/b7bf599

[300]: https://github.com/box/box-ui-elements/issues/1835

[301]: https://github.com/box/box-ui-elements/commit/9d0d244

[302]: https://github.com/box/box-ui-elements/issues/1926

[303]: https://github.com/box/box-ui-elements/commit/39deef9

[304]: https://github.com/box/box-ui-elements/issues/2039

[305]: https://github.com/box/box-ui-elements/commit/c7e1560

[306]: https://github.com/box/box-ui-elements/issues/2285

[307]: https://github.com/box/box-ui-elements/commit/bce03b5

[308]: https://github.com/box/box-ui-elements/issues/2286

[309]: https://github.com/box/box-ui-elements/commit/a705508

[310]: https://github.com/box/box-ui-elements/issues/2283

[311]: https://github.com/box/box-ui-elements/commit/50c34b5

[312]: https://github.com/box/box-ui-elements/issues/1988

[313]: https://github.com/box/box-ui-elements/commit/9713e8a

[314]: https://github.com/box/box-ui-elements/issues/2024

[315]: https://github.com/box/box-ui-elements/commit/845934c

[316]: https://github.com/box/box-ui-elements/issues/1857

[317]: https://github.com/box/box-ui-elements/commit/6c36428

[318]: https://github.com/box/box-ui-elements/issues/1866

[319]: https://github.com/box/box-ui-elements/commit/52caa30

[320]: https://github.com/box/box-ui-elements/issues/2304

[321]: https://github.com/box/box-ui-elements/commit/fc62bec

[322]: https://github.com/box/box-ui-elements/issues/2061

[323]: https://github.com/box/box-ui-elements/commit/ce71755

[324]: https://github.com/box/box-ui-elements/issues/2048

[325]: https://github.com/box/box-ui-elements/commit/d91f2a6

[326]: https://github.com/box/box-ui-elements/issues/2209

[327]: https://github.com/box/box-ui-elements/commit/79f6a02

[328]: https://github.com/box/box-ui-elements/issues/1785

[329]: https://github.com/box/box-ui-elements/commit/c3c601d

[330]: https://github.com/box/box-ui-elements/issues/1726

[331]: https://github.com/box/box-ui-elements/commit/9bd825a

[332]: https://github.com/box/box-ui-elements/issues/1898

[333]: https://github.com/box/box-ui-elements/commit/3eac95e

[334]: https://github.com/box/box-ui-elements/issues/2295

[335]: https://github.com/box/box-ui-elements/commit/bec5104

[336]: https://github.com/box/box-ui-elements/issues/2040

[337]: https://github.com/box/box-ui-elements/commit/1245947

[338]: https://github.com/box/box-ui-elements/issues/2320

[339]: https://github.com/box/box-ui-elements/commit/5907a63

[340]: https://github.com/box/box-ui-elements/issues/2095

[341]: https://github.com/box/box-ui-elements/commit/13a5519

[342]: https://github.com/box/box-ui-elements/issues/2155

[343]: https://github.com/box/box-ui-elements/commit/ec58322

[344]: https://github.com/box/box-ui-elements/issues/2121

[345]: https://github.com/box/box-ui-elements/commit/f048e89

[346]: https://github.com/box/box-ui-elements/issues/2111

[347]: https://github.com/box/box-ui-elements/commit/2d57515

[348]: https://github.com/box/box-ui-elements/issues/2148

[349]: https://github.com/box/box-ui-elements/commit/162b1e5

[350]: https://github.com/box/box-ui-elements/issues/1908

[351]: https://github.com/box/box-ui-elements/commit/b1743b8

[352]: https://github.com/box/box-ui-elements/issues/1746

[353]: https://github.com/box/box-ui-elements/commit/fecc4c6

[354]: https://github.com/box/box-ui-elements/issues/1875

[355]: https://github.com/box/box-ui-elements/commit/4fba5ad

[356]: https://github.com/box/box-ui-elements/issues/1762

[357]: https://github.com/box/box-ui-elements/commit/548f5ea

[358]: https://github.com/box/box-ui-elements/issues/1917

[359]: https://github.com/box/box-ui-elements/commit/939e089

[360]: https://github.com/box/box-ui-elements/issues/2152

[361]: https://github.com/box/box-ui-elements/commit/522d735

[362]: https://github.com/box/box-ui-elements/issues/2105

[363]: https://github.com/box/box-ui-elements/commit/1123db9

[364]: https://github.com/box/box-ui-elements/issues/2117

[365]: https://github.com/box/box-ui-elements/commit/c4db1b2

[366]: https://github.com/box/box-ui-elements/issues/2224

[367]: https://github.com/box/box-ui-elements/commit/f9aede1

[368]: https://github.com/box/box-ui-elements/issues/2135

[369]: https://github.com/box/box-ui-elements/commit/b3ed502

[370]: https://github.com/box/box-ui-elements/issues/2090

[371]: https://github.com/box/box-ui-elements/commit/9296c73

[372]: https://github.com/box/box-ui-elements/issues/2195

[373]: https://github.com/box/box-ui-elements/commit/239739f

[374]: https://github.com/box/box-ui-elements/issues/2159

[375]: https://github.com/box/box-ui-elements/commit/745f697

[376]: https://github.com/box/box-ui-elements/issues/2217

[377]: https://github.com/box/box-ui-elements/commit/43d61d1

[378]: https://github.com/box/box-ui-elements/issues/2172

[379]: https://github.com/box/box-ui-elements/commit/4858ac4

[380]: https://github.com/box/box-ui-elements/issues/2198

[381]: https://github.com/box/box-ui-elements/commit/8f73c26

[382]: https://github.com/box/box-ui-elements/issues/2173

[383]: https://github.com/box/box-ui-elements/commit/65a149c

[384]: https://github.com/box/box-ui-elements/issues/2231

[385]: https://github.com/box/box-ui-elements/commit/a04093c

[386]: https://github.com/box/box-ui-elements/issues/2104

[387]: https://github.com/box/box-ui-elements/commit/db2b0da

[388]: https://github.com/box/box-ui-elements/issues/2100

[389]: https://github.com/box/box-ui-elements/commit/0149613

[390]: https://github.com/box/box-ui-elements/issues/2153

[391]: https://github.com/box/box-ui-elements/commit/c55949d

[392]: https://github.com/box/box-ui-elements/issues/2109

[393]: https://github.com/box/box-ui-elements/commit/d46197c

[394]: https://github.com/box/box-ui-elements/issues/2130

[395]: https://github.com/box/box-ui-elements/commit/6299771

[396]: https://github.com/box/box-ui-elements/issues/2089

[397]: https://github.com/box/box-ui-elements/commit/aefef0b

[398]: https://github.com/box/box-ui-elements/issues/1818

[399]: https://github.com/box/box-ui-elements/commit/324c4be

[400]: https://github.com/box/box-ui-elements/issues/2140

[401]: https://github.com/box/box-ui-elements/commit/3845824

[402]: https://github.com/box/box-ui-elements/issues/2220

[403]: https://github.com/box/box-ui-elements/commit/738ec5e

[404]: https://github.com/box/box-ui-elements/issues/2236

[405]: https://github.com/box/box-ui-elements/commit/5f07fff

[406]: https://github.com/box/box-ui-elements/issues/2292

[407]: https://github.com/box/box-ui-elements/commit/ead150b

[408]: https://github.com/box/box-ui-elements/issues/2308

[409]: https://github.com/box/box-ui-elements/commit/41c67a5

[410]: https://github.com/box/box-ui-elements/issues/2319

[411]: https://github.com/box/box-ui-elements/commit/79beb99

[412]: https://github.com/box/box-ui-elements/issues/2275

[413]: https://github.com/box/box-ui-elements/commit/167f9cf

[414]: https://github.com/box/box-ui-elements/issues/2154

[415]: https://github.com/box/box-ui-elements/commit/72c5e59

[416]: https://github.com/box/box-ui-elements/issues/2180

[417]: https://github.com/box/box-ui-elements/commit/47dec94

[418]: https://github.com/box/box-ui-elements/issues/2257

[419]: https://github.com/box/box-ui-elements/commit/31c8b99

[420]: https://github.com/box/box-ui-elements/issues/2149

[421]: https://github.com/box/box-ui-elements/commit/60ff32d

[422]: https://github.com/box/box-ui-elements/issues/2112

[423]: https://github.com/box/box-ui-elements/commit/b608111

[424]: https://github.com/box/box-ui-elements/issues/2142

[425]: https://github.com/box/box-ui-elements/commit/627fd4c

[426]: https://github.com/box/box-ui-elements/issues/2250

[427]: https://github.com/box/box-ui-elements/commit/73b8ea5

[428]: https://github.com/box/box-ui-elements/issues/2110

[429]: https://github.com/box/box-ui-elements/commit/79e8a31

[430]: https://github.com/box/box-ui-elements/issues/2150

[431]: https://github.com/box/box-ui-elements/commit/605d008

[432]: https://github.com/box/box-ui-elements/issues/2234

[433]: https://github.com/box/box-ui-elements/commit/b5166a8

[434]: https://github.com/box/box-ui-elements/issues/2194

[435]: https://github.com/box/box-ui-elements/commit/7a96ed7

[436]: https://github.com/box/box-ui-elements/issues/2278

[437]: https://github.com/box/box-ui-elements/commit/4bb7136

[438]: https://github.com/box/box-ui-elements/issues/2192

[439]: https://github.com/box/box-ui-elements/commit/0b233b5

[440]: https://github.com/box/box-ui-elements/issues/2264

[441]: https://github.com/box/box-ui-elements/commit/7dc2fc0

[442]: https://github.com/box/box-ui-elements/issues/2268

[443]: https://github.com/box/box-ui-elements/commit/49dc47d

[444]: https://github.com/box/box-ui-elements/issues/2274

[445]: https://github.com/box/box-ui-elements/commit/0c2445c

[446]: https://github.com/box/box-ui-elements/issues/2307

[447]: https://github.com/box/box-ui-elements/commit/d9d0820

[448]: https://github.com/box/box-ui-elements/issues/2226

[449]: https://github.com/box/box-ui-elements/commit/4939faf

[450]: https://github.com/box/box-ui-elements/issues/2235

[451]: https://github.com/box/box-ui-elements/commit/dafc53f

[452]: https://github.com/box/box-ui-elements/issues/2229

[453]: https://github.com/box/box-ui-elements/commit/179bd93

[454]: https://github.com/box/box-ui-elements/issues/2211

[455]: https://github.com/box/box-ui-elements/commit/cef7569

[456]: https://github.com/box/box-ui-elements/issues/2219

[457]: https://github.com/box/box-ui-elements/commit/600558a

[458]: https://github.com/box/box-ui-elements/issues/2215

[459]: https://github.com/box/box-ui-elements/commit/d79f79e

[460]: https://github.com/box/box-ui-elements/issues/2214

[461]: https://github.com/box/box-ui-elements/commit/914db7a

[462]: https://github.com/box/box-ui-elements/issues/2290

[463]: https://github.com/box/box-ui-elements/commit/35e24c1

[464]: https://github.com/box/box-ui-elements/issues/2259

[465]: https://github.com/box/box-ui-elements/commit/58df161

[466]: https://github.com/box/box-ui-elements/issues/2266

[467]: https://github.com/box/box-ui-elements/commit/ce3716a

[468]: https://github.com/box/box-ui-elements/issues/2279

[469]: https://github.com/box/box-ui-elements/commit/2990b37

[470]: https://github.com/box/box-ui-elements/issues/2289

[471]: https://github.com/box/box-ui-elements/commit/74b2924

[472]: https://github.com/box/box-ui-elements/issues/2271

[473]: https://github.com/box/box-ui-elements/commit/843e76d

[474]: https://github.com/box/box-ui-elements/issues/2253

[475]: https://github.com/box/box-ui-elements/commit/69a6826

[476]: https://github.com/box/box-ui-elements/issues/2124

[477]: https://github.com/box/box-ui-elements/commit/d8ba843

[478]: https://github.com/box/box-ui-elements/issues/2106

[479]: https://github.com/box/box-ui-elements/commit/fc8110e

[480]: https://github.com/box/box-ui-elements/issues/2145

[481]: https://github.com/box/box-ui-elements/commit/f7d60a8

[482]: https://github.com/box/box-ui-elements/issues/2316

[483]: https://github.com/box/box-ui-elements/commit/fcaa35b

[484]: https://github.com/box/box-ui-elements/issues/2203

[485]: https://github.com/box/box-ui-elements/commit/023f0c1

[486]: https://github.com/box/box-ui-elements/issues/1923

[487]: https://github.com/box/box-ui-elements/commit/a9baa01

[488]: https://github.com/box/box-ui-elements/issues/2134

[489]: https://github.com/box/box-ui-elements/commit/792142d

[490]: https://github.com/box/box-ui-elements/issues/2167

[491]: https://github.com/box/box-ui-elements/commit/0c30d23

[492]: https://github.com/box/box-ui-elements/issues/2255

[493]: https://github.com/box/box-ui-elements/commit/e64994e

[494]: https://github.com/box/box-ui-elements/issues/2128

[495]: https://github.com/box/box-ui-elements/commit/a3e04da

[496]: https://github.com/box/box-ui-elements/issues/2070

[497]: https://github.com/box/box-ui-elements/commit/f9751d1

[498]: https://github.com/box/box-ui-elements/issues/2300

[499]: https://github.com/box/box-ui-elements/commit/cae1013

[500]: https://github.com/box/box-ui-elements/issues/2284

[501]: https://github.com/box/box-ui-elements/commit/dc856fa

[502]: https://github.com/box/box-ui-elements/issues/2138

[503]: https://github.com/box/box-ui-elements/commit/2951dc4

[504]: https://github.com/box/box-ui-elements/issues/2190

[505]: https://github.com/box/box-ui-elements/commit/aad1af1

[506]: https://github.com/box/box-ui-elements/issues/2171

[507]: https://github.com/box/box-ui-elements/commit/2a3792a

[508]: https://github.com/box/box-ui-elements/issues/2179

[509]: https://github.com/box/box-ui-elements/commit/057efed

[510]: https://github.com/box/box-ui-elements/issues/2249

[511]: https://github.com/box/box-ui-elements/commit/b527df8

[512]: https://github.com/box/box-ui-elements/issues/2247

[513]: https://github.com/box/box-ui-elements/commit/f8a4ef0

[514]: https://github.com/box/box-ui-elements/issues/2091

[515]: https://github.com/box/box-ui-elements/commit/bcc909e

[516]: https://github.com/box/box-ui-elements/issues/2204

[517]: https://github.com/box/box-ui-elements/commit/21a67ce

[518]: https://github.com/box/box-ui-elements/issues/2184

[519]: https://github.com/box/box-ui-elements/commit/b9f1306

[520]: https://github.com/box/box-ui-elements/issues/2263

[521]: https://github.com/box/box-ui-elements/commit/556fe48

[522]: https://github.com/box/box-ui-elements/issues/2123

[523]: https://github.com/box/box-ui-elements/commit/9188941

[524]: https://github.com/box/box-ui-elements/issues/2187

[525]: https://github.com/box/box-ui-elements/commit/e56eb88

[526]: https://github.com/box/box-ui-elements/issues/2242

[527]: https://github.com/box/box-ui-elements/commit/00573f8

[528]: https://github.com/box/box-ui-elements/issues/2222

[529]: https://github.com/box/box-ui-elements/commit/effdd73

[530]: https://github.com/box/box-ui-elements/issues/2280

[531]: https://github.com/box/box-ui-elements/commit/1351fcc

[532]: https://github.com/box/box-ui-elements/issues/2228

[533]: https://github.com/box/box-ui-elements/commit/07154ca

[534]: https://github.com/box/box-ui-elements/issues/2143

[535]: https://github.com/box/box-ui-elements/commit/9ae2349

[536]: https://github.com/box/box-ui-elements/issues/2120

[537]: https://github.com/box/box-ui-elements/commit/77db92d

[538]: https://github.com/box/box-ui-elements/issues/2225

[539]: https://github.com/box/box-ui-elements/commit/d3af687

[540]: https://github.com/box/box-ui-elements/issues/2161

[541]: https://github.com/box/box-ui-elements/commit/a649e72

[542]: https://github.com/box/box-ui-elements/issues/2276

[543]: https://github.com/box/box-ui-elements/commit/435eb2f

[544]: https://github.com/box/box-ui-elements/issues/2183

[545]: https://github.com/box/box-ui-elements/commit/3fc5a59

[546]: https://github.com/box/box-ui-elements/issues/1932

[547]: https://github.com/box/box-ui-elements/commit/e9d7c3b

[548]: https://github.com/box/box-ui-elements/issues/2188

[549]: https://github.com/box/box-ui-elements/commit/df9e5af

[550]: https://github.com/box/box-ui-elements/issues/2156

[551]: https://github.com/box/box-ui-elements/commit/c0e9605

[552]: https://github.com/box/box-ui-elements/issues/2186

[553]: https://github.com/box/box-ui-elements/commit/5a73b08

[554]: https://github.com/box/box-ui-elements/issues/2287

[555]: https://github.com/box/box-ui-elements/commit/ba2eb72

[556]: https://github.com/box/box-ui-elements/issues/2085

[557]: https://github.com/box/box-ui-elements/commit/e132dd9

[558]: https://github.com/box/box-ui-elements/issues/2129

[559]: https://github.com/box/box-ui-elements/commit/65b44c6

[560]: https://github.com/box/box-ui-elements/issues/2141

[561]: https://github.com/box/box-ui-elements/commit/6eb3216

[562]: https://github.com/box/box-ui-elements/issues/2165

[563]: https://github.com/box/box-ui-elements/commit/a0196c7

[564]: https://github.com/box/box-ui-elements/issues/2067

[565]: https://github.com/box/box-ui-elements/commit/5c3c4d8

[566]: https://github.com/box/box-ui-elements/issues/2080

[567]: https://github.com/box/box-ui-elements/commit/7ffb448

[568]: https://github.com/box/box-ui-elements/issues/2064

[569]: https://github.com/box/box-ui-elements/commit/2ad3676

[570]: https://github.com/box/box-ui-elements/issues/2083

[571]: https://github.com/box/box-ui-elements/commit/bb68144

[572]: https://github.com/box/box-ui-elements/issues/2079

[573]: https://github.com/box/box-ui-elements/commit/98434cd

[574]: https://github.com/box/box-ui-elements/issues/1904

[575]: https://github.com/box/box-ui-elements/commit/255e1a8

[576]: https://github.com/box/box-ui-elements/issues/2016

[577]: https://github.com/box/box-ui-elements/commit/81ec28d

[578]: https://github.com/box/box-ui-elements/issues/1843

[579]: https://github.com/box/box-ui-elements/commit/887a9ef

[580]: https://github.com/box/box-ui-elements/issues/1792

[581]: https://github.com/box/box-ui-elements/commit/a356c21

[582]: https://github.com/box/box-ui-elements/issues/1891

[583]: https://github.com/box/box-ui-elements/commit/ed96761

[584]: https://github.com/box/box-ui-elements/issues/2051

[585]: https://github.com/box/box-ui-elements/commit/2d76f2d

[586]: https://github.com/box/box-ui-elements/issues/2006

[587]: https://github.com/box/box-ui-elements/commit/05414a9

[588]: https://github.com/box/box-ui-elements/issues/1951

[589]: https://github.com/box/box-ui-elements/commit/e1749ac

[590]: https://github.com/box/box-ui-elements/issues/1833

[591]: https://github.com/box/box-ui-elements/commit/efa7b93

[592]: https://github.com/box/box-ui-elements/issues/1788

[593]: https://github.com/box/box-ui-elements/commit/0d1b520

[594]: https://github.com/box/box-ui-elements/issues/1738

[595]: https://github.com/box/box-ui-elements/commit/180f2b4

[596]: https://github.com/box/box-ui-elements/issues/2035

[597]: https://github.com/box/box-ui-elements/commit/fa787a4

[598]: https://github.com/box/box-ui-elements/issues/2037

[599]: https://github.com/box/box-ui-elements/commit/da7f149

[600]: https://github.com/box/box-ui-elements/issues/1760

[601]: https://github.com/box/box-ui-elements/commit/fd5271b

[602]: https://github.com/box/box-ui-elements/issues/1944

[603]: https://github.com/box/box-ui-elements/commit/0c85f02

[604]: https://github.com/box/box-ui-elements/issues/1743

[605]: https://github.com/box/box-ui-elements/commit/fe9dae6

[606]: https://github.com/box/box-ui-elements/issues/1954

[607]: https://github.com/box/box-ui-elements/commit/f141874

[608]: https://github.com/box/box-ui-elements/issues/2010

[609]: https://github.com/box/box-ui-elements/commit/3cc0ad1

[610]: https://github.com/box/box-ui-elements/issues/1850

[611]: https://github.com/box/box-ui-elements/commit/ffb8379

[612]: https://github.com/box/box-ui-elements/issues/1981

[613]: https://github.com/box/box-ui-elements/commit/eda45ff

[614]: https://github.com/box/box-ui-elements/issues/1486

[615]: https://github.com/box/box-ui-elements/commit/fd93535

[616]: https://github.com/box/box-ui-elements/issues/1805

[617]: https://github.com/box/box-ui-elements/commit/c9fcd00

[618]: https://github.com/box/box-ui-elements/issues/2063

[619]: https://github.com/box/box-ui-elements/commit/6653d15

[620]: https://github.com/box/box-ui-elements/issues/2049

[621]: https://github.com/box/box-ui-elements/commit/e29f00b

[622]: https://github.com/box/box-ui-elements/issues/1799

[623]: https://github.com/box/box-ui-elements/commit/dfb52b9

[624]: https://github.com/box/box-ui-elements/issues/1825

[625]: https://github.com/box/box-ui-elements/commit/7efb090

[626]: https://github.com/box/box-ui-elements/issues/1786

[627]: https://github.com/box/box-ui-elements/commit/f04f936

[628]: https://github.com/box/box-ui-elements/issues/1791

[629]: https://github.com/box/box-ui-elements/commit/2cfdbba

[630]: https://github.com/box/box-ui-elements/issues/1876

[631]: https://github.com/box/box-ui-elements/commit/c14c756

[632]: https://github.com/box/box-ui-elements/issues/1719

[633]: https://github.com/box/box-ui-elements/commit/66760cc

[634]: https://github.com/box/box-ui-elements/issues/1860

[635]: https://github.com/box/box-ui-elements/commit/49edf06

[636]: https://github.com/box/box-ui-elements/issues/2012

[637]: https://github.com/box/box-ui-elements/commit/3252e28

[638]: https://github.com/box/box-ui-elements/issues/1963

[639]: https://github.com/box/box-ui-elements/commit/bee300f

[640]: https://github.com/box/box-ui-elements/issues/1806

[641]: https://github.com/box/box-ui-elements/commit/4995182

[642]: https://github.com/box/box-ui-elements/issues/1741

[643]: https://github.com/box/box-ui-elements/issues/1742

[644]: https://github.com/box/box-ui-elements/commit/a0eb0b9

[645]: https://github.com/box/box-ui-elements/issues/2077

[646]: https://github.com/box/box-ui-elements/commit/d596cfe

[647]: https://github.com/box/box-ui-elements/issues/1735

[648]: https://github.com/box/box-ui-elements/commit/999d4f8

[649]: https://github.com/box/box-ui-elements/issues/1939

[650]: https://github.com/box/box-ui-elements/commit/619da43

[651]: https://github.com/box/box-ui-elements/issues/1794

[652]: https://github.com/box/box-ui-elements/commit/052d4bc

[653]: https://github.com/box/box-ui-elements/issues/1729

[654]: https://github.com/box/box-ui-elements/commit/3251e98

[655]: https://github.com/box/box-ui-elements/issues/1909

[656]: https://github.com/box/box-ui-elements/commit/a1b1929

[657]: https://github.com/box/box-ui-elements/issues/1950

[658]: https://github.com/box/box-ui-elements/commit/21f3091

[659]: https://github.com/box/box-ui-elements/issues/1838

[660]: https://github.com/box/box-ui-elements/commit/84ee19a

[661]: https://github.com/box/box-ui-elements/issues/1854

[662]: https://github.com/box/box-ui-elements/commit/fd7e97c

[663]: https://github.com/box/box-ui-elements/issues/1716

[664]: https://github.com/box/box-ui-elements/commit/17af052

[665]: https://github.com/box/box-ui-elements/issues/1737

[666]: https://github.com/box/box-ui-elements/commit/a4fec18

[667]: https://github.com/box/box-ui-elements/issues/1920

[668]: https://github.com/box/box-ui-elements/commit/1e36e51

[669]: https://github.com/box/box-ui-elements/issues/1870

[670]: https://github.com/box/box-ui-elements/commit/cd708f9

[671]: https://github.com/box/box-ui-elements/issues/2053

[672]: https://github.com/box/box-ui-elements/commit/0d4f396

[673]: https://github.com/box/box-ui-elements/issues/1761

[674]: https://github.com/box/box-ui-elements/commit/ed14b9c

[675]: https://github.com/box/box-ui-elements/issues/1769

[676]: https://github.com/box/box-ui-elements/commit/50eba71

[677]: https://github.com/box/box-ui-elements/issues/1959

[678]: https://github.com/box/box-ui-elements/commit/e49ed16

[679]: https://github.com/box/box-ui-elements/issues/1983

[680]: https://github.com/box/box-ui-elements/commit/5d24051

[681]: https://github.com/box/box-ui-elements/issues/1824

[682]: https://github.com/box/box-ui-elements/commit/9a5fa20

[683]: https://github.com/box/box-ui-elements/issues/1715

[684]: https://github.com/box/box-ui-elements/commit/2891383

[685]: https://github.com/box/box-ui-elements/issues/1819

[686]: https://github.com/box/box-ui-elements/commit/5d3623f

[687]: https://github.com/box/box-ui-elements/issues/1865

[688]: https://github.com/box/box-ui-elements/commit/4a2eb5a

[689]: https://github.com/box/box-ui-elements/issues/1841

[690]: https://github.com/box/box-ui-elements/commit/5267bc8

[691]: https://github.com/box/box-ui-elements/issues/1842

[692]: https://github.com/box/box-ui-elements/commit/c73752c

[693]: https://github.com/box/box-ui-elements/issues/1798

[694]: https://github.com/box/box-ui-elements/commit/0d2188b

[695]: https://github.com/box/box-ui-elements/issues/1852

[696]: https://github.com/box/box-ui-elements/commit/dbaf765

[697]: https://github.com/box/box-ui-elements/issues/1849

[698]: https://github.com/box/box-ui-elements/commit/d4da918

[699]: https://github.com/box/box-ui-elements/issues/1731

[700]: https://github.com/box/box-ui-elements/commit/d98028c

[701]: https://github.com/box/box-ui-elements/issues/1844

[702]: https://github.com/box/box-ui-elements/commit/d17cd42

[703]: https://github.com/box/box-ui-elements/issues/1836

[704]: https://github.com/box/box-ui-elements/commit/6f3746d

[705]: https://github.com/box/box-ui-elements/issues/1797

[706]: https://github.com/box/box-ui-elements/commit/d04ce54

[707]: https://github.com/box/box-ui-elements/issues/1830

[708]: https://github.com/box/box-ui-elements/commit/aa5f475

[709]: https://github.com/box/box-ui-elements/issues/1784

[710]: https://github.com/box/box-ui-elements/commit/77db364

[711]: https://github.com/box/box-ui-elements/issues/1877

[712]: https://github.com/box/box-ui-elements/commit/8fba21a

[713]: https://github.com/box/box-ui-elements/issues/2032

[714]: https://github.com/box/box-ui-elements/commit/417f873

[715]: https://github.com/box/box-ui-elements/issues/1845

[716]: https://github.com/box/box-ui-elements/commit/4aea13a

[717]: https://github.com/box/box-ui-elements/issues/1851

[718]: https://github.com/box/box-ui-elements/commit/5f23139

[719]: https://github.com/box/box-ui-elements/issues/1882

[720]: https://github.com/box/box-ui-elements/commit/5bd1aac

[721]: https://github.com/box/box-ui-elements/issues/1821

[722]: https://github.com/box/box-ui-elements/commit/4bf992e

[723]: https://github.com/box/box-ui-elements/issues/1810

[724]: https://github.com/box/box-ui-elements/commit/d507f03

[725]: https://github.com/box/box-ui-elements/issues/1947

[726]: https://github.com/box/box-ui-elements/commit/249d457

[727]: https://github.com/box/box-ui-elements/issues/1809

[728]: https://github.com/box/box-ui-elements/commit/3d9a129

[729]: https://github.com/box/box-ui-elements/issues/1837

[730]: https://github.com/box/box-ui-elements/commit/49c2585

[731]: https://github.com/box/box-ui-elements/issues/2031

[732]: https://github.com/box/box-ui-elements/commit/a0655d8

[733]: https://github.com/box/box-ui-elements/issues/1903

[734]: https://github.com/box/box-ui-elements/commit/785bc6a

[735]: https://github.com/box/box-ui-elements/issues/1990

[736]: https://github.com/box/box-ui-elements/commit/95b3232

[737]: https://github.com/box/box-ui-elements/issues/2004

[738]: https://github.com/box/box-ui-elements/commit/a0730df

[739]: https://github.com/box/box-ui-elements/issues/2005

[740]: https://github.com/box/box-ui-elements/commit/97df64e

[741]: https://github.com/box/box-ui-elements/issues/1885

[742]: https://github.com/box/box-ui-elements/commit/34a5d76

[743]: https://github.com/box/box-ui-elements/issues/1964

[744]: https://github.com/box/box-ui-elements/commit/464dd76

[745]: https://github.com/box/box-ui-elements/issues/2041

[746]: https://github.com/box/box-ui-elements/commit/180273f

[747]: https://github.com/box/box-ui-elements/issues/1846

[748]: https://github.com/box/box-ui-elements/commit/8b553db

[749]: https://github.com/box/box-ui-elements/issues/2074

[750]: https://github.com/box/box-ui-elements/commit/0805619

[751]: https://github.com/box/box-ui-elements/issues/1980

[752]: https://github.com/box/box-ui-elements/commit/80f2dac

[753]: https://github.com/box/box-ui-elements/issues/2045

[754]: https://github.com/box/box-ui-elements/commit/2715c7e

[755]: https://github.com/box/box-ui-elements/issues/1770

[756]: https://github.com/box/box-ui-elements/commit/a868fc0

[757]: mailto:37929162+mergify[bot]@users.noreply.github.com

[758]: https://github.com/box/cldr-data

[759]: https://github.com/box/frontend

[760]: https://github.com/Microsoft/TypeScript/issues/25430
