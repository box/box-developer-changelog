---
applied_at: '2023-01-12'
applies_to:
  - sdks
  - windows
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-windows-sdk-v2/releases/tag/v5.0.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2023-01-12-box-windows-sdk-v500-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2023-01-17-box-windows-sdk-v510-released
previous_page_id: 2023-01-09-box-python-sdk-v361-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2023/01-12-box-windows-sdk-v500-released.md
published_at: '2023-01-12'
fullyTranslated: true
---
# Box Windows SDK `v5.0.0`のリリース

⚠ 重大な変更

* .NET Frameworkを4.6.2にアップグレード ([#881][1])
* 非推奨となったメソッドを削除 ([#881][1])
* `use_index`リファレンスを削除 ([#881][1])
* `GetFileVersionsUnderRetentionForAssignmentAsync`から適切なオブジェクトが戻されるよう修正 ([#881][1])

**新機能と機能強化:**

* .NET Frameworkを4.6.2にアップグレード ([#881][1]) ([`f1989aa`][2])、[#863][3]をクローズ
* 非推奨となったメソッドを削除 ([#881][1]) ([`f1989aa`][2])、[#874][4]をクローズ
* `use_index`リファレンスを削除 ([#881][1]) ([`f1989aa`][2])、[#870][5]をクローズ

**バグ修正:**

* `IBoxFilesManager#ViewVersionsAsync`にページ割りオプションを追加 ([#869][6]) ([`2324495`][7])、[#866][8]をクローズ
* `GetFileVersionsUnderRetentionForAssignmentAsync`から適切なオブジェクトが戻されるよう修正 ([#881][1]) ([`f1989aa`][2])、[#875][9]をクローズ

<https://www.nuget.org/packages/Box.V2/5.0.0>

<https://www.nuget.org/packages/Box.V2.Core/5.0.0>

[1]: https://github.com/box/box-windows-sdk-v2/issues/881

[2]: https://github.com/box/box-windows-sdk-v2/commit/f1989aa94cd085ad4bec04b4ebedb04f40455569

[3]: https://github.com/box/box-windows-sdk-v2/issues/863

[4]: https://github.com/box/box-windows-sdk-v2/issues/874

[5]: https://github.com/box/box-windows-sdk-v2/issues/870

[6]: https://github.com/box/box-windows-sdk-v2/issues/869

[7]: https://github.com/box/box-windows-sdk-v2/commit/232449531440227a0c8b3489ceda813fe4f4a73f

[8]: https://github.com/box/box-windows-sdk-v2/issues/866

[9]: https://github.com/box/box-windows-sdk-v2/issues/875
