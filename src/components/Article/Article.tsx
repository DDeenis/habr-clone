import React from "react";
import { ArticleType } from "@/types/articles";
import { ArticleUserInfo } from "./components/ArticleUserInfo";
import { ArticleTitle } from "./components/ArticleTitle";
import { ArticleTags } from "./ArticleTags";
import { ArticleImage } from "./components/ArticleImage";

interface ArticleProps {
  article: ArticleType;
}

export const Article: React.FC<ArticleProps> = ({ article }) => {
  return (
    <article>
      <ArticleUserInfo
        user={article.author}
        publishedAt={article.publishedAt}
      />
      <ArticleTitle>{article.title}</ArticleTitle>
      <ArticleTags tags={article.tags} />
      <div className="mt-8">
        {article.coverImage && <ArticleImage img={article.coverImage} />}
        {/* Rich text component */}
        <span>{article.content}</span>
      </div>
    </article>
  );
};
