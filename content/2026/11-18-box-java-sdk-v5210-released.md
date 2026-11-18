---
applied_at: '2026-11-18'
applies_to:
  - sdks
  - java
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-java-sdk/releases/tag/v5.21.0'
collapse: true
---

# Box Java SDK `v5.21.0` released

### New Features and Enhancements

* **boxsdkgen:** add `is_auto_roll_in_enabled` and `is_auto_roll_in` / `auto_roll_in_at` support for invites (box/box-openapi[#627][1]) ([`3db1492`][2])

### Bug Fixes

* **boxsdkgen:** Prevent retries from reusing consumed upload streams (box/box-codegen[#1009][3]) ([`6ab469f`][4])
* **boxsdkgen:** Regenerate JWT assertions on token request retries (box/box-codegen[#1001][5]) ([`798ed59`][6])
* Bump Jackson libraries to 2.22.4 to fix CVE ([#2077][7]) ([`dca5216`][8])

[1]: https://github.com/box/box-java-sdk/issues/627

[2]: https://github.com/box/box-java-sdk/commit/3db1492e58d03f9605b22e59522afaa8db39d5cb

[3]: https://github.com/box/box-java-sdk/issues/1009

[4]: https://github.com/box/box-java-sdk/commit/6ab469fc75bcb957a47477598c7a0ee3d536d055

[5]: https://github.com/box/box-java-sdk/issues/1001

[6]: https://github.com/box/box-java-sdk/commit/798ed59487c47806ae86d5f6709e40427690b53e

[7]: https://github.com/box/box-java-sdk/issues/2077

[8]: https://github.com/box/box-java-sdk/commit/dca521627f9000f29f8614db1f6bdbdfcc9d5c09
