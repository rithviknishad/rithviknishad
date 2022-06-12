import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <Head>
        <meta name="theme-color" content="#000000" />
      </Head>
      <NavigationBar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
