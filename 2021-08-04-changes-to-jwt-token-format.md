---
applied_at: '2021-06-04'
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
id: 2021-08-04-changes-to-jwt-token-format
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2021-08-06-box-node-sdk-v1380-released
previous_page_id: 2021-08-03-getting-started-guide
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/08-04-changes-to-jwt-token-format.md
published_at: '2021-08-04'
fullyTranslated: true
---
# JWT形式に対して予定されている変更

日本時間2021年8月5日に、インフラストラクチャの継続的なアップグレードの一環として、JSON Web Token (JWT) を使用するサーバー認証を利用しているカスタムアプリケーションに影響を及ぼす可能性がある変更の展開を開始する予定です。

潜在的な影響により、公式の[Box SDK][box-sdks]を使用せず、トークンをデータベースに格納しているユーザーによる追加の確認が必要になります。

影響を受ける可能性があるユーザーとアプリケーション所有者全員に、メールで直接通知済みです。

<!-- more -->

## 変更の概要

今回の変更は、JSON Web Token (JWT) を使用するサーバー認証を利用しているアプリケーションのみに影響を及ぼす可能性があります。トークンは、Boxの[ドキュメント][tokendoc]で説明されているとおり、今後も文字列として返されますが、その形式は長くなり、特殊文字が含まれるようになります。

<!--alex ignore special-->

special characters.

現在返されるトークンの例: `NXWd9KDPVofXQKZJlQjICCWFHEmuOihs`

今回の変更後、トークンは次の形式で返されます。

`1!yxxhRreQCKcEbC_ZfYvPudyLe7Ed36gIQcqqZo2pfaVZyxNBkQjoHk0fgA1iTY3_uwXgif-hg-gne
aUdLRmGCb2He6tyQ_rA8aV-CllTyBbd9Tx-wU6Fnt4Df9XjzBAk8Dj7RYc1Ew_fcY2vfycpCvjwHLgql
jzjEpVIrOpOlK_2AyP5FExzn0x7DtbkaGc6avJU8UMQd_huXoJ7CnXIL_JBzVrW4D32pBLQ2AZIuecOZ
NMIy9T8PdUiZIG6xKEPqYmm21mQHEM0d7dT5foSBtjm65-Ah2tb2MdSGFb1G1O24vz2GmYFgmIe5UOol
qYIGg-0u2xQPC3F76WiNCiU_TP1JDQYi3HKaos807WkRtnBY5Vd-VAbY9DH-Qo3u1EiB0RFr4cht2N7V
B99y-379IEYzCojL2V58dE_pBxpRMv4KcOLVsUfDkbx3uo34H4UzOycI_IWGWrhVJD4M7GeLeD_5Vkmj
fbwYl2CmHdXAKbZKtXTHjzB0CZixZriT_wRUpsN8GTrrxGbx9ukgzJWRJwelGZ_1Yx7vP4Zkx3OfR5Be
-Tso7xdHd9rW0FXsu024U7dMNuQ6kpP1_kJI2Y`. 

この形式はBoxにとって新しい形式ではありません。これは、[トークンのダウンスコープ][downscope]に使用されている形式と同じになります。 

## アプリケーションへの影響の確認

1. \[**管理コンソール**] > \[**アプリ**] タブ > \[**カスタムアプリ**] に移動します。
2. 表示されている各アプリの行で \[**表示**] をクリックします。
3. アプリの詳細ページの一番下までスクロールし、選択されている認証方法を確認します。影響を受けるアプリには、\[**サーバー認証 (JWT使用)**] と表示されます。 

上記で特定された各アプリケーションについて、以下の点を確認する必要があります。 

1. 公式の[Box SDK][box-sdks]が使用されているかどうか。使用されている場合は、何もする必要はありません。常に最新バージョンを使用することをお勧めしますが、互換性に必要となる最小バージョンはありません。

<!--alex ignore special-->

2. 公式のSDKが使用されていない場合は、トークンがデータベースに格納されているかどうか。データベースに格納されている場合は、そのデータベースが新しい長さと特殊文字の両方に対応できるかを確認する必要があります。

## リリース前のテスト

サーバー認証 (JWT使用) を利用してトークンをデータベースに格納するアプリケーションを特定したら、8月5日より前に以下のテストを実行する必要があります。

前述のとおり、トークンの新しい形式は、現在、[トークンのダウンスコープ][downscope]時に使用されています。そのため、影響を確認するには、次の手順を実行してください。

1. アプリケーション用にアクセストークンを生成します。
2. 手順1で生成したトークンを[ダウンスコープ][downscope]します。
3. ダウンスコープされたトークンをデータベースに格納します。

このトークンをデータベースに問題なく格納できる場合は、何もする必要はありません。

<!--alex ignore special-->

このトークンを格納できない場合は、追加の長さと特殊文字をサポートするようデータベースを更新する必要があります。

## サポート情報

ご質問がある場合やさらにガイドが必要な場合は、[jwt-set-rollout@box.com](mailto:jwt-set-rollout@box.com)に英語でお問い合わせください。

[box-sdks]: https://developer.box.com/sdks-and-tools

[tokendoc]: https://developer.box.com/reference/post-oauth2-token/

[downscope]: https://developer.box.com/guides/authentication/access-tokens/downscope
