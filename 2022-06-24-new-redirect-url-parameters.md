---
applied_at: '2021-06-24'
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
id: 2022-06-24-new-redirect-url-parameters
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2022-06-17-box-cli-v310-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2022/06-24-new-redirect-url-parameters.md
published_at: '2022-06-24'
fullyTranslated: true
---
# Box Sign API supports setting redirect URLs

The [Box Sign API](3) now offers new parameters to set up custom redirect URLs for users who sign or decline a sign request. This way, when integrating your application with Box Sign, you can redirect the signers back to your application or display a custom landing page.

<!-- more -->

## 更新内容

Box Sign API provides optional parameters to pass in the request body of the [Create Sign Request][3] call:

* `redirect_url` that redirects the user to a specific page after signing a request
* `declined_redirect_url` that redirects the user to a specific page after declining a request

You can define redirect URLs globally for all signers and for specific signers only. For details, see the [Create Sign Request][4] guide.

## 開発者向けリソース

Box App Centerでのアプリケーションの作成、またはBoxパートナーへの参加をご希望の場合、詳細については[Box Partner Resources][2]のガイド (英語) を参照してください。

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[開発者向けフォーラム][1]に英語でリクエストを投稿してください。

[1]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum

[2]: https://support.box.com/hc/en-us/sections/360009473734-Box-Partner-Resources

[3]: https://developer.box.com/reference/post-sign-requests/

[4]: https://developer.box.com/guides/box-sign/create-sign-request/
