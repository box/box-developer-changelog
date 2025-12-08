---
applied_at: '2021-08-31'
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
id: 2021-08-31-notice-of-behavior-change-for-item-preview-events
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2021-09-01-classification-name-field-now-in-events
previous_page_id: 2021-08-31-box-java-sdk-v2560-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/08-31-notice-of-behavior-change-for-item-preview-events.md
published_at: '2021-08-31'
---
# Notice of behavior change for item preview events

Starting today, we will begin rolling out changes to the behavior
of item preview events when an application consumes those events from our
[event API endpoints][event-apis].

This change will only affect the
`ITEM_PREVIEW` [user event][user-events] and will not affect existing
[enterprise events][enterprise-events]. The new behavior will not cause
downtime within existing applications or require any application changes to
prevent uptime disruptions.

<!-- more -->

## Change overview

Within the previous behavior when events were consumed, previewed item
events were surfaced through the `ITEM_PREVIEW` event type for the owner of
the content as well as any contributors assigned to the content. This meant
that if a file with 2000 collaborators on it was previewed, the file owner
plus all 2000 collaborators would have an event created stating that the file
was previewed.

With the new behavior, notification of an item being previewed will only be
created for the owner of the content and will not be produced for
collaborators. This will help to reduce the noise of the event stream while
preserving the ability to see when items are previewed as a content owner.

## Where to get support

Should you have any issues or need further guidance, please post a request to
our [developer forum][forum] for any help needed.

[event-apis]: r://get-events
[user-events]: g://events/user-events/for-user
[enterprise-events]: g://events/enterprise-events/for-enterprise
[forum]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum