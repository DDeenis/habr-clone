import { classnames } from "@/helpers/attributes";
import Link from "next/link";
import React from "react";
import { FaBookmark, FaChartBar, FaCommentAlt, FaEye } from "react-icons/fa";

interface ArticleStatsProps {
  commentsHref: string;
  rate: number;
  views: number;
  marks: number;
  comments: number;
}

export const ArticleStats = ({
  commentsHref,
  rate,
  views,
  marks,
  comments,
}: ArticleStatsProps) => {
  return (
    <ul className="flex gap-5 justify-between md:justify-start">
      <li className="flex gap-2 content-center items-center">
        <FaChartBar className="w-4 h-4 fill-gray-400" />
        <span
          className={classnames("text-sm", {
            "text-green-400": rate > 0,
            "text-red-600": rate < 0,
            "text-gray-400": rate === 0,
          })}
        >
          {rate > 0 && "+"}
          {rate}
        </span>
      </li>
      <li className="flex gap-2 content-center items-center">
        <FaEye className="w-4 h-4 fill-gray-400" />
        <span className="text-sm text-gray-400">{views}</span>
      </li>
      <li className="flex gap-2 content-center items-center cursor-pointer">
        <FaBookmark className="w-4 h-4 fill-gray-400" />
        <span className="text-sm text-gray-400">{marks}</span>
      </li>
      <li className="cursor-pointer">
        <Link href={commentsHref} passHref>
          <a className="flex gap-2 content-center items-center">
            <FaCommentAlt className="w-4 h-4 fill-gray-400" />
            <span className="text-sm text-gray-400">{comments}</span>
          </a>
        </Link>
      </li>
    </ul>
  );
};
