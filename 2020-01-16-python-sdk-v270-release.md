---
applied_at: '2020-01-16'
applies_to:
  - python
  - sdks
is_impactful: false
is_new_feature: true
collapse: true
release_source_url: 'https://github.com/box/box-python-sdk/releases/tag/v2.7.0'
is_index: false
category_id: changelog
subcategory_id: ''
id: 2020-01-16-python-sdk-v270-release
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2020-01-20-refreshed-postman-collection-quick-start
previous_page_id: ''
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2020/01-16-python-sdk-v270-release.md
published_at: '2020-01-16'
fullyTranslated: true
---
# Python SDK `v2.7.0`のリリース

* 省略可能な`event_types`パラメータの省略時にエラーが発生する`get_admin_events`関数のバグが修正されました。
* ユーザーのリスト取得にマーカーベースのページネーションが追加されました。
* 新しいファイルや既存ファイルの新バージョンをアップロードするときにより多くの属性パラメータがサポートされるようになりました。
* アクセラレータURLの事前チェックとルックアップがアップロードの単一のリクエストに統合されました。
* JWTの再試行ロジックが修正され、再試行ごとに新しいJTIクレームが生成されるようになりました。
* JWT認証リクエストが誤ったエラーコードを返すバグが修正されました。
* 再試行ロジックが修正され、APIからRetry-Afterヘッダーが返された場合、SDKは再試行の前にヘッダーで指定された時間待機するようになりました。
