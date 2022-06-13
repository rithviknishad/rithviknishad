import {
  Email,
  GitHub,
  HackerRank,
  LinkedIn,
  Twitter,
  YouTube,
} from "./SocialButtons";

export default function Footer(props) {
  return (
    <footer className="flex flex-col px-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="container xl:max-w-screen-xl lg:flex justify-between mx-auto mt-2 lg:mt-8 mb-12">
        <section className="mb-8 lg:mb-0 font-semibold tracking-widest">
          RITHVIK NISHAD
        </section>
        <section>
          <hr className="lg:hidden mb-6 border-gray-200 dark:border-gray-800" />
          <h2 className="md:text-center lg:text-right text-gray-600 dark:text-gray-400 text-sm md:text-base">
            Fork, connect, like, follow - me
          </h2>
          <div className="flex flex-wrap md:justify-center items-center gap-8 mt-6">
            <GitHub username="rithviknishad" />
            <Twitter username="rithviknishad" />
            <Email mailId="mail@rithviknishad.dev" />
            <LinkedIn username="rithviknishad" />
            <YouTube channel={"UC97ytUgpyJrtGvso3SsOcJw"} />
            <HackerRank username="rithviknishad" />
          </div>
        </section>
      </div>
    </footer>
  );
}
