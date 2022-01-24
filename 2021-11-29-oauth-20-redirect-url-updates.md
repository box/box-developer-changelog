---
applied_at: '2021-11-29'
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
id: 2021-11-29-oauth-20-redirect-url-updates
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2021-12-08-box-python-sdk-v2140-released
previous_page_id: 2021-11-23-box-java-sdk-v2580-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/11-29-oauth-20-redirect-url-updates.md
published_at: '2021-11-29'
---
# OAuth 2.0 Redirect URL Updates

Today, we released a new feature to the Box Developer Console, allowing developers to add multiple redirect URIs for an OAuth 2.0 application.

<!-- more -->

Starting November 29, 2021, new applications using OAuth 2.0 will require the
URIs set in the configuration tab of the Developer Console to strictly match the
one used during redirect. In addition, both new and existing applications, will
gain the ability to add multiple redirect URIs.

For existing applications, the deadline to make changes to this URL and avoid service
disruption is May 13, 2022.

## Updates

* The Box Developer Console OAuth 2.0 application configuration section has a new button to add multiple redirect URIs
* Redirect URIs now force strict checking to match the URI passed in and URIs configured in the OAuth 2.0 application configuration
* Updated the `redirect_uri` query parameter wording on the [`GET /authorize`][url-redirect] endpoint page
* Updated the OAuth 2.0 [setup][oauth-setup], [with SDK][oauth-sdk], and [without SDK][oauth-nosdk] guide pages

## Where to get support

Should you have any issues or need further guidance, please post a request to
our [developer forum][forum] for any help needed.

[forum]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum

[url-redirect]: e://get-authorize/#param-redirect_uri

[oauth-setup]: g://authentication/oauth2/oauth2-setup/

[oauth-sdk]: g://authentication/oauth2/with-sdk/

[oauth-nosdk]: g://authentication/oauth2/without-sdk/
