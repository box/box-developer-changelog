---
applied_at: '2021-11-03'
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
id: 2021-11-03-extend-retention-via-files-api
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2021-11-16-added-retention-policy-marker-based-pagination
previous_page_id: 2021-11-02-box-windows-sdk-v400-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/11-03-extend-retention-via-files-api.md
published_at: '2021-11-03'
fullyTranslated: true
---
# ファイルAPIを使用したリテンションポリシーの拡張

すでにリテンションの対象となっているファイルの保持期間を、新しい`disposition_at`フィールドを使用して延長できるようになりました。日付を延長した場合は、元に戻すことも、新しい日付より前の日付に更新することもできません。

<!-- more -->

## 更新内容

* [ファイル (Full) リソース][file-full]に`disposition_at`フィールドを追加
* [PUTファイルエンドポイント][file-put]に`disposition_at`パラメータを追加
* [ガイドのリテンションポリシーセクション][extend-retention]に注記を追加

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[開発者向けフォーラム][forum]に英語でリクエストを投稿してください。

[forum]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum

[extend-retention]: g://retention-policies/#extend-retention-for-a-file

[file-put]: e://put-files-id/#param-disposition_at

[file-full]: e://resources/file--full/#param-disposition_at
