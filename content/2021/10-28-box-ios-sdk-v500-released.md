---
applied_at: '2021-10-28'
applies_to:
  - sdks
  - ios
  - mobile
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-ios-sdk/releases/tag/v5.0.0'
collapse: true
---

# Box iOS SDK `v5.0.0` released

**Breaking Changes:**

* Update PagingIterator to return pages and simplify logic ([#737][1])
* Remove insensitive language field `collaborationWhiteList` in BoxClient. Use `collaborationAllowList` instead. ([#790][2])

**New Features and Enhancements:**

* Replace insensitive event types ([#785][3])
* Add SignAPI support ([#792][4])

[1]: https://github.com/box/box-ios-sdk/pull/737

[2]: https://github.com/box/box-ios-sdk/pull/790

[3]: https://github.com/box/box-ios-sdk/pull/785

[4]: https://github.com/box/box-ios-sdk/pull/792
