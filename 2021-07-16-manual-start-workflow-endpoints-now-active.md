---
applied_at: '2021-07-16'
applies_to:
  - api
is_impactful: false
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2021-07-16-manual-start-workflow-endpoints-now-active
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2021-07-16-updated-file-size-limits
previous_page_id: 2021-07-01-notice-of-behavior-change-for-item-open-events
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/07-16-manual-start-workflow-endpoints-now-active.md
published_at: '2021-07-16'
fullyTranslated: true
---
# 手動開始ワークフローの新しいエンドポイント

[Box Relay](https://www.box.com/collaboration/relay-workflow)用に2つのAPIエンドポイントが新しく導入されました。

* フォルダに構成されたワークフローを取得する
* ファイルのワークフロー内で手動開始フローを開始する

<!-- more -->

この新しいエンドポイントでは、ワークフロー内での情報の更新が許可されません。また、POSTエンドポイントで開始できるのは、`trigger_type`が`WORKFLOW_MANUAL_START`のフローのみです。POSTリクエスト本文内には`outcome_parametes`オブジェクト (省略可) があります。開始時に選択内容を承認するようフローが構成されている場合は、その選択内容をパラメータとして送信する必要があります。送信できるすべてのオプションを含むガイドは、まもなく利用できるようになります。

## 機能

このリリースでは、以下の新しいコンテンツと機能が導入されました。

* 新しい[ワークフロー](r://workflow)リソース
* 新しい[GET](e://get_workflows)ワークフローエンドポイント
* 新しい[POST](e://post_workflows_id_start)手動開始ワークフローエンドポイント
