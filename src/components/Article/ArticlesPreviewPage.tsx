import { useArticles } from "@/hooks/articles";
import dynamic from "next/dynamic";
import React from "react";

const ArticlePreview = dynamic(
  // @ts-ignore
  () => import("./ArticlePreview").then((i) => i.ArticlePreview),
  { ssr: false }
);

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