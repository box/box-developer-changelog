---
applied_at: '2020-04-01'
applies_to:
  - node
  - sdks
is_impactful: false
is_new_feature: true
source_url: 'https://github.com/box/box-node-sdk/releases/tag/v1.32.0'
---
# Node SDK `v1.32.0` release

- Temporarily removed Node 4 and Node 5 builds from Travis, due to tests not passing.  Will investigate, going forward ([#495](https://github.com/box/box-node-sdk/pull/495)). [`dc558e9`](https://github.com/box/box-node-sdk/commit/dc558e9)
- Fixed an issue where an error is thrown during a retry when a response is not returned by the previous call  ([#477](https://github.com/box/box-node-sdk/pull/477)). [`f1b3449`](https://github.com/box/box-node-sdk/commit/f1b3449)
- Added the ability to [query](./docs/metadata.md#query) Box items based on their metadata ([#487](https://github.com/box/box-node-sdk/pull/487)). [`6f08931`](https://github.com/box/box-node-sdk/commit/6f08931)

[`v1.31.0...v1.32.0`](https://github.com/box/box-node-sdk/compare/`v1.31.0...v1.32.0`)