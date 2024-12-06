---
applied_at: '2024-12-05'
applies_to:
  - guides
  - api
is_impactful: true
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2024-06-03-crowdstrike-integration
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2024-06-06-box-cli-v3141-released
previous_page_id: 2024-05-31-box-ui-elements-v2001-beta1-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2024/06-03-crowdstrike-integration.md
published_at: '2024-06-03'
fullyTranslated: true
---
# BoxとCrowdStrikeの統合

CrowdStrikeは、Boxと統合され、エンドポイントのアクティビティを監視するエンドポイント検出ツールです。BoxおよびBoxを利用している組織に接続しているデバイスを監視し、デバイスや接続に関するデータを分析して潜在的な脅威のアクティビティを特定します。

CrowdStrikeとの統合により、企業でトリガーできる[イベントストリームのイベント][1]が追加されます。

<!-- more -->

例えば、CrowdStrike Falconプラットフォームで新しいデバイスが検出されると、`EDR_CROWDSTRIKE_DEVICE_DETECTED`イベントがトリガーされます。すべてのイベントを含むリストは以下のとおりです。

* `EDR_CROWDSTRIKE_DEVICE_DETECTED`
* `EDR_CROWDSTRIKE_NO_BOX_TOOLS`
* `EDR_CROWDSTRIKE_BOX_TOOLS_OUTDATED`
* `EDR_CROWDSTRIKE_DRIVE_OUTDATED`
* `EDR_CROWDSTRIKE_ACCESS_ALLOWED_NO_CROWDSTRIKE_DEVICE`
* `EDR_CROWDSTRIKE_ACCESS_REVOKED`

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[Developer Forum][2]に英語でリクエストを投稿してください。

[1]: g://events/enterprise-events/for-enterprise#event-types

[2]: https://forum.box.com/
