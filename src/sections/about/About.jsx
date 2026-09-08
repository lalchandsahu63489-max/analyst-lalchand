import Container from "../../components/ui/Container";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";

const About = () => {
  return (
    <section id="about" data-reveal>
      <Container className="space-y-20">
        {/* About me */}

        <AboutMe />

        {/* Education */}

        <Education />
      </Container>
    </section>
  );
};

export default About;
