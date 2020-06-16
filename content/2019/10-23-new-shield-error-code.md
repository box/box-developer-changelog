---
applied_at: '2019-10-23'
applies_to:
  - api
is_impactful: false
is_new_feature: true
---

# New Shield Error Code

A new error code for [Box Shield][box-shield] has been released. The new
`403 - forbidden_by_policy` error code will be raised when the enterprise has
applied Shield access policies that prevent the action, such as downloading
items.

The resolution path is to contact your Box admin to adjust the Shield access
policies if the action is required.

See the
[error code documentation](guide://api-calls/permissions-and-errors/common-errors)
for more details and solution path.

[box-shield]: https://www.box.com/shield
