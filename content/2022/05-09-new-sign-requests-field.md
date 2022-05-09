---
applied_at: "2022-05-09"
applies_to: 
- api
is_impactful: true
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
---

# New Field Added to Sign Requests

Box Sign request response objects now include a new field - `content_type`. This field identifies the type of content expected for the `type` of `input` selected for the signer to complete.

<!-- more -->

## Updates
* Added new field `content_type` to the [sign request response object][2]

## Where to get support

Should you have any issues or need further guidance, please post a request to
our [developer forum][1].

[1]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum
[2]: r://sign-request/#param-signers-inputs-content_type
