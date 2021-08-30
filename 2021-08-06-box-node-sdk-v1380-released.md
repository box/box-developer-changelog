---
applied_at: '2021-08-06'
applies_to:
  - sdks
  - node
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-node-sdk/releases/tag/v1.38.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2021-08-06-box-node-sdk-v1380-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2021-09-01-new-enhancements-to-retention-apis
previous_page_id: 2021-08-04-changes-to-jwt-token-format
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/08-06-box-node-sdk-v1380-released.md
published_at: '2021-08-06'
---
# Box Node SDK `v1.38.0` released

**New Features and Enhancements:**

* Add sensitive language event types for admin invites ([#648][1])
* Use `BetterDocs` to adapt `JSDocs` to `TypeScript` ([#646][2])
* Change `ProxyAgent` import to be dynamic ([#641][3])
* New API for get files and file versions under retention ([#585][4])

**Bug Fixes:**

* Deeply freeze Config except Buffers and Readable streams ([#651][5])
* Fix a typo in docs of `src/managers/search.ts` ([#649][6])
* Update broken documentation link ([#647][7])
* fix type annotations for `exchangeToken` functions ([#645][8])
* Deprecate files `getThumbnail` API in favor of 
  `getRepresentationContent` ([#627][9])

[1]: https://github.com/box/box-node-sdk/pull/648

[2]: https://github.com/box/box-node-sdk/pull/646

[3]: https://github.com/box/box-node-sdk/pull/641

[4]: https://github.com/box/box-node-sdk/pull/585

[5]: https://github.com/box/box-node-sdk/pull/651

[6]: https://github.com/box/box-node-sdk/pull/649

[7]: https://github.com/box/box-node-sdk/pull/647

[8]: https://github.com/box/box-node-sdk/pull/645

[9]: https://github.com/box/box-node-sdk/pull/627