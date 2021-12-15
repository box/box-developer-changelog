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

* Add `admin_logs_streaming` support for events stream ([#623][1])
* Add `vanity_name` parameter for creating shared link to a file or folder ([#637][2])
* Add getting files and file versions under retention for a retention policy assignment ([#633][3])
* Support base item operations for WebLink class ([#639][4])

**Bug Fixes:**

* Limit cryptography to version <3.5.0 ([#636][5])
* Avoid raising 404 when a thumbnail cannot be generated for a file ([#642][6])

[1]: <https://github.com/box/box-python-sdk/pull/623>
[2]: <https://github.com/box/box-python-sdk/pull/637>
[3]: <https://github.com/box/box-python-sdk/pull/633>
[4]: <https://github.com/box/box-python-sdk/pull/639>
[5]: <https://github.com/box/box-python-sdk/pull/636>
[6]: <https://github.com/box/box-python-sdk/pull/642>