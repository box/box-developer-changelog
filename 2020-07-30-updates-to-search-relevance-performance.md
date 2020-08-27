---
applied_at: '2020-01-31'
applies_to:
  - api
is_impactful: false
is_new_feature: true
collapse: false
show_excerpt: false
release_source_url: ''
is_index: false
category_id: changelog
subcategory_id: ''
id: 2020-07-30-updates-to-search-relevance-performance
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2020-08-07-box-node-sdk-v1340-released
previous_page_id: 2020-07-22-new-zip-download-apis-available
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2020/07-30-updates-to-search-relevance-performance.md
published_at: '2020-07-30'
---
# Updates to Search Relevance & Performance

In January, updates were released to Box's search [tokenizer][wiki-tokenizer],
improving the relevancy of search results and performance. This change does not
effect how metadata is tokenized.

Notable changes to the API-initiated searches include:

* The ability to use "[stop words][wiki-stop-words]", for example "the", "is"
  "at", "which", and "on".
* Improved Japanese text tokenization and improved search results.

See the [full-text search][search_guide] documentation for more
information on how to search using Box's API.

[wiki-stop-words]: https://en.wikipedia.org/wiki/Stop_words

[wiki-tokenizer]: https://en.wikipedia.org/wiki/Lexical_analysis#Tokenization

[search_guide]: g://search/full-text-search
