const ServiceCard = ({ icon: Icon, title, desc, tags }) => {
  return (
    <div className="border-border bg-surface hover:border-accent rounded-2xl border p-6.5 transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-[0_16px_32px_-18px_rgba(34,211,238,0.25)]">
      <div className="bg-primary/14 text-primary-light mb-4 flex h-11.5 w-11.5 items-center justify-center rounded-[11px]">
        <Icon size={22} />
      </div>
      <h3 className="font-display text-text mb-2.5 text-[17px]">{title}</h3>
      <p className="text-text-muted mb-3.5 text-[13.5px]">{desc}</p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-primary/14 text-accent rounded-md px-2.5 py-0.5 font-mono text-[10.5px]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
