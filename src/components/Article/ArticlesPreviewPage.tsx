import { useArticles } from "@/hooks/articles";
import React from "react";
import { ArticlePreview } from "./ArticlePreview";

export const ArticlesPreviewPage = () => {
  const articles = useArticles();
  return (
    <div className="flex flex-col gap-6 box-border md:px-[10vw] px-3 py-4">
      {articles.map((a) => (
        <ArticlePreview article={a} key={a.title} />
      ))}
    </div>
  );
};
