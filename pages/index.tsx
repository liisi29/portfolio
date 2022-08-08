import About from "@components/pages/about/About";
import Contact from "@components/pages/contact/Contact";
import Footer from "@components/layout/footer/Footer";
import Main from "@components/pages/main/Main";
import StackLogos from "@components/pages/stack/StackLogos";
import Work from "@components/pages/work/Work";

export default function Home() {
  return (
    <div>
      <Main />
      <About />
      <StackLogos />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
