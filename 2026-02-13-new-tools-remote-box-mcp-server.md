---
applied_at: '2026-02-17'
applies_to:
  - guides
  - api
  - ai
is_impactful: true
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2026-02-13-new-tools-remote-box-mcp-server
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2026-02-18-box-windows-sdk-v1060-released
previous_page_id: 2026-02-11-box-ui-elements-v2630-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2026/02-13-new-tools-remote-box-mcp-server.md
published_at: '2026-02-13'
fullyTranslated: true
---
# リモートBox MCPサーバー向けの新しいツール

AIエージェントがBoxのコンテンツやコラボレーションを使用してさらに多くのことを実行できるように、[リモートBox MCPサーバー][remote-mcp]に新しいツールを追加しました。

**Doc Gen**

* `get_docgen_template_by_id` — Doc Genテンプレートの詳細を取得する。
* `list_docgen_templates` — 認証済みユーザーが利用できるすべてのBox Doc Genテンプレートのリストを取得する。
* `create_docgen_batch` — 指定されたデータをプレースホルダタグに入力して、Doc Genテンプレートからドキュメントを生成する。

**検索**

* `search_files_metadata` — SQLに似たメタデータクエリを使用してファイルを検索する。複雑なフィルタ処理、フィールドの選択、フォルダの範囲指定がサポートされています。

**Box AI**

* `ai_extract_structured_from_fields_enhanced` — Box AI抽出エージェント (強化) やカスタムフィールドの定義を使用して、ファイルから構造化メタデータを抽出する。

**コラボレーション**

* `list_item_collaborations` — 項目の既存のすべてのコラボレーションのリストを取得する。

**Hub**

* `copy_hub` — すべての構造と設定を維持して既存のBox Hubのコピーを作成する。元のHubは変更されません。

設定およびクライアント側の手順については、[リモートBox MCPサーバーガイド][remote-mcp]を参照してください。

## サポート情報

問題がある場合やさらにガイドが必要な場合は、Boxの[Developer Forum][forum]に英語でリクエストを投稿してください。

[forum]: https://forum.box.com/

[remote-mcp]: https://developer.box.com/guides/box-mcp/remote
