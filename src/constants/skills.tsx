import {
  SiArduino,
  SiCplusplus,
  SiCsharp,
  SiDart,
  SiDatagrip,
  SiDjango,
  SiDocker,
  SiEspressif,
  SiFirebase,
  SiFlutter,
  SiGnubash,
  SiHtml5,
  SiInfluxdb,
  SiJavascript,
  SiMqtt,
  SiNextdotjs,
  SiNodered,
  SiPlanetscale,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiRaspberrypi,
  SiReact,
  SiRedis,
  SiStmicroelectronics,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import { FaSimCard } from "react-icons/fa";

export type Skill = {
  name: string;
  icon: React.ReactNode | null;
  href: string;
};

const languages = {
  Python: {
    name: "Python",
    icon: <SiPython />,
    href: "https://youtu.be/x7X9w_GIm1s",
  },
  Dart: {
    name: "Dart",
    icon: <SiDart />,
    href: "https://youtu.be/NrO0CJCbYLA",
  },
  Typescript: {
    name: "Typescript",
    icon: <SiTypescript />,
    href: "https://youtu.be/zQnBQ4tB3ZA",
  },
  Javascript: {
    name: "Javascript",
    icon: <SiJavascript />,
    href: "https://youtu.be/DHjqpvDnNGE",
  },
  Cpp: {
    name: "C++",
    icon: <SiCplusplus />,
    href: "https://youtu.be/MNeX4EGtR5Y",
  },
  Verilog: {
    name: "Verilog",
    icon: null,
    href: "https://en.wikipedia.org/wiki/Verilog",
  },
  Bash: {
    name: "Bash",
    icon: <SiGnubash />,
    href: "https://youtu.be/SPwyp2NG-bE",
  },
  CSharp: {
    name: "C#",
    icon: <SiCsharp />,
    href: "https://youtu.be/ravLFzIguCM",
  },
  MATLAB: {
    name: "MATLAB",
    icon: null,
    href: "https://www.mathworks.com/products/matlab.html",
  },
  HTML: {
    name: "HTML",
    icon: <SiHtml5 />,
    href: "https://youtu.be/ok-plXXHlWw",
  },
};

const frameworks = {
  NextJS: {
    name: "NextJS",
    icon: <SiNextdotjs />,
    href: "https://youtu.be/Sklc_fQBmcs",
  },
  Django: {
    name: "Django REST",
    icon: <SiDjango />,
    href: "https://www.djangoproject.com/",
  },
  Tailwind: {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    href: "https://youtu.be/mr15Xzb1Ook",
  },
  React: {
    name: "React",
    icon: <SiReact />,
    href: "https://youtu.be/Tn6-PIqc4UM",
  },
  Flutter: {
    name: "Flutter",
    icon: <SiFlutter />,
    href: "https://youtu.be/lHhRhPV--G0",
  },
};

const databases = {
  PostgreSQL: {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    href: "https://www.postgresql.org/",
  },
  Redis: {
    name: "Redis",
    icon: <SiRedis />,
    href: "https://youtu.be/G1rOthIU-uo",
  },
  PlanetScale: {
    name: "PlanetScale",
    icon: <SiPlanetscale />,
    href: "https://planetscale.com/",
  },
  InfluxDB: {
    name: "InfluxDB",
    icon: <SiInfluxdb />,
    href: "https://www.influxdata.com/",
  },
  Firestore: {
    name: "Firestore",
    icon: <SiFirebase />,
    href: "https://youtu.be/vAoB4VbhRzM",
  },
};

const iot = {
  // Protocols
  MQTT: {
    name: "MQTT",
    icon: <SiMqtt />,
    href: "https://mqtt.org/",
  },
  SIM8XX: {
    name: "SIM8xx",
    icon: <FaSimCard />,
    href: "https://www.arduino.cc/reference/en/libraries/tinygsm/",
  },
  ESPMesh: {
    name: "ESP-NOW",
    icon: <SiEspressif />,
    href: "https://www.espressif.com/en/solutions/low-power-solutions/esp-now",
  },
  // Devices
  ESP32: {
    name: "ESP-32",
    icon: <SiEspressif />,
    href: "https://www.espressif.com/en/products/socs/esp32",
  },
  ESP8266: {
    name: "ESP-8266",
    icon: <SiEspressif />,
    href: "https://www.espressif.com/en/products/socs/esp8266",
  },
  ESP01: {
    name: "ESP-01",
    icon: <SiEspressif />,
    href: "https://www.espressif.com/en/products/socs/esp8266",
  },
  STM32: {
    name: "STM-32",
    icon: <SiStmicroelectronics />,
    href: "https://www.st.com/en/microcontrollers-microprocessors/stm32f103c8.html",
  },
  arduinoUno: {
    name: "Arduino Uno",
    icon: <SiArduino />,
    href: "https://docs.arduino.cc/hardware/uno-rev3/",
  },
  arduinoMega: {
    name: "Arduino Mega",
    icon: <SiArduino />,
    href: "https://docs.arduino.cc/hardware/mega-2560/",
  },
  arduinoMini: {
    name: "Arduino Mini",
    icon: <SiArduino />,
    href: "https://docs.arduino.cc/retired/getting-started-guides/ArduinoMini",
  },
  arduinoMicro: {
    name: "Arduino Micro",
    icon: <SiArduino />,
    href: "https://docs.arduino.cc/hardware/micro",
  },
  arduinoNano: {
    name: "Arduino Nano",
    icon: <SiArduino />,
    href: "https://docs.arduino.cc/hardware/nano",
  },
  arduinoNanoRP2040Connect: {
    name: "RP2040 Connect",
    icon: <SiArduino />,
    href: "https://docs.arduino.cc/hardware/nano-rp2040-connect",
  },
  RaspberryPi4: {
    name: "Raspberry Pi 4",
    icon: <SiRaspberrypi />,
    href: "https://www.raspberrypi.com/documentation/microcontrollers/rp2040.html",
  },
  RaspberryPiPico: {
    name: "Raspberry Pi Pico",
    icon: <SiRaspberrypi />,
    href: "https://www.raspberrypi.com/documentation/microcontrollers/raspberry-pi-pico.html",
  },
};

const tools = {
  Docker: {
    name: "Docker",
    icon: <SiDocker />,
    href: "https://youtu.be/Gjnup-PuquQ",
  },
  EMQX: {
    name: "EMQX",
    icon: <SiMqtt />,
    href: "https://www.emqx.io/",
  },
  Telegraf: {
    name: "Telegraf",
    icon: <SiInfluxdb />,
    href: "https://www.influxdata.com/time-series-platform/telegraf/",
  },
  NodeRED: {
    name: "NodeRED",
    icon: <SiNodered />,
    href: "https://nodered.org/",
  },
  Simulink: {
    name: "Simulink",
    icon: null,
    href: "https://www.mathworks.com/products/simulink.html",
  },
  Postman: {
    name: "Postman",
    icon: <SiPostman />,
    href: "https://www.postman.com/",
  },
  DataGrip: {
    name: "DataGrip",
    icon: <SiDatagrip />,
    href: "https://www.jetbrains.com/datagrip/",
  },
};

const api = {
  github: {
    name: "GitHub API",
    icon: <AiFillApi />,
    href: "https://docs.github.com/en/rest",
  },
  solcast: {
    name: "Solcast API",
    icon: <AiFillApi />,
    href: "https://solcast.com/",
  },
};

const Skills = {
  languages,
  frameworks,
  tools,
  api,
  iot,
  databases,
} satisfies Record<string, Record<string, Skill>>;

export default Skills;
