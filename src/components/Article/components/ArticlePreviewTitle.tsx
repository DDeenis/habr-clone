import Link from "next/link";
import React from "react";

export const ArticlePreviewTitle = ({
  children,
  href,
}: React.PropsWithChildren<{ href: string }>) => {
  return (
    <h1>
      <Link href={href} passHref>
        <a className="font-semibold font-sans text-xl hover:text-blue-400 transition-colors">
          {children}
        </a>
      </Link>
    </h1>
  );
};
