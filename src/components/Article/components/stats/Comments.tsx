import React from "react";
import { FaCommentAlt } from "react-icons/fa";

type Props = {
  value: number;
  href: string;
};

export const Comments = ({ value, href }: Props) => {
  return (
    <li className="cursor-pointer">
      <a href={href} className="flex gap-2 content-center items-center">
        <FaCommentAlt className="w-4 h-4 fill-gray-400" />
        <span className="text-sm text-gray-400">{value}</span>
      </a>
    </li>
  );
};
