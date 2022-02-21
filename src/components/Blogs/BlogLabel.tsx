import React from "react";
import { BlogMinInfo } from "@/types/blogs";
import { Avatar } from "../common/Avatar";

export const BlogLabel: React.FC<{ blogInfo: BlogMinInfo }> = ({
  blogInfo,
}) => {
  const companyHref = `/company/${blogInfo.alias}`;

  return (
    <div className="flex justify-center items-center">
      <a href={companyHref}>
        <Avatar image={blogInfo.avatar} size="lg" />
      </a>
      <div className="flex w-full justify-between items-center pl-2">
        <a
          href={companyHref}
          className="overflow-hidden text-ellipsis break-words max-w-[18ch]" // whitespace-nowrap
        >
          <strong className="text-[0.8125rem] font-semibold">
            {blogInfo.name}
          </strong>
        </a>
        <span className="text-[0.8125rem] font-semibold text-pink-500 pl-1">
          {blogInfo.rate}
        </span>
      </div>
    </div>
  );
};
