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
# 検索の関連性とパフォーマンスの更新

1月に、Boxの検索用[トークナイザ][wiki-tokenizer]に対する更新がリリースされ、検索結果の関連性とパフォーマンスが向上しました。今回の変更によるメタデータのトークン化への影響はありません。

APIによる検索の注目すべき変更点は以下のとおりです。

* 「the」、「is」、「at」、「which」、「on」などの「[ストップワード][wiki-stop-words]」が使用可能になりました
* 日本語テキストのトークン化が改善され、検索結果が向上しました

BoxのAPIを使用した検索方法の詳細については、[全文検索][search_guide]に関するドキュメントを参照してください。

[wiki-stop-words]: https://en.wikipedia.org/wiki/Stop_words

[wiki-tokenizer]: https://en.wikipedia.org/wiki/Lexical_analysis#Tokenization

[search_guide]: g://search/full-text-search
