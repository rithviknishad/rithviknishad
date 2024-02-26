import {
  Email,
  GitHub,
  HackerRank,
  LinkedIn,
  Twitter,
  YouTube,
} from "@/components/SocialButtons";

export default function Footer() {
  return (
    <footer className="flex flex-col px-4">
      <hr className="w-full border-1 border-zinc-800 mb-8" />
      <div className="container xl:max-w-screen-xl lg:flex justify-between mx-auto mt-2 lg:mt-8 mb-12">
        <section className="mb-8 lg:mb-0 font-semibold tracking-widest">
          RITHVIK NISHAD
        </section>
        <section>
          <hr className="lg:hidden mb-6 border-zinc-900" />
          <h2 className="md:text-center lg:text-right text-zinc-400 text-sm md:text-base">
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
