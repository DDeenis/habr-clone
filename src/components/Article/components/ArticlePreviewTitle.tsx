import { classnames } from "@/helpers/attributes";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
  href: string;
  variant?: "primary" | "secondary";
}

export const ArticlePreviewTitle = ({
  children,
  href,
  variant = "primary",
}: React.PropsWithChildren<Props>) => {
  return (
    <h2>
      <Link
        to={href}
        className={classnames(
          "font-semibold font-sans hover:text-blue-400 transition-colors",
          {
            "text-xl": variant === "primary",
            "text-lg": variant === "secondary",
          }
        )}
      >
        {children}
      </Link>
    </h2>
  );
};
