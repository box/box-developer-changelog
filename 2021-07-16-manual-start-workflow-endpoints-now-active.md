---
applied_at: '2021-07-16'
applies_to:
  - api
is_impactful: true
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2021-07-16-manual-start-workflow-endpoints-now-active
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2021-07-16-updated-file-size-limits
previous_page_id: 2021-07-01-notice-of-behavior-change-for-item-open-events
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2021/07-16-manual-start-workflow-endpoints-now-active.md
published_at: '2021-07-16'
---
# New Manual Start Workflow Endpoints

Two new API endpoints have been introduced for
[Box Relay](https://www.box.com/collaboration/relay-workflow)

* Get workflows configured on a folder
* Start a manual start flow within a workflow for file(s)

<!-- more -->

The new endpoints do not allow you to update any information within the
workflows. Also, the post endpoint can only start flows with a `trigger_type`
of `WORKFLOW_MANUAL_START`. There is an optional `outcome_parametes` object
within the post request body. If your flow is configured to accept selections
at start time, you will need to send in these as a parameter. A guide with all
the options you can send in will be made available soon.

## Features

This release has introduced the following new content and features.

* New [workflow](r://workflow) resource
* New [GET](e://get_workflows) workflows endpoint
* New [POST](e://post_workflows_id_start) start manual workflow endpoint