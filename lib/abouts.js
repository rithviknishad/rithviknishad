import { BiCode } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { MdEmail } from "react-icons/md";

const abouts = [
  {
    timeline: "Jan `22 - Oct `22",
    icon: <BiCode />,
    title: "Software Engineering Fellow",
    subtitle: "Pupilfirst Private Limited",
    description:
      "Deputed to eGovernments Foundation to develop the Tele-ICU tooling for 10bedICU project.",
    link: "https://fullstack.gdc.network/",
    now: true,
  },
  {
    timeline: "2019 - 2023",
    icon: <FaGraduationCap />,
    title: "B. Tech. Electrical & Electronics Engineering",
    subtitle: "Vellore Institute of Technology",
    now: true,
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
