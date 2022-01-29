import faker from "@faker-js/faker";
import { useState } from "react";
import { ArticleType, ArticleTag } from "src/types/articles";
import { createUser } from "./user";

interface UseArticlesOptions {
  page?: number;
  pageSize?: number;
}

const articles = new Map<number, ArticleType[]>();

// export const useArticles = (options?: UseArticlesOptions): ArticleType[] => {
//   const pageSize = options?.pageSize ?? 10;
//   const page = options?.page ? (options.page > 0 ? options.page : 1) : 1;
//   const savedArticles = articles.get(page);

//   if (savedArticles) {
//     return savedArticles;
//   }

//   const newArticles = Array(pageSize)
//     .fill(0)
//     .map(() => createArticle());
//   articles.set(page, newArticles);

//   return newArticles;
// };

export const useArticles = (options?: UseArticlesOptions): ArticleType[] => {
  const pageSize = options?.pageSize ?? 10;
  const page = options?.page ? (options.page > 0 ? options.page : 1) : 1;
  const savedArticles = articles.get(page);

  if (savedArticles) {
    return savedArticles;
  }

  const newArticles = Array(pageSize)
    .fill(0)
    .map(() => createArticle());
  articles.set(page, newArticles);

  return newArticles;
};

const capitalize = (source: string) =>
  source[0].toUpperCase() + source.substring(1);

const createArticle = (): ArticleType => {
  const rate = faker.datatype.number({ min: -50, max: 100 });
  const viwes = faker.datatype.number({ min: 0, max: 5000 });
  const title = faker.hacker.phrase();

  return {
    id: faker.datatype.number({ min: 1000, max: 100000 }),
    title: capitalize(title),
    cut: faker.lorem.paragraph(10),
    coverImage: {
      url: faker.image.technics(),
      caption: faker.lorem.sentence(),
    },
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
      label: capitalize(faker.word.noun()),
      path: faker.internet.url(),
    }));
};
