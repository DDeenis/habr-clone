import React from "react";
import { Link } from "react-router-dom";

export const ArticleReadButton = ({
  children,
  href,
}: React.PropsWithChildren<{ href: string }>) => {
  return (
    <Link to={href} className="max-w-[110px] hidden lg:block">
      <button className="border-[1px] border-blue-400 box-border rounded-sm p-2 text-blue-400 text-sm hover:text-white hover:bg-blue-400 transition-colors duration-500 my-3 block w-full">
        {React.Children.count(children) > 0 ? children : "Читать далее"}
      </button>
    </Link>
  );
};
