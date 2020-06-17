---
applied_at: '2019-02-15'
applies_to:
  - python
  - sdks
is_impactful: false
is_new_feature: true
source_url: 'https://github.com/box/box-python-sdk/releases/tag/v2.2.0'
---

# Python SDK `v2.2.0` release

- Added ability for user to [retrieve an avatar](https://github.com/box/box-python-sdk/blob/master/docs/usage/user.md#get-the-avatar-for-a-user) for a user.
- Changed retry strategy to use exponential back-off with randomized jitter.