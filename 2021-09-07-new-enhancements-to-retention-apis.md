---
applied_at: '2021-09-07'
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
id: 2021-09-07-new-enhancements-to-retention-apis
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2021-09-21-end-of-support-for-open-with-ui-element
previous_page_id: 2021-09-01-classification-name-field-now-in-events
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/09-07-new-enhancements-to-retention-apis.md
published_at: '2021-09-07'
---
# New enhancements to retention APIs

Two new API endpoints have been introduced to get files and file versions that
are under retention for a given retention policy assignment. These APIs are
part of the [retention policy][retention-policies] suite of APIs. They are
intended to replace the separate [file][file] and [file version][file-version]
retention endpoints, which will soon be deprecated from the Box API. The date
of the deprecation will be announced at a later date.

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
* Added an editable `description` field to the
  [retention policy][retention-policy] resource.
* Added a non-writable `start_field_date` to the
  [retention policy assignment][retention-policy-assignment]
  resource. This field is the metadata field's key id. The value can also be
  `upload_date` if the `assigned_to` type is not `metadata_template` or a date
  field has not been selected.

[retention-policies]: g://retention-policies

[files-retention]: e://get-retention-policy-assignments-id-files-under-retention

[file-versions-retention]: e://get-retention-policy-assignments-id-file-versions-under-retention

[file]: e://get-file-version-retentions-id

[file-version]: e://get-file-version-retentions

[retention-policy]: e://resources/retention-policy

[retention-policy-assignment]: e://resources/retention-policy-assignment
