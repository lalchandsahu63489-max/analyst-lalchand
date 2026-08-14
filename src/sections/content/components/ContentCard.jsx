const ContentCard = ({
  title,
  description,
  image,
  tags = [],
  featured = false,
  githubUrl,
}) => {
  return (
    <div className="group border-border bg-surface hover:border-primary-light flex flex-col overflow-hidden rounded-2xl border transition-all duration-200 hover:-translate-y-1.5">
      {/* Image */}
      <div className="border-border bg-background-elevated relative flex h-32 items-center justify-center overflow-hidden border-b">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover" />
        ) : (
          <div className="text-text-muted">No Image</div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-text mb-2 text-lg">{title}</h3>

        {description && (
          <p className="text-text-muted mb-3.5 flex-1 text-sm">{description}</p>
        )}

        {/* GitHub */}
        {githubUrl && (
          <div>
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline btn-sm"
            >
              GitHub
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentCard;
