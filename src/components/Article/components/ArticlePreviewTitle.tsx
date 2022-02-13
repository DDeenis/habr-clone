import React from "react";

export const ArticlePreviewTitle = ({
  children,
  href,
}: React.PropsWithChildren<{ href: string }>) => {
  return (
    <h1>
      <a
        href={href}
        className="font-semibold font-sans text-xl hover:text-blue-400 transition-colors"
      >
        {children}
      </a>
    </h1>
  );
};
