export default function SkillCard({ category, skills }) {
  const renderedSkills = [];

  for (const skillKey in skills) {
    renderedSkills.push([
      <a
        key={skillKey}
        href={skills[skillKey].link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center gap-2 hover:dark:text-zinc-900 hover:bg-white w-40 px-2 py-1 transition-all ease-in-out rounded"
      >
        {skills[skillKey].icon}
        <span className="text-xs md:text-base tracking-wide">
          {skills[skillKey].name}
        </span>
      </a>,
    ]);
  }

  return (
    <div className="group flex items-start lg:hover:dark:text-white lg:p-4 rounded-lg transition-all ease-out text-gray-800 dark:text-gray-400 text-base lg:hover:bg-opacity-75 lg:hover:bg-primary-900">
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
        <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-3">
          {renderedSkills}
        </div>
      </div>
    </div>
  );
}
