---
applied_at: '2018-03-29'
applies_to:
  - api
is_impactful: false
is_new_feature: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2018-03-29-multiselect-field-type-added-to-metadata-templates
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2018-04-10-java-sdk-v2170-release
previous_page_id: 2018-03-29-java-sdk-v2161-release
source_url: >-
  https://github.com/box/developer.box.com/blob/main/content/2018/03-29-multiselect-field-type-added-to-metadata-templates.md
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