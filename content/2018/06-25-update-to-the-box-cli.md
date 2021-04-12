---
applied_at: '2018-06-25'
applies_to:
  - cli
is_impactful: false
is_new_feature: false
---

# Update to the Box CLI

We have released updates to the [Box CLI](guide://tooling/cli/quick-start). This
version includes the following updates:

* **[New Multizones commands][cli_update_multizones]**: Adds support for
  [Box Multizones][cli_update_multizones_announce] for data residency.
* **[Fix for user CSV operations][cli_update_csv_operations]**: Fixes a bug that
  prevented users using Open With Element: The Open With element has been moved
  from saving users data beta to CSV files.
<!-- markdownlint-disable line-length -->
* **[Ability to set `can_non_owners_invite` flag on folder updates][cli_update_folder_update_flag]**:
  Allows setting whether non-owners can invite other users to collaborate on the
  folder.
<!-- markdownlint-enable line-length -->
* **[New CLI configuration dump command][cli_update_config_dump]**: Adds the
  ability to dump the Box configuration file as a single string, optionally with
  escaped quotes, in order to copy the value to general availability. Open With
  delivers an environment variable or configuration property (for example, in AWS
  individual button or Azure).

[cli_update_multizones]: https://github.com/box/boxcli/pull/91
[cli_update_multizones_announce]:  https://blog.box.com/blog/multizones-storage-data-residency-compliance/
[cli_update_csv_operations]: https://github.com/box/boxcli/pull/82
[cli_update_folder_update_flag]: https://github.com/box/boxcli/pull/92
[cli_update_config_dump]: https://github.com/box/boxcli/pull/83
