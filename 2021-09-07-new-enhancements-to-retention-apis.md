---
applied_at: '2021-09-07'
applies_to:
  - api
is_impactful: false
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2021-09-07-new-enhancements-to-retention-apis
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2021-09-01-classification-name-field-now-in-events
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/09-07-new-enhancements-to-retention-apis.md
published_at: '2021-09-07'
fullyTranslated: true
---
# リテンションAPIに対する新しい機能強化

指定されたリテンションポリシー割り当てのリテンションの対象となっているファイルおよびファイルバージョンを取得するために、新しく2つのAPIエンドポイントが導入されました。これらのAPIは、APIの[リテンションポリシー][retention-policies]スイートに含まれており、個々の[ファイル][file]および[ファイルバージョン][file-version]リテンションエンドポイント (まもなくBox APIでの公式サポート終了予定) に代わるものとして作成されました。公式サポート終了日については、後日お知らせいたします。

<!-- more -->

リテンションポリシー割り当てによってリテンションポリシーが適用されると、その適用先となるフォルダが選択されます。そのフォルダ内のファイルおよびファイルバージョンは、新しいエンドポイントを呼び出したときに返されるコンテンツになります。

## 機能

このリリースでは、以下の新しいコンテンツと機能が導入されました。

* [リテンションの対象となるファイルを取得][files-retention]: 指定したリテンションポリシー割り当てに関連付けられている、リテンションの対象となるファイルのリストを返します。
* [リテンションの対象となるファイルバージョンを取得][file-versions-retention]: 指定したリテンションポリシー割り当てに関連付けられている、リテンションの対象となるファイルバージョンのリストを返します。
* 編集可能な`description`フィールドを[リテンションポリシー][retention-policy]リソースに追加。
* 書き込み不可の`start_field_date`を[リテンションポリシー割り当て][retention-policy-assignment]リソースに追加。このフィールドは、メタデータフィールドのキーIDです。また、その値は、`assigned_to`のタイプが`metadata_template`でない場合または日付フィールドが選択されていない場合に`upload_date`にすることもできます。

[retention-policies]: g://retention-policies

[files-retention]: e://get-retention-policy-assignments-id-files-under-retention

[file-versions-retention]: e://get-retention-policy-assignments-id-file-versions-under-retention

[file]: e://get-file-version-retentions-id

[file-version]: e://get-file-version-retentions

[retention-policy]: e://resources/retention-policy

[retention-policy-assignment]: e://resources/retention-policy-assignment
