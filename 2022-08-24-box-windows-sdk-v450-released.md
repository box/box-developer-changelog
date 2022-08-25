---
applied_at: '2022-08-24'
applies_to:
  - sdks
  - windows
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-windows-sdk-v2/releases/tag/v4.5.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2022-08-24-box-windows-sdk-v450-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2022-08-24-new-cli-scripts-added
previous_page_id: 2022-08-19-box-ios-sdk-v530-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2022/08-24-box-windows-sdk-v450-released.md
published_at: '2022-08-24'
fullyTranslated: true
---
# Box Windows SDK `v4.5.0`のリリース

**新機能と機能強化:**

* 署名リクエストに`content-type`フィールドを追加 ([#850][1]) ([`054d3e1`][2])
* `BoxSharedLink`で`effective_access`を開示 [#843][3] ([`d84ddd4`][4])

**バグ修正:**

* アセンブリから`runtime`バージョンを取得できない場合のnull参照の例外を修正 ([#851][5]) ([`77046fb`][6])
* ファイルレプリゼンテーションで無限再試行を指数バックオフ戦略に置換 ([#835][7]) ([`f2a5713`][8])

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
