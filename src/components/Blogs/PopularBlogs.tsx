import { useBestBlogs } from "@/hooks/blogs";
import React from "react";
import { Avatar } from "../common/Avatar";

export const PopularBlogs = () => {
  const blogs = useBestBlogs();

  return (
    <ul className="hidden lg:flex flex-col gap-4 bg-white p-4 box-border h-max w-full lg:max-w-sm">
      <li>
        <span className="font-medium text-gray-500">Лучшие блоги</span>
      </li>
      <li>
        <hr />
      </li>
      {blogs.map((b) => (
        <li key={b.name} className="flex justify-center items-center">
          <Avatar image={b.avatar} />
          <div className="flex w-full justify-between items-center pl-2">
            <strong className="text-base font-semibold whitespace-nowrap overflow-hidden text-ellipsis max-w-[70%]">
              {b.name}
            </strong>
            <span className="text-base font-semibold text-purple-500">
              {b.rate}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};
