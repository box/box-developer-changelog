---
applied_at: '2018-08-17'
applies_to:
  - api
is_impactful: false
is_new_feature: false
---
# Box `user_id` field size changed

The `user_id` field, used to track all platform users (that is, managed,
externally managed, and app users), will soon be updated to begin producing
64-bit integer numeric values, rather than the 32-bit integers it creates
currently.

For customers who are translating the produced `user_id` strings from our APIs
into 32-bit integer fields, your internal systems are affected by this update,
and you must update them to support the new 64-bit `user_id` integer size. We
recommend that all `user_id` fields be stored as strings, as per our
[API documentation](endpoint://resources/user/).