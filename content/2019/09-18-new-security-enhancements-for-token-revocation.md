---
applied_at: '2019-09-18'
applies_to:
  - api
is_impactful: false
is_new_feature: true
---

# New security enhancements for token revocation

We have enhanced the capabilities of the [token
revocation](endpoint://post-oauth2-revoke/) endpoint to permit
[downscoped tokens][downscope] to be
revoked prior to their expiration time. Previous to this update only fully
scoped access tokens could be revoked through the /revoke endpoint. With this
new enhancement downscoped tokens may now be revoked in addition to the fully
scoped access tokens.

More information is available [here][blog_token_revocation].

[blog_token_revocation]: https://medium.com/box-developer-blog/new-security-enhancements-for-revoking-access-tokens-79b9960a7ce2
[downscope]: g://authentication/tokens/downscope
