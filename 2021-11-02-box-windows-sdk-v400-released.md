---
applied_at: '2021-11-02'
applies_to:
  - sdks
  - windows
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-windows-sdk-v2/releases/tag/v4.0.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2021-11-02-box-windows-sdk-v400-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2021-11-03-extend-retention-via-files-api
previous_page_id: 2021-10-28-box-ios-sdk-v500-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/11-02-box-windows-sdk-v400-released.md
published_at: '2021-11-02'
fullyTranslated: true
---
# Box Windows SDK `v4.0.0`のリリース

**重要な変更:**

* BoxClientおよびマネージャのインターフェイスを抽出し、テスタビリティを改善 ([#603][1])
* BoxConfigBuilderを追加し、BoxConfigを変更不可に設定 ([#737][2])
* 非同期メソッドからタスクを公開 ([#742][3])
* DateTimeの代わりにDateTimeOffsetを使用 ([#749][4])
* 返された例外を修正 ([#753][5])
* .NET Standardを2.0にアップグレード ([#755][6])

**新機能と機能強化:**

* 割り当てのリテンションの対象となるファイルおよびファイルバージョンを取得する機能を追加 ([#734][7])
* `Folder`の更新のために`is_collaboration_restricted_to_enterprise`フラグのサポートを追加 ([#732][8])
* 不適切な用語の変更 ([#738][9])
* サービス利用規約のユーザーステータスの作成用に使いやすくなった新しいメソッドを追加 ([#740][10])
* ごみ箱内の項目を取得する際に並べ替えと方向のパラメータを渡すことを許可 ([#754][11])
* タスクのcompletion_ruleフィールドのサポートを追加 ([#758][12])
* BoxSign APIのサポートを追加 ([#765][13])

**バグ修正:**

* アップロード時の`Cannot access a closed Stream.Request`例外を修正 ([#739][14]) ([#757][15])

<https://www.nuget.org/packages/Box.V2/4.0.0>

<https://www.nuget.org/packages/Box.V2.Core/4.0.0>

[1]: https://github.com/box/box-windows-sdk-v2/pull/603

[2]: https://github.com/box/box-windows-sdk-v2/pull/737

[3]: https://github.com/box/box-windows-sdk-v2/pull/742

[4]: https://github.com/box/box-windows-sdk-v2/pull/749

[5]: https://github.com/box/box-windows-sdk-v2/pull/753

[6]: https://github.com/box/box-windows-sdk-v2/pull/755

[7]: https://github.com/box/box-windows-sdk-v2/pull/734

[8]: https://github.com/box/box-windows-sdk-v2/pull/732

[9]: https://github.com/box/box-windows-sdk-v2/pull/738

[10]: https://github.com/box/box-windows-sdk-v2/pull/740

[11]: https://github.com/box/box-windows-sdk-v2/pull/754

[12]: https://github.com/box/box-windows-sdk-v2/pull/758

[13]: https://github.com/box/box-windows-sdk-v2/pull/765

[14]: https://github.com/box/box-windows-sdk-v2/pull/739

[15]: https://github.com/box/box-windows-sdk-v2/pull/757
