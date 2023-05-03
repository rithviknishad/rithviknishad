import { BiCode } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { MdEmail } from "react-icons/md";

const abouts = [
  {
    timeline: "May `23 - now",
    icon: <BiCode />,
    title: "Software Engineer",
    subtitle: "eGovernments Foundation",
    description:
      "Deputed to develop the Tele-ICU tooling for 10bedICU project.",
    now: true,
  },
  {
    timeline: "May `22 - April `23",
    icon: <BiCode />,
    title: "National Software Engineering Fellow (GDC Intern)",
    subtitle: "eGovernments Foundation & Pupilfirst Private Limited",
    description:
      "Deputed to eGovernments Foundation to develop the Tele-ICU tooling for 10bedICU project.",
    link: "https://wd.pupilfirst.org/",
    now: false,
  },
  {
    timeline: "2019 - 2023",
    icon: <FaGraduationCap />,
    title: "B. Tech. Electrical & Electronics Engineering",
    subtitle: "Vellore Institute of Technology",
    now: false,
  },
  {
    timeline: "2004 - 2016",
    icon: <ImBooks />,
    title: "Primary & Secondary Education",
    subtitle: "The Indian High School, Dubai",
  },
  {
    timeline: "2017 - 2019",
    icon: <ImBooks />,
    title: "Higher Secondary Education",
    subtitle: "Chinmaya Vidyalaya, Kannur",
  },
  {
    timeline: "Contact me at",
    icon: <MdEmail />,
    title: "mail@rithviknishad.dev",
    link: "mailto:mail@rithviknishad.dev",
  },
];

export default abouts;
