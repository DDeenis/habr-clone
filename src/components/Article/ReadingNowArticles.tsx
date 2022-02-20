import { ArticleType } from "@/types/articles";
import React from "react";
import { AsideBlock } from "../common/AsideBlock";
import { ArticleStats } from "./components/ArticleStats";

type Props = {
  articles: ArticleType[];
};

export const ReadingNowArticles = ({ articles }: Props) => {
  return (
    <AsideBlock>
      <AsideBlock.Title>Читают сейчас</AsideBlock.Title>
      {articles.map((a) => (
        <React.Fragment key={a.id}>
          <AsideBlock.Separator />
          <AsideBlock.Element>
            <div className="flex flex-col gap-3">
              <a
                href={`/post/${a.id}`}
                className="text-sm font-semibold hover:text-blue-400 transition-colors"
              >
                {a.title}
              </a>
              <ArticleStats
                views={a.views}
                comments={a.comments}
                commentsHref={`/post/${a.id}/comments`}
              />
            </div>
          </AsideBlock.Element>
        </React.Fragment>
      ))}
    </AsideBlock>
  );
};
