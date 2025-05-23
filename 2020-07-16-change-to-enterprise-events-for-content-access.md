---
applied_at: '2020-07-16'
applies_to:
  - api
is_impactful: false
is_new_feature: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2020-07-16-change-to-enterprise-events-for-content-access
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2020-07-17-box-java-sdk-v2490-released
previous_page_id: 2020-07-15-changes-to-metadata-query-api-syntax
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2020/07-16-change-to-enterprise-events-for-content-access.md
published_at: '2020-07-16'
fullyTranslated: true
---
# Change to enterprise events for content access

Starting today, the [enterprise event stream](g://events/enterprise-events/for-enterprise/) will
begin producing new content access events.

A new `CONTENT_ACCESS` event is triggered when a file was accessed by an
authorized user or programmatically by a Box application.

See the [enterprise events](g://events/enterprise-events/for-enterprise/) documentation
for more information on other event types.
