import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { ProjectLinkButton } from "./Buttons";

export default function ProjectCard({ project, highlight = false }) {
  const {
    title,
    image,
    link,
    timeline,
    description,
    repository,
    otherLinks,
    tags,
  } = project;

  const gitLink = {
    label: highlight ? "Repository" : "",
    icon: <BsGithub />,
    url: repository,
  };

  return (
    <div
      className={
        highlight
          ? "group lg:flex items-center mt-8 mb-16 gap-12"
          : "group items-center mt-8 mb-16 gap-12"
      }
    >
      <div className="w-full relative overflow-hidden rounded-3xl">
        <Image src={image} alt={title} priority={true} />
      </div>
      <div className={highlight ? "w-full mt-4 lg:mt-0" : "w-full mt-4"}>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-bold text-gray-900 mt-4 mb-2 leading-tight dark:text-gray-100 link-underline group-hover:link-underline hover:cursor-pointer"
        >
          {title}
        </a>
        <div className="flex justify-start gap-6 my-3 text-sm text-gray-500 dark:text-gray-400">
          <span className="relative inline-flex">
            <span className="text-base">{timeline}</span>
            {timeline.includes("now") && (
              <span className="flex absolute h-3 w-3 top-1/2 right-0 -mt-1.5 -mr-5 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
            )}
          </span>
          <div className="flex gap-4 items-center ml-1.5">
            {[gitLink, ...otherLinks].map((link, index) => (
              <ProjectLinkButton
                key={index}
                label={link.label}
                icon={link.icon}
                url={link.url}
              />
            ))}
          </div>
        </div>
        <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-gray-600 dark:text-gray-400 cursor-default">
          {tags.map((tag, index) => (
            <a
              key={index}
              href={tag.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center gap-1 hover:dark:text-zinc-900 bg-zinc-900 hover:bg-white py-1 px-2 rounded-full transition-all ease-in-out"
            >
              {tag.icon}
              <span className="text-xs tracking-wide">{tag.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
