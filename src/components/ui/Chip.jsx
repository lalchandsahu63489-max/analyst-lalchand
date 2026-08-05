const Chip = ({ children, className, ...rest }) => {
  return (
    <span
      className={`border-border bg-surface text-text rounded-full border px-3.5 py-1.5 font-mono text-xs ${className}`}
    >
      {children}
    </span>
  );
};

export default Chip;
