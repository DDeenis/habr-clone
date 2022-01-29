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
  title: string;
  tags: ArticleTag[];
  cut: string;
  author: User;
  publishedAt: Date;
  rate: number;
  views: number;
  marks: number;
  // Comment[]
  comments: number;
  buttonText?: string;
  coverImage?: string;
}
