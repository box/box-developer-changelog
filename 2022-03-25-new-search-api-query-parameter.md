---
applied_at: '2021-03-24'
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
id: 2022-03-25-new-search-api-query-parameter
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2022-03-22-box-java-sdk-v312-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2022/03-25-new-search-api-query-parameter.md
published_at: '2022-03-25'
---
# New Search API Query Parameter

Now, you filter searching for content in the API using the new field `recent_updater_user_ids`.

<!-- more -->

## Updates
* Added new query parameter `recent_updater_user_ids` to the [`GET /get-search`][2] API endpoint

## Features
* Limits the search results to any items that have been updated by the given list of users, defined as a list of comma separated user IDs.
* This feature only searches back to the last 10 versions of an item.

### cURL Example

```curl
curl -i -X GET "https://api.box.com/2.0/search?query=sales&recent_updater_user_ids=1234567890,2314567890" \
     -H "Authorization: Bearer <ACCESS_TOKEN>"
```

## Where to get support

Should you have any issues or need further guidance, please post a request to
our [developer forum][1] for any help needed.

[1]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum
[2]: e://get-search/#param-recent_updater_user_ids