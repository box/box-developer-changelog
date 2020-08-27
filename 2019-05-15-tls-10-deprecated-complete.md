---
applied_at: '2019-05-15'
applies_to:
  - api
is_impactful: true
is_new_feature: false
is_index: false
category_id: changelog
subcategory_id: ''
id: 2019-05-15-tls-10-deprecated-complete
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2019-05-16-python-sdk-v241-release
previous_page_id: 2019-05-10-box-cli-v220-release
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2019/05-15-tls-10-deprecated-complete.md
published_at: '2019-05-15'
---
# TLS 1.0非推奨の完了

2019年5月13日に、Box APIへのTLS 1.0リクエストを無効にするプロセスが開始されました。今後、すべてのTLS 1.0 APIリクエストが、API呼び出しの実行時に安全な接続を確立できなかったことを示す応答を返します。

影響を受ける開発者には、これまで6～12か月にわたって複数のチャネルを通じて通知してきましたが、アプリケーションに影響がある場合は、BoxにAPIリクエストを再度送信できるようにシステムを更新する必要があります。

システムをTLS 1.2にアップグレードするには、TLS 1.0の公式サポート終了ガイドを参照してください。

質問や追加のサポートについては、[サポートチケットをお送りください][support_ticket]。

[support_ticket]: https://community.box.com/t5/custom/page/page-id/BoxSearchLithiumTKB
