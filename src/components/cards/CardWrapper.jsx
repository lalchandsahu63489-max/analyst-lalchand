const CardWrapper = ({ children, className = "", ...rest }) => {
  return (
    <div
      className={`border-border bg-surface rounded-xl border ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default CardWrapper;
