---
applied_at: '2022-01-17'
applies_to:
  - sdks
  - python
is_impactful: true
is_new_feature: true
release_source_url: 'https://github.com/box/box-python-sdk/releases/tag/v3.0.0'
collapse: true
is_index: false
category_id: changelog
subcategory_id: ''
id: 2022-01-17-box-python-sdk-v300-released
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: ''
previous_page_id: 2022-01-17-box-java-sdk-v300-released
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2022/01-17-box-python-sdk-v300-released.md
published_at: '2022-01-17'
fullyTranslated: true
---
# Box Python SDK `v3.0.0`のリリース

**重大な変更**

* Python 2.7のサポートを終了 ([#645][1])
* 不足しているパラメータ`stream_position to get_admin_events`メソッドを追加 ([#648][2])
* Python 3.5のサポートを終了 ([#654][3])
* 不適切な用語を使用している非推奨のコードを削除 ([#651][4])
* 一部の関数でキーワードのみの引数の使用を強制 ([#656][5])

**新機能と機能強化:**

* `six`ライブラリと`__future__` importを削除 ([#646][6])
* メソッドのパラメータにタイプヒントを追加 ([#650][7])

**バグ修正:**

* `multi-iput`の呼び出しに不足している`api_call`デコレータを追加 ([#653][8])
* `mypy`がタイプヒントを認識できるように`py.typed`ファイルを追加 ([#657][9])

[1]: https://github.com/box/box-python-sdk/pull/645

[2]: https://github.com/box/box-python-sdk/pull/648

[3]: https://github.com/box/box-python-sdk/pull/654

[4]: https://github.com/box/box-python-sdk/pull/651

[5]: https://github.com/box/box-python-sdk/pull/656

[6]: https://github.com/box/box-python-sdk/pull/646

[7]: https://github.com/box/box-python-sdk/pull/650

[8]: https://github.com/box/box-python-sdk/pull/653

[9]: https://github.com/box/box-python-sdk/pull/657
