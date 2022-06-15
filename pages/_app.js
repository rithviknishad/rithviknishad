import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "../components/Footer";
import Head from "next/head";
import { useEffect, useState } from "react";
import Splash from "../components/Splash";

function MyApp({ Component, pageProps }) {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => setLoading(false), []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <Head>
        <meta name="theme-color" content="#000000" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
