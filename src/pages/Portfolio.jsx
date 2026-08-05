import BackgroundDecor from "../components/common/BackgroundDecor";
import useReveal from "../hooks/useReveal";
import Footer from "../layouts/footer/Footer";
import Header from "../layouts/header/Header";
import About from "../sections/about/About";
import CaseStudies from "../sections/case studies/CaseStudies ";
import Contact from "../sections/contact/Contact";
import Content from "../sections/content/Content";
import Hero from "../sections/hero/Hero";
import Projects from "../sections/projects/Projects";
import Services from "../sections/services/Services";

const Portfolio = () => {
  useReveal();

  return (
    <>
      <BackgroundDecor />
      <Header />
      <main className="space-y-15">
        {/* Hero */}

        <Hero />

        {/* About */}

        <About />

        {/* Projects */}

        <Projects />

        {/* Case studies */}

        <CaseStudies />

        {/* Services */}

        <Services />

        {/* Content*/}

        <Content />

        {/* Contact */}

        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
