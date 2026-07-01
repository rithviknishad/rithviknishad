export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "vaidyuti",
    blurb:
      "Accelerating the decentralization of renewable energy — power by the people, for the people, of the people.",
    tags: ["mqtt", "django", "esp32"],
    link: "https://github.com/vaidyuti",
  },
  {
    title: "@ohcnetwork/care",
    blurb:
      "A Digital Public Good powering accelerated, large-scale healthcare delivery.",
    tags: ["django", "vite", "fhir"],
    link: "https://ohc.network",
  },
  {
    title: "@ohcnetwork/leaderboard",
    blurb:
      "Aggregates data from open-source scrapers to spotlight the work of our contributors.",
    tags: ["ohcnf"],
    link: "https://contributors.ohc.network",
  },
  {
    title: "draw",
    blurb:
      "Excalidraw, reimagined with a multi-board setup for endless canvases.",
    tags: ["excalidraw"],
    link: "https://draw.rithviknishad.dev",
  },
  {
    title: "json-schema-validator",
    blurb:
      "A fast developer tool for validating data against JSON Schema rules.",
    tags: ["vite", "dev-tools"],
    link: "https://json-schema-validator.rithviknishad.dev",
  },
  {
    title: "iot-push-pull-converter",
    blurb:
      "Push-pull power converter designed and simulated in MATLAB Simulink, with realtime telemetry streamed to Node-RED over MQTT.",
    tags: ["simulink", "mqtt", "node-red"],
    link: "https://www.youtube.com/watch?v=HLnyWL7QPkI",
  },
  {
    title: "smart-junction",
    blurb:
      "Real-time traffic management that cuts vehicle wait times and prioritizes emergency vehicles. 3rd place — CBSE National Science Exhibition 2018; finalist at Intel IRIS 2018, New Delhi.",
    tags: ["transport", "arduino", "c++"],
    link: "https://github.com/rithviknishad/Smart-Junction/blob/master/Smart%20Junction%20Documentation.pdf",
  },
  {
    title: "periodic-table-cpp",
    blurb:
      "My high-school CS project — an interactive periodic table in C++ (Oct 2018).",
    tags: ["c++"],
    link: "https://github.com/rithviknishad/periodic-table",
  },
];
