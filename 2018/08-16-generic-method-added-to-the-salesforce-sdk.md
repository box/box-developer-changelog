---
applied_at: '2018-08-16'
applies_to:
  - salesforce
  - sdks
is_impactful: false
is_new_feature: false
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