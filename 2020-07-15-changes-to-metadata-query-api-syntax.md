---
applied_at: '2020-07-15'
applies_to:
  - api
is_impactful: true
is_new_feature: true
collapse: true
show_excerpt: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2020-07-15-changes-to-metadata-query-api-syntax
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2020-07-16-change-to-enterprise-events-for-content-access
previous_page_id: 2020-06-25-box-node-sdk-v1330-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2020/07-15-changes-to-metadata-query-api-syntax.md
published_at: 2020/07-15
---
# Changes to Metadata Query API syntax

The [Metadata Query API][g_mdq_api] has been updated to **require explicitly
defined response fields**.

[g_mdq_api]: g://metadata/queries

<!-- more -->

```curl
curl -X POST https://api.box.com/2.0/metadata_queries/execute_read \
      -H 'Authorization: Bearer <ACCESS_TOKEN>" '
      -H 'Content-Type: application/json'
      -d '{
        "from": "enterprise_123456.customerInfo",
        "query": "tav >= :value",
        "query_params": {
          "value": 200000
        },
        "fields": [
          "name",
          "metadata.enterprise_123456.customerInfo.tav"
       ],
        "ancestor_folder_id": "0"
      }'
```

Additionally, **the response format now returns a list of items** rather
than a list of query results. Any metadata is now nested within the item,
rather than listed side-by-side with the item. Only fields specified in the
`field` array - as well as any base fields - are returned in the response.

```json
{
  "entries": [{
    "id": "394384323",
    "type": "file",
    "etag": 1,
    "name": "Contract.pdf",
    "metadata": {
      "enterprise_123456": {
        "customerInfo": {
          "$parent": "folder_12345,",
          "$scope": "enterprise_123456",
          "$template": "customerInfo",
          "$version": 1,
          "tav": 1000000
        }
      }
    }
  }]
}
```

## Legacy syntax

For reference, the API would previously return all standard fields for an item
as well as the matched metadata.

```curl
curl -X POST https://api.box.com/2.0/metadata_queries/execute_read \
      -H 'Authorization: Bearer <ACCESS_TOKEN>" '
      -H 'Content-Type: application/json'
      -d '{
        "from": "enterprise_123456.customerInfo",
        "query": "tav >= :value",
        "query_params": {
          "value": 200000
        },
        "ancestor_folder_id": "0"
      }'
```

The response body previously returned the items as a list of entries, each
containing an `item` and a `metadata` instance.

```json
{
  "entries":[
    {
      "item":{
        "type":"file",
        "id":"394384323",
        "name": "Contract.pdf",
        "file_version":{
          "type":"file_version",
          "id":"33482348",
          "sha1":"69888bb1bff455d1b2f8afea75ed1ff0b4879bf6"
        },
        ...
      },
      "metadata":{
        "enterprise_123456":{
          "customerInfo":{
            "tav": 1000000,
            "$id": "01234500-12f1-1234-aa12-b1d234cb567e",
            "$parent": "folder_12345,",
            "$scope": "enterprise_123456",
            "$template": "customerInfo",
            "$type": "customerInfo-6bcba49f-ca6d-4d2a-a758-57fe6edf44d0",
            "$typeVersion": 2,
            "$version": 1,
            "$canEdit": true
          }
        }
      }
    },
    ...
  ],
  "limit": 20,
  "next_marker":"AAAAAmVYB1FWec8GH6yWu2nwmanfMh07IyYInaa7DZDYjgO1H4KoLW29vPlLY173OKsci6h6xGh61gG73gnaxoS+o0BbI1/h6le6cikjlupVhASwJ2Cj0tOD9wlnrUMHHw3/ISf+uuACzrOMhN6d5fYrbidPzS6MdhJOejuYlvsg4tcBYzjauP3+VU51p77HFAIuObnJT0ff"
}
```

This legacy syntax **will still be available for any existing Metadata Query API
users only**. The legacy syntax will be turned off When all existing customers
have been migrated over to the new syntax.