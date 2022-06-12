import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { BsArrowRight } from "react-icons/bs";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";

const templateData = {
  name: "Rithvik Nishad",
  about: "Rebuilding the power grid ⚡",
  primaryColor: "black",
  socialLinks: [
    "https://github.com/rithviknishad",
    "https://www.linkedin.com/in/rithviknishad/",
    "https://twitter.com/rithviknishad",
  ],
  repositories: [
    "Vaidyuti/vems",
    "rithviknishad/prosumer",
    "coronasafe/care_fe",
    "osumpi/osumpi",
    "osumpi/bakecode",
    "osumpi/recipe",
  ],
};

{
  /* <PrimaryButton Icon={BsArrowRight}>ABOUT ME</PrimaryButton>
      <div className="py-10"></div>
      <SecondaryButton Icon={BsArrowRight}>SECONDARY BUTTON</SecondaryButton> */
}

export default function Home() {
  return (
    <div className="scroll-smooth">
      {/* Header */}
      <section className="flex flex-col justify-center relative h-screen dark:bg-neutral-800 pt-8 px-8 lg:overflow-hidden bg-hero-pattern bg-repeat-x bg-cover scales bg-blend-multiply dark:bg-blend-color-burn">
        <div className="container relative lg:min-h-screen flex flex-col lg:flex-row lg:items-center mx-auto max-w-screen-xl z-10 -mb-16">
          <div className="w-full lg:w-1/2 flex justify-center self-center">
            <Image
              className="rounded-full"
              src="/images/profile-picture.jfif"
              width={200}
              height={200}
              alt="Photo of Rithvik Nishad"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-primary border-t border-gray-100 dark:border-gray-500 mt-6 pt-6 lg:border-t-0 lg:pt-0 leading-none">
              Rithvik Nishad
            </h1>
            <p className="text-gray-900 font-bold dark:text-gray-200 my-10 text-lg xl:text-xl leading-tight">
              Software Developer . Electrical Engineer . Creator
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="w-full h-screen bg-black"></section>

      {/* Tech Stacks */}
      <section className="w-full h-screen bg-primary"></section>
    </div>
  );
}
