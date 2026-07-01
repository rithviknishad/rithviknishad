export type LifeItem = {
  id: number;
  text: string;
  done?: boolean;
  completedAt?: string; // ISO date, e.g. "2023-05-02"
  link?: string;
};

// Read-only checklist. Mark `done: true` and add `completedAt` when finished.
export const life100: LifeItem[] = [
  // --- powered on ---
  {
    id: 1,
    text: "Graduate as a Software & Electrical Engineer",
    done: true,
    completedAt: "2023-05-02",
  },
  {
    id: 2,
    text: "Capture the world through my first camera — a Sony Alpha 6700",
    done: true,
    completedAt: "2024-02-25",
  },
  {
    id: 3,
    text: "Throttle up on my first motorcycle — a Royal Enfield Classic 350",
    done: true,
    completedAt: "2025-06-02",
  },
  {
    id: 4,
    text: "Daily-drive a fully declarative, reproducible NixOS setup",
    done: true,
    link: "https://github.com/rithviknishad/systems.nix",
  },

  // --- queued ---
  { id: 5, text: "Earn a paragliding rating and pilot my own flights" },
  { id: 6, text: "Open up a sports car flat-out on the German Autobahn" },
  { id: 7, text: "Feel the engines live at an F1 Grand Prix" },
  {
    id: 8,
    text: "Build my own garage-lab — bench, scope, and a wall of microcontrollers",
  },
  { id: 9, text: "Take my first solo trip beyond India" },
  { id: 10, text: "Wander through the valleys of Kashmir" },
  { id: 11, text: "Brew up a cafe of my own" },
  { id: 12, text: "Stand in the crowd at an IU concert" },
  { id: 13, text: "Take the controls and fly an airplane" },
  { id: 14, text: "Watch the northern lights ripple overhead" },
  { id: 15, text: "Drift over the horizon in a hot air balloon" },
  { id: 16, text: "Touch real snow for the first time" },
  { id: 17, text: "Design and build a container house" },
  { id: 18, text: "Ride Japan's fastest maglev at full tilt" },
  { id: 19, text: "Explore Japan end to end" },
  // ... keep adding up to 100. Keep ids unique.
];
