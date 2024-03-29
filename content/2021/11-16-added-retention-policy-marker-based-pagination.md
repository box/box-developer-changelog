---
applied_at: "2021-11-16"
applies_to: 
- api
is_impactful: false
is_new_feature: false
collapse: true
show_excerpt: true
release_source_url: ''
---

# Added Retention Policy Marker Based Pagination

Our OpenAPI specification has been updated for retention policy and retention
policy assignment endpoints to show use of `marker` based pagination and
`fields` query parameters.

<!-- more -->

## Updates

The following updates were made:

* Added `fields`, `limit`, and `marker` query parameters to the
  [`GET /retention-policies`](e://get-retention-policies) and
  [`GET /retention-policies-id-assignments`](e://get-retention-policies-id-assignments)
  endpoints.
* Added `limit` and `next_marker ` to the response object for
  [retention policies](e://resources/retention-policies) and
  [retention policy assignments](e://resources/retention-policy-assignments)

## Where to get support

Should you have any issues or need further guidance, please create a post on
our [developer forum][forum] for any help needed.

[forum]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum
