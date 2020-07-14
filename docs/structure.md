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
release_source_url: "https://github.com/box/box-windows-sdk-v2/releases/tag/v3.23.0"
---

# Windows .NET SDK `v3.23.0` release

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
