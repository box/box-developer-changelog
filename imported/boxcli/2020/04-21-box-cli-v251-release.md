---
applied_at: '2020-04-21'
applies_to:
  - cli
is_impactful: false
is_new_feature: true
source_url: 'https://github.com/box/boxcli/releases/tag/v2.5.1'
---

# Box CLI `v2.5.1` release

[CHANGELOG](https://github.com/box/boxcli/blob/master/CHANGELOG.md[#251](https://github.com/box/boxcli/pull/251)-2020-04-14)
- Added `--quiet` flag to suppress any non-error output to stderr ([#167](https://github.com/box/boxcli/pull/167)) [`27045c6`](https://github.com/box/boxcli/commit/27045c6)
- Fixed a bug for the `--restrict-collaboration` flag for `box folders:update` where previously the flag would not restrict the collaborations when passed as true and would restrict collaborations when passed as false ([#175](https://github.com/box/boxcli/pull/175)) [`e6e1120`](https://github.com/box/boxcli/commit/e6e1120)
- Added `box trash:restore` to restore a trashed item and `box trash:get` to get information on a trashed item ([#179](https://github.com/box/boxcli/pull/179)) [`74db947`](https://github.com/box/boxcli/commit/74db947)
- Fixed a bug where flags that can be specified multiple times in a single command could not be passed through the command line for bulk commands ([#183](https://github.com/box/boxcli/pull/183)) [`63db0ac`](https://github.com/box/boxcli/commit/63db0ac)
- **Note**: Skipped version 2.5.0 due to development of new release process

[`v2.4.0...v2.5.1`](https://github.com/box/boxcli/compare/`v2.4.0...v2.5.1`)