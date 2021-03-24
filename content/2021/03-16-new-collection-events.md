---
applied_at: "2021-03-16"
applies_to: 
- api
is_impactful: false
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
---

# New Collection Events

External collection events are now available via the
[enterprise events][enterprise-events] stream.

[Collections][collections] in Box are a way to group files, folders, and web
links without putting them all into a folder together. These new events provide
a method for monitoring when collection actions are taken within an enterprise.

The events follow the standard event object schema, and include the
following:

* `COLLECTION_CREATE`: A collection was created
* `COLLECTION_DELETE`: A collection was deleted
* `COLLECTION_UPDATE`: A collection was updated
* `COLLECTION_ITEM_CREATE`: An item was added to a collection
* `COLLECTION_ITEM_DELETE`: An item was removed from a collection
* `COLLECTION_ITEM_UPDATE`: An item in a collection was updated

[enterprise-events]: g://events/for-enterprise/
[collections]: g://collections/