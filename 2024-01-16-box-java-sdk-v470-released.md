---
applied_at: '2024-01-16'
applies_to:
  - sdks
  - java
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-java-sdk/releases/tag/v4.7.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2024-01-16-box-java-sdk-v470-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2024-01-19-rule-response-action-param-added copy
previous_page_id: ''
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2024/01-16-box-java-sdk-v470-released.md
published_at: '2024-01-16'
fullyTranslated: true
---
# Box Java SDK `v4.7.0`のリリース

### 新機能と機能強化

* 署名者用に`signer_group_id`を署名リクエストに追加 ([#1220][1]) ([`f560db8`][2])
* `BouncyCastle`をv.`1.70`にアップグレード
  > **注**: `BouncyCastle`の新しいバージョンはFIPSとの互換性がありません。
* `IPrivateKeyDecryptor`を導入し、カスタム暗号化プロバイダの使用を許可 ([#1226][3]) ([`727e6d7`][4])

### バグ修正

* 分類の削除に関する記述を削除 ([#1222][5]) ([`9814038`][6])

[1]: https://github.com/box/box-java-sdk/issues/1220

[2]: https://github.com/box/box-java-sdk/commit/f560db8d5587406099066803789d16374ec7dbb9

[3]: https://github.com/box/box-java-sdk/issues/1226

[4]: https://github.com/box/box-java-sdk/commit/727e6d71ee375a48b4241a26a093becfe0965898

[5]: https://github.com/box/box-java-sdk/issues/1222

[6]: https://github.com/box/box-java-sdk/commit/981403896b4cd16a42c9feeecf30e75e1e8fa072
