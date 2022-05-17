---
applied_at: '2022-05-31'
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
id: 2022-05-31-reporting-and-events-streams
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2022-05-18-new-endpoints-for-user-avatar
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2022/05-31-reporting-and-events-streams.md
published_at: '2022-05-31'
---
# Device trust event stream updates

Get additional details when a device trust check fails, such as the device properties, the specific policies, and each policy properties validation.

<!-- more -->

When querying the [enterprise event stream][1] for an `event_type` of `DEVICE_TRUST_CHECK_FAILED` the response includes `additional_details` about the event.

Example:

```js
{
  "event_id": "6debaaf0-41a2-425f-a9ba-e855e7260f90",
  "event_type": "DEVICE_TRUST_CHECK_FAILED",
  "ip_address": "89.64.65.237",
  "type": "event",
  "session_id": null,
  "additional_details": {
    "device_trust_check_failed": {
      "agent_present": "Yes",
      "client_environment": "webapp",
      "failed_policies": [
        {
          "name": "Policy 1",
          "ownership": {
            "certificate": "Failed"
          },
          "security": {
            "mac": {
              "min_version": "Success",
              "antivirus": "Success",
              "firewall": "Success",
              "encrypted_drive": "Success"
            }
          }
        }
      ]
    }
  }
}
```

## For more information

Checkout the documentation on [setting up device trust security](https://support.box.com/hc/en-us/articles/360044194993-Setting-Up-Device-Trust-Security-Requirements) for more information on how to manage your device trust policies.

Reports can be generated in Admin Console > [Reports](https://app.box.com/master/reports) > User Activity (select the `failed device trust check` under Login)

[1]: g://events/enterprise-events/for-enterprise