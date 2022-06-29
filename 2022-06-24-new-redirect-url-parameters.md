---
applied_at: '2021-06-24'
applies_to:
  - api
is_impactful: true
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2022-06-24-new-redirect-url-parameters
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2022-06-23-new-cli-script
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2022/06-24-new-redirect-url-parameters.md
published_at: '2022-06-24'
fullyTranslated: true
---
# Box Sign APIでのリダイレクトURLの設定のサポート

[Box Sign API][3]で、署名リクエストに署名した、または署名リクエストを拒否したユーザーに対して、カスタムリダイレクトURLを設定するための新しいパラメータが提供されるようになりました。これにより、Box Signとアプリケーションを統合する際、署名者をアプリケーションにリダイレクトしたり、カスタムのランディングページを表示したりすることができます。

<!-- more -->

## 更新内容

Box Sign APIは、[署名リクエストを作成][4]の呼び出しのリクエスト本文で渡すオプションのパラメータを提供します:

* リクエストに署名した後に、ユーザーを特定のページにリダイレクトする`redirect_url`
* リクエストを拒否した後に、ユーザーを特定のページにリダイレクトする`declined_redirect_url`

リダイレクトURLは、すべての署名者に対してグローバルに定義することも、特定の署名者に対してのみ定義することもできます。詳細については、[署名リクエストを作成][4]のガイドを参照してください。

## 開発者向けリソース

Box App Centerでのアプリケーションの作成、またはBoxパートナーへの参加をご希望の場合、詳細については[Box Partner Resources][2]のガイド (英語) を参照してください。

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[開発者向けフォーラム][1]に英語でリクエストを投稿してください。

[1]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum

[2]: https://support.box.com/hc/en-us/sections/360009473734-Box-Partner-Resources

[3]: https://developer.box.com/reference/post-sign-requests/

[4]: https://developer.box.com/guides/box-sign/create-sign-request/
