---
applied_at: '2019-12-31'
applies_to:
  - api
is_impactful: false
is_new_feature: false
---
# EOL of Classic Relay API Endpoints

As previously communicated on October 18 2019, Classic Relay API
endpoints are officially at an end of life state as of today.

The following endpoints are affected by this EOL and will now start responding
with error responses in applications making requests to them:

* Get list of published Relay Classic templates.
* Get list of Relay Classic workflows.
* Launch a Relay Classic workflow.

For any application encountering these error responses, please remove all calls
to the Relay Classic APIs listed above.