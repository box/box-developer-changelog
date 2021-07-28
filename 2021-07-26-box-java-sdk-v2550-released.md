---
applied_at: '2021-07-26'
applies_to:
  - sdks
  - java
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-java-sdk/releases/tag/v2.55.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2021-07-26-box-java-sdk-v2550-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2021-07-26-release-of-box-sign-api
previous_page_id: 2021-07-16-updated-file-size-limits
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/07-26-box-java-sdk-v2550-released.md
published_at: '2021-07-26'
fullyTranslated: true
---
# Box Java SDK `v2.55.0`のリリース

注: 以下の「重大な変更」による悪影響はないため、Boxでは、このリリースについてメジャーバージョンを上げないことを決定しました。この変更によるお客様への影響はありません。

**重大な変更:**

* APIレスポンスと一致するようメタデータ実行クエリを更新 ([#890][1])
* 注: この変更により、メソッドは、サポートが終了されることなく、削除されます。このメソッドは、基になるサービスでサポートされなくなったため、正しく使用できなくなりました。

**新機能と機能強化:**

* 不適切な用語を削除または廃止 (\[[#889][2]])(<https://github.com/box/box-java-sdk/pull/889>

)

* ユーザーの`is_external_collab_restricted`パラメータのサポートを追加 ([#896][3])
* `GroupMembership`の設定可能な権限のサポートを追加 ([#897][4])
* `SHIELD_JUSTIFICATION_APPROVAL`イベントタイプを追加 ([#898][5])
* 割り当てのリテンションの対象となるファイルおよびファイルバージョンを取得する機能を追加 ([#899][6])
* `TASK_UPDATE`、`FILE_VERSION_RESTORE`、`ADVANCED_FOLDER_SETTINGS_UPDATE`イベントタイプを追加 ([#902][7])
* Box Sign APIのサポートを追加 ([#904][8])

**バグ修正:**

* `BoxLegalHoldPolicy`のセッターを追加 ([#885][9])
* `BoxTaskAssignment`のセッターを追加 ([#886][10])
* グループメンバーシップおよびウェブリンクのセッターを追加 ([#887][11])
* Webhookのセッターを追加 ([#888][12])
* `BoxFile.getThumbnail`のサポートを終了して`BoxFile.getRepresentationContent`を推奨 ([#891][13])

[1]: https://github.com/box/box-java-sdk/pull/890

[2]: https://github.com/box/box-java-sdk/issues/889

[3]: https://github.com/box/box-java-sdk/pull/896

[4]: https://github.com/box/box-java-sdk/pull/897

[5]: https://github.com/box/box-java-sdk/pull/898

[6]: https://github.com/box/box-java-sdk/pull/899

[7]: https://github.com/box/box-java-sdk/pull/902

[8]: https://github.com/box/box-java-sdk/pull/904

[9]: https://github.com/box/box-java-sdk/pull/885

[10]: https://github.com/box/box-java-sdk/pull/886

[11]: https://github.com/box/box-java-sdk/pull/887

[12]: https://github.com/box/box-java-sdk/pull/888

[13]: https://github.com/box/box-java-sdk/pull/891
