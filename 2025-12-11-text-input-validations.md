---
applied_at: '2025-12-11'
applies_to:
  - guides
  - api
is_impactful: true
is_new_feature: true
release_source_url: ''
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2025-12-11-text-input-validations
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2025-12-12-box-windows-sdk-v1040-released
previous_page_id: 2025-12-10-box-python-sdk-v420-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2025/12-11-text-input-validations.md
published_at: '2025-12-11'
fullyTranslated: true
---
# Box Sign: 公開APIおよびテンプレートタグに対応したテキスト入力の検証

Boxでは、公開APIとテンプレートタグの両方に対応するようBox Signのテキスト入力の検証機能を拡張しました。これにより、開発者およびユーザーは、プログラムやテンプレートで検証ルールを適用できるようになるため、企業のワークフローにおける重大な機能のギャップが解消されます。

## 新機能

<!-- more -->

テキスト入力の検証は、以下を通じてサポートされるようになりました。

* **公開API**: Sign APIエンドポイントを使用して、検証ルール付きの署名リクエストを作成する。
* **テンプレートタグ**: 公開API、Doc Gen、Salesforce統合とともに使用するドキュメントテンプレート内で直接、検証ルールを適用する。
* **カスタム正規表現パターン**: あらかじめ定義された検証の種類以外にカスタム検証パターンを定義する。

## これが重要な理由

今回の更新では、主な統合のニーズに対応しています。

* **公開APIの開発者**は、検証ルール (カスタム正規表現など) 付きの署名リクエストをプログラムによって作成できるため、大規模なデータ品質が保証されます。
* **Salesforce統合**のユーザーは、Salesforceと再度同期されるフィールドにテキスト入力の検証ルールを利用できるようになりました。
* **Doc Genのユーザー**は、自動化されたドキュメントワークフロー内でフィールドに検証を適用できます。検証がサポートされているテンプレートタグは、特に統合を介してプログラムによってテンプレートが使用されるワークフローに役立ち、ウェブインターフェースのみで検証が可能だった以前のギャップを解消します。

## APIの更新

以下のエンドポイントでは、テキスト入力の検証がサポートされるようになりました。

* [`POST /sign_requests`][1] — 検証付きの署名リクエストを作成する。
* [`GET /:sign_request_id`][2] — 検証を含む署名リクエストの詳細を取得する。
* [`GET /sign_requests`][3] — 検証の情報を含む署名リクエストのリストを取得する。
* [`GET /:template_id`][4] — 検証ルールを使用してテンプレートを取得する。
* [`GET /sign_templates`][5] — 検証の情報を含むテンプレートのリストを取得する。

## はじめに

テキスト入力の検証を使用するには、以下を実行します。

1. 署名リクエストへの検証の追加について、[署名リクエストの作成エンドポイント][1]を確認します。
2. [テンプレートタグでの検証の適用][6]について、Box Signのドキュメントを確認します。
3. 高度な検証シナリオについて、[カスタム正規表現パターン][7]を調査します。

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[Developer Forum][8]に英語でリクエストを投稿してください。

[1]: e://post-sign-requests

[2]: e://get-sign-requests-id

[3]: e://get-sign-requests

[4]: e://get-sign-templates-id

[5]: e://get-sign-templates

[6]: https://support.box.com/hc/en-us/articles/4404085855251-Creating-templates-using-tags

[7]: https://support.box.com/hc/en-us/articles/42924560611603-Using-Input-Text-Validation

[8]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum
