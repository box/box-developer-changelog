---
applied_at: '2022-08-24'
applies_to:
  - sdks
  - windows
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-windows-sdk-v2/releases/tag/v4.5.0'
collapse: true
---

# Box Windows SDK `v4.5.0` released

**New Features and Enhancements:**

* Add `content-type` field to sign request ([#850][1]) ([`054d3e1`][2])
* expose `effective_access` in `BoxSharedLink` [#843][3] ([`d84ddd4`][4])

**Bug Fixes:**

* fix null reference exception when it's not possible to get `runtime` version from the assembly ([#851][5]) ([`77046fb`][6])
* replace infinite retries with exponential backoff strategy in file representations ([#835][7]) ([`f2a5713`][8])

<https://www.nuget.org/packages/Box.V2/4.5.0>
<https://www.nuget.org/packages/Box.V2.Core/4.5.0>

[1]: https://github.com/box/box-windows-sdk-v2/issues/850

[2]: https://github.com/box/box-windows-sdk-v2/commit/054d3e1a5f44b6a4a0292e8f9444266b2de0fff0

[3]: https://github.com/box/box-windows-sdk-v2/issues/843

[4]: https://github.com/box/box-windows-sdk-v2/commit/d84ddd48aac489ecdd1d9dc740a7672cb064b0ca

[5]: https://github.com/box/box-windows-sdk-v2/issues/851

[6]: https://github.com/box/box-windows-sdk-v2/commit/77046fb0c1ce80b6e7e2dc30058ed275e46e990c

[7]: https://github.com/box/box-windows-sdk-v2/issues/835

[8]: https://github.com/box/box-windows-sdk-v2/commit/f2a57136078de8b1fc59ec2c4a9e98c062d9d19b
