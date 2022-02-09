import Link from "next/link";
import React from "react";
import { BlogType } from "src/types/blogs";
import { Avatar } from "../common/Avatar";

export const PopularBlogs: React.FC<{ blogs: BlogType[] }> = ({ blogs }) => {
  return (
    <ul className="hidden lg:flex flex-col gap-4 bg-white p-4 box-border h-max lg:max-w-sm">
      <li>
        <span className="font-medium text-gray-500">Лучшие блоги</span>
      </li>
      <li>
        <hr />
      </li>
      {blogs.map((b) => (
        <li key={b.name} className="flex justify-center items-center">
          <Link href={`/company/${b.alias}`} passHref>
            <a>
              <Avatar image={b.avatar} />
            </a>
          </Link>
          <div className="flex w-full justify-between items-center pl-2">
            <Link href={`/company/${b.alias}`} passHref>
              <a className="whitespace-nowrap overflow-hidden text-ellipsis max-w-[25ch]">
                <strong className="text-base font-semibold">{b.name}</strong>
              </a>
            </Link>
            <span className="text-base font-semibold text-purple-500 pl-1">
              {b.rate}
            </span>
          </div>
        </li>
      ))}
      <li>
        <hr />
      </li>
      <li>
        <Link href={"companies"} passHref>
          <a className="font-medium text-blue-400 text-sm">Все компании</a>
        </Link>
      </li>
    </ul>
  );
};
