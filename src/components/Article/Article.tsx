import React from "react";
import { ArticleType } from "src/types/articles";

interface ArticleProps {
  article: ArticleType;
}

export const Article: React.FC<ArticleProps> = ({ article }) => {
  return <article></article>;
};