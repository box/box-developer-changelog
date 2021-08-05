---
applied_at: "2021-01-15"
applies_to: 
- api
is_impactful: false
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
---

# Developer Console Updates

A new **Authorization** tab is now available in the Developer Console. In
addition, clarifying UI changes were made to the **Application Access** and
**Scope** settings within the **Configuration** tab to ease these decisions. 
These changes do not impact the functionality of the settings.

<!-- more -->

Now, developers will navigate to the  **Authorization** tab to submit the
application directly to their Box Admin for authorization approval.

As for the **Configuration** tab, helpful tips were added to the JWT
**Application Access** settings to facilitate a clear decision
between **App Only Access** or **App Access + Enterprise Access**.
The **Scope** section is now grouped by action type: content, administrative,
and developer.


* **App Approval Process**: [Guide](g://authorization/custom-app-approval)
* **Scopes**: [Guide](g://api-calls/permissions-and-errors/scopes)
* **Application Access**:
[Guide](g://authentication/jwt/jwt-setup/#application-access)

## Updates

* Added Authorization tab to the Developer Console
* Updated the UI for JWT Application Access settings under the Configuration tab
* Updated the UI grouping of Scopes under the Configuration tab
