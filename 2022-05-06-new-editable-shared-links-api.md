---
applied_at: '2021-05-06'
applies_to:
  - api
is_impactful: true
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2022-05-06-new-editable-shared-links-api
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2022-05-03-new-sign-events-payload-field
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2022/05-06-new-editable-shared-links-api.md
published_at: '2022-05-06'
---
# New Editable Shared Links API

Now, developers can make files editable via shared links using the API.

<!-- more -->

## Documentation Updates
* Added a new `can_edit` value to the `permissions` object for the [file][3], [folder][2], and [web link][5] resources
* Added a new `shared_link_permission_options` field to the [`file--full`][4] resource
* Added a [shared link section for web links][6] in the reference documentation
* Added a [permissions page][7] to the shared links guide documentation
* Combined the [update and add shared link][8] guide page since they utilize the same PUT endpoint
* Updated code snippets across several shared link pages

## Enhancement Details
* Instead of having to collaborate a user into a file to give edit access, you can set the `shared_link.permissions.can_edit` field to `true`.
* The `can_edit` field will be returned for all shared link objects on files, folders, and web links; however, you can only set it to true for a file.
* Our SDK libraries will gain this feature in the coming quarters.
* If an admin has turned off editable shared links in the admin console, you will not be able to use this feature.

### cURL Example
```curl
curl -i -X PUT 'https://api.box.com/2.0/files/123456789?fields=shared_link' \
        -H 'Content-Type: application/json' \
        -H 'Authorization: Bearer [ACCESS TOKEN]' \
        -d '{
          "shared_link": {
            "permissions": {
              "can_preview": true,
              "can_download": true,
              "can_edit": true
            }
          }
        }'
```

## Where to get support
Should you have any issues or need further guidance, please post a request to
our [developer forum][1] for any help needed.

[1]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum
[2]: r://folder--full#param-shared_link-permissions
[3]: r://file--full#param-shared_link-permissions
[4]: r://file--full/#param-shared_link_permission_options
[5]: r://web-link/#param-shared_link-permissions
[6]: e://get-shared-items--web-links
[7]: g://shared-links/permissions
[8]: g://shared-links/create-or-update