---
applied_at: '2023-07-12'
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
id: 2023-07-12-sign-request-status
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2023-07-07-box-python-sdk-v373-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2023/07-12-sign-request-status.md
published_at: '2023-07-12'
---
# Sign Request API improvements

[Sign Request status][1] parameter now has two additional values:

* `finalizing` to reflect the state when all signers have signed the request, but the final document with signatures and the signing log has not been generated yet.
* `error_finalizing` to reflect the state when the `finalizing` phase did not complete successfully.

<!-- more -->

## Where to get support

Should you have any issues or need further guidance, please post a request to our [developer forum][2] for any help needed.


[1]: r://sign-request#param-status
[2]: https://forum.box.com/