import Head from "next/head";
import SkillCloud from "@components/elements/cloud/SkillCloud";
import EduCloud from "@components/elements/cloud/EduCloud";
import Work from "@components/work/Work";
import About from "@components/about/About";
import Main from "@components/main/Main";
import NavBar from "@components/layout/navbar/Navbar";
import Contact from "@components/contact/Contact";
import Footer from "@components/footer/Footer";

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
