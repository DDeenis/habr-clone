import React from "react";
import { FaChevronCircleUp } from "react-icons/fa";

export const ScrollTopBtn = () => {
  const scrollTop = () => window.scrollTo({ top: 0 });

  return (
    <button
      className="hidden xl:block fixed top-0 h-screen px-5 hover:bg-gray-200 transition-colors"
      onClick={scrollTop}
    >
      <FaChevronCircleUp className="w-7 h-7 fill-gray-400" />
    </button>
  );
};
