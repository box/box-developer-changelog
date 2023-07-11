---
applied_at: "2023-06-30"
applies_to: 
- api
is_impactful: false
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
---
# Updated sorting of folder items for shared folders

Box Folder API allows you to [retrieve the items in the folder][1] and [sort][2] this list based on the sort parameter. 
We have improved the way items are sorted for shared folders that have the path to the associated folder visible to the collaborators.

Earlier, the items for such folders were sorted by `id` regardless of the sort parameter value.
Currently, they are sorted based on the `sort` parameter.

## New place to get support

From now on you can ask questions and seek for guidance in our new [Box Developer Community forum][3]. Use this new space to directly speak to the Box Developer Relations team, as well as your peers and other subject matter experts from Box.

[1]: e://get-folders-id-items
[2]: e://get-folders-id-items#param-sort
[3]: https://forum.box.com/
