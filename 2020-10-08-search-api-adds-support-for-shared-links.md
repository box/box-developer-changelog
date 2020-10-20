---
applied_at: '2020-10-08'
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
id: 2020-10-08-search-api-adds-support-for-shared-links
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2020-10-19-box-windows-sdk-v3250-released
previous_page_id: 2020-10-05-box-node-sdk-v1343-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2020/10-08-search-api-adds-support-for-shared-links.md
published_at: '2020-10-08'
---
# Search API adds support for Shared Links

The [Search API][endpoint] now supports returning files,
folders and web links that the user has recently accessed
through a shared link.

Shared items can be requested by calling the
[`GET /search`][endpoint] API with the new
`include_recent_shared_links` query parameter set to `true`.

```sh
curl -i -X GET https://api.box.com/2.0/search?query=Contract&include_recent_shared_link=true
```

By default, the API won't return any shared items if this
query parameter is not provided or not set to true.


## Change in response format

When `include_recent_shared_links` is set to `true`, the
response has slightly changed to allow for the additional
information to be returned. Rather than returning a direct list
of files, folders, and web links the API now returns a list of
objects containing an `item` and an `accessible_via_shared_link`
property.

<!-- more -->

<Tabs>

<Tab title='With shared link results'>

```json
{
  "entries": [
    {
      "item": {
        "id": 12345,
        "etag": 1,
        "type": "file",
        "sequence_id": 3,
        "name": "Contract.pdf",
        ...
      },
      "accessible_via_shared_link": "https://www.box.com/s/vspke7y05sb214wjokpk"
    }
    ...
  ],
  "limit": 1000,
  "offset": 2000,
  "total_count": 5000
}
```

</Tab>

<Tab title='Without'>

```json
{
  "entries": [
    {
      "id": 12345,
      "etag": 1,
      "type": "file",
      "sequence_id": 3,
      "name": "Contract.pdf",
      ...
    },
    ...
  ],
  "limit": 1000,
  "offset": 2000,
  "total_count": 5000
}
```

</Tab>

</Tabs>

This change in response format should not impact any existing applications
as it only applies to any API call made with the new query parameter.

[endpoint]: e://get_search