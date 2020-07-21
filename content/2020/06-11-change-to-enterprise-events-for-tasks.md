---
applied_at: '2020-06-11'
applies_to:
  - api
is_impactful: true
is_new_feature: true
---

# Change to enterprise events for tasks

Starting today, the [enterprise event stream](g://events/for-enterprise/) will
begin producing new task and task assignment events, and some existing task
events will return additional fields.

<!-- more -->

## New events

* A new `TASK_UPDATE` event is triggered when a task is updated
* A new `TASK_ASSIGNMENT_DELETE` event is triggered when a task is unassigned
  from a user

## Updated events

### Changes to `TASK_CREATE`

When a task is created, the event now includes the task's ID (`task.id`), the ID
of the user who created the task (`task.created_by.id`), the task's description
(`task.message`), and the optional due date of the task  (`task.due_date`)
within the `additional_details` object.

```json
"additional_details": {
  "task": {
    "id": "1234567",
    "due_at": "2020-07-06T10:49:44-07:00",
    "message": "task description",
    "created_by": {
      "id": 123456,
      "login": "email@example.com"
    },
    ...
  }
}
```

### Changes to `TASK_ASSIGNMENT_CREATE` and `TASK_ASSIGNMENT_UPDATE`

When a task assignment is created or updated, the event now includes the task's
ID (`task.id`), the ID of the assigned user (`task_assignment.assigned_to.id`)
and their login (`task_assignment.assigned_to.login`), the task's description
(`task.message`), and the optional due date of the task (`task.due_date`) within
the `additional_details` object.

```json
"additional_details": {
  "task": {
    "id": "1234567",
    "created_by": {
      "id": 12345,
      "login": "email@example.com"
    }
  },
  "task_assignment": {
    "assigned_to": {
      "id": 12346,
      "login": "email+2@example.com"
    },
    "status": "NOT_STARTED",
    "message": "assignee message"
  },
  ...
}
```

See the [enterprise events](g://events/for-enterprise/) documentation
for more information on other event types.