---
applied_at: '2021-03-16'
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
id: 2021-03-16-new-collection-events
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2021-03-25-service-account-information-in-developer-console
previous_page_id: 2021-02-26-box-shield-smart-access-events
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/03-16-new-collection-events.md
published_at: '2021-03-16'
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