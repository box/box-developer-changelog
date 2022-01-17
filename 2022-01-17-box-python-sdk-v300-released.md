---
applied_at: '2022-01-17'
applies_to:
  - sdks
  - python
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-python-sdk/releases/tag/v3.0.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2022-01-17-box-python-sdk-v300-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2022-01-17-box-java-sdk-v300-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2022/01-17-box-python-sdk-v300-released.md
published_at: '2022-01-17'
---
# Box Python SDK `v3.0.0` released

**Breaking Changes**

* Drop support for python 2.7 ([#645][1])
* Add missing parameter `stream_position to get_admin_events` method ([#648][2])
* Drop support for python 3.5 ([#654][3])
* Remove deprecated code using insensitive language ([#651][4])
* Enforcing usage of keyword-only arguments in some functions ([#656][5])

**New Features and Enhancements:**

* Remove `six` library and `__future__` imports ([#646][6])
* Add type hints to method parameters ([#650][7])

**Bug Fixes:**

* Add missing `api_call` decorators on `multi-iput` calls ([#653][8])
* Added `py.typed` file for `mypy` to recognize type hints ([#657][9])

[1]: https://github.com/box/box-python-sdk/pull/645

[2]: https://github.com/box/box-python-sdk/pull/648

[3]: https://github.com/box/box-python-sdk/pull/654

[4]: https://github.com/box/box-python-sdk/pull/651

[5]: https://github.com/box/box-python-sdk/pull/656

[6]: https://github.com/box/box-python-sdk/pull/646

[7]: https://github.com/box/box-python-sdk/pull/650

[8]: https://github.com/box/box-python-sdk/pull/653

[9]: https://github.com/box/box-python-sdk/pull/657