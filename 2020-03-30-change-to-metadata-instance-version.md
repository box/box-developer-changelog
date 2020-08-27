---
applied_at: '2020-03-30'
applies_to:
  - api
is_impactful: true
is_new_feature: false
collapse: true
show_excerpt: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2020-03-30-change-to-metadata-instance-version
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2020-03-30-potential-impactful-changes-to-format-of-metadata-date-fields
previous_page_id: 2020-02-25-windows-net-sdk-v3220-release
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2020/03-30-change-to-metadata-instance-version.md
published_at: '2020-03-30'
---
# メタデータインスタンスのバージョンに対する変更

メタデータインフラストラクチャに対する継続的な改善の一環として、メタデータインスタンスの[`version`](r:/metadata/#param-$version)値に対する小規模な変更をリリースします。

<!-- more -->

これまで、メタデータインスタンスに関連付けられたバージョン番号は、関連付けられたメタデータテンプレートのフィールドが削除された場合または関連付けられたメタデータテンプレートで`enum`フィールドのオプションが削除された場合に増加していました。

今後は、こうした変更により、メタデータインスタンスのバージョン番号が増加することはありません。

バージョン番号の増加は常に暗黙的に行われてきたため、Boxでは、メタデータインスタンスのバージョンから得られる価値はほとんどないと認識しています。そのため、この変更がお客様に影響を及ぼすとは考えておりません。それでも、ご自身が影響を受けていることに気付いた場合は、カスタマーサクセスマネージャまたは当社のサポートチャネルまでお問い合わせください。
