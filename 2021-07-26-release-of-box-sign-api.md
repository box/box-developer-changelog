---
applied_at: '2021-07-26'
applies_to:
  - api
  - java
is_impactful: false
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2021-07-26-release-of-box-sign-api
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2021-08-04-changes-to-jwt-token-format
previous_page_id: 2021-07-26-box-java-sdk-v2550-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/07-26-release-of-box-sign-api.md
published_at: '2021-07-26'
---
# Release of Box Sign API

Today, July 26th, 2021, beings the roll out of Box Sign! Programmatically
harness the full functionality of the [Box Sign web app experience][webapp] by
leveraging our newest API endpoints to create, list, resend, and cancel Box Sign
requests.

While Box Sign does not need to be enabled by an Admin to use its API endpoints,
it does need to be rolled out to your enterprise. We will notify Admins as it
becomes available for their Box instance.

<!-- more -->

At a minimum, creating a Box Sign request requires selecting a file for
signature, a destination folder for the signed document/[signing log][log], and
designating signers. At this time, only one file can be signed per request.

```curl 
curl -i -X PUT "https://api.box.com/2.0/sign_requests" \
     -H "Authorization: Bearer <ACCESS_TOKEN>" \
     -d '{
       "signers": [
          {    
            "role": "signer",
            "email": "example_email@box.com"
          }
        ],
       "source_files": [
          {
            "type": "file",
            "id": "123456789"
          }
       ],
       "parent_folder": 
          {
            "type": "folder",
            "id": "0987654321"
          }
     }'
```

## Features

* Add endpoint to **create** Box Sign requests: [Guide][c] |
[API reference][c_ref]
* Add endpoint to **list** Box Sign requests: [Guide][l] |
[API reference][l_ref]
* Add endpoint to **get** Box Sign requests by ID: [Guide][g] |
[API reference][g_ref]
* Add endpoint to **resend** Box Sign requests: [Guide][r] |
[API reference][r_ref]
* Add endpoint to **cancel** Box Sign requests: [Guide][ca] |
[API reference][ca_ref]
* Java SDK support: [GitHub][gh]

[webapp]: https://support.box.com/hc/en-us/articles/4404086827411-Introducing-Box-Sign
[log]: https://support.box.com/hc/en-us/articles/4404095202579-Viewing-the-signing-log
[c]: g://box-sign/create-sign-request
[c_ref]: e:///post-sign-requests
[l]: g://box-sign/list-sign-requests/#all
[l_ref]: e://get-sign-requests
[g]: g://box-sign/list-sign-requests/#by-id
[g_ref]: e://get-sign-requests-id
[r]: g://box-sign/resend-sign-request
[r_ref]: e://post-sign-requests-id-resend
[ca]: g://box-sign/cancel-sign-request
[ca_ref]: e://post-sign-requests-id-cancel
[gh]: https://github.com/box/box-java-sdk/blob/main/doc/sign_requests.md