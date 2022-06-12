import { useEffect, useState } from "react";

export default function NavigationBar() {
  const [shrinked, setShrinked] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const expectedState = window.scrollY > 100;
      if (expectedState === shrinked) return;
      setShrinked(expectedState);
    };
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });

  useEffect(() => {
    console.log(shrinked);
  }, [shrinked]);

  return (
    <nav
      className={
        shrinked
          ? "navbar bg-black border-b border-neutral-700 py-4"
          : "navbar border-black border-b-0 py-8"
      }
    >
      <div></div>
      <span>{String(shrinked)}</span>
    </nav>
  );

  return (
    <div
      className={
        shrinked
          ? "bg-black border-b border-zinc-400"
          : "bg-white border-b-4 border-red-400"
      }
    >
      <div className="flex items-center justify-between w-full p-8 mx-auto my-0 fixed z-30 transition-all">
        {String(shrinked)}
      </div>
    </div>
  );
}
