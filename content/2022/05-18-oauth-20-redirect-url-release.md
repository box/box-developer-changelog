---
applied_at: "2022-05-18"
applies_to: 
- api
is_impactful: true
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
---

#  OAuth 2.0 Redirect URL Strict Checking Enabled

Today, we turned on strict checking for all OAuth 2.0 applications.

<!-- more -->

On November 29, 2021, we [announced][oauth-cl] new applications using OAuth 2.0 will require the
URIs set in the configuration tab of the Developer Console to strictly match the
one used during redirect.
 
This change has now been completed. If your enterprise had applications that were not following this standard,
you should have received four emails over the past few months describing how to update your applications.

## How to solve redirect errors

If you did not receive the email or missed the communication, below you will find the steps to mitigate any issues.

1. You can change the redirect URL in the Box Developer Console configuration tab for your application.
    - If the URLs are static, then you can update the Developer console to add multiple URLs
    - If the URLs are dynamic, then update your application to use a static URL or use the state parameter
2. You can change the redirect URL used in your application code to strictly match the URL in the developer console.
 
For option #1, please use these steps:
- Login to Box as the application owner and navigate to the Box Developer Console
- Click on the application and navigate to the configuration tab
- Scroll down to the "OAuth 2.0 Redirect URI" section
- Update the current URL listed
 
For option #2, please modify your application code to replace the impacted used URLs to strictly match the URL in the Developer Console.

## Updates

* Redirect URIs now force strict checking to match the URI passed in and URIs configured in the OAuth 2.0 application configuration

## Where to get support

Should you have any issues or need further guidance, please post a request to
our [developer forum][forum] or file a ticket
with [Box Support][support].

[forum]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum
[oauth-cl]: https://developer.box.com/changelog/#2021-11-29-oauth-20-redirect-url-updates
[url-redirect]: e://get-authorize/#param-redirect_uri
[oauth-setup]: g://authentication/oauth2/oauth2-setup/
[oauth-sdk]: g://authentication/oauth2/with-sdk/
[oauth-nosdk]: g://authentication/oauth2/without-sdk/
[support]: https://support.box.com/hc/en-us/requests/new
