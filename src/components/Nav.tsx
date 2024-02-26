"use client";

import { useEffect, useState } from "react";

export default function Nav({ children }: { children: React.ReactNode }) {
  const [shrinked, setShrinked] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShrinked(window.scrollY > 100);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        shrinked
          ? "navbar nav-primary bg-black border-b border-zinc-800 py-2 backdrop-filter backdrop-blur-lg bg-opacity-30"
          : "navbar nav-primary border-black border-b-0 py-8"
      } hidden md:block transition-all duration-200 ease-in-out`}
    >
      {children}
    </nav>
  );
}
