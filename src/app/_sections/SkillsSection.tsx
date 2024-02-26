import Skills from "@/constants/skills";
import { ValueOf } from "next/dist/shared/lib/constants";
import Link from "next/link";

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-zinc-950 py-24 px-8">
      <div className="container mx-auto max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 gap-y-16">
        <h2 className="text-zinc-100 w-full lg:w-1/2">
          <small className="text-primary tracking-widest flex items-center text-base font-bold uppercase mb-3 ml-1">
            Things I got my
          </small>
          hands on
        </h2>
        <div className="lg:pt-5">
          <SkillCard category="Frameworks" skills={Skills.frameworks} />
        </div>
        <SkillCard category="IoT" skills={Skills.iot} />
        <SkillCard category="Languages" skills={Skills.languages} />
        <SkillCard category="Databases" skills={Skills.databases} />
        <SkillCard category="Other Tools" skills={Skills.tools} />
      </div>
    </section>
  );
}

const SkillCard = ({
  category,
  skills,
}: {
  category: string;
  skills: ValueOf<typeof Skills>;
}) => {
  return (
    <div className="group flex items-start lg:hover:text-white lg:p-4 rounded-lg transition-all ease-out text-zinc-400 text-base lg:hover:bg-opacity-75 lg:hover:outline lg:hover:outline-primary-500">
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <span className="font-bold tracking-wider lg:text-xl">
            {category}
          </span>
        </div>
        <span className="uppercase text-xs lg:text-sm tracking-wider">
          {/* {subtitle} */}
        </span>
        <ul className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-3">
          {Object.values(skills).map((skill) => (
            <li key={skill.name}>
              <Link
                href={skill.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-2 hover:text-zinc-900 hover:bg-primary-500 w-40 px-2 py-1 transition-all ease-in-out rounded"
              >
                {skill.icon}
                <span className="text-xs md:text-base tracking-wide">
                  {skill.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
