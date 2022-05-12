---
applied_at: '2021-05-06'
applies_to:
  - api
is_impactful: true
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2022-05-06-new-editable-shared-links-api
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2022-05-06-new-sign-events-payload-field
previous_page_id: 2022-04-28-box-python-sdk-v330-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2022/05-06-new-editable-shared-links-api.md
published_at: '2022-05-06'
fullyTranslated: true
---
# 新しい編集可能な共有リンクAPI

開発者は、APIを使用して共有リンクでファイルを編集可能にできるようになりました。

<!-- more -->

## ドキュメントの更新

* [ファイル][3]、[フォルダ][2]、[ウェブリンク][5]リソースの`permissions`オブジェクトに新しい`can_edit`値を追加
* [`file--full`][4]リソースに新しい`shared_link_permission_options`フィールドを追加
* リファレンスドキュメントに[ウェブリンクの共有リンクセクション][6]を追加
* 共有リンクのガイドドキュメントに[権限に関するページ][7]を追加
* 同じPUTエンドポイントを使用しているため、[共有リンクの更新と追加][8]のガイドページを統合
* 複数の共有リンクページでコードスニペットを更新

## 機能強化の詳細

* ファイルにコラボレータとしてユーザーを設定するのではなく、`shared_link.permissions.can_edit`フィールドを`true`に設定することで編集アクセス権限を付与できます。
* ファイル、フォルダ、ウェブリンクのすべての共有リンクオブジェクトで`can_edit`フィールドが返されます。ただし、ファイルの場合はtrueにしか設定できません。
* この機能は今後の数四半期で弊社のSDKライブラリに追加されます。
* 管理者が編集可能な共有リンクを管理コンソールでオフにした場合、この機能は使用できません。

### cURLの例

```curl
curl -i -X PUT 'https://api.box.com/2.0/files/123456789?fields=shared_link' \
        -H 'Content-Type: application/json' \
        -H 'Authorization: Bearer [ACCESS TOKEN]' \
        -d '{
          "shared_link": {
            "permissions": {
              "can_preview": true,
              "can_download": true,
              "can_edit": true
            }
          }
        }'
```

## サポート情報

問題がある場合やさらにガイドが必要な場合は、必要なサポートについて、Boxの[開発者向けフォーラム][1]に英語でリクエストを投稿してください。

[1]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum

[2]: r://folder--full#param-shared_link-permissions

[3]: r://file--full#param-shared_link-permissions

[4]: r://file--full/#param-shared_link_permission_options

[5]: r://web-link/#param-shared_link-permissions

[6]: e://get-shared-items--web-links

[7]: g://shared-links/permissions

[8]: g://shared-links/create-or-update
