import React from "react";
import { FaBookmark } from "react-icons/fa";

type Props = {
  value: number;
};

export const Marks = ({ value }: Props) => {
  return (
    <div className="flex gap-2 content-center items-center cursor-pointer">
      <FaBookmark className="w-4 h-4 fill-gray-400" />
      <span className="text-sm text-gray-400">{value}</span>
    </div>
  );
};
