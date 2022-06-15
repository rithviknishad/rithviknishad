export default function SkillCard({ category, skills }) {
  const renderedSkills = [];

  for (const skillKey in skills) {
    renderedSkills.push([
      <div
        key={skillKey}
        className="flex flex-row items-center gap-2 hover:dark:text-primary w-40"
      >
        {skills[skillKey].icon}
        <span className="text-xs md:text-base tracking-wide">
          {skills[skillKey].name}
        </span>
      </div>,
    ]);
  }

  return (
    <div className="group flex items-start hover:dark:text-white lg:p-4 rounded-lg transition-all ease-out text-gray-800 dark:text-gray-400 text-base hover:bg-opacity-75 hover:bg-primary-900">
      {/* <div className="min-w-fit text-2xl mt-5">{icon}</div> */}
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <span className="font-bold tracking-wider lg:text-xl">
            {category}
          </span>
        </div>
        <span className="uppercase text-xs lg:text-sm tracking-wider">
          {/* {subtitle} */}
        </span>
        <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-4">
          {renderedSkills}
        </div>
      </div>
    </div>
  );
}
