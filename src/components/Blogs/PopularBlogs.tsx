import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import { BlogMinInfo } from "src/types/blogs";
// import { BlogLabel } from "./BlogLabel";

const BlogLabel = dynamic(
  // @ts-ignore
  () => import("./BlogLabel").then((imp) => imp.BlogLabel),
  { ssr: false }
);

export const PopularBlogs: React.FC<{ blogs: BlogMinInfo[] }> = ({ blogs }) => {
  return (
    <ul className="hidden lg:flex flex-col gap-4 bg-white p-4 box-border h-max lg:max-w-sm">
      <li>
        <span className="font-medium text-gray-500">Лучшие блоги</span>
      </li>
      <li>
        <hr />
      </li>
      {blogs.map((b) => (
        <li key={b.name}>
          <BlogLabel blogInfo={b} />
        </li>
      ))}
      <li>
        <hr />
      </li>
      <li>
        <Link href={"companies"} passHref>
          <a className="font-medium text-blue-400 text-sm">Все компании</a>
        </Link>
      </li>
    </ul>
  );
};
