---
applied_at: '2022-05-18'
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
id: 2022-05-18-oauth-20-redirect-url-release
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2022-05-24-box-java-sdk-v320-released
previous_page_id: 2022-05-18-new-endpoints-for-user-avatar
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2022/05-18-oauth-20-redirect-url-release.md
published_at: '2022-05-18'
fullyTranslated: true
---
# OAuth 2.0のリダイレクトURLの厳密なチェックの有効化

すべてのOAuth 2.0アプリケーションに対する厳密なチェックが有効になりました。

<!-- more -->

2021年11月29日に、OAuth 2.0を使用する新しいアプリケーションでは、開発者コンソールの \[構成] タブで設定されたURIが、リダイレクトに使用されるURIと厳密に一致することが必要になると[発表][oauth-cl]しました。

この変更は現在完了済みです。この標準に準拠していないアプリケーションを使用していた企業には、アプリケーションの更新方法を説明したメールが過去数か月の間に4件送信されています。

## リダイレクトエラーの解決方法

メールを受信していないか、見逃していた場合は、問題を軽減する以下の手順を確認してください。

1. Box開発者コンソールの \[構成] タブで、対象のアプリケーションのリダイレクトURLを変更します。静的URLの場合は、開発者コンソールを更新して複数のURLを追加します。動的URLの場合は、静的URLを使用するか、stateパラメータを使用するようにアプリケーションを更新します。
2. アプリケーションコードで使用されているリダイレクトURLを変更して、開発者コンソールのURLと厳密に一致させます。

1の場合は、以下の手順に従ってください。

* アプリケーション所有者としてBoxにログインし、Box開発者コンソールに移動します。
* アプリケーションをクリックし、\[構成] タブに移動します。
* \[OAuth 2.0リダイレクトURI] セクションまで下にスクロールします。
* 現在表示されているURLを更新します。

2の場合は、アプリケーションコードを変更し、影響を受ける使用されているURLを、開発者コンソールのURLと厳密に一致するよう置き換えてください。

## 更新内容

* リダイレクトURIは、渡されたURIと、OAuth 2.0アプリケーションの構成で設定されたURIを一致させるように厳密なチェックを強制するようになりました

## サポート情報

本件に関するご質問は、[Developer Forum][forum]に英語でリクエストを投稿していただくか、販売店から指定されたサポート窓口にお問い合わせください。[][support]

[forum]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum

[oauth-cl]: https://developer.box.com/changelog/#2021-11-29-oauth-20-redirect-url-updates

[url-redirect]: e://get-authorize/#param-redirect_uri

[oauth-setup]: g://authentication/oauth2/oauth2-setup/

[oauth-sdk]: g://authentication/oauth2/with-sdk/

[oauth-nosdk]: g://authentication/oauth2/without-sdk/

[support]: https://support.box.com/hc/en-us/requests/new
