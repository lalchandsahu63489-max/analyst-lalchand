import { projectsData } from "../../constants/projects";
import Container from "../../components/ui/Container";
import ProjectCard from "./components/ProjectCard";
import { useMemo, useState } from "react";
import SectionHeader from "../../components/common/SectionHeader";
import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../../services/getMethods";

const Projects = ({
  onViewDetails = (id) => console.log("Open modal:", id),
}) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

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
          {data?.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.shortDescription}
              image={project.imgUrl}
              tags={project.tags}
              githubUrl={project.githubUrl}
              onViewDetails={() => onViewDetails(project.id)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
