---
applied_at: '2020-04-23'
applies_to:
  - api
is_impactful: false
is_new_feature: true
---

# New `classification` field for Files

A new optional field has been made available within the `Field` object,
`classification`. This field represents the classification that is currently
applied to a file.

The classification can be requested via any endpoint that returns a file, like
the [Get file information](endpoint://get-files-id) and supports [requesting
additional `fields`](g://api-calls/request-extra-fields).

```js
{
  "id": "123456789",
  "type": "file",
  "etag": "1",
  "classification": {     
    "name": "Top Secret",     
    "definition": "Content that should not be shared outside the company.",
    "color": "#FF0000"
  },
  ...
}
```

The classification can be set through the API, Box Shield, or by a user using
the web application.
