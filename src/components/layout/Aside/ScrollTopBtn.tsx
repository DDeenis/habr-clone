import { classnames } from "@/helpers/attributes";
import React, { useEffect, useState } from "react";
import { FaChevronCircleUp } from "react-icons/fa";

export const ScrollTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= window.innerHeight / 2) {
        setIsVisible(true);
      } else if (!isVisible) {
        setIsVisible(false);
      }
    };

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0 });

  return isVisible ? (
    <button
      className="hidden xl:block fixed top-0 h-screen px-5 hover:bg-gray-200 transition-colors"
      onClick={scrollTop}
    >
      <FaChevronCircleUp className="w-7 h-7 fill-gray-400" />
    </button>
  ) : null;
};
