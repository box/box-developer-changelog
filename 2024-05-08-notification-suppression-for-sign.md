---
applied_at: '2024-05-08'
applies_to:
  - guides
  - api
is_impactful: true
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2024-05-08-notification-suppression-for-sign
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2024-05-02-introducing-box-ai
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2024/05-08-notification-suppression-for-sign.md
published_at: '2024-05-08'
---
# Notification suppression for Box Sign

[Box Sign API][1] allows you to suppress the **default** Box email
notifications sent during the Sign workflow.​​

<!-- more -->


Thanks to this feature, you can turn the default notifications
off to use your own, customized messages and decide on channels
they will be sent through.

## New Box Sign webhooks

Along with the notification suppression feature, we introduce three new [webhooks][2] to enhance the customization options for e-signature workflows:

* `SIGN.REQUEST.SIGNATURE_REQUESTED`
* `SIGN.REQUEST.SIGNER_SIGNED`
* `SIGN.REQUEST.ERROR_FINALIZING`

You can use these webhooks to trigger actions in your own applications or notify your users about events happening in Box Sign.​​

## Where to get support

Should you have any issues or need further guidance, please post a request to our [developer forum][3] for any help needed.

[1]: e://post-sign-requests
[2]: https://developer.box.com/sign/webhooks/
[3]: https://forum.box.com/