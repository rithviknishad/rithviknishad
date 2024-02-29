import { relativeTime } from "@/utils/dayjs";

export default function Time({ time }: { time: string }) {
  return (
    <time dateTime={time} title={new Date(time).toString()}>
      {relativeTime(time)}
    </time>
  );
}
