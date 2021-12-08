---
applied_at: '2021-12-08'
applies_to:
  - sdks
  - python
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-python-sdk/releases/tag/v2.14.0'
collapse: true
---

# Box Python SDK `v2.14.0` released

**New Features and Enhancements:**

* Add `admin_logs_streaming` support for events stream (`#623 <https://github.com/box/box-python-sdk/pull/623>`\_)
* Add `vanity_name` param for creating shared link to a file or folder (`#637 <https://github.com/box/box-python-sdk/pull/637>`\_)
* Add getting files and file versions under retention for a retention policy assignment (`#633 <https://github.com/box/box-python-sdk/pull/633>`\_)
* Support base item operations for WebLink class (`#639 <https://github.com/box/box-python-sdk/pull/639>`\_)

**Bug Fixes:**

* Limit cryptography to version <3.5.0 (`#636 <https://github.com/box/box-python-sdk/pull/636>`\_)
* Avoid raising 404 when a thumbnail cannot be generated for a file (`#642 <https://github.com/box/box-python-sdk/pull/642>`\_)
