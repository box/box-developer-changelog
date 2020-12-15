---
applied_at: '2018-03-13'
applies_to:
  - sdks
  - ui-elements
is_impactful: true
is_new_feature: false
is_index: false
category_id: changelog
subcategory_id: ''
id: 2018-03-13-update-to-box-annotations
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2018-03-15-windows-net-sdk-v351-release
previous_page_id: 2018-03-12-java-sdk-v2150-release
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2018/03-13-update-to-box-annotations.md
published_at: '2018-03-13'
---
# Update to Box Annotations

Due to performance issues reported by some users, the update has been rolled
back to prevent critical business applications from getting impacted. Drawing
Annotations and Point Annotations mode features have now been turned off. We do
not have an ETA for performance fixes or when these features will be
re-enabled. We sincerely apologize for the inconvenience.

Users who used the Drawing Annotations capability while it was available will
still be able to access their annotations once the feature Edit. Documentation
is re-enabled. Until then, the said annotations will be stored in our
application data store but won’t be exposed via the viewers.