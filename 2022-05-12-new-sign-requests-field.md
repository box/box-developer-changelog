---
applied_at: '2022-05-12'
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
id: 2022-05-12-new-sign-requests-field
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2022-05-16-box-ui-elements-v1500-released
previous_page_id: 2022-05-11-new-fields-in-event-api-ref
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2022/05-12-new-sign-requests-field.md
published_at: '2022-05-12'
fullyTranslated: true
---
# New Field Added to Sign Requests

Box Sign request response objects now include a new field - `content_type`. This field identifies the type of content expected for the `type` of `input` selected for the signer to complete.

<!-- more -->

## 更新内容

* Added new field `content_type` to the [sign request response object][2]

## サポート情報

Should you have any issues or need further guidance, please post a request to our [developer forum][1].

[1]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum

[2]: r://sign-request/#param-signers-inputs-content_type
