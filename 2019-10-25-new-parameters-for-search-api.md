---
applied_at: '2019-10-25'
applies_to:
  - api
is_impactful: false
is_new_feature: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2019-10-25-new-parameters-for-search-api
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2019-11-09-box-ui-elements-v1100-released
previous_page_id: 2019-10-25-new-fields-for-file-versions
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2019/10-25-new-parameters-for-search-api.md
---
# New parameters for Search API

New optional query parameters have been made available for the
[Search API](e://get-search), namely `sort` and `direction`.

The purpose of these parameters is to allow applications to sort items by their
`modified_at` date in ascending or descending order.