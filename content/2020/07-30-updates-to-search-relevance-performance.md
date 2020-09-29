---
applied_at: '2020-01-31'
applies_to: 
  - api
is_impactful: false
is_new_feature: true
collapse: false
show_excerpt: false
release_source_url: ''
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
[search_guide]: g://search/
