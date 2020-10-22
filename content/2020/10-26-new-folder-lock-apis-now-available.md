---
applied_at: "2020-10-26"
applies_to: 
- api
is_impactful: false
is_new_feature: true
collapse: false
show_excerpt: true
release_source_url: ''
---

# New Folder Lock APIs now available

A new collections of APIs have been released to permit the restriction of move
and delete actions on folders. New [API reference][e_post] and [guides][g_post]
have been made available to help create and manage you folder locks.

To create a lock on a folder to prevent it from being moved or deleted, supply
the ID of a folder to the `POST /folder_locks/` endpoint.

```curl
curl -i -X POST "https://api.box.com/2.0/folder_locks" \
     -H "Authorization: Bearer <ACCESS_TOKEN>" \
     -H "Content-Type: application/json" \
     -d '{
       "folder": {
         "type": "folder",
         "id": "33552487093"
       }
     }'
```

Additional API endpoints are available to allow a developer to list all locks
on a given folder, or to remove an existing folder lock from a folder.

* **Create a folder lock**: [Guide][g_post] | [API Reference][e_post]
* **List all locks on a folder**: [Guide][g_get] | [API Reference][e_get]
* **Remove a folder lock**: [Guide][g_del] | [API Reference][e_del]

[e_get]: e://get-folder-locks
[e_post]: e://post-folder-locks
[e_del]: e://delete-folder-locks-id

[g_get]: g://folders/single/get-locks
[g_post]: g://folders/single/create-lock
[g_del]: g://folders/single/delete-lock
