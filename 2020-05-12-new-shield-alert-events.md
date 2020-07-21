---
applied_at: '2020-05-12'
applies_to:
  - api
is_impactful: false
is_new_feature: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2020-05-12-new-shield-alert-events
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2020-05-12-windows-net-sdk-v3230-release
previous_page_id: 2020-04-24-python-sdk-v280-release
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2020/05-12-new-shield-alert-events.md
published_at: '2020-05-12'
---
# New shield alert events

As of today, [Box Shield][box-shield] will begin producing new security events
within the [enterprise event stream](g://events/for-enterprise/) for Shield
customers who are configured to listen for the new events.

The possible incident events produced by Shield are:

* Suspicious locations
* Suspicious sessions
* Anomalous download
* Malicious content

See the [shield alert events](g://events/shield-alert-events/) documentation
for more information on the payloads produced within these events.

[box-shield]: https://www.box.com/shield