---
applied_at: '2020-10-29'
applies_to:
  - api
  - sdks
is_impactful: true
is_new_feature: false
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2020-09-29-changes-to-oauth-2-app-redirect-url-requirements
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2020-10-02-box-python-sdk-v2100-released
previous_page_id: 2020-09-25-search-api-adds-support-for-shared-links
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2020/09-29-changes-to-oauth-2-app-redirect-url-requirements.md
published_at: '2020-09-29'
---
# Change to OAuth 2 app redirect URI requirements

On October 29th, 2020, Box will begin employing stricter requirements for
redirect URIs used within new and existing
[OAuth 2](g://authentication/oauth2/)-based Box integrations that may affect
your application.

Existing application owners that currently use a blank redirect URI in their
application configuration, as
[described here](g://authentication/oauth2/oauth2-setup/#redirect-uri), will
need to update the redirect URI to match the redirect used within the code
redirect step,
[described here](g://authentication/oauth2/with-sdk/#2-redirect-user).

On October 29th, 2020, applications that are still configured with a blank URI
will begin returning an error when the user is redirected back to your
application if URI adjustments aren't made.

All impacted application owners and collaborators have been notified via
the email address associated with their developer account.

## How to validate and make the change
To validate your redirect URI and update your application(s) if they are
affected, take the following steps:

* Go to the
[Box developer console](https://cloud.app.box.com/developers/console) as the
user who owns the application(s).
* For each **Custom App** using **OAuth 2** (client-side authentication) click
on the application to open it.
* From the left navigation, click on **Configuration**.
* Scroll down to the **OAuth 2.0 Redirect URI** section.
* For any application where this URI is blank, add the URI that is being used
in the application code when redirecting the user back to your application
from the Box auth step,
[as is described in this guide](g://authentication/oauth2/with-sdk/#2-redirect-user).