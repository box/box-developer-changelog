---
applied_at: "2025-10-23"
applies_to: 
- node
- python
- java
- windows
- ios
- sdks
is_impactful: true
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
---

# Box SDKs major version

Introducing a new major release of Box SDKs that includes two packages — the manually maintained package and the generated package. The coexisting packages provide easier access to the latest Box API features and support gradual migration to the standalone generated package.

<!-- more -->

## Overview

To facilitate this migration process, there are two actively maintained major Box core SDK versions:

* **The latest major version that follows sequential versioning and includes** the manually maintained package and the generated one. This SDK version enables leveraging coexisting packages at the same time, and serves as a transition phase. Support for the consolidated version of each Box core SDK will continue in 2027.
* `v10` that includes **only the generated package**, a consistent version number across all Box SDK artifacts.

## Additional information and migration guides

For additional information on recommended actions and migration guides, visit [Box SDK versioning strategy page][1].

## Where to get support

Should you have any issues or need further guidance, please post a request to our [developer forum][2] or report issues directly in the individual Box SDK repositories on GitHub.

[1]: https://developer.box.com/guides/tooling/sdks/sdk-versioning/
[2]: https://forum.box.com/
