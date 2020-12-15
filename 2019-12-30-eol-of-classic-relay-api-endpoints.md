---
applied_at: '2019-12-30'
applies_to:
  - api
is_impactful: true
is_new_feature: false
is_index: false
category_id: changelog
subcategory_id: ''
id: 2019-12-30-eol-of-classic-relay-api-endpoints
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2019-12-20-java-sdk-v2430-release
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2019/12-30-eol-of-classic-relay-api-endpoints.md
published_at: 2019/12-30
---
# EOL of Classic Relay API Endpoints

As previously communicated on October 18 2019, Classic Relay API
endpoints are officially at an end of life state as of today.

The following endpoints are affected by this EOL and will now start responding
with error responses in applications making requests to them:

* Get list of published Relay Classic templates.
* Get list of Relay Classic workflows.
* Launch a Relay Classic workflow.

For any application encountering these error responses, please remove all calls
to the Relay Classic APIs listed above.