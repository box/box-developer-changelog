---
applied_at: '2024-05-15'
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
id: 2024-05-08-notification-suppression-for-sign
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2024-05-07-box-java-sdk-v490-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2024/05-08-notification-suppression-for-sign.md
published_at: '2024-05-08'
fullyTranslated: true
---
# Box Signの通知の抑制

[Box Sign API][1]を使用すると、Box Signのワークフローの中で送信される**デフォルト**のBoxメール通知を抑制できます。​​

<!-- more -->

この機能により、デフォルトの通知をオフにして、独自のカスタマイズしたメッセージを使用したり、送信する際に経由するチャネルを決定したりすることができます。

_**注**: Box Signのメール通知を抑制することを選択すると、組織は、該当する場合に、使用される配信方法に対して署名者の同意を得ることを含め、適用されるすべての法律と規制に従い、署名プロセスにおいて適切なタイミングで適切な内容を含むすべての通知を署名者に確実に配信する責任を負うことになります。_

## Box Signの新しいWebhook

Boxでは、通知の抑制機能とともに、電子サインワークフローのカスタマイズオプションを強化する以下の3つの[Webhook][2]を新しく導入します。

* `SIGN.REQUEST.SIGNATURE_REQUESTED`
* `SIGN.REQUEST.SIGNER_SIGNED`
* `SIGN.REQUEST.ERROR_FINALIZING`

上記のWebhookを使用すると、自分のアプリケーションで操作をトリガーしたり、Box Signで発生したイベントについてユーザーに通知したりできます。​​

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[Developer Forum][3]に英語でリクエストを投稿してください。

[1]: e://post-sign-requests

[2]: https://developer.box.com/sign/webhooks/

[3]: https://forum.box.com/
