---
applied_at: '2020-09-10'
applies_to:
  - api
is_impactful: false
is_new_feature: true
collapse: false
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2020-09-10-group-api-adds-new-filter-and-permissions
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2020-09-25-search-api-adds-support-for-shared-links
previous_page_id: 2020-08-25-multi-select-metadata-support-in-search-api
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2020/09-10-group-api-adds-new-filter-and-permissions.md
published_at: '2020-09-10'
fullyTranslated: true
---
# グループAPIで新しいフィルタと権限を追加

[`GET /groups`](e://get_groups) APIでは、新しい`filter_term`フィールドを使用して、名前でグループにフィルタをかけられるようになりました。

```curl
curl -i -X GET "https://api.box.com/2.0/groups?filter_term=Engineering" \
     -H "Authorization: Bearer <ACCESS_TOKEN>"
```

さらに、グループのすべてのエンドポイントにより、開発者は、新しい[`permissions`](r://group--full/#param-permissions)フィールドをリクエストできるようになりました。このフィールドには、現在、認証済みユーザーが任意の項目にグループを招待できるかどうかを定義する属性が1つあります。

```curl
curl -i -X GET "https://api.box.com/2.0/groups?field=permissions" \
     -H "Authorization: Bearer <ACCESS_TOKEN>"
```

```json
{
    "total_count": 1,
    "entries": [
        {
            "type": "group",
            "id": "223353242",
            "permissions": {
                "can_invite_as_collaborator": true
            }
        }
    ],
    "limit": 100,
    "offset": 0
}
```

グループの操作方法の詳細については、[`Group API documentation`](e://get_groups)を参照してください。
