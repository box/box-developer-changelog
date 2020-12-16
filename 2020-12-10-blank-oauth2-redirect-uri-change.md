---
applied_at: '2020-12-14'
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
# 空のOAuth 2リダイレクトURIの変更

2020年9月28日に、[OAuth 2アプリリダイレクトURIのセキュリティ要件][oauth2-changelog-notice]に対して変更が予定されていることをお知らせしました。今後、空のリダイレクトURIを使用するアプリケーションは認められなくなり、ユーザーをリダイレクトしようとすると、一致しないURIがあることを示す`redirect_uri missing`というエラーが発生するようになります。

影響を受けるアプリケーションは、アプリケーションとアカウントに関連付けられた開発者のメールアドレス宛ての複数のメールを受信することになり、機能を維持できるようにこの変更の適用から除外された一部のアプリケーションに含まれます。

新しいアプリケーションや、リダイレクトURIが指定されているOAuth 2アプリケーションは影響を受けません。

## OAuth 2アプリリダイレクトURIを更新する方法

OAuth 2アプリケーションでリダイレクト時にエラーが発生し始めたら、この変更による影響を受けている可能性があります。アプリケーションを更新するには、以下の手順に従ってください。

* アプリケーションを所有するユーザーとして、[Box開発者コンソール][dev-console]に移動します。
* 上部のナビゲーションで \[**構成**] をクリックします。
* \[**OAuth 2.0リダイレクトURI**] セクションまで下にスクロールします。 
* このURIが空のアプリケーションでは、\<c0>こちらのガイドで説明されているように\<c0>、Boxの認証手順からアプリケーションにユーザーをリダイレクトする際にアプリケーションコードで使用されるURIを追加します。

[oauth2-changelog-notice]: https://developer.box.com/changelog/#2020-09-29-changes-to-oauth-2-app-redirect-url-requirements

[dev-console]: https://cloud.app.box.com/developers/console
