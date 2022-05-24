---
applied_at: "2022-05-06"
applies_to: 
- api
is_impactful: true
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
---

# New Field Added to Sign Events Payload

The `additional_details` Sign Events payload now includes the `batch_send` field identifying a sign request sent to multiple recipients at once. If such a batch send request exists, the payload also provides its `id`.

<!-- more -->

## Updates
* Added new field `batch_send` to `additional_details` payload for [Sign Events][2].

## Where to get support

Should you have any issues or need further guidance, please post a request to
our [developer forum][1] for any help needed.

[1]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum
[2]: g://events/event-triggers/sign-events
