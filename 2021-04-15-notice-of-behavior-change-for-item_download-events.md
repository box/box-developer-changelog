---
applied_at: '2021-04-15'
applies_to:
  - api
is_impactful: false
is_new_feature: false
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2021-04-15-notice-of-behavior-change-for-item_download-events
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2021-04-13-token-exchange-optional-parameter-added
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/04-15-notice-of-behavior-change-for-item_download-events.md
published_at: '2021-04-15'
fullyTranslated: true
---
# Notice of behavior change for item download events

Starting today, we will begin rolling out changes to the behavior of item download events when an application consumes those events from our [event API endpoints][event-apis].

This change will not cause downtown within existing applications or require any application changes to prevent uptime disruptions.

<!-- more -->

## 変更の概要

Within the previous behavior when events were consumed, downloaded item events were surfaced through the `ITEM_DOWNLOAD` event type for the owner of the content as well as any contributors assigned to the content. This meant that if a file with 2000 collaborators on it was downloaded, the file owner plus all 2000 collaborators would have an event created stating that the file was downloaded.

With the new behavior, notification of an item being downloaded will only be created for the owner of the content and will not be produced for collaborators. This will help to reduce the noise of the event stream while preserving the ability to see when items are downloaded as a content owner.

## サポートを受けるには

Should you have any issues or need further guidance, please post a request to our [developer forum][forum] for any help needed.

[event-apis]: r://resources/event/

[user-access-token]: g://authentication/jwt/user-access-tokens/

[forum]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum