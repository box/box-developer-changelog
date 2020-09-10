---
applied_at: '2020-07-07'
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
next_page_id: 2020-09-28-new-file-request-apis-available
previous_page_id: 2020-08-25-multi-select-metadata-support-in-search-api
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2020/09-10-group-api-adds-new-filter-and-permissions.md
published_at: '2020-09-10'
---
# Group API adds new filter and permissions

The [`GET /groups`](e://get_groups) API now supports
filtering groups by name using a new `filter_name` field.

```curl
curl -i -X GET "https://api.box.com/2.0/groups?filter_name=Engineering" \
     -H "Authorization: Bearer <ACCESS_TOKEN>"
```

Additionally, all the Group endpoints now allow a developer to request
a new
[`permissions`](r://group--full/#param-permissions)
field, which currently has one attribute defining
if the authenticated user can invite the group to any item.

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

For more details about how to work with groups, please visit the
[`Group API documentation`](e://get_groups).