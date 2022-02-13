import React from "react";
import { ArticleType } from "@/types/articles";
import { ArticlePreview } from "./ArticlePreview";

export const ArticlesPreviewPage: React.FC<{ articles: ArticleType[] }> = ({
  articles,
}) => {
  return (
    <div className="flex flex-col gap-6 box-border">
      {articles.map((a) => (
        <ArticlePreview article={a} key={a.title} />
      ))}
    </div>
  );
};
