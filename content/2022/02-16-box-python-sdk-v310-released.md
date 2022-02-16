---
applied_at: '2022-02-16'
applies_to:
  - sdks
  - python
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-python-sdk/releases/tag/v3.1.0'
collapse: true
---

# Box Python SDK `v3.1.0` released

### New Features and Enhancements

* Add support for Python 3.10 ([#692][1]) ([`d4aed82`][2])
* Add support for Python 3.8, Python 3.9, `pypy-3.7` and `pypy-3.8`. ([#689][3]) ([`0aa94cc`][4])
* Deprecate `use_index` parameter from `MDQ` of files/folders ([#666][5]) ([`2595720`][6])
* Replace external package `mock` with Python standard library `unittest.mock` ([#697][7]) ([`6fd6366`][8])
* Upgrade cryptography library to the most recent version. ([#668][9]) ([`9c94d08`][10]), closes [#667][11]

### Bug Fixes

* `UploadSession.commit` returns `None` when retry limit was reached ([#696][12]) ([`9456fe0`][13])
* Add missing `api_call` decorator for `create_upload_session` ([#686][14]) ([`3510d3a`][15])
* Fix chunked upload ([#673][16]) ([`2605fd7`][17]), closes [#671][18]

[1]: https://github.com/box/box-python-sdk/issues/692

[2]: https://github.com/box/box-python-sdk/commit/d4aed82831af97305bace9a4588d27b23856c306

[3]: https://github.com/box/box-python-sdk/issues/689

[4]: https://github.com/box/box-python-sdk/commit/0aa94cc8a5c4db0fc204b27a60690b73c98a89cb

[5]: https://github.com/box/box-python-sdk/issues/666

[6]: https://github.com/box/box-python-sdk/commit/25957204b82c878e15dc3d118505a741171e9772

[7]: https://github.com/box/box-python-sdk/issues/697

[8]: https://github.com/box/box-python-sdk/commit/6fd63667aa7da4c794b4fb880d5c2949efe0073f

[9]: https://github.com/box/box-python-sdk/issues/668

[10]: https://github.com/box/box-python-sdk/commit/9c94d0878515dc75c1f267e2fb1f189a852772b6

[11]: https://github.com/box/box-python-sdk/issues/667

[12]: https://github.com/box/box-python-sdk/issues/696

[13]: https://github.com/box/box-python-sdk/commit/9456fe0124f4ac4e9c8a7bcc49039f07f310c477

[14]: https://github.com/box/box-python-sdk/issues/686

[15]: https://github.com/box/box-python-sdk/commit/3510d3ac085767205854014ecef80fd078d71773

[16]: https://github.com/box/box-python-sdk/issues/673

[17]: https://github.com/box/box-python-sdk/commit/2605fd782396ad6e42bd11c10f846e771634b7a0

[18]: https://github.com/box/box-python-sdk/issues/671
