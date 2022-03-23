import { useArticles } from "@/hooks/articles";
import { useBestBlogs } from "@/hooks/blogs";
import { ReadingNowArticles } from "../../Article/ReadingNowArticles";
import { PopularBlogs } from "../../Blogs/PopularBlogs";
import { StickySidebar } from "@/components/common/StickySidebar";

export const Aside = () => {
  const blogs = useBestBlogs();
  const articles = useArticles();

  return (
    <StickySidebar offsetTop={60} offsetBottom={12}>
      <div
        className="hidden lg:flex flex-col gap-3 h-max lg:w-[300px] sticky"
        data-sticky="true"
      >
        <PopularBlogs blogs={blogs} />
        <ReadingNowArticles articles={articles.slice(4)} />
      </div>
    </StickySidebar>
  );
};
