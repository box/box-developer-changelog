---
applied_at: '2022-02-01'
applies_to:
  - cli
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/boxcli/releases/tag/v3.0.0'
collapse: true
---

# Box CLI `v3.0.0` released

Today, we released `v3.0.0` of the [Box CLI][17]. This release has several enhancements and some breaking changes.

<!-- more -->

In addition to CLI enhancements and documentation changes, we also released a brand new [YouTube video][18] that shows using our Box CLI Quick Start to get started with the CLI in less than
five minutes!

## Developer Documentation Changes

* Updated the [Box CLI Quick Start Guide][19] to use the OAuth 2.0 Authentication method
* Moved the [JWT setup steps][20] to an appendix

## New Features and Enhancements

* Add support for login with OAuth ([#240][3])
* feat: support as-user flag for bulk files and when token is present ([#270][4])
* Add support for `copyInstanceOnItemCopy` field for metadata templates  ([#239][5])
* Add support note to the `mdfilter` equality check in search ([#253][6])
* Add support for Box Sign API ([#258][7])
* Add support Metadata Query API ([#259][8])
* fix: `folder:collaborations:add` make `role` a required flag (`SDK-1070`) ([#261][9])
* Minor dependencies upgrade
* Add new API for files and file versions under retention ([#250][10])
* Adding support for sign request ([#258][11])
* Support Metadata Query API ([#259][12])
* chore: enforce conventional commits ([#268][13])
* feat: support as-user flag for bulk files and when token is present ([#270][14])

## Breaking Changes

* Drop support for Node 10
* Insensitive language changes ([#247][1], [#252][2])

## Bug Fixes

* fix: folder:collaborations:add make role a required flag ([#261][15])
* fix: Fixed shared-links delete example. ([#262][16])

## Where to get support

Should you have any issues or need further guidance, please post a request to
our [developer forum][0] for any help needed. You can also connect with the SDK
team on the respective GitHub repository.

[0]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum

[1]: https://github.com/box/boxcli/issues/247

[2]: https://github.com/box/boxcli/issues/252

[3]: https://github.com/box/boxcli/pull/240

[4]: https://github.com/box/boxcli/pull/270

[5]: https://github.com/box/boxcli/pull/239

[6]: https://github.com/box/boxcli/pull/253

[7]: https://github.com/box/boxcli/pull/258

[8]: https://github.com/box/boxcli/pull/259

[9]: https://github.com/box/boxcli/pull/261

[10]: https://github.com/box/boxcli/issues/250

[11]: https://github.com/box/boxcli/issues/258

[12]: https://github.com/box/boxcli/issues/259

[13]: https://github.com/box/boxcli/issues/268

[14]: https://github.com/box/boxcli/issues/270

[15]: https://github.com/box/boxcli/issues/261

[16]: https://github.com/box/boxcli/issues/262

[17]: https://github.com/box/boxcli/releases

[18]: https://www.youtube.com/watch?v=21d2l1ebAPs&list=PL0F3BD5B64D6A39F1

[19]: g://tooling/cli/quick-start

[20]: g://tooling/cli/jwt-cli