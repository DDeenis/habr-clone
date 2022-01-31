import faker from "@faker-js/faker";
import { useState } from "react";
import { BlogType } from "src/types/blogs";

// export const useBestBlogs = (): BlogType[] => {
//   const [blogs, setBlogs] = useState<BlogType[]>([]);

//   if (!blogs.length) {
//     const newBlogs = Array(10)
//       .fill(0)
//       .map(() => createBlog())
//       .sort((f, s) => s.rate - f.rate);
//     setBlogs(newBlogs);
//   }

//   return blogs;
// };

export const useBestBlogs = (): BlogType[] => {
  const blogs = Array(10)
    .fill(0)
    .map(() => createBlog())
    .sort((f, s) => s.rate - f.rate);

  return blogs;
};

const createBlog = (): BlogType => {
  const name = faker.company.companyName();

  return {
    name,
    alias: name.toLowerCase().replaceAll(" ", "-"),
    avatar: faker.image.business(),
    rate: faker.datatype.float({
      min: 300,
      max: 6000,
      precision: 2,
    }),
  };
};
