---
applied_at: "2021-03-25"
applies_to: 
- api
is_impactful: false
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
---

# New Metadata Query Indices Endpoint

A new API endpoint has been introduced to get a list of metadata query indices
for a given template and scope.

<!-- more -->

Metadata queries provide a way to find files and folders by searching for the
metadata attached to them.

When performing metadata queries on 10,000 or more files or folders,
non-performant queries may produce an `HTTP 403` error.
Creating a search index delivers the ability to run
these queries at scale to bypass this error state, and are automatically applied
during the querying process.

The new endpoint permits the lookup of these created search indices. 

## Features

This release has introduced the following new content and features.

* New API endpoint to get a list of metadata query
 indices by scope and template.
* New metadata query index [response object][mdq-index-response].
* New metadata query indices [response object][mdq-indices-response].

## Updates

This release includes the following updated content.

* Updated metadata query indices guide to include details
 on how to get a list of metadata query indices. 

[mdq-indices-response]: https://developer.box.com/reference/resources/metadata-query-index/
[mdq-index-response]: https://developer.box.com/reference/resources/metadata-query-indices/