---
applied_at: '2021-03-25'
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
id: 2021-03-25-service-account-information-in-developer-console
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2021-04-01-box-java-sdk-v2540-released
previous_page_id: 2021-03-25-new-metadata-query-indicies-endpoint
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/03-25-service-account-information-in-developer-console.md
published_at: '2021-03-25'
---
# Service Account email added to Developer Console

Upon Admin authorization of an application leveraging server authentication,
the auto-generated email address of the Service Account is now surfaced in the
General tab of the Developer Console. This email address can then be used to
collaborate the user on Box content. The format will always be
`AutomationUser_AppServiceID_RandomString@boxdevedition.com`. For example,
`AutomationUser_123456_6jCo6Pqwo@boxdevedition.com`.

To learn more, see our guide on [User Types][ut] and [Service Accounts][sa].

## Features

* Added auto-generated email address of Service Account user to Developer
Console

[ut]: pages/platform/user-types
[sa]: pages/platform/user-types#service_account