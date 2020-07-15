---
applied_at: '2018-11-01'
applies_to:
  - python
  - sdks
is_impactful: true
is_new_feature: true
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
---
# Python SDK `v2.0.0` release

## Breaking Changes

- Python 2.6 is no longer supported.
- Python 3.3 is no longer supported.
- `client.search()` now returns a `Search` object that exposes a `query()` method to call the Search API.
  Use `client.search().query(**search_params)` instead of `client.search(**search_params)`.
- `client.get_memberships(...)` has a change in signature. The limit and offset parameters have swapped positions to keep
  consistency with the rest of the SDK.
- `client.groups(...)` has been changed to `client.get_groups`. The limit and offset parameters have swapped positions.
- The `unshared_at` parameter for `item.create_shared_link(...)` and `file.get_shared_link_download_url(...)`
  now takes an `RFC3339-formatted <https://tools.ietf.org/html/rfc3339#section-5.8>` `unicode` string instead of a
  `datetime.date`.  Users migrating from `v1.x` can pass the value of `date.isoformat()` instead of the `date`
  object itself.
- `Events.get_events(...)` now returns a list of `Event` instances rather than a list of `dict`
  representing events.  `Event` inherits from `Mapping` but will not have all the same capabilities as
  `dict`.

  - Your code is affected if you use `Events.get_events(...)` and expect a list of `dict` rather than a list of
    `Mapping`.  For example, if you use `__setitem__` (`event['key'] = value`), `update()`, `copy()`, or
    if your code depends on the `str` or `repr` of the `Event`.  Use of `__getitem__` (`event['key']`),
    `get()`, and other `Mapping` methods is unaffected.  See the [Python
    documentation](https://docs.python.org/2.7/library/collections.html#collections-abstract-base-classes) for methods supported on
    `Mapping` instances.

  - Migration: If you still need to treat an `Event` as a `dict`, you can get a deepcopy of the original `dict`
    using the new property on `BaseAPIJSONObject`, `response_object`.

- `LoggingNetwork` has been removed. Logging calls are now made from the `DefaultNetwork` class. In addition,
  the logging format strings in this class have changed in a way that
  will break logging for any applications that have overridden any of these
  strings. They now use keyword format placeholders instead of positional
  placeholders. All custom format strings will now have to use the same keyword
  format placeholders. Though this is a breaking change, the good news is that
  using keyword format placeholders means that any future changes will be
  automatically backwards-compatible (as long as there aren't any changes to
  change/remove any of the keywords).

- `File.update_contents()` and `File.update_contents_with_stream()` now
  correctly return a `File` object with the correct internal JSON structure.
  Previously it would return a `File` object where the file JSON is hidden
  inside `file['entries'][0]`. This is a bug fix, but will be a breaking
  change for any clients that have already written code to handle the bug.

- Comparing two objects (e.g. a `File` and a `Folder`) that have the same Box ID but different types with `==`
  will now correctly return `False`.

- The following methods now return iterators over the entire collection of returned objects, rather than
  a single page:

  - `client.users()`
  - `client.groups()`
  - `client.search().query()`
  - `folder.get_items()`

  Since `folder.get_items()` now returns an iterator, `folder.get_items_limit_offset()` and
  `folder.get_items_marker()` have been removed.  To use marker based paging with `folder.get_items()`,
  pass the `use_marker=True` parameter and optionally specify a `marker` parameter to begin paging from that
  point in the collection.

  Additionally, `group.membership()` has been renamed to `group.get_memberships()`, and returns an iterator of
  membership objects.  This method no longer provides the option to return tuples with paging information.

- The `Translator` class has been reworked; `translator.get(...)` still returns the constructor for the object class
  corresponding to the passed in type, but `translator.translate(...)` now takes a `Session` and response object
  directly and produces the translated object.  This method will also translate any nested objects found.

  - This change obviates the need for `GroupMembership` to have a custom constructor; it now uses the default
    `BaseObject` constructor.

## Features

- All publicly documented API endpoints and parameters should now be supported by the SDK
- Added more flexibility to the object translation system:

- Can create non-global `Translator` instances, which can extend or
not-extend the global default `Translator`.
- Can initialize `BoxSession` with a custom `Translator`.
- Can register custom subclasses on the `Translator` which is associated
with a `BoxSession` or a `Client`.
- All translation of API responses now use the `Translator` that is
referenced by the `BoxSession`, instead of directly using the global
default `Translator`.
- Nested objects are now translated by `translator.translate()`

- When the `auto_session_renewal` is `True` when calling any of the request
methods on `BoxSession`, if there is no access token, `BoxSession` will
renew the token _before_ making the request. This saves an API call.
- Auth objects can now be closed, which prevents them from being used to
request new tokens. This will also revoke any existing tokens (though that
feature can be turned off by passing `revoke=False`). Also introduces a
`closing()` context manager method, which will auto-close the auth object
on exit.
- Various enhancements to the `JWTAuth` baseclass:

- The `authenticate_app_user()` method is renamed to
`authenticate_user()`, to reflect that it may now be used to authenticate
managed users as well. See the method `docstring` for details.
`authenticate_app_user()` is now an alias of `authenticate_user()`, in
order to not introduce an unnecessary backwards-incompatibility.
- The `user` argument to `authenticate_user()` may now be either a user
ID string or a `User` instance. Before it had to be a `User` instance.
- The constructor now accepts an optional `user` keyword argument, which
may be a user ID string or a `User` instance. When this is passed,
`authenticate_user()` and can be called without passing a value for the
`user` argument. More importantly, this means that `refresh()` can be
called immediately after construction, with no need for a manual call to
`authenticate_user()`. Combined with the aforementioned improvement to
the `auto_session_renewal` functionality of `BoxSession`, this means
that authentication for `JWTAuth` objects can be done completely
automatically, at the time of first API call.
- The constructor now supports passing the RSA private key in two different
ways: by file system path (existing functionality), or by passing the key
data directly (new functionality). The `rsa_private_key_file_sys_path`
parameter is now optional, but it is required to pass exactly one of
`rsa_private_key_file_sys_path` or `rsa_private_key_data`.
- Document that the `enterprise_id` argument to `JWTAuth` is allowed to
be `None`.
- `authenticate_instance()` now accepts an `enterprise` argument, which
can be used to set and authenticate as the enterprise service account user,
if `None` was passed for `enterprise_id` at construction time.
- Authentications that fail due to the expiration time not falling within the
correct window of time are now automatically retried using the time given
in the Date header of the Box API response. This can happen naturally when
the system time of the machine running the Box SDK doesn't agree with the
system time of the Box API servers.

- Added an `Event` class.
- Moved `metadata()` method to `Item` so it's now available for `Folder`
as well as `File`.
- The `BaseAPIJSONObject` baseclass (which is a superclass of all API
response objects) now supports `__contains__` and `__iter__`. They behave
the same as for `Mapping`. That is, `__contains__` checks for JSON keys
in the object, and `__iter__` yields all of the object's keys.

- Added a `RecentItem` class.
- Added `client.get_recent_items()` to retrieve a user's recently accessed items on Box.
- Added support for the `can_view_path` parameter when creating new collaborations.
- Added `BoxObjectCollection` and subclasses `LimitOffsetBasedObjectCollection` and
`MarkerBasedObjectCollection` to more directly manage paging of objects from an endpoint.
These classes manage the logic of constructing requests to an endpoint and storing the results,
then provide `__next__` to iterate over the results. The option to return results one
by one or as a `Page` of results is also provided.
- Added a `downscope_token()` method to the `Client` class. This generates a token that
has its permissions reduced to the provided scopes and for the optionally provided
`File` or `Folder`.
- Added methods for configuring `JWTAuth` from config file: `JWTAuth.from_settings_file` and
`JWTAuth.from_settings_dictionary`.
- Added `network_response` property to `BoxOAuthException`.
- API Configuration can now be done per `BoxSession` instance.

## Other

- Added extra information to `BoxAPIException`.
- Added `collaboration()` method to `Client`.
- Reworked the class hierarchy.  Previously, `BaseEndpoint` was the parent of `BaseObject` which was the parent
of all smart objects.  Now `BaseObject` is a child of both `BaseEndpoint` and `BaseAPIJSONObject`.
`BaseObject` is the parent of all objects that are a part of the REST API.  Another subclass of
`BaseAPIJSONObject`, `APIJSONObject`, was created to represent pseudo-smart objects such as `Event` that are not
directly accessible through an API endpoint.
- Added `network_response_constructor` as an optional property on the
`Network` interface. Implementations are encouraged to override this
property, and use it to construct `NetworkResponse` instances. That way,
subclass implementations can extend the functionality of the
`NetworkResponse`, by re-overriding this property. This property is defined
and used in the `DefaultNetwork` implementation.
- Move response logging to a new `LoggingNetworkResponse` class (which is
made possible by the aforementioned `network_response_constructor`
property). Now the SDK decides whether to log the response body, based on
whether the caller reads or streams the content.
- Add more information to the request/response logs from `LoggingNetwork`.
- Add logging for request exceptions in `LoggingNetwork`.
- Bugfix so that the return value of `JWTAuth.refresh()` correctly matches
that of the auth interface (by returning a tuple of
((access token), (refresh token or None)), instead of only the access token).
In particular, this fixes an exception in `BoxSession` that always occurred
when it tried to refresh any `JWTAuth` object.
- Fixed an exception that was being raised from `ExtendableEnumMeta.__dir__()`.
- `CPython` 3.6 support.
- Increased required minimum version of six to 1.9.0.