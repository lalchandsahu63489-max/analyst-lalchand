import React from "react";

const Button = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  // Base classes for alignment, typography, and focus states
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

  // Variant mappings using your custom CSS color variables
  const variants = {
    primary: "btn-primary",
    outline: "btn-outline",
    ghost: "btn-ghost",
  };

  // Size variations
  const sizes = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-6 text-base",
  };

  const computedClassName =
    `btn ${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`.trim();

  return (
    <button className={computedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
