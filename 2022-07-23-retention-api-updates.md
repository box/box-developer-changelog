---
applied_at: '2022-07-23'
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
id: 2022-07-23-retention-api-updates
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2022-07-25-box-cli-v331-released
previous_page_id: 2022-07-19-box-cli-v330-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2022/07-23-retention-api-updates.md
published_at: '2022-07-23'
fullyTranslated: true
---
# Retention policy API improvements

Recent changes to the API for retention policies and retention policy assignments allow you to remove retention policy assignments and specify the retention length and type for your policies.

<!-- more -->

## 更新内容

* Use the new [`DELETE`][1] endpoint to remove an existing retention policy assignment:

```bash
curl -i -X DELETE -L https://api.box.net/2.0/retention_policy_assignments/123456/
    -H 'Authorization: Bearer <ACCESS_TOKEN>' 
```

* Specify the following parameters when [creating][2] or [updating][3] retention policies:

  * `retention_length`: Specifies the duration in days that the retention policy will be active for after being assigned to content.
  * `retention_type`: Specifies if the policy is `modifiable` or `non-modifiable`. This means you can either modify the retention policy in full or in a limited way depending on the need to comply with specific regulatory requirements. 

## 開発者向けリソース

Box App Centerでのアプリケーションの作成、またはBoxパートナーへの参加をご希望の場合、詳細については[Box Partner Resources][4]のガイド (英語) を参照してください。

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[開発者向けフォーラム][5]に英語でリクエストを投稿してください。

[1]: e://delete-retention-policy-assignments-id

[2]: e://post-retention-policies

[3]: e://put-retention-policies-id

[4]: https://support.box.com/hc/en-us/sections/360009473734-Box-Partner-Resources

[5]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum
