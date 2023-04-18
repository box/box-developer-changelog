---
applied_at: '2023-03-28'
applies_to:
  - api
is_impactful: false
is_new_feature: true
release_source_url: ''
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2023-03-28-collaborations-api-update
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2023-04-18-box-windows-sdk-v521-released
previous_page_id: 2023-03-14-box-windows-sdk-v520-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2023/03-28-collaborations-api-update.md
published_at: '2023-03-28'
---
# Collaborations API - `pending` status

We added more information about the `pending` status in our [collaborations API][1].

If the collaboration is in [`pending` status][2]:

- login and name return an empty string,
- the following fields are redacted:
    - `login` and `name` are hidden if a collaboration was created using `user_id`,
    - `name` is hidden if a collaboration was created using `login`.

## Where to get support

Should you have any issues or need further guidance, please post a request to
our [developer forum][3] for any help needed.

[1]: r://collaboration
[2]: e://post-collaborations
[3]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum