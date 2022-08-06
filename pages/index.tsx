import Head from "next/head";
import SkillCloud from "@components/elements/cloud/SkillCloud";
import EduCloud from "@components/elements/cloud/EduCloud";
import Work from "@components/pages/work/Work";
import About from "@components/pages/about/About";
import Main from "@components/pages/main/Main";
import NavBar from "@components/layout/navbar/Navbar";
import Contact from "@components/pages/contact/Contact";
import Footer from "@components/pages/footer/Footer";

export default function Home() {
  return (
    <div>
      <Main />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
