import React from "react";
import { classnames } from "src/helpers/attributes";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  variant?: ButtonVariant;
}

const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-slate-100 hover:bg-slate-200 text-emerald-400",
  secondary: "",
};

export const Button: React.FC<ButtonProps> = ({ children, variant }) => {
  const classes =
    variant && variant in buttonVariants
      ? buttonVariants[variant]
      : buttonVariants.primary;

  return (
    <button
      className={classnames(
        "border-0 rounded-lg transition-colors text-base py-2 w-full max-w-xs",
        classes
      )}
    >
      {children}
    </button>
  );
};
