import React from "react";
import { ArticlePrewiewType } from "@/types/articles";
import { ArticlePreview } from "../Article/ArticlePreview";
import { FeedNews } from "./FeedNews";
import { FeedHeader } from "./FeedHeader";

export const UserFeed: React.FC<{ articles: ArticlePrewiewType[] }> = ({
  articles,
}) => {
  const firstArticle = articles[0];
  return (
    <div className="flex flex-col gap-3">
      <FeedHeader />
      <ArticlePreview article={firstArticle} />
      <FeedNews articles={articles.slice(5)} />
      {articles.slice(1).map((a) => (
        <ArticlePreview article={a} key={a.title} />
      ))}
    </div>
  );
};
