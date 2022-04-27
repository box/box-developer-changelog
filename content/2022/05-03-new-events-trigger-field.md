---
applied_at: "2021-05-03"
applies_to: 
- api
is_impactful: true
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
---

# New Field In Sign Events Payload

Now, the `additional_details` payload for Sign Events includes the `batch_send` field. 

<!-- more -->

## Updates
* Added new field `batch_send` to `additional_details` payload for [Sign Events][2] 

## Features
* The `batch_send` field in the event payload provides the batch ID. This ID is used to identify the batch that includes the data of the sign request recipients.


## Where to get support

Should you have any issues or need further guidance, please post a request to
our [developer forum][1] for any help needed.

[1]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum
[2]: g://events/event-triggers/sign-events
