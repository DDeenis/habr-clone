import faker from "@faker-js/faker";
import { useState } from "react";
import { BlogMinInfo } from "../types/blogs";

export const useBestBlogs = (): BlogMinInfo[] => {
  const [blogs, setBlogs] = useState<BlogMinInfo[]>([]);

  if (!blogs.length) {
    const newBlogs = Array(10)
      .fill(0)
      .map(() => createBlog())
      .sort((f, s) => s.rate - f.rate);
    setBlogs(newBlogs);
  }

  return blogs;
};

const createBlog = (): BlogMinInfo => {
  const name = faker.company.companyName();

  return {
    name,
    alias: name.toLowerCase().replaceAll(" ", "-"),
    avatar: faker.image.business(),
    rate: faker.datatype.number({
      min: 300,
      max: 6000,
    }),
  };
};
