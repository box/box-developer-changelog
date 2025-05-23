---
applied_at: '2022-07-23'
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
id: 2022-07-23-retention-api-updates
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2022-07-25-box-cli-v331-released
previous_page_id: 2022-07-19-box-cli-v330-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2022/07-23-retention-api-updates.md
published_at: '2022-07-23'
fullyTranslated: true
---
# Retention policy API improvements

Recent changes to the API for retention policies and retention policy assignments allow you to remove retention policy assignments and specify the retention length and type for your policies.

<!-- more -->

## Updates

* Use the new [`DELETE`][1] endpoint to remove an existing retention policy assignment:

```bash
curl -i -X DELETE -L https://api.box.net/2.0/retention_policy_assignments/123456/
    -H 'Authorization: Bearer <ACCESS_TOKEN>' 
```

* Specify the following parameters when [creating][2] or [updating][3] retention policies:

  * `retention_length`: Specifies the duration in days that the retention policy will be active for after being assigned to content.
  * `retention_type`: Specifies if the policy is `modifiable` or `non-modifiable`. This means you can either modify the retention policy in full or in a limited way depending on the need to comply with specific regulatory requirements. 

## Developer Resources

Are you interested in creating applications for the Box App Center or becoming a Box Partner? Check out the
[Box Partner Resources][4] guides for more information!

## Where to get support

Should you have any issues or need further guidance, please post a request to
our [developer forum][5] for any help needed.

[1]: e://delete-retention-policy-assignments-id

[2]: e://post-retention-policies

[3]: e://put-retention-policies-id

[4]: https://support.box.com/hc/en-us/sections/360009473734-Box-Partner-Resources

[5]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum
