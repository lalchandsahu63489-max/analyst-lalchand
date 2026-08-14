import Button from "../../../components/ui/Button";
import { FiImage } from "react-icons/fi";

const ProjectCard = ({
  title,
  description,
  tags = [],
  image,
  githubUrl,
  featured = false,
  onViewDetails,
}) => {
  return (
    <div className="group border-border bg-surface hover:border-primary-light flex flex-col overflow-hidden rounded-2xl border transition-all duration-200 hover:-translate-y-1.5">
      {/* Image */}
      <div className="border-border bg-background-elevated relative flex h-32 items-center justify-center overflow-hidden border-b">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover" />
        ) : (
          <FiImage size={26} className="text-text-muted" />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-text mb-2 text-lg">{title}</h3>

        {description && (
          <p className="text-text-muted mb-3.5 flex-1 text-sm">{description}</p>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-primary/15 text-accent rounded-md px-2.5 py-0.5 font-mono text-[10px]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2.5">
          <Button variant="primary" size="sm" onClick={onViewDetails}>
            View Details
          </Button>

          {githubUrl && (
            <Button
              as="a"
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              variant="outline"
              size="sm"
            >
              GitHub
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
