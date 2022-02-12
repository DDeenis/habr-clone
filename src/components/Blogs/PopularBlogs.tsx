import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import { BlogMinInfo } from "src/types/blogs";
import { AsideBlock } from "../common/AsideBlock";
// import { BlogLabel } from "./BlogLabel";

const BlogLabel = dynamic(
  // @ts-ignore
  () => import("./BlogLabel").then((imp) => imp.BlogLabel),
  { ssr: false }
);

export const PopularBlogs: React.FC<{ blogs: BlogMinInfo[] }> = ({ blogs }) => {
  return (
    <AsideBlock>
      <AsideBlock.Title>Лучшие блоги</AsideBlock.Title>
      <AsideBlock.Separator />
      {blogs.map((b) => (
        <AsideBlock.Element key={b.name}>
          <BlogLabel blogInfo={b} />
        </AsideBlock.Element>
      ))}
      <AsideBlock.Separator />
      <AsideBlock.Element>
        <Link href={"companies"} passHref>
          <a className="font-medium text-blue-400 text-sm">Все компании</a>
        </Link>
      </AsideBlock.Element>
    </AsideBlock>
  );
};
