import About from "@components/pages/about/About";
import Contact from "@components/pages/contact/Contact";
import Footer from "@components/layout/footer/Footer";
import Main from "@components/pages/main/Main";
import StackLogos from "@components/pages/stack/StackLogos";
import Experience from "@components/pages/experience/Experience";

export default function Home() {
  return (
    <div>
      <Main />
      <About />
      <StackLogos />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
