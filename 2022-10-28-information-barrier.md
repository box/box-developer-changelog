---
applied_at: '2022-10-28'
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
id: 2022-10-28-information-barrier
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2022-11-02-box-cli-v350-released
previous_page_id: 2022-10-28-box-node-sdk-v271-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2022/10-28-information-barrier.md
published_at: '2022-10-28'
fullyTranslated: true
---
# Shield情報バリアの導入

情報バリアは、利益相反や潜在的な法的問題につながる可能性のあるコミュニケーションを防止します。たとえば、管理者は情報バリアを使用して、異なるプロジェクトで作業するチームを分け、特定のグループに制限されたコンテンツでのコラボレーションを防ぐことができます。

<!-- more -->

## Shield情報バリアAPI

Shield情報バリアでは、以下の処理が可能な新しいAPIを利用できます:

* [Shield情報バリア][2]の作成、管理、リストの取得
* [Shield情報バリアのセグメント][3]の作成、更新、削除、リストの取得
* [Shield情報バリアのセグメント制限][4]の作成、削除、リストの取得
* [Shield情報バリアのセグメントメンバー][5]の作成、削除、リストの取得
* [Shield情報バリアレポート][6]の作成とリストの取得

## Shield情報バリアイベント

情報バリアを設定すると、以下のイベントが作成されます:

* バリアのアクティブ化または非アクティブ化など、ユーザーが情報バリアを構成したときにトリガーされるイベント。
* 制限されたフォルダへの項目の移動や、制限されたグループへのユーザーの追加など、制限されたアクションをユーザーが実行したときにトリガーされるイベント。

すべてのイベントのリストについては、[Shield情報バリアイベントトリガー][7]リファレンスを参照してください。

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[開発者向けフォーラム][1]に英語でリクエストを投稿してください。

[1]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum

[2]: r://shield-information-barrier

[3]: r://shield-information-barrier-segment

[4]: r://shield-information-barrier-segment-restriction

[5]: r://shield-information-barrier-segment-member

[6]: r://shield-information-barrier-report

[7]: g://events/event-triggers/shield-information-barrier-events
