import { classnames } from "@/helpers/attributes";
import React from "react";
import { FaChartBar } from "react-icons/fa";

type Props = {
  value: number;
};

export const Rate = ({ value }: Props) => {
  return (
    <div className="flex gap-2 content-center items-center">
      <FaChartBar className="w-4 h-4 fill-gray-400" />
      <span
        className={classnames("text-sm", {
          "text-green-400": value > 0,
          "text-red-600": value < 0,
          "text-gray-400": value === 0,
        })}
      >
        {value > 0 && "+"}
        {value}
      </span>
    </div>
  );
};
