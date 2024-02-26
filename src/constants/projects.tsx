import { BsYoutube } from "react-icons/bs";
import { CgOrganisation } from "react-icons/cg";
import {
  IoIosRocket,
  IoIosTrophy,
  IoLogoGameControllerB,
} from "react-icons/io";
import { SiGitbook } from "react-icons/si";

import ArikeBG from "@public/images/project-bg/Arike.png";
import BuckBoostBG from "@public/images/project-bg/BuckBoostConverter.jpg";
import CoronasafeBG from "@public/images/project-bg/Coronasafe.jpg";
import IoTBasedPSBG from "@public/images/project-bg/IoTBasedPS.png";
import MartialArtsBG from "@public/images/project-bg/MartialArts.png";
import OsumPiBG from "@public/images/project-bg/osumpi.png";
import SmartJunctionBG from "@public/images/project-bg/SmartJunction.jpg";
import Standalone3DPositionSensorBG from "@public/images/project-bg/Standalone3DPosSensor.png";
import SwiftlyBG from "@public/images/project-bg/Swiftly.png";
import VaidyutiBG from "@public/images/project-bg/Vaidyuti.png";
import VITCCElectricalIssuesBG from "@public/images/project-bg/VITCCElectricalIssues.png";
import Skills from "@/constants/skills";

