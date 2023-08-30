---
applied_at: '2023-08-16'
applies_to:
  - api
  - guides
is_impactful: false
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2023-08-16-embedded-sign-client
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2023-08-29-box-java-sdk-v440-released
previous_page_id: 2023-08-16-box-cli-v3100-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2023/08-16-embedded-sign-client.md
published_at: '2023-08-16'
fullyTranslated: true
---
# Box Signクライアントの埋め込み機能の導入

[Box Embed][1]を使用して、ウェブサイトに[Box Signの機能を埋め込む][2]ことができるようになりました。これにより、ユーザーはウェブサイトを離れ、Box Signにアクセスしてドキュメントに署名し、プロセスを完了するために戻る必要がなくなります。代わりに、Box Embedを使用すると、外部のウェブサイト内で署名プロセスを完了できます。

Box Signのエクスペリエンスをウェブサイトに統合するには、HTMLの`iframe`タグ内でのドキュメントの署名を許可するために設計された[`iframeable_embed_url`][3]パラメータが必要です。

<!-- more -->

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[Developer Forum][4]に英語でリクエストを投稿してください。

[1]: g://embed/box-embed

[2]: g://box-sign/create-sign-request#embedded-sign-client

[3]: r://sign-request#param-signers-iframeable_embed_url

[4]: https://forum.box.com/
