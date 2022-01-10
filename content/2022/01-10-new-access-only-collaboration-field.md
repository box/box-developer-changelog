---
applied_at: "2022-01-10"
applies_to: 
- api
is_impactful: false
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
---

# New Access Only Collaboration Field

A new field has been added to the [collaboration][2] resource, allowing users to
be collaborated into content that does not appear on their All Files page.

<!-- more -->

For the time being, the field will only be returned if requested in the `fields`
query parameter. This means any current calls made to the collaboration
endpoints will return the same response objects as before.

## Updates

* Added an `is_access_only` field to the [collaboration][2] resource, updating
  any [endpoints][4] that use it as a response object
* Added an `is_access_only` request body parameter to the [`POST /collaborations`][3] endpoint
* Added error response codes to the [`POST /collaborations`][3] endpoint for the new field


## Where to get support

Should you have any issues or need further guidance, please post a request to
our [developer forum][1] for any help needed.

[1]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum
[2]: r://collaboration/#param-is_access_only
[3]: e://post-collaborations
[4]: e:/get-collaborations-id