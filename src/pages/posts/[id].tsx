import { ArticleUserInfo } from "@/components/Article/components/ArticleUserInfo";
import { MainContainer } from "@/components/common/MainContainer";
import { useArticle } from "@/hooks/articles";
import React from "react";
import { useParams } from "react-router-dom";

const ArticlePageContainer = () => {
  const { id } = useParams();
  const article = useArticle(id);

  if (!article) {
    return <div>Статья не найдена</div>;
  }

  return (
    <MainContainer className="bg-white my-8">
      <ArticleUserInfo
        user={article.author}
        publishedAt={article.publishedAt}
      />
    </MainContainer>
  );
};

export default ArticlePageContainer;
