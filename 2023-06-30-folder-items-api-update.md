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
---
# Updated sorting of folder items for shared folders

Box Folder API allows you to [retrieve the items in the folder][1] and [sort][2] this list based on the sort parameter.
We have improved way items are sorted for shared folders with the path to the associated folder visible to the collaborators.

Currently, the items for such folders are always sorted by their `type` first, with folders listed before files, and files listed before web links.

## New place to get support

From now on you can ask questions and seek for guidance in our new [Box Developer Community forum][3]. Use this new space to directly speak to the Box Developer Relations team, as well as your peers and other subject matter experts from Box.

[1]: e://get-folders-id-items
[2]: e://get-folders-id-items#param-sort
[3]: https://forum.box.com/