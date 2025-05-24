---
applied_at: '2021-05-10'
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
id: 2021-02-05-box-api-response-header-changes
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2021-02-26-box-cli-v290-released
previous_page_id: 2021-02-01-box-ios-sdk-v430-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/02-05-box-api-response-header-changes.md
published_at: '2021-02-05'
fullyTranslated: true
---
# アプリケーションに影響を及ぼす可能性があるBox APIレスポンスヘッダーの変更

日本時間2021年5月11日に、インフラストラクチャの継続的なアップグレードの一環として、BoxのAPIレスポンスヘッダーが業界のベストプラクティスとAPIドキュメントに従って標準化され、常に小文字で返されるようになります。

この変更は、以下の影響を及ぼす可能性があります。

* [Salesforce SDK `v1`][salesforce-sdk-v1]のユーザーは、影響を受けるため、最新のSDKバージョンにアップグレードする必要があります。アップグレードしなかった場合、2021年5月10日を過ぎると、Box Salesforce統合は機能しなくなります。
* Box APIのユーザーで、[Box SDK][box-sdks]のいずれも使用していない場合は影響を受ける可能性があるため、コード全体でヘッダーの使用状況を確認する必要があります。ヘッダーの使用状況によっては、調整しないと、Box API統合で中断が生じる可能性があります。

影響を受ける可能性があるユーザーとアプリケーション管理者全員に、メールで直接通知済みです。

<!-- more -->

## 変更の概要

上記のリターンヘッダー (`location`や`retry-after`など) を使用しているアプリケーションでは、そのアプリケーションが大文字小文字を区別せずにこれらのヘッダーをチェックしているかを確認することが必要になります。この1年間で、Boxは自社のネットワークおよび可観測性のインフラストラクチャをアップグレードしてきました。このようなアップグレードでは、お客様のためにBoxの製品の信頼性と利用可能性の向上を目標としています。この具体的な変更により、Boxは、更新されたサービスプロキシを展開できるようになるため、サービストラフィックの監視強化、問題点の迅速な特定、アプリケーションパフォーマンスのチューニングを実現できます。

## APIをご利用の場合: アプリケーションへの影響の確認

使用するアプリケーションが影響を受けるかどうかを確認するには、コードのレビューが必要になります。Box公式SDKのいずれかをBox APIへの接続だけに使用している場合は影響を受けません。SDKでは、大文字小文字を区別せずにレスポンスヘッダーが処理されるためです。

影響を受けているかどうかを確認するには、以下の手順に従います。

* Box APIリクエストからのレスポンスを処理するアプリケーションコードを特定します。これらのレスポンスからレスポンスヘッダーを抽出しなければ、影響を受けることはありません。
* このようなレスポンスヘッダーを抽出する場合、ヘッダーの大文字小文字を区別する必要があると、影響を受ける可能性があります。 

たとえば、`Location`ヘッダーの先頭が大文字`L`で返されること (つまり、特定の文字による文字列の直接比較) を想定している場合は、変更後に中断されないようにコードを修正する必要があります。

## APIをご利用の場合: 変更方法

影響を受けるアプリケーションを更新するには、これらのレスポンスヘッダーを確認する際に大文字小文字を区別しないようにしてください。具体的には、ヘッダー (`Location`など) が送信される際に先頭が大文字`L`でも小文字`l`でも同様に処理されるよう、慎重にコードを作成する必要があります。たとえば、このプロセスを処理するための2つの方法として、確認する前にすべてのヘッダーを強制的に小文字にするか、大文字小文字を区別しない正規表現による文字列チェックを使用することができます。

## Salesforce SDK `v1`をご利用の場合: アプリケーションへの影響の確認

Box Salesforce SDKの`v1.0`を使用しているかどうかわからない場合は、アプリケーションコード内で、Box Salesforce SDKを格納している場所に移動し、以下の手順を実行します。

次のSalesforce SDKファイルを読み込む: `src/classes/BoxApiRequest.cls`

以下の行 ([6～7行目][salesforce-code]) を探す。

```apex
public final static String HEADER_LOCATION_LOWER_CASE = 'location';
public final static String HEADER_LOCATION_CAPITALIZED = 'Location';
```

上記の行が存在する場合は、使用しているSalesforce SDKは`v1.1.0`以降です。この場合は影響を受けず、変更も必要ありません。上記の行が存在しない場合、使用しているSalesforce SDKは`v1.0`です。この場合は影響を受けるため、更新する必要があります。

## Salesforce SDK `v1`をご利用の場合: 変更方法

影響を受けるアプリケーションを更新するには、使用しているSalesforce SDKのバージョンを更新する必要があります。[最新バージョン][salesforce-sdk]のSDKへのアップグレードをお勧めしますが、アプリケーションに影響がないようにするには、[`v1.1.0`以降][salesforce-sdk-releases]であればどれでも十分です。

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxサポートチームに[チケットを申請][support]するか、Boxの[Developer Forum][forum]に英語でリクエストを投稿してください。

[salesforce-sdk-v1]: https://github.com/box/box-salesforce-sdk/releases/tag/1.0.0

[salesforce-sdk]: https://github.com/box/box-salesforce-sdk

[salesforce-sdk-releases]: https://github.com/box/box-salesforce-sdk/releases

[salesforce-code]: https://github.com/box/box-salesforce-sdk/compare/1.0.0...v1.1.0#diff-1855f83ffd4977e5b9e4bfc167154f2e11b0161fd6c380502c48082b6837b0af

[box-sdks]: https://developer.box.com/sdks-and-tools/

[support]: https://support.box.com/hc/en-us/requests/new

[forum]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum
