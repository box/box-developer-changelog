---
applied_at: '2021-12-08'
applies_to:
  - sdks
  - python
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-python-sdk/releases/tag/v2.14.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2021-12-08-box-python-sdk-v2140-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2021-11-29-oauth-20-redirect-url-updates
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/12-08-box-python-sdk-v2140-released.md
published_at: '2021-12-08'
fullyTranslated: true
---
# Box Python SDK `v2.14.0`のリリース

**新機能と機能強化:**

* Add `admin_logs_streaming` support for events stream (`#623 <https://github.com/box/box-python-sdk/pull/623>`\_)
* Add `vanity_name` parameter for creating shared link to a file or folder (`#637 <https://github.com/box/box-python-sdk/pull/637>`\_)
* Add getting files and file versions under retention for a retention policy assignment (`#633 <https://github.com/box/box-python-sdk/pull/633>`\_)
* Support base item operations for WebLink class (`#639 <https://github.com/box/box-python-sdk/pull/639>`\_)

**バグ修正:**

* Limit cryptography to version \<3.5.0 (\`#636 <https://github.com/box/box-python-sdk/pull/636>

\`\_)

* Avoid raising 404 when a thumbnail cannot be generated for a file (`#642 <https://github.com/box/box-python-sdk/pull/642>`\_)
