---
applied_at: "2021-08-25"
applies_to: 
- api
is_impactful: false
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
---

# New APIs to get files & versions under retention

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

[retention-policies]: g://retention-policies
[files-retention]: e://get-retention-policy-assignments-id-files-under-retention
[file-versions-retention]: e://get-retention-policy-assignments-id-files-versions-under-retention
[file]: e://get-file-version-retentions-id
[file-version]: e://get-file-version-retentions