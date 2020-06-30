---
applied_at: '2020-04-23'
applies_to:
  - api
is_impactful: false
is_new_feature: true
---
# Add new `uploader_display_name` field to file and file versions

A new field, `uploader_display_name` has been added to both file and file
version resources. This field provides the name of the user at the time of
upload.

```json
{
  ...
  "uploader_display_name": "Ellis Wiggins"
}
```

This field can be requested on any of the file and file
version endpoints by providing the `fields` query parameter, for example:

```bash
curl -X GET https://api.box.com/2.0/files/12345?fields=uploader_display_name \
     -H 'Authorization: Bearer <ACCESS_TOKEN>'
```

When the file is uploaded by a logged out anonymous, the email of the
user is returned instead. If no email is available then the field will default
to the text `Someone`.