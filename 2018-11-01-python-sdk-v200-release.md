---
applied_at: '2018-11-01'
applies_to:
  - python
  - sdks
is_impactful: true
is_new_feature: true
collapse: true
release_source_url: 'https://github.com/box/box-python-sdk/releases/tag/v2.0.0'
is_index: false
category_id: changelog
subcategory_id: ''
id: 2018-11-01-python-sdk-v200-release
rank: null
total_steps: null
type: changelog
sibling_id: ''
parent_id: changelog
next_page_id: 2018-11-16-java-sdk-v2240-release
previous_page_id: 2018-10-19-python-sdk-v2-launched
source_url: >-
  https://github.com/box/box-developer-changelog/blob/main/content/2018/11-01-python-sdk-v200-release.md
published_at: '2018-11-01'
fullyTranslated: true
---
# Python SDK `v2.0.0`のリリース

## 重大な変更

* Python 2.6はサポートされなくなりました。

* Python 3.3はサポートされなくなりました。

* `client.search()`により、検索APIを呼び出すための`query()`メソッドを公開する`Search`オブジェクトが返されるようになりました。`client.search(**search_params)`の代わりに`client.search().query(**search_params)`を使用してください。

* `client.get_memberships(...)`の署名が変更されました。他のSDKとの一貫性を保つため、制限パラメータとオフセットパラメータの位置が入れ替えられました。

* `client.groups(...)`が`client.get_groups`に変更されました。制限パラメータとオフセットパラメータの位置が入れ替えられました。

* `item.create_shared_link(...)`と`file.get_shared_link_download_url(...)`の`unshared_at`パラメータは、`datetime.date`ではなく`RFC3339-formatted <https://tools.ietf.org/html/rfc3339#section-5.8>` `unicode`文字列を取得するようになりました。ユーザーは`v1.x`から移行する場合、`date`オブジェクト自体ではなく`date.isoformat()`の値を渡すことができます。

