import Container from "../../components/ui/Container";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import MyJourney from "./components/MyJourney";
import Personality from "./components/Personality";
import ProofOfWork from "./components/ProofOfWork";

const About = () => {
  return (
    <section id="about" data-reveal>
      <Container className="space-y-20">
        {/* About me */}

        <AboutMe />

        {/* My Learning Jpourney */}

        <MyJourney />

        {/* Education */}

        <Education />
      </Container>
    </section>
  );
};

export default About;
