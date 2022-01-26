---
applied_at: '2021-08-31'
applies_to:
  - sdks
  - java
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/box-java-sdk/releases/tag/v2.56.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2021-08-31-box-java-sdk-v2560-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2021-08-31-notice-of-behavior-change-for-item-preview-events
previous_page_id: 2021-08-30-box-node-sdk-v1390-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/08-31-box-java-sdk-v2560-released.md
published_at: '2021-08-31'
fullyTranslated: true
---
# Box Java SDK `v2.56.0`のリリース

**新機能と機能強化:**

* `submaster` `GroupMembershipRole`を`coadmin`に置き換え、`MASTER_INVITE_ACCEPT`および`MASTER_INVITE_REJECT`を`ADMIN_INVITE_ACCEPT`および`ADMIN_INVITE_REJECT`に置き換え ([#907][1])
* ユーザーの作成API呼び出しに`tracking_codes`を追加 ([#910][2])

**バグ修正:**

* `BoxFileRequest.Info`オブジェクトの`url`を修正 ([#906][3])
* アクセストークンの更新時に発生するスレッドロックの問題の修正を試行 ([#912][4])

[1]: https://github.com/box/box-java-sdk/pull/907

[2]: https://github.com/box/box-java-sdk/pull/910

[3]: https://github.com/box/box-java-sdk/pull/906

[4]: https://github.com/box/box-java-sdk/pull/912
