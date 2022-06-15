import { GrMysql } from "react-icons/gr";
import {
  SiArduino,
  SiC,
  SiCloudflare,
  SiCplusplus,
  SiCsharp,
  SiDart,
  SiDjango,
  SiDocker,
  SiEclipsemosquitto,
  SiEspressif,
  SiFirebase,
  SiFlutter,
  SiGnubash,
  SiGooglecloud,
  SiGrafana,
  SiHeroku,
  SiHtml5,
  SiInfluxdb,
  SiJavascript,
  SiMarkdown,
  SiNetlify,
  SiNextdotjs,
  SiNodered,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiRaspberrypi,
  SiReact,
  SiRedis,
  SiSentry,
  SiSqlite,
  SiStmicroelectronics,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { VscJson } from "react-icons/vsc";

export const langs = {
  Python: {
    name: "Python",
    icon: <SiPython />,
  },
  Dart: {
    name: "Dart",
    icon: <SiDart />,
  },
  Typescript: {
    name: "Typescript",
    icon: <SiTypescript />,
  },
  Javascript: {
    name: "Javascript",
    icon: <SiJavascript />,
  },
  C: {
    name: "C",
    icon: <SiC />,
  },
  Cpp: {
    name: "C++",
    icon: <SiCplusplus />,
  },
  Verilog: {
    name: "Verilog",
  },
  Bash: {
    name: "Bash",
    icon: <SiGnubash />,
  },
  Flux: {
    name: "Flux",
    icon: <SiInfluxdb />,
  },
  CSharp: {
    name: "C#",
    icon: <SiCsharp />,
  },
  MATLAB: {
    name: "MATLAB",
  },
  HTML: {
    name: "HTML",
    icon: <SiHtml5 />,
  },
  Markdown: {
    name: "Markdown",
    icon: <SiMarkdown />,
  },
  YAML: {
    name: "YAML",
    icon: <VscJson />,
  },
  JSON: {
    name: "JSON",
    icon: <VscJson />,
  },
};

export const frameworks = {
  Flutter: {
    name: "Flutter",
    icon: <SiFlutter />,
  },
  Tailwind: {
    name: "Tailwind",
    icon: <SiTailwindcss />,
  },
  React: {
    name: "React",
    icon: <SiReact />,
  },
  NextJS: {
    name: "NextJS",
    icon: <SiNextdotjs />,
  },
  Django: {
    name: "Django",
    icon: <SiDjango />,
  },
  DjangoREST: {
    name: "Django-REST",
    icon: <SiDjango />,
  },
};

export const db = {
  InfluxDB: {
    name: "InfluxDB",
    icon: <SiInfluxdb />,
  },
  Firestore: {
    name: "Cloud Firestore",
    icon: <SiFirebase />,
  },
  PostgreSQL: {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
  },
  MySQL: {
    name: "MySQL",
    icon: <GrMysql />,
  },
  SQLite: {
    name: "SQLite",
    icon: <SiSqlite />,
  },
  Redis: {
    name: "Redis",
    icon: <SiRedis />,
  },
};

export const iot = {
  // Protocols
  MQTT: {
    name: "MQTT",
  },
  HTTP: {
    name: "HTTP",
  },
  // Devices
  ESP32: {
    name: "ESP-32",
    icon: <SiEspressif />,
  },
  ESP8266: {
    name: "ESP-8266",
    icon: <SiEspressif />,
  },
  ESP01: {
    name: "ESP-01",
    icon: <SiEspressif />,
  },
  STM32: {
    name: "STM-32",
    icon: <SiStmicroelectronics />,
  },
  arduinoUno: {
    name: "Arduino Uno",
    icon: <SiArduino />,
  },
  arduinoMega: {
    name: "Arduino Mega",
    icon: <SiArduino />,
  },
  arduinoMini: {
    name: "Arduino Mini",
    icon: <SiArduino />,
  },
  arduinoMicro: {
    name: "Arduino Micro",
    icon: <SiArduino />,
  },
  arduinoNano: {
    name: "Arduino Nano",
    icon: <SiArduino />,
  },
  RaspberryPi4: {
    name: "Raspberry Pi 4",
    icon: <SiRaspberrypi />,
  },
  RaspberryPiPico: {
    name: "Raspberry Pi Pico",
    icon: <SiRaspberrypi />,
  },
};

export const platforms = {
  Vercel: {
    name: "Vercel",
    icon: <SiVercel />,
  },
  GCP: {
    name: "GCP",
    icon: <SiGooglecloud />,
  },
  Heroku: {
    name: "Heroku",
    icon: <SiHeroku />,
  },
  Netlify: {
    name: "Netlify",
    icon: <SiNetlify />,
  },
  Cloudflare: {
    name: "Cloudflare",
    icon: <SiCloudflare />,
  },
  Sentry: {
    name: "Sentry",
    icon: <SiSentry />,
  },
};

export const otherTools = {
  Docker: {
    name: "Docker",
    icon: <SiDocker />,
  },
  EMQX: {
    name: "EMQX",
  },
  VerneMQ: {
    name: "VerneMQ",
  },
  Mosquitto: {
    name: "Mosquitto",
    icon: <SiEclipsemosquitto />,
  },
  Telegraf: {
    name: "Telegraf",
    icon: <SiInfluxdb />,
  },
  Grafana: {
    name: "Grafana",
    icon: <SiGrafana />,
  },
  NodeRED: {
    name: "NodeRED",
    icon: <SiNodered />,
  },
  Simulink: {
    name: "MATLAB Simulink",
  },
  LTSpice: {
    name: "LTSpice",
  },
  Postman: {
    name: "Postman",
    icon: <SiPostman />,
  },
};
