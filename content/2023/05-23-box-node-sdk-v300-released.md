---
applied_at: '2023-05-23'
applies_to:
  - sdks
  - node
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-node-sdk/releases/tag/v3.0.0'
collapse: true
---

# Box Node SDK `v3.0.0` released

The most important change in this release is **dropping support for Node versions below 12** and changing the **support environments from Node 12 to Node 16**.

### Breaking Changes

- Removed `use_index` usage. ([#812](https://github.com/box/box-node-sdk/pull/812)) ([`d56799a`](https://github.com/box/box-node-sdk/commit/d56799a61f42265d7785f99e92a449c58d125aef))
- Removed deprecated `BoxClient.batch()` and `BoxClient.batchExec()` method.
- Removed deprecated `CollaborationWhitelist` class, use `CollaborationAllowlist` instead.
- Removed deprecated `CollaborationAllowlist.getWhitelistedDomain()` method, use `CollaborationAllowlist.getAllowlistedDomain()` instead.
- Removed deprecated `CollaborationAllowlist.getAllWhitelistedDomains()` method, use `CollaborationAllowlist.getAllAllowlistedDomains()` instead.
- Remove deprecated `Files.getThumbnail(fileID: string, options?: Record<string, any>, callback?: Function)` method, use `Files.getRepresentationContent( fileID, representationType, options, callback)` instead.

Migration details can be found [here](https://github.com/box/box-node-sdk/blob/v3.0.0/docs/upgrade/2.x.x%20to%203.x.x.md)

### Dependency Upgrades

- Bumped `jsonwebtoken` from 8.5.1 to 9.0.0. ([#802](https://github.com/box/box-node-sdk/pull/802)) ([`5b1d4e9`](https://github.com/box/box-node-sdk/pull/828/commits/5b1d4e9ec557c14c1d27695733cc0bcae49061cb))
- Bumped `vm2` from 3.9.11 to 3.9.19 ([#826](https://github.com/box/box-node-sdk/pull/826)) ([`220df76`](https://github.com/box/box-node-sdk/commit/220df765080bc27c91daed51ac46620f6bc8b9ed))
