import { useArticles } from "@/hooks/articles";
import { useBestBlogs } from "@/hooks/blogs";
import React, { useEffect, useRef, useState } from "react";
import { ReadingNowArticles } from "../Article/ReadingNowArticles";
import { PopularBlogs } from "../Blogs/PopularBlogs";
// @ts-ignore
import trottle from "lodash.throttle";

export const Aside = () => {
  const blogs = useBestBlogs();
  const articles = useArticles();

  const stickTop = "top-0";
  const stickBottom = "bottom-3";
  const asideRef = useRef<HTMLDivElement>(null);
  const [stickStyles, setStickStyles] = useState(stickTop);
  const isBottom = stickStyles === stickBottom;

  useEffect(() => {
    const onScroll = trottle(() => {
      const element = asideRef.current;

      if (!element || !element.offsetParent) return;

      const offset =
        element.getBoundingClientRect().top -
        element.offsetParent.getBoundingClientRect().top;
      const top = window.pageYOffset + window.innerHeight - offset;
      console.log(element.scrollHeight, top, element.clientHeight);

      if (element.scrollHeight - top <= 0) {
        if (stickStyles == stickTop) {
          setStickStyles(stickBottom);
        }
      } else {
        setStickStyles(stickTop);
      }
    }, 100);

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <aside
      className={`flex-col gap-3 hidden self-start lg:flex sticky ${stickStyles}`}
      ref={asideRef}
    >
      <PopularBlogs blogs={blogs} />
      <ReadingNowArticles articles={articles.slice(5)} />
    </aside>
  );
};
