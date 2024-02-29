export const getLife100Data = async () => {
  const githubToken = process.env.GITHUB_TOKEN;
  const projectID = process.env.LIFE100_GITHUB_PROJECT_ID;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${githubToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        {
          node(id: "${projectID}") {
              ... on ProjectV2 {
                title
                readme
                shortDescription
                updatedAt
                items(first: 100) {
                  nodes{
                    id
                    fieldValues(first: 8) {
                      nodes{                
                        ... on ProjectV2ItemFieldTextValue {
                          text
                          field {
                            ... on ProjectV2FieldCommon {
                              name
                            }
                          }
                        }
                        ... on ProjectV2ItemFieldDateValue {
                          date
                          field {
                            ... on ProjectV2FieldCommon {
                              name
                            }
                          }
                        }
                        ... on ProjectV2ItemFieldSingleSelectValue {
                          name
                          field {
                            ... on ProjectV2FieldCommon {
                              name
                            }
                          }
                        }
                      }              
                    }
                    content{              
                      ... on DraftIssue {
                        title
                        body
                      }
                      ...on Issue {
                        title
                        body
                        number
                        labels(first: 10) {
                          nodes{
                            name
                          }
                        }
                        comments(first: 10) {
                          nodes {
                            author {
                              login
                            }
                            body
                            createdAt
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
      `,
    }),
  });

  const json = (await res.json()) as {
    data: {
      node: {
        title: string;
        shortDescription: string;
        readme: string;
        updatedAt: string;
        items: {
          nodes: Array<{
            id: string;
            fieldValues: {
              nodes: Array<{
                name?: string;
                text?: string;
                date?: string;
                field?: {
                  name: string;
                };
              }>;
            };
            content: {
              title: string;
              body: string;
              labels?: {
                nodes: Array<{
                  name: string;
                }>;
              };
              number?: number;
              comments?: {
                nodes: Array<{
                  author: {
                    login: string;
                  };
                  body: string;
                  createdAt: string;
                }>;
              };
            };
          }>;
        };
      };
    };
  };

  // console.log(JSON.stringify(json, undefined, "  "));

  return {
    description: json.data.node.shortDescription,
    updatedAt: json.data.node.updatedAt,
    goals: json.data.node.items.nodes.map((node) => {
      const getField = (fieldName: string) => {
        return node.fieldValues.nodes.find(
          (fieldValue) => fieldValue.field?.name === fieldName
        );
      };
      return {
        id: node.id,
        title: node.content.title,
        description: node.content.body,
        status: getField("Status")?.name as
          | "Pending"
          | "In Progress"
          | "Accomplished",
        category: getField("Category")?.name,
        accomplishedOn: getField("Accomplished On")?.date,
        // __fields: node.fieldValues.nodes,
        labels: node.content.labels?.nodes.map((label) => label.name) ?? [],
        issue_no: node.content.number,
        comments:
          node.content.comments?.nodes
            .filter((comment) => comment.author.login === "rithviknishad")
            .map((comment) => ({ ...comment, author: comment.author.login })) ??
          [],
      };
    }),
  };
};

export type Life100Data = Awaited<ReturnType<typeof getLife100Data>>;
