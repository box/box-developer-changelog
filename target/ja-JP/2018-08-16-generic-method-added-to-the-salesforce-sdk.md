---
applied_at: '2018-08-16'
applies_to:
  - salesforce
  - sdks
is_impactful: false
is_new_feature: false
is_index: false
category_id: changelog
subcategory_id: ''
id: 2018-08-16-generic-method-added-to-the-salesforce-sdk
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2018-08-17-box-user_id-field-size-changed
previous_page_id: 2018-08-09-java-sdk-v2220-release
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2018/08-16-generic-method-added-to-the-salesforce-sdk.md
---
# Generic method added to the Salesforce SDK

The Box for Salesforce Developer Toolkit now provides a global method,
`sendRequest` that accepts an [`HttpRequest`][salesforce_sdk_httprequest]
object as a parameter and returns an
[`HttpResponse`][salesforce_sdk_httpresponse]
object. This method will use the authentication details of the Service
Account to make calls to Box's APIs, allowing you to focus on incorporating
the business logic of your integration. For more details about the added
method, please see the [method details](guide://tooling/sdks/salesforce)
and [sample code](guide://tooling/sdks/salesforce)
in the Box metadata sidebar for Salesforce Developer Toolkit documentation.

[salesforce_sdk_httprequest]: https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_restful_http_httprequest.htm

[salesforce_sdk_httpresponse]: https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_restful_http_httpresponse.htm#apex_classes_restful_http_httpresponse
