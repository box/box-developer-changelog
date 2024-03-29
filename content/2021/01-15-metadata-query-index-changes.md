---
applied_at: "2021-01-15"
applies_to: 
- api
is_impactful: false
is_new_feature: false
collapse: true
show_excerpt: true
release_source_url: ''
---

# Metadata Query index changes

When making file / folder [metadata query][mdq] requests, a
search index needs to be created for queries where more than
10,000 files / folders are being searched.

To improve the efficiency and simplicity of this process, we have changed the
way in which indexes are used by removing the explicit requirement to supply an
index through the `use_index` key in a metadata query API request.

<!-- more -->

There is no impact to existing applications that are currently supplying an
index through the `use_index` key. The supplied index will be ignored in
the request and the most efficient index will be automatically applied.

## Previous Indexing Process

The following was the previous process for creating and using an index for a
metadata query request involving 10,000+ files / folders in the search. This is
the process being replaced.

* Contact the metadata query team to request an index.
* The metadata query team would create the index and supply back the name of
 the newly created index.
* When making metadata query requests this index name was
 supplied as the value for the `use_index` key in the API request.

## New Indexing Process

The following is the new process for creating and using an index.

* Contact the metadata query team to request an index.

The `use_index` key within the metadata query API request has been removed.
Instead, the most efficient query will be automatically applied during the
search process.

Indexes that are currently supplied in the `use_index` key will be ignored, and
instead the most efficient index will be used.

Application owners may safely remove the `use_index` key and value from their
metadata query requests at their discretion. 

[mdq]: g://metadata/queries/