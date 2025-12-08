---
applied_at: "2020-12-03"
applies_to: 
- api
is_impactful: false
is_new_feature: false
collapse: true
show_excerpt: true
release_source_url: ''
---

# New `type` field in search API responses

A new field, `type`, has been introduced in the
[search result response object][search_result_shared_link] for returned shared
link items.

This response object format is only returned when making calls to the
[content search][search_content] endpoint with the
`include_recent_shared_links` query parameter set to `true`.

There is no impact to existing applications that are currently consuming this
response object.

## Updates

Prior to this release, the return object for shared link search results
included two objects:

* `accessible_via_shared_link`: The shared link which the item is accessible
 from.
* `item`: The file, folder, or web link that matched the search query.

```js
{
  "accessible_via_shared_link": "https://www.box.com/s/vfejh7y01sb263wjtgfe",
  "item": {
    ...
  }
}
```

This update introduces the new `type` field, which is a string that will always
be set to `search_result`.

```js
{
  "type": "search_result",
  "accessible_via_shared_link": "https://www.box.com/s/vfejh7y01sb263wjtgfe",
  "item": {
    ...
  }
}
```

For complete format information see the
[shared link search result][search_result_shared_link] response object.

[search_content]: r://get-search
[search_result_shared_link]: r://search-result-with-shared-link
