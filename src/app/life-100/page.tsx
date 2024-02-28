import Markdown from "@/components/Markdown";
import Link from "next/link";
import { GiProgression } from "react-icons/gi";

export default async function Page() {
  const lifeGoals = await getLifeGoals();

  return (
    <main className="bg-zinc-900 bg-hero-pattern bg-fixed bg-repeat-x bg-cover scales bg-blend-color-burn font-sans">
      <ul className="mx-auto lg:max-w-7xl py-40 space-y-4 px-20">
        {lifeGoals.map((goal, index) => {
          const elementId = encodeURIComponent(goal.title.toLowerCase());

          return (
            <li
              key={goal.id}
              id={elementId}
              className="group bg-zinc-950 bg-opacity-50 backdrop-blur-md hover:bg-opacity-100 border border-zinc-800 hover:border-primary-900 p-8 flex flex-col gap-6 transition-all duration-200 ease-in-out"
            >
              <p className="inline-flex items-center gap-4">
                <span className="text-zinc-500 group-hover:text-zinc-200 font-bold tracking-wider text-lg transition-all duration-200 ease-in-out font-manrope">
                  {`# ${index + 1}`}
                </span>

                <span
                  className={`relative px-2.5 py-0.5 rounded-full border text-sm font-medium tracking-wide ${
                    goal.status === "In Progress"
                      ? "border-primary-900 text-primary-700"
                      : "border-zinc-600 text-zinc-400"
                  }`}
                >
                  {goal.status === "In Progress" && (
                    <span className="flex absolute h-3 w-3 top-1/2 left-1.5 -mt-1.5 -mr-5 items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
                    </span>
                  )}
                  <span className={goal.status === "In Progress" ? "pl-4" : ""}>
                    {`${goal.category} ${goal.status}`}
                  </span>
                </span>

                {goal.accomplishedOn && (
                  <span className="text-sm px-2.5 py-0.5 text-zinc-400">
                    Accomplished on
                    <span className="pl-2 text-zinc-300 tracking-wider font-medium">
                      {goal.accomplishedOn}
                    </span>
                  </span>
                )}
              </p>

              <div className="flex">
                <Link
                  href={`/life-100#${elementId}`}
                  className="link-underline group-hover:link-underline"
                >
                  <h3 className="text-2xl text-zinc-300 group-hover:text-white font-bold font-manrope transition-all duration-200 ease-in-out">
                    {goal.title}
                  </h3>
                </Link>
              </div>

              <article
                className={goal.description ? "text-zinc-300" : "text-zinc-500"}
              >
                <Markdown>{goal.description || "_No description_"}</Markdown>
              </article>

              <span className="inline-flex items-center gap-2 text-zinc-400">
                <GiProgression /> {goal.comments.length} updates
              </span>

              {/* <div>
                {goal.comments.map((comment, i) => (
                  <Markdown key={i}>{comment.body}</Markdown>
                ))}
              </div> */}
            </li>
          );
        })}
      </ul>
    </main>
  );
}

const getLifeGoals = async () => {
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

  const { data } = (await res.json()) as {
    data: {
      node: {
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
              body?: string;
            };
          }>;
        };
      };
    };
  };

  return data.node.items.nodes.map((node) => {
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
  });
};
