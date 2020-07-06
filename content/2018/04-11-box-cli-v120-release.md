---
applied_at: '2018-04-11'
applies_to:
  - cli
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/boxcli/releases/tag/v1.2.0'
---

# Box CLI `v1.2.0` release

* Created bulk actions for the following commands:
  * users
    * update
  * groups
    * create
    * update
    * delete
  * group memberships
    * create
    * update 
    * delete
  * collaborations
    * add
    * update
    * delete
* Added filtering by event type to `box events get` and `box events poll`
* Added a command for deleting metadata templates from files and folders.
* Bumped underlying `box-windows-sdk` to `v3.6.0`
* Fixed a bug hindering creating float types for metadata on files and folders.
* Fixed a bug that did not assign the `User-Agent` HTTP header correctly.
* Fixed a bug that wasn't reporting all errors to `stderr`.
* Fixed a bug with bulk creation of metadata templates.
* Fixed a bug giving duplicate commands on group `membership` command.
* Fixed a bug with creating the wrong object for `tracking_codes` on users.
* Fixed a bug requiring an ID in CSV files on bulk creation of users.