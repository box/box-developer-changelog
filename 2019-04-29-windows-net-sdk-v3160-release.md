---
applied_at: '2019-04-29'
applies_to:
  - windows
  - sdks
is_impactful: false
is_new_feature: true
collapse: true
release_source_url: 'https://github.com/box/box-windows-sdk-v2/releases/tag/v3.16.0'
is_index: false
category_id: changelog
subcategory_id: ''
id: 2019-04-29-windows-net-sdk-v3160-release
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2019-05-09-windows-net-sdk-v3170-release
previous_page_id: 2019-04-25-node-sdk-v1290-release
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2019/04-29-windows-net-sdk-v3160-release.md
published_at: '2019-04-29'
---
# Windows .NET SDK `v3.16.0`のリリース

* 並べ替え順を制御するために`sort`および`direction`パラメータを`client.SearchManager.SearchAsync()`に追加
* 返されるサムネイル形式を制御するために`extension`パラメータを`client.FilesManager.GetThumbnailAsync()`に追加 (`@guilmori`に感謝します)。
* クエリ文字列パラメータが正しくエンコードされなかったバグを修正
* メタデータのキーと値を設定し、指定されたキーの既存の値を上書きする`SetFileMetadataAsync()`および`SetFolderMetadataAsync()`メソッドが`client.MetadataManager`に追加されました。
* APIが一時的なエラーステータスコードで応答した場合にほとんどのAPI呼び出しを自動的に再試行

[`nuget.org/packages/Box.V2/3.16.0`](https://www.nuget.org/packages/Box.V2/3.16.0)
[`nuget.org/packages/Box.V2.Core/3.16.0`](https://www.nuget.org/packages/Box.V2.Core/3.16.0)
