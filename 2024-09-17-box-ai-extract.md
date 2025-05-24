---
applied_at: '2024-09-17'
applies_to:
  - guides
  - api
is_impactful: true
is_new_feature: true
release_source_url: ''
collapse: true
show_excerpt: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2024-09-17-box-ai-extract
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2024-09-18-box-python-sdk-generated-v150-released
previous_page_id: 2024-09-16-app-item-associations
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2024/09-17-box-ai-extract.md
published_at: '2024-09-17'
fullyTranslated: true
---
# Box AI Platform API (ベータ版) によるメタデータ抽出の提供開始

最近この機能が追加されたBox AI Platform APIを使用すると、指定した入力データからメタデータを抽出できます。たとえば、請求書から金融情報を抽出したり、診断書から患者のデータを抽出したりすることができます。

> **注**: Box AI Platform APIは、現在、BoxのMain Beta Agreementに従い提供されるベータ機能のため、利用可能な機能は変更される可能性があります。Box AI Platform APIは、Enterprise Plusをご利用のすべてのお客様が利用できます。

<!-- more -->

以下のオプションがあります。

[`POST /2.0/ai_extract`][1]エンドポイントを使用すると、指定したファイルから自由な形式でメタデータを抽出できます。つまり、プロンプトの作成の自由度が増すため、リクエストを実行するのにメタデータテンプレートは必要ありません。[`POST /2.0/ai_extract_structured`][2]エンドポイントを使用すると、[メタデータテンプレート][3]または`fields`構造を使用して、指定したファイルからメタデータを抽出できます。

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[Developer Forum][4]に英語でリクエストを投稿してください。

[1]: e://post-ai-extract

[2]: e://post-ai-extract-structured

[3]: https://support.box.com/hc/en-us/articles/360044194033-Customizing-Metadata-Templates

[4]: https://forum.box.com/
