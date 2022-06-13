import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import NavigationBar from "../components/NavigationBar";
import { MainProjectCard, ProjectCard } from "../components/ProjectCards";

export default function Home() {
  const homeRef = useRef(null),
    aboutRef = useRef(null),
    projectsRef = useRef(null);

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
              <PrimaryButton Icon={BsArrowRight}>PROJECTS</PrimaryButton>
              <SecondaryButton Icon={BsArrowRight}>KNOW ME</SecondaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section ref={projectsRef} className="bg-black py-24 px-8">
        <div className="container mx-auto max-w-screen-xl">
          <h2 className="inline-block w-auto text-gray-100">
            <small className="text-primary tracking-widest flex items-center text-base font-bold uppercase after:bg-brand mb-3 ml-1">
              Highlight
            </small>
            Projects
          </h2>
          <MainProjectCard
            title="Vaidyuti - A Decentralized and Autonomous Energy ⚡ Grid Management System"
            repository="https://github.com/Vaidyuti/vems"
            description="A nice little project"
            timeline="Jan 6, 2022 - now"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 my-12">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </section>

      {/* About */}
      <section ref={aboutRef} className="w-full h-screen bg-primary"></section>
    </div>
  );
}
