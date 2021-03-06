# Markdown styleguide

[**Previous:** Contributing a pull request](./pull-request.md) 

---

The following guidance will help you pass all spell checks and other common
issues when working with Markdown.

## Limit line length

We enforce a maximum line length of 80 characters. In general this is enough for
most people to easily read the content. Most advanced code editors allow for
automatic wrapping of content at the 80 character mark. Check your code editor
for details.

In the extreme case that a line can not be kept under 80 characters, for example
when creatign markdown tables, you can use the following syntax to make an
exception.

```md
<!-- markdownlint-disable line-length -->

Do something long here ...........................................

<!-- markdownlint-enable line-length -->
```

## Escape any code and brand names

The spell-checker will often fail on brand names
and any pieces of code. Rather than adding these
words to the dictionary, we recommend instead that you
use backticks to describe any of these words.

* Product names like `NodeJS`
* References to function names like `getFileById()`, `BoxConfig.doThatThing()`,
  etc 
* References to variable names like `file_id`, `allow_access`, etc
* Version numbers, like `v1.0.0`, or `V2.0`
* Or alternatively capitalize acronyms, like TLS, SSH, etc, as these will be
  ignored by the spell-checker as well.

Backticked words will not be translated, so only use
backticks for words that do not require translation.

## Add unknown words to dictionary

In the extreme case that a word is not recognized
by our dictionary, and it's a word that needs to be
translated and therefore can not be escaped using
backticks, the word can be added to the `.spelling`
file at the root of the project.

## Add syntax highlighting 

When writing longer code-blocks, add the language of the sample in the
definition of the code block. This will enable syntax highlighting for the
sample.

<!-- markdownlint-disable code-fence-style fenced-code-language -->

~~~
```yaml
---
- title: This is Yaml
```
~~~

<!-- markdownlint-enable code-fence-style fenced-code-language -->

## Avoid using `a`, `an` and `the` in titles

Titles of entries should not include `a`, `an`, or `the`.

| Bad                                    | Good                       |
|----------------------------------------|----------------------------|
| Add the `owner` field to files         | Add `owner` field to files |
| Allow the file API to use JWT          | Allow file API to use JWT  |
| Release of the Box CLI version `3.0.0` | Box CLI `3.0.0` release    |

## Don't over capitalize titles

Titles and headers should only be capitalized at the start of the title, and for
names.

| Bad                        | Good                       |
|----------------------------|----------------------------|
| Add `owner` Field to Files | Add `owner` field to files |
| Allow File API To Use JWT  | Allow file API to use JWT  |
| Box CLI `3.0.0` Release    | Box CLI `3.0.0` release    |

## Don't use bare URLs

Ideally, don't use bare URLs.

```md
For more help go to https://developer.box.com/support
```

Instead, use links and a descriptive text.

```md
For more help go to [our support page](https://developer.box.com/support).
```

If really needed, you can remove the scheme and `www` from a URL, and link to it
as follows.

```md
After running the command, the new content will be 
available on [`locahost:8000`](http://localhost:8000/)
```
