---
applied_at: '2021-04-09'
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
id: 2021-04-09-token-exchange-optional-parameter-added
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2021-04-01-box-java-sdk-v2540-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/04-09-token-exchange-optional-parameter-added.md
published_at: '2021-04-09'
---
# Token Exchange Optional Parameter Added

<!-- more -->

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

## Updates

When requesting a token, you now have the ability to downscope that token for a shared link using the link URL instead of using a `resource` URL. Password protected links are not supported. This option cannot be used in addition to the `resource` option nor can it be a shared link created on a weblink.

- Added the ability to downscope a token for a [shared link](g://shared-links)