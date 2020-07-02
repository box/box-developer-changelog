---
applied_at: '2019-10-25'
applies_to:
  - api
is_impactful: false
is_new_feature: true
---
# New fields for File Versions

New optional fields have been made available within the File Version object,
namely `trashed_by`, `restored_by` and `restored_at`.

The fields will be returned as part of the standard
[File Version object](endpoint://resources/file-version/).

The purpose of these fields is to have a better understanding of when file
versions have been moved in and out of the trash, and by whom.
