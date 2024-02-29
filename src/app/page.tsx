import AboutSection from "@/app/AboutSection";
import ProjectsSection from "@/app/ProjectsSection";
import SkillsSection from "@/app/SkillsSection";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function Home() {
  return (
    <main className="bg-zinc-900 bg-hero-pattern bg-fixed bg-repeat-x bg-cover scales bg-blend-color-burn">
      {/* --- Home Section --- */}
      <section
        id="home"
        className="flex flex-col justify-center relative min-h-screen pt-8 px-8 lg:overflow-hidden"
      >
        <div className="container relative lg:min-h-screen flex flex-col lg:flex-row lg:items-center mx-auto max-w-screen-xl z-10 -mb-16">
          <div className="w-full lg:w-1/2 flex justify-center self-center">
            <div className="w-40 sm:w-56 md:w-60 lg:w-72 aspect-square relative">
              <Image
                className="outline outline-8 outline-zinc-900 rounded-full hover:scale-105 transition-transform duration-300 ease-in-out"
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
            <p className="font-bold text-zinc-200 my-10 text-lg xl:text-xl leading-tight">
              Software Developer . Electrical Engineer . Creator
            </p>
            <p className="text-base md:text-md text-zinc-400 mb-4 leading-relaxed max-w-prose">
              {`Passionate about creating scalable and distributed systems for 
          the power ⚡ grid and contributing to open source digital public 
          goods.`}
            </p>
            <div className="flex flex-wrap items-start gap-4 pb-24 lg:pb-0 mt-8">
              <Link href="/life-100" className="button-primary group uppercase">
                <span>Life 100</span>
                <BsArrowRight className="button-icon" />
              </Link>
              <Link href="#about" className="button-secondary group uppercase">
                <span>Know Me</span>
                <BsArrowRight className="button-icon" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- Other Sections --- */}
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
    </main>
  );
}
