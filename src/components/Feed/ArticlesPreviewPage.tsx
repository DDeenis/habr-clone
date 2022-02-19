import React from "react";
import { ArticleType } from "@/types/articles";
import { ArticlePreview } from "../Article/ArticlePreview";
import { FeedNews } from "./FeedNews";

export const ArticlesPreviewPage: React.FC<{ articles: ArticleType[] }> = ({
  articles,
}) => {
  const firstArticle = articles[0];
  return (
    <div className="flex flex-col gap-6 box-border">
      <ArticlePreview article={firstArticle} />
      <FeedNews articles={articles.slice(5)} />
      {articles.slice(1).map((a) => (
        <ArticlePreview article={a} key={a.title} />
      ))}
    </div>
  );
};
