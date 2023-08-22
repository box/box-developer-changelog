---
applied_at: '2022-03-03'
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
id: 2022-03-03-developer-documentation-updates
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2022-03-11-box-python-sdk-v320-released
previous_page_id: 2022-02-28-box-java-sdk-v311-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2022/03-03-developer-documentation-updates.md
published_at: '2022-03-03'
fullyTranslated: true
---
# Developerドキュメントの更新

Developerドキュメントの更新およびバグ修正をいくつかリリースしました。以下をクリックして詳細を確認してください。

<!-- more -->

## 更新内容

* [メタデータクエリ][mq]の例に末尾のバックスラッシュを追加
* [メタデータクエリ][mq]の例から余分な引用符を削除
* [Shieldスマートアクセス][shield]イベントの例を更新および追加
* `can_view_path`[フィールド][collab]に注記を追加
* APIで返される適切なレスポンスを表すよう[ごみ箱][trash]のリソースを修正
* 変更ログに`iOS`フィルタを追加
* フォルダロック[エンドポイント][folder-lock]に注記を追加
* [開発者トークン][dt]ガイドに、トークンを取り消すとWebhookが削除されるという注記を追加
* [サムネイル][tn]エンドポイントから`94x94`オプションを削除
* イベントの[`limit`パラメータ][ge]に注記を追加
* [ユーザーの`login`パラメータ][ue]に注記を追加
* PUT [`user`][ue]エンドポイントにApp Userを追加
* PUT [`user`][ue]エンドポイントに`external_app_user_id`フィールドを追加
* ドキュメント全体で`X-REF-HINTS`の参照すべてを`x-rep-hints`に変更
* Box Signの11個の[イベント][sign]すべてに新しいフィールドを追加

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[Developer Forum][1]に英語でリクエストを投稿してください。

[1]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum

[mq]: g://metadata/queries/create

[shield]: g://events/event-triggers/shield-alert-events/#smart-access

[collab]: e://post-collaborations/#param-can_view_path

[trash]: e://get-folders-id-trash

[folder-lock]: r://folder-lock

[dt]: g://authentication/tokens/developer-tokens

[tn]: e://get-files-id-thumbnail-id

[ge]: e://get-events/#param-limit

[ue]: e://put-users-id/#param-login

[sign]: g://events/event-triggers/sign-events
