import { useEffect, useState } from "react";

export default function NavigationBar({ locations }) {
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

  return (
    <div className="hidden md:block">
      <nav
        className={
          shrinked
            ? "navbar nav-primary bg-black border-b border-neutral-700 py-4"
            : "navbar nav-primary border-black border-b-0 py-8"
        }
      >
        <div></div>
        <div className="hidden md:block">
          <div className="flex items-center transition-all 2xl:pr-52">
            {locations.map((location) => (
              <div
                key={location.label}
                className="sectionlink p-1 text-base font-bold text-gray-900 dark:text-gray-100 sm:p-4 tracking-wider cursor-pointer"
                onClick={() =>
                  location.ref.current.scrollIntoView({
                    behaviour: "smooth",
                    block: "start",
                  })
                }
              >
                {location.label}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
