import Link from "next/link";
import React from "react";
import { ArticleTag } from "src/types/articles";

interface ArticleTagsProps {
  tags: ArticleTag[];
}

export const ArticleTags: React.FC<ArticleTagsProps> = ({ tags }) => {
  return (
    <ul className="gap-2 hidden md:flex">
      {tags.map((t) => (
        <li key={t.label} className="cursor-pointer">
          <Link href={t.path} passHref>
            <a className="text-gray-400 text-sm hover:text-blue-300 transition-colors">
              {t.label}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
