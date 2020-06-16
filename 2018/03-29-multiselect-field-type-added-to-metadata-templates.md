---
applied_at: '2018-03-29'
applies_to:
  - api
is_impactful: false
is_new_feature: false
---
# `multiSelect` field type added to metadata templates

We have introduced a new attribute type to
[Metadata Templates](endpoint://resources/metadata-template/) called
`multiSelect`, which translates to multiple selection. This new attribute type
allows for a checkbox style multiple selection of values when composing
template instances on files content with Adobe Sign, G Suite, or folders.

The addition of this field introduces changes to the
[Metadata Object](endpoint://resources/metadata-template/) (template instance)
since enabled `multiSelect` options are represented using an array of string
values, where each string in the array corresponds to the key of a `multiSelect`
option.