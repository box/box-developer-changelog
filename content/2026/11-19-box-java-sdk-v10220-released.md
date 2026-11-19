---
applied_at: '2026-11-19'
applies_to:
  - sdks
  - java
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-java-sdk/releases/tag/v10.22.0'
collapse: true
---

# Box Java SDK `v10.22.0` released

### Bug Fixes

* Prevent retries from reusing consumed upload streams (box/box-codegen[#1009][1]) ([`179c8cf`][2])
* Regenerate JWT assertions on token request retries (box/box-codegen[#1001][3]) ([`290e3b2`][4])
* Upgrade Jackson libraries to 2.22.4 (box/box-codegen[#1008][5]) ([`70edd89`][6])

### New Features and Enhancements

* add `is_auto_roll_in_enabled` invite option and expose `auto_roll_in` fields (box/box-openapi[#627][7]) ([`68ee726`][8])

[1]: https://github.com/box/box-java-sdk/issues/1009

[2]: https://github.com/box/box-java-sdk/commit/179c8cf76791afc7ce30d90279d46b963d48dbef

[3]: https://github.com/box/box-java-sdk/issues/1001

[4]: https://github.com/box/box-java-sdk/commit/290e3b278961fc82270a59b1a813e92016a2c3f2

[5]: https://github.com/box/box-java-sdk/issues/1008

[6]: https://github.com/box/box-java-sdk/commit/70edd895ad73c8a5d02b7837b051dd49cb32c665

[7]: https://github.com/box/box-java-sdk/issues/627

[8]: https://github.com/box/box-java-sdk/commit/68ee726588752602085867762928858a88ebeb94
