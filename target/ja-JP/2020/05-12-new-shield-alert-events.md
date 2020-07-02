---
applied_at: '2020-05-12'
applies_to:
  - api
is_impactful: false
is_new_feature: true
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
