---
applied_at: "2025-09-17"
applies_to: 
- node
- python
- java
- windows
- ios
- sdks
is_impactful: true
is_new_feature: false
collapse: true
show_excerpt: true
release_source_url: ''
---

# Box Next Generation SDK deprecation

About titles: good titles are less than 50 characters,
explain what changed, and follow previous similar entries. For example:

* Box CLI `v3.0.0` released
* New Metadata Query APIs available 
* Change to metadata instance version

<!-- more -->

Everything behind this comment is hidden by default if the `collapse` value in the frontmatter is set to `true` and `show_excerpt` is also set to `true`.

Start with a small section that explains in basic terms what has changed
and how this impacts a customers. Make sure to add to related content, for
example:

* [A guide](g://tooling/postman/) links to the `developer.box.com/guides/tooling/postman/` guide
* [An endpoint](e://get_files_id) links to the `developer.box.com/reference/get-files-id` reference docs
* [A resource](r://file) links to the `developer.box.com/reference/resources/file` reference docs

Make sure to use back ticks (`\`\) to escape any words that would not pass the spellchecker
or would not need translating. For example:

* Product names like `NodeJS`
* References to function names like `getFileById()`, `BoxConfig.doThatThing()`, etc
* References to variable names like `file_id`, `allow_access`, etc
* Version numbers, like `v1.0.0`, or `V2.0`
* Or alternatively capitalize acronyms, like TLS, SSH, etc, as these will be
  ignored by the spell-checker as well.

Finally, include some examples. The more specific you can be the better. For
example:

Before:

```js
{}
```

After: 

```js
{
  "access": true
}
```

> If at this point your file is becoming longer than 50 lines, you might want to
> consider using our `short.md` template instead.

## Features

Remove this section if there are no new features in this release. Provides a list
of new features in this release. Each entry in this list should start with a verb.

* Add the ability to find files by path 
* Add support for the `Zoom` API

## Updates

Remove this section if there are no new updates in this release. Provides a list
of updates in this release that are not bug fixes or new features. Each entry in this 
list should start with a verb.

* Remove the ability to search for files by path 
* Update our Node dependencies

## Bug Fixes

Remove this section if there are no new bug fixes in this release. Provides a list
of problems that have been fixed in this release. Each entry in this list should start with a verb.

* Fix retry logic in authentication requests
* Fix access to pterodactyl cage
