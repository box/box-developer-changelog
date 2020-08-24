---
applied_at: "2020-08-28"
applies_to: 
  - api
is_impactful: false
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
---

# New `multiSelect` metadata support in search API

Starting today, the [Search API][search] adds support for matching items
by multiple values of a [`multiSelect` metadata field][multi_select]. Before this
change, it was not possible to find items that matched multiple values for a
`multiSelect` field.

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
value of either `shield` and `platform`.

[search]: e://get_search
[multi_select]: g://metadata/fields/multi-select
