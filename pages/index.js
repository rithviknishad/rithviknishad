import Head from "next/head";
import Script from "next/script";
import { BsArrowRight } from "react-icons/bs";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";

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

export default function Home() {
  return (
    <div className="p-10">
      <PrimaryButton Icon={BsArrowRight}>ABOUT ME</PrimaryButton>
      <div className="py-10"></div>
      <SecondaryButton Icon={BsArrowRight}>SECONDARY BUTTON</SecondaryButton>
    </div>
  );
}
