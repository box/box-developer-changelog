---
applied_at: "2026-05-05"
applies_to:
  - api
  - ai
is_impactful: true
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ""
---

# New field types in the Box AI Extract Structured API

We have introduced two new [complex field][complex-fields] types: `struct` and `table` in the Box AI 
`extract_structured` API.

- Use `struct` to group multiple related sub-fields and extract them as a single JSON object. 
This is useful for extracting a set of related values that belong together, such as an address or a person's contact details.
- Use `table` to extract repeating rows of structured data as an array of JSON objects. 
This is useful for extracting multi-row data such as invoice line items or tax tables, 
regardless of how that data is formatted in the source document.

Both types accept a `fields` array that defines their sub-fields, using the same scalar 
types already supported by the API (`string`, `float`, `date`, `enum`, `multiSelect`, and others).

## Where to get support

Should you have any issues or need further guidance, please post a request to our [developer forum][forum] for any help needed.

[forum]: https://forum.box.com/
[complex-fields]: https://developer.box.com/guides/box-ai/ai-tutorials/extract-metadata-structured#struct-and-table-field-types
