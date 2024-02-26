import Link from "next/link";
import { BiCode } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import { ImBooks } from "react-icons/im";
import { MdEmail } from "react-icons/md";

export default function AboutSection() {
  return (
    <section id="about" className="bg-zinc-950 py-24 px-8">
      <div className="container mx-auto max-w-screen-xl flex flex-col lg:flex-row">
        <h2 className="text-white w-full lg:w-1/2">
          <small className="text-primary tracking-widest flex items-center text-base font-bold uppercase mb-3 ml-1">
            About
          </small>
          Myself
        </h2>
        <div className="w-full mt-6 lg:mt-0 lg:w-1/2 mb-10 lg:text-lg py-4">
          <ul className="flex flex-col gap-12 lg:gap-8">
            <li>
              <About
                title="Software Engineer"
                subtitle="eGovernments Foundation"
                description="Deputed to develop the Tele-ICU tooling for 10bedICU project."
                timeline="May `23 - now"
                icon={<BiCode />}
              />
            </li>
            <li>
              <About
                title="National Software Engineering Fellow (GDC Intern)"
                subtitle="eGovernments Foundation & Pupilfirst Private Limited"
                description="Deputed to eGovernments Foundation to develop the Tele-ICU tooling for 10bedICU project."
                timeline="May `22 - April `23"
                icon={<BiCode />}
              />
            </li>
            <li>
              <About
                title="B. Tech. Electrical & Electronics Engineering"
                subtitle="Vellore Institute of Technology"
                description="Deputed to develop the Tele-ICU tooling for 10bedICU project."
                timeline="July `19 - April `23"
                icon={<FaGraduationCap />}
              />
            </li>
            <li>
              <About
                title="Primary & Secondary Education"
                subtitle="The Indian High School, Dubai"
                timeline="2004 - 2016"
                icon={<ImBooks />}
              />
            </li>
            <li>
              <About
                title="Higher Secondary Education"
                subtitle="Chinmaya Vidyalaya, Kannur"
                timeline="2017 - 2019"
                icon={<ImBooks />}
              />
            </li>
            <li>
              <About
                timeline="Contact me at"
                title="mail@rithviknishad.dev"
                link="mailto:mail@rithviknishad.dev"
                icon={<MdEmail />}
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

type IAbout = {
  timeline: string;
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  description?: string;
  link?: string;
};

const About = (about: IAbout) => {
  if (!about.link) {
    return <AboutCardContent content={about} />;
  }

  return (
    <Link href={about.link} target="_blank" rel="noopener noreferrer">
      <AboutCardContent content={about} />
    </Link>
  );
};

const AboutCardContent = ({ content }: { content: IAbout }) => {
  const current = content.timeline.includes("now");
  return (
    <div className="group flex items-start hover:text-zinc-950 lg:p-4 rounded-lg transition-all ease-out text-zinc-400 text-base lg:hover:bg-primary-500">
      <div className="min-w-fit text-2xl mt-5">{content.icon}</div>
      <div className="flex flex-col pl-3 gap-1">
        <span>
          <span className="relative inline-flex uppercase text-xs tracking-wider group-hover:font-bold lg:group-hover:text-sm transition-all ease-in-out">
            {content.timeline}
            {current && (
              <span className="flex absolute h-3 w-3 top-1/2 right-0 -mt-1.5 -mr-5 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
            )}
          </span>
        </span>
        <div className="flex items-center">
          <span className="font-bold tracking-wide lg:text-xl pr-3 text-white group-hover:text-zinc-950">
            {content.title}
          </span>
          {content.link && (
            <GoLinkExternal className="text-primary animate-pulse lg:text-xl" />
          )}
        </div>
        {content.subtitle && (
          <span className="uppercase text-xs lg:text-sm tracking-wider">
            {content.subtitle}
          </span>
        )}
        {content.description && (
          <span className="text-zinc-400 group-hover:text-zinc-700 text-sm font-sans">
            {content.description}
          </span>
        )}
      </div>
    </div>
  );
};
