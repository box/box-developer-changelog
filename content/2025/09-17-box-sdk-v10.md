---
applied_at: "2025-09-17"
applies_to: 
- node
- python
- java
- windows
- ios
- android
- sdks
is_impactful: true
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
---

# Box SDK `v10`

Introducing Box SDK `v10`, a major release designed to elevate your developer experience and streamline integration with Box Content Cloud. Currently available as a separate branch for each SDK, `v10` will ultimately become the main branch.

What's new in `v10`:

* Full API Support — Complete coverage of the Box API ecosystem, giving you access to all the latest features and functionalities to build feature-rich applications.
* Rapid API Updates — Our new auto-generation approach enables Box API additions within days, ensuring you can leverage the most up-to-date features without delay.
* Embedded Documentation — All objects and parameters are documented directly in the SDK source code, keeping essential information in one place.
* Enhanced Convenience Methods — New methods for authentication, chunk uploads, automatic retries, retry strategy, and more.

This version includes the Box Next Generation SDK artifact, previously developed in parallel to core Box SDKs. To facilitate migration and provide access to the newest features, we'll soon release an additional major version containing both artifacts.
No immediate action required — If you're using the current SDK version, your existing code will continue to work without changes. However, migrating to `v10` includes breaking changes. For more information and migration guides, see the [SDK versioning strategy document][versioning]. Follow developer change log for future updates.

[versioning]: https://developer.box.com/guides/tooling/sdks/sdk-versioning