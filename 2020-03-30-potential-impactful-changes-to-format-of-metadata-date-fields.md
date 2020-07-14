---
applied_at: '2020-03-30'
applies_to:
  - api
is_impactful: true
is_new_feature: false
is_index: false
category_id: changelog
subcategory_id: ''
id: 2020-03-30-potential-impactful-changes-to-format-of-metadata-date-fields
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2020-04-01-node-sdk-v1320-release
previous_page_id: 2020-03-30-change-to-metadata-instance-version
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2020/03-30-potential-impactful-changes-to-format-of-metadata-date-fields.md
published_at: '2020-03-30'
---
# Potential impactful changes to format of Metadata `date` fields

As part of ongoing improvements to our Metadata infrastructure we will be
rolling out three potential impactful changes to the format of `date` fields in
metadata templates. These changes make the format our API returns more
consistent between API calls.

The first change affects the usage of time zone offsets in dates. Previously,
the API would inconsistently return dates with and without timezone offsets if a
date was set to include one. From now on all dates are converted to UTC /
Zulu-time, removing the timezone offset.

For example:

* Assume a date was set to `2020-02-20T12:00:00.000-01:00`
* Previously the API would return `2020-02-20T12:00:00.000-01:00` (the original
  value) or `2020-02-20T13:00:00.000Z` (the UTC adjusted value)
* From now on it will always return `2020-02-20T13:00:00.000Z` (the UTC adjusted
  value)

The second change affects the sub-second precision of dates returned by the
metadata API. Previously, the API would return values with 0 to 3 digits of
sub-second precision. From now on Box will always return metadata date-time
values with millisecond precision.

For example:

* Previously the API might return `2020-02-20T12:00:00Z`,
  `2020-02-20T12:00:00.0Z`, `2020-02-20T12:00:00.00Z`or
  `2020-02-20T12:00:00.000Z`
* From now on it will always return `2020-02-20T12:00:00.000Z`

The final change affects the usage of the
[`test`](g/metadata/instances/update/#Test-a-value) operation when updating a
metadata instance. Previously the test would compare the date-time values using
the literal string value. After this update they are compared using their UNIX
timestamp in milliseconds.

For example:

* Previously `2020-01-21T19:20:00.123-08:00` would not be equivalent to
  `2020-01-22T03:20:00.123Z`
* From now on `2020-01-21T19:20:00.123-08:00` is equivalent to
  `2020-01-22T03:20:00.123Z`

## How this can affect an application

Any application that implements `RFC3339`-compliant date-time parsing will not
need to perform any action as these are all valid `RFC3339` values representing
the same dates. Any application that does not implement `RFC3339` compliant
date-time parsing should be updated to do so.

All official Box SDKs support `RFC3339`-compliant date-time parsing, so any
application using an up-to-date version of an official Box SDK would not require
any update.

## What do if this affected your application

Roll-out of this change will be performed gradually over the next few weeks.
Although the metadata team will be monitoring potential impact, please reach out
to your customer success manager or our support channels if you find yourself
impacted.