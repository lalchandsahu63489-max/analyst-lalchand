import Button from "../../../components/ui/Button";

const ProjectCard = ({ project, onViewDetails }) => {
  return (
    <div className="group border-border bg-surface hover:border-primary-light flex flex-col overflow-hidden rounded-2xl border transition-all duration-200 hover:-translate-y-1.5">
      <div className="border-border bg-background-elevated relative flex h-32 items-end gap-1.5 overflow-hidden border-b p-4">
        {project.featured && (
          <span className="bg-warning/15 text-warning absolute top-2.5 right-2.5 rounded-full px-2.5 py-0.5 font-mono text-[10px]">
            Featured
          </span>
        )}

        {project.bars.map((height, index) => (
          <div
            key={index}
            style={{ height: `${height}%` }}
            className="from-primary to-accent flex-1 rounded-t-sm bg-linear-to-b opacity-55 transition-opacity duration-200 group-hover:opacity-85"
          />
        ))}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-text mb-2 text-lg">{project.title}</h3>

        <p className="text-text-muted mb-3.5 flex-1 text-sm">{project.desc}</p>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-primary/15 text-accent rounded-md px-2.5 py-0.5 font-mono text-[10px]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-2.5">
          <Button
            variant="primary"
            size="sm"
            onClick={() => onViewDetails(project.id)}
          >
            View Details
          </Button>

          <Button
            as="a"
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            variant="outline"
            size="sm"
          >
            GitHub
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
