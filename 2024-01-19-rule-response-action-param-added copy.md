---
applied_at: '2024-01-19'
applies_to:
  - api
is_impactful: true
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2024-01-19-rule-response-action-param-added copy
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2024-01-19-rule-response-action-param-added
previous_page_id: 2024-01-16-box-java-sdk-v470-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2024/01-19-rule-response-action-param-added
  copy.md
published_at: '2024-01-19'
---
# New event parameter for Shield Suspicious Location alert

Along with the release of Shield Suspicious Location: Automated Response we added `rule_response_action` parameter in the [Shield Alert Event][1] response.
This parameter is returned in the payload of each Shield Alert Event, but applicable only to **Suspicious Locations** alert event.

<!-- more -->

The value of the parameter depends on the **Restrict Target User Access** rule settings in the Admin Console.

* If active, the value of the parameter will be `true` when the alert is triggered.
* If inactive, the value of the parameter will be `false` when the alert is triggered.

For all other Shield Alerts (**Anomalous Download**, **Malicious Content**, **Suspicious Session**), the `rule_response_action` parameter is always `null`.

For additional information, see [Suspicious Location rule settings][2]

## Where to get support

Should you have any issues or need further guidance, please post a request to our [developer forum][3] for any help needed.


[1]: g://events/event-triggers/shield-alert-events/#suspicious-locations-alert
[2]: https://support.box.com/hc/en-us/articles/9090542213395-Shield-Threat-Detection-Rule-Settings#h_01GE85EWQ1TS5APY7RGN801QSC
[3]: https://forum.box.com/