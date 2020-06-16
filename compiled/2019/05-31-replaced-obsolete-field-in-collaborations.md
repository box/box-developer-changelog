---
applied_at: '2019-05-31'
applies_to:
  - api
is_impactful: false
is_new_feature: false
---
# Replaced Obsolete Field in Collaborations

In 2018 a new field, `acceptance_requirements_status` was added to the GET
collaborations/id API endpoint to support additional notification use cases.
This field includes terms of service, 2-factor auth, and strong password
requirements. The existing `acceptance_requirements` field, which only contains
Terms of Service requirements, have been replaced with the new
`acceptance_requirements_status`.

Previously a call to `GET
/collaboration/<collaboration_id>?fields=acceptance_requirements` would return
an object like the following:

```js
"acceptance_requirements": {
    "terms_of_service": {
        "type": "terms_of_service",
        "id": <tos_id>
    }
}
```

With the new field, the request `GET
/collaboration/<collaboration_id>?fields=acceptance_requirements_status` would
return the following:

```js
 "acceptance_requirements_status": {
    "terms_of_service_requirement": {
        "is_accepted": true,
        "terms_of_service": {
            "type": "terms_of_service",
            "id": <tos_id>
        }
    },
    "strong_password_requirement": {
        "enterprise_has_strong_password_required_for_external_users": true,
        "user_has_strong_password": false
    },
    "two_factor_authentication_requirement": {
        "enterprise_has_two_factor_auth_enabled": true,
        "user_has_two_factor_authentication_enabled" true
    }
}
```