---
applied_at: '2022-03-28'
applies_to:
  - sdks
  - node
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-node-sdk/releases/tag/v2.1.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2022-03-28-box-node-sdk-v210-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2022-03-25-new-search-api-query-parameter
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2022/03-28-box-node-sdk-v210-released.md
published_at: '2022-03-28'
---
# Box Node SDK `v2.1.0` released

### New Features and Enhancements

* Client Credentials Grant authentication method ([#709][1]) ([`fbf4e80`][2])
* Deprecating `index_name` when executing metadata query ([#686][3]) ([`e01cc65`][4])
* **test:** add support for testing with Jest ([#676][5]) ([`1a11759`][6])

### Bug Fixes

* Client Credentials Grant authentication method supports token down-scoping ([#710][7]) ([`730368f`][8])
* Fix JWT expiration field being float instead of integer ([#715][9]) ([`7e950f1`][10]), closes [#713][11]

[1]: https://github.com/box/box-node-sdk/issues/709

[2]: https://github.com/box/box-node-sdk/commit/fbf4e80648821e38479b24bf489e7d222ae6c18f

[3]: https://github.com/box/box-node-sdk/issues/686

[4]: https://github.com/box/box-node-sdk/commit/e01cc650e4e793955be543e93928ad82a3254492

[5]: https://github.com/box/box-node-sdk/issues/676

[6]: https://github.com/box/box-node-sdk/commit/1a11759db999510c69d6a27f7becd565620bb000

[7]: https://github.com/box/box-node-sdk/issues/710

[8]: https://github.com/box/box-node-sdk/commit/730368f410ff56e9a8c90feea2192b29c08df198

[9]: https://github.com/box/box-node-sdk/issues/715

[10]: https://github.com/box/box-node-sdk/commit/7e950f1265a52ce251c42a186c8196089a9ed858

[11]: https://github.com/box/box-node-sdk/issues/713