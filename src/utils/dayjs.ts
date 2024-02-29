import dayjs from "dayjs";
import dayjsRelativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(dayjsRelativeTime);

export const relativeTime = (time: string) => {
  return `${dayjs(time).fromNow()}`;
};

export default dayjs;
