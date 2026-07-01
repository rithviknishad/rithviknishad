export type RidePhoto = { src: string; caption?: string };
export type Point = { name: string; lat: number; lng: number };

export type Ride = {
  id: number;
  slug: string;
  title: string;
  source: Point;
  destination: Point;
  date: string; // ISO
  distanceKm: number;
  blurb: string;
  pitStops?: Point[];
  gpx?: string; // path under /public
  photos?: RidePhoto[];
};

// Seeded with one placeholder ride. Replace coords/photos/gpx with the real thing.
export const rides: Ride[] = [
  {
    id: 1,
    slug: "western-ghats-loop",
    title: "Western Ghats Loop",
    source: { name: "Coimbatore", lat: 11.0168, lng: 76.9558 },
    destination: { name: "Ooty", lat: 11.4064, lng: 76.6932 },
    date: "2025-06-08",
    distanceKm: 86,
    blurb:
      "First long pull on the Classic 350 — 36 hairpins, cool air, and the thump echoing off the ghats. Placeholder text; swap with the real story.",
    pitStops: [
      { name: "Mettupalayam", lat: 11.2997, lng: 76.9376 },
      { name: "Coonoor", lat: 11.3531, lng: 76.7959 },
    ],
    gpx: "/rides/western-ghats-loop.gpx",
    photos: [
      { src: "/rides/western-ghats-loop/1.jpg", caption: "Sunrise at the foothills" },
      { src: "/rides/western-ghats-loop/2.jpg", caption: "Hairpin #18" },
    ],
  },
];
