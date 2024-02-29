import GoalUpdates from "@/app/life-100/GoalUpdates";
import { getLife100Data } from "@/app/life-100/functions";
import Markdown from "@/components/Markdown";
import Link from "next/link";
import { AiOutlineLoading } from "react-icons/ai";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { MdOutlineViewTimeline } from "react-icons/md";

export default async function Page() {
  const life100 = await getLife100Data();

  return (
    <main className="bg-zinc-900 font-sans py-40">
      <div className="mx-auto lg:max-w-7xl px-20">
        <span className="text-lg">{life100.description}</span>
      </div>
      <ul className="mx-auto lg:max-w-7xl mt-12 space-y-4 px-20">
        {life100.goals.map((goal, index) => {
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
                  className={`relative px-2.5 py-0.5 rounded-full border text-sm tracking-wide animate-circular-shadow ${
                    goal.status === "In Progress"
                      ? "border-primary-900 text-primary-700"
                      : "border-zinc-600 text-zinc-400"
                  }`}
                >
                  {goal.status === "In Progress" && (
                    <span className="flex absolute h-3 w-3 top-1/2 left-1.5 -mt-1.5 -mr-5 items-center justify-center">
                      <AiOutlineLoading className="absolute text-sm animate-spin" />
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

              <div className="flex items-center gap-4">
                {goal.status === "Accomplished" && (
                  <ImCheckboxChecked className="text-primary-500 shadow-xl shadow-current" />
                )}
                {goal.status === "In Progress" && (
                  <ImCheckboxUnchecked className="text-zinc-500 text-lg" />
                )}
                {goal.status === "Pending" && (
                  <ImCheckboxUnchecked className="text-zinc-500 text-lg" />
                )}

                <Link
                  href={`/life-100#${elementId}`}
                  // className="link-underline group-hover:link-underline"
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

              {goal.comments.length ? (
                <GoalUpdates goal={goal} />
              ) : (
                <span className="cursor-pointer inline-flex items-center gap-2 text-zinc-400">
                  <MdOutlineViewTimeline /> No updates
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
