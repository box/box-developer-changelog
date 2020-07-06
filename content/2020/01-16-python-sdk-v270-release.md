---
applied_at: '2020-01-16'
applies_to:
  - python
  - sdks
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-python-sdk/releases/tag/v2.7.0'
---

# Python SDK `v2.7.0` release

- Fixed bug in `get_admin_events` function which caused errors when the optional `event_types` parameter was omitted.
- Add marker based pagination for listing users.
- Added support for more attribute parameters when uploading new files and new versions of existing files.
- Combined preflight check and lookup of accelerator URL into a single request for uploads.
- Fixed JWT retry logic so a new JTI claim is generated on each retry.
- Fixed bug where JWT authentication requests returned incorrect error codes.
- Fixed retry logic so when a Retry-After header is passed back from the API, the SDK waits for the amount of time specified in the header before retrying.