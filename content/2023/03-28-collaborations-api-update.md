---
applied_at: '2023-03-28'
applies_to:
  - api
is_impactful: false
is_new_feature: true
release_source_url: ''
collapse: true
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