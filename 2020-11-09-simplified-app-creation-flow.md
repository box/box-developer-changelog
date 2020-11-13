---
applied_at: '2020-11-09'
applies_to:
  - api
is_impactful: false
is_new_feature: false
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2020-11-09-simplified-app-creation-flow
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2020-11-13-box-java-sdk-v2511-released
previous_page_id: 2020-11-04-box-cli-v270-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2020/11-09-simplified-app-creation-flow.md
published_at: '2020-11-09'
---
# Simplified App Creation Flow

A new, simplified app creation flow is now available in the Box
[Developer Console](https://app.box.com/developers/console). The three
types of applications are Custom Apps, Limited Access Apps, and Box Custom
Skills.

We added plain language to describe exactly when to select each
app type and links to relevant documentation if you require additional
information to help with your selection. The application type you select impacts
which authentication methods are available.

Most notably, is our new app type, Limited Access Apps. Select this app type if
you'd like to leverage [Box View](g://embed/box-view/) or Box's preview services
within another application. This app type only provides access to
[app token authentication](g://authentication/app-token/), which has
[restricted API capabilities](g://authentication/app-token/endpoints/).
For full details, please visit our [guide](g://applications/select/) on
selecting an app type.