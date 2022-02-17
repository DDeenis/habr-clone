import { useArticles } from "@/hooks/articles";
import { useBestBlogs } from "@/hooks/blogs";
import { useEffect } from "react";
import { ReadingNowArticles } from "../Article/ReadingNowArticles";
import { PopularBlogs } from "../Blogs/PopularBlogs";
import { useStickySidebar } from "@/hooks/stickySidebar";

export const Aside = () => {
  const blogs = useBestBlogs();
  const articles = useArticles();
  const stickySidebar = useStickySidebar({ offsetTop: 60, offsetBottom: 12 });

  useEffect(() => {
    const unsubscribe = stickySidebar();

    return () => unsubscribe?.();
  }, []);

  return (
    <aside
      className="hidden lg:flex flex-col gap-3 h-max lg:max-w-sm sticky"
      data-sticky="true"
    >
      <PopularBlogs blogs={blogs} />
      <ReadingNowArticles articles={articles.slice(5)} />
    </aside>
  );
};
