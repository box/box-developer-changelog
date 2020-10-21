# Project structure

[**Previous:** Notes for Box employees](./boxers.md) |
[**Next:** Adding a new release note](./add-release-note.md)

---

As it would be unwieldy to maintain all release notes in one big Markdown file,
we instead have opted to break each release note into its own file.

## Structure

The following is the rough layout of this project.

- `content/` - This folder contains the individual changelog entries. The
  content is broken down by year (e.g. `2020` and then into individual files).
  - `content/2020/06-29-an-example-release-note.md`
- `compiled/` - This is where the compiled markdown files are written to after
  running `yarn build`.
- `code/` - The code base that includes our linting code, as well as our
  functional tests.
- `.spelling` - Contains additional words that need to be added to the
  dictionary. This is used to add words that are not in the dictionarity
- `.github/` - Contains templates for GitHub Issues and Pull Requests, as well
  as workflows for GitHub Actions.
  - `workflows/`
    - `import.yml` - Triggered by a dispatch notification from any of our SDKs
      and CLI. These dispatch notifications are sent by GitHub actions in those
      repositories when a new release is published to GitHub. This Action then
      imports the release name and description, writes it out as markdown, and
      opens a new pull request for that release.
    - `lint.yml` - When a change is pushed to the `main` or `staging` branches, or
      when a pull request is opened for those branches, this runs the linter to
      validate the new content is valid markdown and has no spelling mistakes.
      If this was a pull request opened by the `box-devrel` user and the linting
      passes, then an `automerge` label is applied. It is also used to build new
      content on the `main` and `staging` branch and push them to the `en` and
      `en-staging` branches.
    - `automerge.yml` - Triggered when a pull request is labeled with the
      `automerge` tag by the `box-devrel` user. It merges the pull request.
    - `merge-schedule.yml` - Triggered daily at 4PM UTC. It checks for any pull
      requests that have a `/schedule [date]` statement in their description and
      merges them.
    - `notify.yml` - When a new commit is made to the `en`, `en-staging` and
      `jp` branches then this action is triggered. It notifies Netlify of the
      new changes which triggers a rebuild.
    - `test.yml` - When a change is pushed to the `main` or `staging` branches,
      or when a pull request is opened for those branches, this runs the test
      suite to make sure the code that builds the content still works as
      expected.
- `.alexrc` - Contains our rules for [Alex.JS](https://alexjs.com), used to
  limit the language used in our docs.

## Front Matter

Each release note includes a set of "Front Matter" at the top of it to define
some additional metadata for each entry.

For example.

```markdown
---
applied_at: '2020-05-12'
applies_to:
  - windows
  - sdks
is_impactful: false
is_new_feature: true
collapse: true
release_source_url: "https://github.com/box/box-windows-sdk-v2/releases/tag/v3.23.0"
---

# Windows .NET SDK `v3.23.0` released

...
```

The section at the top, in between the pair of triple dashes, is the Front Matter.

<!-- markdownlint-disable line-length -->

| Front Matter field | Required? | Description                                                                                                                                                                                                                                                                                               |
|--------------------|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `applies_at`       | Yes       | Describes what date (`YYYY-MM-DD`) this release goes in affect at. This might be different than the date used in the path of this file, which would be the date this release is published.                                                                                                                |
| `applies_to`       | Yes       | Describes what projects this release applies to. This is used to provide a filter in the developer documentation. This needs to be a list of 1 or more values. Please look at previous entries for allowed values.                                                                                        |
| `is_impactful`     | Yes       | Describes if this change might have an impact on a customer. If this change might in any way break something in the customer's code, or have an adverse affect on the customer's business logic (even if this is due to the customer not applying best practices) then this value should be set to `true` |
| `is_new_feature`   | Yes       | Describes if this change represents a new feature or simply a bug fix or minor change that does not introduce any new functionality.                                                                                                                                                                      |
| `source_url`       | No        | An optional source URL that points to the original source for this release note. This is used by the automatic release note importer to point back to the original GitHub release note that it was copied from.                                                                                           |

<!-- markdownlint-enable line-length -->

---

[**Next:** Adding a new release note](./docs/add-release-note.md)
