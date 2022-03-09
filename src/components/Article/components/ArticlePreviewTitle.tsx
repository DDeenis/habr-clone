import { classnames } from "@/helpers/attributes";
import React from "react";

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
      <a
        href={href}
        className={classnames(
          "font-semibold font-sans hover:text-blue-400 transition-colors",
          {
            "text-xl": variant === "primary",
            "text-lg": variant === "secondary",
          }
        )}
      >
        {children}
      </a>
    </h2>
  );
};
