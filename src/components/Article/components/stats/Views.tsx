import React from "react";
import { FaEye } from "react-icons/fa";

type Props = {
  value: number;
};

export const Views = ({ value }: Props) => {
  return (
    <div className="flex gap-2 content-center items-center">
      <FaEye className="w-4 h-4 fill-gray-400" />
      <span className="text-sm text-gray-400">{value}</span>
    </div>
  );
};
