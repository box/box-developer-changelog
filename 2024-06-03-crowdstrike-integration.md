---
applied_at: '2024-12-05'
applies_to:
  - guides
  - api
is_impactful: true
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2024-06-03-crowdstrike-integration
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2024-06-06-box-cli-v3141-released
previous_page_id: 2024-05-31-box-ui-elements-v2001-beta1-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2024/06-03-crowdstrike-integration.md
published_at: '2024-06-03'
---
# CrowdStrike integration with Box

CrowdStrike is an endpoint detection tool integrated with Box to monitor endpoint activity. This means, CrowdStrike monitors devices that connect to Box and your Box organization, analyzing data about the connection and the device to identify potential threat activity.

The integration with CrowdStrike comes with additional [events in the event stream][1] that can be triggered for an enterprise.

<!-- more -->

For example, the `EDR_CROWDSTRIKE_DEVICE_DETECTED` event is triggered when a new device is detected by the the CrowdStrike Falcon platform.
The full list includes the following events:

* `EDR_CROWDSTRIKE_DEVICE_DETECTED`
* `EDR_CROWDSTRIKE_NO_BOX_TOOLS`
* `EDR_CROWDSTRIKE_BOX_TOOLS_OUTDATED`
* `EDR_CROWDSTRIKE_DRIVE_OUTDATED`
* `EDR_CROWDSTRIKE_ACCESS_ALLOWED_NO_CROWDSTRIKE_DEVICE`
* `EDR_CROWDSTRIKE_ACCESS_REVOKED`

## Where to get support

Should you have any issues or need further guidance, please post a request to our [developer forum][2] for any help needed.

[1]: g://events/enterprise-events/for-enterprise#event-types
[2]: https://forum.box.com/