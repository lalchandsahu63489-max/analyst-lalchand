const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  className = "",
  titleClassName = "",
}) => {
  return (
    <div className={`mx-auto max-w-160 text-center ${className}`}>
      <span className="text-accent mb-3.5 inline-block font-mono text-xs tracking-widest uppercase">
        {eyebrow}
      </span>
      <h2
        className={`font-display text-text mb-3.5 font-bold ${titleClassName || "text-4xl"}`}
      >
        {title}
      </h2>
      {subtitle && <p className="text-text-muted text-[15.5px]">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
