---
applied_at: '2020-03-30'
applies_to:
  - api
is_impactful: true
is_new_feature: false
collapse: true
show_excerpt: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2020-03-30-change-to-metadata-instance-version
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2020-03-30-potential-impactful-changes-to-format-of-metadata-date-fields
previous_page_id: 2020-02-25-windows-net-sdk-v3220-release
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2020/03-30-change-to-metadata-instance-version.md
published_at: '2020-03-30'
fullyTranslated: true
---
# Change to metadata instance version

As part of ongoing improvements to our Metadata infrastructure we will be
rolling out a small change to the [`version`](r:/metadata/#param-$version) value
of a metadata Instance.

<!-- more -->

Previously, the version number associated with a metadata instance would be
incremented if a field on the associated metadata template was deleted, or if an
`enum` field's option was deleted on the associated metadata template.

Going forward, these changes will not increment the version number of a metadata
instance.

This behavior has always been implicit and we recognize that very little value
can be derived form to the metadata instance version. Therefore we do not expect
this change to have any impact on any of our customers. Regardless, please reach
out to your customer success manager or our support channels if you find
yourself impacted.
