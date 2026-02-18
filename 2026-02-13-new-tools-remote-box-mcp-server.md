---
applied_at: '2026-02-17'
applies_to:
  - guides
  - api
  - ai
is_impactful: true
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2026-02-13-new-tools-remote-box-mcp-server
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2026-02-18-box-windows-sdk-v650-released
previous_page_id: 2026-02-11-box-ui-elements-v2630-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2026/02-13-new-tools-remote-box-mcp-server.md
published_at: '2026-02-13'
---
# New tools for remote Box MCP server

We've added new tools to the [remote Box MCP server][remote-mcp] so AI agents can do more with Box content and collaboration.

**Doc Gen**
* `get_docgen_template_by_id` — Retrieve details about a Doc Gen template.
* `list_docgen_templates` — List all Box Doc Gen templates available to the authenticated user.
* `create_docgen_batch` — Generate documents from a Doc Gen template by filling placeholder tags with provided data.

**Search**
* `search_files_metadata` — Search for files using SQL-like metadata queries, with support for complex filtering, field selection, and folder scoping.

**Box AI**
* `ai_extract_structured_from_fields_enhanced` — Extract structured metadata from files using the Box AI Enhanced Extract Agent and custom field definitions.

**Collaboration**
* `list_item_collaborations` — List all existing collaborations on an item.

**Hubs**
* `copy_hub` — Create a copy of an existing Box Hub with all its structure and settings. The original hub stays unchanged.

For setup and client-side steps, see the [remote Box MCP server guide][remote-mcp].

## Where to get support

Should you have any issues or need further guidance, post a request to our [developer forum][forum].

[forum]: https://forum.box.com/
[remote-mcp]: https://developer.box.com/guides/box-mcp/remote