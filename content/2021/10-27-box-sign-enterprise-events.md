---
applied_at: "2021-10-27"
applies_to: 
- api
is_impactful: false
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
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
[s]: g://events/sign-events/#signer-events
[d]: g://events/sign-events/#document-events
[seg]: g://events/sign-events
[sign]: g://box-sign
