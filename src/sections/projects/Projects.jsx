import { projectsData } from "../../constants/projects";
import Container from "../../components/ui/Container";
import ProjectCard from "./components/ProjectCard";
import { useMemo, useState } from "react";
import SectionHeader from "../../components/common/SectionHeader";

const Projects = ({
  onViewDetails = (id) => console.log("Open modal:", id),
}) => {
  return (
    <section id="projects" data-reveal>
      <Container>
        <SectionHeader
          eyebrow="// Portfolio"
          title="Projects"
          subtitle="Explore my data analysis projects, dashboards and analytical solutions."
          className="mb-14"
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
