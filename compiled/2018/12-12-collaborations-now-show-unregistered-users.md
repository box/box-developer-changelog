---
applied_at: '2018-12-12'
applies_to:
  - api
is_impactful: false
is_new_feature: false
---
# Collaborations now show unregistered users

An additional field, `invite_email`, has been added to the collaboration return
object in the instance where an unregistered user has been added as a
collaborator on a file or folder. This change was put in place because the
current `accessible_by` object returned would show `null` as the result for an
unregistered user. The new field will now show the email address that was used
to invite the user.

This change affects the following endpoints:

* [Get Collaboration](endpoint://get-collaborations-id)
* [Get File Collaborations](endpoint://get-files-id-collaborations)
* [Get Folder Collaborations](endpoint://get-folders-id-collaborations)

Previously a collaboration object with an unregistered user would look like the
following:

```js
{
  "type": "collaboration",
  "id": "376164239",
  .....
  "accessible_by":  null
  .....
}
```

With this new update the object returned would look like the following:

```js
{
  "type": "collaboration",
  "id": "376164239",
  ......
  "accessible_by":  null
  "invite_email": "sadfasdf@box.com",
  },
  ......
}
```