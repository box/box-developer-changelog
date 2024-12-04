---
applied_at: '2024-12-03'
applies_to:
  - sdks
  - typescript
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-typescript-sdk-gen/releases/tag/v1.8.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2024-12-03-box-typescript-sdk-generated-v180-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2024-12-02-box-python-sdk-generated-v180-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2024/12-03-box-typescript-sdk-generated-v180-released.md
published_at: '2024-12-03'
fullyTranslated: true
---
# Box TypeScript SDK Generated `v1.8.0`のリリース

### バグ修正

* `ClientError`の`additionalProperties`を修正 (box/box-openapi[#477][1]) ([#385][2]) ([`4547148`][3])
* ブラウザでの分割アップロードを修正 (box/box-codegen[#619][4]) ([#436][5]) ([`0af2484`][6])
* コンテンツのないステータスコードをサポート (box/box-codegen[#604][7]) ([#415][8]) ([`c3f14c6`][9])
* スキーマエラーをサポートするようクライアントエラースキーマを更新 (box/box-openapi[#467][10]) ([#381][11]) ([`b845f12`][12])
* 統合マッピングのレスポンスの説明を更新 (box/box-openapi[#463][13]) ([#379][14]) ([`e3d71e1`][15])

### 新機能と機能強化

* AI LLMエンドポイントのAWS `params`を追加 (box/box-openapi[#478][16]) ([#388][17]) ([`d2fd1ec`][18])
* カスタムHTTPリクエストを行うためのメソッドを公開し、`FetchOptions`をクラスに変換 (box/box-codegen[#610][19]) ([#431][20]) ([`9a9ea62`][21])
* IDを指定してコレクションを取得エンドポイントをサポート (box/box-codegen[#595][22]) ([#396][23]) ([`f1f47be`][24])
* ファイルのダウンロードURLとファイルのサムネイルURLの取得をサポート (box/box-codegen[#617][25]) ([#435][26]) ([`1cb4d5d`][27])
* TypeScriptの`nullable`フィールドをサポート (box/box-codegen[#612][28]) ([#425][29]) ([`991dc29`][30])

[1]: https://github.com/box/box-typescript-sdk-gen/issues/477

[2]: https://github.com/box/box-typescript-sdk-gen/issues/385

[3]: https://github.com/box/box-typescript-sdk-gen/commit/454714861019998b1fc6b7c44696b0178ffa022b

[4]: https://github.com/box/box-typescript-sdk-gen/issues/619

[5]: https://github.com/box/box-typescript-sdk-gen/issues/436

[6]: https://github.com/box/box-typescript-sdk-gen/commit/0af2484dd8387cce1a8c235068ac3f834f8ecf42

[7]: https://github.com/box/box-typescript-sdk-gen/issues/604

[8]: https://github.com/box/box-typescript-sdk-gen/issues/415

[9]: https://github.com/box/box-typescript-sdk-gen/commit/c3f14c6af55ab78ed5dc981909c67397b0d7219e

[10]: https://github.com/box/box-typescript-sdk-gen/issues/467

[11]: https://github.com/box/box-typescript-sdk-gen/issues/381

[12]: https://github.com/box/box-typescript-sdk-gen/commit/b845f12d194d5f4e0cfd66db1db294e2f9a9bff8

[13]: https://github.com/box/box-typescript-sdk-gen/issues/463

[14]: https://github.com/box/box-typescript-sdk-gen/issues/379

[15]: https://github.com/box/box-typescript-sdk-gen/commit/e3d71e100500c5fa9e478b5228fd395f68242cf2

[16]: https://github.com/box/box-typescript-sdk-gen/issues/478

[17]: https://github.com/box/box-typescript-sdk-gen/issues/388

[18]: https://github.com/box/box-typescript-sdk-gen/commit/d2fd1ec4bddb19b353e286908c99477e08b90457

[19]: https://github.com/box/box-typescript-sdk-gen/issues/610

[20]: https://github.com/box/box-typescript-sdk-gen/issues/431

[21]: https://github.com/box/box-typescript-sdk-gen/commit/9a9ea628fd21001437d92b32f1760d5ba14cb46b

[22]: https://github.com/box/box-typescript-sdk-gen/issues/595

[23]: https://github.com/box/box-typescript-sdk-gen/issues/396

[24]: https://github.com/box/box-typescript-sdk-gen/commit/f1f47bebfc0981a5e67f301b6fc2e3a8568d5845

[25]: https://github.com/box/box-typescript-sdk-gen/issues/617

[26]: https://github.com/box/box-typescript-sdk-gen/issues/435

[27]: https://github.com/box/box-typescript-sdk-gen/commit/1cb4d5d93fbd94b952b876457008973a92d5aa23

[28]: https://github.com/box/box-typescript-sdk-gen/issues/612

[29]: https://github.com/box/box-typescript-sdk-gen/issues/425

[30]: https://github.com/box/box-typescript-sdk-gen/commit/991dc29bc805bf0c5198277142efb9a85de1dd42
