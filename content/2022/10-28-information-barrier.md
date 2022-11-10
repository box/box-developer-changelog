---
applied_at: "2022-10-28"
applies_to: 
- api
is_impactful: true
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
---

# Introducing Shield Information Barrier

Shield information barrier prevents communication that could lead to conflicts of interest or potential legal issues. 
For example, admins can use information barrier to separate teams working on
different projects to prevent collaboration on content restricted to specific groups.

## Shield Information Barrier API

Shield informatio barrier comes along with the new API that you can use to:

* Create, manage, and list [Shield information barriers][2]
* Create, update, delete, and list [Shield information barrier segments][3]
* Create, delete, and list [Shield information barrier segment restrictions][4]
* Create, delete, and list [Shield information barrier segment members][5]
* Create and list [Shield information barrier reports][6]

## Shield Information Barrier Events

Setting up the information barrier produces the following events:

* Events triggered when the user configures the information barrier, for example activates or deactivates the barrier. 
* Events triggered when the user performs restricted actions, for example when attempting to move an item to a folder the user does not have access to or to add a user to a restricted group.

For a list of all events, see the [Shield information barrier event triggers][7] reference.

## Where to get support

Should you have any issues or need further guidance, please post a request to
our [developer forum][1] for any help needed.

[1]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum
[2]: r://shield-information-barrier
[3]: r://shield-information-barrier-segment
[4]: r://shield-information-barrier-segment-restriction
[5]: r://shield-information-barrier-segment-member
[6]: r://shield-information-barrier-report
[7]: g://event-triggers/shield-information-barrier-events