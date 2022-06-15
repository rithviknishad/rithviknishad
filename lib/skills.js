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
import { AiFillApi } from "react-icons/ai";
import { VscJson } from "react-icons/vsc";

export const langs = {
  Python: {
    name: "Python",
    icon: <SiPython />,
    link: "https://youtu.be/x7X9w_GIm1s",
  },
  Dart: {
    name: "Dart",
    icon: <SiDart />,
    link: "https://youtu.be/NrO0CJCbYLA",
  },
  Typescript: {
    name: "Typescript",
    icon: <SiTypescript />,
    link: "https://youtu.be/zQnBQ4tB3ZA",
  },
  Javascript: {
    name: "Javascript",
    icon: <SiJavascript />,
    link: "https://youtu.be/DHjqpvDnNGE",
  },
  C: {
    name: "C",
    icon: <SiC />,
    link: "https://youtu.be/U3aXWizDbQ4",
  },
  Cpp: {
    name: "C++",
    icon: <SiCplusplus />,
    link: "https://youtu.be/MNeX4EGtR5Y",
  },
  Verilog: {
    name: "Verilog",
    link: "https://en.wikipedia.org/wiki/Verilog",
  },
  Bash: {
    name: "Bash",
    icon: <SiGnubash />,
    link: "https://youtu.be/SPwyp2NG-bE",
  },
  Flux: {
    name: "Flux",
    icon: <SiInfluxdb />,
    link: "https://docs.influxdata.com/influxdb/v2.2/query-data/get-started/",
  },
  CSharp: {
    name: "C#",
    icon: <SiCsharp />,
    link: "https://youtu.be/ravLFzIguCM",
  },
  MATLAB: {
    name: "MATLAB",
    link: "https://www.mathworks.com/products/matlab.html",
  },
  HTML: {
    name: "HTML",
    icon: <SiHtml5 />,
    link: "https://youtu.be/ok-plXXHlWw",
  },
  Markdown: {
    name: "Markdown",
    icon: <SiMarkdown />,
    link: "https://www.markdownguide.org/",
  },
  YAML: {
    name: "YAML",
    icon: <VscJson />,
    link: "https://yaml.org/",
  },
  JSON: {
    name: "JSON",
    icon: <VscJson />,
    link: "https://www.json.org/json-en.html",
  },
};

export const frameworks = {
  Flutter: {
    name: "Flutter",
    icon: <SiFlutter />,
    link: "https://youtu.be/lHhRhPV--G0",
  },
  Tailwind: {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    link: "https://youtu.be/mr15Xzb1Ook",
  },
  React: {
    name: "React",
    icon: <SiReact />,
    link: "https://youtu.be/Tn6-PIqc4UM",
  },
  NextJS: {
    name: "NextJS",
    icon: <SiNextdotjs />,
    link: "https://youtu.be/Sklc_fQBmcs",
  },
  Django: {
    name: "Django",
    icon: <SiDjango />,
    link: "https://www.djangoproject.com/",
  },
  DjangoREST: {
    name: "Django-REST",
    icon: <SiDjango />,
    link: "https://www.django-rest-framework.org/",
  },
};

export const db = {
  InfluxDB: {
    name: "InfluxDB",
    icon: <SiInfluxdb />,
    link: "https://www.influxdata.com/",
  },
  Firestore: {
    name: "Cloud Firestore",
    icon: <SiFirebase />,
    link: "https://youtu.be/vAoB4VbhRzM",
  },
  PostgreSQL: {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    link: "https://www.postgresql.org/",
  },
  MySQL: {
    name: "MySQL",
    icon: <GrMysql />,
    link: "https://youtu.be/Cz3WcZLRaWc",
  },
  SQLite: {
    name: "SQLite",
    icon: <SiSqlite />,
    link: "https://www.sqlite.org/index.html",
  },
  Redis: {
    name: "Redis",
    icon: <SiRedis />,
    link: "https://youtu.be/G1rOthIU-uo",
  },
};

