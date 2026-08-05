import { projectFilters, projectsData } from "../../constants/projects";
import Container from "../../components/ui/Container";
import ProjectCard from "./components/ProjectCard";
import { useMemo, useState } from "react";
import SectionHeader from "../../components/common/SectionHeader";

const Projects = ({
  onViewDetails = (id) => console.log("Open modal:", id),
}) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projectsData;

    return projectsData.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" data-reveal>
      <Container>
        <SectionHeader
          eyebrow="// Portfolio"
          title="Projects"
          subtitle="Explore my data analysis projects, dashboards and analytical solutions."
          className="mb-14"
        />

        <div
          role="tablist"
          aria-label="Project Filters"
          className="mb-10 flex flex-wrap justify-center gap-2.5"
        >
          {projectFilters.map(({ label, value }) => (
            <button
              key={value}
              type="button"
              role="tab"
              aria-selected={activeFilter === value}
              onClick={() => setActiveFilter(value)}
              className={`rounded-full border px-4.5 py-2 font-mono text-xs transition-all duration-200 ${
                activeFilter === value
                  ? "border-accent bg-primary-light-bg text-accent"
                  : "border-border bg-surface text-text-muted hover:text-text"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
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
