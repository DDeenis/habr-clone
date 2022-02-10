import dynamic from "next/dynamic";
import React from "react";
import { ArticleType } from "src/types/articles";
// import { ArticlePreview } from "./ArticlePreview";

const ArticlePreview = dynamic(
  // @ts-ignore
  () => import("./ArticlePreview").then((imp) => imp.ArticlePreview),
  {
    ssr: false,
  }
);

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
