---
applied_at: "2020-10-27"
applies_to: 
- api
is_impactful: false
is_new_feature: false
collapse: true
show_excerpt: true
release_source_url: ''
---

# Simplified App Creation Flow

A new, simplified app creation flow is now available in the Box
[Developer Console](https://cloud.app.box.com/developers/console). The three
types of applications are Custom Apps, Limited Access Apps, and Box Custom
Skills. 

We added plain language to describe exactly when to select each 
app type and links to relevant documentation if you require additional
information to help with your selection. The application type you select impacts
which authentication methods are available. 

Once your selection is made, you will now be automatically redirected to your
application's configuration tab of the Developer Console. Here you can
immediately finish configuring your application and generate a developer token
to begin making API calls.

Most notably, is our new app type, Limited Access Apps. Select this app type if
you'd like to leverage [Box View](g://embed/box-view/) or Box's preview services
within another application. This app type only provides access to
[app token authentication](g://authentication/app-token/), which has
[restricted API capabilities](g://authentication/app-token/endpoints/).
For full details, please visit our [guide](g://applications/select/) on
selecting an app type.