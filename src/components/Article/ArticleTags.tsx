import React from "react";
import { ArticleTag } from "@/types/articles";
import { Link } from "react-router-dom";

interface ArticleTagsProps {
  tags: ArticleTag[];
}

export const ArticleTags: React.FC<ArticleTagsProps> = ({ tags }) => {
  return (
    <ul className="gap-2 hidden md:flex">
      {tags.map((t) => (
        <li key={t.label} className="cursor-pointer">
          <Link
            to={t.path}
            className="text-gray-400 text-sm hover:text-blue-300 transition-colors"
          >
            {t.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
