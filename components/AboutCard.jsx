import { GoLinkExternal } from "react-icons/go";

export default function AboutCard({ about }) {
  const { timeline, icon, title, subtitle, description, link } = about;

  return (
    <a
      className={link ? "cursor-pointer" : "cursor-default"}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <li className="group flex items-start hover:dark:text-white lg:p-4 rounded-lg transition-all ease-out text-gray-800 dark:text-gray-400 text-base hover:bg-opacity-75 hover:bg-primary-900">
        <div className="min-w-fit text-2xl mt-5">{icon}</div>
        <div className="flex flex-col pl-3 gap-1">
          <span className="uppercase text-xs tracking-wider group-hover:font-bold group-hover:text-sm transition-all ease-in-out">
            {timeline}
          </span>
          <div className="flex justify-between items-center">
            <span className="font-bold tracking-wide lg:text-xl">{title}</span>
            {link && (
              <GoLinkExternal className="text-primary group-hover:animate-pulse lg:text-xl" />
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
    </a>
  );
}
