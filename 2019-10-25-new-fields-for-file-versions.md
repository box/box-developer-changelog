---
applied_at: '2019-10-25'
applies_to:
  - api
is_impactful: false
is_new_feature: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2019-10-25-new-fields-for-file-versions
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2019-10-25-new-parameters-for-search-api
previous_page_id: 2019-10-24-python-sdk-v261-release
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2019/10-25-new-fields-for-file-versions.md
published_at: '2019-10-25'
fullyTranslated: true
---
# ファイルバージョンに新しいフィールドを追加

ファイルバージョンオブジェクト内で、新しいオプションフィールドである`trashed_by`、`restored_by`、および`restored_at`が使用可能になりました。

このフィールドは、標準の[ファイルバージョンオブジェクト](endpoint://resources/file-version/)の一部として返されます。

このフィールドの目的は、いつ、誰がファイルバージョンをごみ箱に移動したり、ごみ箱から出したりしたかを把握しやすくすることです。
