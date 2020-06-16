---
applied_at: '2019-05-15'
applies_to:
  - api
is_impactful: false
is_new_feature: false
---

# TLS 1.0 deprecated complete

On May 13th, 2019, Box began the process of disabling TLS 1.0 requests to Box
APIs. As of today, all TLS 1.0 API requests will be returning a response
stating that a secure connection could not be established when making API calls.

Impacted developers will have been notified through multiple channels over the
last 6-12 months, but should your application be impacted you will need to
update your systems to again be able to make API requests to Box.

Please see our [TLS 1.0 deprecation guide](page://changelog/tls-1.1) to
upgrade your systems to TLS 1.2.

For any questions or for addition support, please
[file a support ticket][support_ticket].

[support_ticket]: https://community.box.com/t5/custom/page/page-id/BoxSearchLithiumTKB
