import { User } from "./user";

export interface ArticleTag {
  label: string;
  path: string;
}

export interface ArticleImage {
  url: string;
  caption?: string;
}

export interface ArticleType {
  id: number;
  title: string;
  tags: ArticleTag[];
  cut: string;
  author: User;
  publishedAt: string;
  rate: number;
  views: number;
  marks: number;
  // Comment[]
  comments: number;
  buttonText?: string;
  coverImage?: ArticleImage;
}
