---
applied_at: '2021-09-10'
applies_to:
  - api
is_impactful: false
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2021-09-10-extend-retention-via-files-api
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2021-09-07-new-enhancements-to-retention-apis
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/09-10-extend-retention-via-files-api.md
published_at: '2021-09-10'
---
# Extend Retention Via Files API

Now, you can extend the retention date for a file that is already under
retention using the new `disposition_at` field. If the date is extended, it
cannot be reverted or updated to a date prior to the new date.

<!-- more -->

## Updates

* Added a `disposition_at` field to the [File(Full) resource][file-full]
* Added a `disposition_at` parameter to the [PUT file endpoint][file-put]
* Added a note in the [retention policy guide section][extend-retention]

## Where to get support

Should you have any issues or need further guidance, please post a request to
our [developer forum][forum] for any help needed.

[forum]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum
[extend-retention]: g://retention-policies/#extend-retention-for-a-file
[file-put]: e://put-files-id/#param-disposition_at
[file-full]: e://resources/file--full/#param-disposition_at