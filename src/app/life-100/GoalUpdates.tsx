"use client";

import { Life100Data } from "@/app/life-100/functions";
import Markdown from "@/components/Markdown";
import Image from "next/image";
import { Suspense, useState } from "react";
import { MdOutlineViewTimeline } from "react-icons/md";

export default function GoalUpdates({
  goal,
}: {
  goal: Life100Data["goals"][number];
}) {
  const [show, setShow] = useState(false);

  return (
    <>
      <span
        className="cursor-pointer underline inline-flex items-center gap-2 text-zinc-400"
        onClick={() => setShow((v) => !v)}
      >
        <MdOutlineViewTimeline /> {show ? "Hide" : "Show"}{" "}
        {goal.comments.length} updates
      </span>
      {show && goal.comments.length && (
        <ul className="-mb-8 flow-root" role="list">
          {goal.comments.map((comment, idx) => (
            <li key={comment.createdAt}>
              <div className="relative pb-8">
                {idx !== goal.comments.length - 1 ? (
                  <span
                    className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-zinc-500"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex items-start space-x-3">
                  <div className="relative">
                    <Image
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-4 ring-zinc-800"
                      src={`https://avatars.githubusercontent.com/${comment.author}`}
                      height={40}
                      width={40}
                      alt={comment.author}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div>
                      <div className="text-sm space-x-1">
                        <span className="font-medium text-zinc-200">
                          {comment.author}
                        </span>
                        <span className="text-zinc-400">
                          updated {comment.createdAt}
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-zinc-100">
                      <article className="p-8 bg-zinc-900 rounded-xl max-h-96 overflow-auto">
                        <Suspense fallback="loading">
                          <Markdown>{comment.body}</Markdown>
                        </Suspense>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
