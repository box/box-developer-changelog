---
applied_at: '2023-05-23'
applies_to:
  - sdks
  - node
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-node-sdk/releases/tag/v3.0.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2023-05-23-box-node-sdk-v300-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2023-05-23-box-windows-sdk-v522-released
previous_page_id: 2023-05-16-box-java-sdk-v411-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2023/05-23-box-node-sdk-v300-released.md
published_at: '2023-05-23'
fullyTranslated: true
---
# Box Node SDK `v3.0.0`のリリース

このリリースの最も重要な変更は、**バージョン12未満のNodeのサポートの終了**と**Node 12からNode 16へのサポート環境**の変更です。

### 重大な変更

* `use_index`の使用を削除 ([#812](https://github.com/box/box-node-sdk/pull/812)) ([`d56799a`](https://github.com/box/box-node-sdk/commit/d56799a61f42265d7785f99e92a449c58d125aef))
* 非推奨の`BoxClient.batch()`および`BoxClient.batchExec()`メソッドを削除
* 非推奨の`CollaborationWhitelist`クラスを削除、代わりに`CollaborationAllowlist`を使用
* 非推奨の`CollaborationAllowlist.getWhitelistedDomain()`メソッドを削除、代わりに`CollaborationAllowlist.getAllowlistedDomain()`を使用
* 非推奨の`CollaborationAllowlist.getAllWhitelistedDomains()`メソッドを削除、代わりに`CollaborationAllowlist.getAllAllowlistedDomains()`を使用
* 非推奨の`Files.getThumbnail(fileID: string, options?: Record<string, any>, callback?: Function)`メソッドを削除、代わりに`Files.getRepresentationContent( fileID, representationType, options, callback)`を使用

移行の詳細は[こちら](https://github.com/box/box-node-sdk/blob/v3.0.0/docs/upgrade/2.x.x%20to%203.x.x.md)で確認できます。

### 依存関係のアップグレード

* `jsonwebtoken`を8.5.1から9.0.0に昇格 ([#802](https://github.com/box/box-node-sdk/pull/802)) ([`5b1d4e9`](https://github.com/box/box-node-sdk/pull/828/commits/5b1d4e9ec557c14c1d27695733cc0bcae49061cb))
* `vm2`を3.9.11から3.9.19に昇格 ([#826](https://github.com/box/box-node-sdk/pull/826)) ([`220df76`](https://github.com/box/box-node-sdk/commit/220df765080bc27c91daed51ac46620f6bc8b9ed))
