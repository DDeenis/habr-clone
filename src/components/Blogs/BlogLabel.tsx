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
        <Avatar image={blogInfo.avatar} />
      </a>
      <div className="flex w-full justify-between items-center pl-2">
        <a
          href={companyHref}
          className="whitespace-nowrap overflow-hidden text-ellipsis max-w-[20ch]"
        >
          <strong className="text-base font-semibold">{blogInfo.name}</strong>
        </a>
        <span className="text-base font-semibold text-purple-500 pl-1">
          {blogInfo.rate}
        </span>
      </div>
    </div>
  );
};
