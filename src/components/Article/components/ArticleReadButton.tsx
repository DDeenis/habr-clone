import Link from "next/link";
import React from "react";

export const ArticleReadButton = ({
  children,
  href,
}: React.PropsWithChildren<{ href: string }>) => {
  return (
    <Link href={href} passHref>
      <a className="max-w-[110px] hidden lg:block">
        <button className="border-[1px] border-blue-400 box-border rounded-sm p-2 text-blue-400 text-sm hover:text-white hover:bg-blue-400 transition-colors duration-500 my-3 block w-full">
          {React.Children.count(children) > 0 ? children : "Читать далее"}
        </button>
      </a>
    </Link>
  );
};
