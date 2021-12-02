---
applied_at: '2021-11-29'
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
id: 2021-11-29-oauth-20-redirect-url-updates
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2021-11-23-box-java-sdk-v2580-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/11-29-oauth-20-redirect-url-updates.md
published_at: '2021-11-29'
fullyTranslated: true
---
# 要件の変更に伴うOAuth 2.0リダイレクトURIの更新

Box開発者コンソールの新機能をリリースしました。開発者は、この新機能を使用して、OAuth 2.0アプリケーション用に複数のリダイレクトURIを追加できるようになります。

<!-- more -->

日本時間2021年11月30日以降、OAuth 2.0を使用する新規のアプリケーションでは、開発者コンソールの \[構成] タブで設定されたURLとリダイレクト時に使用されるURLが厳密に一致する必要があります。また、そのため新規のアプリケーションと既存のアプリケーションの両方で、複数のリダイレクトURLを追加できるようになります。

既存のアプリケーションでは、サービスの中断を回避するために、日本時間2022年5月14日までにこのURLを変更する必要があります。

## 更新内容

* Box開発者コンソールのOAuth 2.0アプリケーションの \[構成] セクションに、複数のリダイレクトURIを追加するための新しいボタンが用意されました
* リダイレクトURIは、渡されたURIと、OAuth 2.0アプリケーションの構成で設定されたURIを一致させるように厳密なチェックを強制するようになりました
* [`GET /authorize`][url-redirect]エンドポイントのページで`redirect_uri`クエリパラメータの表現を更新しました
* OAuth 2.0の[設定][oauth-setup]、[SDKを使用したOAuth 2.0][oauth-sdk]、[SDKを使用しないOAuth 2.0][oauth-nosdk]に関するガイドページを更新しました

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[開発者向けフォーラム][forum]に英語でリクエストを投稿してください。

[forum]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum

[url-redirect]: e://get-authorize/#param-redirect_uri

[oauth-setup]: g://authentication/oauth2/oauth2-setup/

[oauth-sdk]: g://authentication/oauth2/with-sdk/

[oauth-nosdk]: g://authentication/oauth2/without-sdk/
