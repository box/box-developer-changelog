---
applied_at: '2018-02-28'
applies_to:
  - api
is_impactful: false
is_new_feature: false

---


On March 29, 2018, we will introduce a new data type (array of strings) in the
response body of the Metadata API endpoints. We are making this change because
we are adding a new field type to metadata templates in Box called `multiSelect`.
This new field type represents a checkbox type multiple selection of values
when creating template instances on files or folders. The selected options for
this field type are stored in an array of strings, where each string in the
array corresponds to the key of the chosen `multiSelect` option.

An example metadata template JSON response body is shown below. The value for
the key `audience1` shows an example of the new data type (array of strings) that
we are introducing in this change.

```js
{
  "audience1": ["internal", "internalEng"],
  "documentType": "Q1 plans",
  "competitiveDocument": "no",
  "status": "active",
  "author": "Jones",
  "currentState": "proposal",
  "$type": "marketingCollateral-d086c908-2498-4d3e-8a1f-01e82bfc2abe",
  "$parent": "file_5010739061",
  "$id": "2094c584-68e1-475c-a581-534a4609594e",
  "$version": 0,
  "$typeVersion": 0,
  "$template": "marketingCollateral",
  "$scope": "enterprise_12345"
}
```

[cli_v2_release_notes]: https://github.com/box/boxcli/blob/master/CHANGELOG.md#200
[cli_v2_release_commands]: https://github.com/box/boxcli#command-topics
[python_sdk_v2]: https://github.com/box/box-python-sdk
[python_sdk_v2_release_notes]: https://github.com/box/box-python-sdk/releases/tag/v2.0.0
[salesforce_sdk_httprequest]: https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_restful_http_httprequest.htm
[salesforce_sdk_httpresponse]: https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_restful_http_httpresponse.htm#apex_classes_restful_http_httpresponse
[box_relay]: https://www.box.com/collaboration/relay-workflow
[box_relay_announce]: https://medium.com/box-developer-blog/introducing-the-box-relay-workflow-api-f6eed1457711
[platform_activity_csv]: https://community.box.com/t5/How-to-Guides-for-Admins/Running-the-Platform-Activity-Report/ta-p/58620
[cli_update_multizones]: https://github.com/box/boxcli/pull/91
[cli_update_multizones_announce]:  https://blog.box.com/blog/multizones-storage-data-residency-compliance/
[cli_update_csv_operations]: https://github.com/box/boxcli/pull/82
[cli_update_folder_update_flag]: https://github.com/box/boxcli/pull/92
[cli_update_config_dump]: https://github.com/box/boxcli/pull/83
[community]: https://community.box.com/t5/How-to-Guides-for-Admins/Running-Reports/ta-p/26790
