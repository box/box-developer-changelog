---
applied_at: '2020-10-29'
applies_to:
  - api
  - sdks
is_impactful: true
is_new_feature: false
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2020-09-29-changes-to-oauth-2-app-redirect-url-requirements
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2020-09-10-group-api-adds-new-filter-and-permissions
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2020/09-29-changes-to-oauth-2-app-redirect-url-requirements.md
published_at: '2020-09-29'
fullyTranslated: true
---
# OAuth 2アプリリダイレクトURIの要件の変更

日本時間2020年10月30日から、Boxでは、アプリケーションに影響を及ぼす可能性のある新規および既存の[OAuth 2](g://authentication/oauth2/)ベースのBox統合で使用されるリダイレクトURIに対してより厳しい要件を使用します。

現在アプリケーションの構成で空のリダイレクトURIを使用している既存のアプリケーション所有者は、[こちらの説明](g://applications/custom-apps/oauth2-setup/#redirect-uri)に従って、コードのリダイレクト手順 ([こちらを参照](g://authentication/oauth2/with-sdk/#2-redirect-user)) で使用されているリダイレクトと一致するようリダイレクトURIを更新する必要があります。

2020年10月30日以降、まだ空のURIを使用して構成されているアプリケーションでは、URIの調整が行われない場合にユーザーがアプリケーションにリダイレクトされると、エラーが返されるようになります。

影響を受けるアプリケーション所有者とコラボレータの全員には、各自のDeveloperアカウントに関連付けられたメールアドレスを利用して通知しました。

## 確認して変更を行う方法

アプリケーションンが影響を受けた場合にリダイレクトURIを確認し、アプリケーションを更新するには、以下の手順を実行します。

* アプリケーションを所有するユーザーとして、[Box開発者コンソール](https://cloud.app.box.com/developers/console)に移動します。
* **OAuth 2** (クライアント側認証) を使用する**カスタムアプリ**ごとに、そのアプリケーションをクリックして開きます。
* 左のナビゲーションで \[**構成**] をクリックします。
* \[**OAuth 2.0リダイレクトURI**] セクションまで下にスクロールします。
* このURIが空のアプリケーションでは、\<c0>こちらのガイドで説明されているように\<c0>、Boxの認証手順からアプリケーションにユーザーをリダイレクトする際にアプリケーションコードで使用されるURIを追加します。
