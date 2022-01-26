---
applied_at: '2019-05-31'
applies_to:
  - api
is_impactful: true
is_new_feature: true
collapse: true
show_excerpt: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2019-05-31-replaced-obsolete-field-in-collaborations
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2019-06-06-java-sdk-v2340-release
previous_page_id: 2019-05-23-java-sdk-v2330-release
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2019/05-31-replaced-obsolete-field-in-collaborations.md
published_at: '2019-05-31'
fullyTranslated: true
---
# コラボレーションで廃止されたフィールドを置き換え

2018年に、新しいフィールド`acceptance_requirements_status`がGETコラボレーション/ID APIエンドポイントに追加され、追加の通知ユースケースがサポートされるようになりました。このフィールドには、利用規約、2要素認証、強力なパスワードの要件が含まれます。利用規約の要件のみを含む既存の`acceptance_requirements`フィールドは、新しい`acceptance_requirements_status`に置き換えられました。

<!-- more -->

以前は、`GET
/collaboration/<collaboration_id>?fields=acceptance_requirements`への呼び出しで以下のようなオブジェクトが返されていました。

```js
"acceptance_requirements": {
    "terms_of_service": {
        "type": "terms_of_service",
        "id": <tos_id>
    }
}
```

新しいフィールドを使用すると、リクエスト`GET
/collaboration/<collaboration_id>?fields=acceptance_requirements_status`は以下を返します。

```js
 "acceptance_requirements_status": {
    "terms_of_service_requirement": {
        "is_accepted": true,
        "terms_of_service": {
            "type": "terms_of_service",
            "id": <tos_id>
        }
    },
    "strong_password_requirement": {
        "enterprise_has_strong_password_required_for_external_users": true,
        "user_has_strong_password": false
    },
    "two_factor_authentication_requirement": {
        "enterprise_has_two_factor_auth_enabled": true,
        "user_has_two_factor_authentication_enabled" true
    }
}
```
