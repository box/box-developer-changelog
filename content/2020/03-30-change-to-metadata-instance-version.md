---
applied_at: '2020-03-30'
applies_to:
  - api
is_impactful: true
is_new_feature: false
---

# Change to metadata instance version

As part of ongoing improvements to our Metadata infrastructure we will be
rolling out a small change to the [`version`](r:/metadata/#param-$version) value
of a metadata Instance.

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
