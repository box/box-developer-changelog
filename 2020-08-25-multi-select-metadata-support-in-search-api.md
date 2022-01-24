---
applied_at: '2020-08-25'
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
id: 2020-08-25-multi-select-metadata-support-in-search-api
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2020-09-10-group-api-adds-new-filter-and-permissions
previous_page_id: 2020-08-21-box-cli-v260-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2020/08-25-multi-select-metadata-support-in-search-api.md
published_at: '2020-08-25'
---
# New `multiSelect` metadata support in search API

Starting today, the [Search API][search] adds support for matching items
by multiple values of a [`multiSelect` metadata field][multi_select]. Before this
change, it was not possible to find items by the value of a `multiSelect` field.

To perform a search for items where a metadata field matches
multiple values, the `mdfilters` parameter now supports a list of values.

```curl
curl -G 'https://api.box.com/2.0/search' \
     -H 'Authorization: Bearer <ACCESS_TOKEN>' \
     -d 'mdfilters=[{"scope":"enterprise_12345","templateKey":"contractInfo","filters":{"products":["shield","platform"]}}]'
```

<!-- more -->

In this example, the `mdfilters` query parameter contains one filter with a
`scope`, a `templateKey`, and a set of `filters`. Here is the same filter
in a more readable format.

```json
[
  {
    "scope": "enterprise_12345",
    "templateKey": "contractInfo",
    "filters": {
      "products": [
        "shield",
        "platform"
      ]
    }
  }
]
```

What is new here is that the `products` filter now performs a match on multiple
values, only returning files and folders for which the template has a `products`
value of either `shield` or `platform`. The value of the field can contain
multiple values and only match on one of the values specified in the filter.
For example `["shield", "governance"]` will be a match for the filter
`["shield", "platform"]` as `shield` is included in the filter.

[search]: e://get_search

[multi_select]: g://metadata/fields/multi-select
