---
applied_at: "2022-05-31"
applies_to: 
- api
is_impactful: false
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
---

# Events Streams - Device trust

Get additional details when a device trust check fails, including:

* Is an agent present on the device
* The client environment
* The list of policies
* The status of each policy property

<!-- more -->

When querying the `api.box.com/2.0/events?stream_type=admin_logs
&event_type=DEVICE_TRUST_CHECK_FAILED` the response includes `additional_details` , detailing device properties, the specific policies, and the policies properties validations.

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
## Use Cases
You can use this information to generate device compliance reports and quickly identify non compliant devices.

## Reporting preview
??
## Reporting CSV
??
