import SectionHeader from "../../components/common/SectionHeader";
import Container from "../../components/ui/Container";
import { servicesData } from "../../constants/services";
import ServiceCard from "./components/ServiceCard";

const Services = () => {
  return (
    <section id="services" data-reveal>
      <Container>
        <SectionHeader
          eyebrow=" // Freelance"
          title="Services"
          subtitle="Helping businesses make better decisions through data analysis and
            visualization."
          className="mb-14"
        />

        <div className="mb-13 grid grid-cols-1 gap-5.5 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="border-border from-primary/12 to-accent/8 mb-10 rounded-2xl border bg-linear-to-br p-10 text-center">
          <h3 className="font-display text-text mb-5 text-[22px]">
            Need Help With Your Data?
          </h3>
          <div className="flex flex-wrap justify-center gap-3.5">
            <a href="#contact" className="btn btn-primary">
              Contact Me
            </a>
            <a href="#projects" className="btn btn-ghost">
              View My Work
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
