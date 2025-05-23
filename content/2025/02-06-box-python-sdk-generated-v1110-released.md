---
applied_at: '2025-02-06'
applies_to:
  - sdks
  - python
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-python-sdk-gen/releases/tag/v1.11.0'
collapse: true
---

# Box Python SDK Generated `v1.11.0` released

### Bug Fixes

* Correct types of `paged` and `thumb` properties in File representation (box/box-openapi[#503][1]) ([#451][2]) ([`e818fa6`][3])

### New Features and Enhancements

* Add Box Sign shared requests (box/box-openapi[#504][4]) ([#453][5]) ([`3590918`][6])
* feat: Add hubs support to `/ai/ask`. Replace type of `items` parameter from `List[AiItemBase]` to `List[AiItemAsk]` in `create_ai_ask` method (box/box-openapi[#506][7]) ([#466][8]) ([`29f0364`][9])
* Update `/ai/extract_structured` response schema (box/box-codegen[#641][10]) ([#459][11]) ([`7c73cea`][12])

[1]: https://github.com/box/box-python-sdk-gen/issues/503

[2]: https://github.com/box/box-python-sdk-gen/issues/451

[3]: https://github.com/box/box-python-sdk-gen/commit/e818fa6c9c80e61a293fc24ed6f1a15978681662

[4]: https://github.com/box/box-python-sdk-gen/issues/504

[5]: https://github.com/box/box-python-sdk-gen/issues/453

[6]: https://github.com/box/box-python-sdk-gen/commit/359091873d26111b82f000e7837553cc799f2433

[7]: https://github.com/box/box-python-sdk-gen/issues/506

[8]: https://github.com/box/box-python-sdk-gen/issues/466

[9]: https://github.com/box/box-python-sdk-gen/commit/29f03649f3ec1471e859609d2b8bd77ad5d09106

[10]: https://github.com/box/box-python-sdk-gen/issues/641

[11]: https://github.com/box/box-python-sdk-gen/issues/459

[12]: https://github.com/box/box-python-sdk-gen/commit/7c73ceaa8888332b23bca4d6b64ef4999f942940
