import AboutSection from "@/app/_sections/AboutSection";
import HomeSection from "@/app/_sections/HomeSection";
import ProjectsSection from "@/app/_sections/ProjectsSection";
import SkillsSection from "@/app/_sections/SkillsSection";
import Nav from "@/components/Nav";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Nav>
        <div className="hidden md:block">
          <div className="flex items-center justify-end transition-all 2xl:pr-52">
            {[
              { label: "Home", id: "" },
              { label: "Projects", id: "" },
              { label: "Know Me", id: "" },
              { label: "About", id: "" },
            ].map(({ label, id }) => (
              <Link
                href={`#${id}`}
                key={id}
                className="sectionlink p-1 text-base font-bold text-zinc-100 sm:p-4 tracking-wider cursor-pointer"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </Nav>

      <HomeSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
    </main>
  );
}
