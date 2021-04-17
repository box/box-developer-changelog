---
applied_at: '2021-04-15'
applies_to:
  - api
is_impactful: false
is_new_feature: false
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2021-04-15-notice-of-behavior-change-for-item_download-events
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2021-04-16-box-python-sdk-v2120-released
previous_page_id: 2021-04-13-token-exchange-optional-parameter-added
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/04-15-notice-of-behavior-change-for-item_download-events.md
published_at: '2021-04-15'
fullyTranslated: true
---
# 項目ダウンロードイベントの動作変更のお知らせ

本日以降、アプリケーションがBoxの[イベントAPIエンドポイント][event-apis]から項目ダウンロードイベントを使用した場合のこのイベントの動作に対する変更のリリースを開始します。

This change will only affect the `ITEM_DOWNLOAD` [user event][user-events] and will not affect existing [enterprise events][enterprise-events]. The new behavior will not cause downtime within existing applications or require any application changes to prevent uptime disruptions.

<!-- more -->

## 変更の概要

以前の動作では、イベントを使用した場合、ダウンロードされた項目イベントが、コンテンツの所有者およびコンテンツに割り当てられたすべてのコラボレータのイベントタイプ`ITEM_DOWNLOAD`によって表示されました。つまり、2,000人のコラボレータが存在するファイルがダウンロードされた場合、このファイルの所有者に加えて2,000人のコラボレータ全員に、ファイルがダウンロードされたことを示すイベントが作成されます。

新しい動作では、項目のダウンロードに関する通知がコンテンツの所有者に対してのみ作成され、コラボレータに対しては生成されません。これは、コンテンツの所有者としていつ項目がダウンロードされたかを確認できるようにしたままイベントストリームのノイズを低減するのに役立ちます。

## サポートを受けるには

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[開発者向けフォーラム][forum]にリクエストを投稿してください。

[event-apis]: https://developer.box.com/reference/get-events/

[user-events]: https://developer.box.com/guides/events/for-user/#event-types

[enterprise-events]: https://developer.box.com/guides/events/for-enterprise/

[user-access-token]: g://authentication/jwt/user-access-tokens/

[forum]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum
