---
applied_at: "2021-11-17"
applies_to: 
- api
is_impactful: true
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
---

# New Event Stream Live Monitoring `stream_type`

Today, we released a new `stream_type` for the [`GET /events`][event-api]
API called `admin_logs_streaming`. This allows for near real time monitoring of
events after they happen in Box.

<!-- more -->

We recommend that applications subscribing to live events through `admin_logs`
migrate to `admin_logs_streaming` for the lowest and most consistent latency.
This `stream_type` requires the user to be an enterprise admin or co-admin with
the permission to **Run new reports and access existing reports**.

## Updates

We have made several documentation updates to help you learn about the new option

* Completely reorganized the [events][event-guide] guide section for
  easier understanding, including adding additional information to all pages
  in the various sections
* Updated the OpenAPI specification for the [`GET /events`][event-api] endpoint
  to include the new `stream_type` option of `admin_logs_streaming`
* Added a new how to migrate [`stream_type` page][migration] with steps
  on switching

## Where to get support

Should you have any issues or need further guidance, please post a request to
our [developer forum][forum] for any help needed.

[forum]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum
[event-api]: e://get-events
[event-guide]: g://events
[migration]: g://events/enterprise-events/migrate-to-stream