---
applied_at: '2021-10-27'
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
id: 2021-10-27-box-sign-enterprise-events
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2021-10-28-box-ios-sdk-v500-released
previous_page_id: 2021-10-20-box-ui-elements-v1400-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/10-27-box-sign-enterprise-events.md
published_at: '2021-10-27'
---
# Box Sign Enterprise Events

[Box Sign][sign] events are now available via the enterprise events stream.
For full details, please see our [Box Sign events guide][seg].

## Updates

<!--alex ignore cancelled and expired-->

* Add sign request [document events][d]: created, converted, completed,
cancelled and expired

* Add sign request [signer events][s]: assigned, viewed by signer, downloaded,
forwarded, signed and declined

* Add two new [statuses][stat]: `downloaded` and `downloaded and signed`

[stat]: e://resources/sign-requests/#param-status
[s]: g://events/event-triggers/sign-events/#signer-events
[d]: g://events/event-triggers/sign-events/#document-events
[seg]: g://events/event-triggers/sign-events
[sign]: g://box-sign