---
applied_at: '2018-08-16'
applies_to:
  - salesforce
  - sdks
is_impactful: false
is_new_feature: false
is_index: false
category_id: changelog
subcategory_id: ''
id: 2018-08-16-generic-method-added-to-the-salesforce-sdk
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2018-08-17-box-user_id-field-size-changed
previous_page_id: 2018-08-09-java-sdk-v2220-release
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2018/08-16-generic-method-added-to-the-salesforce-sdk.md
published_at: '2018-08-16'
fullyTranslated: true
---
# Salesforce SDKに汎用メソッドを追加

Box for Salesforce Developer Toolkitは、パラメータとして[`HttpRequest`][salesforce_sdk_httprequest]オブジェクトを受け取り、[`HttpResponse`][salesforce_sdk_httpresponse]オブジェクトを返すグローバルメソッド`sendRequest`を提供するようになりました。このメソッドは、サービスアカウントの認証の詳細を使用してBoxのAPIを呼び出すため、統合のビジネスロジックの組み込みに集中することができます。追加されたメソッドの詳細については、Salesforce Developer ToolkitドキュメントのBoxメタデータサイドバーの[メソッドの詳細](guide://tooling/sdks/salesforce)および[サンプルコード](guide://tooling/sdks/salesforce)を参照してください。

[salesforce_sdk_httprequest]: https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_restful_http_httprequest.htm

[salesforce_sdk_httpresponse]: https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_restful_http_httpresponse.htm#apex_classes_restful_http_httpresponse
