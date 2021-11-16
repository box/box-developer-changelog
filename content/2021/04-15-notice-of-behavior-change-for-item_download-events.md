---
applied_at: "2021-04-15"
applies_to: 
- api
is_impactful: false
is_new_feature: false
collapse: true
show_excerpt: true
release_source_url: ''
---

# Notice of behavior change for item download events

Starting today, we will begin rolling out changes to the behavior
of item download events when an application consumes those events from our
[event API endpoints][event-apis]. 

This change will only affect the
`ITEM_DOWNLOAD` [user event][user-events] and will not affect existing
[enterprise events][enterprise-events]. The new behavior will not cause
downtime within existing applications or require any application changes to
prevent uptime disruptions.

<!-- more -->

## Change overview

Within the previous behavior when events were consumed, downloaded item
events were surfaced through the `ITEM_DOWNLOAD` event type for the owner of
the content as well as any contributors assigned to the content. This meant
that if a file with 2000 collaborators on it was downloaded, the file owner
plus all 2000 collaborators would have an event created stating that the file
was downloaded.

With the new behavior, notification of an item being downloaded will only be
created for the owner of the content and will not be produced for
collaborators. This will help to reduce the noise of the event stream while
preserving the ability to see when items are downloaded as a content owner.

## Where to get support

Should you have any issues or need further guidance, please post a request to
our [developer forum][forum] for any help needed.

[event-apis]: https://developer.box.com/reference/get-events/
[user-events]: https://developer.box.com/guides/events/user-events/for-user/#event-types
[enterprise-events]: https://developer.box.com/guides/events/enterprise-events/for-enterprise/
[user-access-token]: g://authentication/jwt/user-access-tokens/
[forum]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum
