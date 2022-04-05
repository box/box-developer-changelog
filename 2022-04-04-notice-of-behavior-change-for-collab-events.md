---
applied_at: '2022-04-06'
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
id: 2022-04-04-notice-of-behavior-change-for-collab-events
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2022-04-01-box-windows-sdk-v430-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2022/04-04-notice-of-behavior-change-for-collab-events.md
published_at: '2022-04-04'
---
# Notice of behavior change for collaboration events on the changes stream

Starting today, we will begin rolling out changes to the behavior of
collaboration events when an application consumes those events from our
[event API endpoints][event-apis] when `stream_type` is set to `changes`.

This change will only affect `COLLAB_INVITE_COLLABORATOR`,
`COLLAB_ADD_COLLABORATOR`, `COLLAB_ROLE_CHANGE`, and
`COLLAB_REMOVE_COLLABORATOR` [user events][user-events]
with the query parameter `stream_type` set to `changes`.
This will not affect existing [enterprise events][enterprise-events].
The new behavior will not cause downtime within existing applications
or require any application changes to prevent uptime disruptions.

<!-- more -->

## Change overview

Previously, events of type `COLLAB_INVITE_COLLABORATOR`,
`COLLAB_ADD_COLLABORATOR`, `COLLAB_ROLE_CHANGE`, and
`COLLAB_REMOVE_COLLABORATOR` created notifications
for the acted on users that were listening to the `changes` stream.
Owners of the collaborated item would not receive these events unless
they were listening to the `all` stream as well.

We are cleaning up this discrepancy by establishing parity
between the `all` and `changes` stream. With this new behavior,
notifications of a collaboration will be created for the content owner
on the `changes` stream as well. Collaboration owners will now see an
additional event that matches what they see on the `all` stream.

## Where to get support

Should you have any issues or need further guidance, please post a request to
our [developer forum][forum] for any help needed.

[event-apis]: https://developer.box.com/reference/get-events/
[user-events]: https://developer.box.com/guides/events/user-events/for-user/#event-types
[enterprise-events]: https://developer.box.com/guides/events/enterprise-events/for-enterprise/
[user-access-token]: g://authentication/jwt/user-access-tokens/
[forum]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum