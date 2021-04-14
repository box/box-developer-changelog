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
next_page_id: ''
previous_page_id: 2021-04-01-box-java-sdk-v2540-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/04-13-token-exchange-optional-parameter-added.md
published_at: '2021-04-13'
fullyTranslated: true
---
# New option for downscoping tokens using shared links

When requesting an access token, you now have the ability to downscope that token to a file or folder using a shared link.

This new parameter may be used instead of using the `resource` parameter, which allows you to supply a file or folder ID to perform the same action.

<!-- more -->

## 更新内容

* Added new `box_shared_link` request parameter to [downscoping documentation][1]. A shared link may be supplied to downscope an access token in the below way.

```bash
{
  curl -i -X POST "https://api.box.com/oauth2/token" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "client_id=[CLIENT_ID]" \
     -d "client_secret=[CLIENT_SECRET]" \
     -d "code=[CODE]" \
     -d "grant_type=authorization_code"\
     -d "box_shared_link=https://cloud.box.com/s/123456" \
}
```

* Added `box_shared_link` request parameter to [request access token API reference][2].

[1]: https://developer.box.com/guides/authentication/access-tokens/downscope/#downscoping-in-practice

[2]: https://developer.box.com/reference/post-oauth2-token/#request
