import React, { useEffect, useState } from "react";
import { CgChevronUpO } from "react-icons/cg";

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
      className="hidden xl:block fixed top-0 left-0 h-screen px-5 hover:bg-gray-300/50 transition-colors duration-300 scroll-top-btn z-0"
      onClick={scrollTop}
    >
      <CgChevronUpO className="w-7 h-7" />
    </button>
  ) : null;
};
