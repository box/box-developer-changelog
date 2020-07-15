---
applied_at: '2019-10-25'
applies_to:
  - api
is_impactful: false
is_new_feature: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2019-10-25-new-fields-for-file-versions
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2019-10-25-new-parameters-for-search-api
previous_page_id: 2019-10-24-python-sdk-v261-release
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2019/10-25-new-fields-for-file-versions.md
published_at: '2019-10-25'
---
# New fields for File Versions

New optional fields have been made available within the File Version object,
namely `trashed_by`, `restored_by` and `restored_at`.

The fields will be returned as part of the standard
[File Version object](endpoint://resources/file-version/).

The purpose of these fields is to have a better understanding of when file
versions have been moved in and out of the trash, and by whom.