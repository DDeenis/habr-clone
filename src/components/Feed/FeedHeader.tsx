import React from "react";
import { FaCog, FaRss } from "react-icons/fa";
import { Icon } from "../common/Icon";

export const FeedHeader = () => {
  return (
    <div className="w-full bg-white rounded-md py-4 px-5 hidden md:flex justify-between items-center">
      <span className="font-bold text-xl text-gray-800">Моя лента</span>
      <div className="flex gap-6 items-center">
        <Icon icon={<FaRss />} />
        <Icon icon={<FaCog />} />
      </div>
    </div>
  );
};
