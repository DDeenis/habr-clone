import React from "react";
import { ArticleType } from "@/types/articles";
import { ArticleTags } from "./ArticleTags";
import { CoverImage } from "./components/CoverImage";
import { ArticlePreviewTitle } from "./components/ArticlePreviewTitle";
import { ArticleReadButton } from "./components/ArticleReadButton";
import { ArticleStats } from "./components/ArticleStats";
import { Avatar } from "../common/Avatar";
import { formatDistance } from "date-fns";
import { ru } from "date-fns/locale";

interface ArticlePreviewProps {
  article: ArticleType;
}

export const ArticlePreview: React.FC<ArticlePreviewProps> = ({ article }) => {
  const articleLink = `/posts/${article.id}`;
  const commentsLink = articleLink + "/comments";
  const dateFormatted = formatDistance(article.publishedAt, Date.now(), {
    locale: ru,
  });

  return (
    <article className="w-full bg-white mx-auto rounded-md box-border py-4 px-5 flex flex-col gap-3">
      <div className="flex gap-2 items-center justify-start">
        <a
          href={`/users/${article.author.username}`}
          className="flex gap-2 items-center justify-start"
        >
          <Avatar size="sm" image={article.author.avatar} />
          <span className="text-sm font-medium hover:text-blue-800 transition-colors">
            {article.author.username}
          </span>
        </a>
        <span className="text-sm text-gray-400">{dateFormatted} назад</span>
      </div>
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
