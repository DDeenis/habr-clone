import { useArticle } from "@/hooks/articles";
import React from "react";
import { useParams } from "react-router-dom";

const ArticlePageContainer = () => {
  const { id } = useParams();
  const article = useArticle(id);

  return (
    <div className="w-full bg-white max-w-[1096px] mx-auto my-8">
      {article?.title}
    </div>
  );
};

export default ArticlePageContainer;
