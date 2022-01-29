import faker from "@faker-js/faker";
import { Article, ArticleTag } from "src/types/articles";
import { createUser } from "./user";

interface UseArticlesOptions {
  page?: number;
  pageSize?: number;
}

export const useArticles = (options?: UseArticlesOptions): Article[] => {
  const pageSize = options?.pageSize ?? 10;

  return Array(pageSize)
    .fill(0)
    .map(() => createArticle());
};

const createArticle = (): Article => {
  const rate = faker.datatype.number({ min: -50, max: 100 });
  const viwes = faker.datatype.number({ min: 0, max: 5000 });

  return {
    title: faker.hacker.phrase(),
    cut: faker.lorem.paragraph(10),
    coverImage: faker.image.abstract(),
    tags: generateTags(),
    author: createUser(),
    buttonText: faker.word.verb(),
    publishedAt: faker.date.past(),
    rate,
    views: viwes,
    marks: faker.datatype.number({ min: 0, max: Math.abs(rate) }),
    comments: faker.datatype.number({
      min: 0,
      max: Math.abs(rate),
    }),
  };
};

const generateTags = (count: number = 3): ArticleTag[] => {
  return Array(count)
    .fill(0)
    .map(() => ({
      label: faker.word.noun(),
      path: faker.internet.url(),
    }));
};
