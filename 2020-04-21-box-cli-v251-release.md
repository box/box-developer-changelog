---
applied_at: '2020-04-21'
applies_to:
  - cli
is_impactful: false
is_new_feature: true
collapse: true
release_source_url: 'https://github.com/box/boxcli/releases/tag/v2.5.1'
is_index: false
category_id: changelog
subcategory_id: ''
id: 2020-04-21-box-cli-v251-release
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2020-04-21-new-metadata-query-apis-available
previous_page_id: 2020-04-09-java-sdk-v2460-release
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2020/04-21-box-cli-v251-release.md
published_at: '2020-04-21'
fullyTranslated: true
---
# Box CLI `v2.5.1`のリリース

[変更ログ](https://github.com/box/boxcli/blob/master/CHANGELOG.md#251-2020-04-14)

* `stderr`へのエラー以外の出力を抑制する`--quiet`フラグを追加 ([#167](https://github.com/box/boxcli/pull/167)) [`27045c6`](https://github.com/box/boxcli/commit/27045c6)
* `box folders:update`の`--restrict-collaboration`フラグのバグを修正。これまで、このフラグは、trueとして渡された場合にコラボレーションが制限されず、falseとして渡された場合にコラボレーションが制限されていました ([#175](https://github.com/box/boxcli/pull/175)) [`e6e1120`](https://github.com/box/boxcli/commit/e6e1120)
* ごみ箱の項目を復元する`box trash:restore`とごみ箱の項目の情報を取得する`box trash:get`を追加 ([#179](https://github.com/box/boxcli/pull/179)) [`74db947`](https://github.com/box/boxcli/commit/74db947)
* 単一のコマンドで複数回指定できるフラグが一括コマンドのコマンドラインで渡されないバグを修正 ([#183](https://github.com/box/boxcli/pull/183)) [`63db0ac`](https://github.com/box/boxcli/commit/63db0ac)
* **注**: 新しいリリースプロセスの開発のため、バージョン2.5.0はスキップされました

[`v2.4.0...v2.5.1`](https://github.com/box/boxcli/compare/`v2.4.0...v2.5.1`)
