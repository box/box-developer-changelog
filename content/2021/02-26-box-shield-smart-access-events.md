---
applied_at: "2021-02-26"
applies_to: 
- api
is_impactful: false
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
---

# Box Shield Smart Access events


External collaboration restriction and justification approval events are now
available via the [enterprise events][events] stream. 

[Box Shield][box-shield] must be purchased and enabled on a Box enterprise in
order to take advantage of these advanced security offerings.

<!-- more -->

These events follow the standard [event object][eo] schema, with the
`event_type` value set of:
`SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION`, 
`SHIELD_EXTERNAL_COLLAB_INVITE_JUSTIFIED`, 
`SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED`
`SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION`,
`SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED`, or
`SHIELD_JUSTIFICATION_APPROVAL`.

The `additional_details` payload of each event provides more information. Full
details can be found in our [Shield Events [guide][saguide].


## Features

* Add support for Box Shield external collaboration and justification approval 
events to the enterprise events stream


[box-shield]: https://www.box.com/shield
[eo]: r://event/
[events]: g://events/enterprise-events/for-enterprise/
[saguide]:g://events/event-triggers/shield-alert-events/#smart-access