import { classnames } from "@/helpers/attributes";
import {
  ButtonVariant,
  buttonVariants,
} from "@/helpers/componentsSettings/button";
import React from "react";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: ButtonVariant;
  bold?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  bold,
  ...props
}) => {
  const classes =
    variant && variant in buttonVariants
      ? buttonVariants[variant]
      : buttonVariants.primary;

  return (
    <button
      className={classnames(
        "border-0 rounded-lg transition-colors text-base py-2 w-full max-w-xs",
        classes,
        { "font-semibold": bold }
      )}
      {...props}
    >
      {children}
    </button>
  );
};
