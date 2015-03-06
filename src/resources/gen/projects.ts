/* tslint:disable */

// TODO: Add type information from asana_json.d.ts
var json = {
  "templates": [
    {
      "template": {
        "value": 200,
        "comment": "Success.\n"
      }
    },
    {
      "template": {
        "type": "String",
        "example_values": [
          "'2012-02-22T02:06:58.158Z'",
          "now"
        ]
      }
    },
    {
      "template": [
        {
          "type": "Boolean",
          "example_values": [
            "false"
          ]
        }
      ]
    },
    {
      "template": {
        "type": "Id",
        "example_values": [
          "12345"
        ]
      }
    },
    {
      "template": {
        "type": "Array",
        "example_values": [
          "[133713, 184253]"
        ]
      }
    },
    {
      "template": {
        "type": "Id",
        "example_values": [
          "13579"
        ],
        "comment": "Globally unique identifier for the project.\n"
      }
    },
    {
      "template": {
        "type": "Id",
        "example_values": [
          "11235"
        ],
        "comment": "Globally unique identifier for the tag.\n"
      }
    },
    {
      "template": {
        "type": "Id",
        "example_values": [
          "124816"
        ],
        "comment": "Globally unique identifier for the task.\n"
      }
    },
    {
      "template": {
        "type": "Id",
        "example_values": [
          "14641"
        ],
        "comment": "Globally unique identifier for the user.\n"
      }
    },
    {
      "template": {
        "type": "Id",
        "example_values": [
          "1331"
        ],
        "comment": "Globally unique identifier for the workspace or organization.\n"
      }
    },
    {
      "template": {
        "type": "Id",
        "example_values": [
          "12357"
        ],
        "comment": "Globally unique identifier for the attachment.\n"
      }
    },
    {
      "template": {
        "type": "Id",
        "example_values": [
          "14916"
        ],
        "comment": "Globally unique identifier for the team.\n"
      }
    },
    {
      "template": {
        "type": "Id",
        "example_values": [
          "182764"
        ],
        "comment": "Globally unique identifier for the team.\n"
      }
    },
    {
      "template": [
        {
          "type": "Id",
          "example_values": [
            "1234"
          ],
          "read_only": true,
          "comment": "Globally unique identifier for this object.\n"
        }
      ]
    },
    {
      "template": [
        {
          "type": "String",
          "example_values": [
            "'gsanchez@example.com'"
          ]
        }
      ]
    },
    {
      "template": [
        {
          "type": "Boolean",
          "example_values": [
            "false"
          ]
        }
      ]
    },
    {
      "template": [
        {
          "type": "User",
          "example_values": [
            "{ id: 1234, name: 'Tim Bizarro' }",
            "null"
          ]
        }
      ]
    },
    {
      "template": {
        "type": "Enum",
        "example_values": [
          "'upcoming'"
        ],
        "values": [
          {
            "name": "inbox",
            "comment": "In the inbox."
          },
          {
            "name": "later",
            "comment": "Scheduled for _later_."
          },
          {
            "name": "upcoming",
            "comment": "Scheduled for _upcoming_."
          },
          {
            "name": "today",
            "comment": "Scheduled for _today_."
          }
        ]
      }
    },
    {
      "template": {
        "method": "POST",
        "path": "/tasks/%d/stories",
        "params": [
          {
            "name": "task",
            "type": "Id",
            "example_values": [
              "124816"
            ],
            "comment": "Globally unique identifier for the task.\n",
            "required": true
          },
          {
            "name": "text",
            "type": "String",
            "required": true,
            "comment": "The plain text of the comment to add."
          }
        ],
        "comment": "Adds a comment to a task. The comment will be authored by the\ncurrently authenticated user, and timestamped when the server receives\nthe request.\n\nReturns the full record for the new story added to the task.\n"
      }
    }
  ],
  "name": "project",
  "comment": "A _project_ represents a prioritized list of tasks in Asana. It exists in a\nsingle workspace or organization and is accessible to a subset of users in\nthat workspace or organization, depending on its permissions.\n\nProjects in organizations are shared with a single team. You cannot currently\nchange the team of a project via the API. Non-organization workspaces do not\nhave teams and so you should not specify the team of project in a\nregular workspace.\n",
  "properties": [
    {
      "name": "id",
      "type": "Id",
      "example_values": [
        "1234"
      ],
      "read_only": true,
      "comment": "Globally unique identifier for this object.\n"
    }
  ],
  "actions": [
    {
      "name": "create",
      "method": "POST",
      "path": "/projects",
      "params": [
        {
          "name": "workspace",
          "type": "Id",
          "example_values": [
            "1331"
          ],
          "comment": "The workspace or organization to create the project in.",
          "required": true
        },
        {
          "name": "team",
          "type": "Id",
          "example_values": [
            "14916"
          ],
          "comment": "If creating in an organization, the specific team to create the\nproject in.\n"
        }
      ],
      "comment": "Creates a new project in a workspace or team.\n\nEvery project is required to be created in a specific workspace or\norganization, and this cannot be changed once set. Note that you can use\nthe `workspace` parameter regardless of whether or not it is an\norganization.\n\nIf the workspace for your project _is_ an organization, you must also\nsupply a `team` to share the project with.\n\nReturns the full record of the newly created project.\n"
    },
    {
      "name": "createInWorkspace",
      "method": "POST",
      "path": "/workspaces/%d/projects",
      "params": [
        {
          "name": "workspace",
          "type": "Id",
          "example_values": [
            "1331"
          ],
          "comment": "The workspace or organization to create the project in.",
          "required": true
        }
      ],
      "comment": "If the workspace for your project _is_ an organization, you must also\nsupply a `team` to share the project with.\n\nReturns the full record of the newly created project.\n"
    },
    {
      "name": "createInTeam",
      "method": "POST",
      "path": "/teams/%d/projects",
      "params": [
        {
          "name": "team",
          "type": "Id",
          "example_values": [
            "14916"
          ],
          "comment": "The team to create the project in.",
          "required": true
        }
      ],
      "comment": "Creates a project shared with the given team.\n\nReturns the full record of the newly created project.\n"
    },
    {
      "name": "findById",
      "method": "GET",
      "path": "/projects/%d",
      "params": [
        {
          "name": "task",
          "type": "Id",
          "example_values": [
            "124816"
          ],
          "comment": "The task to get.",
          "required": true
        }
      ],
      "comment": "Returns the complete task record for a single task.\n"
    },
    {
      "name": "update",
      "method": "PUT",
      "path": "/projects/%d",
      "params": [
        {
          "name": "project",
          "type": "Id",
          "example_values": [
            "13579"
          ],
          "comment": "The project to update.",
          "required": true
        }
      ],
      "comment": "A specific, existing project can be updated by making a PUT request on the\nURL for that project. Only the fields provided in the `data` block will be\nupdated; any unspecified fields will remain unchanged.\n\nWhen using this method, it is best to specify only those fields you wish\nto change, or else you may overwrite changes made by another user since\nyou last retrieved the task.\n\nReturns the complete updated project record.\n"
    },
    {
      "name": "delete",
      "method": "DELETE",
      "path": "/projects/%d",
      "params": [
        {
          "name": "project",
          "type": "Id",
          "example_values": [
            "13579"
          ],
          "comment": "The project to delete.",
          "required": true
        }
      ],
      "comment": "A specific, existing project can be deleted by making a DELETE request\non the URL for that project.\n\nReturns an empty data record.\n"
    },
    {
      "name": "findAll",
      "method": "GET",
      "path": "/projects",
      "collection": true,
      "comment": "Returns the compact project records for some filtered set of projects.\nUse one or more of the parameters provided to filter the projects returned.\n",
      "params": [
        {
          "name": "workspace",
          "type": "Id",
          "example_values": [
            "1331"
          ],
          "comment": "The workspace or organization to filter projects on."
        },
        {
          "name": "team",
          "type": "Id",
          "example_values": [
            "14916"
          ],
          "comment": "The team to filter projects on."
        },
        {
          "name": "archived",
          "type": "Boolean",
          "example_values": [
            "false"
          ],
          "comment": "Only return projects whose `archived` field takes on the value of\nthis parameter.\n"
        }
      ]
    },
    {
      "name": "findByWorkspace",
      "method": "GET",
      "path": "/workspaces/%d/projects",
      "params": [
        {
          "name": "workspace",
          "type": "Id",
          "example_values": [
            "1331"
          ],
          "comment": "The workspace or organization to find projects in.",
          "required": true
        },
        {
          "name": "archived",
          "type": "Boolean",
          "example_values": [
            "false"
          ],
          "comment": "Only return projects whose `archived` field takes on the value of\nthis parameter.\n"
        }
      ],
      "collection": true,
      "comment": "Returns the compact project records for all projects in the workspace.\n"
    },
    {
      "name": "findByTeam",
      "method": "GET",
      "path": "/teams/%d/projects",
      "params": [
        {
          "name": "team",
          "type": "Id",
          "example_values": [
            "14916"
          ],
          "comment": "The team to find projects in.",
          "required": true
        },
        {
          "name": "archived",
          "type": "Boolean",
          "example_values": [
            "false"
          ],
          "comment": "Only return projects whose `archived` field takes on the value of\nthis parameter.\n"
        }
      ],
      "collection": true,
      "comment": "Returns the compact project records for all projects in the team.\n"
    }
  ]
};
export = json;
