const ContentCard = ({
  icon: Icon,
  categoryLabel,
  title,
  desc,
  meta,
  actionLabel,
  href,
}) => {
  return (
    <div className="bg-surface border-border overflow-hidden rounded-2xl border transition-transform duration-200 hover:-translate-y-1">
      <div className="bg-background-elevated border-border text-primary-light relative flex h-30 items-center justify-center border-b">
        <span className="text-accent bg-primary/14 absolute top-2.5 left-2.5 rounded-full px-2.5 py-0.5 font-mono text-[10px]">
          {categoryLabel}
        </span>
        <Icon size={26} />
      </div>
      <div className="p-4.5">
        <h4 className="font-display text-text mb-1.5 text-[15px]">{title}</h4>
        <p className="text-text-muted mb-3 text-[12.5px]">{desc}</p>
        <div className="text-text-muted flex items-center justify-between font-mono text-[11px]">
          <span>{meta}</span>
          <a href={href} className="btn btn-outline btn-sm">
            {actionLabel}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
