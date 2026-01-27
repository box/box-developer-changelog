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
previous_page_id: ''
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2026/01-05-box-ui-elements-v2600-released.md
published_at: '2026-01-05'
---
# Box UI Elements `v26.0.0` released

# [26.0.0][1] (2026-01-05)

### Features

* **react-tether:** BREAKING CHANGE Bump BUIE to React 19 ([#4278][2]) ([`02bc171`][3])

### BREAKING CHANGES

* **react-tether:** React 17 is no longer supported. This package now
requires React 18 or 19. react-tether has been upgraded to v3, so
components using react-tether may affect some layouts.

* fix: update `.flowconfig` to take `.cjs`

* fix: Replace `Checkbox`, `InfoIcon`, and `FooterIndicator` tooltips with BP

* fix: Use `createRoot` instead of `ReactDOM` render

* fix: Respond to feedback

* fix: Round 2

* fix: flow tests for `SidebarNavButton`

* fix: legacy comment styling

[1]: https://github.com/box/box-ui-elements/compare/v25.5.0...v26.0.0

[2]: https://github.com/box/box-ui-elements/issues/4278

[3]: https://github.com/box/box-ui-elements/commit/02bc1710bc41513e0faf57adca19e6c6c1317b7d