import { GoLinkExternal } from "react-icons/go";

export default function AboutCard({ about }) {
  const { timeline, icon, title, subtitle, description, link, now } = about;

  const child = (
    <li className="group flex items-start hover:dark:text-white lg:p-4 rounded-lg transition-all ease-out text-gray-800 dark:text-gray-400 text-base lg:hover:bg-opacity-75 lg:hover:bg-primary-900">
      <div className="min-w-fit text-2xl mt-5">{icon}</div>
      <div className="flex flex-col pl-3 gap-1">
        <span>
          <span className="relative inline-flex uppercase text-xs tracking-wider group-hover:font-bold lg:group-hover:text-sm transition-all ease-in-out">
            {timeline}
            {now && (
              <span className="flex absolute h-3 w-3 top-1/2 right-0 -mt-1.5 -mr-5 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
            )}
          </span>
        </span>
        <div className="flex items-center">
          <span className="font-bold tracking-wide lg:text-xl pr-3">
            {title}
          </span>
          {link && (
            <GoLinkExternal className="text-primary animate-pulse lg:text-xl" />
          )}
        </div>
        <span className="uppercase text-xs lg:text-sm tracking-wider">
          {subtitle}
        </span>
        {description && (
          <span className="text-gray-800 dark:text-gray-400">
            {description}
          </span>
        )}
      </div>
    </li>
  );

  if (!link) return child;

  return (
    <a
      className={link ? "cursor-pointer" : "cursor-default"}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {child}
    </a>
  );
}
