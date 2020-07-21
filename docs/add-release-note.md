# Adding a release note

[**Previous:** Project structure](./structure.md) |
[**Next:** Contributing a pull request](./pull-request.md)

---

New release notes are added to the `content/` folder. Every release note
is written as a Markdown file with the associated Front Matter.

## Quick start

The fastest way to add a new changelog entry is with the `new` command. This
command will present you with a set of questions and write out a new template
into the `./content` folder based on your answers.

```shell
$ yarn new
yarn run v1.22.4
$ babel-node ./code/src/scripts/new-release-from-template.js
? What is a short title for this release? Box CLI `1.0.1` released
? When will this release go into effect? This may be a date in the past. 2020-06-30
? When will this release be published? This can be an estimate. 2020-06-30
? What projects will this apply to? Please select any that apply. cli
? Is this an impactful/breaking change? Yes
? Is this a new feature and not just a bug fix? Yes
'./content/2020/06-30-box-cli-101-release.md'
```

## Templates

We've included a few templates in the `./templates` folder that you can use to
manually create an entry. 

---

[**Next:** Contributing a pull request](./pull-request.md)
