---
applied_at: '2018-08-21'
applies_to:
  - api
is_impactful: false
is_new_feature: false

---


Two major releases have been added to the [update folder API endpoint](endpoint://put-folders-id),
`is_collaboration_restricted_to_enterprise`. This is a boolean value made to
set whether future collaborations should be restricted to within the enterprise
only. This does not affect existing collaborations. The value of this field
will also be displayed when calling the [get folder info endpoint](endpoint://get-folders-id).

