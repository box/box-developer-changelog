---
applied_at: "2021-09-01"
applies_to: 
- api
is_impactful: false
is_new_feature: true
collapse: true
show_excerpt: true
release_source_url: ''
---

# Classification Name Field now in Events API

If a `classification` exists on content, the events[events] API will now
return the `classification` `name` field in the response object.

<!-- more -->

* The updates to the event source response object can be
seen [here][event-source]
* A new [guide page][event-triggers] has been added to show examples for an
event triggered by a user source and an event source.

Below is an example of the response before and after the enhancement. Please
note that if a classification doesn't exist, the before example will still
be returned.

Before:

```js
{
  "source": {
    "item_type": "file",
    "item_id": "8903212345",
    "item_name": "example.docx",
    "parent": {
      "type": "folder",
      "name": "All Files",
      "id": "0"
    },
    "owned_by": {
      "type": "user",
      "id": "11446498",
      "name": "Aaron Levie",
      "login": "notifications@example.com"
    }
  }
}
```

After: 

```js
{
  "source": {
    "item_type": "file",
    "item_id": "8903212345",
    "item_name": "example.docx",
    "parent": {
      "type": "folder",
      "name": "All Files",
      "id": "0"
    },
    "owned_by": {
      "type": "user",
      "id": "11446498",
      "name": "Aaron Levie",
      "login": "notifications@example.com"
    },
    "classification": {
      "name": "Top Secret"
    }
  }
}
```

## Where to get support

Should you have any issues or need further guidance, please post a request to
our [developer forum][forum] for any help needed.

[forum]: https://support.box.com/hc/en-us/community/topics/360001932973-Platform-and-Developer-Forum
[events]: https://developer.box.com/reference/get-events/
[event-source]: https://developer.box.com/reference/resources/event-source/
[event-triggers]: https://developer.box.com/guides/events/event-triggers/