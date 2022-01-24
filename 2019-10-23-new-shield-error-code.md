---
applied_at: '2019-10-23'
applies_to:
  - api
is_impactful: false
is_new_feature: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2019-10-23-new-shield-error-code
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2019-10-24-java-sdk-v2400-release
previous_page_id: 2019-10-18-relay-api-endpoints-will-eol-on-december-31st-2019
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2019/10-23-new-shield-error-code.md
published_at: '2019-10-23'
---
# New Shield Error Code

A new error code for [Box Shield][box-shield] has been released. The new
`403 - forbidden_by_policy` error code will be raised when the enterprise has
applied Shield access policies that prevent the action, such as downloading
items.

The resolution path is to contact your Box admin to adjust the Shield access
policies if the action is required.

See the
[error code documentation](guide://api-calls/permissions-and-errors/common-errors)
for more details and solution path.

[box-shield]: https://www.box.com/shield
