import { User } from "./user";

export interface ArticleTag {
  label: string;
  path: string;
}

export interface ArticleImageType {
  url: string;
  caption?: string;
}

export interface ArticleCommentType {
  id: string;
  user: User;
  publishDate: Date;
  content: string;
  rate: number;
  isSeen: boolean;
  isBookmarked: boolean;
}

export interface ArticlePrewiewType {
  id: string;
  title: string;
  tags: ArticleTag[];
  cut: string;
  author: User;
  publishedAt: Date;
  rate: number;
  views: number;
  marks: number;
  comments: number;
  buttonText?: string;
  coverImage?: ArticleImageType;
}

export interface ArticleType
  extends Omit<ArticlePrewiewType, "buttonText" | "comments" | "cut"> {
  // rich text
  content: string;
  comments: ArticleCommentType[];
}
