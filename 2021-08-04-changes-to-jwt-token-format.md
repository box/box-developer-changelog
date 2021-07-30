---
applied_at: '2021-06-04'
applies_to:
  - api
is_impactful: true
is_new_feature: false
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2021-08-04-changes-to-jwt-token-format
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2021-07-30-box-java-sdk-v2551-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/08-04-changes-to-jwt-token-format.md
published_at: '2021-08-04'
---
# Upcoming change to JWT format

On August 4th, 2021, as part of our continued infrastructure upgrades, we will
begin deployment of a change that may affect custom applications leveraging
Server Authentication with JSON Web Tokens (JWT).

Potential impact will require additional verification from customers who do not
use an official [Box SDK][box-sdks] and are storing tokens in a database.

All customers and application owners who are potentially impacted have been
notified directly via email.

<!-- more -->

## Change overview

This change may only impact applications leveraging Server Authentication with
JSON Web Tokens (JWT). Tokens will continue to return as a string as stated in
our [documentation][tokendoc]. However, the format will be longer and contain
<!--alex ignore special-->

special characters.

An example of a token returned today: `NXWd9KDPVofXQKZJlQjICCWFHEmuOihs`.

After this change, tokens will return in the following format:

`1!yxxhRreQCKcEbC_ZfYvPudyLe7Ed36gIQcqqZo2pfaVZyxNBkQjoHk0fgA1iTY3_uwXgif-hg-gne
aUdLRmGCb2He6tyQ_rA8aV-CllTyBbd9Tx-wU6Fnt4Df9XjzBAk8Dj7RYc1Ew_fcY2vfycpCvjwHLgql
jzjEpVIrOpOlK_2AyP5FExzn0x7DtbkaGc6avJU8UMQd_huXoJ7CnXIL_JBzVrW4D32pBLQ2AZIuecOZ
NMIy9T8PdUiZIG6xKEPqYmm21mQHEM0d7dT5foSBtjm65-Ah2tb2MdSGFb1G1O24vz2GmYFgmIe5UOol
qYIGg-0u2xQPC3F76WiNCiU_TP1JDQYi3HKaos807WkRtnBY5Vd-VAbY9DH-Qo3u1EiB0RFr4cht2N7V
B99y-379IEYzCojL2V58dE_pBxpRMv4KcOLVsUfDkbx3uo34H4UzOycI_IWGWrhVJD4M7GeLeD_5Vkmj
fbwYl2CmHdXAKbZKtXTHjzB0CZixZriT_wRUpsN8GTrrxGbx9ukgzJWRJwelGZ_1Yx7vP4Zkx3OfR5Be
-Tso7xdHd9rW0FXsu024U7dMNuQ6kpP1_kJI2Y`. 

Please note that this is not a new format to Box, as this format is currently
returned when [downscoping tokens][downscope]. 

## Verifying application impact

1. Navigate to **Admin Console** > **Apps** Tab > **Custom Apps**.
2. Click **View** for each app row listed
3. Scroll to the bottom of the app details page and verify the selected
  authentication method. Affected apps will say
  **Server Authentication with JSON Web Tokens**. 

For each application identified above, you will need to determine: 

1. Is it using an official [Box SDK][box-sdks]? If so, no further action is
  required to prepare for this change. While it is always best practice to be
  on the latest version, no minimum versions are required for compatibility.

<!--alex ignore special-->

2. If an official SDK is not used, are tokens stored in a database? If so, you
  will need to preform additional verification that the database can handle both
  the new length and special characters.

## Testing before release

If you have identified an application that leverages Server Authentication with
JWT and stores tokens in a database, you will want to preform the test below
before August 4th.

As mentioned above, the new format for tokens is currently used when
[downscoping tokens][downscope]. Therefore, preform the following steps to
assess impact:

1. Generate an Access Token for the application
2. [Downscope][downscope] the token from step 1
3. Attempt to store the downscoped token in your database

If you are successfully able to store the token in the database no further
action is necessary to prepare for this change.

<!--alex ignore special-->

If you are unable to store the token, your database must be updated to support
the additional length and special characters.

## Where to get support

Should you have any questions or need further guidance, please email
jwt-set-rollout@box.com.


[box-sdks]: https://developer.box.com/sdks-and-tools
[tokendoc]: https://developer.box.com/reference/post-oauth2-token/
[downscope]: https://developer.box.com/guides/authentication/access-tokens/downscope