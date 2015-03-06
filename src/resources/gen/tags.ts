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
  "name": "tag",
  "comment": "A _tag_ is a label that can be attached to any task in Asana. It exists in a\nsingle workspace or organization.\n\nTags have some metadata associated with them, but it is possible that we will\nsimplify them in the future so it is not encouraged to rely too heavily on it.\nUnlike tags, tags do not provide any ordering on the tasks they\nare associated with.\n",
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
      "path": "/tags",
      "params": [
        {
          "name": "workspace",
          "type": "Id",
          "example_values": [
            "1331"
          ],
          "comment": "The workspace or organization to create the tag in.",
          "required": true
        }
      ],
      "comment": "Creates a new tag in a workspace or organization.\n\nEvery tag is required to be created in a specific workspace or\norganization, and this cannot be changed once set. Note that you can use\nthe `workspace` parameter regardless of whether or not it is an\norganization.\n\nReturns the full record of the newly created tag.\n"
    },
    {
      "name": "createInWorkspace",
      "method": "POST",
      "path": "/workspaces/%d/tags",
      "params": [
        {
          "name": "workspace",
          "type": "Id",
          "example_values": [
            "1331"
          ],
          "comment": "The workspace or organization to create the tag in.",
          "required": true
        }
      ],
      "comment": "Creates a new tag in a workspace or organization.\n\nEvery tag is required to be created in a specific workspace or\norganization, and this cannot be changed once set. Note that you can use\nthe `workspace` parameter regardless of whether or not it is an\norganization.\n\nReturns the full record of the newly created tag.\n"
    },
    {
      "name": "findById",
      "method": "GET",
      "path": "/tags/%d",
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
      "path": "/tags/%d",
      "params": [
        {
          "name": "tag",
          "type": "Id",
          "example_values": [
            "11235"
          ],
          "comment": "The tag to update.",
          "required": true
        }
      ],
      "comment": "Updates the properties of a tag. Only the fields provided in the `data`\nblock will be updated; any unspecified fields will remain unchanged.\n\nWhen using this method, it is best to specify only those fields you wish\nto change, or else you may overwrite changes made by another user since\nyou last retrieved the task.\n\nReturns the complete updated tag record.\n"
    },
    {
      "name": "delete",
      "method": "DELETE",
      "path": "/tags/%d",
      "params": [
        {
          "name": "tag",
          "type": "Id",
          "example_values": [
            "11235"
          ],
          "comment": "The tag to delete.",
          "required": true
        }
      ],
      "comment": "A specific, existing tag can be deleted by making a DELETE request\non the URL for that tag.\n\nReturns an empty data record.\n"
    },
    {
      "name": "findAll",
      "method": "GET",
      "path": "/tags",
      "collection": true,
      "comment": "Returns the compact tag records for some filtered set of tags.\nUse one or more of the parameters provided to filter the tags returned.\n",
      "params": [
        {
          "name": "workspace",
          "type": "Id",
          "example_values": [
            "1331"
          ],
          "comment": "The workspace or organization to filter tags on."
        },
        {
          "name": "team",
          "type": "Id",
          "example_values": [
            "14916"
          ],
          "comment": "The team to filter tags on."
        },
        {
          "name": "archived",
          "type": "Boolean",
          "example_values": [
            "false"
          ],
          "comment": "Only return tags whose `archived` field takes on the value of\nthis parameter.\n"
        }
      ]
    },
    {
      "name": "findByWorkspace",
      "method": "GET",
      "path": "/workspaces/%d/tags",
      "params": [
        {
          "name": "workspace",
          "type": "Id",
          "example_values": [
            "1331"
          ],
          "comment": "The workspace or organization to find tags in.",
          "required": true
        }
      ],
      "collection": true,
      "comment": "Returns the compact tag records for all tags in the workspace.\n"
    }
  ]
};
export = json;
