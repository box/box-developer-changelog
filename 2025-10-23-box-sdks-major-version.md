---
applied_at: '2025-10-23'
applies_to:
  - node
  - python
  - java
  - windows
  - ios
  - sdks
is_impactful: true
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2025-10-23-box-sdks-major-version
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2025-10-23-box-windows-sdk-v600-released
previous_page_id: 2025-10-23-box-python-sdk-v400-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2025/10-23-box-sdks-major-version.md
published_at: '2025-10-23'
fullyTranslated: true
---
# Box SDKのメジャーバージョン

2つのパッケージ (手動で管理されているパッケージと生成されたパッケージ) を含むBox SDKの新しいメジャーリリースを導入しました。共存するこれらのパッケージにより、最新のBox APIの機能をより簡単に使用できるようになるほか、生成されたスタンドアロンのパッケージへの段階的な移行がサポートされます。

<!-- more -->

## 概要

この移行プロセスを容易にするために、積極的に管理されているBoxコアSDKのメジャーバージョンが2つあります。

* 手動で管理されているパッケージと生成されたパッケージを含む、**シーケンシャルなバージョン管理に従っている最新のメジャーバージョン**。このSDKバージョンは、共存するパッケージを同時に利用できるようにするほか、移行フェーズとして機能します。各BoxコアSDKの統合バージョンのサポートは2027年も継続されます。
* **生成されたパッケージのみ**を含む`v10`。これは、Box SDKのすべてのアーティファクトで一貫したバージョン番号です。

## 詳細と移行ガイド

推奨される操作と移行ガイドの詳細については、[Box SDKのバージョン戦略ページ][1]を参照してください。

## サポート情報

本件に関するご質問は、[Developer Forum][2]に英語でリクエストを投稿していただくか、GitHubの個々のBox SDKリポジトリで直接問題をご報告ください。

[1]: g://tooling/sdks/sdk-versioning/

[2]: https://forum.box.com/
