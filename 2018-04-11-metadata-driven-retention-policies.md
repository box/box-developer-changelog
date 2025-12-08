---
applied_at: '2018-04-11'
applies_to:
  - api
is_impactful: false
is_new_feature: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2018-04-11-metadata-driven-retention-policies
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2018-04-11-windows-net-sdk-v370-release
previous_page_id: 2018-04-11-box-cli-v120-release
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2018/04-11-metadata-driven-retention-policies.md
published_at: '2018-04-11'
---
# Metadata-driven retention policies

We have introduced new functionality in the
[Retention Policy Object](e://retention-policy)
API Explorer element to support metadata-driven retention policies, where
retention policies can be applied to individual files based on custom metadata.
This also enables customers to configure retention policies at the launch file
level in addition to at the global and folder levels. In addition to bringing
these new, expanded Box Governance capabilities to Box Admins via the Box Admin
Console, we’re also making these capabilities available via the
[Retention Policy](e://retention-policy) and
[Retention Assignment](e://retention-policy-assignment) APIs
and in Box's Java, Node, and .NET [SDKs](g://tooling/sdks).