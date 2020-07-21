---
applied_at: '2018-01-25'
applies_to:
  - java
  - sdks
is_impactful: false
is_new_feature: true
collapse: true
release_source_url: 'https://github.com/box/box-java-sdk/releases/tag/v2.11.0'
---

# Java SDK `v2.11.0` released

1. Fix chunked upload for files > 2GB ([#531](https://github.com/box/box-java-sdk/pull/531))
2. Add updated file version upload endpoint and deprecate old method ([#524](https://github.com/box/box-java-sdk/pull/524))
3. Perform modified retry on JWT auth to avoid common JWT errors