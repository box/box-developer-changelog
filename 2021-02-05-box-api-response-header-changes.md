---
applied_at: '2021-05-10'
applies_to:
  - api
is_impactful: true
is_new_feature: false
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2021-02-05-box-api-response-header-changes
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2021-01-28-box-node-sdk-v1360-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/02-05-box-api-response-header-changes.md
published_at: '2021-02-05'
---
# Box API response header changes that may impact your applications

On May 10th, 2021, as part of our continued infrastructure upgrade, Box's API
response headers will standardize to always return in a case-insensitive
manner, in line with industry best practices and our API documentation.

This change has the following potential impact:
* [Salesforce SDK `v1`][salesforce-sdk-v1] users will be impacted and will need
to upgrade to a recent SDK version. Not doing so will cause your Box
Salesforce integration to cease functioning after May 10th, 2021.
* Box API consumers who do not use one of the [Box SDKs][box-sdks] may be
impacted and will need to verify header usage through their code. Depending on
your header usage, not making adjustments may cause disruptions in your
Box API integration.

All customers and application admins who are potentially impacted have been
notified directly via email.

<!-- more -->

## Change overview

Applications that are using the return headers described above, such as
`location` and `retry-after`, will need to verify that their applications are
checking for these headers in a case-insensitive fashion. Over the past 12
months Box has been upgrading its networking and observability infrastructure.
These upgrades aim to improve reliability and availability of Box's products
for our customers. This specific change allows Box to deploy an updated service
proxy, enabling Box to better monitor service traffic, quickly find
problem areas, and tune application performance.

## API Consumers: Verifying application impact

Verifying whether your application(s) will be impacted will require a review of
your code. If you are solely using one of the official Box SDKs to connect to
Box APIs, you will not be impacted as the SDKs handle response headers in a
case-insensitive manner.

You may verify whether you are impacted with the following steps:

* Locate the code in your application which handles the responses from Box API
 requests. If you are not extracting the response headers from these responses,
 you are not impacted.
* If you are extracting those response headers, you may be impacted if you are
 expecting those headers in a case-sensitive fashion. 

For instance, if you are expecting the `Location` header to be returned with a
starting capital `L`, a direct string comparison with a specific case, then
your code will need to be altered to prevent it from breaking after the change
is made.

## API Consumers: How to make the change

To update the impacted application(s), ensure that you are checking these
response headers in a case-insensitive manner. Specifically, your code should
be built in a defensive way to ensure that if a header, such as `Location`, is
sent with an initial capital `L` or a lowercase `l`, it'll be handled in the
same way. For example, forcing all headers to lowercase before checking, or
using a case-insensitive regex string check, are two viable methods for
handling this process.

## Salesforce SDK `v1` users: Verifying application impact
If you are unsure whether you are using `v1.0` of the Box Salesforce SDK, go to
the application code location where you have stored the Box Salesforce SDK and
do the following:

Load the following Salesforce SDK file: `src/classes/BoxApiRequest.cls`

Look for the following lines ([should be lines 6-7][salesforce-code]):

```apex
public final static String HEADER_LOCATION_LOWER_CASE = 'location';
public final static String HEADER_LOCATION_CAPITALIZED = 'Location';
```

If those lines are present then you are using `v1.1.0` or later of the
Salesforce SDK, which is not impacted and no changes are needed. If those lines
are not present then you are using `v1.0` of the Salesforce SDK, which will be
impacted and will need to be updated.

## Salesforce SDK `v1` users: How to make the change

To update the impacted application(s), you will need to update the version of
the Salesforce SDK that you are using. It is recommended that you upgrade to
the [most recent version][salesforce-sdk] of the SDK, but anything from
[`v1.1.0` or later][salesforce-sdk-releases] will be adequate to ensure that
there is no impact to your application(s).

## Where to get support

Should you have any issues or need further guidance, please
[file a ticket][support] with our support team or post a request to our
[developer forum][forum] for any help needed.

[salesforce-sdk-v1]: https://github.com/box/box-salesforce-sdk/releases/tag/1.0.0
[salesforce-sdk]: https://github.com/box/box-salesforce-sdk
[salesforce-sdk-releases]: https://github.com/box/box-salesforce-sdk/releases
[salesforce-code]: https://github.com/box/box-salesforce-sdk/compare/1.0.0...v1.1.0#diff-1855f83ffd4977e5b9e4bfc167154f2e11b0161fd6c380502c48082b6837b0af
[box-sdks]: https://developer.box.com/sdks-and-tools/
[support]: https://support.box.com/hc/en-us/requests/new
[forum]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum