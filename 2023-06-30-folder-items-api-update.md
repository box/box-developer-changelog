---
applied_at: '2023-06-30'
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
id: 2023-06-30-folder-items-api-update
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2023-06-26-integration-mappings-guide
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2023/06-30-folder-items-api-update.md
published_at: '2023-06-30'
fullyTranslated: true
---
# Updated sorting of folder items for shared folders

Box Folder API allows you to [retrieve the items in the folder][1] and [sort][2] this list based on the sort parameter. We have improved the way items are sorted for shared folders that have the path to the associated folder visible to the collaborators.

Earlier, the items for such folders were sorted by `id` regardless of the sort parameter value. Currently, they are sorted based on the `sort` parameter.

## サポートを受けるための新しい場所

今後は新しい[Box開発者コミュニティフォーラム][3]で質問したり、ガイダンスを受けたりすることができます。この新しいフォーラムを利用すると、Box Developer Relationsチーム、同僚、Boxに関するエキスパートと直接会話できます。

[1]: e://get-folders-id-items

[2]: e://get-folders-id-items#param-sort

[3]: https://forum.box.com/
