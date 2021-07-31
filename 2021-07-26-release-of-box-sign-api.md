---
applied_at: '2021-07-26'
applies_to:
  - api
  - java
is_impactful: false
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2021-07-26-release-of-box-sign-api
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2021-07-30-box-java-sdk-v2551-released
previous_page_id: 2021-07-26-box-java-sdk-v2550-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/07-26-release-of-box-sign-api.md
published_at: '2021-07-26'
fullyTranslated: true
---
# Box Sign APIのリリース

日本時間2021年7月27日に、Box Signをリリースしました。Box Signのリクエストの作成、リスト取得、再送信、キャンセルを実行する最新のAPIエンドポイントを使用することで、[Box Signウェブアプリ][webapp]の全機能をプログラムによって利用できます。

Box SignのAPIエンドポイントを使用するために管理者がBox Signを有効にする必要はありませんが、Box Signを企業に導入する必要があります。Box SignがBoxインスタンスで利用できるようになると、管理者に通知されます。

<!-- more -->

少なくとも、Box Signのリクエストを作成するには、署名用ファイルのほか、署名済みファイル/[署名履歴][log]の保存先フォルダを選択し、署名者を指定する必要があります。現時点では、1つのリクエストにつき署名できるファイルは1つだけです。

```curl
curl -i -X PUT "https://api.box.com/2.0/sign_requests" \
     -H "Authorization: Bearer <ACCESS_TOKEN>" \
     -d '{
       "signers": [
          {    
            "role": "signer",
            "email": "example_email@box.com"
          }
        ],
       "source_files": [
          {
            "type": "file",
            "id": "123456789"
          }
       ],
       "parent_folder": 
          {
            "type": "folder",
            "id": "0987654321"
          }
     }'
```

## 機能

* Box Signのリクエストを**作成する**エンドポイントを追加: [ガイド][c] \| [APIリファレンス][c_ref]
* Box Signのリクエストの**リストを取得する**エンドポイントを追加: [ガイド][l] \| [APIリファレンス][l_ref]
* IDを指定してBox Signのリクエストを**取得する**エンドポイントを追加: [ガイド][g] \| [APIリファレンス][g_ref]
* Box Signのリクエストを**再送信する**エンドポイントを追加: [ガイド][r] \| [APIリファレンス][r_ref]
* Box Signのリクエストを**キャンセルする**エンドポイントを追加: [ガイド][ca] \| [APIリファレンス][ca_ref]
* Java SDKのサポート: [GitHub][gh]

[webapp]: https://support.box.com/hc/en-us/articles/4404086827411-Introducing-Box-Sign

[log]: https://support.box.com/hc/en-us/articles/4404095202579-Viewing-the-signing-log

[c]: g://box-sign/create-sign-request

[c_ref]: e:///post-sign-requests

[l]: g://box-sign/list-sign-requests/#all

[l_ref]: e://get-sign-requests

[g]: g://box-sign/list-sign-requests/#by-id

[g_ref]: e://get-sign-requests-id

[r]: g://box-sign/resend-sign-request

[r_ref]: e://post-sign-requests-id-resend

[ca]: g://box-sign/cancel-sign-request

[ca_ref]: e://post-sign-requests-id-cancel

[gh]: https://github.com/box/box-java-sdk/blob/main/doc/sign_requests.md
