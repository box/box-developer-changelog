---
applied_at: '2020-12-10'
applies_to:
  - api
is_impactful: true
is_new_feature: false
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2020-12-10-blank-oauth2-redirect-uri-change
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2020-12-03-new-type-field-in-search-api-responses
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2020/12-10-blank-oauth2-redirect-uri-change.md
published_at: '2020-12-10'
fullyTranslated: true
---
# Blank OAuth 2 redirect URI change

On September 28th, 2020 we announced upcoming changes to our [security requirements for OAuth 2 app redirect URIs][oauth2-changelog-notice]. As of today, applications that use a blank redirect URI will no longer be permitted, and will begin to produce an error stating `redirect_uri missing` when attempting to redirect the user, stating that there is a mismatched URI.

Impacted applications will have received multiple emails to the developer email address associated with the application and account, and are part of a small subset of applications that were grandfathered in to allow the functionality to persist.

New applications, or any OAuth 2 applications that have a redirect URI specified are not impacted.

## How to update your OAuth 2 app redirect URI

If your OAuth 2 application has started to produce an error during the redirect phase, you may be impacted by this change. To update your application(s), use the following steps:

* アプリケーションを所有するユーザーとして、[Box開発者コンソール][dev-console]に移動します。
* From the top navigation, click on **Configuration**.
* \[**OAuth 2.0リダイレクトURI**] セクションまで下にスクロールします。 
* このURIが空のアプリケーションでは、\<c0>こちらのガイドで説明されているように\<c0>、Boxの認証手順からアプリケーションにユーザーをリダイレクトする際にアプリケーションコードで使用されるURIを追加します。

[oauth2-changelog-notice]: https://developer.box.com/changelog/#2020-09-29-changes-to-oauth-2-app-redirect-url-requirements

[dev-console]: https://cloud.app.box.com/developers/console