const Projects = [
  {
    title:
      "Vaidyuti - Accelerating adoption of decentralised and renewable energy",
    image: VaidyutiBG,
    link: "https://vaidyuti.in",
    timeline: "Jan `22 - now",
    description:
      "Our goal is to accelerate the adoption of renewable energy sources and decentralized energy generation while ensuring maximum uptime and reliability.",
    repository: "https://github.com/vaidyuti/",
    otherLinks: [
      {
        label: "Deployment",
        icon: <IoIosRocket />,
        url: "https://get.vaidyuti.in/",
      },
      {
        label: "API",
        icon: <IoIosRocket />,
        url: "https://api.vaidyuti.in/",
      },
      {
        label: "API Docs",
        icon: <SiGitbook />,
        url: "https://api.vaidyuti.in/swagger/",
      },
    ],
    tags: [
      Skills.frameworks.Django,
      Skills.iot.ESP32,
      Skills.tools.EMQX,
      Skills.databases.InfluxDB,
      Skills.databases.PostgreSQL,
      Skills.databases.PlanetScale,
      Skills.tools.Telegraf,
      Skills.databases.Redis,
      Skills.api.solcast,
      Skills.tools.Docker,
    ],
  },
  // CARE
  {
    title:
      "CARE - Our Goal is to defend the Healthcare system from overloading beyond capacity.",
    image: CoronasafeBG,
    link: "https://github.com/coronasafe/",
    timeline: "May `22 - now",
    description:
      "Care is a Digital Public Good enabling TeleICU & Decentralised Administration of Healthcare Capacity across States.",
    repository: "https://github.com/coronasafe/care_fe",
    otherLinks: [
      {
        label: "Open Healthcare Network",
        icon: <CgOrganisation />,
        url: "https://ohc.network/",
      },
    ],
    tags: [
      Skills.frameworks.Django,
      Skills.frameworks.React,
      Skills.frameworks.Tailwind,
      Skills.languages.Typescript,
      Skills.languages.Python,
    ],
  },
  // IoT based Push-Pull converter
  {
    title: "IoT based Push-Pull Converter using Simulink, MQTT & Node-RED",
    image: IoTBasedPSBG,
    link: "https://github.com/rithviknishad/iot-based-power-supply",
    timeline: "Dec `21",
    description:
      "A push-pull topology based power converter was designed and simulated in MATLAB Simulink, and the realtime performance of the converter was streamed from Simulink to Node-RED platform using MQTT protocol.",
    repository: "https://github.com/rithviknishad/iot-based-power-supply",
    otherLinks: [
      {
        label: "Watch Simulation",
        icon: <BsYoutube />,
        url: "https://youtu.be/HLnyWL7QPkI",
      },
    ],
    tags: [
      Skills.tools.Simulink,
      Skills.tools.EMQX,
      Skills.tools.NodeRED,
      Skills.iot.MQTT,
      Skills.languages.MATLAB,
      Skills.languages.Dart,
    ],
  },
  // OsumPi
  {
    title: "OsumPi - IoT Ecosystem Automation Framework",
    image: OsumPiBG,
    link: "https://github.com/osumpi",
    timeline: "June `20 - Jan `22",
    description:
      "OsumPi is an IoT ecosystem automation framework. It uses bakecode engine, a SOA (Service Oriented Architecture) based IoT ecosystem management framework. Create, deploy, schedule and run services / recipes in the ecosystem with ease. This framework extensively uses MQTT messaging protocol to interact with things in the ecosystem and is primarily built in dart language ecosystem.",
    repository: "https://github.com/osumpi",
    otherLinks: [],
    tags: [
      Skills.languages.Dart,
      Skills.frameworks.Flutter,
      Skills.iot.MQTT,
      Skills.tools.EMQX,
    ],
  },
  // Swiftly
  {
    title: "Swiftly - Project Manager",
    image: SwiftlyBG,
    link: "https://github.com/rithviknishad/swiftly",
    timeline: "Apr `22",
    description:
      "A project manager tool built using React Typescript and Tailwind, as part of Global Digital Corps training - WD301 React+Typescript+Tailwind Course Capstone Project. Backend deployed on heroku, and frontend deployed on netlify.",
    repository: "https://github.com/rithviknishad/swiftly",
    otherLinks: [
      {
        label: "Staging",
        icon: <IoIosRocket />,
        url: "https://rithviknishad-swiftly.netlify.app/",
      },
    ],
    tags: [
      Skills.frameworks.React,
      Skills.frameworks.Tailwind,
      Skills.languages.Typescript,
      Skills.frameworks.Django,
      Skills.databases.PostgreSQL,
    ],
  },
  // Arike
  {
    title: "Arike",
    image: ArikeBG,
    link: "https://github.com/rithviknishad/arike",
    timeline: "Mar `22",
    description: `"Arike" is a Malayalam word that roughly translates to "Alongside" or "Besides" in English. The project caters to a system of specialized medical staff tending to patients under palliative care. Created as part of Global Digital Corps training - WD202 Django Course Capstone Project. Deployed on heroku.`,
    repository: "https://github.com/rithviknishad/arike",
    otherLinks: [
      {
        label: "Staging",
        icon: <IoIosRocket />,
        url: "http://rithviknishad-arike.herokuapp.com/",
      },
    ],
    tags: [
      Skills.frameworks.Tailwind,
      Skills.frameworks.Django,
      Skills.databases.PostgreSQL,
      Skills.databases.Redis,
    ],
  },
  // Javascript Training
  {
    title: "Personal website with Martial Arts game",
    image: MartialArtsBG,
    link: "https://rithviknishad.github.io/",
    timeline: "Jan `22",
    description:
      "Created a personal website and includes a martial arts game built using javascript. Created as part of Global Digital Corps training - WD101 Javascript Course Capstone Project. Deployed using Github Pages.",
    repository: "https://github.com/rithviknishad/rithviknishad.github.io",
    otherLinks: [
      {
        label: "",
        icon: <IoIosRocket />,
        url: "https://rithviknishad.github.io/",
      },
      {
        label: "PLAY MARTIAL ARTS",
        icon: <IoLogoGameControllerB />,
        url: "https://rithviknishad.github.io/martial-arts/",
      },
    ],
    tags: [
      Skills.languages.Javascript,
      Skills.languages.HTML,
      Skills.frameworks.Tailwind,
      Skills.api.github,
    ],
  },
  // VITCC Electrical Issues
  {
    title: "Electrical Issue Tracker for VITCC",
    image: VITCCElectricalIssuesBG,
    link: "https://vitcc-electrical-issues.web.app",
    timeline: "Dec `21",
    description:
      "A platform to raise, track and resolve electrical issues within Vellore Insititute of Technology, Chennai campus. Built using Flutter framework and Firebase.",
    repository: "https://github.com/rithviknishad/vitcc_electrical_issues",
    otherLinks: [
      {
        label: "Production",
        icon: <IoIosRocket />,
        url: "https://vitcc-electrical-issues.web.app",
      },
    ],
    tags: [
      Skills.languages.Dart,
      Skills.frameworks.Flutter,
      Skills.databases.Firestore,
    ],
  },
  // Standalone 3D Position Sensor
  {
    title: "Standalone 3D Position Sensor",
    image: Standalone3DPositionSensorBG,
    link: "https://github.com/rithviknishad/standalone-3d-position-sensor",
    timeline: "Nov `20",
    description:
      "This project attempts to perform relative position estimation of itself in 3D space, using MPU6050 6-DOF Accelerometer+Gyroscope, ESP-01 WiFi module or Arduino Uno (for testing). The estimated position is published to a topic in MQTT as a JSON payload.",
    repository:
      "https://github.com/rithviknishad/standalone-3d-position-sensor",
    otherLinks: [
      {
        label: "Watch Demo",
        icon: <BsYoutube />,
        url: "https://youtu.be/qfzJIBmUK4w",
      },
    ],
    tags: [
      Skills.iot.ESP01,
      Skills.iot.MQTT,
      Skills.iot.arduinoUno,
      Skills.languages.Cpp,
    ],
  },
  // AUXPIS BPS
  {
    title: "Buck and Boost power converter",
    image: BuckBoostBG,
    link: "https://github.com/rithviknishad/auxpis-bps",
    timeline: "May `20",
    description:
      "A buck and boost power converter with touch screen display to control and monitor voltage and current. Expected to be controlled and monitored using MQTT also.",
    repository: "https://github.com/rithviknishad/auxpis-bps",
    otherLinks: [
      {
        label: "Watch Build & Test",
        icon: <BsYoutube />,
        url: "https://youtu.be/TsTHe_w3NbI",
      },
    ],
    tags: [
      Skills.iot.ESP8266,
      Skills.iot.arduinoMini,
      Skills.iot.MQTT,
      Skills.languages.Cpp,
    ],
  },
  // Smart Junction
  {
    title: "Smart Junction",
    image: SmartJunctionBG,
    link: "https://github.com/rithviknishad/Smart-Junction",
    timeline: "July `18 - Dec `19",
    description:
      "Smart Junction is a system designed to intelligently manage modern world road traffic flow in a junction, with the primary objective to reduce waiting time of vehicles. With the ability to analyze and manage traffic flow in real-time and also give higher priority to emergency vehicles, Smart Junction system is a very efficient and adaptive solution for the modern world traffic conditions. We've won the 3rd position in CBSE Nation Science Exhibition 2018 and participated in Intel's IRIS National Science Fair 2018 held at Manekshaw Centre, New Delhi.",
    repository: "https://github.com/rithviknishad/Smart-Junction",
    otherLinks: [
      {
        label: "",
        icon: <BsYoutube />,
        url: "https://youtu.be/gk-zpm45nwg",
      },
      {
        label: "Docs",
        icon: <SiGitbook />,
        url: "https://github.com/rithviknishad/Smart-Junction/blob/master/Smart%20Junction%20Documentation.pdf",
      },
      {
        label: "3rd",
        icon: <IoIosTrophy />,
        url: null,
      },
    ],
    tags: [
      Skills.languages.CSharp,
      Skills.languages.Cpp,
      Skills.iot.arduinoMega,
      Skills.iot.arduinoMicro,
      Skills.iot.arduinoMini,
      Skills.iot.arduinoNano,
      Skills.iot.arduinoUno,
    ],
  },
];

export default Projects;
