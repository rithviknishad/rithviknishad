"use client";

import ProjectCard from "@/components/ProjectCard";
import Projects from "@/constants/projects";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const projects = showAll ? Projects : Projects.slice(0, 4);

  return (
    <section id="projects" className="bg-zinc-950 py-24 px-8">
      <div className="container mx-auto max-w-screen-xl">
        <h2 className="inline-block w-auto text-zinc-100 lg:mb-3">
          <small className="text-primary tracking-widest flex items-center text-base font-bold uppercase after:bg-brand mb-3 ml-1">
            Highlight
          </small>
          Projects
        </h2>

        <ProjectCard highlight={true} project={projects[0]} />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-16 my-12">
          {projects.slice(1).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {!showAll && Projects.length > 4 && (
          <div className="flex justify-center">
            <button
              className="button-secondary group uppercase"
              onClick={() => setShowAll(true)}
            >
              <span>View all {Projects.length} projects</span>
              <BsChevronDown className="button-icon" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
