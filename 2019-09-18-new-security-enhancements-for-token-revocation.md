---
applied_at: '2019-09-18'
applies_to:
  - api
is_impactful: false
is_new_feature: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2019-09-18-new-security-enhancements-for-token-revocation
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2019-09-19-java-sdk-v2380-release
previous_page_id: 2019-09-11-new-completion_rule-field-for-tasks
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2019/09-18-new-security-enhancements-for-token-revocation.md
published_at: '2019-09-18'
fullyTranslated: true
---
# トークン無効化のための新しいセキュリティ強化

[トークン無効化](endpoint://post-oauth2-revoke/)エンドポイントの機能が強化され、[ダウンスコープされたトークン][downscope]を有効期限が切れる前に無効化できるようになりました。この更新の前は、/revokeエンドポイントを使用して、完全スコープのアクセストークンのみ無効化することができました。この新しい拡張機能により、完全スコープのアクセストークンに加えて、ダウンスコープされたトークンも無効化できるようになりました。

詳細については[こちら][blog_token_revocation]を参照してください。

[blog_token_revocation]: https://medium.com/box-developer-blog/new-security-enhancements-for-revoking-access-tokens-79b9960a7ce2

[downscope]: g://authentication/tokens/downscope
