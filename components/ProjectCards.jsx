import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { ProjectLinkButton } from "./Buttons";

export function ProjectCard({ project, highlight = false }) {
  const { title, image, link, timeline, description, repository, otherLinks } =
    project;

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
        <Image src={image} alt={title} />
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
          <div className="text-base">{timeline}</div>
          <div className="flex gap-4 items-center">
            {[gitLink, ...otherLinks].map((link, index) => (
              <ProjectLinkButton
                key={index}
                // forceShrink={!highlight}
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
      </div>
    </div>
  );
}
