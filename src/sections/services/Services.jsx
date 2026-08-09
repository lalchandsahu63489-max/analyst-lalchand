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
      </Container>
    </section>
  );
};

export default Services;
