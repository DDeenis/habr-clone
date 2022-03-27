import { capitalize } from "../helpers/stringUtils";
import faker from "@faker-js/faker";
import { ArticlePrewiewType, ArticleTag } from "../types/articles";
import { createUser } from "./user";
import { isBefore } from "date-fns";

interface UseArticlesOptions {
  page?: number;
  pageSize?: number;
}

const articles = new Map<number, ArticlePrewiewType[]>();

export const useArticles = (
  options?: UseArticlesOptions
): ArticlePrewiewType[] => {
  const pageSize = options?.pageSize ?? 10;
  const page = options?.page ? (options.page > 0 ? options.page : 1) : 1;
  const savedArticles = articles.get(page);

  if (savedArticles) {
    return savedArticles;
  }

  const newArticles = Array(pageSize)
    .fill(0)
    .map(() => createArticle())
    .sort((f, s) => (isBefore(f.publishedAt, s.publishedAt) ? 1 : -1));
  articles.set(page, newArticles);

  return newArticles;
};

export const useArticle = (id?: string): ArticlePrewiewType | undefined => {
  if (!id) return;

  for (const elem of articles) {
    const pageArticles = elem[1];
    for (const article of pageArticles) {
      if (article.id === id) return article;
    }
  }
};

const createArticle = (): ArticlePrewiewType => {
  const rate = faker.datatype.number({ min: -50, max: 100 });
  const viwes = faker.datatype.number({ min: 0, max: 5000 });
  const title = faker.hacker.phrase();

  return {
    id: faker.datatype.number({ min: 1000, max: 100000 }).toString(),
    title: capitalize(title),
    cut: faker.lorem.paragraph(6),
    coverImage: {
      url: faker.image.technics(),
      caption: faker.lorem.sentence(),
    },
    tags: generateTags(),
    author: createUser(),
    buttonText: capitalize(faker.word.verb()),
    publishedAt: faker.date.recent(),
    rate,
    views: viwes,
    marks: faker.datatype.number({ min: 0, max: Math.abs(rate) }),
    comments: faker.datatype.number({
      min: 0,
      max: Math.abs(rate),
    }),
  };
};

const generateTags = (count = 3): ArticleTag[] => {
  return Array(count)
    .fill(0)
    .map(() => ({
      label: capitalize(faker.word.noun()),
      path: faker.internet.url(),
    }));
};
