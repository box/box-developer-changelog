---
applied_at: '2018-06-25'
applies_to:
  - cli
is_impactful: false
is_new_feature: false
is_index: false
category_id: changelog
subcategory_id: ''
id: 2018-06-25-update-to-the-box-cli
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2018-06-28-java-sdk-v2202-release
previous_page_id: 2018-06-18-box-android-sdk-v420-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2018/06-25-update-to-the-box-cli.md
published_at: '2018-06-25'
fullyTranslated: true
---
# Box CLIの更新

[Box CLI](guide://cli/quick-start)への更新がリリースされました。このバージョンには以下の更新が含まれます。

* **[新しいマルチゾーンコマンド][cli_update_multizones]**: データ保管場所用の[Box Multizones][cli_update_multizones_announce]のサポートが追加されました。

* **[ユーザーによるCSV操作の修正][cli_update_csv_operations]**: ユーザーがOpen With Elementを使用できなかったバグが修正されました。Open With Elementが、ユーザーデータのベータをCSVファイルに保存しなくなりました。
  <!-- markdownlint-disable line-length -->

* **[フォルダの更新時に`can_non_owners_invite`を設定する機能][cli_update_folder_update_flag]**: 所有者以外のユーザーが他のユーザーをフォルダでのコラボレーションに招待できるかどうかを設定できるようになりました。
  <!-- markdownlint-enable line-length -->

* **[新しいCLI構成のダンプコマンド][cli_update_config_dump]**: 値をコピーして一般的な用途に使えるよう、Box構成ファイルを単一の文字列としてダンプする機能が追加されました。オプションで、エスケープ引用符を追加できます。Open Withは、環境変数または構成プロパティを (AWSの個別のボタンやAzureなどで) 提供します。

[cli_update_multizones]: https://github.com/box/boxcli/pull/91

[cli_update_multizones_announce]: https://blog.box.com/blog/multizones-storage-data-residency-compliance/

[cli_update_csv_operations]: https://github.com/box/boxcli/pull/82

[cli_update_folder_update_flag]: https://github.com/box/boxcli/pull/92

[cli_update_config_dump]: https://github.com/box/boxcli/pull/83
