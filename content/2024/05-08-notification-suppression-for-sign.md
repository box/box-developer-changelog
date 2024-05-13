---
applied_at: "2024-05-08"
applies_to:
  - guides
  - api
is_impactful: true
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ""
---

# Notification suppression for Box Sign

[Box Sign API][1] allows you to suppress the **default** Box email
notifications sent during the Box Sign workflow.​​ 

<!-- more -->


Thanks to this feature, you can turn the default notifications
off to use your own, customized messages and decide on channels
they will be sent through.

_**Note**: When you choose to suppress email notifications for Box Sign, your organization assumes responsibility for ensuring the delivery to Signers of all notifications at the appropriate time in the signing process and with the appropriate content, in compliance with all applicable laws and regulations, including with respect to obtaining Signer consent to the delivery methods used, if applicable._

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
