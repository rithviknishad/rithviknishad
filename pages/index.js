import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BsArrowRight, BsChevronDown, BsChevronUp } from "react-icons/bs";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import NavigationBar from "../components/NavigationBar";
import ProjectCard from "../components/ProjectCard";
import allProjects from "../lib/projects";
import abouts from "../lib/abouts";
import AboutCard from "../components/AboutCard";
import SkillCard from "../components/SkillCard";
import {
  db,
  frameworks,
  iot,
  langs,
  otherTools,
  platforms,
} from "../lib/skills";

export default function Home() {
  const homeRef = useRef(null);
  const knowMeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const projectsToggleButtonRef = useRef(null);

  const [showAllProjects, setShowAllProjects] = useState(false);
  const projects = showAllProjects ? allProjects : allProjects.slice(0, 4);

  // useEffect(() => {
  //   !showAllProjects &&
  //     projectsToggleButtonRef.current.scrollIntoView({
  //       behaviour: "smooth",
  //       block: "center",
  //     });
  // }, [showAllProjects]);

  return (
    <div id="home-root">
      <Head>
        <title>
          {"Rithvik Nishad – software developer, electrical engineer, creator"}
        </title>
      </Head>
      <NavigationBar
        locations={[
          { label: "Home", ref: homeRef },
          { label: "Projects", ref: projectsRef },
          { label: "Know Me", ref: knowMeRef },
          { label: "About", ref: aboutRef },
        ]}
      />
      {/* Home */}
      <section
        ref={homeRef}
        className="flex flex-col justify-center relative min-h-screen dark:bg-neutral-800 pt-8 px-8 lg:overflow-hidden bg-hero-pattern bg-repeat-x bg-cover scales bg-blend-multiply dark:bg-blend-color-burn"
      >
        <div className="container relative lg:min-h-screen flex flex-col lg:flex-row lg:items-center mx-auto max-w-screen-xl z-10 -mb-16">
          <div className="w-full lg:w-1/2 flex justify-center self-center">
            <div className="w-40 sm:w-56 md:w-60 lg:w-72 xl:w-80 aspect-square relative">
              <Image
                className="rounded-full"
                src="/images/profile-picture.jfif"
                layout="fill"
                objectFit="cover"
                alt="Photo of Rithvik Nishad"
                priority={true}
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-primary mt-6 pt-6 lg:pt-0 leading-none">
              Rithvik Nishad
            </h1>
            <p className="text-gray-900 font-bold dark:text-gray-200 my-10 text-lg xl:text-xl leading-tight">
              Software Developer . Electrical Engineer . Creator
            </p>
            <p className="text-gray-700 text-base md:text-md dark:text-gray-400 mb-4 leading-relaxed max-w-prose">
              {`Passionate about creating scalable and distributed systems for 
              the power ⚡ grid and contributing to open source digital public 
              goods.`}
            </p>
            <div className="flex flex-wrap items-start gap-4 pb-24 lg:pb-0 mt-8">
              <PrimaryButton
                Icon={BsArrowRight}
                onClick={() =>
                  projectsRef.current.scrollIntoView({
                    behaviour: "smooth",
                    block: "start",
                  })
                }
              >
                PROJECTS
              </PrimaryButton>
              <SecondaryButton
                Icon={BsArrowRight}
                onClick={() =>
                  knowMeRef.current.scrollIntoView({
                    behaviour: "smooth",
                    block: "start",
                  })
                }
              >
                KNOW ME
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section ref={projectsRef} className="bg-black py-24 px-8">
        <div className="container mx-auto max-w-screen-xl">
          <h2 className="inline-block w-auto text-gray-100 lg:mb-3">
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
          {allProjects.length > 4 && (
            <div ref={projectsToggleButtonRef} className="flex justify-center">
              <SecondaryButton
                Icon={showAllProjects ? BsChevronUp : BsChevronDown}
                bounceIconOnHover={true}
                onClick={() => setShowAllProjects(!showAllProjects)}
              >
                {showAllProjects
                  ? "SHOW LESS"
                  : `VIEW ALL ${allProjects.length} PROJECTS`}
              </SecondaryButton>
            </div>
          )}
        </div>
      </section>
      {/* Skills */}
      <section
        ref={knowMeRef}
        className="bg-neutral-100 dark:bg-[#232326] py-24 px-8"
      >
        <div className="container mx-auto max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 gap-y-16">
          <h2 className="text-gray-900 dark:text-gray-100 w-full lg:w-1/2">
            <small className="text-primary tracking-widest flex items-center text-base font-bold uppercase mb-3 ml-1">
              Things I got my
            </small>
            hands on
          </h2>
          <div className="lg:pt-5">
            <SkillCard category="Frameworks" skills={frameworks} />
          </div>
          <SkillCard category="IoT" skills={iot} />
          <SkillCard category="Languages" skills={langs} />
          <SkillCard category="Platforms" skills={platforms} />
          <SkillCard category="Databases" skills={db} />
          <SkillCard category="Other Tools" skills={otherTools} />
        </div>
      </section>
      {/* About */}
      <section
        ref={aboutRef}
        className="bg-neutral-100 dark:bg-[#232326] py-24 px-8"
      >
        <div className="container mx-auto max-w-screen-xl flex flex-col lg:flex-row">
          <h2 className="text-white w-full lg:w-1/2">
            <small className="text-primary tracking-widest flex items-center text-base font-bold uppercase mb-3 ml-1">
              About
            </small>
            Myself
          </h2>
          <div className="w-full mt-6 lg:mt-0 lg:w-1/2 mb-10 lg:text-lg py-4">
            <ul className="flex flex-col gap-12 lg:gap-8">
              {abouts.map((about, index) => (
                <AboutCard key={index} about={about} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
