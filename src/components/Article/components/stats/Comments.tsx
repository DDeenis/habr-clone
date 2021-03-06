import React from "react";
import { FaCommentAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

type Props = {
  value: number;
  href: string;
};

export const Comments = ({ value, href }: Props) => {
  return (
    <div className="cursor-pointer">
      <Link to={href} className="flex gap-2 content-center items-center">
        <FaCommentAlt className="w-4 h-4 fill-gray-400" />
        <span className="text-sm text-gray-400">{value}</span>
      </Link>
    </div>
  );
};
