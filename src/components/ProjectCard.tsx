import Projects from "@/constants/projects";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

export default function ProjectCard({
  project,
  highlight = false,
}: {
  project: (typeof Projects)[number];
  highlight?: boolean;
}) {
  const repositoryLink = {
    label: highlight ? "Repository" : "",
    icon: <BsGithub />,
    url: project.repository,
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
        <Image src={project.image} alt={project.title} priority={true} />
      </div>
      <div className={highlight ? "w-full mt-4 lg:mt-0" : "w-full mt-4"}>
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-bold mt-4 mb-2 leading-tight text-zinc-100 link-underline group-hover:link-underline hover:cursor-pointer"
        >
          {project.title}
        </Link>
        <div className="flex justify-start gap-6 my-3 text-sm text-zinc-400">
          <span className="relative inline-flex">
            <span className="text-base">{project.timeline}</span>
            {project.timeline.includes("now") && (
              <span className="flex absolute h-3 w-3 top-1/2 right-0 -mt-1.5 -mr-5 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
              </span>
            )}
          </span>
          <div className="flex gap-4 items-center ml-1.5">
            {(project.repository
              ? [repositoryLink, ...project.otherLinks]
              : project.otherLinks
            ).map((link, index) => {
              return (
                <Link
                  key={link.url}
                  className="group flex text-xl gap-2 transition-all ease-out hover:text-white"
                  href={link.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                  {link.label && (
                    <span className="uppercase hidden lg:block text-sm transition-all ease-out tracking-wider">
                      {link.label}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
        <p className="mt-4 leading-relaxed text-zinc-300">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-zinc-400 cursor-default">
          {project.tags.map((tag) => (
            <Link
              key={tag.name}
              href={tag.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center gap-1 bg-zinc-900 hover:bg-white hover:text-zinc-900 py-1 px-2 rounded-full transition-all ease-in-out"
            >
              {tag.icon}
              <span className="text-xs tracking-wide">{tag.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