export const iot = {
  // Protocols
  MQTT: {
    name: "MQTT",
    link: "https://mqtt.org/",
  },
  HTTP: {
    name: "REST",
    link: "https://youtu.be/-MTSQjw5DrM",
  },
  // Devices
  ESP32: {
    name: "ESP-32",
    icon: <SiEspressif />,
    link: "https://www.espressif.com/en/products/socs/esp32",
  },
  ESP8266: {
    name: "ESP-8266",
    icon: <SiEspressif />,
    link: "https://www.espressif.com/en/products/socs/esp8266",
  },
  ESP01: {
    name: "ESP-01",
    icon: <SiEspressif />,
    link: "https://www.espressif.com/en/products/socs/esp8266",
  },
  STM32: {
    name: "STM-32",
    icon: <SiStmicroelectronics />,
    link: "https://www.st.com/en/microcontrollers-microprocessors/stm32f103c8.html",
  },
  arduinoUno: {
    name: "Arduino Uno",
    icon: <SiArduino />,
    link: "https://docs.arduino.cc/hardware/uno-rev3/",
  },
  arduinoMega: {
    name: "Arduino Mega",
    icon: <SiArduino />,
    link: "https://docs.arduino.cc/hardware/mega-2560/",
  },
  arduinoMini: {
    name: "Arduino Mini",
    icon: <SiArduino />,
    link: "https://docs.arduino.cc/retired/getting-started-guides/ArduinoMini",
  },
  arduinoMicro: {
    name: "Arduino Micro",
    icon: <SiArduino />,
    link: "https://docs.arduino.cc/hardware/micro",
  },
  arduinoNano: {
    name: "Arduino Nano",
    icon: <SiArduino />,
    link: "https://docs.arduino.cc/hardware/nano",
  },
  RaspberryPi4: {
    name: "Raspberry Pi 4",
    icon: <SiRaspberrypi />,
    link: "https://www.raspberrypi.com/documentation/microcontrollers/rp2040.html",
  },
  RaspberryPiPico: {
    name: "Raspberry Pi Pico",
    icon: <SiRaspberrypi />,
    link: "https://www.raspberrypi.com/documentation/microcontrollers/raspberry-pi-pico.html",
  },
};

export const platforms = {
  Vercel: {
    name: "Vercel",
    icon: <SiVercel />,
    link: "https://vercel.com/",
  },
  Firebase: {
    name: "Firebase",
    icon: <SiFirebase />,
    link: "https://youtu.be/vAoB4VbhRzM",
  },
  Heroku: {
    name: "Heroku",
    icon: <SiHeroku />,
    link: "https://www.heroku.com/",
  },
  Netlify: {
    name: "Netlify",
    icon: <SiNetlify />,
    link: "https://www.netlify.com/",
  },
  Cloudflare: {
    name: "Cloudflare",
    icon: <SiCloudflare />,
    link: "https://www.cloudflare.com/",
  },
  Sentry: {
    name: "Sentry",
    icon: <SiSentry />,
    link: "https://sentry.io/welcome/",
  },
};

export const otherTools = {
  Docker: {
    name: "Docker",
    icon: <SiDocker />,
    link: "https://youtu.be/Gjnup-PuquQ",
  },
  EMQX: {
    name: "EMQX",
    link: "https://www.emqx.io/",
  },
  VerneMQ: {
    name: "VerneMQ",
    link: "https://vernemq.com/",
  },
  Mosquitto: {
    name: "Mosquitto",
    icon: <SiEclipsemosquitto />,
    link: "https://mosquitto.org/",
  },
  Telegraf: {
    name: "Telegraf",
    icon: <SiInfluxdb />,
    link: "https://www.influxdata.com/time-series-platform/telegraf/",
  },
  Grafana: {
    name: "Grafana",
    icon: <SiGrafana />,
    link: "https://grafana.com/",
  },
  NodeRED: {
    name: "NodeRED",
    icon: <SiNodered />,
    link: "https://nodered.org/",
  },
  Simulink: {
    name: "Simulink",
    link: "https://www.mathworks.com/products/simulink.html",
  },
  LTSpice: {
    name: "LTSpice",
    link: "https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html",
  },
  Postman: {
    name: "Postman",
    icon: <SiPostman />,
    link: "https://www.postman.com/",
  },
};

export const api = {
  github: {
    name: "GitHub API",
    icon: <AiFillApi />,
    link: "https://docs.github.com/en/rest",
  },
  solcast: {
    name: "Solcast API",
    icon: <AiFillApi />,
    link: "https://solcast.com/",
  },
};
