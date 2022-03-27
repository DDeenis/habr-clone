import React from "react";
import { ArticlePrewiewType } from "@/types/articles";
import { ArticleTags } from "./ArticleTags";
import { CoverImage } from "./components/CoverImage";
import { ArticlePreviewTitle } from "./components/ArticlePreviewTitle";
import { ArticleReadButton } from "./components/ArticleReadButton";
import { ArticleStats } from "./components/ArticleStats";
import { ArticleUserInfo } from "./components/ArticleUserInfo";

interface ArticlePreviewProps {
  article: ArticlePrewiewType;
}

export const ArticlePreview: React.FC<ArticlePreviewProps> = ({ article }) => {
  const articleLink = `/posts/${article.id}`;
  const commentsLink = articleLink + "/comments";

  return (
    <article className="w-full bg-white mx-auto rounded-md box-border py-4 px-5 flex flex-col gap-3">
      <ArticleUserInfo
        user={article.author}
        publishedAt={article.publishedAt}
      />
      <ArticlePreviewTitle href={articleLink}>
        {article.title}
      </ArticlePreviewTitle>
      <ArticleTags tags={article.tags} />
      <CoverImage img={article.coverImage} href={articleLink} />
      <p className="text-base hidden lg:block">{article.cut}</p>
      <ArticleReadButton href={articleLink}>
        {article.buttonText}
      </ArticleReadButton>
      <ArticleStats
        commentsHref={commentsLink}
        rate={article.rate}
        views={article.views}
        marks={article.marks}
        comments={article.comments}
      />
    </article>
  );
};
