---
applied_at: '2026-04-01'
applies_to:
  - sdks
  - dotnet
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-windows-sdk-v2/releases/tag/v10.8.0'
collapse: true
---

# Box Windows SDK `v10.8.0` released

### ⚠  BREAKING CHANGES

* Correct search content type `tags` to match API (box/box-openapi[#591][1]) ([#1431][2])
* Align `LegalHoldPolicyAssignedItem` with API (box/box-openapi[#1554][3]) (box/box-openapi[#590][4]) ([#1427][5])

### Bug Fixes

* Align `LegalHoldPolicyAssignedItem` with API (box/box-openapi[#1554][6]) (box/box-openapi[#590][7]) ([#1427][5]) ([`2079002`][8])
* Correct search content type `tags` to match API (box/box-openapi[#591][9]) ([#1431][2]) ([`d6bd881`][10])
* Fix Union members to default to null and Enum deserialization (box/box-codegen[#933][11]) ([#1438][12]) ([`7a5756a`][13])
* Handle empty API error bodies (box/box-codegen[#934][14]) ([#1441][15]) ([`183449e`][16])

### New Features and Enhancements

* Add `reference` to `AI` and `parent_id` to `HubsItems` (box/box-openapi[#588][17]) ([#1418][18]) ([`8527a35`][19])
* Support Hub Document API (box/box-codegen[#930][20]) ([#1433][21]) ([`a57db33`][22])

[1]: https://github.com/box/box-openapi/issues/591

[2]: https://github.com/box/box-windows-sdk-v2/issues/1431

[3]: https://github.com/box/box-openapi/issues/1554

[4]: https://github.com/box/box-openapi/issues/590

[5]: https://github.com/box/box-windows-sdk-v2/issues/1427

[6]: https://github.com/box/box-windows-sdk-v2/issues/1554

[7]: https://github.com/box/box-windows-sdk-v2/issues/590

[8]: https://github.com/box/box-windows-sdk-v2/commit/207900280c25d40b500b4771e163b6fa10228cc7

[9]: https://github.com/box/box-windows-sdk-v2/issues/591

[10]: https://github.com/box/box-windows-sdk-v2/commit/d6bd881890f442c80d5fdda9c9ebe0bdda3a8c32

[11]: https://github.com/box/box-windows-sdk-v2/issues/933

[12]: https://github.com/box/box-windows-sdk-v2/issues/1438

[13]: https://github.com/box/box-windows-sdk-v2/commit/7a5756afaedf66009efe1f8d96eb844706a4f676

[14]: https://github.com/box/box-windows-sdk-v2/issues/934

[15]: https://github.com/box/box-windows-sdk-v2/issues/1441

[16]: https://github.com/box/box-windows-sdk-v2/commit/183449ea98e2ca073d8f98d41213452070eb1cc1

[17]: https://github.com/box/box-windows-sdk-v2/issues/588

[18]: https://github.com/box/box-windows-sdk-v2/issues/1418

[19]: https://github.com/box/box-windows-sdk-v2/commit/8527a35f5977c4f2721bf33923f3578e111d810a

[20]: https://github.com/box/box-windows-sdk-v2/issues/930

[21]: https://github.com/box/box-windows-sdk-v2/issues/1433

[22]: https://github.com/box/box-windows-sdk-v2/commit/a57db33fd43ad6f04f33ec81fd74353e83e02714
