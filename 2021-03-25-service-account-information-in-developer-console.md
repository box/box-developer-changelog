---
applied_at: '2021-03-25'
applies_to:
  - api
is_impactful: false
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2021-03-25-service-account-information-in-developer-console
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2021-03-25-new-metadata-query-indicies-endpoint
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/03-25-service-account-information-in-developer-console.md
published_at: '2021-03-25'
fullyTranslated: true
---
# 開発者コンソールへのサービスアカウントのメールアドレスの追加

サーバー認証を利用するアプリケーションを管理者が承認すると、サービスアカウントの自動生成メールアドレスが開発者コンソールの \[一般] タブに表示されるようになりました。その後、このメールアドレスは、Boxコンテンツでユーザーをコラボレータに設定するために使用できます。これは、必ず`AutomationUser_AppServiceID_RandomString@boxdevedition.com`形式になります (例: `AutomationUser_123456_6jCo6Pqwo@boxdevedition.com`)。

詳細については、[ユーザータイプ][ut]と[サービスアカウント][sa]のガイドを参照してください。

## 機能

* サービスアカウントユーザーの自動生成メールアドレスを開発者コンソールに追加

[ut]: https://developer.box.com/guides/authentication/user-types/

[sa]: https://developer.box.com/guides/authentication/user-types/service-account/
