---
applied_at: "2021-08-31"
applies_to: 
- api
is_impactful: false
is_new_feature: false
collapse: true
show_excerpt: true
release_source_url: ''
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

[event-apis]: https://developer.box.com/reference/get-events/
[user-events]: https://developer.box.com/guides/events/enterprise-events/for-user/#event-types
[enterprise-events]: https://developer.box.com/guides/events/user-events/for-enterprise/
[forum]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum
