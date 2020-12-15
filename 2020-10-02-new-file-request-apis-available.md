---
applied_at: '2020-10-02'
applies_to:
  - api
is_impactful: false
is_new_feature: true
collapse: false
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2020-10-02-new-file-request-apis-available
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2020-10-05-box-node-sdk-v1343-released
previous_page_id: 2020-10-02-box-python-sdk-v2100-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2020/10-02-new-file-request-apis-available.md
published_at: '2020-10-02'
---
# New File Request APIs available

A new collection of APIs are now available that allows
developers to create and update File Requests. We've
updated the [reference documentation][copy] and added
[new guides][guides] to help you manage your file requests.

To create a copy of an existing file request, all you need is
the unique ID of an existing file request, and the ID of the
folder to apply the new request to.

```curl
curl -i -X POST "https://api.box.com/2.0/file_requests/42037322/copy" \
     -H "Authorization: Bearer <ACCESS_TOKEN>" \
     -d '{
       "folder": {
         "id": "2233212"
       }
     }'
```

Additional APIs are available that allow a developer to get more details
about a file request, update a file request, and delete a file request.
For more details, please check out the developer documentation.

* **Create a template file request**: [Guide][g_template]
* **Create a copy of a file request**: [Guide][g_copy] | [API Reference][copy]
* **Get information about a file request**: [Guide][g_get] | [API Reference][get]
* **Update a file request's configuration**: [Guide][g_put] | [API Reference][put]
* **Delete a file request**: [Guide][g_del] | [API Reference][del]

[copy]: e://post_file_requests_id_copy
[get]: e://get_file_requests_id
[del]: e://delete_file_requests_id
[put]: e://put_file_requests_id

[guides]: g://file-requests
[g_template]: g://file-requests/template
[g_copy]: g://file-requests/copy
[g_get]: g://file-requests/get
[g_del]: g://file-requests/delete
[g_put]: g://file-requests/update