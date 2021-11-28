---
applied_at: '2021-11-22'
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
id: 2021-11-22-new-shield-download-event
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2021-11-23-box-java-sdk-v2580-released
previous_page_id: 2021-11-17-new-event-stream-live-monitoring
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/11-22-new-shield-download-event.md
published_at: '2021-11-22'
---
# New Shield Download Event

Today, we released a new `event_type` to the [Enterprise Event][events] stream
for downloads that are restricted based on a Shield access policy.

<!-- more -->

If an admin creates a shield access policy that restricts downloads and an
end user is blocked from downloading a file, an event is produced
within the [enterprise event][events] stream. Events will also be generated
when a user is viewing a folder with a file restricted from download, viewing a
file in preview that is restricted from download, and when a user requests to
download a file through the API that is restricted from download. These events
follow the standard event object schema and the `event_type` value set
to `SHIELD_DOWNLOAD_BLOCKED`.

## Updates

* Added a [new section][new-event] to the Smart Access event trigger documentation
* Added `SHIELD_DOWNLOAD_BLOCKED` to the [enterprise event list][event-list]

## Where to get support

Should you have any issues or need further guidance, please post a request to
our [developer forum][forum] for any help needed.

[forum]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum
[events]: g://events/enterprise-events/for-enterprise
[new-event]: g://events/event-triggers/shield-alert-events/#download-restriction
[event-list]: g://events/enterprise-events/for-enterprise/#event-types