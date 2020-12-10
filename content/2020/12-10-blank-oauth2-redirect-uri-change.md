---
applied_at: "2020-12-10"
applies_to: 
- api
is_impactful: true
is_new_feature: false
collapse: true
show_excerpt: true
release_source_url: ''
---

# Blank OAuth 2 redirect URI change

On September 28th, 2020 we announced upcoming changes to our
[security requirements for OAuth 2 app redirect URIs][oauth2-changelog-notice].
As of today, applications that use a blank redirect URI will no longer be
permitted, and will begin to produce an error stating `redirect_uri missing`
when attempting to redirect the user, stating that there is a mismatched URI.

Impacted applications will have received multiple emails to the developer email
address associated with the application and account, and are part of a small
subset of applications that were grandfathered in to allow the functionality to
persist.

New applications, or any OAuth 2 applications that have a redirect URI
specified are not impacted.

## How to update your OAuth 2 app redirect URI

If your OAuth 2 application has started to produce an error during the redirect
phase, you may be impacted by this change. To update your application(s),
use the following steps:

* Go to the
 [Box developer console][dev-console] as the
 user who owns the application(s).
* From the top navigation, click on **Configuration**.
* Scroll down to the **OAuth 2.0 Redirect URI** section. 
* For any application where this URI is blank, add the URI that is being used
 in the application code when redirecting the user back to your application
 from the Box auth step,
 [as is described in this guide](g://authentication/oauth2/with-sdk/#2-redirect-user).

[oauth2-changelog-notice]: https://developer.box.com/changelog/#2020-09-29-changes-to-oauth-2-app-redirect-url-requirements
[dev-console]: https://cloud.app.box.com/developers/console
