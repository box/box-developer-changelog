---
applied_at: "2022-05-18"
applies_to: 
- api
is_impactful: true
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
---

# New Endpoints to Manage User Avatars

Starting today, the User Avatar APIs supports adding, updating, and deleting user avatars.

To create or update a user avatar, call the [`POST /users-id-avatar`][2] endpoint. Remember to include the path to the file you want to upload. If an avatar already exists, it will be replaced with the new photo uploaded.

```sh
curl -i -X POST -L https://api.box.net/2.0/users/userID/avatar 
    -H 'Authorization: Bearer <ACCESS_TOKEN>' 
    --form 'pic=@"path/to/file/file.jpeg"'
```
The response includes the [user avatar][4] object with URLs to the file location.

To delete a user avatar, call the [`DELETE /users-id-avatar`][3] endpoint:

```sh
curl -i -X DELETE -L https://api.box.net/2.0/users/userID/avatar 
    -H 'Authorization: Bearer <ACCESS_TOKEN>'
```

## Where to get support

Should you have any issues or need further guidance, please post a request to
our [developer forum][1] for any help needed.

[1]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum
[2]: e://post-users-id-avatar
[3]: e://delete-users-id-avatar
[4]: r://user-avatar
