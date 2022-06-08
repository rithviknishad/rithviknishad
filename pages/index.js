import Head from "next/head";
import Script from "next/script";

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
    <div>
      <Head>
        <script
          type="application/json"
          id="my-template-data"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(templateData) }}
        />
      </Head>
      <div id="root"></div>
      <Script src="https://cdn.jsdelivr.net/npm/mytemplate.xyz@0.5.1/build/Index.js" />
    </div>
  );
}
