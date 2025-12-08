---
applied_at: "2021-06-24"
applies_to: 
- api
is_impactful: true
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
---

# Box Sign API supports setting redirect URLs

The [Box Sign API][3] now offers new parameters to set up custom redirect URLs
for users who sign or decline a sign request. This way, when integrating your application 
with Box Sign, you can redirect the signers
back to your application or display a custom landing page.

<!-- more -->

## Updates

Box Sign API provides optional parameters to pass in the request body of the [Create Sign Request][3] call:

* `redirect_url` that redirects the user to a specific page after signing a request
* `declined_redirect_url` that redirects the user to a specific page after declining a request

You can define redirect URLs globally for all signers and for specific signers only.
For details, see the [Create Sign Request][4] guide.

## Developer Resources

Are you interested in creating applications for the Box App Center or becoming a Box Partner? Check out the
[Box Partner Resources][2] guides for more information!

## Where to get support

Should you have any issues or need further guidance, please post a request to
our [developer forum][1] for any help needed.

[1]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum
[2]: https://support.box.com/hc/en-us/sections/360009473734-Box-Partner-Resources
[3]: r://post-sign-requests
[4]: g://box-sign/create-sign-request
