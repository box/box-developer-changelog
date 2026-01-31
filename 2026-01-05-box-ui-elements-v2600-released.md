---
applied_at: '2026-01-05'
applies_to:
  - frontend
  - ui-elements
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-ui-elements/releases/tag/v26.0.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2026-01-05-box-ui-elements-v2600-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2026-01-15-box-ui-elements-v2610-released
previous_page_id: 2026-01-05-box-ui-elements-v2550-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2026/01-05-box-ui-elements-v2600-released.md
published_at: '2026-01-05'
fullyTranslated: true
---
# Box UI Elements `v26.0.0`のリリース

# [26.0.0][1] (2026-01-05)

### 機能

* **react-tether:** 重大な変更: BUIEをReact 19に昇格 ([#4278][2]) ([`02bc171`][3])

### 重大な変更

* **react-tether:** React 17はサポートされなくなりました。このパッケージにはReact 18または19が必要です。react-tetherはv3にアップグレードされたため、react-tetherを使用するコンポーネントでは一部のレイアウトに影響がある可能性があります。

* 修正: `.cjs`に対応するように`.flowconfig`を更新

* 修正: `Checkbox`、`InfoIcon`、`FooterIndicator`ツールチップをBPに置き換え

* 修正: `ReactDOM` renderの代わりに`createRoot`を使用

* 修正: フィードバックへの応答

* 修正: ラウンド2

* 修正: `SidebarNavButton`のフローテスト

* 修正: 従来のコメントスタイル

[1]: https://github.com/box/box-ui-elements/compare/v25.5.0...v26.0.0

[2]: https://github.com/box/box-ui-elements/issues/4278

[3]: https://github.com/box/box-ui-elements/commit/02bc1710bc41513e0faf57adca19e6c6c1317b7d
