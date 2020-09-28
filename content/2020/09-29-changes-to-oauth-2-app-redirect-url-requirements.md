---
applied_at: "2020-10-29"
applies_to: 
- api
- sdks
is_impactful: true
is_new_feature: false
collapse: true
show_excerpt: true
release_source_url: ''
---

# Changes to OAuth 2 app redirect URL requirements

On October 29th, 2020, Box will begin employing stricter requirements for
redirect URLs used within new and existing
[OAuth 2](g://authentication/oauth2/) based Box integrations that may affect
your application.

Existing application owners that currently use a blank redirect URL in their
application configuration, as
[described here](g://applications/custom-apps/oauth2-setup/#redirect-uri), will
need to update the redirect URL to match the redirect used within the code
redirect step,
[described here](g://authentication/oauth2/with-sdk/#2-redirect-user). 

On October 29th, 2020, applications that are still configured with a blank URL
will begin returning an error when the user is redirected back to your
application if URL adjustments aren't made.

All impacted application owners and collaborators have been notified via
the email address associated with their developer account.

## How to validate and make the change
To validate your redirect URL and update your application(s) if they are
affected, take the following steps:

* Go to the
 [Box developer console](https://cloud.app.box.com/developers/console) as the
 user who owns the application(s).
* For each OAuth 2 application, click on the application to open it.
* From the left navigation, click on "Configuration".
* Scroll down to the "OAuth 2.0 Redirect URI" section. 
* For any application where this URL is blank, add the URL that is being used
 in the application code when redirecting the user back to your application
 from the Box auth step,
 [described here](g://authentication/oauth2/with-sdk/#2-redirect-user).
