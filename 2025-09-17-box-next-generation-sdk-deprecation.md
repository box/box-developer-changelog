---
applied_at: '2025-09-17'
applies_to:
  - node
  - python
  - java
  - windows
  - ios
  - sdks
is_impactful: true
is_new_feature: false
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2025-09-17-box-next-generation-sdk-deprecation
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2025-09-17-box-node-sdk-v1000-released
previous_page_id: 2025-09-17-box-java-sdk-v1000-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2025/09-17-box-next-generation-sdk-deprecation.md
published_at: '2025-09-17'
fullyTranslated: true
---
# Boxの次世代SDKの公式サポート終了

日本時間2025年9月18日をもって、Boxの次世代SDKは、個別のアーティファクトとしてサポートされなくなりました。既存のコードは、変更しなくても引き続き動作します。Boxの次世代SDKをベースにしたアプリケーションは影響なく引き続きご利用いただけますが、新機能、更新、バグ修正は提供されなくなります。

<!-- more -->

Boxでは、業界のベストプラクティスに従って、プログラミング言語ごとにBoxの次世代SDKとBoxコアSDKを1つのパッケージに統合します。これにより、移行作業がさらに容易になり、手動で管理されていたBoxコアSDKを引き続き使用している既存のアプリケーションに新機能をシームレスに追加できるようになります。

次世代SDK向けの新機能や更新を含む、今後の開発はすべて、`v10`以降のBoxコアSDKを通じて提供されます。現在、`v10`は個別のブランチとして提供されています。

詳細や移行ガイドについては、[SDKのバージョン戦略に関するドキュメント][versioning]を参照してください。今後の更新については、開発者向け変更ログをフォローしてください。

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[Developer Forum][2]に英語でリクエストを投稿してください。

[versioning]: g://tooling/sdks/sdk-versioning

[2]: https://community.box.com/
