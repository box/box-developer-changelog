---
applied_at: '2024-10-22'
applies_to:
  - guides
  - api
is_impactful: true
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2024-10-22-box-ai-text-gen-ask-ga
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2024-10-21-box-ui-elements-v2200-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2024/10-22-box-ai-text-gen-ask-ga.md
published_at: '2024-10-22'
fullyTranslated: true
---
# Box AI API — ドキュメントのQ&Aおよびテキスト生成機能の正式リリース

Box AI APIの[Box AIに質問する][2]機能および[Box AIを使用してテキストを生成する][3]機能が、**Enterprise Plus**をご利用のすべてのお客様に提供されるようになりました。

[Box AI API][1]を使用すると、カスタムアプリケーション内でBox AI機能を利用できます。たとえば、Box AIの質疑応答機能をサードパーティ製アプリケーションに実装したり、自社製品のコンテンツエディタ内で直接コンテンツを生成したりできます。また、指定したドキュメントからメタデータを抽出することもできます。

_メタデータ抽出に関連したエンドポイントは、現在、BoxのMain Beta Agreementに従い提供されるベータ機能のため、利用可能な機能は変更される可能性があります。_

<!-- more -->

現時点では、Box AI機能を使用すると、以下のことが可能です。

* 質問に対する応答を取得する。
* ドキュメントの要約を取得する。
* ドキュメント内で使用できるテキストを生成する。
* さらに高い自由度でプロンプトを使用し、指定したファイルから柔軟な方法でメタデータを抽出する。
* 指定したファイルから、[メタデータテンプレート][4]または`fields`構造を使用してメタデータを抽出する。
* デフォルトのAPIモデルの構成を取得して上書きする。

Box AIの詳細については、[Box AI APIの開発者向けガイド][1]を参照してください。また、Box AI APIの詳細については、[APIリファレンス][5]を参照してください。

## Box AI for UI Elements

[Box AI for UI Elements][6]では、Box AIのドキュメントのQ&A機能とテキスト生成機能で[コンテンツプレビュー][7]を強化します。Box AI for UI Elementsの強化により、ユーザーは、カスタムアプリケーションにAI機能を埋め込み、質問への回答、ドキュメントの要約、引用情報の追加、会話履歴の使用、書式設定のサポートのような操作を円滑に進めることができます。

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[Developer Forum][8]に英語でリクエストを投稿してください。

[1]: https://developer.box.com/guides/box-ai

[2]: g://box-ai/ask-questions/

[3]: g://box-ai/generate-text/

[4]: https://support.box.com/hc/en-us/articles/360044194033-Customizing-Metadata-Templates

[5]: e://ai-agent-ask/

[6]: g://embed/ui-elements/preview#box-ai-ui-element

[7]: g://embed/ui-elements/preview

[8]: https://forum.box.com/
