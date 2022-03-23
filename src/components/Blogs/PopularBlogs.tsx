import React from "react";
import { BlogMinInfo } from "@/types/blogs";
import { AsideBlock } from "../common/AsideBlock";
import { BlogLabel } from "./BlogLabel";
import { Link } from "react-router-dom";

export const PopularBlogs: React.FC<{ blogs: BlogMinInfo[] }> = ({ blogs }) => {
  return (
    <AsideBlock>
      <AsideBlock.Title>Лучшие блоги</AsideBlock.Title>
      <AsideBlock.Separator />
      {blogs.map((b) => (
        <AsideBlock.Element className="py-1" key={b.name}>
          <BlogLabel blogInfo={b} />
        </AsideBlock.Element>
      ))}
      <AsideBlock.Separator />
      <AsideBlock.Element>
        <Link to={"/companies"} className="font-medium text-blue-400 text-sm">
          Все компании
        </Link>
      </AsideBlock.Element>
    </AsideBlock>
  );
};
