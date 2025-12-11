---
applied_at: '2025-12-11'
applies_to:
  - guides
  - api
is_impactful: true
is_new_feature: true
release_source_url: ''
collapse: true
---

# Box Sign Text Input Validations for Public API and Template Tags

We've extended Box Sign's text input validation capabilities to support both Public API and template tags. This enables developers and users to apply validation rules programmatically and through templates, closing a critical feature gap for enterprise workflows.

## What's new

<!-- more -->

Text input validation is now supported through:
* **Public API**: Create signature requests with validation rules using the Sign API endpoints.
* **Template tags**: Apply validation rules directly in document templates for use with Public API, Doc Gen, and Salesforce integrations.
* **Custom regex patterns**: Define custom validation patterns beyond the predefined validation types.

## Why it matters

This update addresses key integration needs:
* **Public API developers** can programmatically create signature requests with validation rules, including custom regex, ensuring data quality at scale.
* **Salesforce integration** users can now leverage text input validation rules for fields that sync back to Salesforce.
* **Doc Gen users** can apply validation to fields in automated document workflows.
Template Tags with validation support particularly benefits workflows where templates are used programmatically through integrations, eliminating the previous gap where validation was only available through the web interface.

## API updates
The following endpoints now support text input validation:
* [`POST /sign_requests`][1] — Create sign request with validation.
* [`GET /:sign_request_id`][2] — Get sign request details including validation.
* [`GET /sign_requests`][3] — List sign requests with validation info.
* [`GET /:template_id`][4] — Get template with validation rules.
* [`GET /sign_templates`][5] — List templates with validation info.

## Getting started

To use text input validation:
1. Review the [Create sign request endpoint][1] for adding validation to signature requests.
2. Check out the Box Sign documentation for [applying validation in Template Tags][6].
3. Explore [custom regex patterns][7] for advanced validation scenarios.

## Where to get support

Should you have any issues or need further guidance, please post a request to
our [developer forum][8] for any help needed.

[1]: e://post-sign-requests
[2]: e://get-sign-requests-id
[3]: e://get-sign-requests
[4]: e://get-sign-templates-id
[5]: e://get-sign-templates
[6]: https://support.box.com/hc/en-us/articles/4404085855251-Creating-templates-using-tags
[7]: https://support.box.com/hc/en-us/articles/42924560611603-Using-Input-Text-Validation
[8]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum