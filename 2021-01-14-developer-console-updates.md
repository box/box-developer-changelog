---
applied_at: '2021-01-15'
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
id: 2021-01-14-developer-console-updates
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2021-01-15-metadata-query-index-changes
previous_page_id: 2021-01-11-box-python-sdk-v2110-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/01-14-developer-console-updates.md
published_at: '2021-01-14'
fullyTranslated: true
---
# 開発者コンソールのアップデート

開発者コンソールで新しく \[**承認**] タブが使用可能になりました。さらに、\[**構成**] タブ内の \[**アプリケーションアクセス**] と \[**Scope (スコープ)**] の設定でUIがわかりやすく変更されたことで、設定を決定しやすくなりました。このような変更は、設定の機能には影響しません。

<!-- more -->

これで、開発者は \[**承認**] タブに移動して、承認を得るためにアプリケーションを直接Box管理者に送信するようになります。

\[**構成**] タブに関しては、JWTの \[**アプリケーションアクセス**] の設定に役立つヒントが追加されたため、\[**アプリアクセスのみ**] と \[**アプリアクセス + Enterpriseアクセス**] のどちらにするかを明確に決めやすくなりました。現在、\[**Scope (スコープ)**] セクションは、操作の種類 (コンテンツ操作、管理操作、管理者操作) でグループ化されています。

* **アプリの承認プロセス**: [ガイド](g://authorization/custom-app-approval)
* **スコープ**: [ガイド](g://api-calls/permissions-and-errors/scopes)
* **アプリケーションアクセス**: [ガイド](g://authentication/jwt/jwt-setup/#application-access)

## 更新内容

* 開発者コンソールに \[承認] タブを追加しました
* \[構成] タブでJWTの \[アプリケーションアクセス] の設定用UIを更新しました
* \[構成] タブで \[Scopes (スコープ)] のUIのグループ化を更新しました
