---
applied_at: '2021-04-27'
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
id: 2021-04-27-new-apis-to-get-files-versions-under-retention
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2021-05-19-box-node-sdk-v1371-released
previous_page_id: 2021-04-22-box-ui-elements-v1300-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/04-27-new-apis-to-get-files-versions-under-retention.md
published_at: '2021-04-27'
---
# New APIs to get files & versions under retention

Two new API endpoints have been introduced to get files and file versions that
are under retention for a given retention policy assignment. These APIs are
part of the [retention policy][retention-policies] suite of APIs.

<!-- more -->

When a retention policy is applied via a retention policy assignment, folders
are selected for which the retention policy should be applied. The files and
file versions within those folders will be the content that is returned from
calling these new endpoints.

## Features

This release has introduced the following new content and features.

* [Get files under retention][files-retention]: Returns a list of files under
 retention that are associated with the specified retention policy assignment.
* [Get file versions under retention][file-versions-retention]: Returns a list
 of file versions under retention that are associated with the specified
 retention policy assignment.

[retention-policies]: g://retention-policies
[files-retention]: e://get-retention-policy-assignments-id-files-under-retention
[file-versions-retention]: e://get-retention-policy-assignments-id-files-versions-under-retention