import React from "react";
import { BlogMinInfo } from "@/types/blogs";
import { Avatar } from "../common/Avatar";
import { Link } from "react-router-dom";

export const BlogLabel: React.FC<{ blogInfo: BlogMinInfo }> = ({
  blogInfo,
}) => {
  const companyHref = `/company/${blogInfo.alias}`;

  return (
    <div className="flex justify-center items-center">
      <Link to={companyHref}>
        <Avatar image={blogInfo.avatar} size="lg" />
      </Link>
      <div className="flex w-full justify-between items-center pl-2">
        <Link
          to={companyHref}
          className="overflow-hidden text-ellipsis break-words max-w-[18ch]" // whitespace-nowrap
        >
          <strong className="text-[0.8125rem] font-semibold">
            {blogInfo.name}
          </strong>
        </Link>
        <span className="text-[0.8125rem] font-semibold text-pink-500 pl-1">
          {blogInfo.rate}
        </span>
      </div>
    </div>
  );
};
