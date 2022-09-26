---
applied_at: '2022-09-26'
applies_to:
  - cli
is_impactful: false
is_new_feature: true
release_source_url: 'https://github.com/box/boxcli/releases/tag/v3.4.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2022-09-26-box-cli-v340-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2022-09-23-box-python-sdk-v350-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2022/09-26-box-cli-v340-released.md
published_at: '2022-09-26'
---
# Box CLI `v3.4.0` released

### New Features and Enhancements

* Add `DryRun` mode in `User Deprovision` example script ([#392][1]) ([`584a30e`][2])
* Add `redirect_url` and `declined_redirect_url` to Sign Request ([#395][3]) ([`261b7d2`][4])
* Add progress bar for file download and bulk command ([#376][5]) ([`68359c7`][6])
* create destination path during download ([#393][7]) ([`40881dd`][8])
* native credentials storage for Windows with a new library ([#385][9]) ([`a6918aa`][10])

### Bug Fixes

* correctly resolve home `dir` in folders download ([#398][11]) ([`86d3230`][12])
* Fix logs in `Users Deprovisioning` script ([#381][13]) ([`c85f77b`][14])
* Fix problem with `keytar` library ([#394][15]) ([`1979f01`][16])

### Note

* To migrate storing Box CLI environments to the system credential storage, execute the following command in the terminal (<https://github.com/box/boxcli/issues/295>

):
        box configure:environments:update

[1]: https://github.com/box/boxcli/issues/392

[2]: https://github.com/box/boxcli/commit/584a30ef33446a6687ce558c810804202650299f

[3]: https://github.com/box/boxcli/issues/395

[4]: https://github.com/box/boxcli/commit/261b7d22a5e5adf3647276cbf59454cca9bf607f

[5]: https://github.com/box/boxcli/issues/376

[6]: https://github.com/box/boxcli/commit/68359c7e97ce2b606184426cbbaac73914ceb81a

[7]: https://github.com/box/boxcli/issues/393

[8]: https://github.com/box/boxcli/commit/40881ddbd2c86e80f19689f012736fb19f18d945

[9]: https://github.com/box/boxcli/issues/385

[10]: https://github.com/box/boxcli/commit/a6918aaa6e28bd29619bea31c97b845d8d429fec

[11]: https://github.com/box/boxcli/issues/398

[12]: https://github.com/box/boxcli/commit/86d3230456827a042be04f5ef372b15d83fd6a10

[13]: https://github.com/box/boxcli/issues/381

[14]: https://github.com/box/boxcli/commit/c85f77b3042dfc3ddfe54b2acd94b220f6ee0e9b

[15]: https://github.com/box/boxcli/issues/394

[16]: https://github.com/box/boxcli/commit/1979f01758a30cd1dbf9d32c19ce2f3a00c0d5ec