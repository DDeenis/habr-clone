import { classnames } from "@/helpers/attributes";
import {
  ButtonVariant,
  buttonVariants,
} from "@/helpers/componentsSettings/button";
import React from "react";

interface ButtonProps {
  variant?: ButtonVariant;
}

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
