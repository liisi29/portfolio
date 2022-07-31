import Head from "next/head";
import SkillCloud from "@components/elements/cloud/SkillCloud";
import EduCloud from "@components/elements/cloud/EduCloud";
import Work from "@components/work/Work";
import About from "@components/about/About";
import Main from "@components/main/Main";
import NavBar from "@components/navbar/Navbar";
import Contact from "@components/contact/Contact";
import Footer from "@components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Liisi | Front End Developer</title>
        <meta name="robots" content="noindex"></meta>
        <meta name="description" content="Love code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Main />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
