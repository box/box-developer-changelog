---
applied_at: '2020-11-17'
applies_to:
  - api
is_impactful: false
is_new_feature: true
collapse: false
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2020-11-17-client-credentials-grant
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2020-11-24-box-java-sdk-v2520-released
previous_page_id: 2020-11-17-box-ios-sdk-v420-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2020/11-17-client-credentials-grant.md
published_at: '2020-11-17'
fullyTranslated: true
---
# クライアント資格情報許可による認証のお知らせ

<!-- more -->

JWTアプリケーションの新しい認証方法がリリースされました。この新しい方法であるクライアント資格情報許可は、既存のアプリケーションに影響を及ぼすことはありませんが、新しいアプリに対してより簡単な認証方法を提供します。これまで、アプリケーションのIDを確認してアクセストークンを取得するために公開/秘密キーペアとアサーションが必要でしたが、クライアントIDとクライアントシークレットだけでトークンをリクエストできるようになりました。

```cURL
curl --location --request POST ‘https://api.box.com/oauth2/token’ \
--header ‘Content-Type: application/x-www-form-urlencoded’ \
--data-urlencode ‘client_id=<client_id>’ \
--data-urlencode ‘client_secret=<client_secret>’ \
--data-urlencode ‘grant_type=client_credentials’ \
--data-urlencode ‘box_subject_type=enterprise’ \
--data-urlencode ‘box_subject_id=<enterprise_id>’
```

詳細については、Boxの[ガイド][guide]を参照してください。

## 更新内容

* 新しいアプリケーション用の認証オプションとしてクライアント資格情報許可を追加しました
* クライアントシークレットのコピー/表示に2要素認証の要件を追加しました
* Enterpriseの承認リクエストに選択した認証方法を追加しました
* 認証タイプを変更する機能を削除しました

[guide]: g://authentication/jwt/without-sdk/#client-credentials-grant
