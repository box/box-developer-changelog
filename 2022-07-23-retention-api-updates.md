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
# リテンションポリシーAPIの改善

最近のリテンションポリシーのAPIとリテンションポリシー割り当てに関する変更により、リテンションポリシー割り当てを削除し、ポリシーのリテンション期間と種類を指定することができるようになりました。

<!-- more -->

## 更新内容

* 新しい[`DELETE`][1]エンドポイントを使用して既存のリテンションポリシー割り当てを削除します:

```bash
curl -i -X DELETE -L https://api.box.net/2.0/retention_policy_assignments/123456/
    -H 'Authorization: Bearer <ACCESS_TOKEN>' 
```

* リテンションポリシーを[作成][2]または[更新][3]する場合は、次のパラメータを指定します:

  * `retention_length`: リテンションポリシーをコンテンツに割り当てた後にアクティブにする期間を日数で指定します。
  * `retention_type`: ポリシーが`modifiable`または`non-modifiable`であるかを指定します。これは、特定の規制要件に準拠する必要があるかどうかに応じて、リテンションポリシーを全面的に変更可能にするか、限定的に変更可能にするかのいずれかを選択できることを意味します。 

## 開発者向けリソース

Box App Centerでのアプリケーションの作成、またはBoxパートナーへの参加をご希望の場合、詳細については[Box Partner Resources][4]のガイド (英語) を参照してください。

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[Developer Forum][5]に英語でリクエストを投稿してください。

[1]: e://delete-retention-policy-assignments-id

[2]: e://post-retention-policies

[3]: e://put-retention-policies-id

[4]: https://support.box.com/hc/en-us/sections/360009473734-Box-Partner-Resources

[5]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum
