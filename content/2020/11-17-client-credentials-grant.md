---
applied_at: "2020-11-17"
applies_to: 
- api
is_impactful: false
is_new_feature: false
collapse: false
show_excerpt: true
release_source_url: ''
---

# Client Credentials Grant

<!-- more -->

Announcing a new way to leverage server to server, JWT, authentication:
Client Credentials Grant. Prior to today, we required a public/private key pair
and assertion to verify an application's identity and retrieve an Access Token.
Now,you can request a token using only your client ID and client secret.

```cURL
curl --location --request POST ‘https://api.box.com/oauth2/token’ \
--header ‘Content-Type: application/x-www-form-urlencoded’ \
--data-urlencode ‘client_id=<client_id>’ \
--data-urlencode ‘client_secret=<client_secret>’ \
--data-urlencode ‘grant_type=client_credentials’ \
--data-urlencode ‘box_subject_type=enterprise’ \
--data-urlencode ‘box_subject_id=<enterprise_id>’
```

For further information, please visit our [guide][guide]. 

## Updates

* Added client credentials grant as an auth option for new applications
* Added 2FA requirement to copy/view client secret
* Added selected authentication method in the Enterprise Authorization request 
* Removed the ability to change authentication type

[guide]: g://authentication/jwt/without-sdk/#client-credentials-grant