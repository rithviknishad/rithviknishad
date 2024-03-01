import GoalUpdates from "@/app/life-100/GoalUpdates";
import { getLife100Data } from "@/app/life-100/functions";
import Markdown from "@/components/Markdown";
import Time from "@/components/Time";
import Link from "next/link";
import { AiOutlineLoading } from "react-icons/ai";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

export const revalidate = 1800;

export default async function Page() {
  const life100 = await getLife100Data();

  return (
    <main className="bg-zinc-950 font-sans py-10 lg:py-40">
      <div className="mx-auto lg:max-w-7xl px-5 lg:px-20 space-y-8">
        <div className="grid grid-cols-1 space-y-8 lg:space-y-0 lg:grid-cols-2">
          <div className="space-y-2">
            <p className="text-lg">{life100.description}</p>
            <p className="text-sm text-zinc-400">
              last updated <Time time={life100.updatedAt} />
            </p>
          </div>

          <div className="lg:text-end space-y-2">
            <p className="space-x-4 text-white text-3xl tracking-wider font-bold">
              {life100.goals.filter((g) => g.status === "Accomplished").length}{" "}
              <span className="text-zinc-500 px-2 tracking-normal">of</span> 100
            </p>
            <p className="text-zinc-400">
              {life100.goals.length} goals created so far
            </p>
          </div>
        </div>
        <ul className="space-y-4">
          {life100.goals.map((goal, index) => {
            const elementId = encodeURIComponent(goal.title.toLowerCase());

            return (
              <li
                key={goal.id}
                id={elementId}
                className="group bg-zinc-900 bg-opacity-50 backdrop-blur-md hover:bg-opacity-100 border border-zinc-800 hover:border-primary-700 p-4 lg:p-8 flex flex-col gap-4 lg:gap-6 transition-all duration-200 ease-in-out"
              >
                <p className="flex flex-wrap items-center gap-x-2 lg:gap-x-4 gap-y-1.5">
                  <div className="block lg:hidden">
                    <GoalStatusCheckBox status={goal.status} />
                  </div>
                  <span className="text-zinc-500 group-hover:text-zinc-200 font-bold lg:tracking-wider text-lg transition-all duration-200 ease-in-out font-manrope">
                    {`# ${index + 1}`}
                  </span>

                  <span
                    className={`relative px-2.5 py-0.5 rounded-full border text-xs lg:text-sm tracking-wide animate-circular-shadow ${
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
                    <span
                      className={goal.status === "In Progress" ? "pl-4" : ""}
                    >
                      {`${goal.category} ${goal.status}`}
                    </span>
                  </span>

                  {goal.accomplishedOn && (
                    <span className="text-sm lg:px-2.5 lg:py-0.5 text-zinc-400">
                      Accomplished
                      <span className="pl-2 text-zinc-300 tracking-wider font-medium">
                        <Time time={goal.accomplishedOn} />
                      </span>
                    </span>
                  )}
                </p>

                <div className="flex items-center gap-4">
                  <div className="hidden lg:block">
                    <GoalStatusCheckBox status={goal.status} />
                  </div>
                  <Link
                    href={`/life-100#${elementId}`}
                    // className="link-underline group-hover:link-underline"
                  >
                    <h3 className="text-base lg:text-2xl text-zinc-300 group-hover:text-white font-bold font-manrope transition-all duration-200 ease-in-out">
                      {goal.title}
                    </h3>
                  </Link>
                </div>

                <article
                  className={
                    goal.description ? "text-zinc-300" : "text-zinc-500"
                  }
                >
                  <Markdown>{goal.description || "_No description_"}</Markdown>
                </article>

                {!!goal.comments.length && <GoalUpdates goal={goal} />}
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}

const GoalStatusCheckBox = ({
  status,
}: {
  status: "Pending" | "In Progress" | "Accomplished";
}) => {
  if (status === "Accomplished") {
    return (
      <ImCheckboxChecked className="text-primary-500 shadow-xl shadow-current text-sm lg:text-lg" />
    );
  }

  return <ImCheckboxUnchecked className="text-zinc-500 text-sm lg:text-lg" />;
};
