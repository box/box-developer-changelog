---
applied_at: '2021-04-13'
applies_to:
  - api
is_impactful: false
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2021-04-13-token-exchange-optional-parameter-added
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2021-04-15-notice-of-behavior-change-for-item_download-events
previous_page_id: 2021-04-01-box-java-sdk-v2540-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/04-13-token-exchange-optional-parameter-added.md
published_at: '2021-04-13'
---
# New option for downscoping tokens using shared links

When requesting an access token, you now have the ability to downscope that token to a file or folder using a shared link.

This new parameter may be used instead of using the `resource` parameter, which allows you to supply a file or folder ID to perform the same action.

<!-- more -->

## Updates

* Added new `box_shared_link` request parameter to [downscoping documentation][1]. A shared link may be supplied to downscope an access token in the below way.

```bash
{
  curl -i -X POST "https://api.box.com/oauth2/token" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "subject_token=[ACCESS_TOKEN]" \
     -d "subject_token_type=urn:ietf:params:oauth:token-type:access_token" \
     -d "scope=item_upload item_preview base_explorer" \
     -d "box_shared_link=https://cloud.box.com/s/123456" \
     -d "grant_type=urn:ietf:params:oauth:grant-type:token-exchange"
}
```

* Added `box_shared_link` request parameter to [request access token API reference][2].

[1]: https://developer.box.com/guides/authentication/access-tokens/downscope/#downscoping-in-practice

[2]: https://developer.box.com/reference/post-oauth2-token/#request
