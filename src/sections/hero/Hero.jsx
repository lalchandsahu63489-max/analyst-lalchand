import Container from "../../components/ui/Container";
import SocialLinks from "../../components/ui/SocialLinks";
import useTypingEffect from "../../hooks/useTypingEffect";
import HeroTop from "./components/HeroTop";
import SkillList from "./components/SkillList";

const Hero = () => {
  return (
    <section id="home" data-reveal>
      <Container>
        <div className="pt-40 pb-16 text-center">
          {/* Hero Top  */}

          <HeroTop />

          {/* Social Links */}

          <SocialLinks />

          {/* Skill List */}

          <SkillList />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
