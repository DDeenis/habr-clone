import Link from "next/link";
import React from "react";
import { BlogMinInfo } from "src/types/blogs";
import { Avatar } from "../common/Avatar";

export const BlogLabel: React.FC<{ blogInfo: BlogMinInfo }> = ({
  blogInfo,
}) => {
  return (
    <div className="flex justify-center items-center">
      <Link href={`/company/${blogInfo.alias}`} passHref>
        <a>
          <Avatar image={blogInfo.avatar} />
        </a>
      </Link>
      <div className="flex w-full justify-between items-center pl-2">
        <Link href={`/company/${blogInfo.alias}`} passHref>
          <a className="whitespace-nowrap overflow-hidden text-ellipsis max-w-[25ch]">
            <strong className="text-base font-semibold">{blogInfo.name}</strong>
          </a>
        </Link>
        <span className="text-base font-semibold text-purple-500 pl-1">
          {blogInfo.rate}
        </span>
      </div>
    </div>
  );
};