* `Events.get_events(...)`では、イベントを表す`dict`のリストではなく、`Event`インスタンスのリストが返されるようになりました。`Event`は`Mapping`から継承されますが、`dict`と同じ機能をすべて備えているとは限りません。

  * `Events.get_events(...)`を使用していて、`Mapping`のリストではなく`dict`のリストを想定する場合、コードは影響を受けます。たとえば、`__setitem__` (`event['key'] = value`)、`update()`、`copy()`を使用する場合、またはコードが`Event`の`str`または`repr`に依存する場合がこれに該当します。`__getitem__` (`event['key']`)、`get()`、およびその他の`Mapping`メソッドの使用は影響を受けません。`Mapping`インスタンスでサポートされているメソッドについては、[Pythonドキュメント](https://docs.python.org/2.7/library/collections.html#collections-abstract-base-classes)を参照してください。

  * 移行: まだ`Event`を`dict`として扱う必要がある場合は、`BaseAPIJSONObject`の新しいプロパティ`response_object`を使用して、元の`dict`のディープコピーを取得できます。

* `LoggingNetwork`は削除されました。ログ記録の呼び出しは`DefaultNetwork`クラスから行われるようになりました。さらに、このクラスのログ記録形式の文字列は、これらの文字列をオーバーライドしたアプリケーションのログ記録を中断する形で変更されました。位置指定のプレースホルダではなく、キーワード形式のプレースホルダが使用されるようになりました。今後、カスタム形式の文字列はすべて、同じキーワード形式のプレースホルダを使用する必要があります。これは重大な変更ですが、キーワード形式のプレースホルダを使用すると、今後の変更は自動的に後方互換性が維持されるという利点があります (キーワードの変更/削除を伴う変更が行われない限り)。

* `File.update_contents()`と`File.update_contents_with_stream()`では、適切な内部JSON構造を持つ`File`オブジェクトが正しく返されるようになりました。以前は、ファイルJSONが`file['entries'][0]`内で非表示になっている`File`オブジェクトが返されていました。これはバグ修正ですが、このバグを処理するコードをすでに作成しているクライアントにとっては重大な変更になります。

* Box IDが同じでもタイプが異なる2つのオブジェクト (例: `File`と`Folder`) を`==`で比較した場合に、`False`が正しく返されるようになりました。

* 次のメソッドでは、単一のページではなく、返されたオブジェクトのコレクション全体の反復子が返されるようになりました。

  * `client.users()`
  * `client.groups()`
  * `client.search().query()`
  * `folder.get_items()`

  `folder.get_items()`が反復子を返すようになったため、`folder.get_items_limit_offset()`と`folder.get_items_marker()`は削除されました。マーカーベースのページングを`folder.get_items()`で使用するには、`use_marker=True`パラメータを渡し、オプションとして`marker`パラメータを指定して、コレクションのそのポイントからページングを開始します。

  さらに、`group.membership()`は名前が`group.get_memberships()`に変更され、メンバーシップオブジェクトの反復子を返すようになりました。このメソッドでは、ページング情報を含むタプルを返すオプションが提供されなくなりました。

* `Translator`クラスが変更されました。`translator.get(...)`は引き続き、渡された型に対応するオブジェクトクラスのコンストラクタを返しますが、`translator.translate(...)`は、`Session`とレスポンスオブジェクトを直接受け取り、変換されたオブジェクトを生成します。また、このメソッドは、ネストされたオブジェクトが見つかった場合にもそれらを変換します。

  * この変更により、`GroupMembership`にカスタムコンストラクタを使用する必要はなくなります。そのため、デフォルトの`BaseObject`コンストラクタが使用されるようになります。

## 機能

* 公開されているAPIエンドポイントとパラメータはすべて、SDKでサポートされるようになりました。

* オブジェクト変換システムの柔軟性が向上しました。

* 非グローバルの`Translator`インスタンスを作成できます。これにより、グローバルなデフォルトの`Translator`を拡張することも、拡張しないことも可能です。

* カスタム`Translator`で`BoxSession`を初期化できます。

* `BoxSession`または`Client`に関連付けられている`Translator`にカスタムサブクラスを登録できます。

* APIレスポンスのすべての変換で、グローバルなデフォルトの`Translator`を直接使用する代わりに、`BoxSession`で参照される`Translator`が使用されるようになりました。

* ネストされたオブジェクトは`translator.translate()`によって変換されるようになりました。

* `BoxSession`に対してリクエストメソッドのいずれかを呼び出すときに`auto_session_renewal`が`True`である場合、アクセストークンがないと、`BoxSession`は、リクエストを実行する_前に_トークンを更新します。これにより、APIコールが1回省略されます。

* 認証オブジェクトを閉じられるようになりました。これにより、これらのオブジェクトは新しいトークンのリクエストに使用できなくなります。また、既存のトークンも取り消されます (ただし、この機能は、`revoke=False`を渡すことで無効にできます)。加えて、終了時に認証オブジェクトを自動的に閉じる`closing()`コンテキストマネージャメソッドも導入されます。

* `JWTAuth`基本クラスに対するさまざまな機能強化:

* `authenticate_app_user()`メソッドは、管理対象ユーザーの認証にも使用できるようになったことを示すため、`authenticate_user()`という名前に変更されました。詳細については、メソッドの`docstring`を参照してください。`authenticate_app_user()`は、不要な後方非互換性が発生しないよう、`authenticate_user()`のエイリアスとなりました。

* `authenticate_user()`への`user`引数に、ユーザーID文字列と`User`インスタンスのいずれかを指定できるようになりました。以前は、`User`インスタンスを指定する必要がありました。

* コンストラクタは、オプションの`user`キーワード引数を受け取るようになりました。これには、ユーザーID文字列と`User`インスタンスのいずれかを指定できます。この引数が渡されると、`user`引数の値を渡さなくても`authenticate_user()`を呼び出すことができます。さらに重要なことに、これは、構築後すぐに`refresh()`を呼び出すことができることを意味します。その際、`authenticate_user()`を手動で呼び出す必要はありません。前述の`BoxSession`の`auto_session_renewal`機能の改善と組み合わせることで、最初のAPIコール時に、`JWTAuth`オブジェクトの認証を完全に自動で実行できます。

* コンストラクタは、RSA秘密キーの受け渡し方法を2つサポートしています。1つはファイルシステムパスを使用する方法 (既存の機能)、もう1つはキーデータを直接渡す方法 (新機能) です。`rsa_private_key_file_sys_path`パラメータは省略可能になりましたが、`rsa_private_key_file_sys_path`または`rsa_private_key_data`のどちらか1つを渡す必要があります。

* `JWTAuth`の`enterprise_id`引数を`None`にできることが文書化されました。

* `authenticate_instance()`は`enterprise`引数を受け取れるようになりました。これは、構築時に`None`が`enterprise_id`に渡された場合に、Enterpriseのサービスアカウントユーザーとして設定および認証するために使用できます。

* 有効期限が適切な期間に含まれないことが原因で失敗した認証は、Box APIレスポンスのDateヘッダーで指定された時間を使用して、自動的に再試行されるようになりました。これは、Box SDKを実行しているマシンのシステム時刻がBox APIサーバーのシステム時刻と一致しない場合に必然的に発生する可能性があります。

* `Event`クラスが追加されました。

* `metadata()`メソッドは`Folder`および`File`で使用できるように`Item`に移動されました。

* `BaseAPIJSONObject`基本クラス (すべてのAPIレスポンスオブジェクトのスーパークラス) が`__contains__`および`__iter__`をサポートするようになりました。これらの動作は`Mapping`と同じです。つまり、`__contains__`はオブジェクトのJSONキーをチェックし、`__iter__`はそのオブジェクトのすべてのキーを生成します。

* `RecentItem`クラスが追加されました。

* Box上でユーザーが最近アクセスした項目を取得する`client.get_recent_items()`が追加されました。

* 新しいコラボレーション作成時の`can_view_path`パラメータのサポートが追加されました。

* エンドポイントからのオブジェクトのページングをより直接的に管理できるように`BoxObjectCollection`とサブクラス`LimitOffsetBasedObjectCollection`および`MarkerBasedObjectCollection`が追加されました。これらのクラスは、エンドポイントへのリクエストを構成して結果を格納するロジックを管理し、結果に対して繰り返し適用される`__next__`を提供します。結果を1つずつ返すか結果の`Page`として返すオプションも提供されます。

* `downscope_token()`メソッドが`Client`クラスに追加されました。このメソッドによって生成されるトークンの権限は、指定されたスコープや、オプションとして指定された`File`または`Folder`に下げられています。

* 構成ファイルから`JWTAuth`を構成するためのメソッド`JWTAuth.from_settings_file`と`JWTAuth.from_settings_dictionary`が追加されました。

* `network_response`プロパティが`BoxOAuthException`に追加されました。

* APIの構成を`BoxSession`インスタンスごとに実行できるようになりました。

## その他

* `BoxAPIException`に追加情報が加えられました。
* `collaboration()`メソッドが`Client`に追加されました。
* クラス階層が変更されました。これまで、`BaseEndpoint`は、すべてのスマートオブジェクトの親である`BaseObject`の親でした。今後、`BaseObject`は`BaseEndpoint`と`BaseAPIJSONObject`両方の子になります。`BaseObject`は、REST APIに含まれるすべてのオブジェクトの親です。`BaseAPIJSONObject`の別のサブクラスである`APIJSONObject`は、APIエンドポイントから直接アクセスできない`Event`など、疑似スマートオブジェクトを表すために作成されました。
* `network_response_constructor`が`Network`インターフェースの省略可能なプロパティとして追加されました。実装では、このプロパティを一時的に無効にし、これを使用して`NetworkResponse`インスタンスを構築することをお勧めします。このように、サブクラスの実装では、このプロパティを再度一時的に無効にすることで、`NetworkResponse`の機能を拡張できます。このプロパティは、`DefaultNetwork`実装で定義および使用されます。
* レスポンスログは新しい`LoggingNetworkResponse`クラスに移動されます (これは前述の`network_response_constructor`プロパティによって可能になります)。レスポンス本文をログに記録するかどうかは、呼び出し元がコンテンツを読み取るかストリーミングするかに基づき、SDKで決定されます。
* `LoggingNetwork`からのリクエスト/レスポンスログに情報が追加されました。
* `LoggingNetwork`にリクエスト例外のログ記録が追加されました。
* `JWTAuth.refresh()`の戻り値が認証インターフェースの戻り値と正確に一致するようバグが修正されました (そのために、アクセストークンのみではなく、((アクセストークン), (更新トークンまたはなし)) のタプルを返します)。特に、`JWTAuth`オブジェクトを更新しようとしたときに常に発生していた`BoxSession`の例外が修正されます。
* `ExtendableEnumMeta.__dir__()`から発生していた例外が修正されました。
* `CPython` 3.6のサポート。
* 必要最低限のバージョンが6から1.9.0に引き上げられました。
