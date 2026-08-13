import { FiEdit2, FiTrash2, FiGithub, FiImage } from "react-icons/fi";

const AdminCard = ({
  title,
  description,
  tags = [],
  showTags = true,
  image,
  githubUrl,
  onEdit,
  onDelete,
}) => {
  console.log(tags);
  return (
    <div className="bg-surface border-border flex flex-col overflow-hidden rounded-2xl border">
      <div className="bg-background-elevated border-border flex h-35 items-center justify-center overflow-hidden border-b">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover" />
        ) : (
          <FiImage size={26} className="text-text-muted" />
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-text mb-1.5 text-[15.5px]">{title}</h3>
        {description && (
          <p className="text-text-muted mb-3.5 flex-1 text-[13px]">
            {description}
          </p>
        )}

        {showTags && tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-accent bg-primary/14 rounded-md px-2.5 py-0.5 font-mono text-[10.5px]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex items-center justify-between pt-1">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onEdit}
              aria-label={`Edit ${title}`}
              className="border-border text-text-muted hover:text-accent hover:border-accent flex h-8 w-8 items-center justify-center rounded-lg border transition-colors duration-150"
            >
              <FiEdit2 size={14} />
            </button>
            <button
              type="button"
              onClick={onDelete}
              aria-label={`Delete ${title}`}
              className="border-border text-text-muted flex h-8 w-8 items-center justify-center rounded-lg border transition-colors duration-150 hover:border-red-400 hover:text-red-400"
            >
              <FiTrash2 size={14} />
            </button>
          </div>

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${title} on GitHub`}
              className="text-text-muted hover:text-accent transition-colors duration-150"
            >
              <FiGithub size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
