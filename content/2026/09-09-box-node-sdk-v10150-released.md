---
applied_at: '2026-09-09'
applies_to:
  - sdks
  - typescript
is_impactful: false
is_new_feature: false
release_source_url: 'https://github.com/box/box-node-sdk/releases/tag/v10.15.0'
collapse: true
---

# Box Node SDK `v10.15.0` released

### Bug Fixes

* Fix type declarations that break `tsc` under `Node-only` `tsconfig` (box/box-codegen[#983][1]) ([#1602][2]) ([`874246d`][3])
* stop double-JSON-encoding error fields in Box API errors (box/box-codegen[#985][4]) ([#1608][5]) ([`a517b3d`][6])

### New Features and Enhancements

* add Japanese ZIP code validation to sign request (box/box-openapi[#615][7]) ([#1598][8]) ([`be0d1ff`][9])
* Support chunk upload session plan API (box/box-openapi[#616][10]) ([#1601][11]) ([`f28a496`][12])

[1]: https://github.com/box/box-node-sdk/issues/983

[2]: https://github.com/box/box-node-sdk/issues/1602

[3]: https://github.com/box/box-node-sdk/commit/874246d84713b1aa48b65305bf8c1fdc14496e04

[4]: https://github.com/box/box-node-sdk/issues/985

[5]: https://github.com/box/box-node-sdk/issues/1608

[6]: https://github.com/box/box-node-sdk/commit/a517b3d019085695ad73042ed34983a969fdd779

[7]: https://github.com/box/box-node-sdk/issues/615

[8]: https://github.com/box/box-node-sdk/issues/1598

[9]: https://github.com/box/box-node-sdk/commit/be0d1ff043075f7edd7b54f0c6cfaafce6b8cf4f

[10]: https://github.com/box/box-node-sdk/issues/616

[11]: https://github.com/box/box-node-sdk/issues/1601

[12]: https://github.com/box/box-node-sdk/commit/f28a496f0843d666c2d5430029df5cfb4472addf
