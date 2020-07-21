---
applied_at: '2018-03-29'
applies_to:
  - api
is_impactful: true
is_new_feature: false
collapse: true
show_excerpt: true
---

# Breaking change to Metadata APIs

On March 29, 2018, we will introduce a new data type (array of strings) in the
response body of the Metadata API endpoints. We are making this change because
we are adding a new field type to metadata templates in Box called `multiSelect`.
This new field type represents a checkbox type multiple selection of values
when creating template instances on files or folders. The selected options for
this field type are stored in an array of strings, where each string in the
array corresponds to the key of the chosen `multiSelect` option.

<!-- more -->

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
