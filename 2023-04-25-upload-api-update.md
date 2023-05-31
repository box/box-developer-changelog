---
applied_at: '2023-05-26'
applies_to:
  - api
is_impactful: true
is_new_feature: false
release_source_url: ''
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2023-04-25-upload-api-update
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2023-05-10-box-sign-templates
previous_page_id: 2023-04-24-box-java-sdk-v410-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2023/04-25-upload-api-update.md
published_at: '2023-04-25'
---
# Updates to File Upload API

In response to a potential security vulnerability while uploading a file using [Upload File API][1] and downscoped token,
we’re updating the Upload File API to return a 404 error in scenarios where the parent Folder ID is found, but the requester does not have permissions to access it.

# Where to get support

Should you have any issues or need further guidance, please post a request to our [developer forum][2] for any help needed.

[1]: g://uploads/direct
[2]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum