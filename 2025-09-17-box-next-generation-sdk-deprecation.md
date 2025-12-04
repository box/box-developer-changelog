---
applied_at: '2025-09-17'
applies_to:
  - node
  - python
  - java
  - windows
  - ios
  - sdks
is_impactful: true
is_new_feature: false
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2025-09-17-box-next-generation-sdk-deprecation
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2025-09-17-box-python-sdk-v1000-released
previous_page_id: 2025-09-17-box-java-sdk-v1000-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2025/09-17-box-next-generation-sdk-deprecation.md
published_at: '2025-09-17'
---
# Box Next Generation SDK deprecation

As of September 17, 2025 Box Next Generation SDKs are no longer supported as separate artifacts. Don’t worry, your existing code will continue to work without changes. You can still use your applications based on Box Next Generation SDKs with no impact, but you won't receive new features, updates, or bug fixes.

<!-- more -->

In keeping with industry best practices, we are consolidating the Box Next Generation SDKs and Box core SDKs into a single package for each programming language. This makes migration efforts much easier and allows seamless addition of new capabilities to existing applications still powered by Box core SDKs, which were maintained manually.

All future development, including new features and updates for the Next Generation SDKs, will be delivered through Box core SDKs starting with version `v10`. Currently, `v10` is available as a separate branch.

For more information and migration guides, see the [SDK versioning strategy document][versioning]. Follow the developer changelog for future updates.

## Where to get support

Should you have any issues or need further guidance, please post a request to our [developer forum][2] for any help needed.

[versioning]: https://developer.box.com/guides/tooling/sdks/sdk-versioning
[2]: https://community.box.com/